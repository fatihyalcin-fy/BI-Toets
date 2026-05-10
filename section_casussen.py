import os
OUTPUT = '/sessions/determined-eloquent-pasteur/mnt/outputs/BI_Toets_Studieplatform.html'

CASUSSEN = '''
<!-- ██████ BEHANDELPLAN 1 ██████ -->
<div class="page" id="page-bp1">
  <div class="section-hdr">
    <div class="section-icon si-orange">📋</div>
    <div><h2>Behandelplan 1</h2><p>Casus-gebaseerd · Anamnese, diagnose, behandelplan</p></div>
  </div>
  <div class="tab-bar">
    <button class="tab-btn active" onclick="openTab('bp1','notities',this)">📖 Aanpak</button>
    <button class="tab-btn" onclick="openTab('bp1','casussen',this)">📄 Oefencasussen</button>
  </div>
  <div class="tab-content active" id="bp1-notities">
    <div class="info-box"><div class="info-box-title">🎯 Behandelplan 1 – Structuur</div>
    <ul>
      <li>Gebaseerd op een complete patiëntencasus met anamnese, klachten en röntgenbevindingen</li>
      <li>Taak: Diagnose stellen per element, behandelplan opstellen in gefaseerde aanpak</li>
      <li>Let op: Systemische aandoeningen beïnvloeden behandelplan!</li>
    </ul></div>

    <div class="theory-card open">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-orange">Aanpak</span><h3>Stappenplan Behandelplan</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <ul>
          <li><strong>Stap 1 – Probleemanalyse:</strong> Systematisch alle klachten en bevindingen inventariseren</li>
          <li><strong>Stap 2 – Diagnose:</strong> Per element/kwadrant diagnose stellen (pulpadiagnose, paro-diagnose, structuurdiagnose)</li>
          <li><strong>Stap 3 – Risico-inventarisatie:</strong> Cariesrisico, paro-risico, systemische factoren</li>
          <li><strong>Stap 4 – Prioriteren:</strong> Spoedeisend → Causaal → Rehabilitatie → Preventief onderhoud</li>
          <li><strong>Stap 5 – Behandelfasen:</strong><br>
            Fase 1 (Initieel/Causaal): Extracties hopeloos, pijnbehandeling, MHI<br>
            Fase 2 (Causaal): Caries behandeling, WKB, paro-reiniging<br>
            Her-evaluatie<br>
            Fase 3 (Restauratief): Kronen, bruggen, prothetiek<br>
            Fase 4 (Onderhoud/Recall): SPT</li>
        </ul>
        <div class="success-box">✅ Altijd spoedeisende situaties EERST behandelen (pijn, acute infectie). Hopeloos geprognosseerde elementen vroeg extraheren zodat restauratief plan klopt.</div>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-red">Prognose</span><h3>Tandelementprognose – Criteria</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <table>
          <tr><th>Prognose</th><th>Criteria</th></tr>
          <tr><td><span class="badge-j">Goed</span></td><td>Vitale pulpa of WKB mogelijk, paro-score ≤DPSI3, voldoende kroonstructuur</td></tr>
          <tr><td><span class="badge-ans">Twijfelachtig</span></td><td>Furcatie II-III, DPSI 4 pockets, WKB technisch moeilijk, beperkte kroonhoogte</td></tr>
          <tr><td><span class="badge-oj">Hopeloos</span></td><td>Furcatie III + diep botverlies, wortelbreuk in middenderde, niet restaureerbaar, perforatie</td></tr>
        </table>
      </div>
    </div>
  </div>
  <div class="tab-content" id="bp1-casussen">
    <div class="casus-card">
      <div class="casus-label">Behandelplan Casus 1</div>
      <div class="casus-text">Patiënt, 45 jaar, man. Rookt 15 sigaretten/dag. Diabetes type 2, HbA1c 8,2%. Klacht: pijn rechts boven. Bevindingen: 16 – diepe caries, percussie positief, niet vitaal. 17 – DPSI 4, furcatie klasse III. 14 – DPSI 3. Paro: Gemiddeld DPSI 3-4 in alle sextanten.</div>
      <div class="casus-q">
        <div class="casus-q-text">Wat is de prognose van element 17? Motiveer.</div>
        <button class="btn btn-secondary" onclick="this.nextElementSibling.classList.toggle('show')">Toon antwoord</button>
        <div class="casus-answer">Element 17: Prognose HOPELOOS. Furcatie klasse III + DPSI 4 pockets + slechte compliance (roken + ongecontroleerde DM HbA1c 8,2%). Paro-behandeling bij DM-patiënt met HbA1c &gt;8% geeft suboptimale respons. Aanbeveling: extractie 17 in behandelfase 1 (initieel).</div>
      </div>
      <div class="casus-q">
        <div class="casus-q-text">Hoe beïnvloedt de diabetes het behandelplan?</div>
        <button class="btn btn-secondary" onclick="this.nextElementSibling.classList.toggle('show')">Toon antwoord</button>
        <div class="casus-answer">HbA1c 8,2% = slecht gereguleerde DM. Gevolgen: verminderde wondgenezing, verhoogd infectierisico, slechtere paro-respons. Actie: overleg internist voor beter glucosemanagement. Pas daarna definitieve restauratieve fase. Antibiotica bij extracties overwegen. Roken: stopadvisering essentieel.</div>
      </div>
    </div>
  </div>
</div>

<!-- ██████ BEHANDELPLAN 2 ██████ -->
<div class="page" id="page-bp2">
  <div class="section-hdr">
    <div class="section-icon si-orange">📋</div>
    <div><h2>Behandelplan 2</h2><p>Complexere casus · Prothetiek, implantologie, multi-disciplinair</p></div>
  </div>
  <div class="tab-bar">
    <button class="tab-btn active" onclick="openTab('bp2','casussen',this)">📄 Oefencasussen</button>
  </div>
  <div class="tab-content active" id="bp2-casussen">
    <div class="casus-card">
      <div class="casus-label">Behandelplan Casus 2 – Prothetisch</div>
      <div class="casus-text">Patiënt, 67 jaar, vrouw. Partieel edentaat. Resterende elementen: 14, 13, 23, 24 (bovenkaak) en 34, 33, 43, 44 (onderkaak). Overige elementen verloren door caries en parodontitis. Wenst vaste voorziening indien mogelijk. DPSI van resterende elementen: 2-3. Pulpavitaal.</div>
      <div class="casus-q">
        <div class="casus-q-text">Bespreek de prothetische opties voor de bovenkaak.</div>
        <button class="btn btn-secondary" onclick="this.nextElementSibling.classList.toggle('show')">Toon antwoord</button>
        <div class="casus-answer">Opties bovenkaak:<br>
1. Frame prothese (partiële uitneembare prothese): Gebruik resterende elementen als steun. Voordeel: reversibel, goedkoper. Nadeel: uitneembaar, minder comfort.<br>
2. Implantaatgedragen brug: Implantaten in premolaar/molaarpositie + brug op resterende cuspidaten. Mooiste functionele resultaat. Vereist voldoende botvolume (CBCT evaluatie).<br>
3. Totale prothese BK + behoud elementen OK als overdenture-steunen.<br>
Gezien botcondities na paro-verlies: CBCT voor implantaat-evaluatie aanbevolen.</div>
      </div>
    </div>
    <div class="casus-card">
      <div class="casus-label">Behandelplan Casus 3 – Endo-Restauratief</div>
      <div class="casus-text">Patiënt, 38 jaar, vrouw. Element 46: grote MOD-kaviteit, percussie licht positief, koude test positief maar langzaam, röntgen: periapicale verbreding licht zichtbaar. Vraagt om restauratie met kroon.</div>
      <div class="casus-q">
        <div class="casus-q-text">Wat is de diagnose en wat is het behandelplan?</div>
        <button class="btn btn-secondary" onclick="this.nextElementSibling.classList.toggle('show')">Toon antwoord</button>
        <div class="casus-answer">Diagnose: Irreversibele pulpitis element 46 (spontane pijn, langzame koude-respons, percussie +). Mogelijk vroege periapicale pathologie.<br>
Behandelplan:<br>
1. WKB element 46 (wortelkanaalbehandeling) – spoedindicatie bij pijnklacht<br>
2. Post-WKB evaluatie na 6-12 maanden (herstel periapicale pathologie?)<br>
3. Vervolg: compositkern + volledige porselein-metalen kroon (of volledig keramisch als esthetiek belangrijk)<br>
Aandacht: Bij MOD-kaviteit + WKB → kroon verplicht om wortelfractuur te voorkomen!</div>
      </div>
    </div>
  </div>
</div>

<!-- ██████ KORTE CASUS ██████ -->
<div class="page" id="page-casus">
  <div class="section-hdr">
    <div class="section-icon si-teal">📄</div>
    <div><h2>Korte Casus</h2><p>Korte klinische scenario's · Snelle diagnostiek en behandelkeuze</p></div>
  </div>
  <div class="tab-bar">
    <button class="tab-btn active" onclick="openTab('casus','casussen',this)">📄 Casussen</button>
    <button class="tab-btn" onclick="openTab('casus','tips',this)">💡 Tips</button>
  </div>
  <div class="tab-content active" id="casus-casussen">
    <div class="casus-card">
      <div class="casus-label">Korte Casus 1 – Parodontaal</div>
      <div class="casus-text">Een 28-jarige man bezoekt u voor het eerst. Hij rookt, heeft slechte mondhygiëne. Bij screening: DPSI-score sextant rechts boven = 4, overige sextanten = 2-3. Röntgen: verticale botdefect distaal van element 16.</div>
      <div class="casus-q">
        <div class="casus-q-text">Welk behandelprotocol past u toe en waarom?</div>
        <button class="btn btn-secondary" onclick="this.nextElementSibling.classList.toggle('show')">Toon antwoord</button>
        <div class="casus-answer">DPSI 4 → uitgebreide paro-behandeling nodig. Behandelfasen: 1. MHI + rookstopadvies (essentieel bij rokers!). 2. Supragin. scaling alle sextanten. 3. Subgingivale reiniging (SRP) sextant rechts boven (focus op DPSI 4). 4. Her-evaluatie 4-8 weken. 5. Verticaal botdefect ≥6mm na her-evaluatie → verwijzing paro-specialist voor chirurgie overwegen. Roken DPSI sektant: vals lage BOP verwacht – moeilijker beoordelen ernst!</div>
      </div>
    </div>
    <div class="casus-card">
      <div class="casus-label">Korte Casus 2 – Farmacologisch</div>
      <div class="casus-text">Een 72-jarige vrouw met boezemfibrilleren (warfarine, INR=3,2) heeft klachten van een pijnlijke, geinfecteerde gebitselement 36. WKB niet meer mogelijk. Extractie noodzakelijk. U twijfelt over de veiligheid.</div>
      <div class="casus-q">
        <div class="casus-q-text">Is extractie veilig? Moet warfarine gestopt worden?</div>
        <button class="btn btn-secondary" onclick="this.nextElementSibling.classList.toggle('show')">Toon antwoord</button>
        <div class="casus-answer">INR=3,2 is BINNEN de veilige grens voor extractie (grens = INR ≤3,5). Warfarine NIET stoppen! Risico op trombose (CVA, longembolie) groter dan bloedingsrisico. Protocol: Lokale hemostase (oxidatiecellulose, hechtingen, bijtgaas). Oxidatiecellulose (Surgicel) of fibrinelijm na extractie. Geen tampon 's avonds uitnemen. Patiënt instrueren over bloedingswaarschuwing. Overleg cardioloog/internist indien INR &gt;3,5 of bij twijfel.</div>
      </div>
    </div>
    <div class="casus-card">
      <div class="casus-label">Korte Casus 3 – Anesthesie</div>
      <div class="casus-text">Een 55-jarige man met gecontroleerde angina pectoris vraagt om restauratieve behandeling. U wilt lokaalanesthesie geven. Hij gebruikt metoprolol en aspirine.</div>
      <div class="casus-q">
        <div class="casus-q-text">Welke anesthesie en vasoconstrictorcombinatie kiest u?</div>
        <button class="btn btn-secondary" onclick="this.nextElementSibling.classList.toggle('show')">Toon antwoord</button>
        <div class="casus-answer">Gecontroleerde angina = adrenaline VOORZICHTIG gebruiken. Max 0,04 mg adrenaline (= 2 carpules van 1,8ml 1:100.000). Voorkeur: Mepivacaïne 3% zonder vasoconstrictor bij stabiele angina, of lidocaïne 2% + 1:100.000 adrenaline maar MAXIMUM 2 carpules beperken. Aspirine = geen probleem voor extractie/restauratie (niet stoppen). Metoprolol: interactie met adrenaline (β-blokkade → relatieve α-werking → hypertensie!) → extra voorzichtig met adrenaline, langzaam injecteren, aspiratietest.</div>
      </div>
    </div>
  </div>
  <div class="tab-content" id="casus-tips">
    <div class="info-box">
      <div class="info-box-title">💡 Tips voor Korte Casus Vragen</div>
      <ul>
        <li>Lees de casus altijd volledig – details over medicatie, leeftijd en systemische aandoeningen zijn cruciaal</li>
        <li>Structureer je antwoord: Diagnose → Risicofactoren → Behandelkeuze → Monitoring</li>
        <li>Vergeet rookstopadvisering nooit bij rokers!</li>
        <li>Antistolling: INR ≤3,5 = extractie OK zonder stop medicatie</li>
        <li>Diabetes slecht gereguleerd (HbA1c &gt;8%): eerst glucoseregeling verbeteren</li>
        <li>Zwangerschap: elektief behandeling uitstellen naar 2e trimester indien mogelijk</li>
        <li>Bisfosfonaten IV: geen implantaten of extracties tenzij strikt noodzakelijk</li>
      </ul>
    </div>
  </div>
</div>

<!-- ██████ ENDO TRAUMA & PIJN CASUS ██████ -->
<div class="page" id="page-endo_trauma">
  <div class="section-hdr">
    <div class="section-icon si-red">🚑</div>
    <div><h2>Endo Trauma &amp; Pijn Casus</h2><p>Acute situaties · Tandtrauma, pijnmanagement, urgentie</p></div>
  </div>
  <div class="tab-bar">
    <button class="tab-btn active" onclick="openTab('endo_trauma','notities',this)">📖 Aanpak</button>
    <button class="tab-btn" onclick="openTab('endo_trauma','casussen',this)">📄 Casussen</button>
  </div>
  <div class="tab-content active" id="endo_trauma-notities">
    <div class="info-box"><div class="info-box-title">🎯 Endo Trauma – DETI-triage en Eerste Opvang</div>
    <ul>
      <li>DETI 1: Direct spoed – luchtwegproblemen, ernstige cellulitis</li>
      <li>DETI 2: Binnen 24 uur – acuut abces met koorts/zwelling, avulsie vers tand</li>
      <li>DETI 3: Binnen 48-72 uur – irreversibele pulpitis (intense pijn), kroonbreuk met pulpablootstelling</li>
      <li>DETI 4: Binnen een week – subacute klachten</li>
    </ul></div>

    <div class="theory-card open">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-red">Trauma Protocol</span><h3>Tandtrauma – Eerste Opvang Protocol</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <table>
          <tr><th>Letseltype</th><th>Eerste handeling</th><th>Spalken (duur)</th><th>Follow-up</th></tr>
          <tr><td>Concussie</td><td>Observatie, zachte kost</td><td>Geen spalk nodig</td><td>4 weken, 3 maanden, 1 jaar</td></tr>
          <tr><td>Subluxatie</td><td>Zachte kost, observatie</td><td>Flexibele spalk 2 weken</td><td>2 weken, 1, 3, 6 maanden</td></tr>
          <tr><td>Extrusie</td><td>Repositie, spalk</td><td>2 weken</td><td>Wekelijks, 3/6/12 maanden</td></tr>
          <tr><td>Laterale luxatie</td><td>Repositie onder anesthesie</td><td>4 weken</td><td>Regelmatig</td></tr>
          <tr><td>Intrusie (volwassene)</td><td>Orthodontische/chirurgische repositie</td><td>4-8 weken</td><td>Intensief</td></tr>
          <tr><td>Intrusie (kind)</td><td>Spontane heruitbraak afwachten</td><td>Geen (observatie)</td><td>4-6 weken</td></tr>
          <tr><td>Avulsie (droog &lt;60min)</td><td>Oppakken bij kroon, melk bewaren, direct replantatie</td><td>2 weken flexibel</td><td>1, 2 weken; 3, 6, 12 maanden</td></tr>
        </table>
        <div class="warn-box">⚠️ Flexibele spalk vs. stijve spalk:<br>
        - Flexibele spalk (0,4mm draad): subluxatie, extrusie, avulsie. Behoud PDL-functie, minder ankylose.<br>
        - Stijve spalk (rigiede): wortel/alveolaire fractuur. 4 weken.</div>
      </div>
    </div>
  </div>
  <div class="tab-content" id="endo_trauma-casussen">
    <div class="casus-card">
      <div class="casus-label">Trauma Casus 1</div>
      <div class="casus-text">Een 9-jarige jongen heeft een fietsongeval gehad. Element 21 is volledig geavulseerd. De moeder belt op: de tand ligt op de stoep en is er 30 minuten geleden uitgevallen. Ze is onderweg naar uw praktijk (ETA 15 minuten).</div>
      <div class="casus-q">
        <div class="casus-q-text">Wat instrueert u de moeder telefonisch?</div>
        <button class="btn btn-secondary" onclick="this.nextElementSibling.classList.toggle('show')">Toon antwoord</button>
        <div class="casus-answer">1. Tand oppakken bij de kroon (NIET bij de wortel aanraken – PDL-cellen beschermen!). 2. Korte spoeling met lauwwarm kraanwater. 3. Bewaren in melk (beste droogbewaringsmedium) of fysiologisch zout. Als alternatief: tand in de wang van de moeder (speeksel). 4. NIET in water bewaren (hypotoon, PDL-celdood). 5. Zo snel mogelijk naar de praktijk komen. Totale droge bewaring: nu 30 min = nog 30 min maximaal voor replantatie nog zinvol is.</div>
      </div>
      <div class="casus-q">
        <div class="casus-q-text">Wat zijn uw handelingen bij aankomst? (droge bewaartijd totaal 45 min)</div>
        <button class="btn btn-secondary" onclick="this.nextElementSibling.classList.toggle('show')">Toon antwoord</button>
        <div class="casus-answer">45 min droog = nog marginaal OK. Protocol: 1. Lokaalanesthesie. 2. Alveole spoelen met fysiologisch zout (bloedstolsel niet verwijderen). 3. Tand controleren: geen root contamination, apex open? (Kind 9j → apex waarschijnlijk open → kans op revascularisatie!). 4. Replantatie zachte beweging. 5. Flexibele spalk 2 weken (boogdraad, kunststof). 6. Amoxicilline/Doxycycline (revascularisatiekans beschermen). 7. Tetanus check. 8. Follow-up: WKB starten bij tekens pulpanecrose (1-2 weken bij gesloten apex; afwachten bij open apex). Röntgencontrole na 2 weken, 3/6/12 maanden.</div>
      </div>
    </div>

    <div class="casus-card">
      <div class="casus-label">Pijn Casus – Acuut Abces</div>
      <div class="casus-text">Patiënt, 42 jaar, vrouw. Presenteert zich met ernstige kloppende pijn rechts onderkaak 24 uur. Wangen is duidelijk opgezet, koorts 38,5°C, trismus (beperkte mondopening). Element 46 niet vitaal, percussie+++. DPSI 2 in dit sextant.</div>
      <div class="casus-q">
        <div class="casus-q-text">Diagnose en behandelstrategie?</div>
        <button class="btn btn-secondary" onclick="this.nextElementSibling.classList.toggle('show')">Toon antwoord</button>
        <div class="casus-answer">Diagnose: Acuut apicaal abces element 46 met cellulitis (koorts, trismus, zwelling). DETI 2 = binnen 24 uur behandelen. Behandelplan: 1. Incisie en drainage van fluctuerende zwelling (indien aanwezig). 2. WKB-start (tand openen, drainage via kanaal). 3. Systemische antibiotica: Amoxicilline 500mg 3x/dag + Metronidazol 500mg 3x/dag 7 dagen (gezien cellulitis, koorts). 4. Analgesie: paracetamol + ibuprofen (gecombineerd schema). 5. Trismus monitoring – bij progressie naar submandibulaire ruimte: hospitalisatie! (Ludwig's angina risico). 6. Nazorg: WKB voltooien of extractie beslissing na infectiedaling.</div>
      </div>
    </div>
  </div>
</div>

<!-- ██████ CNT GESPREK ██████ -->
<div class="page" id="page-gesprek">
  <div class="section-hdr">
    <div class="section-icon si-purple">💬</div>
    <div><h2>CNT Gesprek</h2><p>Communicatie · Motiverende gespreksvoering · Patiëntrelatie</p></div>
  </div>
  <div class="tab-bar">
    <button class="tab-btn active" onclick="openTab('gesprek','theorie',this)">📖 Theorie</button>
    <button class="tab-btn" onclick="openTab('gesprek','dialogen',this)">💬 Voorbeelddialogen</button>
  </div>
  <div class="tab-content active" id="gesprek-theorie">
    <div class="info-box"><div class="info-box-title">🎯 CNT Gesprek – Communicatievaardigheden</div>
    <ul>
      <li>Motiverende Gespreksvoering (MGV/MI): OARS-model</li>
      <li>Informed consent – voorwaarden en verloop</li>
      <li>Slecht-nieuws gesprek – stappenplan SPIKES</li>
      <li>Interculturele communicatie</li>
      <li>Non-verbale communicatie</li>
    </ul></div>

    <div class="theory-card open">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-purple">MGV</span><h3>Motiverende Gespreksvoering (MGV) – OARS</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <table>
          <tr><th>Letter</th><th>Techniek</th><th>Voorbeeld</th></tr>
          <tr><td><strong style="color:var(--primary)">O</strong></td><td>Open vragen stellen</td><td>"Hoe is het u de afgelopen maanden vergaan met uw mondhygiëne?"</td></tr>
          <tr><td><strong style="color:var(--success)">A</strong></td><td>Affirmatie (bevestigen)</td><td>"Het is knap dat u ondanks uw drukke leven toch hier bent."</td></tr>
          <tr><td><strong style="color:var(--warning)">R</strong></td><td>Reflectief luisteren</td><td>"U zegt dat tandenpoetsen moeilijk vol te houden is."</td></tr>
          <tr><td><strong style="color:var(--danger)">S</strong></td><td>Samenvatten</td><td>"Als ik het goed begrijp, weet u wat u moet doen maar lukt het niet altijd..."</td></tr>
        </table>
        <div class="success-box">✅ MGV-principes: autonomie respecteren, ambivalentie verkennen, eigen motivatie ontlokken. GEEN adviezen opdringen!</div>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-blue">Informed consent</span><h3>Informed Consent – Voorwaarden</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <p>Geldige informed consent vereist:</p>
        <ul>
          <li><strong>Wilsbekwaamheid:</strong> Patiënt begrijpt info en gevolgen. Bij twijfel: professionele beoordeling</li>
          <li><strong>Adequate informatie:</strong> Diagnose, behandelplan, alternatieven, risico's, geen-behandeling gevolgen</li>
          <li><strong>Vrijwilligheid:</strong> Geen dwang of manipulatie</li>
          <li><strong>Begrip:</strong> Patiënt heeft informatie begrepen (terugvraagmethode)</li>
        </ul>
        <p style="margin-top:10px"><strong>Leeftijdsgrenzen WGBO:</strong></p>
        <ul>
          <li>&lt;12 jaar: Ouders/voogd beslissen, maar kind informeren + wens meewegen</li>
          <li>12-16 jaar: Zowel kind ALS ouder moeten instemmen (dubbele toestemming)</li>
          <li>16-17 jaar: Zelfstandig beslissen (als wilsbekwaam)</li>
          <li>≥18 jaar: Volledig zelfstandig</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="tab-content" id="gesprek-dialogen">
    <div class="gesprek-card">
      <div class="gesprek-scene">📍 Situatie: Patiënt wil rookstop bespreken maar voelt weinig motivatie</div>
      <div class="gesprek-body">
        <div class="msg msg-patiënt">
          <div class="msg-avatar">P</div>
          <div><div class="msg-name">Patiënt</div><div class="msg-bubble">"Ik weet dat roken slecht is voor mijn tandvlees, maar ik kan er echt niet mee stoppen hoor. Te stressvol."</div></div>
        </div>
        <div class="msg msg-tandarts">
          <div class="msg-avatar">T</div>
          <div><div class="msg-name">Tandarts (reflectief)</div><div class="msg-bubble">"U weet dat roken invloed heeft op uw tandvlees, en tegelijk is stoppen voor u op dit moment moeilijk vanwege stress."</div></div>
        </div>
        <div class="msg msg-patiënt">
          <div class="msg-avatar">P</div>
          <div><div class="msg-name">Patiënt</div><div class="msg-bubble">"Ja, precies. Ik probeer het al jaren."</div></div>
        </div>
        <div class="msg msg-tandarts">
          <div class="msg-avatar">T</div>
          <div><div class="msg-name">Tandarts (open vraag)</div><div class="msg-bubble">"Wat zijn voor u de redenen geweest om in het verleden te willen stoppen?"</div></div>
        </div>
        <div class="msg msg-patiënt">
          <div class="msg-avatar">P</div>
          <div><div class="msg-name">Patiënt</div><div class="msg-bubble">"Gezondheid, voor mijn kinderen ook."</div></div>
        </div>
        <div class="msg msg-tandarts">
          <div class="msg-avatar">T</div>
          <div><div class="msg-name">Tandarts (affirmatie)</div><div class="msg-bubble">"Dat zijn sterke redenen. U heeft al eerder pogingen gedaan, dat vraagt moed. Als u ooit hulp wilt, zijn er goede stopmethoden beschikbaar. Maar ik respecteer dat u zelf bepaalt wanneer de tijd rijp is."</div></div>
        </div>
      </div>
    </div>

    <div class="gesprek-card">
      <div class="gesprek-scene">📍 Situatie: Informed consent voor wortelkanaalbehandeling</div>
      <div class="gesprek-body">
        <div class="msg msg-tandarts">
          <div class="msg-avatar">T</div>
          <div><div class="msg-name">Tandarts</div><div class="msg-bubble">"Element 46 heeft een ontsteking van de zenuw. Ik wil dit graag met u bespreken. Is dat nu een goed moment?"</div></div>
        </div>
        <div class="msg msg-patiënt">
          <div class="msg-avatar">P</div>
          <div><div class="msg-name">Patiënt</div><div class="msg-bubble">"Ja, graag."</div></div>
        </div>
        <div class="msg msg-tandarts">
          <div class="msg-avatar">T</div>
          <div><div class="msg-name">Tandarts</div><div class="msg-bubble">"Er zijn twee opties: een wortelkanaalbehandeling waarbij we de zenuw verwijderen en de tand behouden, of de tand trekken. De WKB duurt 2-3 afspraken, is vergoed en heeft een slagingskans van 85-90%. Trekken is sneller maar dan mist u die tand. Welke optie spreekt u aan?"</div></div>
        </div>
      </div>
    </div>
  </div>
</div>
'''

with open(OUTPUT, 'a', encoding='utf-8') as f:
    f.write(CASUSSEN)
print("CASUSSEN written, total:", os.path.getsize(OUTPUT))
