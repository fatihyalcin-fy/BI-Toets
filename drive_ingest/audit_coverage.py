#!/usr/bin/env python3
"""Create coverage report from manifest, raw evidence, and normalized records."""

from __future__ import annotations

import json
from collections import Counter, defaultdict
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, Iterable, List


BASE = Path(__file__).resolve().parent
MANIFEST = BASE / "manifest.json"
RAW = BASE / "raw"
NORMALIZED = BASE / "normalized"
REPORTS = BASE / "reports"
COVERAGE = REPORTS / "coverage.md"


def utc_now() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="seconds").replace("+00:00", "Z")


def load_json(path: Path) -> Dict[str, Any]:
    if not path.exists():
        return {}
    return json.loads(path.read_text(encoding="utf-8"))


def read_jsonl(path: Path) -> Iterable[Dict[str, Any]]:
    if not path.exists():
        return []
    rows: List[Dict[str, Any]] = []
    for line_no, line in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        try:
            rows.append(json.loads(line))
        except json.JSONDecodeError as exc:
            rows.append({"_error": f"{path.name}:{line_no}: {exc}", "sourceFileId": None})
    return rows


def evidence_counts(file_id: str) -> Dict[str, int]:
    folder = RAW / file_id
    if not folder.exists():
        return {"files": 0, "text": 0, "ocr": 0}
    files = [p for p in folder.rglob("*") if p.is_file()]
    return {
        "files": len(files),
        "text": sum(1 for p in files if p.suffix.lower() in {".txt", ".md"}),
        "ocr": sum(1 for p in files if "ocr" in p.name.lower()),
    }


def main() -> None:
    REPORTS.mkdir(parents=True, exist_ok=True)
    manifest = load_json(MANIFEST)
    items = manifest.get("items", [])

    normalized_files = {
        "questions": NORMALIZED / "questions.jsonl",
        "casus": NORMALIZED / "casus.jsonl",
        "notes": NORMALIZED / "notes.jsonl",
        "glossary": NORMALIZED / "glossary.jsonl",
    }

    records_by_file: Dict[str, Counter] = defaultdict(Counter)
    parse_errors: List[str] = []
    total_records = Counter()

    for kind, path in normalized_files.items():
        for record in read_jsonl(path):
            if "_error" in record:
                parse_errors.append(record["_error"])
                continue
            source_id = record.get("sourceFileId") or record.get("source_file_id")
            if source_id:
                records_by_file[source_id][kind] += 1
            total_records[kind] += 1

    status_counts = Counter(item.get("status") or "unknown" for item in items)
    kind_counts = Counter(item.get("kind") or "unknown" for item in items)
    mime_counts = Counter(item.get("mime_type") or "unknown" for item in items)

    lines = [
        "# Drive Ingestion Coverage",
        "",
        f"Generated: `{utc_now()}`",
        f"Manifest: `{MANIFEST.name}`",
        "",
        "## Totals",
        "",
        f"- Manifest items: {len(items)}",
        f"- Folders: {kind_counts.get('folder', 0)}",
        f"- Files: {kind_counts.get('file', 0)}",
        f"- Normalized questions: {total_records['questions']}",
        f"- Normalized casus: {total_records['casus']}",
        f"- Normalized notes: {total_records['notes']}",
        f"- Normalized glossary: {total_records['glossary']}",
        "",
        "## Status Counts",
        "",
    ]
    for status, count in sorted(status_counts.items()):
        lines.append(f"- `{status}`: {count}")

    lines.extend(["", "## MIME Counts", ""])
    for mime, count in sorted(mime_counts.items()):
        lines.append(f"- `{mime}`: {count}")

    if parse_errors:
        lines.extend(["", "## JSONL Parse Errors", ""])
        lines.extend(f"- {err}" for err in parse_errors)

    lines.extend(
        [
            "",
            "## File Coverage",
            "",
            "| Status | Kind | Title | Path | Evidence | Q | Casus | Notes | Glossary |",
            "| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: |",
        ]
    )

    for item in items:
        file_id = item.get("id", "")
        rec_counts = records_by_file[file_id]
        ev = evidence_counts(file_id)
        evidence_total = ev["files"]
        lines.append(
            "| {status} | {kind} | {title} | {path} | {evidence} | {q} | {casus} | {notes} | {glossary} |".format(
                status=item.get("status") or "",
                kind=item.get("kind") or "",
                title=(item.get("title") or "").replace("|", "\\|"),
                path=(item.get("path") or "").replace("|", "\\|"),
                evidence=evidence_total,
                q=rec_counts["questions"],
                casus=rec_counts["casus"],
                notes=rec_counts["notes"],
                glossary=rec_counts["glossary"],
            )
        )

    COVERAGE.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"Wrote {COVERAGE.relative_to(BASE.parent)}")


if __name__ == "__main__":
    main()

