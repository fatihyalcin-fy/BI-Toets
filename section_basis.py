import os
OUTPUT = '/sessions/determined-eloquent-pasteur/mnt/outputs/BI_Toets_Studieplatform.html'

BASIS = '''
<!-- ██████ BASIS MEDISCH ██████ -->
<div class="page" id="page-basis">
  <div class="section-hdr">
    <div class="section-icon si-green">⚕️</div>
    <div><h2>Basisch-Medisch</h2><p>100 MC-vragen · Max 20 fout · Slagingsgrens 80%</p></div>
  </div>
  <div class="tab-bar">
    <button class="tab-btn active" onclick="openTab('basis','notities',this)">📖 Studienotities</button>
    <button class="tab-btn" onclick="openTab('basis','samenvatting',this)">⚡ Samenvatting</button>
    <button class="tab-btn" onclick="openTab('basis','cikmis',this)">📝 Cikmış Sorular</button>
    <button class="tab-btn" onclick="openTab('basis','oefen',this)">🧪 Oefentoets (AI)</button>
  </div>
  <div class="tab-content active" id="basis-notities">
    <div class="info-box"><div class="info-box-title">🎯 Verdeling 100 MC-vragen Basisch-Medisch</div>
    <ul>
      <li>Ziektenleer (30 mc) – cardiovasculair, respiratoir, endocrien, immunologie</li>
      <li>Farmacologie (20 mc) – analgetica, antibiotica, anesthesie, wisselwerkingen</li>
      <li>Anesthesie (5 mc) – lokaalanesthesie technieken en farmacologie</li>
      <li>Fysiologie (20 mc) – cardiovasculair, zenuwstelsel, pijn</li>
      <li>Microbiologie (10 mc) – bacteriën, virussen, sterilisatie, infectiepreventie</li>
    </ul></div>

    <div class="theory-card open">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-green">Farmacologie</span><h3>Analgetica en Pijnmanagement</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <table>
          <tr><th>Geneesmiddel</th><th>Klasse</th><th>Werkingsmechanisme</th><th>Max dosis/dag</th></tr>
          <tr><td>Paracetamol</td><td>Niet-opioid</td><td>Centraal (COX-3?), perifeer antipyretisch</td><td>4g (1g per 6u)</td></tr>
          <tr><td>Ibuprofen</td><td>NSAID</td><td>COX-1 + COX-2 remming</td><td>1200-2400mg</td></tr>
          <tr><td>Naproxen</td><td>NSAID</td><td>COX-1 + COX-2 remming, langer werkend</td><td>1000mg</td></tr>
          <tr><td>Diclofenac</td><td>NSAID</td><td>COX-2 selectiever</td><td>150mg</td></tr>
          <tr><td>Codeine</td><td>Opioid (zwak)</td><td>Mu-opioid receptor</td><td>240mg</td></tr>
          <tr><td>Tramadol</td><td>Opioid (zwak) + SNRI</td><td>Mu-opioid + noradrenaline/serotonine</td><td>400mg</td></tr>
        </table>
        <div class="warn-box">⚠️ NSAID's gecontraïndiceerd bij: maagulcus, nierfunctiestoornissen, zwangerschap 3e trimester, astma (aspirin-intolerantie), bloedstollingsstoornissen, anticoagulantia!</div>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-blue">Anesthesie</span><h3>Lokaalanesthesie in de Tandheelkunde</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <table>
          <tr><th>Stof</th><th>Amide/Ester</th><th>Werking</th><th>Max dosis (zonder vasoconstrictor)</th></tr>
          <tr><td>Lidocaïne 2%</td><td>Amide</td><td>Snel, 1-2 uur</td><td>300mg (4,3 mg/kg)</td></tr>
          <tr><td>Articaïne 4%</td><td>Amide</td><td>Snel, uitstekende weefselverspreiding</td><td>500mg (7mg/kg)</td></tr>
          <tr><td>Mepivacaïne 3%</td><td>Amide</td><td>Zonder vasoconstrictor beschikbaar</td><td>400mg</td></tr>
          <tr><td>Prilocaïne</td><td>Amide</td><td>Methemoglobinemie bij hoge dosis!</td><td>400mg</td></tr>
          <tr><td>Bupivacaïne 0,5%</td><td>Amide</td><td>Lang werkend (4-8 uur), postoperatieve pijn</td><td>150mg</td></tr>
        </table>
        <p style="margin-top:10px"><strong>Vasoconstrictors:</strong></p>
        <ul>
          <li>Adrenaline (epinefrine): 1:100.000 of 1:200.000. Verlengd anesthesie, vermindert bloeding.</li>
          <li>Felypressine: Alternatief bij hartpatiënten (minder cardiale bijwerkingen)</li>
          <li>Max adrenaline: 0,2 mg per sessie (hartpatiënt max 0,04 mg)</li>
        </ul>
        <div class="danger-box">🚫 Articaïne NIET gebruiken voor blokkade N. lingualis of N. alveolaris inferior → verhoogd risico paresthesie (t.o.v. lidocaïne)!</div>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-orange">Antibiotica</span><h3>Antibiotica in de Tandheelkunde</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <table>
          <tr><th>Antibioticum</th><th>Werkingsspectrum</th><th>Indicatie tandheelkunde</th></tr>
          <tr><td>Amoxicilline</td><td>Breed spectrum, gram+/gram-</td><td>Orofaciale infecties, profylaxe endocarditis</td></tr>
          <tr><td>Amoxicilline/Clavulaanzuur</td><td>Breed + bètalactamase-resistente bacteriën</td><td>Ernstige odontogene infecties</td></tr>
          <tr><td>Metronidazol</td><td>Anaeroben</td><td>ANUG, paro AB, gecombineerd met amoxicilline</td></tr>
          <tr><td>Clindamycine</td><td>Gram+ (inclusief anaeroben)</td><td>Penallergie alternatief, orofaciale infecties</td></tr>
          <tr><td>Doxycycline</td><td>Tetracycline, breed spectrum</td><td>Paro (lokaal), avulsie, Lyme</td></tr>
        </table>
        <div class="warn-box">⚠️ Clindamycine → verhoogd risico Clostridioides difficile colitis. Niet standaard eerste keus!</div>
        <p style="margin-top:10px"><strong>Endocarditis profylaxe:</strong> Amoxicilline 2g oraal 30-60 min voor ingreep (of Clindamycine 600mg bij penallergie). Indicatie: Hoog-risico hartafwijking (kunstklep, eerder doorgemaakte endocarditis, congenitale hartafwijking).</p>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-purple">Ziektenleer</span><h3>Cardiovasculaire Aandoeningen voor Tandartsen</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <table>
          <tr><th>Aandoening</th><th>Relevantie tandheelkunde</th><th>Actie</th></tr>
          <tr><td>Hypertensie</td><td>Adrenaline voorzichtig (&lt;0,04mg bij gecontroleerd); geen elektieve zorg bij RR&gt;180/110</td><td>Meten voor behandeling</td></tr>
          <tr><td>Angina pectoris</td><td>Stress vermijden, korte afspraken, nitroglycerine aanwezig</td><td>Horizontale stoel riskant</td></tr>
          <tr><td>Recent MI (&lt;6m)</td><td>Geen elektieve tandheelkunde!</td><td>Uitstellen tot 6 maanden</td></tr>
          <tr><td>Antistolling (Warfarine)</td><td>INR meten voor invasieve ingrepen. INR ≤3,5 = tanden trekken OK met lokale hemostase</td><td>INR check</td></tr>
          <tr><td>DOAC (apixaban, rivaroxaban)</td><td>Laatste dosis overslaan voor invasief ingreep, overleg cardioloog</td><td>Protocol volgen</td></tr>
          <tr><td>Diabetes</td><td>Hogere infectierisico, verminderde genezing, periodontitis relatie</td><td>HbA1c kennen</td></tr>
        </table>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-red">Microbiologie</span><h3>Infectiepreventie en Sterilisatie</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <table>
          <tr><th>Methode</th><th>Toepassing</th><th>Effectief tegen</th></tr>
          <tr><td>Autoclaaf (121°C/20min of 134°C/4min)</td><td>Instrumenten met warmteresistentie</td><td>Alle micro-organismen incl. sporen</td></tr>
          <tr><td>Droge hitte (160°C/2u)</td><td>Poeder, oliën (geen stoom)</td><td>Sporen, bakteriën, virussen</td></tr>
          <tr><td>Glutaaraldehyde 2%</td><td>Hittegevoelige instrumenten</td><td>Bacteriën, virussen, schimmels (langdurig ook sporen)</td></tr>
          <tr><td>Chloorhexidine</td><td>Huid, mondspoeling</td><td>Gram+ bacteriën, schimmels (GEEN sporen)</td></tr>
          <tr><td>Ethylenoxide (ETO)</td><td>Kunststof, elektronica</td><td>Alle micro-organismen incl. sporen</td></tr>
        </table>
        <div class="info-box">
          <div class="info-box-title">Prion-inactivatie</div>
          <ul>
            <li>Prionen zijn NIET gevoelig voor normale sterilisatie</li>
            <li>NaOH 1M + autoclaaf 134°C = meest effectieve methode</li>
            <li>Instrument van mogelijke CJD-patiënt → vernietigen</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="tab-content" id="basis-samenvatting">
    <h3 style="font-size:15px;font-weight:700;margin-bottom:14px">⚡ Snelle herhaling – Basisch-Medisch</h3>
    <table class="summary-table">
      <tr><th>Concept</th><th>Kernpunt</th><th>Let op</th></tr>
      <tr><td>Paracetamol max dosis</td><td>4g/dag (1g per 6 uur)</td><td><span class="badge-ans">Geen effect bij lever</span></td></tr>
      <tr><td>NSAID contraïndicaties</td><td>Maagulcus, nier, zwangerschap T3, astma</td><td><span class="badge-oj">Bloedingsrisico</span></td></tr>
      <tr><td>Lidocaïne max</td><td>300mg zonder adrenaline</td><td><span class="badge-ans">Amide</span></td></tr>
      <tr><td>Articaïne N. alv. inf.</td><td>Verhoogd paresthesie risico!</td><td><span class="badge-oj">Voorzichtig!</span></td></tr>
      <tr><td>Adrenaline max cardiac</td><td>0,04 mg per sessie</td><td><span class="badge-oj">Hartpatiënt</span></td></tr>
      <tr><td>Endocarditis profylaxe</td><td>Amoxicilline 2g 30-60 min voor ingreep</td><td><span class="badge-ans">Hoog-risico hart</span></td></tr>
      <tr><td>INR grens extractie</td><td>≤3,5 (geen stop anticoagulantia)</td><td><span class="badge-ans">Lokale hemostase</span></td></tr>
      <tr><td>Autoclaaf temperatuur</td><td>121°C/20min of 134°C/4min</td><td><span class="badge-ans">Goudstandaard</span></td></tr>
      <tr><td>Prion inactivatie</td><td>NaOH 1M + autoclaaf</td><td><span class="badge-oj">Uniek!</span></td></tr>
      <tr><td>Recent MI</td><td>Geen elektief voor 6 maanden</td><td><span class="badge-oj">Uitstellen!</span></td></tr>
    </table>
  </div>

  <div class="tab-content" id="basis-cikmis">
    <div class="quiz-controls">
      <button class="btn btn-primary" onclick="startQuiz('basis_cikmis')">▶ Start toets (Echte examenvragen)</button>
      <button class="btn btn-secondary" onclick="resetQuiz('basis_cikmis')">↺ Opnieuw</button>
      <div class="quiz-progress" id="basis_cikmis-progress">Nog niet gestart</div>
    </div>
    <div id="basis_cikmis-score" style="display:none"></div>
    <div id="basis_cikmis-quiz"></div>
  </div>

  <div class="tab-content" id="basis-oefen">
    <div class="info-box">
      <div class="info-box-title">🤖 AI-gegenereerde oefenvragen Basisch-Medisch</div>
      <ul><li>Gebaseerd op cikmış sorular stijl en moeilijkheidsgraad</li><li>Extra oefening voor alle 100 MC-vragen</li></ul>
    </div>
    <div class="quiz-controls">
      <button class="btn btn-primary" onclick="startQuiz('basis_oefen')">▶ Start oefentoets (AI)</button>
      <button class="btn btn-secondary" onclick="resetQuiz('basis_oefen')">↺ Opnieuw</button>
      <div class="quiz-progress" id="basis_oefen-progress">Nog niet gestart</div>
    </div>
    <div id="basis_oefen-score" style="display:none"></div>
    <div id="basis_oefen-quiz"></div>
  </div>
</div>
'''

with open(OUTPUT, 'a', encoding='utf-8') as f:
    f.write(BASIS)
print("BASIS written, total:", os.path.getsize(OUTPUT))
