#!/usr/bin/env python3
"""Generate browser JS data files from normalized JSONL records."""

from __future__ import annotations

import json
import re
from collections import defaultdict
from pathlib import Path
from typing import Any, Dict, Iterable, List


BASE = Path(__file__).resolve().parent
ROOT = BASE.parent
NORMALIZED = BASE / "normalized"
OUT = ROOT / "data_generated"


def read_jsonl(path: Path) -> List[Dict[str, Any]]:
    if not path.exists():
        return []
    rows = []
    for line_no, line in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        try:
            rows.append(json.loads(line))
        except json.JSONDecodeError as exc:
            raise SystemExit(f"{path}:{line_no}: {exc}") from exc
    return rows


def js_string(value: Any) -> str:
    return json.dumps("" if value is None else value, ensure_ascii=False)


def slug(value: str) -> str:
    value = (value or "drive").lower()
    value = re.sub(r"[^a-z0-9]+", "_", value)
    return value.strip("_") or "drive"


def group_questions(records: Iterable[Dict[str, Any]]) -> Dict[str, List[Dict[str, Any]]]:
    groups: Dict[str, List[Dict[str, Any]]] = defaultdict(list)
    for record in records:
        subject = slug(record.get("subject") or "drive")
        exam = slug(record.get("exam") or record.get("sourceTitle") or "source")
        set_id = record.get("setId") or f"{subject}_cikmis_generated_{exam}"
        groups[set_id].append(record)
    return dict(groups)


def write_questions(records: List[Dict[str, Any]]) -> None:
    path = OUT / "data_drive_questions.generated.js"
    groups = group_questions(records)
    lines = [
        "/* Generated from drive_ingest/normalized/questions.jsonl. Do not edit by hand. */",
        "(function(){",
        "  window.QUIZZES = window.QUIZZES || {};",
        "  var sets = {};",
    ]
    for set_id, questions in sorted(groups.items()):
        title = questions[0].get("setTitle") or f"{set_id} · Drive generated"
        lines.append(f"  sets[{js_string(set_id)}] = {{ title: {js_string(title)}, questions: [")
        for q in questions:
            opts = q.get("options") or []
            correct = q.get("correctAnswer") or (opts[0] if opts else "")
            wrong = [x for x in opts if x != correct]
            while len(wrong) < 3:
                wrong.append("Review nodig")
            source = q.get("sourceTitle") or q.get("sourceFileId") or "Drive"
            exp = q.get("explanation") or f"Bron: {source}"
            lines.append(
                "    {q:%s, opts:[%s,%s,%s,%s], exp:%s, sourceFileId:%s},"
                % (
                    js_string(q.get("questionText") or q.get("q")),
                    js_string(correct),
                    js_string(wrong[0]),
                    js_string(wrong[1]),
                    js_string(wrong[2]),
                    js_string(exp),
                    js_string(q.get("sourceFileId")),
                )
            )
        lines.append("  ]};")
    lines.extend(["  Object.assign(window.QUIZZES, sets);", "})();", ""])
    path.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {path.relative_to(ROOT)} with {len(records)} questions in {len(groups)} sets")


def write_casus(records: List[Dict[str, Any]]) -> None:
    path = OUT / "data_drive_casus.generated.js"
    groups: Dict[str, List[Dict[str, Any]]] = defaultdict(list)
    for record in records:
        groups[record.get("group") or "casus"].append(record)

    lines = [
        "/* Generated from drive_ingest/normalized/casus.jsonl. Do not edit by hand. */",
        "(function(){",
        "  window.DRIVE_CASUS = window.DRIVE_CASUS || {};",
    ]
    for group, items in sorted(groups.items()):
        lines.append(f"  window.DRIVE_CASUS[{js_string(group)}] = (window.DRIVE_CASUS[{js_string(group)}] || []).concat([")
        for item in items:
            qas = item.get("questions") or []
            lines.append("    {")
            lines.append(f"      source: {js_string(item.get('sourceTitle') or item.get('sourceFileId'))},")
            lines.append(f"      title: {js_string(item.get('title'))},")
            lines.append(f"      text: {js_string(item.get('text'))},")
            lines.append("      questions: [")
            for qa in qas:
                lines.append(f"        {{q:{js_string(qa.get('q'))}, a:{js_string(qa.get('a'))}}},")
            lines.append("      ]")
            lines.append("    },")
        lines.append("  ]);")
    lines.extend(["})();", ""])
    path.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {path.relative_to(ROOT)} with {len(records)} casus records")


def write_notes(records: List[Dict[str, Any]]) -> None:
    path = OUT / "data_drive_notes.generated.js"
    groups: Dict[str, List[Dict[str, Any]]] = defaultdict(list)
    for record in records:
        groups[record.get("subject") or "basis"].append(record)

    lines = [
        "/* Generated from drive_ingest/normalized/notes.jsonl. Do not edit by hand. */",
        "(function(){",
        "  window.DRIVE_NOTES = window.DRIVE_NOTES || {};",
    ]
    for group, items in sorted(groups.items()):
        lines.append(f"  window.DRIVE_NOTES[{js_string(group)}] = (window.DRIVE_NOTES[{js_string(group)}] || []).concat([")
        for item in items:
            points = item.get("points") or []
            lines.append("    {")
            lines.append(f"      source: {js_string(item.get('sourceTitle') or ', '.join(item.get('sourceFileIds') or []))},")
            lines.append(f"      title: {js_string(item.get('title'))},")
            lines.append("      points: [")
            for point in points:
                lines.append(f"        {js_string(point)},")
            lines.append("      ]")
            lines.append("    },")
        lines.append("  ]);")
    lines.extend(["})();", ""])
    path.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {path.relative_to(ROOT)} with {len(records)} note records")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    questions = read_jsonl(NORMALIZED / "questions.jsonl")
    casus = read_jsonl(NORMALIZED / "casus.jsonl")
    notes = read_jsonl(NORMALIZED / "notes.jsonl")
    write_questions(questions)
    write_casus(casus)
    write_notes(notes)


if __name__ == "__main__":
    main()

