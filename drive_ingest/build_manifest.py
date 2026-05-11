#!/usr/bin/env python3
"""Build a no-OAuth Drive manifest from connector export JSON files.

The script never contacts Google. It reads JSON files in
`drive_ingest/connector_exports/` and merges folder/file records into
`drive_ingest/manifest.json`.

Accepted input shapes:
- {"root": {...}, "files": [...]} from a list_folder-like export
- {"files": [...]} from a list_folder-like export
- {"results": [...]} from a search-like export
- a plain list of file records
"""

from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, Iterable, List


BASE = Path(__file__).resolve().parent
EXPORTS = BASE / "connector_exports"
MANIFEST = BASE / "manifest.json"

SECIL_ROOT_ID = "1GO2qzKalnhY1YuHjYk4gCkxKtLhgdfo7"
SECIL_ROOT_TITLE = "SECIL BI2026 HAZIRAN"
SECIL_ROOT_URL = f"https://drive.google.com/drive/folders/{SECIL_ROOT_ID}"


def utc_now() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="seconds").replace("+00:00", "Z")


def load_json(path: Path) -> Any:
    with path.open(encoding="utf-8") as fh:
        return json.load(fh)


def records_from_payload(payload: Any) -> List[Dict[str, Any]]:
    if isinstance(payload, list):
        return [x for x in payload if isinstance(x, dict)]
    if not isinstance(payload, dict):
        return []
    for key in ("files", "results", "items"):
        value = payload.get(key)
        if isinstance(value, list):
            return [x for x in value if isinstance(x, dict)]
    if "id" in payload and ("title" in payload or "name" in payload):
        return [payload]
    return []


def listed_folder_from_payload(payload: Any) -> Dict[str, Any] | None:
    if not isinstance(payload, dict):
        return None
    root = payload.get("root") or payload.get("folder")
    if not isinstance(root, dict):
        return None
    file_id = root.get("id") or root.get("fileId")
    title = root.get("title") or root.get("name")
    if not file_id:
        return None
    return {
        "id": file_id,
        "title": title or file_id,
        "mime_type": "application/vnd.google-apps.folder",
        "url": root.get("url") or f"https://drive.google.com/drive/folders/{file_id}",
        "file_or_folder": "folder",
        "parent_path": root.get("parent_path") or root.get("path") or "",
        "created_time": root.get("created_time"),
        "modified_time": root.get("modified_time"),
        "status": "folder_listed",
        "notes": root.get("notes") or "Folder listing captured from connector export.",
    }


def normalize_record(record: Dict[str, Any], export_path: Path) -> Dict[str, Any]:
    file_id = record.get("id") or record.get("fileId")
    title = record.get("title") or record.get("name") or record.get("display_title") or file_id
    mime_type = record.get("mime_type") or record.get("mimeType") or ""
    url = record.get("url") or record.get("display_url") or ""
    kind = record.get("file_or_folder")
    if not kind:
        kind = "folder" if mime_type == "application/vnd.google-apps.folder" else "file"

    parent_path = record.get("parent_path") or record.get("path") or ""
    if parent_path and title and not str(parent_path).endswith(str(title)):
        path = f"{parent_path.rstrip('/')} / {title}"
    elif parent_path:
        path = str(parent_path)
    else:
        path = f"{SECIL_ROOT_TITLE} / {title}" if file_id != SECIL_ROOT_ID else SECIL_ROOT_TITLE

    return {
        "id": file_id,
        "title": title,
        "mime_type": mime_type,
        "url": url,
        "kind": kind,
        "path": path,
        "created_time": record.get("created_time") or record.get("created_at"),
        "modified_time": record.get("modified_time") or record.get("updated_at"),
        "parent_ids": record.get("parent_ids"),
        "source_export": str(export_path.relative_to(BASE)),
        "status": record.get("status") or infer_initial_status(kind, mime_type, title),
        "notes": record.get("notes") or "",
    }


def infer_initial_status(kind: str, mime_type: str, title: str) -> str:
    lower = (title or "").lower()
    if kind == "folder":
        return "folder_needs_listing"
    if lower.endswith((".jpg", ".jpeg", ".png", ".heic", ".webp")) or mime_type.startswith("image/"):
        return "needs_ocr"
    if lower.endswith(".zip") or mime_type in {"application/zip", "application/x-zip-compressed"}:
        return "needs_extraction"
    if "pdf" in mime_type or lower.endswith(".pdf"):
        return "needs_text_or_ocr"
    if lower.endswith((".docx", ".doc", ".rtf")) or "document" in mime_type:
        return "needs_text_extraction"
    return "not_started"


STATUS_PRIORITY = {
    "not_started": 0,
    "folder_needs_listing": 1,
    "needs_extraction": 1,
    "needs_text_extraction": 1,
    "needs_text_or_ocr": 1,
    "needs_ocr": 1,
    "folder_listed": 2,
    "raw_captured": 3,
    "normalized": 4,
    "verified": 5,
}


def merge_records(existing: Dict[str, Any], incoming: Dict[str, Any]) -> Dict[str, Any]:
    merged = {**existing, **{k: v for k, v in incoming.items() if v not in (None, "")}}
    existing_status = existing.get("status")
    incoming_status = incoming.get("status")
    if existing_status and incoming_status:
        existing_priority = STATUS_PRIORITY.get(existing_status, 0)
        incoming_priority = STATUS_PRIORITY.get(incoming_status, 0)
        merged["status"] = incoming_status if incoming_priority >= existing_priority else existing_status
    return merged


def load_existing_manifest() -> Dict[str, Any]:
    if MANIFEST.exists():
        return load_json(MANIFEST)
    return {
        "root": {
            "id": SECIL_ROOT_ID,
            "title": SECIL_ROOT_TITLE,
            "url": SECIL_ROOT_URL,
        },
        "generated_at": None,
        "items": [],
    }


def iter_export_files() -> Iterable[Path]:
    if not EXPORTS.exists():
        return []
    return sorted(p for p in EXPORTS.glob("*.json") if p.name != "README.json")


def main() -> None:
    manifest = load_existing_manifest()
    by_id: Dict[str, Dict[str, Any]] = {
        item["id"]: item for item in manifest.get("items", []) if item.get("id")
    }

    # Ensure root exists as an item too, so coverage can account for it.
    by_id.setdefault(
        SECIL_ROOT_ID,
        {
            "id": SECIL_ROOT_ID,
            "title": SECIL_ROOT_TITLE,
            "mime_type": "application/vnd.google-apps.folder",
            "url": SECIL_ROOT_URL,
            "kind": "folder",
            "path": SECIL_ROOT_TITLE,
            "created_time": None,
            "modified_time": None,
            "parent_ids": None,
            "source_export": "seed",
            "status": "folder_listed",
            "notes": "SECIL root folder",
        },
    )

    loaded_exports = []
    for export_path in iter_export_files():
        payload = load_json(export_path)
        records = records_from_payload(payload)
        loaded_exports.append({"file": str(export_path.relative_to(BASE)), "records": len(records)})
        listed_folder = listed_folder_from_payload(payload)
        if listed_folder:
            normalized_folder = normalize_record(listed_folder, export_path)
            existing_folder = by_id.get(normalized_folder["id"], {})
            by_id[normalized_folder["id"]] = merge_records(existing_folder, normalized_folder)
        for record in records:
            normalized = normalize_record(record, export_path)
            if not normalized.get("id"):
                continue
            existing = by_id.get(normalized["id"], {})
            by_id[normalized["id"]] = merge_records(existing, normalized)

    items = sorted(by_id.values(), key=lambda x: (x.get("path") or "", x.get("title") or ""))
    manifest = {
        "root": {
            "id": SECIL_ROOT_ID,
            "title": SECIL_ROOT_TITLE,
            "url": SECIL_ROOT_URL,
        },
        "generated_at": utc_now(),
        "source": "No-OAuth connector export manifest",
        "loaded_exports": loaded_exports,
        "items": items,
    }
    MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {MANIFEST.relative_to(BASE.parent)} with {len(items)} items from {len(loaded_exports)} exports")


if __name__ == "__main__":
    main()
