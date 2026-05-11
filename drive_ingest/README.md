# Drive Ingest

No-OAuth ingestion workspace for `SECIL BI2026 HAZIRAN`.

This directory does not authenticate to Google Drive. Drive access stays outside
the repo through the connected Drive connector. The repo stores extracted
evidence, normalized records, generated site data, and coverage reports.

## Folders

- `connector_exports/` - JSON exports copied from Drive connector calls such as folder listings or fetched file metadata.
- `raw/` - per-file extracted text/OCR/raw evidence.
- `normalized/` - reviewed JSONL records used to generate site data.
- `reports/` - coverage and duplicate/audit reports.

## Workflow

1. Add connector folder listing JSON files to `connector_exports/`.
2. Build or update `manifest.json`:

   ```bash
   python3 drive_ingest/build_manifest.py
   ```

3. Put extracted text/OCR under `raw/<file_id>/`.
4. Add normalized items to:

   - `normalized/questions.jsonl`
   - `normalized/casus.jsonl`
   - `normalized/notes.jsonl`
   - `normalized/glossary.jsonl`

5. Generate site data:

   ```bash
   python3 drive_ingest/generate_site_data.py
   ```

6. Generate coverage:

   ```bash
   python3 drive_ingest/audit_coverage.py
   ```

## Status Terms

- `fully_extracted` - text/OCR and normalized records exist, no review flag.
- `partially_extracted` - some evidence exists, but more pages/files or answer review remain.
- `needs_ocr` - image/scanned content needs OCR.
- `needs_manual_review` - content exists but answer/casus mapping is uncertain.
- `duplicate` - source overlaps another mapped file.
- `not_exam_relevant` - intentionally excluded.
- `not_started` - listed in manifest but not processed.

