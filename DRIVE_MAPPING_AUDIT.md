# Drive Mapping Audit

Audit date: 2026-05-11

Root folder: `CIKMIS SORULAR`

## Status Legend

- `mapped` - content is represented in `window.QUIZZES`.
- `partially mapped` - readable content has been imported, but duplicates/images/ambiguous answer keys still need manual review.
- `needs OCR` - source is JPEG/scanned PDF/ZIP and cannot be guaranteed without OCR or extraction.
- `duplicate/source bundle` - appears to overlap with another imported file.

## Site Totals After Latest Mapping

- Total quiz sets: generated from `data_*.js`
- Total questions: generated from `data_*.js`
- Main imported file: `data_drive_imported.js`
- Casus imported file: `data_drive_casus.js`
- Topic notes file: `data_drive_notes.js`

## Folder/File Mapping

| Drive area | File | Site prefix/status |
| --- | --- | --- |
| Root | `Perio cikmislar.pdf` | `paro_cikmis_*` mapped |
| Root | `Endo cikmislar.pdf` | `endo_cikmis_*` mapped |
| Root | `Pedo cikmislar.pdf` | `pedo_cikmis_*` mapped |
| Root | `Speeksel cikmislar.pdf` | `speeksel_cikmis_*` mapped |
| Root | `BASIS MEDISCH 2020-2025.pdf` | `basis_cikmis_*` partially mapped |
| Root | `Casusen vanaf 2018 (1).pdf` | `data_drive_casus.js` mapped into `Korte Casus`, `Behandelplan 1`, `Behandelplan 2` |
| Root | `-_ BI 2020 jun - Radiologie, Statistiek en Methodologie (1).pdf` | `radio_cikmis_2020_juni_drive`, `statistiek_cikmis_2020_juni_drive` mapped from readable DOCX twin |
| Root | `2025-thk2 Dec.rtf` | partially mapped through THK2 Drive sets; needs answer-key review |
| 2025 Juni | `THK1 2025 Juni.pdf` | `thk1_*` and subject cikmis sets mapped |
| 2025 Juni | `2025 JUNI THK2.pdf` | `kinesio/functie/pato/ortho_cikmis_2025_juni_drive` mapped |
| 2025 Juni | `Ethiek 2025 juni[1].pdf` | `sociale_cikmis_2025_juni_drive` mapped |
| 2025 december | `THK1-2025 DEC.docx` | partially mapped; needs full per-question extraction |
| 2025 december | `THK2-2025 DEC.pdf`, `2025-Dec THK2.rtf`, `2025 December THK2 Part 1.pdf`, `2025 December THK2 Part 2.docx` | partially mapped through THK2 concepts; needs exact answer-key pass |
| 2025 december | `Ethiek.docx` | partially mapped under `sociale_cikmis_*` |
| 2025 december | `casuslar.docx`, `canvas casuslar hepsi.pdf` | `data_drive_casus.js` mapped into `Behandelplan 1`, `Behandelplan 2`, `Endo Trauma & Pijn` |
| 2025 december | WhatsApp images | needs OCR |
| 2025 december / Basis medisch | `BM 2020-2025.pdf`, `BM Dec 2025.docx` | `basis_cikmis_*` partially mapped |
| 2025 december / Basis medisch | WhatsApp images | needs OCR |
| 2025 december / Kort behandelplan | WhatsApp images | needs OCR |
| 2024 JUNI | `2024 JUNI THK 1- VRAGEN*.docx` | subject cikmis sets partially mapped |
| 2024 JUNI | `2024 JUNI THK 2-VRAGEN.docx` | THK2 subject sets partially mapped |
| 2024 JUNI | `2024 JUNI RADIO VRAGEN*.docx` | `radio_cikmis_2024_juni_drive` mapped |
| 2024 JUNI | `2024 JUNI BM.docx` | `basis_cikmis_*` partially mapped |
| 2024 JUNI | `2024 JUNI CASUS 2&3.docx`, `Juni 2024 casussen.docx` | `data_drive_casus.js` mapped into `Korte Casus` and `Endo Trauma & Pijn` |
| 2024 JUNI | `EXTRA-Examens of afgelopende jaren THK-1.pdf`, `EXTRA-THK2_laatste_jaren_zonder_herhaaldvragen[1].pdf` | duplicate/source bundle, partially covered |
| 2023 | `2023 JUNI THK 1 thk2 ve etik tamam...docx` | partially mapped across multiple subject prefixes |
| 2023 | `THK 2 2023 december(+).docx` | partially mapped; needs exact answer-key pass |
| 2023 | `BI JUNI 2023 RADIO*.docx`, `2023 December radio*.docx` | `radio_cikmis_*` partially mapped |
| 2023 | `istatistik december 2023.docx` | `statistiek_cikmis_2023_2024_drive` partially mapped |
| 2023 | `Basis vragen 2023 juni...docx`, `BM 2023.docx` | `basis_cikmis_*` partially mapped |
| 2023 | `korte behandelplan juni en december 2023.pdf` | `data_drive_casus.js` mapped into `Endo Trauma & Pijn`; source also references image-based cases that need OCR |
| 2022 | `THK II juni 2022...docx` | `pato_cikmis_2022_juni_drive`, `functie_cikmis_2022_juni_drive` mapped |
| 2022 | `BI juni th1...pdf`, `THK 1 Dec 2022.docx` | subject cikmis sets partially mapped |
| 2022 | `BI Basis juni 2022...pdf`, `Q- BASIS MET ANTWOORDEN-SON.pdf` | `basis_cikmis_*` partially mapped |
| 2021 | `TH1 en TH2 examen december 2021.docx` | THK1/THK2 concepts partially mapped |
| 2021 | `2021 BI-Statistic.docx` | `statistiek_cikmis_*` partially mapped |
| 2021 | `BI-Radiologie dec 2021*.docx/pdf`, `radiology 2021 .pdf` | `radio_cikmis_*` partially mapped |
| 2021 | `THK II - 2021*.docx/pdf`, `thk2 2021.pdf` | THK2 subject sets partially mapped |
| 2021 | `2021 Dec BI Toets - THK1`, `2021 Juni BI Toets - THK1` | THK1 subject sets partially mapped; ZIP needs extraction |
| 2021 | ZIP files | needs extraction/OCR |
| 2020 | `BI 2020 jun - Radiologie, Statistiek en Methodologie ✅.docx` | `radio_cikmis_2020_juni_drive`, `statistiek_cikmis_2020_juni_drive` mapped |
| 2020 | `BI - JUNI - 2020_HEPSI.pdf`, `THK-2_2020.pdf` | partially mapped through readable duplicates; needs PDF image audit |
| 2020 | `2020_BM_juni✅.docx/pdf`, `Basis-medisch.pdf`, `BI-Basis juni-2020 ✅.pdf` | `basis_cikmis_*` partially mapped |
| 2020 | duplicate `__ANA_ BI 2020...pdf` files | duplicate/source bundle |
| 2019 | `7-BI-basis 2019 december✅.docx`, `Basis medisch 2019` PDFs | `basis_cikmis_*` partially mapped |
| 2019 | `9-BI-th1 2019.pdf`, `2019 thk1.pdf`, `thk1 vragen bi- juni 2019...pdf` | THK1 subject sets partially mapped |
| 2019 | `- 2019 th2 3.pdf`, `13-2019✅ prothese.pdf` | THK2 subject sets partially mapped |
| 2019 | `CNT notities.docx` | notes, not counted as pure cikmis unless question blocks found |
| 2018 | `bi-toets 2018 juli_.docx`, `bi-toets 2018 juli .pdf`, `BI-toets 2018 december...pdf` | partially mapped through older archive concepts |
| 2018 | `BI-th1 2014b.pdf` | older source, not fully imported yet |

## Current Gap

The site now has both a mapped question bank and Drive-aligned study-note layer, but a strict "every question from every Drive file" guarantee still needs:

1. OCR for WhatsApp/JPEG and scanned PDFs.
2. ZIP extraction for archived 2021 files.
3. Exact answer-key normalization for older mixed Dutch/Turkish notes where correct answers are not consistently marked.
4. De-duplication between root PDFs and year-folder duplicates.
