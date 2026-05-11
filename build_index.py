"""
Transforms BI_Toets_Studieplatform.html → index.html
- Replaces embedded <style> with <link href="style.css">
- Adds hamburger button to topbar
- Updates quiz containers to quiz-container-{setId} format
- Replaces old embedded <script> engine with external JS files
- Adds 10-set AI selector for paro/endo/basis/cario
- Adds THK-1 section with 5-set selector
"""

import re

SRC  = 'BI_Toets_Studieplatform.html'
DEST = 'index.html'

with open(SRC, encoding='utf-8') as f:
    html = f.read()

# ── 1. Replace <style>…</style> in <head> ──────────────────────────────────
html = re.sub(r'<style>.*?</style>', '<link rel="stylesheet" href="style.css">',
              html, count=1, flags=re.DOTALL)

# ── 2. Update <meta viewport> if missing ──────────────────────────────────
if 'viewport' not in html:
    html = html.replace('<meta charset="UTF-8">',
                        '<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">')

# ── 3. Add hamburger button inside #topbar ─────────────────────────────────
html = html.replace(
    '<div id="topbar">',
    '<div id="topbar"><button class="hamburger-btn" aria-label="Menu"><span></span><span></span><span></span></button>'
)

# ── 4. Remove ALL old <script> blocks (embedded quiz engine) ───────────────
html = re.sub(r'<script>.*?</script>', '', html, flags=re.DOTALL)

# ── 5. Update quiz containers per section ─────────────────────────────────
# Pattern: <div id="{setId}-score" …></div> … <div id="{setId}-quiz"></div>
# Replace with single: <div id="quiz-container-{setId}"></div>
# Also strip quiz-progress span inside quiz-controls (quiz.js renders its own)

def replace_quiz_block(m):
    set_id = m.group(1)
    return f'<div id="quiz-container-{set_id}"></div>'

# Remove "{setId}-score" divs (quiz.js renders score inside its own container)
html = re.sub(r'<div id="([a-z_]+)-score"[^>]*>\s*</div>', '', html)

# Replace "{setId}-quiz" divs with new container id
html = re.sub(r'<div id="([a-z_]+)-quiz"></div>', replace_quiz_block, html)

# Remove stale progress divs (quiz.js includes its own progress)
html = re.sub(r'<div class="quiz-progress" id="[a-z_]+-progress">[^<]*</div>', '', html)

# ── 6. Fix resetQuiz / startQuiz calls to pass container id ───────────────
# For single-set buttons, pass the container id as second argument
def fix_quiz_calls(m):
    fn   = m.group(1)   # startQuiz or resetQuiz
    sid  = m.group(2)   # e.g. endo_cikmis
    return f"{fn}('{sid}', 'quiz-container-{sid}')"

html = re.sub(r"(startQuiz|resetQuiz)\('([a-z_]+)'\)",
              fix_quiz_calls, html)

# ── 7. Replace single-set oefen tabs for paro/endo/basis/cario with
#       10-set selector using initSetSelector ──────────────────────────────
SET_SELECTOR_SECTIONS = {
    'paro':  ('Parodontologie AI Oefensets', 'paro_ai'),
    'endo':  ('Endodontologie AI Oefensets', 'endo_ai'),
    'basis': ('Basisch-Medisch AI Oefensets', 'basis_ai'),
    'cario': ('Cariologie AI Oefensets', 'cario_ai'),
}

for section, (title, prefix) in SET_SELECTOR_SECTIONS.items():
    # Build replacement tab-content block
    selector_html = f'''  <div class="tab-content" id="{section}-oefen">
    <div class="info-box">
      <div class="info-box-title">🤖 {title} – 10 sets van 10 vragen</div>
      <ul><li>AI-gegenereerde vragen op examen-niveau · antwoorden worden willekeurig geschud</li></ul>
    </div>
    <div id="set-selector-{section}"></div>
    <div id="quiz-container-{section}-ai"></div>
    <script>
      document.addEventListener('DOMContentLoaded', function(){{
        initSetSelector('set-selector-{section}', '{prefix}', 'quiz-container-{section}-ai');
      }});
    </script>
  </div>'''

    # Match and replace old oefen tab-content
    old_pat = (
        rf'<div class="tab-content" id="{section}-oefen">'
        rf'.*?</div>\s*</div>'   # greedy up to last closing div
    )
    # Match oefen tab-content and everything up to (but not including)
    # the page-closing </div> before the next section comment.
    # The page-closing </div> is restored explicitly in the replacement.
    old_pat = rf'(<div class="tab-content" id="{section}-oefen">)(.*?)(</div>\s*\n<!-- ██)'
    html = re.sub(old_pat, selector_html + '\n</div>\n\n<!-- ██', html, count=1, flags=re.DOTALL)

# ── 7b. Replace cikmis tabs that have external multi-set banks ─────────────
CIKMIS_SELECTOR_SECTIONS = {
    'paro':     ('Parodontologie cikmis soru bankası', 'paro_cikmis', 'Parodontologie'),
    'endo':     ('Endodontologie cikmis soru bankası', 'endo_cikmis', 'Endodontologie'),
    'pedo':     ('Pedodontologie cikmis soru bankası', 'pedo_cikmis', 'Pedodontologie'),
    'speeksel': ('Speeksel &amp; Orale Biologie cikmis soru bankası', 'speeksel_cikmis', 'Speeksel'),
    'basis':    ('Basisch-Medisch cikmis soru bankası', 'basis_cikmis', 'Basisch-Medisch'),
    'cario':    ('Cariologie cikmis soru bankası', 'cario_cikmis', 'Cariologie'),
    'kinesio':  ('Kinesiologie / TMD cikmis soru bankası', 'kinesio_cikmis', 'Kinesiologie'),
    'functie':  ('Orale Functieleer / MZK cikmis soru bankası', 'functie_cikmis', 'Functieleer'),
    'pato':     ('Orale Pathologie cikmis soru bankası', 'pato_cikmis', 'Orale Pathologie'),
    'ortho':    ('Orthodontie cikmis soru bankası', 'ortho_cikmis', 'Orthodontie'),
    'radio':    ('Radiologie cikmis soru bankası', 'radio_cikmis', 'Radiologie'),
    'statistiek': ('Statistiek / EBM cikmis soru bankası', 'statistiek_cikmis', 'Statistiek'),
}

for section, (title, prefix, label) in CIKMIS_SELECTOR_SECTIONS.items():
    selector_html = f'''<div class="tab-content" id="{section}-cikmis">
    <div class="info-box">
      <div class="info-box-title">📝 {title}</div>
      <ul><li>Alle beschikbare {label} çıkmış sets · antwoorden worden willekeurig geschud</li></ul>
    </div>
    <div id="set-selector-{section}-cikmis"></div>
    <div id="quiz-container-{section}-cikmis"></div>
    <script>
      document.addEventListener('DOMContentLoaded', function(){{
        initSetSelector('set-selector-{section}-cikmis', '{prefix}', 'quiz-container-{section}-cikmis');
      }});
    </script>'''

    old_pat = rf'<div class="tab-content" id="{section}-cikmis">.*?</div>\s*(?=<(?:!--|div class="tab-content"|/div>))'
    html = re.sub(old_pat, selector_html + '\n  ', html, count=1, flags=re.DOTALL)

# ── 7c. Add Drive casus render targets ────────────────────────────────────
DRIVE_CASUS_TARGETS = {
    '<div class="tab-content" id="bp1-casussen">':
        '<div class="tab-content" id="bp1-casussen">\n    <div id="drive-casus-bp1"></div>',
    '<div class="tab-content active" id="bp2-casussen">':
        '<div class="tab-content active" id="bp2-casussen">\n    <div id="drive-casus-bp2"></div>',
    '<div class="tab-content active" id="casus-casussen">':
        '<div class="tab-content active" id="casus-casussen">\n    <div id="drive-casus-korte"></div>',
    '<div class="tab-content" id="endo_trauma-casussen">':
        '<div class="tab-content" id="endo_trauma-casussen">\n    <div id="drive-casus-endo-trauma"></div>',
}

for old, new in DRIVE_CASUS_TARGETS.items():
    if new not in html:
        html = html.replace(old, new, 1)

# ── 7d. Add Drive topic-note render targets ───────────────────────────────
DRIVE_NOTE_SECTIONS = {
    "paro": "paro-notities",
    "endo": "endo-notities",
    "cario": "cario-notities",
    "pedo": "pedo-notities",
    "speeksel": "speeksel-notities",
    "sociale": "sociale-notities",
    "kinesio": "kinesio-notities",
    "functie": "functie-notities",
    "pato": "pato-notities",
    "ortho": "ortho-notities",
    "basis": "basis-notities",
    "radio": "radio-notities",
    "statistiek": "statistiek-notities",
    "methodologie": "methodologie-notities",
    "bp1": "bp1-notities",
    "bp2": "bp2-casussen",
    "casus": "casus-casussen",
    "endo-trauma": "endo_trauma-notities",
}

for target_name, tab_id in DRIVE_NOTE_SECTIONS.items():
    marker = f'<div id="drive-notes-{target_name}"></div>'
    open_tag = f'<div class="tab-content active" id="{tab_id}">'
    if marker not in html:
        html = html.replace(open_tag, f'{open_tag}\n    {marker}', 1)

# ── 8. Add THK-1 section before closing </div></main> ─────────────────────
THK1_SECTION = '''
<!-- ██████ THK-1 PROEFTENTAMEN ██████ -->
<div class="page" id="page-thk1">
  <div class="section-hdr">
    <div class="section-icon si-blue">📋</div>
    <div><h2>THK-1 Proeftentamen 2025</h2><p>Tandheelkunde I · 70 MC-vragen · Slagingsgrens 80%</p></div>
  </div>
  <div class="info-box" style="margin-bottom:18px">
    <div class="info-box-title">📊 Verdeling THK-1 (Bron: SECIL BI2026 HAZIRAN)</div>
    <ul>
      <li>A. Cariologie – 15 vragen</li>
      <li>B. Endodontologie – 20 vragen</li>
      <li>C. Speeksel &amp; Halitose – 10 vragen</li>
      <li>D. Kindertandheelkunde – 10 vragen</li>
      <li>E. Parodontologie – 15 vragen</li>
    </ul>
  </div>
  <div id="thk1-set-selector"></div>
  <div id="quiz-container-thk1"></div>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      initSetSelector('thk1-set-selector',
        ['thk1_cario','thk1_endo','thk1_speeksel','thk1_pedo','thk1_paro'],
        'quiz-container-thk1');
    });
  </script>
</div>

'''

html = html.replace('  </div><!-- end #content -->\n</main>', THK1_SECTION + '  </div><!-- end #content -->\n</main>')

# ── 9. Add THK-1 nav item to sidebar ──────────────────────────────────────
html = html.replace(
    '<button class="nav-item" onclick="showPage(\'bp1\',this)">',
    '<button class="nav-item" onclick="showPage(\'thk1\',this)">📋 &nbsp;THK-1 Proeftentamen<span class="nav-badge">70 mc</span></button>\n    <button class="nav-item" onclick="showPage(\'bp1\',this)">'
)

# ── 10. Inject all external scripts before </body> ────────────────────────
SCRIPTS = '''
<script src="data_cikmis.js"></script>
<script src="data_cikmis_paro.js"></script>
<script src="data_cikmis_endo.js"></script>
<script src="data_cikmis_pedo.js"></script>
<script src="data_cikmis_speeksel.js"></script>
<script src="data_cikmis_basis.js"></script>
<script src="data_cikmis_2018_2019.js"></script>
<script src="data_cikmis_2020_2021.js"></script>
<script src="data_cikmis_2022_2023.js"></script>
<script src="data_cikmis_2024.js"></script>
<script src="data_cikmis_2025.js"></script>
<script src="data_thk1.js"></script>
<script src="data_drive_imported.js"></script>
<script src="data_drive_notes.js"></script>
<script src="data_drive_casus.js"></script>
<script src="data_ai_paro.js"></script>
<script src="data_ai_endo.js"></script>
<script src="data_ai_basis.js"></script>
<script src="data_ai_cario.js"></script>
<script src="quiz.js"></script>
<script src="app.js"></script>
'''

html = html.replace('</body>', SCRIPTS + '</body>')

# ── 11. Write output ───────────────────────────────────────────────────────
with open(DEST, 'w', encoding='utf-8') as f:
    f.write(html)

print(f'✅  index.html written ({len(html):,} bytes)')
