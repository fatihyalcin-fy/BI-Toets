import os
OUTPUT = '/sessions/determined-eloquent-pasteur/mnt/outputs/BI_Toets_Studieplatform.html'

JS = '''
<script>
// ─── PAGE / TAB NAVIGATION ───────────────────────────────────────────────────
function showPage(id, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const page = document.getElementById('page-' + id);
  if (page) page.classList.add('active');
  if (btn) btn.classList.add('active');
  else {
    document.querySelectorAll('.nav-item').forEach(n => {
      if (n.getAttribute('onclick') && n.getAttribute('onclick').includes("'" + id + "'"))
        n.classList.add('active');
    });
  }
  document.getElementById('topbar-title').textContent = 
    (page ? page.querySelector('h2') ? page.querySelector('h2').textContent : 'BI Toets Studieplatform' : 'BI Toets Studieplatform');
  window.scrollTo(0, 0);
}

function openTab(section, tab, btn) {
  const prefix = section + '-';
  document.querySelectorAll('[id^="' + prefix + '"]').forEach(t => t.classList.remove('active'));
  const el = document.getElementById(prefix + tab);
  if (el) el.classList.add('active');
  const bar = btn ? btn.closest('.tab-bar') : null;
  if (bar) bar.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

function toggleCard(header) {
  header.parentElement.classList.toggle('open');
}

// ─── QUIZ DATA ────────────────────────────────────────────────────────────────
const QUIZZES = {

// ═══════════════ PARODONTOLOGIE – CIKMIS ═══════════════
paro_cikmis: [
  {q:"Een 35-jarige patiënte heeft een DPSI-score van 4 in het sextant rechts boven. Wat is de meest passende vervolgstap?",opts:["Alleen mondhygiëne-instructie geven","Subgingivale reiniging starten na supragin. scaling en her-evaluatie","Direct verwijzen naar paro-specialist","Alleen supragin. scaling uitvoeren"],ans:1,exp:"DPSI 4 = pockets ≥5,5mm. Na supragin. scaling en MHI: subgingivale SRP. Her-evaluatie 4-8 weken daarna. Specialist bij aanhoudende pockets."},
  {q:"Bij een rokende patiënt is de BOP (Bleeding on Probing) 5%. U vermoedt dat dit niet overeenkomt met de werkelijke ernst. Waarom?",opts:["Rokers hebben altijd lage BOP door minder bacteriën","Nicotine veroorzaakt vasoconstrictie, waardoor BOP onderdrukt wordt","Roken zorgt voor betere mondhygiëne","Roken heeft geen effect op BOP"],ans:1,exp:"Roken veroorzaakt vasoconstrictie van gingivale bloedvaten → verminderd BOP ook bij aanwezige parodontitis. Vals negatief resultaat! Ernst kan onderschat worden."},
  {q:"Welke antibioticacombinatie wordt bij het NVvP-protocol aanbevolen voor stadium III/IV parodontitis graad C?",opts:["Amoxicilline 250mg + Metronidazol 250mg, 5 dagen","Amoxicilline 500mg + Metronidazol 500mg, 7 dagen","Clindamycine 300mg, 10 dagen","Doxycycline 100mg, 14 dagen"],ans:1,exp:"NVvP protocol: Amoxicilline 500mg 3x/dag + Metronidazol 500mg 3x/dag gedurende 7 dagen. Gelijktijdig met of direct na SRP."},
  {q:"Wat is de definitie van furcatie klasse II volgens Hamp?",opts:["Sondering minder dan 3mm horizontaal in furcatie","Sondering 3mm of meer horizontaal, maar niet door-en-door","Door-en-door sondering mogelijk","Furcatie zichtbaar met het blote oog"],ans:1,exp:"Hamp classificatie: Klasse I <3mm, Klasse II ≥3mm maar niet door-en-door, Klasse III = door-en-door. Klasse II is behandelbaar maar met matige prognose."},
  {q:"Na hoeveel weken na subgingivale reiniging moet de her-evaluatie plaatsvinden?",opts:["1-2 weken","4-8 weken","10-12 weken","6 maanden"],ans:1,exp:"Her-evaluatie vindt 4-8 weken na subgingivale reiniging (SRP) plaats. Weefsel heeft tijd nodig om te remodelleren. Eerder testen geeft geen betrouwbaar beeld."},
  {q:"Een patiënt presenteert zich met pijnlijke necrotische interdentale papillen, spontane bloeding en fetor ex ore. Er is geen botverlies op röntgen. Wat is de diagnose?",opts:["Chronische parodontitis","ANUP (Acute Necrotiserende Ulceratieve Parodontitis)","ANUG (Acute Necrotiserende Ulceratieve Gingivitis)","Parodontaal abces"],ans:2,exp:"ANUG = necrose van gingivale papillen, spontane bloeding, fetor, GEEN botverlies. ANUP = ANUG + botverlies. Typisch: jonge man, roker, stress."},
  {q:"Bij welke DPSI-score is verwijzing naar een paro-specialist standaard aangewezen?",opts:["DPSI 2","DPSI 3","DPSI 4","DPSI 1"],ans:2,exp:"DPSI 4 (pockets ≥5,5mm) is indicatie voor uitgebreide behandeling. Persisterende DPSI 4 na behandeling → verwijzing specialist. DPSI 3 = behandeling bij algemeen practicus."},
  {q:"Welk systemisch medicament kan gingivale hyperplasie veroorzaken?",opts:["Metformine","Nifedipine (calciumantagonist)","Metoprolol","Atorvastatine"],ans:1,exp:"Nifedipine (calciumantagonist), fenytoïne (anti-epilepticum) en ciclosporine (immunosuppressivum) kunnen gingivale hyperplasie veroorzaken. Medicatieswitch indien mogelijk."},
  {q:"Wat is de relatie tussen parodontitis behandeling en HbA1c bij diabetespatiënten?",opts:["Paro-behandeling heeft geen effect op HbA1c","Paro-behandeling kan HbA1c met gemiddeld 0,4% verlagen","Paro-behandeling verhoogt HbA1c","Alleen insuline beïnvloedt HbA1c"],ans:1,exp:"Meta-analyses tonen aan dat paro-behandeling HbA1c met gemiddeld 0,3-0,4% kan verlagen. Bidirectionele relatie: DM verergert paro, paro verergert DM-regulatie."},
  {q:"Wat is kenmerkend voor Graad C parodontitis in de 2018 classificatie?",opts:["Langzame progressie (&lt;2mm botafname per 5 jaar)","Snelle progressie (≥2mm botafname per 5 jaar) en/of risicofactoren","Pockets dieper dan 7mm","Furcatie klasse III"],ans:1,exp:"Graad C = snelle progressie (≥2mm/5jaar), of risicofactoren: >10 sig/dag, HbA1c ≥7%, of biofilm onvoldoende verklaring voor ernst. Indicatie voor systemische AB."},
  {q:"Een patiënt heeft een DPSI * (asterisk) score. Wat betekent dit?",opts:["Geen pocketdiepte gevonden","Furcatie-betrokkenheid, ≥7mm botverlies en/of tandmobiliteit aanwezig","Bloeding na sonderen afwezig","Tand hopeloos"],ans:1,exp:"DPSI * (asterisk) = aanvullende bevindingen zoals furcatiebetrokkenheid, ≥7mm vertikaal botverlies, of 2e/3e graad mobiliteit. Wordt toegevoegd aan de sextantscore."},
  {q:"Welke sextanten worden gebruikt bij de DPSI-meting?",opts:["4 sextanten (2 posterior, 1 anterieur per kaak)","6 sextanten (17-14, 13-23, 24-27, 37-34, 33-43, 44-47)","8 kwadranten","Per element apart"],ans:1,exp:"DPSI gebruikt 6 sextanten: 3 bovenkaak + 3 onderkaak. 17-14, 13-23, 24-27 (BK); 37-34, 33-43, 44-47 (OK). Sextant met <2 tanden: niet scoren."},
  {q:"Wat is de meest passende behandeling bij ANUG?",opts:["Agressieve debridement van alle sextanten tegelijk","Voorzichtige debridement, CHX-spoeling, analgesie, eventueel Metronidazol","Direct antibiotica starten zonder debridement","Extractie van aangedane tanden"],ans:1,exp:"ANUG behandeling: voorzichtige (niet agressieve) debridement, CHX 0,12-0,2% spoelen, pijnstilling. Metronidazol 250mg 3x/dag bij koorts. Pas na pijnreductie agressievere reiniging."},
  {q:"Bij een roker met parodontitis is de gecombineerde AB-behandeling bij Stg III paro geïndiceerd. Wanneer geeft u de antibiotica?",opts:["1 week voor de SRP-sessie starten","Gelijktijdig met of direct na de laatste SRP-sessie","6 weken na her-evaluatie","Alleen bij koorts geven"],ans:1,exp:"AB timing is cruciaal: gelijktijdig aan of direct na de subgingivale SRP-sessie. Zo worden bacteriën in de pocket blootgesteld aan AB terwijl ze nog aanwezig zijn. Niet eerder (ineffectief) of later (biofilm hersteld)."},
  {q:"Een DPSI 3 patiënt vraagt of hij/zij naar een paro-specialist verwezen wordt. Wat is het juiste antwoord?",opts:["Ja, altijd verwijzen bij DPSI 3","Nee, DPSI 3 wordt behandeld door de algemeen tandarts","Ja, als de patiënt dat wil","Alleen verwijzen als de patiënt ouder is dan 40 jaar"],ans:1,exp:"DPSI 3 (pockets 3,5-5,5mm) kan behandeld worden door de algemeen practicus: MHI + SRP. Verwijzing paro-specialist bij DPSI 4 die niet reageert op behandeling."},
],

// ═══════════════ PARO – OEFENTOETS AI ═══════════════
paro_oefen: [
  {q:"Welk type resorptie is typisch voor parodontitis? ",opts:["Interne resorptie","Externe cervicale resorptie","Horizontaal alveolaire botafname","Intrusie-gerelateerde resorptie"],ans:2,exp:"Parodontitis veroorzaakt horizontale botafname van de alveolaire kam als gevolg van chronische ontsteking. Verticale botdefecten zijn minder frequent maar ernstig (infrabony pockets)."},
  {q:"Een patiënt gebruikt metformine en heeft DPSI 3. Welke invloed heeft metformine op het paro-behandelresultaat?",opts:["Metformine verslechtert paro-respons","Metformine verbeert insulinegevoeligheid, gunstig voor paro-respons","Metformine heeft geen relatie met paro","Metformine verhoogt bloedingsrisico"],ans:1,exp:"Metformine verbetert insulinegevoeligheid en heeft anti-inflammatoire eigenschappen. Goed gereguleerde DM met metformine = betere paro-respons. Slecht gereguleerde DM (HbA1c >7%) = slechtere prognose."},
  {q:"Welke informatie is ESSENTIEEL bij het stellen van een paro-diagnose?",opts:["Alleen de pocketdiepte meting","Pocketdiepte + BOP + botafname röntgen + klinisch attachment verlies","Alleen BOP-meting","Alleen röntgenfoto's"],ans:1,exp:"Complete paro-diagnose vereist: pocketdiepte (PPD), bloedingsscore (BOP), attachmentverlies (CAL = PPD - recessie), röntgenologisch botverlies. Alleen pocketdiepte is onvoldoende."},
  {q:"Wat is 'full-mouth disinfection' en wanneer wordt het toegepast?",opts:["SRP van het volledige gebit binnen 24-48 uur, gecombineerd met CHX","SRP verspreid over meerdere weken","Alleen supragin. scaling van alle sextanten","Gebruik van antibiotica als enige behandeling"],ans:0,exp:"Full-mouth disinfection (Quirynen-protocol): SRP van alle sextanten binnen 24-48 uur + CHX-spoeling, gel. Doel: herbesmetting van behandelde sextanten voorkomen. Evidence is gemengd t.o.v. kwadrantsgewijs SRP."},
  {q:"Wat is de betekenis van 'CAL' (Clinical Attachment Level)?",opts:["Pocketdiepte alleen","Afstand van cement-glazuurgrens tot het meest apicale puntje van de sonde","Afstand van tandvleeesrand tot bodem pocket","Röntgenologisch botverlies"],ans:1,exp:"CAL = afstand van CEJ (cement-email grens) tot bodem pocket. CAL = pocketdiepte + recessie OF CAL = pocketdiepte - hyperplasie. CAL is de werkelijke maat voor attachmentverlies, onafhankelijk van tandvleesniveau."},
  {q:"Een 22-jarige patient heeft snel progressieve parodontitis (stadium III, graad C). Waarom is de leeftijd relevant?",opts:["Jonge leeftijd heeft geen invloed op prognose","Jonge leeftijd bij ernstige paro suggereert genetische factoren of immunologische afwijking – indicatie graad C","Jonge patiënten reageren altijd beter op behandeling","Leeftijd bepaalt enkel het type anesthesie"],ans:1,exp:"Jonge leeftijd bij ernstige paro (>30% botverlies bij <30 jaar) is een van de criteria voor Graad C. Suggereert agressieve pathogenen, verhoogde gastheerrespons of immuundeficiëntie. Extra risico-assessment en mogelijk systeemonderzoek."},
  {q:"Welk kenmerk onderscheidt ANUP van ANUG?",opts:["ANUP heeft fetor, ANUG niet","ANUP heeft botverlies, ANUG heeft alleen gingivale necrose","ANUG heeft spontane bloeding, ANUP niet","Er is geen verschil, ze zijn identiek"],ans:1,exp:"ANUG = necrotiserende gingivitis (alleen gingiva aangedaan, geen botverlies). ANUP = necrotiserende parodontitis (gingiva + bot/attachmentverlies). ANUP is ernstig en irreversibel."},
  {q:"Een patiënt gebruikt ciclosporine na niertransplantatie. Welke orale bijwerking verwacht u?",opts:["Droge mond (xerostomie)","Gingivale hyperplasie","Branden van de mond","Tandontkalking"],ans:1,exp:"Ciclosporine (immunosuppressivum) veroorzaakt gingivale hyperplasie, net als fenytoïne en nifedipine. Behandeling: optimale mondhygiëne, eventueel gingivectomie. Mogelijk medicatieswitch na overleg internist."},
  {q:"Wat is 'SPT' en wat is de aanbevolen frequentie bij hoog-risico patiënten?",opts:["Single Periodontal Treatment - eenmalig","Supportive Periodontal Therapy - elke 3-6 maanden","Systematic Preventive Treatment - jaarlijks","Standard Periodontal Testing - bij elke controle"],ans:1,exp:"SPT = Supportive Periodontal Therapy = onderhoudsfase na actieve paro-behandeling. Frequentie: hoog-risico (rokers, diabetes, diepe residuele pockets) = elke 3 maanden. Laag-risico = 6-12 maanden."},
  {q:"Bij een patiënt met DPSI 2 (alleen tandsteen) is de mondhygiëne perfect. Welke behandeling is geïndiceerd?",opts:["Geen behandeling, perfect mondhygiëne is voldoende","Verwijdering subgingivaal tandsteen en supragin. scaling","Antibiotica kuur","SRP (subgingivale reiniging)"],ans:1,exp:"DPSI 2 = subgingivaal tandsteen of overhangen, ongeacht BOP. Behandeling: verwijdering tandsteen (supra + subgin.) en eliminatie retentieve factoren. Perfect mondhygiëne lost tandsteen niet op."},
],

// ═══════════════ ENDODONTOLOGIE – CIKMIS ═══════════════
endo_cikmis: [
  {q:"Een patiënt heeft spontane hevige tandpijn element 36 die ook 's nachts aanwezig is. Koude-test: langdurige sterke reactie. Percussie licht positief. Wat is de diagnose?",opts:["Reversibele pulpitis","Irreversibele pulpitis","Pulpanecrose","Condenserende osteïtis"],ans:1,exp:"Irreversibele pulpitis: spontane pijn (ook nachts), langdurige/hevige reactie op koude, licht percussie-positief. WKB is geïndiceerd."},
  {q:"Welke irrigatievloeistof is de goudstandaard bij WKB en waarom?",opts:["Chloorhexidine 2%, omdat het de sterkste antibacteriële werking heeft","NaOCl, omdat het zowel antimicrobieel werkt als organisch weefsel oplost","EDTA, omdat het de smear layer verwijdert","Aqua destillata, omdat het onschadelijk is"],ans:1,exp:"NaOCl (natriumhypochloriet) is goudstandaard: antimicrobieel EN lost organisch weefsel op (pulparesten, biofilm). Concentratie NL: 2,5-3%. EDTA aanvullend voor smear layer."},
  {q:"Wat is de reden dat NaOCl en chloorhexidine NIET gecombineerd mogen worden als irrigantia?",opts:["Ze neutraliseren elkaars werking","Ze vormen een bruinzwart precipitaat (parachloraniline), potentieel toxisch","CHX lost NaOCl op","Ze zijn beide te sterk samen"],ans:1,exp:"NaOCl + CHX = bruinzwart precipitaat (parachloraniline), potentieel cytotoxisch en carcinogeen. Altijd tussen beide irrigantia doorspuiten met EDTA of steriel water."},
  {q:"Op welke afstand van de röntgenapex wordt de werkhoogte bij WKB vastgesteld?",opts:["Precies op de röntgenapex","0,5-1mm van de röntgenapex","2mm van de röntgenapex","Aan de tandvleesrand"],ans:1,exp:"Werkhoogte = 0,5-1mm van röntgenapex. De anatomische apex ligt gemiddeld 0,5-1mm van röntgenapex. Bevestiging met apex-locator + röntgenfoto."},
  {q:"Een kind van 8 jaar heeft element 21 geavulseerd na een fietsongeval. De tand is 40 minuten droog bewaard in een zakdoek. Wat is de prognose en wat doet u?",opts:["Goede prognose: direct replantatie","Matige prognose: PDL-cellen deels dood, maar replantatie zinvol (apex open: revascularisatie mogelijk)","Slechte prognose: geen replantatie, tand te lang droog","Direct naar ziekenhuis sturen"],ans:1,exp:"40 min droog = marginale grens (60 min = kritisch). Apex open bij 8-jarige → revascularisatie mogelijk! Replantatie zinvol ondanks deels aangetast PDL. Na replantatie: flexibele spalk 7-10d, AB, follow-up. WKB uitstellen bij open apex."},
  {q:"Welke klassificatie beschrijft tandtrauma?",opts:["Andreasen classificatie","Hamp classificatie","Ellis classificatie","Angle classificatie"],ans:0,exp:"Andreasen (1981) is de meest gebruikte classificatie voor tandtrauma: concussie, subluxatie, extrusie, laterale luxatie, intrusie, avulsie. Ellis-classificatie beschrijft kroonbreuk typen."},
  {q:"Wat is het verschil tussen interne en externe wortelresorptie op röntgen?",opts:["Interne resorptie: asymmetrisch. Externe resorptie: symmetrisch","Interne resorptie: symmetrische uitbreiding van het kanaal. Externe: asymmetrisch, onregelmatig","Ze zijn röntgenologisch niet te onderscheiden","Interne resorptie is altijd groter"],ans:1,exp:"Interne resorptie: ronde, symmetrische uitbreiding van het kanaalcavum (vanuit pulpa binnenuit). Externe resorptie: asymmetrisch, onregelmatig, van buitenaf. Beide zichtbaar als radiolucency."},
  {q:"Bij welke situatie is DETI score 1 van toepassing?",opts:["Alveolitis na extractie","Irreversibele pulpitis met sterke pijn","Ludwig's angina met luchtwegproblemen","Avulsie van een melktand"],ans:2,exp:"DETI 1 = direct, levensbedreigend. Ludwig's angina (bilaterale submandibulaire cellulitis) met luchtwegproblemen = DETI 1. Ziekenhuisopname, luchtwegbewaking, IV antibiotica."},
  {q:"Wanneer is een prima endodontisch primaire laesie te verwachten bij een paro-endo laesie?",opts:["Positieve vitaliteitstest, sinus tractus vanuit de margo gingivalis","Negatieve vitaliteitstest, smalere sinus tractus vanuit de apex","Beide positief en negatief vitaal","Geen vitaliteitstest nodig"],ans:1,exp:"Primair endodontische laesie: pulpa is necrotisch (negatieve vitaliteitstest). Sinus tractus vanuit apex. Na WKB verdwijnt de paro-component. Prognose goed."},
  {q:"Bij een avulsie van een blijvende tand met gesloten apex (volwassene): wanneer start u de WKB?",opts:["Direct bij de replantatie","7-10 dagen na replantatie, voor het verwijderen van de spalk","6 maanden later","Nooit: gesloten apex - pulpa geneest spontaan"],ans:1,exp:"Bij gesloten apex (volwassene) is revascularisatie onwaarschijnlijk. WKB starten 7-10 dagen na replantatie (niet direct: trauma voor het pulpaweeefsel, niet te laat: infektie). Voor verwijdering spalk."},
  {q:"Welke obturatietechniek geeft de beste aanpassing aan complexe kanalanatomie?",opts:["Laterale condensatie (koud)","Warme verticale condensatie (WVC)","Pastieuze injectietechniek","Enkelpuntmethode"],ans:1,exp:"Warme verticale condensatie (WVC) thermoplastisisch guttapercha geeft betere aanpassing aan uitloper en laterale kanaaltjes dan koude laterale condensatie. Obtura/Calamus systemen."},
  {q:"Een patiënt heeft een pijnloze periapicale radiolucency element 11, vitaal bij koude. Wat is de meest waarschijnlijke diagnose?",opts:["Asymptomatische apicale periodontitis","Chronische periapicale granuloom bij necrose","Radiculaire cyste","Condenserende osteïtis"],ans:0,exp:"Pijnloos + radiolucency + VITAAL = asymptomatische apicale periodontitis bij vitale tand is zeldzaam. Waarschijnlijker: vals-positieve vitaliteitstest, vroege necrose. Overweeg meer diagnostiek. Condenserende osteïtis = radiopaciteit (niet lucency)."},
  {q:"Wat is het doel van EDTA als irrigans?",opts:["Antimicrobiële werking","Smear layer verwijdering (chelator)","Organisch weefsel oplossen","pH-regulatie in kanaal"],ans:1,exp:"EDTA (17%) = chelator voor anorganische structuren. Verwijdert smear layer (laag dentinedeeltjes na instrumentatie). Verbetert sealeradhesie en penetratie van NaOCl in laterale kanaaltjes. Eindirrigatie na NaOCl."},
  {q:"Een patiënt met intrusie van element 21 (9 jaar) wordt gezien. Wat is het correct beleid?",opts:["Direct chirurgisch repositie","Ortodontisch repositie","Spontane heruitbraak afwachten (kinderen <12 jaar)","Direct WKB starten"],ans:2,exp:"Intrusie bij kinderen <12 jaar met open apex: spontane heruitbraak afwachten (6-12 weken). Heruitbraak treedt op in 80-90% van gevallen. Chirurgisch/orthodontisch repositie indien geen uitbraak na 6-8 weken."},
  {q:"Welke spalk wordt aanbevolen na avulsiereplantatie?",opts:["Stijve acrylspalk 4 weken","Flexibele composietdraadspalk 7-14 dagen","Metalen orthodontische band 6 weken","Hechtingenspalk 2 weken"],ans:1,exp:"Flexibele spalk (0,4mm composietdraad) 7-14 dagen na avulsiereplantatie. Flexibel = behoud PDL-functie, minder ankyloserisico. Stijve spalk = vergrote ankylosexkans."},
],

// ═══════════════ ENDO – OEFENTOETS AI ═══════════════
endo_oefen: [
  {q:"Een patiënt heeft een scherpe pijn bij koude die direct stopt als de stimulus weg is. Percussie negatief. Röntgen normaal. Diagnose?",opts:["Irreversibele pulpitis","Reversibele pulpitis","Pulpanecrose","Dentinehypersensitiviteit"],ans:1,exp:"Reversibele pulpitis: koude-pijn die direct stopt na stimulus. Percussie negatief. Geen periapicale afwijkingen. Behandeling: elimineer oorzaak (caries verwijderen), pulpacapping indien nodig. WKB niet nodig."},
  {q:"Waarom wordt articulaïne NIET aanbevolen voor een blokkade van de nervus alveolaris inferior?",opts:["Articulaïne werkt niet in de onderkaak","Articulaïne heeft een hoger risico op persisterende paresthesie bij blokkade-injecties","Articulaïne is te duur","Articulaïne is alleen beschikbaar als 1% oplossing"],ans:1,exp:"Articulaïne heeft een hoger risico op neurale schade (paresthesie) bij blokkade-injecties (nervus alveolaris inferior, nervus lingualis) vergeleken met lidocaïne. Gebruik bij blokkade: lidocaïne 2%."},
  {q:"Een patiënt heeft een avulsie waarbij de tand 2 uur droog bewaard is. Wat is het beste beleid?",opts:["Replantatie is nog zinvol, PDL kan herstellen","Replantatie met behandeling als ankylosegeval: PDL-cellen afgestorven, maar alveole behouden","Niet replantaten, direct implantaat plaatsen","Wachten 1 week, dan beslissing"],ans:1,exp:"Na >60 minuten droge bewaring zijn PDL-cellen afgestorven. Replantatie als 'intentional ankylose-geval': tand kan nog geplant worden voor alveole-behoud, maar ankylosis en resorptie zijn te verwachten. Langdurig resultaat beperkt, maar zinvol bij kinderen (groei)."},
  {q:"Welke kleur heeft het precipitaat dat ontstaat bij contact van NaOCl met CHX?",opts:["Wit","Geel","Bruinzwart","Rood"],ans:2,exp:"NaOCl + CHX = bruinzwart precipitaat (parachloraniline/4-chloroaniline). Cytotoxisch en potentieel carcinogeen. Altijd tussenspuelen met steriel water of EDTA."},
  {q:"Bij een paro-endo laesie met positieve vitaliteitstest is de primaire diagnose:",opts:["Primair endodontische laesie","Primair parodontale laesie","Gecombineerde laesie","Kan niet bepaald worden"],ans:1,exp:"Positieve vitaliteitstest = pulpa levend = GEEN primaire endo-oorzaak. Primaire paro-laesie: paro-destructie leidt tot apicale betrokkenheid. Behandeling: paro-therapie eerst. Pulpa kan intact zijn."},
  {q:"Wat is de functie van de bilaminaire zone in het TMJ?",opts:["Zorgt voor lubricatie van het gewrichtsoppervlak","Rijkelijk gevasculariseerd, geeft bloedtoevoer en innervatie aan de achterzijde van de discus","Produceert collageen voor discusreparatie","Verbindt condylus aan processus styloideus"],ans:1,exp:"De bilaminaire zone (retrodicale zone) is het vasculaire en zenuwrijke weefsel posterieur aan de discus. Aangevallen bij discus-anterieure dislocatie, veroorzaakt pijn door druk op dit gevoelige weefsel."},
  {q:"Welke klasse van obturatietechniek is 'warm-carrier-based' (bijv. Thermafil)?",opts:["Laterale condensatie","Warm drager-based techniek","Enkelpuntmethode","Pasta-injectie"],ans:1,exp:"Carrier-based obturatie (Thermafil, GuttaCore): een metalen of kunststof drager bedekt met guttapercha wordt verwarmd en in het kanaal geplaatst. Voordelen: snel, goede apicale dichte afsluiting. Nadeel: carrier verwijdering bij herbehandeling moeilijk."},
  {q:"Wanneer is elektieve WKB gecontraindiceerd of relatief contra-indicatief?",opts:["Bij patiënten met DM type 2","Bij patiënten met recent hartinfarct (<6 maanden) en elektieve niet-dringende behandeling","Bij patiënten ouder dan 70 jaar","Bij patiënten met paro DPSI 3"],ans:1,exp:"Recent MI (<6 maanden): geen elektieve tandheelkunde, inclusief WKB. Wel bij DETI 2-urgentie (pijn, acute infectie) moet gespoedist worden. Na 6 maanden is elektieve behandeling weer veilig."},
  {q:"Welke parameter van de apex-locator bepaalt de werkhoogte?",opts:["De weerstand van de instrumentshaft","De impedantie (weerstand) van het periapicale weefsel versus het mucosa-contact","De druk op het instrument","De kleur van de LED-indicator"],ans:1,exp:"Apex-locators meten de impedantie (elektrische weerstand) tussen het instrument in het kanaal en de patiëntelektrode op de lip. Bij de apicale constrictie verandert impedantie significant. Meest accuraat: 0,5mm van apex."},
  {q:"Wat is de meest voorkomende complicatie na extractie van een onderkaaksmolaar?",opts:["Zenuwschade nervus alveolaris inferior","Alveolitis sicca (droge alveole)","Maxillaire sinusperforatie","Verslikking van de tand"],ans:1,exp:"Alveolitis sicca = meest voorkomende post-extractiecomplicatie (2-5% aller extracties, 30-40% bij impacted wisdom teeth). Optreden: 2-5 dagen postoperatief. Risicofactoren: roken, inadequate bloedstolsel, mondspoelen."},
],

// ═══════════════ BASIS MEDISCH – CIKMIS ═══════════════
basis_cikmis: [
  {q:"Welke van de volgende antibiotica is eerste keus bij een orofaciale infectie bij een penicilline-allergische patiënt?",opts:["Amoxicilline 500mg","Metronidazol 500mg","Clindamycine 300mg","Tetracycline 250mg"],ans:1,exp:"Bij penicillineallergie: Metronidazol (anaeroben) is eerste keus bij paro-infecties. Clindamycine bij bredere coverage nodig, maar hogere kans op C. difficile colitis. Tetracycline: minder geschikt voor acute infecties."},
  {q:"Welke maximale dosis adrenaline is aanbevolen bij een patiënt met angina pectoris?",opts:["Geen adrenaline gebruiken","0,04 mg per tandheelkundige sessie","0,2 mg per sessie","1:100.000 concentratie, geen beperking"],ans:1,exp:"Cardiovasculaire patiënten: max 0,04 mg adrenaline per sessie (= ~2 carpules van 1,8ml 1:100.000). Algemene patiënten: max 0,2 mg. Adrenaline geeft tachycardie en verhoogde O2-behoefte myocard."},
  {q:"Een patiënt gebruikt warfarine. INR=3,2. Is een enkelvoudige extractie veilig?",opts:["Nee, altijd stoppen met warfarine voor extractie","Ja, INR ≤3,5 is veilig met lokale hemostase, warfarine niet stoppen","Ja, maar warfarine 3 dagen stoppen","Nee, altijd verwijzen naar ziekenhuis"],ans:1,exp:"INR ≤3,5: extractie veilig met lokale hemostase (oxidatiecellulose, hechtingen, bijtgaas). Warfarine NIET stoppen: tromboserisico overwint bloedingsrisico. Overleg cardioloog/internist bij INR >3,5."},
  {q:"Welke micro-organismen zijn verantwoordelijk voor het grootste deel van orofaciale infecties?",opts:["Exclusief aerobe grampositieve kokken","Gemengde flora: aerobe + anaerobe bacteriën, overwegend gramnegatieve anaeroben","Alleen Candida species","Voornamelijk virussen"],ans:1,exp:"Orofaciale infecties: gemengde flora van aerobe (Streptococcus) én anaerobe bacteriën (Prevotella, Fusobacterium, Peptostreptococcus). Daarna: amoxicilline + metronidazol voor coverage."},
  {q:"Wat is de werkingsduur van lidocaïne 2% met 1:100.000 adrenaline?",opts:["30 minuten","60-90 minuten pulpaire anesthesie","3-4 uur","15 minuten"],ans:1,exp:"Lidocaïne 2% + adrenaline 1:100.000: pulpaire anesthesie 60-90 minuten, zachte weefsels 3-5 uur. Zonder vasoconstrictor: 30-45 minuten. Articaïne: iets korter werkend."},
  {q:"Welk type prion-inactivatie is het meest effectief voor CJD-besmette instrumenten?",opts:["Autoclaaf 121°C/20 min","Glutaaraldehyde 2% 10 uur","NaOH 1M + autoclaaf 134°C","Droge hitte 180°C/30 min"],ans:2,exp:"Prionen zijn resistent tegen standaard sterilisatie. Meest effectief: NaOH 1M (loog) gevolgd door autoclaaf 134°C. In de praktijk: instrumenten van CJD-verdachte patiënt vernietigen."},
  {q:"Welke aandoening kent de hoogste risico op post-extractie osteomyelitis?",opts:["Hypertensie","Osteoporose behandeld met oraal bisfosfonaat >5 jaar","Aspirine gebruik","Type 1 diabetes mellitus, goed gereguleerd"],ans:1,exp:"Oraal bisfosfonaat >5 jaar (of <5 jaar maar met corticosteroïden): verhoogd MRONJ-risico. Na extractie: risico op osteonecrose. Medicatievrij interval overwegen in overleg met arts. IV bisfosfonaten: absoluut hoog risico."},
  {q:"Een patiënt met boezemfibrilleren gebruikt dabigatran (DOAC). Welk beleid bij geplande extractie?",opts:["Geen aanpassing nodig","Laatste dosis overslaan voor invasieve ingreep, overleg cardioloog","Omzetten naar warfarine voor de ingreep","Stop DOAC 2 weken voor extractie"],ans:1,exp:"DOAC (dabigatran, apixaban, rivaroxaban): laatste dosis overslaan voor invasieve ingreep. Overleg cardioloog/internist. Geen labwaarden nodig (in tegenstelling tot warfarine/INR). Halverwege doseringsinterval is optimaal (concentratie daalt)."},
  {q:"Welke bijwerking is specifiek voor prilocaïne bij hoge doses?",opts:["Tachycardie","Methemoglobinemie","Nierinsufficiëntie","Hepatotoxiciteit"],ans:1,exp:"Prilocaïne → orthotoluïdine bij metabolisme → methemoglobinemie (hemoglobine kan O2 niet meer goed binden). Symptomen: cyanose, dyspnoe. Behandeling: methyleenblauw IV. Tandheelkundig: klinisch relevant bij >600mg totale dosis."},
  {q:"Wat is de endocarditis profylaxe dosis amoxicilline voor een volwassene?",opts:["500mg 3x/dag 7 dagen","2g oraal 30-60 minuten voor ingreep","1g IV direct voor ingreep","250mg 4x/dag 5 dagen"],ans:1,exp:"ESC/ACC endocarditis profylaxe: Amoxicilline 2g oraal (eenmalig!) 30-60 minuten voor de tandheelkundige ingreep. Penallergie: Clindamycine 600mg oraal. Alleen bij hoog-risico patiënten bij invasieve ingrepen."},
  {q:"Welke factor is NIET een risicofactor voor postoperatieve bloeding bij een patiënt die antistolling gebruikt?",opts:["INR >3,5","Meerdere extracties in één sessie","Gebruik van aspirine als enkel medicament","Leeftijd >50 jaar"],ans:3,exp:"Leeftijd >50 jaar is geen specifieke risicofactor voor postoperatieve bloeding. Risicofactoren: INR >3,5, meerdere extracties, trombocytopenie, DOAC's, hemofilieën, levertekortkomingen."},
  {q:"Welke bacteriën zijn verantwoordelijk voor infectieuze endocarditis na een tandheelkundige ingreep?",opts:["Staphylococcus aureus","Viridans-streptokokken (Streptococcus sanguis, mutans, mitis)","Pseudomonas aeruginosa","Escherichia coli"],ans:1,exp:"Viridans-streptokokken (normale mondflora) zijn verantwoordelijk voor de meeste endocarditis-gevallen na tandheelkundige ingrepen. Via bacteriëmie bereiken ze hartkleppen. Profylaxe: amoxicilline 2g."},
  {q:"Welk geneesmiddel heeft de minste interactie met adrenaline bij een patiënt die bètablokkers gebruikt?",opts:["Adrenaline is gecontraïndiceerd bij bètablokkers","Selectieve bèta-1-blokkers (metoprolol) geven minder hypertensie dan niet-selectieve bèta-blokkers","Non-selectieve bètablokkers (propranolol) zijn veiliger","Er is geen klinisch relevante interactie"],ans:1,exp:"Non-selectieve bètablokkers (propranolol) + adrenaline → onbeheerste α-stimulatie → hypertensie + reflex-bradycardie. Selectieve β1-blokkers (metoprolol, atenolol) geven minder hypertensie. Altijd langzaam injecteren, aspiratietest."},
  {q:"Wanneer is een patiënt met recent myocardinfarct (3 maanden geleden) klaar voor elektieve tandheelkunde?",opts:["Direct, als hij stabiel is","Na 6 maanden","Na 1 jaar","Nooit: altijd spoed behandelen"],ans:1,exp:"Na acuut MI: geen elektieve tandheelkunde gedurende 6 maanden. Risico op ritmestoornissen, reinfarct door stress. Na 6 maanden: OK met voorzorgsmaatregelen (korte afspraken, stresbeperking, adequate anesthesie)."},
  {q:"Welk type stralingsschade is het meest relevant bij tandheelkundige röntgenfoto's?",opts:["Directe schade aan het DNA","Stochastische effecten (geen drempelwaarde, kans proportioneel aan dosis)","Deterministische effecten (drempelwaarde aanwezig)","Thermische schade"],ans:1,exp:"Bij lage stralingsdoses (tandheelkunde): stochastische effecten (kanker, genetische schade). Geen drempelwaarde: elke dosis heeft een kans op schade. Deterministische effecten (huidroodheid, cataract) treden pas op bij hogere doses."},
],

// ═══════════════ BASIS MEDISCH – OEFENTOETS AI ═══════════════
basis_oefen: [
  {q:"Wat is de eerste keus analgeticum bij een gezonde volwassene met matige tandpijn?",opts:["Codeine 30mg","Ibuprofen 400mg","Tramadol 50mg","Morfine 10mg"],ans:1,exp:"Ibuprofen (NSAID) is effectief voor tandpijn vanwege de anti-inflammatoire werking (COX-remming). Bij contra-indicaties NSAID → paracetamol. Combinatie paracetamol + ibuprofen geeft synergetisch effect."},
  {q:"Welke ziekte veroorzaakt een verhoogd bloedingsrisico bij tandheelkundige ingrepen?",opts:["Hypothyreoïdie","Hemofilie A (factor VIII deficiëntie)","Hypertensie","Type 2 diabetes mellitus"],ans:1,exp:"Hemofilie A: factor VIII deficiëntie → verlengde stollingstijd → bloedingsrisico. Voor invasieve ingrepen: factor VIII suppletie, DDAVP bij mild type, overleg hematologie."},
  {q:"Welke concentratie NaOCl wordt in Nederland standaard gebruikt bij WKB?",opts:["0,5-1%","2,5-3%","5-6%","10%"],ans:1,exp:"Standaard NL: NaOCl 2,5-3% (balans tussen antimicrobiële effectiviteit en weefseltoxiciteit). Hogere concentraties (5,25%) geven snellere weefseloplossing maar meer toxiciteitsrisico bij extrusion."},
  {q:"Welk effect heeft epinefrine (adrenaline) op het cardiovasculaire systeem?",opts:["Bradycardie en hypotensie","Tachycardie, verhoogde contractiliteit, hypertensie bij hogere doses","Perifere vasodilatatie","Verminderd hartminuutvolume"],ans:1,exp:"Adrenaline: β1-effect → tachycardie en verhoogde contractiliteit. β2-effect → vasodilatatie skeletspier. α1-effect (hogere doses) → vasoconstrictie → hypertensie. Bij tandheelkunde: lage dosis lokaal → voornamelijk lokale vasoconstrictie."},
  {q:"Een patiënt presenteert zich met acute pijn en zwelling rechts onderkaak, koorts 39°C en beperkte mondopening. Wat is de meest urgente zorg?",opts:["Röntgenfoto nemen en afwachten","DETI 1: direct verwijzen naar SEH voor luchtwegbewaking (mogelijke Ludwig's angina)","DETI 3: afspraak maken voor volgende dag","AB voorschrijven en wachten"],ans:1,exp:"Submandibulaire zwelling + beperkte mondopening (trismus) + koorts = mogelijke Ludwig's angina of ernstige cellulitis. DETI 1-2. Luchtwegobstructie-risico! Direct SEH, IV antibiotica, evt. chirurgische drainage."},
  {q:"Welk effect heeft Sjögren-syndroom op het cariesrisico?",opts:["Geen effect","Verhoogd cariesrisico door xerostomie","Verminderd cariesrisico door IgA-verhoging","Verminderd cariesrisico door droge mond"],ans:1,exp:"Sjögren-syndroom → xerostomie (droge mond) → verminderd speekselbufferend vermogen → verhoogd cariesrisico. Behandeling: speekselsubstituten, fluoride preventie intensief, chloorhexidine."},
  {q:"Welk antihypertensivum veroorzaakt gingivale hyperplasie?",opts:["Enalapril (ACE-remmer)","Metoprolol (bèta-blokker)","Nifedipine (calciumantagonist)","Hydrochloorthiazide (diureticum)"],ans:2,exp:"Calciumantagonisten (nifedipine, amlodipine) veroorzaken gingivale hyperplasie. Fenytoine (anti-epilepticum) en ciclosporine (immunosuppressivum) ook. Behandeling: optimale mondhygiëne, gingivectomie, medicatieswitch."},
  {q:"Wat is de halfwaardetijd van lidocaïne?",opts:["10 minuten","1,5-2 uur","6 uur","24 uur"],ans:1,exp:"Lidocaïne: halfwaardetijd ~1,5-2 uur (plasma). Uitgebreide hepatische metabolisme (first-pass bij IV). Bij leverinsufficiëntie: verlengde halfwaardetijd, ophoping risico, dosis aanpassen."},
  {q:"Welke bacteriën zijn verantwoordelijk voor caries?",opts:["Staphylococcus aureus en E. coli","Streptococcus mutans (initiatie) en Lactobacillus (progressie)","Prevotella intermedia en Fusobacterium","Treponema denticola en Porphyromonas gingivalis"],ans:1,exp:"S. mutans: initiatie caries (sucrose → zuur + glucaan voor plaque-adhesie). Lactobacillus: progressie in dentine (acidofiel, overleven bij lage pH). Porphyromonas + Treponema = parodontitis-pathogenen."},
  {q:"Welke sterilisatiemethode is geschikt voor poeder en oliën?",opts:["Stoomautoclaaf","Droge hitte (160°C/2 uur)","Ethyleenoxide","Glutaaraldehyde"],ans:1,exp:"Droge hitte: geschikt voor poeder, oliën, vetachtige materialen die niet bestand zijn tegen stoom (autoclaaf). Ineffectief bij lage temperaturen, maar bij 160°C/2 uur steriel."},
  {q:"Welk type anesthesie is mepivacaïne 3% (zonder vasoconstrictor)?",opts:["Niet beschikbaar zonder vasoconstrictor","Beschikbaar zonder vasoconstrictor: geschikt bij cardiovasculaire contra-indicaties","Alleen voor kinderen","Vereist altijd felypressine"],ans:1,exp:"Mepivacaïne 3% (Scandonest): beschikbaar zonder vasoconstrictor. Werkingsduur: ~30-45 min. Geschikt bij cardiovasculaire contra-indicaties voor adrenaline (ernstige hypertensie, aritmieën)."},
],

// ═══════════════ RADIOLOGIE – CIKMIS ═══════════════
radio_cikmis: [
  {q:"Wat beschrijft het ALARA-principe in de radiologie?",opts:["Altijd minimale kV gebruiken","As Low As Reasonably Achievable: stralingsbelasting zo laag als redelijkerwijs mogelijk","Als loodschort altijd aanwezig is, is er geen reden tot beperking","Altijd digitale receptoren verplicht"],ans:1,exp:"ALARA = As Low As Reasonably Achievable. Drie pijlers: rechtvaardiging (voordeel >risico), optimalisatie (laagste dosis voor diagnostische kwaliteit), dosislimieten. Kernprincipe radiologisch beleid."},
  {q:"Wat is de effectieve dosis van een panoramafoto (digitaal)?",opts:["<5 µSv","15-25 µSv","100-300 µSv","2000 µSv"],ans:1,exp:"Panoramafoto (digitaal): ~15-25 µSv. Ter vergelijking: periapicale foto ~1-8 µSv, CBCT klein FOV ~30-50 µSv, CBCT groot FOV ~100-300 µSv, achtergrondstraling NL ~2000 µSv/jaar."},
  {q:"Welke radiologisch beeld is kenmerkend voor een radiculaire cyste?",opts:["Kleine periapicale radiolucency, geen cortex","Grote periapicale radiolucency met corticale begrenzing, gerelateerd aan necrotische tand","Multiloculair radiolucent beeld langs mandibula","Periapicale radiopaciteit"],ans:1,exp:"Radiculaire cyste: grotere periapicale radiolucency (>1cm), scherpe corticale begrenzing, altijd gerelateerd aan een pulpanecrootische tand. Klein periapicaal granuloom = kleiner, minder scherp."},
  {q:"Een zwangere patiënte heeft acute tandpijn (DETI 3). Is een periapicale röntgenfoto gecontraïndiceerd?",opts:["Ja, strikt gecontraïndiceerd in alle trimesters","Nee, met loodschort en schildklierbeschermer is röntgen acceptabel indien klinisch geïndiceerd","Ja, altijd uitstellen tot na bevalling","Alleen gecontraïndiceerd in 1e trimester"],ans:1,exp:"Röntgen bij zwangerschap: niet absoluut gecontraïndiceerd. Met loodschort + schildklierbeschermer en klinische indicatie (DETI 3): acceptabel. Onnodige röntgen vermijden, maar noodzakelijke diagnostiek niet uitstellen."},
  {q:"Welke eenheid wordt gebruikt voor de effectieve stralingsdosis?",opts:["Gray (Gy)","Sievert (Sv)","Becquerel (Bq)","Röntgen (R)"],ans:1,exp:"Sievert (Sv) = effectieve dosis = geabsorbeerde dosis (Gy) × weegfactor straling × weegfactor weefsel. Maat voor biologisch risico van straling. In tandheelkunde: µSv (microsievert) of mSv."},
  {q:"Wat is het effect van hogere kV op de röntgenfoto?",opts:["Meer contrast (zwart-wit)","Minder contrast (grijzer beeld), meer doordringvermogen","Kleinere dosis","Kortere belichtingstijd altijd"],ans:1,exp:"Hogere kV → energetischere fotonen → meer doordringvermogen → minder absorptie verschil tussen weefsels → minder contrast (grijzer beeld). Lage kV: meer contrast maar hogere dosis."},
  {q:"Welk beeld is pathognomonisch voor condenserende osteïtis?",opts:["Periapicale radiolucency","Periapicale radiopaciteit bij vitaal element met pijn bij koude","Intraosseale lucency","Verlies PDL-ruimte"],ans:1,exp:"Condenserende osteïtis = periapicale reactieve botvorming bij chronische laaggradige pulpaprikkel. Röntgen: periapicale radiopaciteit. Pulpa kan nog vitaal zijn. Benigne, geen behandeling nodig (cave: differentieel met cementoblastoom, sclerotisch bot)."},
  {q:"Wanneer is CBCT geïndiceerd boven 2D-röntgen?",opts:["Altijd bij wortelkanaalbehandeling","Alleen wanneer 2D-röntgen diagnostische informatie onvoldoende geeft en CBCT klinisch voordeel heeft","Als alternatief voor panoramafoto","Bij alle impacted verstandskiezen"],ans:1,exp:"CBCT alleen bij aantoonbaar klinisch voordeel boven 2D: complexe endodontie (calcificaties, extra kanalen), implantaat volumetrie, complexe chirurgie. Hogere dosis dan 2D → strikte rechtvaardiging vereist (ALARA)."},
  {q:"Hoe verschilt een ankylose röntgenologisch van een normale tand?",opts:["Grotere PDL-ruimte","Verdwijning van de PDL-ruimte, tand gefuseerd aan omringend bot","Periapicale radiolucency","Grotere parodontale pocket zichtbaar op röntgen"],ans:1,exp:"Ankylose: fusie van cement/dentine met alveolaire bot. Röntgen: verdwijning van de lamina dura en PDL-ruimte (normaal 0,2-0,4mm strook). Tand klankachtig bij percussie (metallische klank)."},
  {q:"Welke röntgenfoto geeft het beste overzicht van de alveolaire botkam bij paro-diagnostiek?",opts:["CBCT","Bitewing röntgenfoto","Periapicale röntgenfoto","Occlusale röntgenfoto"],ans:1,exp:"Bitewing: ideaal voor interproximaal botverlies beoordeling (alveolaire kam). Periapicale foto: beter voor apicale regio. Bij gegeneraliseerde parodontitis: combinatie van bitewings + periapicale foto's (full-mouth set)."},
],

// ═══════════════ STATISTIEK – CIKMIS ═══════════════
statistiek_cikmis: [
  {q:"In een studie naar een diagnostische test voor paro wordt gevonden: TP=80, FN=20, FP=10, TN=90. Wat is de sensitiviteit?",opts:["80%","89%","80/(80+20)=80%","90%"],ans:2,exp:"Sensitiviteit = TP/(TP+FN) = 80/(80+20) = 80/100 = 80%. Interpretatie: 80% van de echt zieke mensen geeft een positief testresultaat."},
  {q:"Een interventiestudie toont: ARR=0,08 (8%). Wat is het NNT?",opts:["8","12,5","0,08","80"],ans:1,exp:"NNT = 1/ARR = 1/0,08 = 12,5. Interpretatie: 12-13 patiënten moeten behandeld worden om 1 extra gunstige uitkomst te bereiken."},
  {q:"Welk studiedesign heeft de hoogste bewijskracht?",opts:["Prospectief cohortonderzoek","Gerandomiseerde gecontroleerde trial (RCT)","Systematische review van meerdere RCT's","Case-control studie"],ans:2,exp:"Hiërarchie bewijskracht: 1. Systematische review van RCT's (hoogst). 2. RCT. 3. Cohort. 4. Case-control. 5. Cross-sectioneel. 6. Case report/expertopinie."},
  {q:"SnNout staat voor?",opts:["Specificiteit laag → negatieve test sluit ziekte uit","Sensitiviteit hoog → negatieve test sluit ziekte uit","Specificiteit hoog → positieve test bevestigt ziekte","Sensitiviteit laag → positieve test bevestigt ziekte"],ans:1,exp:"SnNout: hoge Sensitiviteit → Negatieve test sluit ziekte uit. SpPin: hoge Specificiteit → Positieve test bevestigt ziekte. Ezelsbruggetje voor diagnostisch redeneren."},
  {q:"Een test heeft specificiteit 95% en sensitiviteit 70%. Bij lage ziekte-prevalentie (1%): wat gebeurt er met de PPV?",opts:["PPV stijgt naar bijna 100%","PPV daalt, want veel vals-positieven bij lage prevalentie","PPV blijft stabiel ongeacht prevalentie","Specificiteit bepaalt PPV niet"],ans:1,exp:"Bij lage prevalentie: weinig zieken, dus ook bij hoge specificiteit zijn er relatief veel FP in verhouding tot TP. PPV daalt. NPV stijgt juist. Prevalentie is cruciaal voor interpretatie van predictieve waarden."},
  {q:"Recall bias treedt op in welk studiedesign?",opts:["RCT","Prospectief cohortonderzoek","Case-control studie (patiënten herinneren blootstelling onjuist)","Cross-sectioneel onderzoek"],ans:2,exp:"Case-control studie: patiënten (cases) zijn eerder geneigd om blootstelling te herinneren dan controles (recall bias). Prospectief: blootstelling gemeten voor uitkomst → geen recall bias."},
  {q:"Wat is de definitie van ARR (Absolute Risicoreductie)?",opts:["Risico interventiegroep / Risico controlegroep","Risico controlegroep - Risico interventiegroep","1/NNT","Risico controle × relatief risico"],ans:1,exp:"ARR = Risico controlegroep - Risico interventiegroep. Absoluut verschil in risico. ARR=0,1 = 10% reductie absoluut. RRR = ARR/Risico controle × 100% = relatieve reductie."},
  {q:"Wat is de LR+ van een test met sensitiviteit 90% en specificiteit 80%?",opts:["9","4,5","0,125","18"],ans:1,exp:"LR+ = Sensitiviteit / (1-Specificiteit) = 0,90 / (1-0,80) = 0,90/0,20 = 4,5. LR+ >10 = sterk bewijs aanwezig. 4,5 = matig bewijs. LR- = (1-Sens)/Spec = 0,10/0,80 = 0,125 (matig bewijs afwezigheid)."},
  {q:"Intention-to-treat analyse in een RCT betekent?",opts:["Alleen analyse van compliant deelnemers","Alle gerandomiseerde deelnemers worden geanalyseerd in de toegewezen groep","Analyse na uitval uitsluiten","Deelnemers mogen wisselen van groep"],ans:1,exp:"Intention-to-treat (ITT): alle deelnemers worden geanalyseerd in de oorspronkelijk toegewezen groep, ook als ze niet compliant waren of uitvielen. Minimaliseert attrition bias. Per-protocol analyse: alleen compliant deelnemers (hooger interne validiteit, lagere externe)."},
  {q:"Een studie heeft een p-waarde van 0,03. Wat betekent dit?",opts:["De kans op een klinisch relevant effect is 97%","De kans op het gevonden resultaat (of extremer) bij geen effect = 3%","Het effect is zeker aanwezig","3% kans op een fout in de studie"],ans:1,exp:"p-waarde = kans om het gevonden resultaat (of meer extreem) te zien als de nulhypothese waar is. p=0,03 < 0,05 = statistisch significant. NIET: 97% zekerheid over effect. Klinische relevantie ≠ statistische significantie!"},
  {q:"Welk statistisch maat is het meest geschikt voor case-control studies?",opts:["Relatief risico (RR)","Odds ratio (OR)","Sensitiviteit","NNT"],ans:1,exp:"Case-control: OR (Odds Ratio) = odds ziekte bij blootgestelden / odds ziekte bij niet-blootgestelden. RR niet berekenen bij case-control (incidentie niet meetbaar). Bij lage ziekte-prevalentie: OR ≈ RR."},
  {q:"Wat is publicatiebias?",opts:["Auteurs publiceren verkeerde data","Positieve/significante studies vaker gepubliceerd dan negatieve","Tijdschriften accepteren alle studies","Peer review voorkomt bias"],ans:1,exp:"Publicatiebias: studies met positieve resultaten vaker gepubliceerd. Systematische reviews overschatten dan de effectiviteit. Oplossing: registratie studie voor start, grijze literatuur zoeken, funnel plot voor detectie."},
  {q:"Een diagnostische test heeft NPV van 98%. Wat betekent dit klinisch?",opts:["98% van positieve tests zijn terecht positief","98% van negatieve tests zijn terecht negatief (bijna geen FN)","Specificiteit is 98%","Sensitiviteit is 98%"],ans:1,exp:"NPV = Negatieve Predictieve Waarde = TN/(TN+FN) = 98%. Interpretatie: als de test negatief is, is er 98% kans dat de patiënt echt ziektevrij is. Hoge NPV = bijna geen gemiste gevallen. Afhankelijk van prevalentie!"},
  {q:"PICO staat voor?",opts:["Patient, Intervention, Control, Outcome","Patient, Incidence, Cost, Outcome","Problem, Intervention, Criteria, Objective","Population, Indication, Comparison, Overview"],ans:0,exp:"PICO: Patient/Probleem, Interventie, Comparator/Controle, Outcome. Gebruikt voor het formuleren van een klinische vraag bij Evidence-Based Medicine. Soms PICOS (S = Study design)."},
],

// ═══════════════ STATISTIEK – OEFENTOETS AI ═══════════════
statistiek_oefen: [
  {q:"Een fluoride-studie toont: 15% caries in controle, 9% caries in fluoride groep. Bereken de RRR.",opts:["6%","40%","15/9=167%","60%"],ans:1,exp:"ARR = 15% - 9% = 6%. RRR = ARR/Risico controle = 6%/15% = 40%. NNT = 1/0,06 = 16,7 (≈17). Interpretatie: fluoride vermindert cariesrisico relatief met 40%."},
  {q:"Een screeningstest voor orale leukoplakieën heeft hoge specificiteit maar matige sensitiviteit. Wat is het gevolg?",opts:["Veel vals-positieven, weinig vals-negatieven","Weinig vals-positieven, maar meer vals-negatieven (gemiste gevallen)","Geen vals-positieven noch vals-negatieven","Hoge PPV ongeacht prevalentie"],ans:1,exp:"Hoge specificiteit = weinig FP. Matige sensitiviteit = meer FN (gemiste gevallen). Bij screening voor ernstige aandoening (leukoplakieën → maligne potentieel): hoge sensitiviteit gewenst om geen gevallen te missen."},
  {q:"Confounding in een cohort studie voor paro-behandeling kan worden voorkomen door?",opts:["Grotere steekproef","Randomisatie (in RCT) of multivariate analyse in observationele studie","Langere follow-up","Meer meetpunten"],ans:1,exp:"Confounding: derde variabele beïnvloedt zowel blootstelling als uitkomst. In RCT: randomisatie elimineert confounding. In cohort: multivariate regressie, propensity score matching, stratificatie."},
  {q:"Wat is de 'number needed to harm' (NNH)?",opts:["Hetzelfde als NNT maar voor bijwerkingen","1/ARR voor behandeling","Kans op bijwerking gedeeld door placebo","Relatief risico op bijwerking"],ans:0,exp:"NNH = 1/ARI (Absoluut Risico Increment) voor bijwerkingen. NNH = hoeveel patiënten moeten behandeld worden voor 1 extra schade/bijwerking. Hoe hoger NNH, hoe veiliger de behandeling."},
  {q:"Een cross-sectionele studie toont een verband tussen snackfrequentie en DMFT. Welke conclusie is NIET terecht?",opts:["Er is een associatie tussen snackfrequentie en DMFT","Hoge snackfrequentie veroorzaakt caries (causaliteit)","Meer onderzoek nodig om causaliteit vast te stellen","Cross-sectionele studie kan alleen associatie aantonen"],ans:1,exp:"Cross-sectionele studie = momentopname. Geen tijdvolgorde vastgesteld. Causaliteit (X veroorzaakt Y) kan NIET worden vastgesteld. Alleen associatie. Voor causaliteit: prospectief cohort of RCT nodig."},
  {q:"Welk bewijsniveau heeft een expert consensus zonder systematisch literatuuronderzoek?",opts:["Niveau 1 (hoogste)","Niveau 2","Niveau 4-5 (laagste)","Niveau 3"],ans:2,exp:"Bewijshiërarchie: 1. Systematische reviews van RCT's. 2. RCT. 3. Cohort. 4. Case-control/cross-sectioneel. 5. Expert consensus/case reports (laagst). Expert consensus = laag, kan sterk van bewijs afwijken."},
],

// ═══════════════ RADIOLOGIE – OEFENTOETS AI ═══════════════
radio_oefen: [
  {q:"Wat is de aanbevolen minimale afstand van de tandarts tot de röntgenbron bij periapicale opname?",opts:["50 cm","1,5-2 meter (of achter beschermende wand)","Geen minimale afstand bij digitale röntgen","5 meter"],ans:1,exp:"Inversekwadraatswet: intensiteit daalt met kwadraat van afstand. Op 2m is intensiteit (2)²=4 keer lager dan op 1m. Aanbeveling: minimaal 1,5-2 meter van de patiënt/bron staan, loodrecht op de bundel."},
  {q:"Waarom heeft CBCT een hogere dosis dan een panoramafoto?",opts:["Langere belichtingstijd per opname","Volumetrische data-acquisitie vereist meer röntgenpulsen vanuit meerdere hoeken","Hogere kV-instelling","CBCT gebruikt andere straling"],ans:1,exp:"CBCT: 3D-beeldvorming door opnames vanuit 360° → meerdere röntgenpulsen → hogere cumulatieve dosis. Klein FOV CBCT: ~30-50 µSv. Groot FOV: ~100-300 µSv vs. panorama ~15-25 µSv."},
  {q:"Welk röntgenologisch kenmerk onderscheidt een granuloom van een cyste?",opts:["Ze zijn röntgenologisch identiek","Cyste: groter (>10mm), scherpe corticale begrenzing. Granuloom: kleiner, minder scherp","Granuloom heeft altijd corticale begrenzing","Cyste zit altijd distaal"],ans:1,exp:"Röntgenologisch: cyste groter, scherpe cortex (begrenzing). Granuloom kleiner, minder scherpe randen. Definitief onderscheid alleen histologisch. Vitaal verschil: cyste = epitheelbeklede holte, granuloom = chronisch inflammatoir weefsel."},
  {q:"Een patiënt heeft een ankylotische tand. Welk geluid hoort u bij percussie?",opts:["Dof, pijnlijk geluid","Metallisch, hoog klinkend geluid","Normaal, licht resonant geluid","Geen geluid, pijn"],ans:1,exp:"Ankylose: tand gefuseerd aan bot, geen PDL-demping → metallisch hoog geluid bij percussie. Normaal: resonant, gedempt. Pijnlijk bij percussie = periapicale pathologie."},
  {q:"Bij welke situatie is een bitewing röntgenfoto het MEEST informatief?",opts:["Periapicale pathologie evaluatie","Interproximaal caries opsporing en alveolaire botbeoordeling","Panoramaoverzicht kaaksgewrichten","Sinus maxillaris beoordeling"],ans:1,exp:"Bitewing: optimaal voor interproximale caries (vroeg stadium) en alveolaire kamhoogte beoordeling (paro). Nadeel: geen apicale regio. Periapicale foto: beter voor apicale pathologie."},
],

// ═══════════════ CARIOLOGIE – CIKMIS ═══════════════
cario_cikmis: [
  {q:"Op welke pH begint demineralisatie van tandglazuur?",opts:["pH 7,0","pH 5,5","pH 4,0","pH 6,5"],ans:1,exp:"Kritische pH voor glazuurdemineralisatie = 5,5 (hydroxyapatiet). Dentine: 6,0-6,7. S. mutans zuurproductie verlaagt plaque-pH onder deze grens na suikerinname (Stephan-curve)."},
  {q:"Een initiële carieslaesie (ICDAS 1) is zichtbaar als een wit vlekje na indrogen. Welk beleid is geïndiceerd?",opts:["Directe kaviteitsbehandeling","Remineralisatie: fluoride, mondwatering, dieetadvies, monitoring","Extractie","Pulpacapping"],ans:1,exp:"ICDAS 1-2: niet-cavitaire laesie → remineralisatie mogelijk. Fluoride (tandpasta, lak), dieetadvies (frequentie suiker ↓), monitoring. ICDAS 3+ met kaviteit = restauratieve interventie."},
  {q:"Welke bacterie is verantwoordelijk voor wortelcaries?",opts:["Streptococcus mutans","Actinomyces species","Lactobacillus acidophilus","Porphyromonas gingivalis"],ans:1,exp:"Actinomyces (A. viscosus, A. naeslundii): verantwoordelijk voor wortelcaries. Lactobacillus: progressie van caries in dentine. S. mutans: initiatie van gladoppervlakcaries op glazuur."},
  {q:"Wat is de preventieve werkingsduur van fluoride lak (Duraphat)?",opts:["1 dag","3-6 maanden","1 jaar","Permanent"],ans:1,exp:"Fluoride lak: preventief effect 3-6 maanden. Daarna nieuwe applicatie nodig. Hoog-risico kinderen: 2-4x per jaar aanbevolen. Concentratie Duraphat: 22.600 ppm NaF."},
  {q:"Welke suiker is het meest cariogeen?",opts:["Fructose","Glucose","Sucrose","Xylitol"],ans:2,exp:"Sucrose = meest cariogeen: S. mutans gebruikt sucrose voor productie van glucanen (voor biofilm-adhesie) + zuurproductie. Xylitol: niet-fermenteerbaar, inhibeert S. mutans, cariostatisch effect."},
],

// ═══════════════ CARIOLOGIE – OEFENTOETS AI ═══════════════
cario_oefen: [
  {q:"Een patient heeft ICDAS score 4. Wat is de aanbevolen behandeling?",opts:["Alleen fluoride applicatie, geen kaviteit","Restauratieve behandeling noodzakelijk (kaviteitsvoorbereiding)","Extractie","Sealant toepassen"],ans:1,exp:"ICDAS 4: donkere schaduw zichtbaar door glazuur (dentine betrokken), maar nog geen open kaviteit. Restauratieve interventie noodzakelijk: kaviteit openen en restaureren. ICDAS 1-3: non-invasief."},
  {q:"Wat is de kritieke pH voor wortelcaries (cement/dentine)?",opts:["5,5","6,0-6,7","4,5","7,0"],ans:1,exp:"Wortelcement/dentine demineraliseert al bij pH 6,0-6,7 (hoger dan glazuur pH 5,5). Bij xerostomie of blootgestelde wortels: verhoogd cariesrisico bij zelfs lage zuurproductie."},
  {q:"Xylitol heeft een cariostatisch effect. Via welk mechanisme?",opts:["Stimuleert speekselproductie","Wordt niet gefermenteerd door orale bacteriën én inhibeert S. mutans groei","Versterkt glazuur","Verhoogt plaque-pH door basische reactie"],ans:1,exp:"Xylitol: niet-fermenteerbare suikeralcohol. Wordt opgenomen door S. mutans maar niet gemetaboliseerd → energieverspilling → groeiinhibitie. Geen zuurproductie → geen pH-daling. Effectief in kauwgom (speekselstimulerend)."},
  {q:"Welk effect heeft fluoride op bestaande carieuze laesies?",opts:["Kan geëtst glazuur volledig herstellen tot normaal","Bevordert remineralisatie van vroege laesies (ICDAS 1-2), maar geneest geen kaviteiten","Stopt alle cariesprogressie","Heeft geen effect op reeds aangetaste gebieden"],ans:1,exp:"Fluoride bevordert remineralisatie door neerslaan van fluorapatiet. Effectief bij vroege laesies (white spot, ICDAS 1-2). Bij kaviteiten (ICDAS 5-6): fluoride helpt niet zonder restauratieve interventie."},
],

// ═══════════════ PEDODONTOLOGIE – CIKMIS ═══════════════
pedo_cikmis: [
  {q:"Wanneer breekt de eerste blijvende molaar (6-jaars molaar) door?",opts:["4-5 jaar","6-7 jaar","8-9 jaar","10-11 jaar"],ans:1,exp:"Eerste blijvende molaar (6-jaars molaar) doorbreekt rondom 6-7 jaar. EERSTE blijvende tand. Klinisch belangrijk: sealant preventie indicatie, vroeg caries opsporing."},
  {q:"Welk beleid is correct bij avulsie van een melktand (4 jaar)?",opts:["Direct replantatie, zelfde als blijvende tand","GEEN replantatie: risico op ankylosis en schade onderliggend blijvend tandkiem","Replantatie na 24 uur","Endodontische behandeling melktand"],ans:1,exp:"Avulsie melktand = GEEN replantatie. Risico op ankylosis → infraocclusie. Risico op mechanische schade aan onderliggend blijvend tandkiem. Opties: ruimtebewaarder overwegen."},
  {q:"Wat is ECC (Early Childhood Caries)?",opts:["Caries bij volwassenen na chemotherapie","Aanwezigheid van carieuze laesies bij een kind van 71 maanden of jonger","Caries bij kinderen 6-12 jaar","Alleen wortelcaries bij kinderen"],ans:1,exp:"ECC definitie: caries (caviteit, geëxtraheerd of gevuld door caries) bij kind ≤71 maanden (≤5 jaar 11 maanden). S-ECC (ernstig ECC): elk glad-oppervlak caries bij <3 jaar, of ≥4 aangetaste gladde vlakken bij 3-5 jaar."},
  {q:"Welke pulpatherapie is geïndiceerd bij carieuze pulpablootstelling van een melktand waarbij de radiculaire pulpa nog vitaal is?",opts:["Pulpectomie (volledige verwijdering pulpa)","Pulpotomie (verwijdering kroonpulpa, behoud radiculaire pulpa)","Directe pulpacapping met Ca(OH)₂","Extractie"],ans:1,exp:"Pulpotomie: bij carieuze blootstelling met nog vitale radiculaire pulpa. Kroonpulpa verwijderen, amputatiestompje behandelen met MTA of Formocresol. Radiculaire pulpa blijft vitaal. Pulpectomie bij irreversibele pulpitis of necrose."},
  {q:"Op welke leeftijd wordt aanbevolen te starten met het eerste tandartsbezoek?",opts:["Bij de eerste tandbrekende klacht","Bij 1 jaar (na doorbraak eerste melktand)","Bij 2-3 jaar","Bij schoolleeftijd (6 jaar)"],ans:1,exp:"Aanbeveling: eerste tandartsbezoek bij 1 jaar (na doorbraak eerste melktand). Doel: cariesrisicoassessment, ouderadvies fluoride, ECC preventie, gewenning aan de praktijk."},
],

// ═══════════════ KINESIOLOGIE – CIKMIS ═══════════════
kinesio_cikmis: [
  {q:"Wat is de goudstandaard voor diagnose van slaapbruxisme?",opts:["Klinisch onderzoek (sleetstanden)","Polysomnografie (PSG)","Anamnese van de partner","Electromyografie (EMG) van masseter overdag"],ans:1,exp:"PSG (polysomnografie) = goudstandaard voor slaapbruxisme diagnose. Meet EMG-activiteit tijdens slaap in laboratoriumomgeving. In de praktijk: anamnese + klinisch onderzoek (sleetstanden, hypertrofie masseter) als screeningsinstrument."},
  {q:"Welke behandeling is eerste keus bij CMD (craniomandibulaire dysfunctie)?",opts:["Onmiddellijke occlusale equilibratie (slijpen)","Stabilisatiespalk + fysiotherapie + pijnstilling","Chirurgie van het TMJ","Antidepressiva als enige behandeling"],ans:1,exp:"CMD eerste keus: conservatief. Stabilisatiespalk (beschermt TMJ, geeft musculaire ontspanning), fysiotherapie, pijnstilling (NSAID). Chirurgie alleen bij gefaalde conservatieve behandeling. Occlusale equilibratie is reversibel doen!"},
  {q:"Bij welke AHI-waarde wordt OSAS als ernstig geclassificeerd?",opts:["AHI ≥5/uur","AHI ≥15/uur","AHI ≥30/uur","AHI ≥50/uur"],ans:2,exp:"OSAS classificatie: Licht 5-15, Matig 15-30, Ernstig ≥30 apneus/hypopneus per uur. AHI ≥5 + symptomen (snurken, excessive daytime sleepiness) = diagnose OSAS."},
  {q:"Een patiënt heeft een 'reciproke klik' bij het openen en sluiten van de mond. Wat is de waarschijnlijke diagnose?",opts:["Artrose van het TMJ","Discusverplaatsing met repositie","Discusverplaatsing zonder repositie","Myalgie van de kaauspieren"],ans:1,exp:"Reciproke klik = klik bij zowel opening (discus repositioneert) als sluiting (discus dislokateert). = Discusverplaatsing MET repositie. Discus in rust anterior, bij opening repositioneert → opening-klik. Bij sluiting weer dislokatie → sluitingsklik."},
  {q:"Welke van onderstaande is een bijwerking van het MRA (Mandibulaire Repositie Apparaat) bij gebruik voor OSAS?",opts:["Tachycardie","Occlusiewijzigingen na langdurig gebruik","Gehoorproblemen","Halitosis"],ans:1,exp:"MRA bijwerkingen: speekselvloed, temporaire kaakpijn/stijfheid, occlusiewijzigingen (skeletal en dentale aanpassingen na langdurig gebruik). Jaarlijkse controle occlusie en TMJ aanbevolen."},
],

// ═══════════════ KINESIOLOGIE – OEFENTOETS AI ═══════════════
kinesio_oefen: [
  {q:"Het TMJ heeft kraakbeen bedekt met welk type weefsel?",opts:["Hyalien kraakbeen","Fibreus kraakbeen","Elastisch kraakbeen","Bot (geen kraakbeen)"],ans:1,exp:"TMJ gewrichtsoppervlakken zijn bedekt met fibreus kraakbeen (NIET hyalien). Dit is anders dan de meeste andere synoviale gewrichten. Fibreus kraakbeen is resistenter tegen degeneratie en heeft betere regeneratiecapaciteit."},
  {q:"Welke spier opent de mond?",opts:["M. masseter","M. temporalis","M. pterygoideus lateralis (inferior kop) + suprahyoidale spieren","M. pterygoideus medialis"],ans:2,exp:"Mondopening: M. pterygoideus lateralis (inferior kop) + suprahyoidale spieren (digastricus, mylohyoideus, geniohyoideus). Sluiters: masseter, temporalis, pterygoideus medialis."},
  {q:"CPAP is de goudstandaard behandeling voor OSAS. Bij welke ernst is een MRA een goed alternatief?",opts:["Ernstig OSAS (AHI >30)","Licht-matig OSAS (AHI 5-30) of CPAP-intolerantie","Alle vormen van OSAS","Alleen bij snurken (AHI <5)"],ans:1,exp:"MRA indicaties: licht OSAS (5-15), matig OSAS (15-30), CPAP-intolerantie bij matig-ernstig. Bij ernstig OSAS: CPAP eerste keus, MRA als CPAP niet verdragen wordt."},
  {q:"Welke bevinding is typisch voor CMD-myalgie bij klinisch onderzoek?",opts:["Klik bij mondopening","Palpatiepijn van de kaauwspieren","Beperkte mondopening zonder pijn","Röntgenologisch zichtbare TMJ-artrose"],ans:1,exp:"CMD-myalgie: palpatiepijn van de kauwspieren (masseter, temporalis, pterygoideus). Geen klik (dat is discusprobleem). Mondopening mogelijk iets beperkt door spierpijn. Diagnose: palpatie + anamnese (hoofdpijn, spierpijn)."},
],

// ═══════════════ ORALE PATHOLOGIE – CIKMIS ═══════════════
pato_cikmis: [
  {q:"Welke premaligne laesie heeft het hoogste maligne potentieel?",opts:["Homogene leukoplakieën","Erythroplakieën","Orale lichen planus (reticula vorm)","Submuceuze fibrose"],ans:1,exp:"Erythroplakieën: 40-50% maligne transformatie-kans! Hoogste van alle premaligne laesies. Biopt altijd verplicht. Homogene leukoplakieën: 1%, niet-homogeen: tot 17%."},
  {q:"Een 35-jarige patiënt heeft een pijnloze radiolucency rond de kroon van een niet-doorgebroken gebitselement. Wat is de diagnose?",opts:["Radiculaire cyste","Dentigerale (folliculaire) cyste","Nasopalatinale cyste","Keratocyste"],ans:1,exp:"Dentigerale (folliculaire) cyste: rondom de kroon van een niet-doorgebroken tand. Follikel uitgezet door vloeistofophoging. Röntgen: radiolucency rond kroon."},
  {q:"Welke cyste heeft de hoogste recidiefkans?",opts:["Radiculaire cyste","Dentigerale cyste","Odontogene keratocyste (OKC)","Nasopalatinale cyste"],ans:2,exp:"OKC (odontogene keratocyste) = hoogste recidiefkans (25-60%) door actief epitheel met eigen groeipotenties. Kan onderdeel zijn van Gorlin-Goltz syndroom (nevoid basaalcelcarcinoom). Intensieve follow-up vereist."},
  {q:"Afteus ulcus major (Sutton's ulcer) onderscheidt zich door?",opts:["Minder dan 5 mm diameter, geen litteken","Meer dan 10 mm, genezing >6 weken, litteken","Multipele kleine ulcera","Alleen op het harde gehemelte"],ans:1,exp:"Major afteus ulcus (Sutton): >10mm, 1-3 laesies, genezing >6 weken, LITTEKEN na genezing. Minor: <10mm, geen litteken, 7-14 dagen. Herpetiform: 10-100 kleine ulcera (1-2mm)."},
  {q:"Orale lichen planus (OLP) verhoogt het risico op?",opts:["Keratocyste","Mondholtecarcinoom (spinocellulair carcinoom), met name de erosieve variant","Halitosis","ANUG"],ans:1,exp:"OLP erosief type: 0,5-2% maligne transformatie. Monitoring met regelmatige controle. Niet-erosief (reticulair): lager risico. Biopt bij verandering in uiterlijk of persistentie."},
],

// ═══════════════ ORTHODONTIE – CIKMIS ═══════════════
ortho_cikmis: [
  {q:"Wat is de normale overjet (horizontale overbite)?",opts:["0-1 mm","2-4 mm","5-7 mm","1 mm"],ans:1,exp:"Normale overjet: 2-4 mm. Overjet is de horizontale afstand tussen de linguale oppervlakte van de bovenste incisiefkroon en het labiale oppervlak van de onderste incisief. >4mm = vergroot overjet (klasse II div 1 kenmerkt)."},
  {q:"Bij orthodontische tandbeweging: wat gebeurt er aan de drukzijde?",opts:["Botaanmaak (osteoblasten)","Botafbraak (osteoklastenactiviteit)","PDL-verdikking","Geen verandering"],ans:1,exp:"Drukzijde: compressie van PDL → osteoklastenactiviteit → botafbraak → tand beweegt naar de drukzijde. Trekzijde: tensie PDL → osteoblasten → botaanmaak. Zo bewegen tanden door bot."},
  {q:"Wat is een 'crossbite' (kruisbeet)?",opts:["Boventanden staan te ver voor de ondertanden","Boven-tanden staan aan de binnenzijde van de ondertanden","Geen contact tussen voor- en achtertanden","Voorste open beet"],ans:1,exp:"Crossbite: bucco-linguaal omgekeerde relatie. Boven-elementen staan palatinaal/linguaal t.o.v. onderelementten (omgekeerd beet). Anterieur: incisaal crossbite. Posterieur: premolaren/molaren crossbite."},
  {q:"Retentie na orthodontische behandeling is nodig omdat?",opts:["Tanden kunnen spontaan rechter worden","Tanden hebben de neiging terug te bewegen (relapse)","Retentie verbetert de esthetiek","Zonder retentie breekt de spalk"],ans:1,exp:"Na orthodontische behandeling: tandmemory (PDL-vezels, gezichtsgroei, tong/lippen). Tanden neigen terug te bewegen (relapse). Retentie: vaste retainer (lingaal) of verwijderbaar retentie-apparaat. Levenslange retentie aanbevolen."},
],

// ═══════════════ FUNCTIONEEL / MZK – CIKMIS ═══════════════
functie_cikmis: [
  {q:"Welk bewaarmedium is optimaal voor een geavulseerde tand?",opts:["Gewoon kraanwater","Melk (laag calcium-ionenconcentratie, osmolariteit vergelijkbaar met PDL-cellen)","Fysiologisch zout","Speeksel"],ans:1,exp:"Optimale bewaarmedium volgorde: 1. HBSS/Viaspan (specialistisch). 2. Melk (osmolariteit 270-300 mOsm, vergelijkbaar met cel, calcium laag → PDL-cel overleving). 3. Fysiologisch zout. 4. Speeksel. 5. Kraanwater (SLECHTST: hypotoon → cel zwelling → dood)."},
  {q:"Bij welke type abces is hospitalisatie altijd geïndiceerd?",opts:["Periapicaal abces met fistel","Parodontaal abces DPSI 4","Submandibulaire of sublinguaal abces (Ludwig's angina risico)","Alveolitis"],ans:2,exp:"Submandibulaire/sublinguaal cel/abces: luchtwegrisico door zwelling mondbodem. Ludwig's angina = bilateraal → DETI 1. Altijd hospitalisatie, IV antibiotica, chirurgische drainage, luchtwegbewaking (intubatie/tracheostomie)."},
  {q:"Wat is de timing van palatumsluiting bij een schisis lip-alveolus-palatum?",opts:["Bij geboorte","3-6 maanden (gelijktijdig met lip)","9-18 maanden","Na 4 jaar"],ans:2,exp:"Behandelingstijdlijn schisis: Lip (cheiloplastiek): 3-6 maanden. Palatum (palatoplastiek): 9-18 maanden. Eerder palatumsluiting belemmert maxillaire groei. Later → slechte spraakontwikkeling."},
  {q:"Alveolitis sicca (droge alveole) treedt op na extractie. Welk beleid is ONJUIST?",opts:["Ioodoform gaas (Alvogyl) plaatsen","Analgesie voorschrijven","Spoelen met warm water aanraden","Roken afraden bij herstel"],ans:2,exp:"Alveolitis sicca: GEEN warm water spoelen (lost bloedstolsel verder op). Alvogyl gaas = behandeling eerste keus. NSAID/paracetamol voor pijn. Roken vermijden (verhoogt risico + belemmert herstel). Geen antibiotica nodig bij ongecompliceerde alveolitis."},
  {q:"MRONJ staat voor?",opts:["Medicatie-gerelateerde Osteonecrose Kaak","Micro-RNA Oncologisch Nekrotisch Jawprobleem","Mandibulaire Radiogeen Necrose Ostitis","Medicament-Reactief Niet-Odontogene Jaw"],ans:0,exp:"MRONJ = Medication-Related OsteoNecrosis of the Jaw (Medicatie-gerelateerde Osteonecrose Kaak). Geassocieerd met bisfosfonaten (met name IV), denosumab, bevacizumab. Definitie: ≥8 weken blootgelegd bot in kaak, geen bestraling."},
],

// ═══════════════ ORALE PATHOLOGIE – OEFENTOETS AI ═══════════════
pato_oefen: [
  {q:"Een patiënt heeft een slijmvliesweerstand links onderkaak met een hartvormige röntgenologische transparantie anterieur in de maxilla. Diagnose?",opts:["Radiculaire cyste","Nasopalatinale cyste","Dentigerale cyste","Folliculaire cyste"],ans:1,exp:"Nasopalatinale cyste: ontwikkelingsanomalie vanuit ductus nasopalatinus. Typisch: hartvormige radiolucency anterieur maxilla (tussen centrale incisieven), mediane lijn. Geen relatie met niet-doorgebroken tand (vs. dentigerale cyste)."},
  {q:"Welke behandeling is aangewezen bij minor afteus ulcus?",opts:["Systemische corticosteroïden","Symptoomatische behandeling (CHX, analgesie), spontane genezing","Directe biopsie","Antivirale therapie"],ans:1,exp:"Minor RAU: zelfbeperkend, 7-14 dagen, geen litteken. Behandeling: chloorhexidine-spoeling, eventueel triamcinolon mondpasta (voor pijnverlichting), analgesie. Systemische corticosteroïden alleen bij major/frequente recidieven."},
  {q:"Betelnoot (sirih) gebruik verhoogt risico op?",opts:["Orale lichen planus","Submuceuze fibrose en mondholtecarcinoom","Candidiasis","Sialadenitis"],ans:1,exp:"Betelnoot (Areca catechu) + kalk (calciumhydroxide) + soms tabak: submuceuze fibrose (7-13% maligne transformatie). Mondholtecarcinoom-risico significant verhoogd. Carcinogeen: arecoline, nitrosamiinen."},
],

// ═══════════════ SPEEKSEL – CIKMIS ═══════════════
speeksel_cikmis: [
  {q:"Welke speekselklier draagt het meest bij aan het totale speekselvolume?",opts:["Glandula parotis","Glandula submandibularis (60-65%)","Glandula sublingualis","Kleine speekselklieren"],ans:1,exp:"Glandula submandibularis: 60-65% van het totale speekselvolume. Glandula parotis: 25% maar meeste amylase. Sublingualis: 7-8%, meeste IgA. Kleine klieren: continue secretie, muceus."},
  {q:"Welke behandeling is eerste keus bij xerostomie door medicamenten?",opts:["Stoppen met alle medicamenten","Speekselstimulerend middel (pilocarpine) + speekselsubstituten + fluoride preventie","Antibiotica kuur","Chirurgische speekselklierverwijdering"],ans:1,exp:"Xerostomie door medicamenten: niet altijd medicatieswitch mogelijk. Pilocarpine (muscarinereceptor-agonist) stimuleert restsecretie bij functioneel speekselklierweefsel. Speekselsubstituten: symptomatisch. Intensieve fluoride preventie (verhoogd cariesrisico)."},
  {q:"Sjögren-syndroom primair vs. secundair – wat is het verschil?",opts:["Primair: alleen droge ogen. Secundair: droge ogen + droge mond","Primair: sicca complex (droge ogen + mond) zonder andere auto-immuunziekte. Secundair: sicca + andere auto-immuunziekte (RA, SLE)","Primair is ernstiger","Secundair heeft betere prognose"],ans:1,exp:"Primair Sjögren: geïsoleerd sicca-syndroom (droge ogen + droge mond). Secundair Sjögren: sicca-verschijnselen in combinatie met andere auto-immuunziekte (reumatoïde artritis, SLE, sclerodermie)."},
],

// ═══════════════ FUNCTIE/MZK – OEFENTOETS AI ═══════════════
functie_oefen: [
  {q:"Een 55-jarige man heeft een implantaat verloren. Zijn osteonecrose-risico is hoog door IV zoledroninezuur gebruik (oncologie). Welk beleid?",opts:["Nieuw implantaat direct plaatsen","Absoluut gecontraïndiceerd: IV bisfosfonaten = absolute contraindicatie voor nieuwe implantaten","Wachten 6 maanden dan implantaat","Oraal bisfosfonaat als vervanging geven"],ans:1,exp:"IV bisfosfonaten (zoledroninezuur, pamidronaat) voor oncologie: absoluut hoog MRONJ-risico. Nieuwe invasieve ingrepen (implantaten, extracties) zijn gecontraïndiceerd tenzij strikt noodzakelijk na overleg oncoloog."},
  {q:"Welke Angle-klasse beschrijft een prognath onderkaak (vooruitstekende onderkaak)?",opts:["Angle Klasse I","Angle Klasse II","Angle Klasse III","Angle klasse IV (bestaat niet)"],ans:2,exp:"Angle Klasse III: bovenkaaksmolaar distaler dan normaal (OF onderkaak prognath). Clinisch: omgekeerde beet (crossbite) van incisieven, prognath onderkaak, negatieve overjet. Erfelijke component (b.v. Habsburgers)."},
  {q:"Alveolaire botplastiek bij schisis-patiënten wordt uitgevoerd op welke leeftijd?",opts:["Bij geboorte","3-6 maanden","9-18 maanden","7-10 jaar (voor doorbraak hoektand)"],ans:3,exp:"Alveolaire botplastiek (ABG): 7-10 jaar, vlak voor de doorbraak van de hoektand (12-23). Botgraft (crista iliaca) vult het alveolaire defect voor de hoektand kan doorbreken in goede positie."},
],

// ═══════════════ ORTHO – OEFENTOETS AI ═══════════════
ortho_oefen: [
  {q:"Wat is de oorzaak van wortelresorptie bij orthodontische behandeling?",opts:["Ontstekingsreactie door beugel-metaal","Overmatige krachten of apexnabije krachten die apicale bloedvoorziening compressen","Normale fysiologische reactie die altijd optreedt","Verkeerde beugelpositionering"],ans:1,exp:"Wortelresorptie ortho: zware of langdurige krachten, apexnabije krachten → compressen bloedvaten → necrose → cementresorptie. Risicofactoren: afwijkende wortelvormen, genetische factoren. Monitoring röntgen aanbevolen."},
  {q:"Welk type retainer is meest geschikt voor langdurige retentie na het recht zetten van onderincisieven?",opts:["Verwijderbaar retentieapparaat alleen","Vaste linguaalretainer (bonded retainer)","Geen retentie nodig na 2 jaar","Functioneel apparaat"],ans:1,exp:"Vaste linguaalretainer (bonded wire retainer): gelijmd aan de linguale vlakken van de incisieven. Biedt permanente retentie zonder compliance-probleem. Nadeel: extra hygiëne instructie, breukrisico. Combinatie vast + verwijderbaar ook mogelijk."},
],

// ═══════════════ SOCIALE TH / ETHIEK – OEFENTOETS AI ═══════════════
sociale_cikmis: [
  {q:"Welke leeftijdsgrens geldt voor volledige zelfstandige medische beslissingen in Nederland (WGBO)?",opts:["12 jaar","16 jaar","18 jaar","21 jaar"],ans:2,exp:"WGBO: ≥18 jaar = volledige wilsbekwaamheid en zelfstandige beslissingsbevoegdheid. 16-17: zelfstandig beslissen. 12-16: dubbele toestemming (kind én ouder). <12: ouders beslissen, kind informeren."},
  {q:"Welk principe beschrijft de plicht van de tandarts om niet te schaden?",opts:["Autonomie","Beneficence (weldoen)","Non-maleficence (niet schaden)","Rechtvaardigheid"],ans:2,exp:"Non-maleficence = geen schade toebrengen ('primum non nocere'). Onderscheid met Beneficence (actief het goede doen). Beide zijn ethische basisprincipes van de geneeskunde (Beauchamp & Childress)."},
],

};

// ─── QUIZ ENGINE ─────────────────────────────────────────────────────────────
const quizState = {};

function startQuiz(quizId) {
  const questions = QUIZZES[quizId];
  if (!questions || questions.length === 0) {
    document.getElementById(quizId + '-quiz').innerHTML = '<div class="warn-box">Nog geen vragen beschikbaar voor dit onderdeel.</div>';
    return;
  }
  quizState[quizId] = { questions, answered: 0, correct: 0, total: questions.length };
  renderQuiz(quizId);
}

function renderQuiz(quizId) {
  const state = quizState[quizId];
  const container = document.getElementById(quizId + '-quiz');
  const progress = document.getElementById(quizId + '-progress');
  if (!container) return;

  let html = '';
  state.questions.forEach((q, i) => {
    html += `<div class="question-card" id="${quizId}-q${i}">
      <div class="question-num">Vraag ${i+1} van ${state.total}</div>
      <div class="question-text">${q.q}</div>
      <div class="options">`;
    const letters = ['A','B','C','D','E'];
    q.opts.forEach((opt, j) => {
      html += `<div class="option" id="${quizId}-q${i}-opt${j}" onclick="selectAnswer('${quizId}',${i},${j})">
        <div class="option-letter">${letters[j]}</div>${opt}</div>`;
    });
    if (q.exp) {
      html += `<div class="explanation" id="${quizId}-q${i}-exp"><strong>📚 Uitleg:</strong> ${q.exp}</div>`;
    }
    html += `</div></div>`;
  });
  container.innerHTML = html;
  if (progress) progress.innerHTML = `<strong>0</strong>/${state.total} beantwoord`;
}

function selectAnswer(quizId, qIdx, optIdx) {
  const state = quizState[quizId];
  if (!state) return;
  const q = state.questions[qIdx];
  const card = document.getElementById(quizId + '-q' + qIdx);
  if (!card || card.classList.contains('answered-correct') || card.classList.contains('answered-wrong')) return;

  const opts = card.querySelectorAll('.option');
  opts.forEach(o => o.classList.add('disabled'));

  const isCorrect = optIdx === q.ans;
  if (isCorrect) {
    opts[optIdx].classList.add('selected-correct');
    card.classList.add('answered-correct');
    state.correct++;
  } else {
    opts[optIdx].classList.add('selected-wrong');
    opts[q.ans].classList.add('correct-reveal');
    card.classList.add('answered-wrong');
  }

  const exp = document.getElementById(quizId + '-q' + qIdx + '-exp');
  if (exp) exp.classList.add('show');

  state.answered++;
  const progress = document.getElementById(quizId + '-progress');
  if (progress) progress.innerHTML = `<strong>${state.answered}</strong>/${state.total} beantwoord`;

  if (state.answered === state.total) showScore(quizId);
}

function showScore(quizId) {
  const state = quizState[quizId];
  const pct = Math.round(state.correct / state.total * 100);
  const passed = pct >= 80;
  const scoreDiv = document.getElementById(quizId + '-score');
  if (!scoreDiv) return;
  scoreDiv.style.display = 'block';
  scoreDiv.innerHTML = `<div class="score-card">
    <h3>🎓 Resultaat</h3>
    <div class="score-big">${pct}%</div>
    <div class="score-label">${passed ? '✅ Geslaagd!' : '❌ Niet geslaagd – opnieuw oefenen!'}</div>
    <div class="score-breakdown">
      <div class="score-item"><span class="si-n">${state.correct}</span><span class="si-l">Goed</span></div>
      <div class="score-item"><span class="si-n">${state.total - state.correct}</span><span class="si-l">Fout</span></div>
      <div class="score-item"><span class="si-n">${state.total}</span><span class="si-l">Totaal</span></div>
    </div>
  </div>`;
  scoreDiv.scrollIntoView({behavior:'smooth', block:'start'});
}

function resetQuiz(quizId) {
  const scoreDiv = document.getElementById(quizId + '-score');
  if (scoreDiv) scoreDiv.style.display = 'none';
  const quizDiv = document.getElementById(quizId + '-quiz');
  if (quizDiv) quizDiv.innerHTML = '';
  const progress = document.getElementById(quizId + '-progress');
  if (progress) progress.innerHTML = 'Nog niet gestart';
  delete quizState[quizId];
}

// ─── Init ─────────────────────────────────────────────────────────────────────
// Open all theory cards in active page by default - already handled by .open class
// Ensure first tab is active on page load
document.addEventListener('DOMContentLoaded', function() {
  // All pages start hidden except home
  console.log('BI Toets Studieplatform geladen. Veel succes met studeren!');
});
</script>
</body>
</html>
'''

with open(OUTPUT, 'a', encoding='utf-8') as f:
    f.write(JS)
size = os.path.getsize(OUTPUT)
print(f"COMPLETE! Total file size: {size} bytes ({size//1024} KB)")
