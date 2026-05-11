# Drive Ingestion Plan

Goal: make `SECIL BI2026 HAZIRAN` the source of truth and rebuild the site content from Drive with traceable coverage, not manual one-off copy/paste.

Root candidate found in Drive:

- `SECIL BI2026 HAZIRAN`
- Folder ID: `1GO2qzKalnhY1YuHjYk4gCkxKtLhgdfo7`
- Important child folders already visible: `THK1`, `THK2`, `CIKMIS SORULAR`, `BASIS MEDISCH`, `CASUS ENDO-PIJN EN TRAUMA`, `BEHANDELPLAN 1`, `BEHANDELPLAN 2`, `RADYOLOJI`, `STATISTIEK`, `EBM-PICO-Methodologie`, `Etik`, `Richtlijnen`, `ACTA Tentamen voorbeeld vragen`, screenshots/images.

## Why The Current Structure Is Not Enough

The current site works, but it stores Drive-derived content directly in JavaScript files:

- `data_drive_imported.js` for MC questions
- `data_drive_casus.js` for open/casus questions
- `data_drive_notes.js` for study notes

That is fine for display, but weak for completeness because we cannot prove which Drive file, page, image, or paragraph produced each item. Missing items are hard to detect.

## Target Structure

Use a two-layer system:

1. Raw extracted source layer
2. Generated site layer

Recommended folders:

```text
BI-Toets/
  drive_ingest/
    manifest.json
    raw/
      <file-id>/
        metadata.json
        original.<ext>
        extracted_text.md
        ocr_page_001.txt
        ocr_page_001.png
    normalized/
      questions.jsonl
      casus.jsonl
      notes.jsonl
      glossary.jsonl
    reports/
      coverage.md
      unmatched_sources.md
      duplicates.md
  data_generated/
    data_drive_questions.generated.js
    data_drive_casus.generated.js
    data_drive_notes.generated.js
```

The browser should still load JS, but those JS files should be generated from structured JSONL. Manual edits then happen in review files, not directly inside the final output.

## Data Model

Every extracted item should carry evidence.

Question record:

```json
{
  "id": "drive_<fileId>_p12_q03",
  "type": "mc",
  "subject": "basis",
  "exam": "THK1",
  "sourceFileId": "...",
  "sourceTitle": "...",
  "sourcePath": "SECIL BI2026 HAZIRAN / BASIS MEDISCH / ...",
  "page": 12,
  "questionText": "...",
  "options": ["..."],
  "correctAnswer": "...",
  "explanation": "...",
  "confidence": 0.92,
  "needsReview": false,
  "rawEvidence": "short excerpt or OCR block"
}
```

Casus record:

```json
{
  "id": "drive_<fileId>_casus_04",
  "type": "casus",
  "group": "endo_trauma",
  "sourceFileId": "...",
  "sourceTitle": "...",
  "text": "...",
  "questions": [
    {"q": "...", "a": "...", "confidence": 0.88}
  ],
  "imageRefs": ["ocr_page_003.png"],
  "needsReview": false
}
```

Study-note record:

```json
{
  "id": "note_<subject>_<slug>",
  "subject": "basis",
  "title": "...",
  "points": ["..."],
  "sourceFileIds": ["..."],
  "coverage": ["page 3", "image 2025-12-16"]
}
```

## Extraction Pipeline

1. Crawl Drive recursively
   - Start at `SECIL BI2026 HAZIRAN`.
   - Store every file/folder in `manifest.json`.
   - Include ID, title, MIME type, created/modified time, path, and checksum if available.

2. Download/export all content
   - Google Docs: export as `text/markdown` or `.docx`.
   - Google Sheets: export ranges/CSV if any.
   - Google Slides: export text plus thumbnails.
   - PDFs: download raw.
   - Images/screenshots/WhatsApp photos: download raw.
   - ZIPs: download and extract locally.

3. Text extraction
   - Native text PDFs: use `pdftotext` or `pymupdf`.
   - DOCX: use `python-docx` or Pandoc.
   - RTF: use `textutil` on macOS or Pandoc.
   - Images/scans: OCR.
   - PDFs with image pages: render each page and OCR.

4. OCR strategy
   - Local first: `tesseract` with `nld+eng+tur`, optionally Arabic if WhatsApp notes include Arabic.
   - Better fallback: vision model OCR for low-quality WhatsApp images and screenshots.
   - Store OCR text beside the image/page, never only in final JS.

5. Normalize into educational records
   - Detect MC questions, true/false, short-answer questions, casus blocks, answer keys, and highlighted answers.
   - Map to subject using path and keywords.
   - Keep confidence and `needsReview` for uncertain items.

6. Generate site data
   - Build `data_drive_questions.generated.js`.
   - Build `data_drive_casus.generated.js`.
   - Build `data_drive_notes.generated.js`.
   - Do not manually write generated files except through the pipeline.

7. Coverage audit
   - Every Drive file should be one of:
     - `fully extracted`
     - `duplicate`
     - `not exam relevant`
     - `needs OCR`
     - `needs manual answer review`
   - Coverage report must show extracted item counts per file.

## No-OAuth Connector Approach

We are not putting Google OAuth into this repo. Drive access stays outside the
codebase through the connected Google Drive connector in the Codex session.
The repo stores connector exports, extracted evidence, normalized records, and
generated site data.

This keeps credentials and Google tokens out of the project while still giving
us a repeatable audit trail.

Connector output is saved under:

```text
drive_ingest/connector_exports/
```

The local scripts then work only with local JSON, raw files, OCR text, and
normalized JSONL. They do not call Google.

## Implemented No-OAuth Scripts

- `drive_ingest/build_manifest.py`
  - Reads `drive_ingest/connector_exports/*.json`.
  - Produces `drive_ingest/manifest.json`.
  - Marks folders as `folder_needs_listing`.
  - Marks images as `needs_ocr`, PDFs as `needs_text_or_ocr`, DOCX/RTF as `needs_text_extraction`, ZIPs as `needs_extraction`.

- `drive_ingest/audit_coverage.py`
  - Reads `manifest.json`, `raw/<file_id>/`, and normalized JSONL files.
  - Produces `drive_ingest/reports/coverage.md`.

- `drive_ingest/generate_site_data.py`
  - Reads normalized JSONL.
  - Produces:
    - `data_generated/data_drive_questions.generated.js`
    - `data_generated/data_drive_casus.generated.js`
    - `data_generated/data_drive_notes.generated.js`

## Incremental Sync

Without OAuth, incremental sync is manual but still auditable:

- Add a new connector export JSON for a folder or updated search/list result.
- Re-run `python3 drive_ingest/build_manifest.py`.
- Re-run extraction/normalization for changed files.
- Re-run generated site data and coverage.

This avoids re-OCRing the whole Drive unless the manifest shows a file changed
or a new file appeared.

## Completeness Checks

Before saying "complete", require:

- `manifest.json` lists every file recursively under SECIL root.
- `coverage.md` has no unprocessed file except explicitly ignored non-exam material.
- Every image/scanned PDF page has OCR text.
- Every extracted question has source file ID and page/image reference.
- Every uncertain answer is marked `needsReview`.
- Duplicate detection has run across question text similarity.
- Site data count equals normalized question/casus count.

## Current Connector Export Progress

As of 2026-05-11, the no-OAuth connector inventory has been expanded to:

- `drive_ingest/connector_exports/`: 68 exported folder listings
- `drive_ingest/manifest.json`: 1432 Drive items
- `drive_ingest/reports/coverage.md`: current coverage report
- Listed folders: SECIL root, THK1, THK2, BASIS MEDISCH, CASUS ENDO-PIJN EN TRAUMA,
  BEHANDELPLAN 1, BEHANDELPLAN 2, CIKMIS SORULAR, CIKMIS year folders
  2018-2022/2024/2025, and the first high-risk BEHANDELPLAN 2 casus folders
  (`Casus kindercasus`, `casus implantaat`, `Casus slijtage`, `Casus paro`).
  Additional listed areas now include CIKMIS 2023, 2025 December Basis Medisch,
  2025 December Kort behandelplan, BEHANDELPLAN 2 Casus endo, BEHANDELPLAN 1
  Casuslar, BASIS MEDISCH Sorular/FOTO, STATISTIEK, Etik, THK1 Speeksel,
  THK2 KINESIOLOGIE, THK2 MKA, THK2 Orto, THK2 Implantologie,
  THK2 Protez, THK2 schisis, THK2 Implantologie/Soru, THK2 Orto/Soru,
  THK1 Endodontie, THK1 Parodontologie, THK1 Endodontie/Sorular,
  THK1 Endodontie/Casus, THK1 Parodontologie/Soru, STATISTIEK/Soru,
  THK1 Cario, THK1 Kinder tandheelkunde, RADYOLOJI, RADYOLOJI/Soru,
  RADYOLOJI/FOTO, THK1 Cario/Sorular, THK2 KINESIOLOGIE/Soru,
  THK2 KINESIOLOGIE/canvas, ACTA Tentamen voorbeeld vragen,
  BEHANDELPLAN 2 Casus cariologie, BEHANDELPLAN 2 Casus frame,
  BEHANDELPLAN 2 Casus endo/ENDO.BEHANDELING PLAN - ARAPLARDAN and its
  nested Untitled folder, BEHANDELPLAN 2 Casus kindercasus/ARAPLARDAN,
  CASUS ENDO-PIJN EN TRAUMA/Canvas pijn en trauma Secil, its nested Canvas
  Voorbeeld Casus, CASUS ENDO-PIJN EN TRAUMA/travma rehberleri,
  BASIS MEDISCH/Microbiologie, BEHANDELPLAN 1 Canvas_Zorgplanning,
  EBM-PICO-Methodologie, EBM-PICO-Methodologie/Soru,
  STATISTIEK/Canvas, and THK1 Endodontie/Canvas slaytları.

The generated site-data files are wired into `index.html`, but they are still
empty because the current phase is inventory/coverage. Content extraction and
normalization start after remaining folders are listed or explicitly ignored.

Current coverage snapshot:

- Manifest items: 1432
- Folders: 90
- Files: 1342
- `folder_listed`: 68
- `folder_needs_listing`: 22
- `needs_text_or_ocr`: 755
- `needs_text_extraction`: 213
- `needs_ocr`: 363
- `needs_extraction`: 3

## Practical Next Build Step

Continue recursively listing remaining SECIL child folders through the Drive
connector and save each list as a connector export JSON. Highest priority:

```text
SECIL BI2026 HAZIRAN / RADYOLOJI / FOTO / Mandibulae_Canvas COO_ONEMLI
SECIL BI2026 HAZIRAN / RADYOLOJI / FOTO / Maxilla_Canvas COO_ONEMLI
SECIL BI2026 HAZIRAN / THK1 / Parodontologie / FOTO
SECIL BI2026 HAZIRAN / THK1 / Slijtage
SECIL BI2026 HAZIRAN / THK2 / KINESIOLOGIE / FOTO_Bruxisme
SECIL BI2026 HAZIRAN / THK2 / KINESIOLOGIE / FOTO_TMD-Diagnostiek-Behandeling
SECIL BI2026 HAZIRAN / THK2 / KINESIOLOGIE / FOTO_TMD-functiestoornissen
SECIL BI2026 HAZIRAN / THK2 / MKA / Locale Anesthesie
SECIL BI2026 HAZIRAN / THK2 / Protez / Kron brug
SECIL BI2026 HAZIRAN / THK2 / Protez / Uitneembare prothese
SECIL BI2026 HAZIRAN / Vaka 1- Behandelplan
```

Then run:

```bash
cd BI-Toets
python3 drive_ingest/build_manifest.py
python3 drive_ingest/audit_coverage.py
```

Only after coverage is high enough should `index.html` rely on generated files
as the main source. Until then, keep the current hand-maintained Drive files as
fallback.
