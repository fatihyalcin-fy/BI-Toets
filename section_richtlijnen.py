import os
OUTPUT = '/sessions/determined-eloquent-pasteur/mnt/outputs/BI_Toets_Studieplatform.html'

RICHTLIJNEN = '''
<!-- ██████ ACTUELE RICHTLIJNEN ██████ -->
<div class="page" id="page-richtlijnen">
  <div class="section-hdr">
    <div class="section-icon si-orange">📚</div>
    <div><h2>Actuele Richtlijnen</h2><p>KIMO · NVvP · KNMT · CBO richtlijnen</p></div>
  </div>
  <div class="tab-bar">
    <button class="tab-btn active" onclick="openTab('richtlijnen','paro',this)">🔴 Paro</button>
    <button class="tab-btn" onclick="openTab('richtlijnen','endo',this)">🔵 Endo</button>
    <button class="tab-btn" onclick="openTab('richtlijnen','medisch',this)">⚕️ Medisch</button>
    <button class="tab-btn" onclick="openTab('richtlijnen','preventie',this)">🛡️ Preventie</button>
  </div>

  <div class="tab-content active" id="richtlijnen-paro">
    <h3 style="font-size:15px;font-weight:700;margin-bottom:14px">Parodontologische Richtlijnen – NVvP 2022</h3>

    <div class="rl-card">
      <h3>Parodontale Behandelrichtlijn – Stap 1-4 Protocol</h3>
      <div class="rl-org">NVvP (Nederlandse Vereniging voor Parodontologie) · EFP S3 Richtlijn 2020</div>
      <ol class="rl-steps">
        <li>Stap 1 (Initieel): Uitgebreide paro-anamnese, risicoassessment, MHI, supragin. reiniging, rookstop</li>
        <li>Stap 2 (Causaal): Subgingivale reiniging (SRP) inclusief eliminatie tandsteenretentieve factoren</li>
        <li>Her-evaluatie: 4-8 weken na Stap 2 (niet eerder, tissue needs time to remodel)</li>
        <li>Stap 3 (Chirurgisch): Indien residuele pockets ≥6mm, furcatie klasse III na her-evaluatie</li>
        <li>Stap 4 (Onderhoud/SPT): Individueel bepaald interval (3-6 maanden)</li>
      </ol>
    </div>

    <div class="rl-card">
      <h3>Antibiotica bij Parodontitis – NVvP Protocol</h3>
      <div class="rl-org">NVvP · Evidence-based update 2020</div>
      <ol class="rl-steps">
        <li>Indicatie: Stg III/IV Graad C (vroeger "agressieve parodontitis"), jonge patiënt, snelle progressie</li>
        <li>Eerste keus: Amoxicilline 500mg 3x/dag + Metronidazol 500mg 3x/dag, 7 dagen</li>
        <li>Penallergie: Metronidazol 500mg 3x/dag monotherapie</li>
        <li>Timing: Systemische AB GELIJKTIJDIG aan of direct na de laatste SRP-sessie</li>
        <li>Contraindicatie: Niet als vervanging voor mechanische therapie</li>
      </ol>
    </div>

    <div class="rl-card">
      <h3>DPSI – Screeningsprocedure NL</h3>
      <div class="rl-org">NIGZ/NVvP · Nederlandse standaard</div>
      <ol class="rl-steps">
        <li>Screening bij iedere nieuwe patiënt en bij controles (frequentie risico-afhankelijk)</li>
        <li>Gebruik WHO-sonde (0,5mm bal, zwarte band 3,5-5,5mm)</li>
        <li>6 sextanten scoren, hoogste score per sextant noteren</li>
        <li>DPSI 4 en/of *-score → verdere paro-diagnostiek (PA-status inclusief full-mouth röntgen)</li>
        <li>Rokers: BOP mogelijk onderdrukt, extra waakzaamheid bij klinische beoordeling</li>
      </ol>
    </div>
  </div>

  <div class="tab-content" id="richtlijnen-endo">
    <h3 style="font-size:15px;font-weight:700;margin-bottom:14px">Endodontische Richtlijnen – ESE / NVvE</h3>

    <div class="rl-card">
      <h3>Wortelkanaalbehandeling – ESE Kwaliteitsrichtlijnen</h3>
      <div class="rl-org">ESE (European Society of Endodontology) · 2006 update 2014</div>
      <ol class="rl-steps">
        <li>Diagnose: Klinisch + radiologisch onderzoek, vitaliteitstest</li>
        <li>Toegangspreparatie: Volledig dak pulpakamer verwijderen, alle kanalingangen identificeren</li>
        <li>Irrigatieprotocol: NaOCl (min 1%), EDTA voor smear layer, eindafspoelingen</li>
        <li>Instrumentatie: Werkhoogte 0,5-1mm van röntgenapex, bevestigd met apex-locator</li>
        <li>Obturatie: Hermetische afsluiting, guttapercha + sealer, beoordelen op röntgenfoto</li>
        <li>Coronale restauratie: Spoedig na WKB, definitieve restauratie binnen 1-2 weken</li>
        <li>Follow-up: 1 jaar postoperatief (radiologisch herstel beoordelen)</li>
      </ol>
    </div>

    <div class="rl-card">
      <h3>Tandtrauma – IADT Richtlijnen 2020</h3>
      <div class="rl-org">IADT (International Association of Dental Traumatology) · 2020</div>
      <ol class="rl-steps">
        <li>Avulsie blijvende tand: Replantatie zo snel mogelijk (&lt;60 min droog = betere prognose)</li>
        <li>Bewaarmedium voorkeur: HBSS of Viaspan; praktijk: melk, fysiologisch zout, speeksel</li>
        <li>Spalk na replantatie: Flexibele spalk (0,4mm composietdraad) 7-14 dagen</li>
        <li>Antibiotica: Doxycycline 100mg 2x/dag 7 dagen bij gesloten apex (resorptiepreventie)</li>
        <li>WKB timing: 7-10 dagen bij gesloten apex; open apex = afwachten revascularisatie</li>
        <li>Avulsie melktand: GEEN replantatie (risico tandkiem)</li>
      </ol>
    </div>

    <div class="rl-card">
      <h3>DETI – Tandheelkundige Triage</h3>
      <div class="rl-org">Nederlandse tandheelkundige noodpraktijk protocollen</div>
      <ol class="rl-steps">
        <li>DETI 1 (Direct): Luchtwegproblemen, Ludwig's angina, ernstige faciale cellulitis → ziekenhuisopname</li>
        <li>DETI 2 (24 uur): Acuut apicaal abces met koorts, ANUG, avulsie (&lt;1 uur), alveolitis</li>
        <li>DETI 3 (48-72 uur): Irreversibele pulpitis, kroonbreuk + pulpa-blootstelling</li>
        <li>DETI 4 (Week): Gebroken prothese, subacute pijn zonder zwelling, losse kroon</li>
      </ol>
    </div>
  </div>

  <div class="tab-content" id="richtlijnen-medisch">
    <h3 style="font-size:15px;font-weight:700;margin-bottom:14px">Medische Richtlijnen Tandheelkunde</h3>

    <div class="rl-card">
      <h3>Endocarditis Profylaxe – NVVC/ESC 2015</h3>
      <div class="rl-org">ESC Guidelines 2015 · NVVC</div>
      <ol class="rl-steps">
        <li>Hoog-risico patiënten: Kunstklep, eerder infective endocarditis, congenitale hartafwijking (cyanotisch, niet volledig gecorrigeerd)</li>
        <li>Profylaxe geven bij: Tandheelkundige ingrepen met manipulatie gingivaal/periapicaal of mucosa-perforatie</li>
        <li>Eerste keus: Amoxicilline 2g oraal 30-60 min voor ingreep</li>
        <li>Penallergie: Clindamycine 600mg oraal 30-60 min voor ingreep</li>
        <li>Niet aanbevolen bij: Laag-risico hart, gastrointestinale/genitourinaire procedures</li>
      </ol>
    </div>

    <div class="rl-card">
      <h3>Antistolling en Tandheelkunde – CBO Richtlijn</h3>
      <div class="rl-org">KNMT / Federatie Medisch Specialisten</div>
      <ol class="rl-steps">
        <li>Vitamine K-antagonisten (Warfarine/Acenocoumarol): INR meten voor invasieve ingreep</li>
        <li>INR ≤3,5: Extractie mogelijk, medicatie NIET stoppen. Lokale hemostase: oxidatiecellulose, hechtingen</li>
        <li>INR &gt;3,5: Overleg internist/cardioloog; elektieve ingreep uitstellen</li>
        <li>DOAC (apixaban, rivaroxaban, dabigatran): Laatste dosis overslaan voor invasief ingreep</li>
        <li>Trombocytenaggregatieremmers (aspirine, clopidogrel): NIET stoppen bij extractie; lokale hemostase</li>
      </ol>
    </div>

    <div class="rl-card">
      <h3>MRONJ – Medicatie-gerelateerde Osteonecrose Kaak</h3>
      <div class="rl-org">AAOMS / NVMKA Richtlijn 2022</div>
      <ol class="rl-steps">
        <li>Definitie: ≥8 weken blootgelegen bot kaak, gebruik antiresorptiva/antiangiogenica, geen bestralingsoorzaak</li>
        <li>Hoog risico: IV bisfosfonaten (zoledroninezuur, pamidronaat voor oncologie)</li>
        <li>Laag risico: Oraal bisfosfonaten (alendronaat, risedronaat voor osteoporose)</li>
        <li>Preventie: Tandheelkundig screening voor start IV bisfosfonaten. Behandel actieve infecties en hopeloos geprognosseerde elementen</li>
        <li>Bij IV bisfosfonaten: Invasieve procedures vermijden of in overleg oncoloog</li>
        <li>Bij oraal bisfosfonaten (&lt;4 jaar): Extractie OK, wel monitoring. &gt;4 jaar of corticosteroïden: medicatievrij interval overwegen</li>
      </ol>
    </div>
  </div>

  <div class="tab-content" id="richtlijnen-preventie">
    <h3 style="font-size:15px;font-weight:700;margin-bottom:14px">Preventieve Richtlijnen</h3>

    <div class="rl-card">
      <h3>Fluoride Preventieadvies – Acta/KNMT 2019</h3>
      <div class="rl-org">Acta / KNMT / NHG</div>
      <ol class="rl-steps">
        <li>Tandpasta &lt;3 jaar: 500 ppm fluoride, rijstkorrelgrootte (0,1mg), 2x/dag</li>
        <li>Tandpasta 3-6 jaar: 1000 ppm fluoride, erwtgrootte (0,5mg), 2x/dag</li>
        <li>Tandpasta 6-17 jaar: 1450 ppm fluoride, 1cm strip, 2x/dag</li>
        <li>Fluoride lak (22.600 ppm): Hoog-risico kinderen, 2-4x/jaar. Aanbevolen bij DPSI 0-1 patiënten met hoog cariesrisico</li>
        <li>Sealants: 6-jaars molaar bij hoog-risico kinderen zodra tand volledig doorgebroken is</li>
        <li>Fluoride tabletten: Niet meer standaard aanbevolen (fluorose risico, beperkt post-eruptief effect)</li>
      </ol>
    </div>

    <div class="rl-card">
      <h3>Recall Frequentie – NICE / KNMT Richtlijn</h3>
      <div class="rl-org">KNMT Richtlijn Zorg voor mondhygiëne</div>
      <ol class="rl-steps">
        <li>Laag risico: Recall elke 24 maanden (volwassenen)</li>
        <li>Gemiddeld risico: Recall elke 12 maanden</li>
        <li>Hoog risico: Recall elke 3-6 maanden (diabetes, droge mond, actieve caries, hoge cariesanamnese)</li>
        <li>SPT na paro-behandeling: 3-6 maanden afhankelijk van paro-risicoprofiel</li>
        <li>Kinderen met actieve caries: Elke 3-6 maanden tot caries stabiel</li>
      </ol>
    </div>

    <div class="rl-card">
      <h3>Röntgendiagnostiek – Selectiecriteria</h3>
      <div class="rl-org">European Guidelines on Radiation Protection · KIMO</div>
      <ol class="rl-steps">
        <li>Nieuwe patiënt hoog risico: Bitewings + periapicale foto's (full survey)</li>
        <li>Caries-screening laag risico: Bitewings elke 24-36 maanden</li>
        <li>Caries-screening hoog risico: Bitewings elke 12-18 maanden</li>
        <li>Kinderen: Bitewings bij contactpunten niet meer zichtbaar, pedo-adaptaties</li>
        <li>Panoramafoto: Niet als screening. Indicatie: paro (overview), WKB molaren, verstandskiezen, traumatologie</li>
        <li>CBCT: Alleen bij aantoonbare klinische voordelen boven 2D-röntgen (implantologie, complex endodontie)</li>
      </ol>
    </div>
  </div>
</div>

  </div><!-- end #content -->
</main><!-- end #main -->
'''

with open(OUTPUT, 'a', encoding='utf-8') as f:
    f.write(RICHTLIJNEN)
print("RICHTLIJNEN + closing tags written, total:", os.path.getsize(OUTPUT))
