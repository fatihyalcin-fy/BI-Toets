import os
OUTPUT = '/sessions/determined-eloquent-pasteur/mnt/outputs/BI_Toets_Studieplatform.html'

THK2 = '''
<!-- ██████ KINESIOLOGIE / TMD ██████ -->
<div class="page" id="page-kinesio">
  <div class="section-hdr">
    <div class="section-icon si-purple">🧠</div>
    <div><h2>Kinesiologie / TMD / OSAS</h2><p>THK II · 10 MC-vragen · Slagingsgrens 80%</p></div>
  </div>
  <div class="tab-bar">
    <button class="tab-btn active" onclick="openTab('kinesio','notities',this)">📖 Studienotities</button>
    <button class="tab-btn" onclick="openTab('kinesio','samenvatting',this)">⚡ Samenvatting</button>
    <button class="tab-btn" onclick="openTab('kinesio','cikmis',this)">📝 Cikmış Sorular</button>
    <button class="tab-btn" onclick="openTab('kinesio','oefen',this)">🧪 Oefentoets (AI)</button>
  </div>
  <div class="tab-content active" id="kinesio-notities">
    <div class="info-box"><div class="info-box-title">🎯 Kernthema's Kinesiologie / TMD</div>
    <ul>
      <li>Kaakgewricht (TMJ) anatomie – condylus, discus, bilaminaire zone</li>
      <li>Kaakbewegingen – opening, protrusie, laterotrusion (Bennett beweging)</li>
      <li>CMD (Craniomandibulaire Dysfunctie) – diagnostiek en behandeling</li>
      <li>Bruxisme – bruxisme slaap vs. wakker, epidemiologie</li>
      <li>OSAS (Obstructief Slaapapneu Syndroom) – mandibulaire repositie apparaat</li>
      <li>Trigeminale neuralgieën en aangezichtspijnen</li>
    </ul></div>

    <div class="theory-card open">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-purple">Anatomie</span><h3>TMJ Anatomie en Bewegingen</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <p><strong>Componenten TMJ:</strong></p>
        <ul>
          <li><strong>Condylus mandibulae:</strong> Convex, bedekt met fibreuze kraakbeen (niet hyaliene kraakbeen!)</li>
          <li><strong>Discus articularis:</strong> Fibrocartilagineuse schijf, verdeelt gewrichtsholte in bovenste (translatie) en onderste (rotatie) kompartiment</li>
          <li><strong>Fossa mandibularis + tuberculum articulare:</strong> Ontvangst condylus</li>
          <li><strong>Ligamenten:</strong> Lig. temporomandibulare (lateraal), Lig. sphenomandibulare, Lig. stylomandibulare</li>
          <li><strong>Bilaminaire zone:</strong> Posterior aan discus, rijkelijk gevasculariseerd en geïnnerveerd</li>
        </ul>
        <table style="margin-top:10px">
          <tr><th>Beweging</th><th>Gewricht</th><th>Spieren</th></tr>
          <tr><td>Mondopening</td><td>Rotatiegewricht (onderste) + translatie (bovenste)</td><td>M. pterygoideus lateralis (inf. kop), suprahyoidale mm.</td></tr>
          <tr><td>Sluiting</td><td>Omgekeerd</td><td>M. masseter, M. temporalis, M. pterygoideus medialis</td></tr>
          <tr><td>Protrusie</td><td>Bilateraal translatie</td><td>M. pterygoideus lateralis (sup. kop)</td></tr>
          <tr><td>Laterotrusion</td><td>Ipsilateraal rotatie, contralateraal translatie</td><td>M. pterygoideus lat. (contralateraal)</td></tr>
        </table>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-orange">CMD</span><h3>Craniomandibulaire Dysfunctie (CMD)</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <p>CMD is een overkoepelende term voor aandoeningen van de kauwspieren en TMJ.</p>
        <ul>
          <li><strong>DC/TMD classificatie (Diagnostic Criteria for TMD):</strong> Gestandaardiseerd diagnostisch protocol</li>
          <li><strong>As I – Somatische diagnoses:</strong> Myalgie, artralgie, discusverplaatsing (met/zonder repositie), degeneratieve gewrichtsaandoening</li>
          <li><strong>As II – Psychosociale factoren:</strong> Pijn gerelateerd aan functionele beperkingen, psychologische status</li>
        </ul>
        <table>
          <tr><th>Diagnose</th><th>Symptomen</th><th>Behandeling</th></tr>
          <tr><td>Discusverplaatsing met repositie</td><td>Klik bij opening en sluiting (reciproke klik)</td><td>Stabilisatiespalk, fysiotherapie</td></tr>
          <tr><td>Discusverplaatsing zonder repositie</td><td>Beperkte mondopening, pijn, geen klik</td><td>Spalk, mobilisatie</td></tr>
          <tr><td>Myalgie</td><td>Kauwspierpijn, palpatiepijn</td><td>Ontspanning, fysiotherapie, farmacologisch</td></tr>
          <tr><td>Artralgie</td><td>Gewrichtspijn bij beweging</td><td>NSAID, rust, spalk</td></tr>
        </table>
        <div class="success-box">✅ Stabilisatiespalk = eerste keus bij CMD. Dekt alle tanden, mist occlusale interferenties, geeft musculaire ontspanning.</div>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-blue">Bruxisme</span><h3>Bruxisme – Slaap en Wakker</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <ul>
          <li><strong>Slaapbruxisme:</strong> Tijdens NREM-slaap, ritmische masticatoire spieractiviteit. Prevalentie: 8-15% populatie.</li>
          <li><strong>Waakbruxisme:</strong> Overdag, vaak onbewust, stress-gerelateerd. Meer tanden-op-tanden contact dan slaap (minder slijpen).</li>
          <li><strong>Gevolgen:</strong> Attritie (glazuurverlies), hypertrofie masseter, hoofdpijn, TMJ-pijn, breuk restauraties/protheses</li>
          <li><strong>Diagnose:</strong> Anamnese, klinisch onderzoek (facettensleet), polysomnografie (goudstandaard slaapbruxisme)</li>
          <li><strong>Behandeling:</strong> Occlusale spalk (bescherming, niet stoppen), biofeedback, cognitieve gedragstherapie, botulinetoxine (masseter)</li>
        </ul>
        <div class="warn-box">⚠️ Spalk STOPT bruxisme NIET, maar beschermt tanden en gewrichten tegen de gevolgen!</div>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-teal">OSAS</span><h3>OSAS – Obstructief Slaapapneu Syndroom</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <ul>
          <li><strong>Definitie:</strong> AHI ≥5 apneus/hypopneus per uur slaap + symptomen (snurken, excessive daytime sleepiness). Ernst: licht 5-15, matig 15-30, ernstig &gt;30/uur.</li>
          <li><strong>Diagnose:</strong> Polysomnografie (PSG) = goudstandaard. Thuis: actegrafie (screening).</li>
          <li><strong>CPAP:</strong> Goudstandaard behandeling. Continu positieve luchtwegdruk.</li>
          <li><strong>MRA (Mandibulaire Repositie Apparaat):</strong> Tandheelkundige behandeling bij mild-matig OSAS of CPAP-intolerantie. Protrudeert mandibula 50-70% van maximale protrusie. Bijwerkingen: speekselvloed, temporaire kaakpijn, occlusiewijzigingen (na langdurig gebruik).</li>
          <li><strong>Indicatie MRA:</strong> Licht-matig OSAS (AHI 5-30), eenvoudig snurken, CPAP-onverdraagzaamheid</li>
        </ul>
        <div class="info-box">
          <div class="info-box-title">MRA – Tandarts verantwoordelijkheid</div>
          <ul>
            <li>Eerst verwijzing naar slaapspecialist voor diagnose (PSG)</li>
            <li>Tandartsrol: vervaardiging en follow-up MRA</li>
            <li>Jaarlijkse controle occlusie en TMJ</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="tab-content" id="kinesio-samenvatting">
    <table class="summary-table">
      <tr><th>Concept</th><th>Kernpunt</th></tr>
      <tr><td>TMJ kraakbeen</td><td>Fibreus kraakbeen (NIET hyalien!)</td></tr>
      <tr><td>Discus articularis</td><td>Verdeelt in rotatie (onder) + translatie (boven) compartiment</td></tr>
      <tr><td>Reciproke klik</td><td>Discusverplaatsing MET repositie</td></tr>
      <tr><td>Stabilisatiespalk</td><td>Eerste keus CMD, beschermt, stopt bruxisme NIET</td></tr>
      <tr><td>OSAS diagnose</td><td>AHI ≥5 + symptomen, PSG goudstandaard</td></tr>
      <tr><td>OSAS behandeling</td><td>CPAP = goudstandaard. MRA bij mild-matig of CPAP intolerantie</td></tr>
      <tr><td>MRA protrusie</td><td>50-70% maximale protrusie</td></tr>
      <tr><td>Bruxisme spalk</td><td>Beschermt, stopt bruxisme NIET</td></tr>
    </table>
  </div>
  <div class="tab-content" id="kinesio-cikmis">
    <div class="quiz-controls">
      <button class="btn btn-primary" onclick="startQuiz('kinesio_cikmis')">▶ Start toets</button>
      <button class="btn btn-secondary" onclick="resetQuiz('kinesio_cikmis')">↺ Opnieuw</button>
      <div class="quiz-progress" id="kinesio_cikmis-progress">Nog niet gestart</div>
    </div>
    <div id="kinesio_cikmis-score" style="display:none"></div>
    <div id="kinesio_cikmis-quiz"></div>
  </div>
  <div class="tab-content" id="kinesio-oefen">
    <div class="quiz-controls">
      <button class="btn btn-primary" onclick="startQuiz('kinesio_oefen')">▶ Start oefentoets (AI)</button>
      <button class="btn btn-secondary" onclick="resetQuiz('kinesio_oefen')">↺ Opnieuw</button>
      <div class="quiz-progress" id="kinesio_oefen-progress">Nog niet gestart</div>
    </div>
    <div id="kinesio_oefen-score" style="display:none"></div>
    <div id="kinesio_oefen-quiz"></div>
  </div>
</div>

<!-- ██████ ORALE FUNCTIELEER + MZK ██████ -->
<div class="page" id="page-functie">
  <div class="section-hdr">
    <div class="section-icon si-blue">🦷</div>
    <div><h2>Orale Functieleer &amp; Mondziekten-Kaakchirurgie</h2><p>THK II · 35 + 25 = 60 MC-vragen · Slagingsgrens 80%</p></div>
  </div>
  <div class="tab-bar">
    <button class="tab-btn active" onclick="openTab('functie','notities',this)">📖 Studienotities</button>
    <button class="tab-btn" onclick="openTab('functie','samenvatting',this)">⚡ Samenvatting</button>
    <button class="tab-btn" onclick="openTab('functie','cikmis',this)">📝 Cikmış Sorular</button>
    <button class="tab-btn" onclick="openTab('functie','oefen',this)">🧪 Oefentoets (AI)</button>
  </div>
  <div class="tab-content active" id="functie-notities">
    <div class="info-box"><div class="info-box-title">🎯 Kernthema's Orale Functieleer &amp; MZK</div>
    <ul>
      <li><strong>Orale Functieleer (35 mc):</strong> Occlusie, prothetiek, implantologie, frame prothetiek</li>
      <li><strong>MZK (25 mc):</strong> Extractietechniek, abscessen, schisis, implantaten, MKA-chirurgie</li>
      <li>Implantologie – indicaties, contraïndicaties, osseoïntegratie</li>
      <li>Extractie – forcepstechnieken, complicaties (alveolitis, droge alveole)</li>
      <li>Abscessen – lokalisatie, drainage, AB beleid</li>
      <li>Schisis – classificatie, behandeling, timing</li>
    </ul></div>

    <div class="theory-card open">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-blue">Occlusie</span><h3>Occlusie – Concepten en Klassen</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <table>
          <tr><th>Angle Klasse</th><th>Relatie 1e molaar</th><th>Klinisch beeld</th></tr>
          <tr><td>Klasse I</td><td>Mesio-buccale cusp boven in sulcus 1e onderkaaksmolaar</td><td>Normaalbeet</td></tr>
          <tr><td>Klasse II div 1</td><td>Bovenkaaksmolaar mesiovoeren</td><td>Retrognath onderkaak, proclinerende boventanden (vergroot overjet)</td></tr>
          <tr><td>Klasse II div 2</td><td>Bovenkaaksmolaar mesiovoeren</td><td>Retrognath onderkaak, inclinerende boventanden (vergroot overbite)</td></tr>
          <tr><td>Klasse III</td><td>Bovenkaaksmolaar distovoeren</td><td>Prognath onderkaak, kruis/omgekeerde beet voortanden</td></tr>
        </table>
        <p style="margin-top:10px"><strong>Occlusieconcepten:</strong></p>
        <ul>
          <li><strong>Centrale relatie (CR):</strong> Condylus in meest anterieur-superieure positie in fossa. Reproduceerbaar, therapeutisch startpunt.</li>
          <li><strong>Maximale intercuspidatie (MIP):</strong> Maximaal tandencontact. Kan afwijken van CR (glide).</li>
          <li><strong>Laterale geleiding:</strong> Cuspidaatgeleiding (canine guidance) OF groepsfunctie</li>
          <li><strong>Protrusiefgeleiding:</strong> Voortanden (incisief geleiding)</li>
        </ul>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-green">Implantologie</span><h3>Implantologie – Osseoïntegratie en Protocol</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <ul>
          <li><strong>Osseoïntegratie:</strong> Direct functioneel en structureel contact tussen levend bot en implantaatoppervlak (Brånemark definitie)</li>
          <li><strong>Genezing:</strong> 3-4 maanden onderkaak, 4-6 maanden bovenkaak (conventioneel protocol)</li>
          <li><strong>Indicaties:</strong> Geïsoleerd tandverlies, partiële/totale edentaatloze patiënt</li>
          <li><strong>Absolute contraïndicaties:</strong> Recent doorgemaakt myocardinfarct (&lt;6 maanden), ernstige osteoporose met bisfosfonaten IV (MRONJ-risico), actieve maligniteit in bestraald gebied</li>
          <li><strong>Relatieve contraïndicaties:</strong> Roken (succes ↓), diabetes (slecht gereguleerd, HbA1c &gt;8%), osteoporose (oraal bisfosfonaat)</li>
          <li><strong>MRONJ:</strong> Medicatie-gerelateerde Osteonecrose Kaak. Risico bij IV bisfosfonaten (oncologie). Tandextractie en implantaten vermijden of medicatie-vrij interval.</li>
        </ul>
        <div class="warn-box">⚠️ Orale bisfosfonaten (osteoporose) = relatieve contraindicatie. IV bisfosfonaten (oncologie) = absolute contraindicatie voor invasieve MKA-ingrepen!</div>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-red">Abscessen</span><h3>Tandheelkundige Abscessen – Lokalisatie en Behandeling</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <table>
          <tr><th>Type</th><th>Lokalisatie</th><th>Drainageweg</th><th>Behandeling</th></tr>
          <tr><td>Periapicaal abces</td><td>Periapicaal</td><td>Kanaal of fistel</td><td>WKB/extractie + incisie drainage</td></tr>
          <tr><td>Parodontaal abces</td><td>Parodontale pocket</td><td>Via sulcus</td><td>Drainage via pocket, debridement</td></tr>
          <tr><td>Pericoroniaire abces</td><td>Rond deels doorgebroken verstandskies</td><td>Operculumgebied</td><td>Spoelen, AB, verwijdering verstandskies</td></tr>
          <tr><td>Sublinguaal abces</td><td>Vloer mondholte</td><td>Incisie intraoraal</td><td>Hospitalisatie! Luchtwegrisico</td></tr>
          <tr><td>Submandibulaire abces</td><td>Onder mandibula</td><td>Extraorale incisie</td><td>OK, hospitalisatie</td></tr>
        </table>
        <div class="danger-box">🚫 Ludwig's angina = bilateraal submandibulaire + submentale + sublinguaal cel. DETI 1 – direct ziekenhuis, luchtwegbewaking!</div>
        <p style="margin-top:10px"><strong>AB beleid abscessen:</strong></p>
        <ul>
          <li>Zonder systemische tekenen: Drainage zonder AB</li>
          <li>Met koorts/malaise/cellulitis: Amoxicilline 500mg 3x/dag of Metronidazol 500mg 3x/dag (bij penallergie)</li>
          <li>Ernstige infectie: Amoxicilline/clavulaanzuur of hospitalisatie IV AB</li>
        </ul>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-purple">Schisis</span><h3>Schisis – Classificatie en Behandeling</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <table>
          <tr><th>Type</th><th>Betrokken structuren</th></tr>
          <tr><td>Schisis lip (CL)</td><td>Lip alleen</td></tr>
          <tr><td>Schisis lip + alveolus (CLA)</td><td>Lip + tandvleesrug</td></tr>
          <tr><td>Schisis lip + alveolus + palatum (CLAP)</td><td>Volledige schisis</td></tr>
          <tr><td>Schisis palatum (CP)</td><td>Alleen verhemelte (lip intact)</td></tr>
          <tr><td>Geïsoleerde gehemelteschisis</td><td>Submuqueuze/uvula bifida</td></tr>
        </table>
        <p style="margin-top:10px"><strong>Behandelingstijdlijn:</strong></p>
        <ul>
          <li><strong>Geboorte-3 mnd:</strong> Pre-chirurgische orthopedische behandeling (nazobifida strips, NAM)</li>
          <li><strong>3-6 mnd:</strong> Lipsluiting (cheiloplastiek)</li>
          <li><strong>9-18 mnd:</strong> Palatumsluiting (palatoplastiek)</li>
          <li><strong>7-10 jaar:</strong> Alveolaire botplastiek (voor doorbraak hoektand)</li>
          <li><strong>Later:</strong> Neus/lipseptiekloos, orthognatische chirurgie, implantaten</li>
        </ul>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-orange">Extractie</span><h3>Extractietechniek en Complicaties</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <p><strong>Extractiebewegingen:</strong></p>
        <ul>
          <li>Eénwortelige elementen: Rotatie + tractie</li>
          <li>Meerwortelige elementen: Luxatie + wigbewegingen (GEEN rotatie)</li>
          <li>Forcepstechniek: Dilatatie alveolaire wand + PDL-ruptuur</li>
        </ul>
        <p style="margin-top:10px"><strong>Complicaties:</strong></p>
        <table>
          <tr><th>Complicatie</th><th>Timing</th><th>Behandeling</th></tr>
          <tr><td>Bloeding</td><td>Direct/postoperatief</td><td>Compressie, hechtingen, lokaal hemostase</td></tr>
          <tr><td>Alveolitis sicca (droge alveole)</td><td>2-5 dagen postoperatief</td><td>Ioodoform-gaas (Alvogyl), analgesie, NIET spoelen!</td></tr>
          <tr><td>Fractura radicis</td><td>Tijdens extractie</td><td>Retrievaltechniek, root canal treatment, of laten</td></tr>
          <tr><td>Mandibulaire paraesthesie</td><td>Postoperatief</td><td>Meestal spontaan herstel 3-6 maanden</td></tr>
          <tr><td>Verslikking/aspiratie tand</td><td>Tijdens extractie</td><td>Röntgen thorax, bronchoscopie</td></tr>
        </table>
        <div class="warn-box">⚠️ Alveolitis sicca: GEEN warme vloeistoffen, GEEN spoelen (stoot bloedstolsel weg). Alvogyl gaas = eerste keus behandeling.</div>
      </div>
    </div>
  </div>

  <div class="tab-content" id="functie-samenvatting">
    <table class="summary-table">
      <tr><th>Concept</th><th>Kernpunt</th></tr>
      <tr><td>Angle Klasse I</td><td>Normaaloclusie, mesiobuccale cusp in sulcus 1e molaar OK</td></tr>
      <tr><td>Angle Klasse III</td><td>Prognathie onderkaak, crossbite voortanden</td></tr>
      <tr><td>Osseoïntegratie</td><td>3-4 mnd OK, 4-6 mnd BK</td></tr>
      <tr><td>Bisfosfonaten IV</td><td>MRONJ-risico → absolute contraindicatie implantaten</td></tr>
      <tr><td>Ludwig's angina</td><td>Bilateraal celluitis, DETI 1, luchtwegrisico</td></tr>
      <tr><td>Schisis lip sluiting</td><td>3-6 maanden</td></tr>
      <tr><td>Schisis palatum sluiting</td><td>9-18 maanden</td></tr>
      <tr><td>Alveolaire botplastiek</td><td>7-10 jaar (voor hoektanddoorbraak)</td></tr>
      <tr><td>Alveolitis sicca</td><td>2-5 dagen na extractie, Alvogyl gaas</td></tr>
      <tr><td>Droge alveole</td><td>GEEN warme dranken, GEEN spoelen</td></tr>
    </table>
  </div>
  <div class="tab-content" id="functie-cikmis">
    <div class="quiz-controls">
      <button class="btn btn-primary" onclick="startQuiz('functie_cikmis')">▶ Start toets</button>
      <button class="btn btn-secondary" onclick="resetQuiz('functie_cikmis')">↺ Opnieuw</button>
      <div class="quiz-progress" id="functie_cikmis-progress">Nog niet gestart</div>
    </div>
    <div id="functie_cikmis-score" style="display:none"></div>
    <div id="functie_cikmis-quiz"></div>
  </div>
  <div class="tab-content" id="functie-oefen">
    <div class="quiz-controls">
      <button class="btn btn-primary" onclick="startQuiz('functie_oefen')">▶ Start oefentoets (AI)</button>
      <button class="btn btn-secondary" onclick="resetQuiz('functie_oefen')">↺ Opnieuw</button>
      <div class="quiz-progress" id="functie_oefen-progress">Nog niet gestart</div>
    </div>
    <div id="functie_oefen-score" style="display:none"></div>
    <div id="functie_oefen-quiz"></div>
  </div>
</div>

<!-- ██████ ORALE PATHOLOGIE ██████ -->
<div class="page" id="page-pato">
  <div class="section-hdr">
    <div class="section-icon si-red">🔬</div>
    <div><h2>Orale Pathologie</h2><p>THK II · 15 MC-vragen · Slagingsgrens 80%</p></div>
  </div>
  <div class="tab-bar">
    <button class="tab-btn active" onclick="openTab('pato','notities',this)">📖 Studienotities</button>
    <button class="tab-btn" onclick="openTab('pato','samenvatting',this)">⚡ Samenvatting</button>
    <button class="tab-btn" onclick="openTab('pato','cikmis',this)">📝 Cikmış Sorular</button>
    <button class="tab-btn" onclick="openTab('pato','oefen',this)">🧪 Oefentoets (AI)</button>
  </div>
  <div class="tab-content active" id="pato-notities">
    <div class="info-box"><div class="info-box-title">🎯 Kernthema's Orale Pathologie</div>
    <ul>
      <li>Premaligne laesies – leukoplakieën, erythroplakieën, OLP</li>
      <li>Orale tumoren – SCC (Spinocellulair carcinoom), risicofactoren</li>
      <li>Cystes kaak – odontogene en niet-odontogene cystes</li>
      <li>Mucocele en ranula</li>
      <li>Afteuse ulcera – minor, major, herpetiform</li>
      <li>Orale manifestaties van systemische ziekten</li>
    </ul></div>

    <div class="theory-card open">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-red">Premaligne</span><h3>Premaligne Laesies Mondholte</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <table>
          <tr><th>Laesie</th><th>Beschrijving</th><th>Maligne risico</th><th>Actie</th></tr>
          <tr><td>Leukoplakieën</td><td>Witte plak, niet wegveegbaar</td><td>1-17% (homogeen laag, niet-homogeen hoog)</td><td>Biopt, elimineer risicofactoren</td></tr>
          <tr><td>Erythroplakieën</td><td>Rode fluweelachtige plak</td><td><strong>40-50%!</strong> (hoogste maligne risico)</td><td>Biopt URGENT</td></tr>
          <tr><td>Orale lichen planus (OLP)</td><td>Wickham-striae, wit netvormig patroon</td><td>0,5-2% (erosieve vorm hoger)</td><td>Monitoring, biopt bij verandering</td></tr>
          <tr><td>Submuceuze fibrose</td><td>Betelnoot-gerelateerd, fibrotisch verhemelte</td><td>7-13%</td><td>Stoppen betelnoot, biopt</td></tr>
        </table>
        <div class="danger-box">🚫 Erythroplakieën hebben het HOOGSTE maligne potentieel (40-50%)! Altijd biopt!</div>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-orange">Cystes</span><h3>Kaakcystes – Classificatie</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <table>
          <tr><th>Cyste</th><th>Oorsprong</th><th>Röntgen</th></tr>
          <tr><td>Radiculaire cyste</td><td>Pulpanecrose → periapicaal granuloom → cyste</td><td>Periapicaal radiolucent, cortex begrenzing</td></tr>
          <tr><td>Dentigerale cyste</td><td>Rond kroon van niet-doorgebroken tand (folliculaire cyste)</td><td>Radiolucent rond kroon</td></tr>
          <tr><td>Keratocyste (OKC)</td><td>Odontogene keratocyste – hoge recidiefkans</td><td>Multiloculair, langs mandibula</td></tr>
          <tr><td>Nasopalatinale cyste</td><td>Ductus nasopalatinus restanten, anterieur maxilla</td><td>Hartvormige lucency anterieur maxilla</td></tr>
        </table>
        <div class="warn-box">⚠️ OKC (Keratocyste) heeft de HOOGSTE recidiefkans! Extra follow-up noodzakelijk. Kan onderdeel zijn van nevoid basaalcelcarcinoom syndroom (Gorlin).</div>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-purple">Afteuse ulcera</span><h3>Recidiverende Afteuse Ulcera (RAU)</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <table>
          <tr><th>Type</th><th>Grootte</th><th>Aantal</th><th>Genezing</th></tr>
          <tr><td>Minor (Mikulicz)</td><td>&lt;10mm</td><td>1-5</td><td>7-14 dagen, geen litteken</td></tr>
          <tr><td>Major (Sutton)</td><td>&gt;10mm</td><td>1-3</td><td>&gt;6 weken, LITTEKEN!</td></tr>
          <tr><td>Herpetiform</td><td>1-2mm</td><td>10-100 kleine ulcera</td><td>7-14 dagen, kunnen conflueren</td></tr>
        </table>
        <p style="margin-top:10px"><strong>Behandeling:</strong> Triamcinolon-acetonidzuur mondpasta, chloorhexidine spoeling, analgesie. Bij ernstige/frequente recidieven: systemische corticosteroïden, colchicine, thalidomide (ernstig).</p>
      </div>
    </div>
  </div>

  <div class="tab-content" id="pato-samenvatting">
    <table class="summary-table">
      <tr><th>Concept</th><th>Kernpunt</th></tr>
      <tr><td>Erythroplakieën</td><td>Hoogste maligne risico (40-50%), urgent biopt!</td></tr>
      <tr><td>Leukoplakieën homogeen</td><td>Laag maligne risico (1%)</td></tr>
      <tr><td>OLP (lichen planus)</td><td>Wickham-striae, monitoring</td></tr>
      <tr><td>Radiculaire cyste</td><td>Pulpanecrose oorzaak, WKB cureert</td></tr>
      <tr><td>Dentigerale cyste</td><td>Rond niet-doorgebroken tand</td></tr>
      <tr><td>OKC</td><td>Hoogste recidiefkans, Gorlin-syndroom</td></tr>
      <tr><td>Afteus ulcus major</td><td>&gt;10mm, &gt;6 weken, litteken</td></tr>
      <tr><td>Ludwig's angina</td><td>Bilateraal submandibulaire cellulitis, levensgevaarlijk</td></tr>
    </table>
  </div>
  <div class="tab-content" id="pato-cikmis">
    <div class="quiz-controls">
      <button class="btn btn-primary" onclick="startQuiz('pato_cikmis')">▶ Start toets</button>
      <button class="btn btn-secondary" onclick="resetQuiz('pato_cikmis')">↺ Opnieuw</button>
      <div class="quiz-progress" id="pato_cikmis-progress">Nog niet gestart</div>
    </div>
    <div id="pato_cikmis-score" style="display:none"></div>
    <div id="pato_cikmis-quiz"></div>
  </div>
  <div class="tab-content" id="pato-oefen">
    <div class="quiz-controls">
      <button class="btn btn-primary" onclick="startQuiz('pato_oefen')">▶ Start oefentoets (AI)</button>
      <button class="btn btn-secondary" onclick="resetQuiz('pato_oefen')">↺ Opnieuw</button>
      <div class="quiz-progress" id="pato_oefen-progress">Nog niet gestart</div>
    </div>
    <div id="pato_oefen-score" style="display:none"></div>
    <div id="pato_oefen-quiz"></div>
  </div>
</div>

<!-- ██████ ORTHODONTIE ██████ -->
<div class="page" id="page-ortho">
  <div class="section-hdr">
    <div class="section-icon si-teal">📐</div>
    <div><h2>Orthodontie</h2><p>THK II · 15 MC-vragen · Slagingsgrens 80%</p></div>
  </div>
  <div class="tab-bar">
    <button class="tab-btn active" onclick="openTab('ortho','notities',this)">📖 Studienotities</button>
    <button class="tab-btn" onclick="openTab('ortho','samenvatting',this)">⚡ Samenvatting</button>
    <button class="tab-btn" onclick="openTab('ortho','cikmis',this)">📝 Cikmış Sorular</button>
    <button class="tab-btn" onclick="openTab('ortho','oefen',this)">🧪 Oefentoets (AI)</button>
  </div>
  <div class="tab-content active" id="ortho-notities">
    <div class="info-box"><div class="info-box-title">🎯 Kernthema's Orthodontie</div>
    <ul>
      <li>Angle-classificatie en skelettale klassen</li>
      <li>Tandstandafwijkingen – overbite, overjet, crossbite, open beet</li>
      <li>Ruimteproblemen – ruimtetekort berekening</li>
      <li>Interceptieve orthodontie – timing behandeling</li>
      <li>Orthodontische krachten – botremodellering</li>
      <li>Retentie na behandeling</li>
    </ul></div>

    <div class="theory-card open">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-teal">Afwijkingen</span><h3>Tandstandafwijkingen – Definities</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <table>
          <tr><th>Term</th><th>Definitie</th><th>Normaalwaarde</th></tr>
          <tr><td>Overjet (horizontale overbite)</td><td>Horizontale afstand boven- en onderincisieven</td><td>2-4 mm</td></tr>
          <tr><td>Overbite (verticale overbite)</td><td>Verticale overlap boven- op ondersnijtanden</td><td>1-3 mm (1/3 overlapping)</td></tr>
          <tr><td>Open beet</td><td>Geen verticale overlap, gap anterioraal</td><td>Abnormaal (0 mm)</td></tr>
          <tr><td>Crossbite (kruisbeet)</td><td>Boventanden staan binnenkant ondertanden</td><td>Abnormaal</td></tr>
          <tr><td>Scissorsbeet (schaarsbeet)</td><td>Boventanden volledig buiten ondertanden</td><td>Abnormaal</td></tr>
          <tr><td>Diastema</td><td>Ruimte tussen tanden (meest centraal)</td><td>&gt;0,5 mm = klinisch significant</td></tr>
        </table>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-blue">Krachten</span><h3>Orthodontische Krachten en Botremodellering</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <ul>
          <li><strong>Drukzijde:</strong> Botafbraak (osteoklastenactiviteit) → tand beweegt naar drukzijde</li>
          <li><strong>Trekzijde:</strong> Botaanmaak (osteoblastenactiviteit) → PDL-rek stimuleert botvorming</li>
          <li><strong>Optimale kracht:</strong> Lichte krachten (25-75 g voor incisieven) → optimale remodellering. Zware krachten → pijn, hialinisatie PDL, vertraging</li>
          <li><strong>Wortelresorptie:</strong> Risico bij orthodontie, met name langdurige krachten en apexnabije krachten. Monitoring met röntgen.</li>
          <li><strong>Retentie:</strong> Na actieve behandeling essentieel! Tanden neigen terug te bewegen. Vaste retainer (lingaalbaar) of removable retainer.</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="tab-content" id="ortho-samenvatting">
    <table class="summary-table">
      <tr><th>Concept</th><th>Kernpunt</th></tr>
      <tr><td>Overjet normaal</td><td>2-4 mm</td></tr>
      <tr><td>Overbite normaal</td><td>1-3 mm (1/3 overlap)</td></tr>
      <tr><td>Crossbite</td><td>Boven tanden staan aan binnenzijde ondertanden</td></tr>
      <tr><td>Drukzijde orthodontie</td><td>Botafbraak → tand beweegt daarheen</td></tr>
      <tr><td>Trekzijde orthodontie</td><td>Botaanmaak (osteoblasten)</td></tr>
      <tr><td>Optimale kracht incisief</td><td>25-75 gram</td></tr>
      <tr><td>Retentie</td><td>Altijd nodig na behandeling</td></tr>
    </table>
  </div>
  <div class="tab-content" id="ortho-cikmis">
    <div class="quiz-controls">
      <button class="btn btn-primary" onclick="startQuiz('ortho_cikmis')">▶ Start toets</button>
      <button class="btn btn-secondary" onclick="resetQuiz('ortho_cikmis')">↺ Opnieuw</button>
      <div class="quiz-progress" id="ortho_cikmis-progress">Nog niet gestart</div>
    </div>
    <div id="ortho_cikmis-score" style="display:none"></div>
    <div id="ortho_cikmis-quiz"></div>
  </div>
  <div class="tab-content" id="ortho-oefen">
    <div class="quiz-controls">
      <button class="btn btn-primary" onclick="startQuiz('ortho_oefen')">▶ Start oefentoets (AI)</button>
      <button class="btn btn-secondary" onclick="resetQuiz('ortho_oefen')">↺ Opnieuw</button>
      <div class="quiz-progress" id="ortho_oefen-progress">Nog niet gestart</div>
    </div>
    <div id="ortho_oefen-score" style="display:none"></div>
    <div id="ortho_oefen-quiz"></div>
  </div>
</div>
'''

with open(OUTPUT, 'a', encoding='utf-8') as f:
    f.write(THK2)
print("THK2 sections written, total:", os.path.getsize(OUTPUT))
