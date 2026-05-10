import os
OUTPUT = '/sessions/determined-eloquent-pasteur/mnt/outputs/BI_Toets_Studieplatform.html'

ENDO = '''
<!-- ██████████████████████ ENDODONTOLOGIE ██████████████████████ -->
<div class="page" id="page-endo">
  <div class="section-hdr">
    <div class="section-icon si-blue">🔵</div>
    <div><h2>Endodontologie</h2><p>THK I · 20 MC-vragen · Slagingsgrens 80%</p></div>
  </div>
  <div class="tab-bar">
    <button class="tab-btn active" onclick="openTab('endo','notities',this)">📖 Studienotities</button>
    <button class="tab-btn" onclick="openTab('endo','samenvatting',this)">⚡ Samenvatting</button>
    <button class="tab-btn" onclick="openTab('endo','cikmis',this)">📝 Cikmış Sorular</button>
    <button class="tab-btn" onclick="openTab('endo','oefen',this)">🧪 Oefentoets (AI)</button>
  </div>

  <!-- NOTITIES -->
  <div class="tab-content active" id="endo-notities">
    <div class="info-box">
      <div class="info-box-title">🎯 Kernthema's Endodontologie examen</div>
      <ul>
        <li>Pulpadiagnose – classificaties (reversibele/irreversibele pulpitis, necrose)</li>
        <li>Apicale diagnose – symptomatisch/asymptomatisch periapicaal abces, granuloom</li>
        <li>DETI-score (Dental Emergency Triage Index)</li>
        <li>Irrigatieprotocol – NaOCl concentratie, EDTA, CHX</li>
        <li>Obturatie – guttapercha technieken, laterale condensatie</li>
        <li>Tandtrauma – Andreasen classificatie, replantatie protocol</li>
        <li>Interne/externe resorptie</li>
        <li>Endodontisch-parodontale laesies</li>
      </ul>
    </div>

    <div class="theory-card open">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-blue">Diagnostiek</span>
        <h3>Pulpa- en Apicale Diagnose</h3>
        <span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <table>
          <tr><th>Diagnose</th><th>Pijn</th><th>Radiologie</th><th>Therapie</th></tr>
          <tr><td>Reversibele pulpitis</td><td>Kort, stimulus-afhankelijk</td><td>Normaal</td><td>Kaviteitsbehandeling, pulpa-capping</td></tr>
          <tr><td>Irreversibele pulpitis</td><td>Spontaan, langdurig (ook 's nachts)</td><td>Evt. periapicale verbreding</td><td>Wortelkanaalbehandeling (WKB)</td></tr>
          <tr><td>Pulpanecrose</td><td>Geen of minimaal</td><td>Periapicale radiolucency</td><td>WKB</td></tr>
          <tr><td>Sympt. apicaal periodontitis</td><td>Pijn bij percussie/biting</td><td>Periapicale verbreding/lucency</td><td>WKB of herbehandeling</td></tr>
          <tr><td>Asympt. apicaal periodontitis</td><td>Geen pijn</td><td>Periapicale radiolucency</td><td>WKB</td></tr>
          <tr><td>Acuut apicaal abces</td><td>Ernstige spontane pijn, zwelling</td><td>Periapicale radiolucency</td><td>Incisie + drainage, AB, WKB</td></tr>
        </table>
        <div class="success-box">✅ Percussie-positief + spontane pijn = irreversibele pulpitis of periapicale pathologie → WKB!</div>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-orange">DETI</span>
        <h3>DETI-score – Dental Emergency Triage Index</h3>
        <span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <p>De DETI-score wordt gebruikt voor triage van tandheelkundige spoedsituaties.</p>
        <table>
          <tr><th>Score</th><th>Urgentie</th><th>Behandeling binnen</th><th>Voorbeelden</th></tr>
          <tr><td><strong style="color:var(--danger)">1</strong></td><td>Acuut, levensbedreigend</td><td>Direct/Spoedkamer</td><td>Ludwig's angina, ernstige cellulitis met luchtwegproblemen</td></tr>
          <tr><td><strong style="color:var(--danger)">2</strong></td><td>Urgent</td><td>24 uur</td><td>Acuut apicaal abces met zwelling, ANUG, alveolitis</td></tr>
          <tr><td><strong style="color:var(--warning)">3</strong></td><td>Semi-urgent</td><td>48-72 uur</td><td>Irreversibele pulpitis (intense pijn), fractuur kroon</td></tr>
          <tr><td><strong style="color:var(--success)">4</strong></td><td>Niet-urgent</td><td>Week</td><td>Gebroken prothese, subacute klachten</td></tr>
        </table>
        <div class="warn-box">⚠️ Ludwig's angina (submandibulaire cellulitis) = DETI 1! Direct ziekenhuisopname voor luchtwegbewaking.</div>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-teal">Irrigatie</span>
        <h3>Irrigatieprotocol WKB</h3>
        <span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <ul>
          <li><strong>NaOCl (Natriumhypochloriet):</strong> Gouden standaard irrigans. Werkt antimicrobieel EN lost organisch weefsel op. Concentratie: 0,5–5,25%. In NL standaard 2,5-3%.</li>
          <li><strong>EDTA (Ethyleendiaminetetraazijnzuur):</strong> Chelator voor anorganisch weefsel (smear layer verwijdering). 17% EDTA, spoelen 1 minuut als afsluitirrigation.</li>
          <li><strong>CHX (Chloorhexidine):</strong> 2% CHX als alternatief, breedspectrum antisepticum. NIET combineren met NaOCl (precipitaat!).</li>
          <li><strong>Volgorde:</strong> NaOCl (tijdens instrumentatie) → EDTA (smear layer) → NaOCl (eindafspoelingen)</li>
          <li><strong>Passieve ultrasonische irrigatie (PUI):</strong> Verbetert penetratie irrigans in laterale kanaaltjes</li>
        </ul>
        <div class="danger-box">🚫 NaOCl + CHX = bruinzwart precipitaat (parachloraniline)! Nooit combineren zonder spoeling tussenin!</div>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-purple">Obturatie</span>
        <h3>Obturatie – Afdichting Wortelkanaal</h3>
        <span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <ul>
          <li><strong>Guttapercha:</strong> Standaard obturatiemedium. Thermisch plastisch, biocompatibel.</li>
          <li><strong>Laterale condensatie:</strong> Klassieke techniek. Masterpoint + accessory points + sealer.</li>
          <li><strong>Warme verticale condensatie (WVC):</strong> Betere aanpassing aan kanaalanatomie, minder lekkage. Obtura/Calamus systeem.</li>
          <li><strong>Sealer:</strong> Noodzakelijk voor dichte afsluiting. ZnO-eugenol, epoxy resin (AH Plus), bioceramic sealers.</li>
          <li><strong>Werkhoogte:</strong> 0,5-1mm van radiografisch apex. Bevestigd met apex-locator + röntgenfoto.</li>
          <li><strong>Smear layer:</strong> Verwijdering met EDTA verbetert sealeradhesie.</li>
        </ul>
        <div class="info-box">
          <div class="info-box-title">Obturatiedoelen</div>
          <ul>
            <li>Hermetische afsluiting apicaal, lateraal en coronaal</li>
            <li>Voorkoming herbesmetting van gereinigd kanaal</li>
            <li>Optimum = tot 0,5-1mm van röntgenapex</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-red">Trauma</span>
        <h3>Tandtrauma – Andreasen Classificatie</h3>
        <span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <table>
          <tr><th>Type</th><th>Omschrijving</th><th>Behandeling</th></tr>
          <tr><td>Concussie</td><td>Geen verplaatsing, percussie-gevoelig</td><td>Observatie, zachte kost</td></tr>
          <tr><td>Subluxatie</td><td>Abnormale mobiliteit, geen verplaatsing</td><td>Spalken 2 weken, controle</td></tr>
          <tr><td>Extrusie</td><td>Partiële avulsie, tand verlengd</td><td>Repositie, spalken 2-4 weken</td></tr>
          <tr><td>Laterale luxatie</td><td>Laterale verplaatsing + alveolaire fractuur</td><td>Repositie, spalken 4 weken</td></tr>
          <tr><td>Intrusie</td><td>Tand in alveol gedreven (ergste)</td><td>Spontane heruitbraak (bij kinderen) of orthodontische/chirurgische repositie</td></tr>
          <tr><td>Avulsie</td><td>Tand volledig uit alveol</td><td>Replantatie zo snel mogelijk!</td></tr>
        </table>
        <div class="success-box">✅ <strong>Replantatie protocol:</strong><br>
          1. Oppakken aan kroon (NIET aan wortel aanraken!)<br>
          2. Spoelen met fysiologisch zout<br>
          3. Replantatie op locatie of bewaren in: melk &gt; fysiologisch zout &gt; speeksel &gt; water<br>
          4. Spalken 7-10 dagen (flexibele spalk)<br>
          5. Antibiotica: Doxycycline 100mg 2x/dag 7 dagen (vermindert resorptie)</div>
        <div class="warn-box">⚠️ Droge bewaartijd &gt;60 min → slechte prognose, PDL-cellen zijn afgestorven. Tand behandelen als ankylosegeval.</div>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-green">Resorptie</span>
        <h3>Interne en Externe Resorptie</h3>
        <span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <table>
          <tr><th></th><th>Interne resorptie</th><th>Externe resorptie</th></tr>
          <tr><td>Oorsprong</td><td>Van pulpa binnenuit</td><td>Van periodontaal ligament buitenaf</td></tr>
          <tr><td>Röntgen</td><td>Ronde, symmetrische uitbreiding kanaal</td><td>Asymmetrisch, onregelmatig</td></tr>
          <tr><td>Oorzaak</td><td>Chronische pulpitis, trauma</td><td>Trauma, orthodontie, druk</td></tr>
          <tr><td>Behandeling</td><td>WKB (stopt resorptie)</td><td>Afhankelijk van type (invasieve cervicale resorptie = MTA)</td></tr>
        </table>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-orange">Perio-Endo</span>
        <h3>Endodontisch-Parodontale Laesies</h3>
        <span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <table>
          <tr><th>Type</th><th>Primaire oorzaak</th><th>Behandeling</th></tr>
          <tr><td>Primair endodontisch</td><td>Pulpanecrose → drainageweg via paro</td><td>WKB, goed herstel verwacht</td></tr>
          <tr><td>Primair parodontaal</td><td>Paro-destruktie → apicale betrokkenheid</td><td>Paro-behandeling eerst</td></tr>
          <tr><td>Gecombineerd</td><td>Beide aandoeningen onafhankelijk aanwezig</td><td>Beide behandelen, prognose matig</td></tr>
        </table>
        <div class="info-box">
          <div class="info-box-title">Vitaliteitstest essentieel!</div>
          <ul>
            <li>Primair endo: pulpatest negatief, smalere sinus tractus van apex</li>
            <li>Primair paro: pulpatest positief, brede tandvleessonde tractus van margo</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- SAMENVATTING -->
  <div class="tab-content" id="endo-samenvatting">
    <h3 style="font-size:15px;font-weight:700;margin-bottom:14px">⚡ Snelle herhaling – Endodontologie</h3>
    <table class="summary-table">
      <tr><th>Concept</th><th>Kernpunt</th><th>Let op</th></tr>
      <tr><td>Reversibele pulpitis</td><td>Kort, stimulus-afhankelijk</td><td><span class="badge-j">WKB niet nodig</span></td></tr>
      <tr><td>Irreversibele pulpitis</td><td>Spontaan, langdurig</td><td><span class="badge-oj">WKB noodzakelijk</span></td></tr>
      <tr><td>DETI 1</td><td>Ludwig's angina – direct OK</td><td><span class="badge-oj">Levensbedreigend</span></td></tr>
      <tr><td>DETI 2</td><td>Acuut abces – 24 uur</td><td><span class="badge-oj">Urgent</span></td></tr>
      <tr><td>NaOCl concentratie</td><td>0,5–5,25% (NL: 2,5-3%)</td><td><span class="badge-ans">Standaard irrigans</span></td></tr>
      <tr><td>NaOCl + CHX</td><td>NOOIT combineren!</td><td><span class="badge-oj">Precipitaat!</span></td></tr>
      <tr><td>EDTA</td><td>Smear layer verwijdering, chelator</td><td><span class="badge-ans">Eindirrigatie</span></td></tr>
      <tr><td>Avulsie replantatie</td><td>Aanpakken bij kroon, melk bewaren</td><td><span class="badge-ans">&lt;60 min droog</span></td></tr>
      <tr><td>Intrusie kind</td><td>Spontane heruitbraak afwachten</td><td><span class="badge-j">Kinderen &lt;12j</span></td></tr>
      <tr><td>Obturatie hoogte</td><td>0,5-1 mm van röntgenapex</td><td><span class="badge-ans">Werkhoogte</span></td></tr>
      <tr><td>Interne resorptie</td><td>Kanaal uitbreidend, symmetrisch</td><td><span class="badge-ans">WKB stopt het</span></td></tr>
    </table>
  </div>

  <!-- CIKMIS -->
  <div class="tab-content" id="endo-cikmis">
    <div class="quiz-controls">
      <button class="btn btn-primary" onclick="startQuiz('endo_cikmis')">▶ Start toets</button>
      <button class="btn btn-secondary" onclick="resetQuiz('endo_cikmis')">↺ Opnieuw</button>
      <div class="quiz-progress" id="endo_cikmis-progress">Nog niet gestart</div>
    </div>
    <div id="endo_cikmis-score" style="display:none"></div>
    <div id="endo_cikmis-quiz"></div>
  </div>

  <!-- OEFEN -->
  <div class="tab-content" id="endo-oefen">
    <div class="info-box">
      <div class="info-box-title">🤖 AI-gegenereerde oefenvragen</div>
      <ul><li>Gebaseerd op cikmış sorular – zelfde logica en moeilijkheidsgraad</li></ul>
    </div>
    <div class="quiz-controls">
      <button class="btn btn-primary" onclick="startQuiz('endo_oefen')">▶ Start oefentoets</button>
      <button class="btn btn-secondary" onclick="resetQuiz('endo_oefen')">↺ Opnieuw</button>
      <div class="quiz-progress" id="endo_oefen-progress">Nog niet gestart</div>
    </div>
    <div id="endo_oefen-score" style="display:none"></div>
    <div id="endo_oefen-quiz"></div>
  </div>
</div>
'''

with open(OUTPUT, 'a', encoding='utf-8') as f:
    f.write(ENDO)
print("ENDO written, total:", os.path.getsize(OUTPUT))
