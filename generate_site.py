html = '''<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>BI Toets Studieplatform – BIG Registratie Tandarts</title>
<style>
:root {
  --primary: #2563eb;
  --primary-light: #dbeafe;
  --primary-dark: #1d4ed8;
  --secondary: #7c3aed;
  --secondary-light: #ede9fe;
  --success: #059669;
  --success-light: #d1fae5;
  --warning: #d97706;
  --warning-light: #fef3c7;
  --danger: #dc2626;
  --danger-light: #fee2e2;
  --info: #0891b2;
  --info-light: #cffafe;
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;
  --sidebar-w: 280px;
  --header-h: 64px;
  --radius: 10px;
  --shadow: 0 1px 3px rgba(0,0,0,.1), 0 1px 2px rgba(0,0,0,.06);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.06);
  --shadow-lg: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: var(--gray-50); color: var(--gray-800); display: flex; min-height: 100vh; font-size: 15px; line-height: 1.6; }

/* SIDEBAR */
#sidebar {
  width: var(--sidebar-w); background: #fff; border-right: 1px solid var(--gray-200);
  position: fixed; top: 0; left: 0; bottom: 0; overflow-y: auto; z-index: 200;
  display: flex; flex-direction: column;
}
#sidebar::-webkit-scrollbar { width: 4px; }
#sidebar::-webkit-scrollbar-thumb { background: var(--gray-200); border-radius: 2px; }
.sidebar-logo { padding: 20px 16px 16px; border-bottom: 1px solid var(--gray-100); }
.sidebar-logo h2 { font-size: 17px; font-weight: 800; color: var(--primary); margin-bottom: 2px; }
.sidebar-logo p { font-size: 11px; color: var(--gray-500); }
.sidebar-exam-info { margin: 12px; background: var(--primary-light); border-radius: var(--radius); padding: 10px 12px; font-size: 12px; color: var(--primary-dark); }
.sidebar-exam-info strong { display: block; font-size: 11px; text-transform: uppercase; letter-spacing: .5px; margin-bottom: 6px; }
.exam-pill { display: flex; justify-content: space-between; margin-bottom: 3px; }
.exam-pill .ep-name { color: var(--gray-700); }
.exam-pill .ep-num { font-weight: 700; color: var(--primary); }
.nav-group { padding: 8px 0; }
.nav-group-label { padding: 4px 16px 2px; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--gray-400); }
.nav-item { display: flex; align-items: center; gap: 10px; padding: 8px 16px; cursor: pointer; transition: all .15s; color: var(--gray-600); font-size: 13.5px; text-decoration: none; border: none; background: none; width: 100%; text-align: left; }
.nav-item:hover { background: var(--gray-50); color: var(--gray-900); }
.nav-item.active { background: var(--primary-light); color: var(--primary-dark); font-weight: 600; }
.nav-item .nav-icon { font-size: 16px; width: 22px; text-align: center; flex-shrink: 0; }
.nav-item .nav-badge { margin-left: auto; background: var(--gray-100); color: var(--gray-500); font-size: 10px; padding: 1px 6px; border-radius: 10px; }
.nav-item.active .nav-badge { background: var(--primary); color: #fff; }

/* MAIN */
#main { margin-left: var(--sidebar-w); flex: 1; min-width: 0; }
#topbar { position: sticky; top: 0; height: var(--header-h); background: #fff; border-bottom: 1px solid var(--gray-200); display: flex; align-items: center; padding: 0 24px; gap: 16px; z-index: 100; box-shadow: var(--shadow); }
#topbar h1 { font-size: 18px; font-weight: 700; flex: 1; color: var(--gray-900); }
.top-chips { display: flex; gap: 8px; }
.top-chip { background: var(--gray-100); border: 1px solid var(--gray-200); border-radius: 20px; padding: 4px 12px; font-size: 12px; color: var(--gray-600); }
.top-chip span { font-weight: 700; color: var(--primary); }

#content { padding: 28px; max-width: 1080px; }

/* HERO */
.hero { background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%); color: #fff; border-radius: 16px; padding: 36px; margin-bottom: 28px; position: relative; overflow: hidden; }
.hero::after { content: "🦷"; position: absolute; right: 32px; bottom: 16px; font-size: 80px; opacity: .15; }
.hero-badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,.2); border-radius: 20px; padding: 4px 14px; font-size: 12px; font-weight: 600; margin-bottom: 14px; }
.hero h1 { font-size: 28px; font-weight: 800; margin-bottom: 10px; }
.hero p { font-size: 15px; opacity: .9; max-width: 560px; line-height: 1.7; }
.hero-stats { display: flex; gap: 24px; margin-top: 24px; flex-wrap: wrap; }
.hero-stat .num { font-size: 26px; font-weight: 800; display: block; }
.hero-stat .lbl { font-size: 11px; opacity: .8; text-transform: uppercase; letter-spacing: .8px; }

/* EXAM OVERVIEW */
.exam-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 14px; margin-bottom: 28px; }
.exam-card { background: #fff; border: 1px solid var(--gray-200); border-radius: var(--radius); padding: 16px; cursor: pointer; transition: all .2s; }
.exam-card:hover { box-shadow: var(--shadow-md); transform: translateY(-1px); border-color: var(--primary); }
.exam-card .ec-icon { font-size: 28px; margin-bottom: 8px; }
.exam-card .ec-title { font-size: 14px; font-weight: 700; color: var(--gray-900); margin-bottom: 4px; }
.exam-card .ec-sub { font-size: 12px; color: var(--gray-500); margin-bottom: 10px; }
.exam-card .ec-nums { display: flex; gap: 8px; }
.ec-num-badge { background: var(--gray-100); border-radius: 6px; padding: 3px 8px; font-size: 11px; }
.ec-num-badge strong { color: var(--primary); }

/* PAGE */
.page { display: none; }
.page.active { display: block; }

/* SECTION HEADER */
.section-hdr { display: flex; align-items: center; gap: 14px; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid var(--gray-100); }
.section-icon { width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 24px; flex-shrink: 0; }
.si-blue { background: var(--primary-light); }
.si-purple { background: var(--secondary-light); }
.si-green { background: var(--success-light); }
.si-orange { background: var(--warning-light); }
.si-red { background: var(--danger-light); }
.si-teal { background: var(--info-light); }
.section-hdr h2 { font-size: 22px; font-weight: 800; color: var(--gray-900); }
.section-hdr p { font-size: 13px; color: var(--gray-500); margin-top: 2px; }

/* TABS */
.tab-bar { display: flex; gap: 0; border-bottom: 2px solid var(--gray-200); margin-bottom: 24px; overflow-x: auto; }
.tab-btn { padding: 10px 20px; font-size: 14px; font-weight: 500; border: none; background: none; cursor: pointer; color: var(--gray-500); border-bottom: 2px solid transparent; margin-bottom: -2px; white-space: nowrap; transition: all .15s; }
.tab-btn:hover { color: var(--gray-900); }
.tab-btn.active { color: var(--primary); border-bottom-color: var(--primary); font-weight: 600; }
.tab-content { display: none; }
.tab-content.active { display: block; }

/* THEORY CARD */
.theory-card { background: #fff; border: 1px solid var(--gray-200); border-radius: var(--radius); margin-bottom: 16px; overflow: hidden; }
.theory-header { padding: 14px 18px; display: flex; align-items: center; gap: 10px; cursor: pointer; transition: background .15s; }
.theory-header:hover { background: var(--gray-50); }
.theory-tag { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .8px; padding: 3px 10px; border-radius: 6px; flex-shrink: 0; }
.tt-blue { background: var(--primary-light); color: var(--primary); }
.tt-green { background: var(--success-light); color: var(--success); }
.tt-orange { background: var(--warning-light); color: var(--warning); }
.tt-purple { background: var(--secondary-light); color: var(--secondary); }
.tt-red { background: var(--danger-light); color: var(--danger); }
.tt-teal { background: var(--info-light); color: var(--info); }
.theory-header h3 { flex: 1; font-size: 15px; font-weight: 600; }
.theory-chevron { color: var(--gray-400); transition: transform .2s; font-size: 13px; }
.theory-card.open .theory-chevron { transform: rotate(180deg); }
.theory-body { display: none; padding: 0 18px 18px; }
.theory-card.open .theory-body { display: block; }

/* INFO BOX */
.info-box { background: #f0f9ff; border-left: 4px solid var(--primary); border-radius: 0 8px 8px 0; padding: 14px 16px; margin-bottom: 16px; }
.info-box-title { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .8px; color: var(--primary); margin-bottom: 8px; }
.info-box ul { list-style: none; }
.info-box ul li { font-size: 14px; padding: 3px 0 3px 16px; position: relative; }
.info-box ul li::before { content: "→"; position: absolute; left: 0; color: var(--primary); font-size: 12px; top: 4px; }
.warn-box { background: var(--warning-light); border: 1px solid #fde68a; border-radius: 8px; padding: 12px 16px; font-size: 13.5px; margin-top: 12px; }
.success-box { background: var(--success-light); border: 1px solid #6ee7b7; border-radius: 8px; padding: 12px 16px; font-size: 13.5px; margin-top: 12px; }

/* QUIZ */
.quiz-controls { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; flex-wrap: wrap; }
.btn { padding: 8px 18px; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; border: none; transition: all .15s; }
.btn-primary { background: var(--primary); color: #fff; }
.btn-primary:hover { background: var(--primary-dark); }
.btn-secondary { background: var(--gray-100); color: var(--gray-700); border: 1px solid var(--gray-200); }
.btn-secondary:hover { background: var(--gray-200); }
.btn-success { background: var(--success); color: #fff; }
.quiz-progress { background: var(--gray-100); border-radius: 20px; padding: 6px 14px; font-size: 13px; color: var(--gray-600); margin-left: auto; }
.quiz-progress strong { color: var(--primary); }

.question-card { background: #fff; border: 1px solid var(--gray-200); border-radius: var(--radius); padding: 20px; margin-bottom: 14px; transition: all .2s; }
.question-card.answered-correct { border-color: var(--success); background: #f0fdf4; }
.question-card.answered-wrong { border-color: var(--danger); background: #fef2f2; }
.question-num { font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--gray-400); margin-bottom: 6px; }
.question-text { font-size: 15px; font-weight: 500; color: var(--gray-800); margin-bottom: 14px; line-height: 1.6; }
.options { display: flex; flex-direction: column; gap: 8px; }
.option { display: flex; align-items: center; gap: 10px; padding: 10px 14px; border: 1.5px solid var(--gray-200); border-radius: 8px; cursor: pointer; transition: all .15s; font-size: 14px; }
.option:hover:not(.disabled) { border-color: var(--primary); background: var(--primary-light); }
.option.selected-correct { border-color: var(--success); background: var(--success-light); color: var(--success); font-weight: 600; }
.option.selected-wrong { border-color: var(--danger); background: var(--danger-light); color: var(--danger); }
.option.correct-reveal { border-color: var(--success); background: var(--success-light); }
.option.disabled { cursor: default; }
.option-letter { width: 28px; height: 28px; border-radius: 50%; background: var(--gray-100); display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0; }
.option.selected-correct .option-letter { background: var(--success); color: #fff; }
.option.selected-wrong .option-letter { background: var(--danger); color: #fff; }
.option.correct-reveal .option-letter { background: var(--success); color: #fff; }
.explanation { margin-top: 14px; padding: 12px 16px; background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; font-size: 13.5px; display: none; }
.explanation.show { display: block; }
.explanation strong { color: var(--warning); }

/* SCORE CARD */
.score-card { background: linear-gradient(135deg, var(--primary), var(--secondary)); color: #fff; border-radius: 14px; padding: 28px; text-align: center; margin-bottom: 20px; }
.score-card h3 { font-size: 18px; margin-bottom: 8px; }
.score-big { font-size: 56px; font-weight: 800; }
.score-label { font-size: 14px; opacity: .85; }
.score-breakdown { display: flex; justify-content: center; gap: 24px; margin-top: 16px; }
.score-item { text-align: center; }
.score-item .si-n { font-size: 22px; font-weight: 700; }
.score-item .si-l { font-size: 11px; opacity: .8; }

/* SUMMARY TABLE */
.summary-table { width: 100%; border-collapse: collapse; font-size: 14px; }
.summary-table th { background: var(--gray-50); padding: 10px 14px; text-align: left; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .8px; color: var(--gray-500); border-bottom: 1px solid var(--gray-200); }
.summary-table td { padding: 10px 14px; border-bottom: 1px solid var(--gray-100); }
.summary-table tr:hover td { background: var(--gray-50); }
.badge-j { background: var(--success-light); color: var(--success); font-weight: 700; padding: 2px 8px; border-radius: 6px; font-size: 12px; }
.badge-oj { background: var(--danger-light); color: var(--danger); font-weight: 700; padding: 2px 8px; border-radius: 6px; font-size: 12px; }
.badge-ans { background: var(--primary-light); color: var(--primary); font-weight: 600; padding: 2px 8px; border-radius: 6px; font-size: 12px; }

/* CHEAT SHEET */
.cheat-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 10px; margin: 16px 0; }
.cheat-item { background: #fff; border: 1px solid var(--gray-200); border-radius: var(--radius); padding: 14px; text-align: center; }
.cheat-item .ci-val { font-size: 22px; font-weight: 800; color: var(--primary); display: block; }
.cheat-item .ci-key { font-size: 11px; color: var(--gray-500); margin-top: 4px; }
.cheat-item.c-green .ci-val { color: var(--success); }
.cheat-item.c-orange .ci-val { color: var(--warning); }
.cheat-item.c-red .ci-val { color: var(--danger); }

/* RICHTLIJN */
.rl-card { background: #fff; border: 1px solid var(--gray-200); border-radius: var(--radius); padding: 20px; margin-bottom: 14px; }
.rl-card h3 { font-size: 15px; font-weight: 700; color: var(--gray-900); margin-bottom: 4px; }
.rl-card .rl-org { font-size: 12px; color: var(--gray-400); margin-bottom: 12px; }
.rl-steps { list-style: none; }
.rl-steps li { padding: 5px 0 5px 20px; position: relative; font-size: 14px; }
.rl-steps li::before { content: counter(step); counter-increment: step; position: absolute; left: 0; background: var(--primary); color: #fff; font-size: 10px; font-weight: 700; width: 16px; height: 16px; border-radius: 50%; display: flex; align-items: center; justify-content: center; top: 6px; }
.rl-steps { counter-reset: step; }

/* CASUS */
.casus-card { background: #fff; border: 1.5px solid var(--gray-200); border-radius: 12px; padding: 22px; margin-bottom: 20px; }
.casus-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--gray-400); margin-bottom: 8px; }
.casus-text { font-size: 15px; color: var(--gray-700); line-height: 1.8; margin-bottom: 16px; background: var(--gray-50); border-radius: 8px; padding: 14px; }
.casus-questions { }
.casus-q { border-top: 1px solid var(--gray-100); padding: 12px 0; }
.casus-q-text { font-size: 14px; font-weight: 600; color: var(--gray-800); margin-bottom: 8px; }
.casus-answer { display: none; background: var(--success-light); border-radius: 8px; padding: 10px 14px; font-size: 14px; margin-top: 8px; }
.casus-answer.show { display: block; }

/* GESPREK */
.gesprek-card { background: #fff; border: 1px solid var(--gray-200); border-radius: 12px; overflow: hidden; margin-bottom: 16px; }
.gesprek-scene { background: var(--primary-light); padding: 14px 18px; font-size: 13px; color: var(--primary-dark); font-weight: 600; }
.gesprek-body { padding: 16px 18px; }
.msg { display: flex; gap: 10px; margin-bottom: 12px; }
.msg-tandarts { flex-direction: row-reverse; }
.msg-avatar { width: 32px; height: 32px; border-radius: 50%; background: var(--primary); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0; }
.msg-tandarts .msg-avatar { background: var(--success); }
.msg-bubble { background: var(--gray-100); border-radius: 12px; padding: 10px 14px; font-size: 13.5px; max-width: 80%; }
.msg-tandarts .msg-bubble { background: var(--primary-light); color: var(--primary-dark); }
.msg-name { font-size: 10px; font-weight: 700; color: var(--gray-400); margin-bottom: 2px; }

/* FOOTER */
.page-footer { border-top: 1px solid var(--gray-200); margin-top: 40px; padding-top: 20px; text-align: center; font-size: 12px; color: var(--gray-400); padding-bottom: 20px; }

@media (max-width: 768px) {
  #sidebar { transform: translateX(-100%); }
  #main { margin-left: 0; }
  #content { padding: 16px; }
  .hero h1 { font-size: 22px; }
  .exam-grid { grid-template-columns: 1fr 1fr; }
  .cheat-grid { grid-template-columns: repeat(3, 1fr); }
}

/* Scrollbar */
* { scrollbar-width: thin; scrollbar-color: var(--gray-200) transparent; }
</style>
</head>
<body>

<!-- SIDEBAR -->
<nav id="sidebar">
  <div class="sidebar-logo">
    <h2>🦷 BI Toets Platform</h2>
    <p>Studiegids voor BIG-registratie tandartsen</p>
  </div>
  <div class="sidebar-exam-info">
    <strong>📊 Examenstructuur</strong>
    <div class="exam-pill"><span class="ep-name">Basisch-Medisch</span><span class="ep-num">100 mc</span></div>
    <div class="exam-pill"><span class="ep-name">Tandheelkunde I</span><span class="ep-num">70 mc + open</span></div>
    <div class="exam-pill"><span class="ep-name">Tandheelkunde II</span><span class="ep-num">100 mc</span></div>
    <div class="exam-pill"><span class="ep-name">Radiologie & Wetenschap</span><span class="ep-num">35 mc + open</span></div>
  </div>
  <div class="nav-group">
    <div class="nav-group-label">Start</div>
    <button class="nav-item active" onclick="showPage(\'home\',this)"><span class="nav-icon">🏠</span> Overzicht</button>
  </div>
  <div class="nav-group">
    <div class="nav-group-label">Tandheelkunde I</div>
    <button class="nav-item" onclick="showPage(\'paro\',this)"><span class="nav-icon">🔴</span> Parodontologie <span class="nav-badge">15 mc</span></button>
    <button class="nav-item" onclick="showPage(\'endo\',this)"><span class="nav-icon">🔵</span> Endodontologie <span class="nav-badge">20 mc</span></button>
    <button class="nav-item" onclick="showPage(\'cario\',this)"><span class="nav-icon">🟡</span> Cariologie <span class="nav-badge">15 mc</span></button>
    <button class="nav-item" onclick="showPage(\'pedo\',this)"><span class="nav-icon">🟢</span> Pedodontologie <span class="nav-badge">10 mc</span></button>
    <button class="nav-item" onclick="showPage(\'speeksel\',this)"><span class="nav-icon">💧</span> Speeksel & Orale Bio <span class="nav-badge">10 mc</span></button>
    <button class="nav-item" onclick="showPage(\'sociale\',this)"><span class="nav-icon">🤝</span> Sociale TH / Ethiek <span class="nav-badge">open</span></button>
  </div>
  <div class="nav-group">
    <div class="nav-group-label">Tandheelkunde II</div>
    <button class="nav-item" onclick="showPage(\'kinesio\',this)"><span class="nav-icon">🧠</span> Kinesiologie / TMD <span class="nav-badge">10 mc</span></button>
    <button class="nav-item" onclick="showPage(\'functie\',this)"><span class="nav-icon">🦷</span> Orale Functieleer / MZK <span class="nav-badge">35+25 mc</span></button>
    <button class="nav-item" onclick="showPage(\'pato\',this)"><span class="nav-icon">🔬</span> Orale Pathologie <span class="nav-badge">15 mc</span></button>
    <button class="nav-item" onclick="showPage(\'ortho\',this)"><span class="nav-icon">📐</span> Orthodontie <span class="nav-badge">15 mc</span></button>
  </div>
  <div class="nav-group">
    <div class="nav-group-label">Basisch-Medisch</div>
    <button class="nav-item" onclick="showPage(\'basis\',this)"><span class="nav-icon">⚕️</span> Basis Medisch <span class="nav-badge">100 mc</span></button>
  </div>
  <div class="nav-group">
    <div class="nav-group-label">Radiologie & Wetenschap</div>
    <button class="nav-item" onclick="showPage(\'radio\',this)"><span class="nav-icon">📡</span> Radiologie <span class="nav-badge">20 mc</span></button>
    <button class="nav-item" onclick="showPage(\'statistiek\',this)"><span class="nav-icon">📊</span> Statistiek <span class="nav-badge">15 mc</span></button>
    <button class="nav-item" onclick="showPage(\'methodologie\',this)"><span class="nav-icon">🔭</span> Methodologie / EBM <span class="nav-badge">open</span></button>
  </div>
  <div class="nav-group">
    <div class="nav-group-label">Casussen & Vaardigheden</div>
    <button class="nav-item" onclick="showPage(\'bp1\',this)"><span class="nav-icon">📋</span> Behandelplan 1</button>
    <button class="nav-item" onclick="showPage(\'bp2\',this)"><span class="nav-icon">📋</span> Behandelplan 2</button>
    <button class="nav-item" onclick="showPage(\'casus\',this)"><span class="nav-icon">📄</span> Korte Casus</button>
    <button class="nav-item" onclick="showPage(\'endo_trauma\',this)"><span class="nav-icon">🚑</span> Endo Trauma & Pijn</button>
    <button class="nav-item" onclick="showPage(\'gesprek\',this)"><span class="nav-icon">💬</span> CNT Gesprek</button>
  </div>
  <div class="nav-group">
    <div class="nav-group-label">Referentie</div>
    <button class="nav-item" onclick="showPage(\'richtlijnen\',this)"><span class="nav-icon">📚</span> Actuele Richtlijnen</button>
  </div>
</nav>

<!-- MAIN -->
<main id="main">
  <div id="topbar">
    <h1 id="topbar-title">BI Toets Studieplatform</h1>
    <div class="top-chips">
      <div class="top-chip"><span>305</span> vragen</div>
      <div class="top-chip"><span>12</span> onderdelen</div>
    </div>
  </div>

  <div id="content">

<!-- ████████████████████████████ HOME ████████████████████████████ -->
<div class="page active" id="page-home">
  <div class="hero">
    <div class="hero-badge">🎓 BI Toets Voorbereiding</div>
    <h1>Studieplatform voor BIG-registratie</h1>
    <p>Volledig studieplatform voor tandartsen die de BI Toets willen afleggen voor BIG-registratie in Nederland. Inclusief studienotities, samenvattingen en uitgebreide oefentoetsen.</p>
    <div class="hero-stats">
      <div class="hero-stat"><span class="num">305</span><span class="lbl">MC vragen totaal</span></div>
      <div class="hero-stat"><span class="num">4</span><span class="lbl">Toetsonderdelen</span></div>
      <div class="hero-stat"><span class="num">80%</span><span class="lbl">Slagingsgrens</span></div>
      <div class="hero-stat"><span class="num">12</span><span class="lbl">Studiemodules</span></div>
    </div>
  </div>

  <h3 style="font-size:16px;font-weight:700;margin-bottom:14px;color:var(--gray-700)">📊 Examenstructuur – Norm voor een 6.0</h3>
  <div class="exam-grid">
    <div class="exam-card" onclick="showPage(\'basis\', document.querySelector(\'[onclick*=basis]\'))">
      <div class="ec-icon">⚕️</div>
      <div class="ec-title">Basisch-Medisch</div>
      <div class="ec-sub">Ziektenleer, Farmacologie, Anesthesie, Fysiologie, Microbiologie, Orale Biologie</div>
      <div class="ec-nums">
        <div class="ec-num-badge"><strong>100</strong> mc</div>
        <div class="ec-num-badge">max <strong>20</strong> fout</div>
      </div>
    </div>
    <div class="exam-card" onclick="showPage(\'paro\', document.querySelector(\'[onclick*=paro]\'))">
      <div class="ec-icon">🦷</div>
      <div class="ec-title">Tandheelkunde I</div>
      <div class="ec-sub">Cariologie, Endo, Pedo, Paro, Speeksel + Ethiek open vragen</div>
      <div class="ec-nums">
        <div class="ec-num-badge"><strong>70</strong> mc</div>
        <div class="ec-num-badge">max <strong>14</strong> fout</div>
      </div>
    </div>
    <div class="exam-card" onclick="showPage(\'kinesio\', document.querySelector(\'[onclick*=kinesio]\'))">
      <div class="ec-icon">🔬</div>
      <div class="ec-title">Tandheelkunde II</div>
      <div class="ec-sub">Kinesiologie, Orale Functieleer, MZK, Orale Pathologie, Orthodontie</div>
      <div class="ec-nums">
        <div class="ec-num-badge"><strong>100</strong> mc</div>
        <div class="ec-num-badge">max <strong>20</strong> fout</div>
      </div>
    </div>
    <div class="exam-card" onclick="showPage(\'radio\', document.querySelector(\'[onclick*=radio]\'))">
      <div class="ec-icon">📡</div>
      <div class="ec-title">Radiologie & Wetenschap</div>
      <div class="ec-sub">Radiologie (20 mc), Statistiek (15 mc), EBM/Methodologie (open)</div>
      <div class="ec-nums">
        <div class="ec-num-badge"><strong>35</strong> mc</div>
        <div class="ec-num-badge">max <strong>7</strong> fout</div>
      </div>
    </div>
  </div>

  <h3 style="font-size:16px;font-weight:700;margin-bottom:14px;color:var(--gray-700)">⚡ Kritieke getallen – Snel overzicht</h3>
  <div class="cheat-grid">
    <div class="cheat-item"><span class="ci-val">80%</span><span class="ci-key">Slagingsgrens MC</span></div>
    <div class="cheat-item"><span class="ci-val c-green">20</span><span class="ci-key">Max fouten BM (100 mc)</span></div>
    <div class="cheat-item"><span class="ci-val c-green">14</span><span class="ci-key">Max fouten THK I (70 mc)</span></div>
    <div class="cheat-item"><span class="ci-val c-green">20</span><span class="ci-key">Max fouten THK II (100 mc)</span></div>
    <div class="cheat-item"><span class="ci-val c-green">7</span><span class="ci-key">Max fouten R&W (35 mc)</span></div>
    <div class="cheat-item c-orange"><span class="ci-val">55pt</span><span class="ci-key">Open vragen weging (50%)</span></div>
  </div>

  <div class="success-box" style="margin-top:4px;">
    <strong>💡 Tip:</strong> Voor een voldoende dient <strong>80%</strong> van de tweekeuzevragen goed beantwoord te worden. De open vragen (Ethiek, EBM/Methodologie) tellen voor 50% mee bij het onderdeel Intake (55 punten van 100).
  </div>
</div>

'''

print(html[:500])
print("... (content being generated)")
print(f"Total length so far: {len(html)} chars")
