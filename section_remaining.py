import os
OUTPUT = '/sessions/determined-eloquent-pasteur/mnt/outputs/BI_Toets_Studieplatform.html'

# ─── CARIOLOGIE + PEDODONTOLOGIE + SPEEKSEL + SOCIALE TH ───
REST1 = '''
<!-- ██████ CARIOLOGIE ██████ -->
<div class="page" id="page-cario">
  <div class="section-hdr">
    <div class="section-icon si-orange">🟡</div>
    <div><h2>Cariologie</h2><p>THK I · 15 MC-vragen · Slagingsgrens 80%</p></div>
  </div>
  <div class="tab-bar">
    <button class="tab-btn active" onclick="openTab('cario','notities',this)">📖 Studienotities</button>
    <button class="tab-btn" onclick="openTab('cario','samenvatting',this)">⚡ Samenvatting</button>
    <button class="tab-btn" onclick="openTab('cario','cikmis',this)">📝 Cikmış Sorular</button>
    <button class="tab-btn" onclick="openTab('cario','oefen',this)">🧪 Oefentoets (AI)</button>
  </div>
  <div class="tab-content active" id="cario-notities">
    <div class="info-box"><div class="info-box-title">🎯 Kernthema's Cariologie</div>
    <ul>
      <li>Caries pathogenese – Keyes-driehoek (bacteriën, substraat, gastheer, tijd)</li>
      <li>ICDAS-classificatie (International Caries Detection and Assessment System)</li>
      <li>Fluoride mechanisme, effectiviteit, toxico-therapie</li>
      <li>Primaire, secundaire en tertiaire preventie</li>
      <li>Sealants – indicaties bij kinderen</li>
      <li>Minimally invasive dentistry (MID) – ICON, infiltratie</li>
    </ul></div>

    <div class="theory-card open">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-orange">Pathogenese</span><h3>Cariespathogenese – Keyes Model</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <p>Caries is een multifactorieel infectieuze aandoening. De Keyes-driehoek beschrijft de drie factoren die tegelijk aanwezig moeten zijn:</p>
        <ul>
          <li><strong>Micro-organismen:</strong> S. mutans (initiatief), Lactobacillen (progressie), Actinomyces (wortelcaries)</li>
          <li><strong>Substraat:</strong> Vergistbare koolhydraten (sucrose = meest cariogeen)</li>
          <li><strong>Gastheer:</strong> Tandoppervlak, speekselkwaliteit, immuunrespons</li>
          <li><strong>Tijd:</strong> Frequentie en duur van zuurattack</li>
        </ul>
        <p>Kritieke pH: <strong>5,5</strong> voor glazuur, <strong>6,0-6,7</strong> voor dentine (demineralisatie begint bij lagere pH in dentine)</p>
        <div class="warn-box">⚠️ Stephan-curve: Na suikerinname daalt plaque-pH snel (&lt;2 min) en herstel duurt 20-30 minuten. Frequentie inname is cruciale risicofactor!</div>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-blue">ICDAS</span><h3>ICDAS Classificatie (Scores 0-6)</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <table>
          <tr><th>Score</th><th>Bevinding</th><th>Klinisch beeld</th><th>Beleid</th></tr>
          <tr><td>0</td><td>Gezond oppervlak</td><td>Geen caries</td><td>Preventie</td></tr>
          <tr><td>1</td><td>Wit vlekje (droog)</td><td>Initiële laesie, alleen zichtbaar na drogen</td><td>Remineralisatie</td></tr>
          <tr><td>2</td><td>Wit/bruin vlekje (nat)</td><td>Zichtbaar op nat vlak</td><td>Remineralisatie + monitoring</td></tr>
          <tr><td>3</td><td>Lokale glazuurbreuk</td><td>Geen zichtbaar dentine</td><td>Remineralisatie of minimale interventie</td></tr>
          <tr><td>4</td><td>Donkere schaduw door dentine</td><td>Dentine zichtbaar door glazuur</td><td>Restauratieve interventie</td></tr>
          <tr><td>5</td><td>Caviteit met zichtbaar dentine</td><td>Minder dan helft oppervlak aangetast</td><td>Restauratie</td></tr>
          <tr><td>6</td><td>Uitgebreide caviteit</td><td>Meer dan helft aangetast</td><td>Complexe restauratie</td></tr>
        </table>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-green">Fluoride</span><h3>Fluoride – Mechanisme en Toepassingen</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <ul>
          <li><strong>Mechanisme:</strong> Fluorapatiet (FA) vormt resistenter tandoppervlak dan hydroxyapatiet (HA). FA lost minder op bij lage pH (5,5 vs 5,5 HA).</li>
          <li><strong>Remineralisatie:</strong> Fluoride bevordert neerslag van calcium en fosfaat. Effectief bij vroege laesies (ICDAS 1-2).</li>
          <li><strong>Antibacterieel:</strong> Remt enolase-enzym in S. mutans → vermindert zuurproductie.</li>
          <li><strong>Pre-eruptief effect:</strong> Systemisch fluoride (water, tabletten) werkt pre-eruptief op tandkroonvorming.</li>
          <li><strong>Post-eruptief topicaal:</strong> Tandpasta (1000-1500 ppm), lak (22.600 ppm), gel</li>
          <li><strong>Tandpasta kinderen:</strong> &lt;3 jaar: 500 ppm, 3-6 jaar: 1000 ppm, &gt;6 jaar: 1450 ppm</li>
        </ul>
        <div class="danger-box">🚫 Fluorose: chronische overmaat systemisch fluoride tijdens tandvorming → witte of bruine vlekken. Cosmetic concern, niet functioneel schadelijk.</div>
      </div>
    </div>
  </div>

  <div class="tab-content" id="cario-samenvatting">
    <table class="summary-table">
      <tr><th>Concept</th><th>Kernpunt</th><th>Status</th></tr>
      <tr><td>Kritieke pH glazuur</td><td>pH 5,5</td><td><span class="badge-ans">Belangrijk!</span></td></tr>
      <tr><td>S. mutans</td><td>Initiatie caries</td><td><span class="badge-ans">Bacterie</span></td></tr>
      <tr><td>Lactobacillus</td><td>Progressie caries</td><td><span class="badge-ans">Bacterie</span></td></tr>
      <tr><td>ICDAS 1-2</td><td>Remineralisatie mogelijk</td><td><span class="badge-j">Niet kaviteit!</span></td></tr>
      <tr><td>ICDAS 5-6</td><td>Restauratie noodzakelijk</td><td><span class="badge-oj">Invasief</span></td></tr>
      <tr><td>Tandpasta &lt;3j</td><td>500 ppm fluoride</td><td><span class="badge-ans">Laag</span></td></tr>
      <tr><td>Tandpasta &gt;6j</td><td>1450 ppm fluoride</td><td><span class="badge-ans">Normaal</span></td></tr>
      <tr><td>Fluoridetablet</td><td>Pre-eruptief werkzaam</td><td><span class="badge-ans">Systemisch</span></td></tr>
    </table>
  </div>
  <div class="tab-content" id="cario-cikmis">
    <div class="quiz-controls">
      <button class="btn btn-primary" onclick="startQuiz('cario_cikmis')">▶ Start toets</button>
      <button class="btn btn-secondary" onclick="resetQuiz('cario_cikmis')">↺ Opnieuw</button>
      <div class="quiz-progress" id="cario_cikmis-progress">Nog niet gestart</div>
    </div>
    <div id="cario_cikmis-score" style="display:none"></div>
    <div id="cario_cikmis-quiz"></div>
  </div>
  <div class="tab-content" id="cario-oefen">
    <div class="quiz-controls">
      <button class="btn btn-primary" onclick="startQuiz('cario_oefen')">▶ Start oefentoets (AI)</button>
      <button class="btn btn-secondary" onclick="resetQuiz('cario_oefen')">↺ Opnieuw</button>
      <div class="quiz-progress" id="cario_oefen-progress">Nog niet gestart</div>
    </div>
    <div id="cario_oefen-score" style="display:none"></div>
    <div id="cario_oefen-quiz"></div>
  </div>
</div>

<!-- ██████ PEDODONTOLOGIE ██████ -->
<div class="page" id="page-pedo">
  <div class="section-hdr">
    <div class="section-icon si-green">🟢</div>
    <div><h2>Pedodontologie</h2><p>THK I · 10 MC-vragen · Slagingsgrens 80%</p></div>
  </div>
  <div class="tab-bar">
    <button class="tab-btn active" onclick="openTab('pedo','notities',this)">📖 Studienotities</button>
    <button class="tab-btn" onclick="openTab('pedo','samenvatting',this)">⚡ Samenvatting</button>
    <button class="tab-btn" onclick="openTab('pedo','cikmis',this)">📝 Cikmış Sorular</button>
    <button class="tab-btn" onclick="openTab('pedo','oefen',this)">🧪 Oefentoets (AI)</button>
  </div>
  <div class="tab-content active" id="pedo-notities">
    <div class="info-box"><div class="info-box-title">🎯 Kernthema's Pedodontologie</div>
    <ul>
      <li>Tanddoorbraak – tijdschema melkgebit en blijvend gebit</li>
      <li>Molentanden (eerste blijvende molaar) – belang en tijdstip doorbraak</li>
      <li>Pulpatherapie melkgebit: pulpotomie vs. pulpectomie</li>
      <li>Ruimtemanagement – ruimtebewaarder na vroegtijdig tandverlies</li>
      <li>ECC (Early Childhood Caries) – risicofactoren, preventie</li>
      <li>Trauma bij melktanden – verschil behandeling met blijvend gebit</li>
    </ul></div>

    <div class="theory-card open">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-green">Doorbraak</span><h3>Tanddoorbraak – Tijdschema</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <table>
          <tr><th>Tand</th><th>Melkgebit</th><th>Blijvend gebit</th></tr>
          <tr><td>Centrale incisief</td><td>6-10 mnd (onder), 8-12 mnd (boven)</td><td>6-8 jaar (onder), 7-9 jaar (boven)</td></tr>
          <tr><td>Laterale incisief</td><td>9-16 mnd</td><td>7-9 jaar (onder), 8-11 jaar (boven)</td></tr>
          <tr><td>Cuspidaat</td><td>16-23 mnd</td><td>9-12 jaar</td></tr>
          <tr><td>1e premolaar/melkmolaar</td><td>12-19 mnd (1e), 25-33 mnd (2e)</td><td>10-12 jaar</td></tr>
          <tr><td>1e blijvende molaar</td><td>–</td><td><strong>6-7 jaar (6-jaars molaar!)</strong></td></tr>
          <tr><td>2e molaar</td><td>–</td><td>11-13 jaar</td></tr>
          <tr><td>3e molaar (verstandskies)</td><td>–</td><td>17-25 jaar</td></tr>
        </table>
        <div class="success-box">✅ De 6-jaars molaar (1e blijvende molaar) is de EERSTE blijvende tand! Doorbraak rond 6 jaar. Klinisch super belangrijk: sealant preventie indicatie!</div>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-blue">Pulpatherapie</span><h3>Pulpatherapie Melkgebit</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <table>
          <tr><th>Procedure</th><th>Indicatie</th><th>Techniek</th></tr>
          <tr><td>Directe pulpacapping</td><td>Kleine mechanische/carieuze blootstelling in vitale pulpa</td><td>MTA of Ca(OH)₂ op pulpa, restauratie</td></tr>
          <tr><td>Pulpotomie</td><td>Carieuze blootstelling kroonpulpa, radiculaire pulpa nog vitaal</td><td>Verwijdering kroonpulpa, MTA/Formocresol op amputatiestompje</td></tr>
          <tr><td>Pulpectomie</td><td>Irreversibele pulpitis of necrose, tand heeft nog fysiologische waarde</td><td>Volledige kanaalbehandeling, ZnO-eugenol obturatie</td></tr>
        </table>
        <div class="warn-box">⚠️ Formocresol wordt minder gebruikt vanwege toxiciteit. MTA is nu voorkeur bij pulpotomie melkgebit.</div>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-orange">ECC</span><h3>Early Childhood Caries (ECC)</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <p>ECC = aanwezigheid van carieuze laesies, geëxtraheerde (door caries) of gevulde tandoppervlakken bij een kind ≤71 maanden oud.</p>
        <ul>
          <li><strong>Risicofactoren:</strong> Flessenmelk/sap 's nachts, langdurig borstvoeding, suikerinname, S. mutans transmissie van moeder, lage SES</li>
          <li><strong>Patroon:</strong> Bovenste snijtanden eerst (contact met fles/borst), ondersnijtanden relatief gespaard</li>
          <li><strong>Ernstige ECC (S-ECC):</strong> &lt;3 jaar: elk teken van gladoppervlaktecaries. 3-5 jaar: ≥4 aangetaste gladde vlakken</li>
          <li><strong>Preventie:</strong> Geen fles 's nachts na 12 maanden, fluoride tandpasta na 1e tand, eerste tandartsbezoek bij 1 jaar</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="tab-content" id="pedo-samenvatting">
    <table class="summary-table">
      <tr><th>Concept</th><th>Kernpunt</th></tr>
      <tr><td>6-jaars molaar</td><td>Eerste blijvende tand, doorbraak 6-7 jaar</td></tr>
      <tr><td>Pulpotomie melkgebit</td><td>Kroonpulpa verwijdering, MTA op amputatiestompje</td></tr>
      <tr><td>ECC definitie</td><td>Caries &lt;71 maanden (≤5 jaar)</td></tr>
      <tr><td>ECC patroon</td><td>Bovenste snijtanden eerst</td></tr>
      <tr><td>Fluoride &lt;3j</td><td>500 ppm, rijstkorrelgrootte</td></tr>
      <tr><td>Sealant indicatie</td><td>6-jaars molaar bij hoog-risico kind zodra tand doorgebroken</td></tr>
      <tr><td>Avulsie melktand</td><td>GEEN replantatie (risico op ankylosis + schade blijvende tand)</td></tr>
    </table>
    <div class="danger-box">🚫 <strong>Belangrijk:</strong> Bij avulsie van een melktand: NOOIT replantatie! Risico op ankylosis en schade aan het onderliggende blijvende tandkiem.</div>
  </div>
  <div class="tab-content" id="pedo-cikmis">
    <div class="quiz-controls">
      <button class="btn btn-primary" onclick="startQuiz('pedo_cikmis')">▶ Start toets</button>
      <button class="btn btn-secondary" onclick="resetQuiz('pedo_cikmis')">↺ Opnieuw</button>
      <div class="quiz-progress" id="pedo_cikmis-progress">Nog niet gestart</div>
    </div>
    <div id="pedo_cikmis-score" style="display:none"></div>
    <div id="pedo_cikmis-quiz"></div>
  </div>
  <div class="tab-content" id="pedo-oefen">
    <div class="quiz-controls">
      <button class="btn btn-primary" onclick="startQuiz('pedo_oefen')">▶ Start oefentoets (AI)</button>
      <button class="btn btn-secondary" onclick="resetQuiz('pedo_oefen')">↺ Opnieuw</button>
      <div class="quiz-progress" id="pedo_oefen-progress">Nog niet gestart</div>
    </div>
    <div id="pedo_oefen-score" style="display:none"></div>
    <div id="pedo_oefen-quiz"></div>
  </div>
</div>

<!-- ██████ SPEEKSEL & ORALE BIOLOGIE ██████ -->
<div class="page" id="page-speeksel">
  <div class="section-hdr">
    <div class="section-icon si-teal">💧</div>
    <div><h2>Speeksel &amp; Orale Biologie</h2><p>THK I · 10 MC-vragen · Slagingsgrens 80%</p></div>
  </div>
  <div class="tab-bar">
    <button class="tab-btn active" onclick="openTab('speeksel','notities',this)">📖 Studienotities</button>
    <button class="tab-btn" onclick="openTab('speeksel','samenvatting',this)">⚡ Samenvatting</button>
    <button class="tab-btn" onclick="openTab('speeksel','cikmis',this)">📝 Cikmış Sorular</button>
    <button class="tab-btn" onclick="openTab('speeksel','oefen',this)">🧪 Oefentoets (AI)</button>
  </div>
  <div class="tab-content active" id="speeksel-notities">
    <div class="info-box"><div class="info-box-title">🎯 Kernthema's Speeksel &amp; Orale Biologie</div>
    <ul>
      <li>Speekselklieren – anatomie, secretie types</li>
      <li>Speekselsamenstelling – functies van componenten</li>
      <li>Xerostomie – oorzaken, gevolgen, behandeling</li>
      <li>Sjögren-syndroom – primair vs. secundair</li>
      <li>Orale microbioom</li>
      <li>Glazuurmineralisatie en tandvorming</li>
    </ul></div>

    <div class="theory-card open">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-teal">Speekselklieren</span><h3>Speekselklieren – Anatomie en Functies</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <table>
          <tr><th>Klier</th><th>Type secretie</th><th>Bijdrage</th><th>Innervatie</th></tr>
          <tr><td>Glandula parotis</td><td>Serous (waterig)</td><td>~25% volume, meeste amylase</td><td>N. IX (glossopharyngeus)</td></tr>
          <tr><td>Glandula submandibularis</td><td>Gemengd (serous + muceus)</td><td>~60-65% volume</td><td>N. VII (chorda tympani)</td></tr>
          <tr><td>Glandula sublingualis</td><td>Muceus</td><td>~7-8% volume, IgA rijkst</td><td>N. VII (chorda tympani)</td></tr>
          <tr><td>Kleine speekselklieren</td><td>Voornamelijk muceus</td><td>~8% volume, continu</td><td>Autonoom</td></tr>
        </table>
        <p style="margin-top:10px"><strong>Speekselfuncties:</strong></p>
        <ul>
          <li>Antimicrobieel: IgA, lysozym, lactoferrine, peroxidases</li>
          <li>Buffering: bicarbonaat systeem (pH handhaven)</li>
          <li>Remineralisatie: calcium, fosfaat, statistenproteïnen</li>
          <li>Spijsvertering: amylase (zetmeel afbraak)</li>
          <li>Smering/bescherming: mucines</li>
          <li>Wondgenezing: EGF (Epidermal Growth Factor)</li>
        </ul>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-orange">Xerostomie</span><h3>Xerostomie – Droge Mond</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <p><strong>Definitie:</strong> Subjectieve klacht van droge mond. Hyposalvatie = objectief verminderde speekselproductie (&lt;0,1 ml/min rustspeeksel, &lt;0,7 ml/min gestimuleerd).</p>
        <ul>
          <li><strong>Oorzaken medicamenteus:</strong> Anticholinergica, antidepressiva (TCA's, SSRI), antihypertensiva, diuretica, antihistaminica (meest voorkomende oorzaak)</li>
          <li><strong>Oorzaken ziekte:</strong> Sjögren-syndroom, diabetes, HIV, depressie</li>
          <li><strong>Oorzaken iatrogeen:</strong> Bestraling hoofd-halsgebied (glandula parotis gevoelig!)</li>
          <li><strong>Gevolgen:</strong> Verhoogd cariesrisico, dysfagie, dysartrie, smaakstoornis, mondinfecties (Candida)</li>
          <li><strong>Behandeling:</strong> Speekselstimulerend (pilocarpine, kauwgom), speekselsubstituten, fluoride preventie, Candida behandeling</li>
        </ul>
        <div class="warn-box">⚠️ Sjögren-syndroom primair: droge ogen + droge mond (sicca complex). Secundair: sicca + reumatoïde artritis of andere auto-immuunziekte.</div>
      </div>
    </div>
  </div>

  <div class="tab-content" id="speeksel-samenvatting">
    <table class="summary-table">
      <tr><th>Concept</th><th>Kernpunt</th></tr>
      <tr><td>Grootste speekselklier</td><td>Glandula parotis (25%, meeste amylase)</td></tr>
      <tr><td>Meeste bijdrage volume</td><td>Glandula submandibularis (60-65%)</td></tr>
      <tr><td>Meeste IgA</td><td>Glandula sublingualis</td></tr>
      <tr><td>Hyposalvatie</td><td>&lt;0,1 ml/min rust, &lt;0,7 ml/min gestimuleerd</td></tr>
      <tr><td>Meest voorkomende xerostomie oorzaak</td><td>Medicamenten (anticholinergica)</td></tr>
      <tr><td>Sjögren primair</td><td>Droge ogen + droge mond</td></tr>
      <tr><td>Sjögren secundair</td><td>Sicca + auto-immuunziekte (bv. RA)</td></tr>
      <tr><td>Speekselbuffer</td><td>Bicarbonaat systeem</td></tr>
    </table>
  </div>
  <div class="tab-content" id="speeksel-cikmis">
    <div class="quiz-controls">
      <button class="btn btn-primary" onclick="startQuiz('speeksel_cikmis')">▶ Start toets</button>
      <button class="btn btn-secondary" onclick="resetQuiz('speeksel_cikmis')">↺ Opnieuw</button>
      <div class="quiz-progress" id="speeksel_cikmis-progress">Nog niet gestart</div>
    </div>
    <div id="speeksel_cikmis-score" style="display:none"></div>
    <div id="speeksel_cikmis-quiz"></div>
  </div>
  <div class="tab-content" id="speeksel-oefen">
    <div class="quiz-controls">
      <button class="btn btn-primary" onclick="startQuiz('speeksel_oefen')">▶ Start oefentoets (AI)</button>
      <button class="btn btn-secondary" onclick="resetQuiz('speeksel_oefen')">↺ Opnieuw</button>
      <div class="quiz-progress" id="speeksel_oefen-progress">Nog niet gestart</div>
    </div>
    <div id="speeksel_oefen-score" style="display:none"></div>
    <div id="speeksel_oefen-quiz"></div>
  </div>
</div>

<!-- ██████ SOCIALE TH / ETHIEK ██████ -->
<div class="page" id="page-sociale">
  <div class="section-hdr">
    <div class="section-icon si-purple">🤝</div>
    <div><h2>Sociale Tandheelkunde &amp; Ethiek</h2><p>THK I · Open vragen (55 punten) · Slagingsgrens 55%</p></div>
  </div>
  <div class="tab-bar">
    <button class="tab-btn active" onclick="openTab('sociale','notities',this)">📖 Studienotities</button>
    <button class="tab-btn" onclick="openTab('sociale','oefen',this)">📝 Oefenvragen</button>
  </div>
  <div class="tab-content active" id="sociale-notities">
    <div class="theory-card open">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-purple">Ethiek</span><h3>Ethische Principes in de Tandheelkunde</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <ul>
          <li><strong>Autonomie:</strong> Patiënt heeft recht op zelfbeschikking. Informed consent is essentieel voor elke behandeling.</li>
          <li><strong>Beneficence:</strong> Tandarts handelt in het belang van de patiënt (weldoen).</li>
          <li><strong>Non-maleficence:</strong> Geen schade toebrengen. "Primum non nocere".</li>
          <li><strong>Rechtvaardigheid:</strong> Eerlijke verdeling van zorg, geen discriminatie.</li>
          <li><strong>Vertrouwelijkheid (Privacy):</strong> Beroepsgeheim, AVG (GDPR).</li>
        </ul>
        <div class="warn-box">⚠️ Informed consent = patiënt begrijpt de informatie, is wilsbekwaam, geeft vrijwillig toestemming. Bij minderjarigen: ouders/voogd toestemming + kind informeren.</div>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-blue">BIG</span><h3>BIG-registratie en Tuchtrecht</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <ul>
          <li><strong>BIG-register:</strong> Wet op de Beroepen in de Individuele Gezondheidszorg. Tandartsen moeten geregistreerd zijn voor beschermd beroepstitel.</li>
          <li><strong>Herregistratie:</strong> Elke 5 jaar, vereist 3.360 uur werkervaring in de afgelopen 5 jaar.</li>
          <li><strong>Tuchtcollege:</strong> Regionaal (Eerste aanleg) en Centraal Tuchtcollege (beroep). Maatregelen: waarschuwing, berisping, geldboete, schorsing, doorhaling.</li>
          <li><strong>WGBO:</strong> Wet Geneeskundige Behandelingsovereenkomst – regelt rechten/plichten patiënt en hulpverlener.</li>
          <li><strong>Klachtencommissie:</strong> Eerste stap bij klacht (informeler dan tuchtcollege).</li>
        </ul>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-orange">Preventie</span><h3>Preventie – Sociaal Tandheelkundige Aspecten</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <ul>
          <li><strong>Primaire preventie:</strong> Voorkomen ziekte (fluoride, sealants, voedingsadvies)</li>
          <li><strong>Secundaire preventie:</strong> Vroege opsporing en behandeling (screening, röntgen)</li>
          <li><strong>Tertiaire preventie:</strong> Beperken gevolgen (prothese na tandverlies)</li>
          <li><strong>Health Belief Model:</strong> Gedragsverandering afhankelijk van gepercipieerde gevoeligheid, ernst, voordelen en barrières</li>
          <li><strong>Motivational Interviewing (MI):</strong> Niet-directieve gespreksvoering. OARS: Open vragen, Affirmatie, Reflectie, Samenvatten</li>
          <li><strong>Sociaaleconomische ongelijkheid:</strong> Lagere SES = hogere cariesprevalentie, minder zorggebruik</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="tab-content" id="sociale-oefen">
    <h3 style="font-size:15px;font-weight:700;margin-bottom:14px">📝 Open vragen – Ethiek &amp; Sociale TH</h3>
    <div class="casus-card">
      <div class="casus-label">Oefenvraag 1</div>
      <div class="casus-text">Een 16-jarige patiënt komt voor een consult zonder zijn ouders. Hij vraagt om een tand te laten trekken. Hoe gaat u hiermee om?</div>
      <div class="casus-q">
        <div class="casus-q-text">Wat zijn de wettelijke verplichtingen m.b.t. toestemming?</div>
        <button class="btn btn-secondary" onclick="this.nextElementSibling.classList.toggle('show')">Toon antwoord</button>
        <div class="casus-answer">16-jarigen hebben zelfstandig toestemmingsrecht (WGBO art. 7:447). Geen oudertoestemming nodig, tenzij de beslissing ingrijpend is of niet in het belang van de minderjarige is. De tandarts moet beoordelen of de patiënt wilsbekwaam is en voldoende geïnformeerd toestemming kan geven.</div>
      </div>
    </div>
    <div class="casus-card">
      <div class="casus-label">Oefenvraag 2</div>
      <div class="casus-text">U ontdekt tijdens behandeling dat uw patiënt vermoedelijk slachtoffer is van huiselijk geweld. Wat zijn uw verplichtingen?</div>
      <div class="casus-q">
        <div class="casus-q-text">Meldcode en beroepsgeheim</div>
        <button class="btn btn-secondary" onclick="this.nextElementSibling.classList.toggle('show')">Toon antwoord</button>
        <div class="casus-answer">Tandartsen zijn verplicht de Meldcode Huiselijk Geweld te gebruiken. Stappen: signaleren → collegiale consultatie (KNMT) → contact met patiënt → overleg Veilig Thuis (advies) → melden indien nodig. Beroepsgeheim kan doorbroken worden bij ernstige gevaar voor leven. Melden bij Veilig Thuis is geen verplichting maar mede afhankelijk van weging van belangen.</div>
      </div>
    </div>
  </div>
</div>
'''

with open(OUTPUT, 'a', encoding='utf-8') as f:
    f.write(REST1)
print("CARIO+PEDO+SPEEKSEL+SOCIALE written, total:", os.path.getsize(OUTPUT))
