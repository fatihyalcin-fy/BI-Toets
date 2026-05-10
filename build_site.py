#!/usr/bin/env python3
# BI Toets Studieplatform - Complete Generator

import os

OUTPUT = '/sessions/determined-eloquent-pasteur/mnt/outputs/BI_Toets_Studieplatform.html'

# ─────────────────────────────────────────────────────────────────────────────
# HEAD + CSS
# ─────────────────────────────────────────────────────────────────────────────
HEAD = '''<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>BI Toets Studieplatform – BIG Registratie Tandarts</title>
<style>
:root {
  --primary:#2563eb;--primary-light:#dbeafe;--primary-dark:#1d4ed8;
  --secondary:#7c3aed;--secondary-light:#ede9fe;
  --success:#059669;--success-light:#d1fae5;
  --warning:#d97706;--warning-light:#fef3c7;
  --danger:#dc2626;--danger-light:#fee2e2;
  --info:#0891b2;--info-light:#cffafe;
  --gray-50:#f9fafb;--gray-100:#f3f4f6;--gray-200:#e5e7eb;
  --gray-300:#d1d5db;--gray-400:#9ca3af;--gray-500:#6b7280;
  --gray-600:#4b5563;--gray-700:#374151;--gray-800:#1f2937;--gray-900:#111827;
  --sidebar-w:270px;--radius:10px;
  --shadow:0 1px 3px rgba(0,0,0,.1);--shadow-md:0 4px 6px -1px rgba(0,0,0,.1);
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;
  background:var(--gray-50);color:var(--gray-800);display:flex;min-height:100vh;font-size:15px;line-height:1.6}
#sidebar{width:var(--sidebar-w);background:#fff;border-right:1px solid var(--gray-200);
  position:fixed;top:0;left:0;bottom:0;overflow-y:auto;z-index:200;display:flex;flex-direction:column}
#sidebar::-webkit-scrollbar{width:4px}
#sidebar::-webkit-scrollbar-thumb{background:var(--gray-200);border-radius:2px}
.sidebar-logo{padding:18px 16px 14px;border-bottom:1px solid var(--gray-100)}
.sidebar-logo h2{font-size:16px;font-weight:800;color:var(--primary);margin-bottom:2px}
.sidebar-logo p{font-size:11px;color:var(--gray-500)}
.sidebar-exam-info{margin:10px;background:var(--primary-light);border-radius:8px;padding:10px 12px;font-size:12px;color:var(--primary-dark)}
.sidebar-exam-info strong{display:block;font-size:10px;text-transform:uppercase;letter-spacing:.5px;margin-bottom:5px}
.exam-pill{display:flex;justify-content:space-between;margin-bottom:2px}
.ep-num{font-weight:700;color:var(--primary)}
.nav-group{padding:6px 0}
.nav-group-label{padding:4px 14px 2px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--gray-400)}
.nav-item{display:flex;align-items:center;gap:8px;padding:7px 14px;cursor:pointer;transition:all .15s;
  color:var(--gray-600);font-size:13px;text-decoration:none;border:none;background:none;width:100%;text-align:left}
.nav-item:hover{background:var(--gray-50);color:var(--gray-900)}
.nav-item.active{background:var(--primary-light);color:var(--primary-dark);font-weight:600}
.nav-badge{margin-left:auto;background:var(--gray-100);color:var(--gray-500);font-size:10px;padding:1px 6px;border-radius:10px}
.nav-item.active .nav-badge{background:var(--primary);color:#fff}
#main{margin-left:var(--sidebar-w);flex:1;min-width:0}
#topbar{position:sticky;top:0;height:60px;background:#fff;border-bottom:1px solid var(--gray-200);
  display:flex;align-items:center;padding:0 22px;gap:14px;z-index:100;box-shadow:var(--shadow)}
#topbar h1{font-size:17px;font-weight:700;flex:1;color:var(--gray-900)}
.top-chip{background:var(--gray-100);border:1px solid var(--gray-200);border-radius:20px;
  padding:3px 10px;font-size:12px;color:var(--gray-600)}
.top-chip span{font-weight:700;color:var(--primary)}
#content{padding:24px;max-width:1060px}
.page{display:none}
.page.active{display:block}

/* HERO */
.hero{background:linear-gradient(135deg,#1e40af 0%,#7c3aed 100%);color:#fff;
  border-radius:16px;padding:32px;margin-bottom:24px;position:relative;overflow:hidden}
.hero::after{content:"🦷";position:absolute;right:28px;bottom:12px;font-size:72px;opacity:.12}
.hero-badge{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.2);
  border-radius:20px;padding:4px 12px;font-size:12px;font-weight:600;margin-bottom:12px}
.hero h1{font-size:26px;font-weight:800;margin-bottom:8px}
.hero p{font-size:14px;opacity:.9;max-width:540px;line-height:1.7}
.hero-stats{display:flex;gap:20px;margin-top:20px;flex-wrap:wrap}
.hero-stat .num{font-size:24px;font-weight:800;display:block}
.hero-stat .lbl{font-size:11px;opacity:.8;text-transform:uppercase;letter-spacing:.8px}

/* EXAM GRID */
.exam-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:12px;margin-bottom:24px}
.exam-card{background:#fff;border:1px solid var(--gray-200);border-radius:var(--radius);
  padding:14px;cursor:pointer;transition:all .2s}
.exam-card:hover{box-shadow:var(--shadow-md);transform:translateY(-1px);border-color:var(--primary)}
.ec-icon{font-size:26px;margin-bottom:6px}
.ec-title{font-size:13px;font-weight:700;color:var(--gray-900);margin-bottom:3px}
.ec-sub{font-size:11px;color:var(--gray-500);margin-bottom:8px;line-height:1.4}
.ec-nums{display:flex;gap:6px;flex-wrap:wrap}
.ec-num-badge{background:var(--gray-100);border-radius:5px;padding:2px 7px;font-size:11px}
.ec-num-badge strong{color:var(--primary)}

/* SECTION HDR */
.section-hdr{display:flex;align-items:center;gap:12px;margin-bottom:20px;padding-bottom:14px;border-bottom:2px solid var(--gray-100)}
.section-icon{width:48px;height:48px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0}
.si-blue{background:var(--primary-light)}.si-purple{background:var(--secondary-light)}
.si-green{background:var(--success-light)}.si-orange{background:var(--warning-light)}
.si-red{background:var(--danger-light)}.si-teal{background:var(--info-light)}
.section-hdr h2{font-size:20px;font-weight:800;color:var(--gray-900)}
.section-hdr p{font-size:12px;color:var(--gray-500);margin-top:2px}

/* TABS */
.tab-bar{display:flex;border-bottom:2px solid var(--gray-200);margin-bottom:20px;overflow-x:auto}
.tab-btn{padding:9px 18px;font-size:13px;font-weight:500;border:none;background:none;cursor:pointer;
  color:var(--gray-500);border-bottom:2px solid transparent;margin-bottom:-2px;white-space:nowrap;transition:all .15s}
.tab-btn:hover{color:var(--gray-900)}
.tab-btn.active{color:var(--primary);border-bottom-color:var(--primary);font-weight:600}
.tab-content{display:none}
.tab-content.active{display:block}

/* THEORY CARD */
.theory-card{background:#fff;border:1px solid var(--gray-200);border-radius:var(--radius);margin-bottom:12px;overflow:hidden}
.theory-header{padding:12px 16px;display:flex;align-items:center;gap:10px;cursor:pointer;transition:background .15s}
.theory-header:hover{background:var(--gray-50)}
.theory-tag{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;padding:2px 8px;border-radius:5px;flex-shrink:0}
.tt-blue{background:var(--primary-light);color:var(--primary)}
.tt-green{background:var(--success-light);color:var(--success)}
.tt-orange{background:var(--warning-light);color:var(--warning)}
.tt-purple{background:var(--secondary-light);color:var(--secondary)}
.tt-red{background:var(--danger-light);color:var(--danger)}
.tt-teal{background:var(--info-light);color:var(--info)}
.theory-header h3{flex:1;font-size:14px;font-weight:600}
.theory-chevron{color:var(--gray-400);transition:transform .2s;font-size:12px}
.theory-card.open .theory-chevron{transform:rotate(180deg)}
.theory-body{display:none;padding:0 16px 16px}
.theory-card.open .theory-body{display:block}
.theory-body p{font-size:14px;color:var(--gray-700);margin-bottom:8px;line-height:1.7}
.theory-body ul{list-style:none;margin-bottom:8px}
.theory-body ul li{font-size:14px;padding:2px 0 2px 16px;position:relative;color:var(--gray-700)}
.theory-body ul li::before{content:"→";position:absolute;left:0;color:var(--primary);font-size:11px;top:3px}
.theory-body table{width:100%;border-collapse:collapse;font-size:13px;margin:10px 0}
.theory-body th{background:var(--gray-50);padding:7px 10px;text-align:left;font-size:11px;
  font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--gray-500);border-bottom:1px solid var(--gray-200)}
.theory-body td{padding:7px 10px;border-bottom:1px solid var(--gray-100)}
.theory-body tr:hover td{background:var(--gray-50)}

/* INFO / WARN / SUCCESS BOX */
.info-box{background:#f0f9ff;border-left:4px solid var(--primary);border-radius:0 8px 8px 0;padding:12px 14px;margin-bottom:14px}
.info-box-title{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--primary);margin-bottom:6px}
.info-box ul{list-style:none}
.info-box ul li{font-size:13.5px;padding:2px 0 2px 14px;position:relative}
.info-box ul li::before{content:"→";position:absolute;left:0;color:var(--primary);font-size:11px;top:3px}
.warn-box{background:var(--warning-light);border:1px solid #fde68a;border-radius:8px;padding:11px 14px;font-size:13.5px;margin:10px 0}
.success-box{background:var(--success-light);border:1px solid #6ee7b7;border-radius:8px;padding:11px 14px;font-size:13.5px;margin:10px 0}
.danger-box{background:var(--danger-light);border:1px solid #fca5a5;border-radius:8px;padding:11px 14px;font-size:13.5px;margin:10px 0}

/* QUIZ */
.quiz-controls{display:flex;align-items:center;gap:10px;margin-bottom:16px;flex-wrap:wrap}
.btn{padding:7px 16px;border-radius:8px;font-size:13.5px;font-weight:600;cursor:pointer;border:none;transition:all .15s}
.btn-primary{background:var(--primary);color:#fff}
.btn-primary:hover{background:var(--primary-dark)}
.btn-secondary{background:var(--gray-100);color:var(--gray-700);border:1px solid var(--gray-200)}
.btn-secondary:hover{background:var(--gray-200)}
.btn-success{background:var(--success);color:#fff}
.quiz-progress{background:var(--gray-100);border-radius:20px;padding:5px 12px;font-size:12px;color:var(--gray-600);margin-left:auto}
.quiz-progress strong{color:var(--primary)}
.question-card{background:#fff;border:1.5px solid var(--gray-200);border-radius:var(--radius);padding:18px;margin-bottom:12px;transition:all .2s}
.question-card.answered-correct{border-color:var(--success);background:#f0fdf4}
.question-card.answered-wrong{border-color:var(--danger);background:#fef2f2}
.question-num{font-size:10px;font-weight:700;text-transform:uppercase;color:var(--gray-400);margin-bottom:5px}
.question-text{font-size:14.5px;font-weight:500;color:var(--gray-800);margin-bottom:12px;line-height:1.6}
.options{display:flex;flex-direction:column;gap:7px}
.option{display:flex;align-items:center;gap:9px;padding:9px 12px;border:1.5px solid var(--gray-200);
  border-radius:8px;cursor:pointer;transition:all .15s;font-size:13.5px}
.option:hover:not(.disabled){border-color:var(--primary);background:var(--primary-light)}
.option.selected-correct{border-color:var(--success);background:var(--success-light);color:var(--success);font-weight:600}
.option.selected-wrong{border-color:var(--danger);background:var(--danger-light);color:var(--danger)}
.option.correct-reveal{border-color:var(--success);background:var(--success-light)}
.option.disabled{cursor:default}
.option-letter{width:26px;height:26px;border-radius:50%;background:var(--gray-100);display:flex;
  align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0}
.option.selected-correct .option-letter{background:var(--success);color:#fff}
.option.selected-wrong .option-letter{background:var(--danger);color:#fff}
.option.correct-reveal .option-letter{background:var(--success);color:#fff}
.explanation{margin-top:12px;padding:11px 14px;background:#fffbeb;border:1px solid #fde68a;border-radius:8px;font-size:13px;display:none}
.explanation.show{display:block}

/* SCORE CARD */
.score-card{background:linear-gradient(135deg,var(--primary),var(--secondary));color:#fff;border-radius:14px;padding:24px;text-align:center;margin-bottom:18px}
.score-card h3{font-size:17px;margin-bottom:6px}
.score-big{font-size:52px;font-weight:800}
.score-label{font-size:13px;opacity:.85}
.score-breakdown{display:flex;justify-content:center;gap:20px;margin-top:14px;flex-wrap:wrap}
.score-item .si-n{font-size:20px;font-weight:700;display:block}
.score-item .si-l{font-size:10px;opacity:.8}

/* CHEAT SHEET */
.cheat-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:8px;margin:14px 0}
.cheat-item{background:#fff;border:1px solid var(--gray-200);border-radius:var(--radius);padding:12px;text-align:center}
.cheat-item .ci-val{font-size:20px;font-weight:800;color:var(--primary);display:block}
.cheat-item .ci-key{font-size:11px;color:var(--gray-500);margin-top:3px}
.cheat-item.c-green .ci-val{color:var(--success)}
.cheat-item.c-orange .ci-val{color:var(--warning)}
.cheat-item.c-red .ci-val{color:var(--danger)}

/* SUMMARY TABLE */
.summary-table{width:100%;border-collapse:collapse;font-size:13.5px}
.summary-table th{background:var(--gray-50);padding:9px 12px;text-align:left;font-size:10px;
  font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--gray-500);border-bottom:1px solid var(--gray-200)}
.summary-table td{padding:9px 12px;border-bottom:1px solid var(--gray-100)}
.summary-table tr:hover td{background:var(--gray-50)}
.badge-j{background:var(--success-light);color:var(--success);font-weight:700;padding:2px 7px;border-radius:5px;font-size:11px}
.badge-oj{background:var(--danger-light);color:var(--danger);font-weight:700;padding:2px 7px;border-radius:5px;font-size:11px}
.badge-ans{background:var(--primary-light);color:var(--primary);font-weight:600;padding:2px 7px;border-radius:5px;font-size:11px}

/* RICHTLIJN */
.rl-card{background:#fff;border:1px solid var(--gray-200);border-radius:var(--radius);padding:18px;margin-bottom:12px}
.rl-card h3{font-size:14px;font-weight:700;color:var(--gray-900);margin-bottom:3px}
.rl-card .rl-org{font-size:11px;color:var(--gray-400);margin-bottom:10px}
.rl-steps{list-style:none;counter-reset:step}
.rl-steps li{padding:4px 0 4px 20px;position:relative;font-size:13.5px;counter-increment:step}
.rl-steps li::before{content:counter(step);position:absolute;left:0;background:var(--primary);color:#fff;
  font-size:9px;font-weight:700;width:15px;height:15px;border-radius:50%;display:flex;align-items:center;justify-content:center;top:5px}

/* CASUS */
.casus-card{background:#fff;border:1.5px solid var(--gray-200);border-radius:12px;padding:20px;margin-bottom:18px}
.casus-label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--gray-400);margin-bottom:7px}
.casus-text{font-size:14px;color:var(--gray-700);line-height:1.8;margin-bottom:14px;background:var(--gray-50);border-radius:8px;padding:12px}
.casus-q{border-top:1px solid var(--gray-100);padding:10px 0}
.casus-q-text{font-size:13.5px;font-weight:600;color:var(--gray-800);margin-bottom:7px}
.casus-answer{display:none;background:var(--success-light);border-radius:8px;padding:9px 12px;font-size:13.5px;margin-top:7px}
.casus-answer.show{display:block}

/* GESPREK */
.gesprek-card{background:#fff;border:1px solid var(--gray-200);border-radius:12px;overflow:hidden;margin-bottom:14px}
.gesprek-scene{background:var(--primary-light);padding:12px 16px;font-size:12.5px;color:var(--primary-dark);font-weight:600}
.gesprek-body{padding:14px 16px}
.msg{display:flex;gap:9px;margin-bottom:10px}
.msg-tandarts{flex-direction:row-reverse}
.msg-avatar{width:30px;height:30px;border-radius:50%;background:var(--primary);color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0}
.msg-tandarts .msg-avatar{background:var(--success)}
.msg-bubble{background:var(--gray-100);border-radius:11px;padding:9px 12px;font-size:13px;max-width:80%}
.msg-tandarts .msg-bubble{background:var(--primary-light);color:var(--primary-dark)}
.msg-name{font-size:9px;font-weight:700;color:var(--gray-400);margin-bottom:2px}

/* FOOTER */
.page-footer{border-top:1px solid var(--gray-200);margin-top:36px;padding:18px 0;text-align:center;font-size:12px;color:var(--gray-400)}

@media(max-width:768px){
  #sidebar{transform:translateX(-100%)}
  #main{margin-left:0}
  #content{padding:14px}
  .exam-grid{grid-template-columns:1fr 1fr}
  .cheat-grid{grid-template-columns:repeat(3,1fr)}
}
*{scrollbar-width:thin;scrollbar-color:var(--gray-200) transparent}
</style>
</head>
<body>
'''

print("HEAD written, length:", len(HEAD))
with open(OUTPUT, 'w', encoding='utf-8') as f:
    f.write(HEAD)
print("Done writing HEAD")

# ─────────────────────────────────────────────────────────────────────────────
# SIDEBAR + TOPBAR
# ─────────────────────────────────────────────────────────────────────────────
SIDEBAR = '''
<nav id="sidebar">
  <div class="sidebar-logo">
    <h2>🦷 BI Toets Platform</h2>
    <p>Studiegids voor BIG-registratie tandartsen</p>
  </div>
  <div class="sidebar-exam-info">
    <strong>📊 Examenstructuur</strong>
    <div class="exam-pill"><span>Basisch-Medisch</span><span class="ep-num">100 mc</span></div>
    <div class="exam-pill"><span>Tandheelkunde I</span><span class="ep-num">70 mc+open</span></div>
    <div class="exam-pill"><span>Tandheelkunde II</span><span class="ep-num">100 mc</span></div>
    <div class="exam-pill"><span>Radiologie &amp; Wetenschap</span><span class="ep-num">35 mc+open</span></div>
  </div>
  <div class="nav-group">
    <div class="nav-group-label">Start</div>
    <button class="nav-item active" onclick="showPage('home',this)">🏠 &nbsp;Overzicht</button>
  </div>
  <div class="nav-group">
    <div class="nav-group-label">Tandheelkunde I</div>
    <button class="nav-item" onclick="showPage('paro',this)">🔴 &nbsp;Parodontologie<span class="nav-badge">15 mc</span></button>
    <button class="nav-item" onclick="showPage('endo',this)">🔵 &nbsp;Endodontologie<span class="nav-badge">20 mc</span></button>
    <button class="nav-item" onclick="showPage('cario',this)">🟡 &nbsp;Cariologie<span class="nav-badge">15 mc</span></button>
    <button class="nav-item" onclick="showPage('pedo',this)">🟢 &nbsp;Pedodontologie<span class="nav-badge">10 mc</span></button>
    <button class="nav-item" onclick="showPage('speeksel',this)">💧 &nbsp;Speeksel &amp; Orale Bio<span class="nav-badge">10 mc</span></button>
    <button class="nav-item" onclick="showPage('sociale',this)">🤝 &nbsp;Sociale TH / Ethiek<span class="nav-badge">open</span></button>
  </div>
  <div class="nav-group">
    <div class="nav-group-label">Tandheelkunde II</div>
    <button class="nav-item" onclick="showPage('kinesio',this)">🧠 &nbsp;Kinesiologie / TMD<span class="nav-badge">10 mc</span></button>
    <button class="nav-item" onclick="showPage('functie',this)">🦷 &nbsp;Orale Functieleer / MZK<span class="nav-badge">35+25 mc</span></button>
    <button class="nav-item" onclick="showPage('pato',this)">🔬 &nbsp;Orale Pathologie<span class="nav-badge">15 mc</span></button>
    <button class="nav-item" onclick="showPage('ortho',this)">📐 &nbsp;Orthodontie<span class="nav-badge">15 mc</span></button>
  </div>
  <div class="nav-group">
    <div class="nav-group-label">Basisch-Medisch</div>
    <button class="nav-item" onclick="showPage('basis',this)">⚕️ &nbsp;Basis Medisch<span class="nav-badge">100 mc</span></button>
  </div>
  <div class="nav-group">
    <div class="nav-group-label">Radiologie &amp; Wetenschap</div>
    <button class="nav-item" onclick="showPage('radio',this)">📡 &nbsp;Radiologie<span class="nav-badge">20 mc</span></button>
    <button class="nav-item" onclick="showPage('statistiek',this)">📊 &nbsp;Statistiek<span class="nav-badge">15 mc</span></button>
    <button class="nav-item" onclick="showPage('methodologie',this)">🔭 &nbsp;Methodologie / EBM<span class="nav-badge">open</span></button>
  </div>
  <div class="nav-group">
    <div class="nav-group-label">Casussen &amp; Vaardigheden</div>
    <button class="nav-item" onclick="showPage('bp1',this)">📋 &nbsp;Behandelplan 1</button>
    <button class="nav-item" onclick="showPage('bp2',this)">📋 &nbsp;Behandelplan 2</button>
    <button class="nav-item" onclick="showPage('casus',this)">📄 &nbsp;Korte Casus</button>
    <button class="nav-item" onclick="showPage('endo_trauma',this)">🚑 &nbsp;Endo Trauma &amp; Pijn</button>
    <button class="nav-item" onclick="showPage('gesprek',this)">💬 &nbsp;CNT Gesprek</button>
  </div>
  <div class="nav-group">
    <div class="nav-group-label">Referentie</div>
    <button class="nav-item" onclick="showPage('richtlijnen',this)">📚 &nbsp;Actuele Richtlijnen</button>
  </div>
</nav>
<main id="main">
  <div id="topbar">
    <h1 id="topbar-title">BI Toets Studieplatform</h1>
    <div class="top-chip"><span>305+</span> vragen</div>
    <div class="top-chip"><span>12</span> modules</div>
  </div>
  <div id="content">
'''

with open(OUTPUT, 'a', encoding='utf-8') as f:
    f.write(SIDEBAR)
print("SIDEBAR written, total length:", os.path.getsize(OUTPUT))
