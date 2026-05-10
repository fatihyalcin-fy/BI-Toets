import os
OUTPUT = '/sessions/determined-eloquent-pasteur/mnt/outputs/BI_Toets_Studieplatform.html'

PARO = '''
<!-- ██████████████████████ PARODONTOLOGIE ██████████████████████ -->
<div class="page" id="page-paro">
  <div class="section-hdr">
    <div class="section-icon si-red">🔴</div>
    <div><h2>Parodontologie</h2><p>THK I · 15 MC-vragen · Slagingsgrens 80%</p></div>
  </div>
  <div class="tab-bar">
    <button class="tab-btn active" onclick="openTab('paro','notities',this)">📖 Studienotities</button>
    <button class="tab-btn" onclick="openTab('paro','samenvatting',this)">⚡ Samenvatting</button>
    <button class="tab-btn" onclick="openTab('paro','cikmis',this)">📝 Cikmış Sorular</button>
    <button class="tab-btn" onclick="openTab('paro','oefen',this)">🧪 Oefentoets (AI)</button>
  </div>

  <!-- NOTITIES -->
  <div class="tab-content active" id="paro-notities">
    <div class="info-box">
      <div class="info-box-title">🎯 Kernthema's Parodontologie examen</div>
      <ul>
        <li>DPSI (Dutch Periodontal Screening Index) – scoringsysteem en interpretatie</li>
        <li>PPS (Parodontaal Peilsonde Score) – klinisch peilsonde gebruik</li>
        <li>BOP (Bleeding on Probing) – significantie, drempelwaarden</li>
        <li>Classificatie parodontale aandoeningen 2018 (AAP/EFP)</li>
        <li>Furcatie-betrokkenheid – Hamp-classificatie</li>
        <li>Antibioticabeleid – Amoxicilline + Metronidazol protocol</li>
        <li>ANUG/ANUP – acute necrotiserende ulceratieve gingivitis/parodontitis</li>
        <li>Systemische aandoeningen en parodontitis (diabetes, roken)</li>
      </ul>
    </div>

    <div class="theory-card open">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-red">Diagnostiek</span>
        <h3>DPSI – Dutch Periodontal Screening Index</h3>
        <span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <p>De DPSI is een screeningsinstrument voor parodontale zorg in Nederland, gebaseerd op de CPI (Community Periodontal Index).</p>
        <table>
          <tr><th>Score</th><th>Bevinding</th><th>Actie</th></tr>
          <tr><td><strong>0</strong></td><td>Geen bijzonderheden, geen bloeding</td><td>Geen behandeling nodig</td></tr>
          <tr><td><strong>1</strong></td><td>Bloeding na sonderen (BOP+)</td><td>Instructie mondhygiëne</td></tr>
          <tr><td><strong>2</strong></td><td>Subgingivale tandsteen / overhangen</td><td>Verwijderen tandsteen, instructie</td></tr>
          <tr><td><strong>3</strong></td><td>Pocket 3,5–5,5 mm (zwarte band gedeeltelijk zichtbaar)</td><td>Subgingivale reiniging, her-evaluatie</td></tr>
          <tr><td><strong>4</strong></td><td>Pocket ≥ 5,5 mm (zwarte band volledig in pocket)</td><td>Uitgebreide behandeling, evt. paro-specialist</td></tr>
          <tr><td><strong>*</strong></td><td>Furcatie-betrokkenheid, meer dan 7 mm verlies, tandmobiliteit</td><td>Aan score toevoegen, specialistenverwijzing overwegen</td></tr>
        </table>
        <div class="info-box" style="margin-top:12px">
          <div class="info-box-title">Sextanten bij DPSI</div>
          <ul>
            <li>6 sextanten: 17-14 | 13-23 | 24-27 | 37-34 | 33-43 | 44-47</li>
            <li>Per sextant wordt de <strong>hoogste</strong> score geregistreerd</li>
            <li>Sextant wordt niet gescoord als er minder dan 2 tanden aanwezig zijn</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-orange">Classificatie</span>
        <h3>2018 Classificatie Parodontale Aandoeningen (AAP/EFP)</h3>
        <span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <p><strong>Gingivale aandoeningen:</strong></p>
        <ul>
          <li>Plaquegeïnduceerde gingivitis (reversibel, geen botverlies)</li>
          <li>Niet-plaquegeïnduceerde gingivale aandoeningen (viraal, bacterieel, schimmel, genetisch)</li>
        </ul>
        <p style="margin-top:10px"><strong>Parodontitis – Stadia en Graden:</strong></p>
        <table>
          <tr><th>Stadium</th><th>Kenmerk</th><th>Ernst</th></tr>
          <tr><td>I</td><td>Pocket ≤4 mm, geen furcatie, geen tandverlies</td><td>Licht</td></tr>
          <tr><td>II</td><td>Pocket 5-6 mm, furcatie klasse I-II, geen tandverlies door paro</td><td>Matig</td></tr>
          <tr><td>III</td><td>Pocket ≥7 mm, furcatie klasse III, tandverlies ≤4 elementen</td><td>Ernstig</td></tr>
          <tr><td>IV</td><td>Stadium III + kauwfunctieverlies, masticatieproblemen</td><td>Zeer ernstig</td></tr>
        </table>
        <table style="margin-top:10px">
          <tr><th>Graad</th><th>Progressie</th><th>Risicofactoren</th></tr>
          <tr><td>A</td><td>Langzaam (&lt;2mm/5j)</td><td>Geen roken, normaal glucose</td></tr>
          <tr><td>B</td><td>Matig</td><td>&lt;10 sig/dag, HbA1c &lt;7%</td></tr>
          <tr><td>C</td><td>Snel (≥2mm/5j)</td><td>&gt;10 sig/dag, HbA1c ≥7%, biofilm onvoldoende verklaring</td></tr>
        </table>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-blue">Behandeling</span>
        <h3>Parodontale Behandelfasen</h3>
        <span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <ul>
          <li><strong>Fase 1 – Initieel:</strong> Mondhygiëne-instructie, supragin. scaling, eliminatie risicofactoren (roken, diabetes regulatie)</li>
          <li><strong>Fase 2 – Causaal:</strong> Subgingivaal root planing, SRP (Scaling and Root Planing), eventueel adjuvante antibiotica</li>
          <li><strong>Her-evaluatie:</strong> 4-8 weken na Fase 2 (wachten op tissue remodeling)</li>
          <li><strong>Fase 3 – Correctief:</strong> Chirurgie indien residuele pockets ≥6mm na her-evaluatie</li>
          <li><strong>Fase 4 – Onderhoud (SPT):</strong> Supportive Periodontal Therapy, frequentie afhankelijk van risico</li>
        </ul>
        <div class="warn-box">⚠️ <strong>Her-evaluatie:</strong> Altijd 4-8 weken na subgingivale reiniging, VÓÓR beslissing over chirurgie.</div>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-purple">Antibiotica</span>
        <h3>Antibioticabeleid bij Parodontitis</h3>
        <span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <ul>
          <li><strong>Indicatie:</strong> Agressieve parodontitis (nu: Stadium III/IV Graad C), jonge patiënten, snelle progressie</li>
          <li><strong>Protocol NVvP:</strong> Amoxicilline 500mg 3x/dag + Metronidazol 500mg 3x/dag, 7 dagen</li>
          <li><strong>Penicillineallergie:</strong> Metronidazol 500mg 3x/dag monotherapie OF Clindamycine 300mg 3x/dag</li>
          <li><strong>Timing:</strong> Systemische AB direct na (of tijdens) de subgingivale reiniging (niet als monotherapie)</li>
          <li><strong>Lokale AB:</strong> Doxycycline gel (Atridox), Metronidazol gel – bij residuele pockets als aanvulling</li>
        </ul>
        <div class="danger-box">🚫 AB nooit als vervanging voor mechanische reiniging – altijd gecombineerd!</div>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-red">Acuut</span>
        <h3>ANUG / ANUP – Acute Necrotiserende Aandoeningen</h3>
        <span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <ul>
          <li><strong>ANUG</strong> (Acute Necrotiserende Ulceratieve Gingivitis): alleen gingiva aangedaan, geen botverlies</li>
          <li><strong>ANUP</strong> (Acute Necrotiserende Ulceratieve Parodontitis): ook bot- en attachmentverlies</li>
          <li><strong>Symptomen:</strong> Interdentale necrose (uitgevreten papillen), spontane bloeding, fetor ex ore, pijn, eventueel koorts</li>
          <li><strong>Predisponerende factoren:</strong> Stress, slechte mondhygiëne, roken, immunosuppressie (HIV!), malnutritie</li>
          <li><strong>Behandeling:</strong> Voorzichtige debridement, chloorhexidine 0,12-0,2% spoelen, pijnstilling, eventueel Metronidazol 250mg 3x/dag 7 dagen, rookstop</li>
          <li><strong>Oppassen:</strong> Kies zachtaardige debridement (niet agressief) vanwege pijn en weefselkwetsbaarheid</li>
        </ul>
        <div class="success-box">✅ Klassiek examen-hint: jonge man, stress (student), roker → ANUG. Behandeling = GEEN agressieve reiniging, eerst stabilisatie!</div>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-teal">Furcatie</span>
        <h3>Furcatie-betrokkenheid – Hamp-classificatie</h3>
        <span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <table>
          <tr><th>Klasse</th><th>Sondeerbevinding</th><th>Prognose</th></tr>
          <tr><td>I</td><td>&lt;3 mm horizontaal in furcatie</td><td>Goed, behandelbaar</td></tr>
          <tr><td>II</td><td>≥3 mm horizontaal, maar niet door-en-door</td><td>Matig, chirurgie overwegen</td></tr>
          <tr><td>III</td><td>Door-en-door sondering mogelijk</td><td>Slecht, extractie overwegen</td></tr>
        </table>
        <p style="margin-top:10px">Furcatie-betrokkenheid wordt bij DPSI als asterisk (*) genoteerd.</p>
        <div class="warn-box">⚠️ Molaren bovenkaak: 3 furcaties (mesiobuccaal, distobuccaal, palatinaal). Molaren onderkaak: 2 furcaties (mesiaal, distaal).</div>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-green">Risicofactoren</span>
        <h3>Systemische Factoren &amp; Parodontitis</h3>
        <span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <ul>
          <li><strong>Roken:</strong> Sterkste modificeerbare risicofactor. Vermindert BOP (maskering!), vermindert angiogenese. DPSI-score kan vals laag lijken.</li>
          <li><strong>Diabetes mellitus:</strong> Bi-directionele relatie. Slecht gereguleerde DM (HbA1c &gt;7%) → ernstiger parodontitis. Parodontitis behandeling kan HbA1c verbeteren met 0,4%.</li>
          <li><strong>Medicamenten:</strong> Fenytoïne, ciclosporine, nifedipine → gingivale hyperplasie</li>
          <li><strong>Zwangerschap:</strong> Hormonale veranderingen → zwangerschapsgingivitis (verhoogde respons op plaque), REVERSIBEL na bevalling</li>
          <li><strong>Osteoporose:</strong> Indirect risico via verminderde botdensiteit</li>
          <li><strong>Stress:</strong> Via immunosuppressie en cortisolverhoging</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- SAMENVATTING -->
  <div class="tab-content" id="paro-samenvatting">
    <h3 style="font-size:15px;font-weight:700;margin-bottom:14px">⚡ Snelle herhaling – Parodontologie</h3>
    <table class="summary-table">
      <tr><th>Concept</th><th>Kernpunt</th><th>Status</th></tr>
      <tr><td>DPSI 0</td><td>Gezond, geen bloeding</td><td><span class="badge-j">OK</span></td></tr>
      <tr><td>DPSI 1</td><td>Bloeding → mondhygiëne instructie</td><td><span class="badge-ans">MHI</span></td></tr>
      <tr><td>DPSI 2</td><td>Tandsteen/overhangen → verwijderen</td><td><span class="badge-ans">Scaling</span></td></tr>
      <tr><td>DPSI 3</td><td>Pocket 3,5-5,5mm → SRP</td><td><span class="badge-ans">SRP</span></td></tr>
      <tr><td>DPSI 4</td><td>Pocket ≥5,5mm → specialist</td><td><span class="badge-oj">Specialist</span></td></tr>
      <tr><td>ANUG</td><td>Necrose papillen, pijn, fetor, GEEN bot</td><td><span class="badge-oj">Acuut</span></td></tr>
      <tr><td>ANUP</td><td>ANUG + botverlies</td><td><span class="badge-oj">Ernstig</span></td></tr>
      <tr><td>AB beleid</td><td>Amoxicilline 500 + Metronidazol 500, 3x/dag, 7d</td><td><span class="badge-ans">Protocol</span></td></tr>
      <tr><td>Furcatie II</td><td>≥3mm, niet door-en-door</td><td><span class="badge-ans">Matig</span></td></tr>
      <tr><td>Furcatie III</td><td>Door-en-door → slechte prognose</td><td><span class="badge-oj">Slecht</span></td></tr>
      <tr><td>Her-evaluatie</td><td>4-8 weken na subgingivale reiniging</td><td><span class="badge-ans">Timing</span></td></tr>
      <tr><td>Roken &amp; BOP</td><td>Roken onderdrukt BOP → vals negatief!</td><td><span class="badge-oj">Let op!</span></td></tr>
    </table>
    <div class="warn-box" style="margin-top:14px">⚠️ <strong>Veelgemaakte fout:</strong> Roken geeft vals lage BOP – de ernst van parodontitis wordt onderschat bij rokers!</div>
  </div>

  <!-- CIKMIS SORULAR -->
  <div class="tab-content" id="paro-cikmis">
    <div class="quiz-controls">
      <button class="btn btn-primary" onclick="startQuiz('paro_cikmis')">▶ Start toets</button>
      <button class="btn btn-secondary" onclick="resetQuiz('paro_cikmis')">↺ Opnieuw</button>
      <div class="quiz-progress" id="paro_cikmis-progress">Nog niet gestart</div>
    </div>
    <div id="paro_cikmis-score" style="display:none"></div>
    <div id="paro_cikmis-quiz"></div>
  </div>

  <!-- OEFENTOETS -->
  <div class="tab-content" id="paro-oefen">
    <div class="info-box">
      <div class="info-box-title">🤖 AI-gegenereerde oefenvragen</div>
      <ul><li>Gebaseerd op cikmış sorular – zelfde logica en moeilijkheidsgraad</li>
      <li>Extra oefening voor examenpreparatie</li></ul>
    </div>
    <div class="quiz-controls">
      <button class="btn btn-primary" onclick="startQuiz('paro_oefen')">▶ Start oefentoets</button>
      <button class="btn btn-secondary" onclick="resetQuiz('paro_oefen')">↺ Opnieuw</button>
      <div class="quiz-progress" id="paro_oefen-progress">Nog niet gestart</div>
    </div>
    <div id="paro_oefen-score" style="display:none"></div>
    <div id="paro_oefen-quiz"></div>
  </div>
</div>
'''

with open(OUTPUT, 'a', encoding='utf-8') as f:
    f.write(PARO)
print("PARO written, total:", os.path.getsize(OUTPUT))
