import os
OUTPUT = '/sessions/determined-eloquent-pasteur/mnt/outputs/BI_Toets_Studieplatform.html'

HOME = '''
<!-- ██████████████████████ HOME ██████████████████████ -->
<div class="page active" id="page-home">
  <div class="hero">
    <div class="hero-badge">🎓 BI Toets Voorbereiding 2024-2026</div>
    <h1>Studieplatform voor BIG-registratie</h1>
    <p>Volledig interactief studieplatform voor tandartsen die de BI Toets willen afleggen. Inclusief studienotities, samenvatting en uitgebreide oefentoetsen met échte cikmış sorular.</p>
    <div class="hero-stats">
      <div class="hero-stat"><span class="num">305+</span><span class="lbl">MC vragen</span></div>
      <div class="hero-stat"><span class="num">4</span><span class="lbl">Toetsblokken</span></div>
      <div class="hero-stat"><span class="num">80%</span><span class="lbl">Slagingsgrens</span></div>
      <div class="hero-stat"><span class="num">400+</span><span class="lbl">Oefenvragen</span></div>
    </div>
  </div>

  <h3 style="font-size:15px;font-weight:700;margin-bottom:12px;color:var(--gray-700)">📊 Examenstructuur – BI Toets voor 6.0</h3>
  <div class="exam-grid">
    <div class="exam-card" onclick="showPage('basis',null)">
      <div class="ec-icon">⚕️</div>
      <div class="ec-title">Basisch-Medisch</div>
      <div class="ec-sub">Ziektenleer (30), Farmacologie (20), Anesthesie (5), Fysiologie (20), Microbiologie (10), Orale Biologie (15)</div>
      <div class="ec-nums"><div class="ec-num-badge"><strong>100</strong> mc</div><div class="ec-num-badge">max <strong>20</strong> fout</div></div>
    </div>
    <div class="exam-card" onclick="showPage('paro',null)">
      <div class="ec-icon">🦷</div>
      <div class="ec-title">Tandheelkunde I</div>
      <div class="ec-sub">Cariologie (15), Endo (20), Pedo (10), Paro (15), Speeksel (10) + Sociale TH/Ethiek open vragen</div>
      <div class="ec-nums"><div class="ec-num-badge"><strong>70</strong> mc</div><div class="ec-num-badge">max <strong>14</strong> fout</div></div>
    </div>
    <div class="exam-card" onclick="showPage('kinesio',null)">
      <div class="ec-icon">🔬</div>
      <div class="ec-title">Tandheelkunde II</div>
      <div class="ec-sub">Kinesiologie (10), Orale Functieleer (35), MZK (25), Orale Pathologie (15), Orthodontie (15)</div>
      <div class="ec-nums"><div class="ec-num-badge"><strong>100</strong> mc</div><div class="ec-num-badge">max <strong>20</strong> fout</div></div>
    </div>
    <div class="exam-card" onclick="showPage('radio',null)">
      <div class="ec-icon">📡</div>
      <div class="ec-title">Radiologie &amp; Wetenschap</div>
      <div class="ec-sub">Radiologie (20 mc), Statistiek (15 mc), EBM/Methodologie (open vragen)</div>
      <div class="ec-nums"><div class="ec-num-badge"><strong>35</strong> mc</div><div class="ec-num-badge">max <strong>7</strong> fout</div></div>
    </div>
  </div>

  <h3 style="font-size:15px;font-weight:700;margin-bottom:12px;color:var(--gray-700)">⚡ Kritieke getallen</h3>
  <div class="cheat-grid">
    <div class="cheat-item"><span class="ci-val">80%</span><span class="ci-key">Slagingsgrens MC</span></div>
    <div class="cheat-item c-green"><span class="ci-val">20</span><span class="ci-key">Max fouten BM (100 mc)</span></div>
    <div class="cheat-item c-green"><span class="ci-val">14</span><span class="ci-key">Max fouten THK I (70 mc)</span></div>
    <div class="cheat-item c-green"><span class="ci-val">20</span><span class="ci-key">Max fouten THK II (100 mc)</span></div>
    <div class="cheat-item c-green"><span class="ci-val">7</span><span class="ci-key">Max fouten R&amp;W (35 mc)</span></div>
    <div class="cheat-item c-orange"><span class="ci-val">55pt</span><span class="ci-key">Open vragen weging</span></div>
  </div>
  <div class="success-box">💡 <strong>Tip:</strong> Voor een voldoende (6.0) dient minimaal <strong>80%</strong> van de MC-vragen correct beantwoord te worden. Open vragen tellen voor 50% mee bij Tandheelkunde I en Radiologie &amp; Wetenschap.</div>

  <h3 style="font-size:15px;font-weight:700;margin:20px 0 12px;color:var(--gray-700)">📚 Studiemodules</h3>
  <div class="exam-grid" style="grid-template-columns:repeat(auto-fill,minmax(180px,1fr))">
    <div class="exam-card" onclick="showPage('paro',null)"><div class="ec-icon">🔴</div><div class="ec-title">Parodontologie</div><div class="ec-sub">DPSI, BOP, classificaties, behandeling</div></div>
    <div class="exam-card" onclick="showPage('endo',null)"><div class="ec-icon">🔵</div><div class="ec-title">Endodontologie</div><div class="ec-sub">Wortelkanaalbehandeling, trauma, pijn</div></div>
    <div class="exam-card" onclick="showPage('cario',null)"><div class="ec-icon">🟡</div><div class="ec-title">Cariologie</div><div class="ec-sub">Caries pathologie, preventie, fluoride</div></div>
    <div class="exam-card" onclick="showPage('pedo',null)"><div class="ec-icon">🟢</div><div class="ec-title">Pedodontologie</div><div class="ec-sub">Kindergebitszorg, melkgebit</div></div>
    <div class="exam-card" onclick="showPage('basis',null)"><div class="ec-icon">⚕️</div><div class="ec-title">Basis Medisch</div><div class="ec-sub">Farmacologie, microbiologie, fysiologie</div></div>
    <div class="exam-card" onclick="showPage('radio',null)"><div class="ec-icon">📡</div><div class="ec-title">Radiologie</div><div class="ec-sub">Röntgendiagnostiek, stralingsbescherming</div></div>
    <div class="exam-card" onclick="showPage('kinesio',null)"><div class="ec-icon">🧠</div><div class="ec-title">Kinesiologie / TMD</div><div class="ec-sub">Kaakgewricht, spierpijn, OSAS</div></div>
    <div class="exam-card" onclick="showPage('functie',null)"><div class="ec-icon">🦷</div><div class="ec-title">Functieleer / MZK</div><div class="ec-sub">Occlusie, implantologie, prothetiek</div></div>
    <div class="exam-card" onclick="showPage('statistiek',null)"><div class="ec-icon">📊</div><div class="ec-title">Statistiek</div><div class="ec-sub">Sensitiviteit, specificiteit, NNT</div></div>
    <div class="exam-card" onclick="showPage('richtlijnen',null)"><div class="ec-icon">📚</div><div class="ec-title">Richtlijnen</div><div class="ec-sub">KIMO, NVvP, KiMo richtlijnen</div></div>
    <div class="exam-card" onclick="showPage('gesprek',null)"><div class="ec-icon">💬</div><div class="ec-title">CNT Gesprek</div><div class="ec-sub">Communicatie, motiverende gespreksvoering</div></div>
    <div class="exam-card" onclick="showPage('endo_trauma',null)"><div class="ec-icon">🚑</div><div class="ec-title">Endo Trauma &amp; Pijn</div><div class="ec-sub">Tandtrauma, acuut pijnmanagement</div></div>
  </div>

  <div class="page-footer">BI Toets Studieplatform · Alle vragen zijn gebaseerd op cikmış sorular (echte examenopgaven) · Aangemaakt 2024</div>
</div>
'''

with open(OUTPUT, 'a', encoding='utf-8') as f:
    f.write(HOME)
print("HOME written, total:", os.path.getsize(OUTPUT))
