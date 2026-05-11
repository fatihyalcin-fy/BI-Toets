/* =================================================================
   data_cikmis.js – Bestaande cikmis sorular (geconverteerd formaat)
   opts[0] = altijd het JUISTE antwoord. quiz.js shuffelt bij weergave.
   ================================================================= */
(function(){
var sets = {

// ═══ PARO CIKMIS (15 vragen) ═══
paro_cikmis:{title:"Parodontologie – Çıkmış Sorular (15 vragen)",questions:[
{q:"Een 35-jarige patiënte heeft een DPSI-score van 4 in het sextant rechts boven. Wat is de meest passende vervolgstap?",opts:["Subgingivale reiniging starten na supragin. scaling en her-evaluatie","Alleen mondhygiëne-instructie geven","Direct verwijzen naar paro-specialist","Alleen supragin. scaling uitvoeren"],exp:"DPSI 4 = pockets ≥5,5mm. Na supragin. scaling en MHI: subgingivale SRP. Her-evaluatie 4-8 weken daarna."},
{q:"Bij een rokende patiënt is de BOP 5%. Waarom kan dit de werkelijke ernst onderschatten?",opts:["Nicotine veroorzaakt vasoconstrictie, waardoor BOP onderdrukt wordt","Rokers hebben altijd lage BOP door minder bacteriën","Roken zorgt voor betere mondhygiëne","Roken heeft geen effect op BOP"],exp:"Roken → vasoconstrictie gingivale vaten → verminderd BOP ook bij aanwezige parodontitis. Vals negatief resultaat."},
{q:"Welke antibioticacombinatie wordt bij het NVvP-protocol aanbevolen voor stadium III/IV paro graad C?",opts:["Amoxicilline 500mg + Metronidazol 500mg, 7 dagen","Amoxicilline 250mg + Metronidazol 250mg, 5 dagen","Clindamycine 300mg, 10 dagen","Doxycycline 100mg, 14 dagen"],exp:"NVvP: Amoxicilline 500mg + Metronidazol 500mg 3x/dag 7 dagen. Gelijktijdig met of direct na SRP."},
{q:"Wat is de definitie van furcatie klasse II (Hamp)?",opts:["Sondering ≥3mm horizontaal, maar niet door-en-door","Sondering minder dan 3mm horizontaal","Door-en-door sondering mogelijk","Furcatie zichtbaar met het blote oog"],exp:"Hamp: I <3mm, II ≥3mm maar niet door-en-door, III = door-en-door."},
{q:"Na hoeveel weken na subgingivale reiniging moet de her-evaluatie plaatsvinden?",opts:["4-8 weken","1-2 weken","10-12 weken","6 maanden"],exp:"Her-evaluatie 4-8 weken na SRP. Weefsel heeft tijd nodig voor remodellering."},
{q:"Necrotische interdentale papillen, spontane bloeding, fetor ex ore, geen botverlies op röntgen. Diagnose?",opts:["ANUG (Acute Necrotiserende Ulceratieve Gingivitis)","Chronische parodontitis","ANUP (Acute Necrotiserende Ulceratieve Parodontitis)","Parodontaal abces"],exp:"ANUG = necrose gingivale papillen, spontane bloeding, fetor, GEEN botverlies. ANUP = ANUG + botverlies."},
{q:"Bij welke DPSI-score is verwijzing naar een paro-specialist standaard aangewezen?",opts:["DPSI 4","DPSI 2","DPSI 3","DPSI 1"],exp:"DPSI 4 (pockets ≥5,5mm) → verwijzing specialist indien persistent. DPSI 3 → behandeling bij algemeen practicus."},
{q:"Welk medicament kan gingivale hyperplasie veroorzaken?",opts:["Nifedipine (calciumantagonist)","Metformine","Metoprolol","Atorvastatine"],exp:"Nifedipine, fenytoïne en ciclosporine veroorzaken gingivale hyperplasie."},
{q:"Paro-behandeling en HbA1c bij diabetespatiënten: wat is de relatie?",opts:["Paro-behandeling kan HbA1c met gemiddeld 0,4% verlagen","Paro-behandeling heeft geen effect op HbA1c","Paro-behandeling verhoogt HbA1c","Alleen insuline beïnvloedt HbA1c"],exp:"Meta-analyses: paro-behandeling verlaagt HbA1c 0,3-0,4%. Bidirectionele relatie paro–DM."},
{q:"Wat is kenmerkend voor Graad C parodontitis (2018 classificatie)?",opts:["Snelle progressie (≥2mm botafname/5j) en/of risicofactoren","Langzame progressie (<2mm botafname/5 jaar)","Pockets dieper dan 7mm","Furcatie klasse III"],exp:"Graad C: snelle progressie of risicofactoren: >10 sig/dag, HbA1c ≥7%."},
{q:"Een patiënt heeft een DPSI * (asterisk) score. Wat betekent dit?",opts:["Furcatie-betrokkenheid, ≥7mm botverlies en/of tandmobiliteit aanwezig","Geen pocketdiepte gevonden","Bloeding na sonderen afwezig","Tand hopeloos"],exp:"DPSI *: furcatiebetrokkenheid, ≥7mm vertikaal botverlies, of 2e/3e graad mobiliteit."},
{q:"Welke sextanten worden gebruikt bij de DPSI-meting?",opts:["6 sextanten (17-14, 13-23, 24-27, 37-34, 33-43, 44-47)","4 sextanten (2 posterior, 1 anterieur per kaak)","8 kwadranten","Per element apart"],exp:"DPSI: 6 sextanten, 3 bovenkaak + 3 onderkaak."},
{q:"Wat is de meest passende behandeling bij ANUG?",opts:["Voorzichtige debridement, CHX-spoeling, analgesie, eventueel Metronidazol","Agressieve debridement van alle sextanten tegelijk","Direct antibiotica starten zonder debridement","Extractie van aangedane tanden"],exp:"ANUG: voorzichtige debridement, CHX 0,12-0,2%, pijnstilling. Metronidazol 250mg 3x/dag bij koorts."},
{q:"Wanneer geeft u de antibiotica bij gecombineerde AB-behandeling bij paro stadium III?",opts:["Gelijktijdig met of direct na de laatste SRP-sessie","1 week voor de SRP-sessie starten","6 weken na her-evaluatie","Alleen bij koorts geven"],exp:"AB timing: gelijktijdig aan of direct na subgingivale SRP. Bacteriën blootgesteld aan AB terwijl ze aanwezig zijn."},
{q:"Een DPSI 3 patiënt vraagt of hij naar een paro-specialist verwezen wordt. Correct antwoord?",opts:["Nee, DPSI 3 wordt behandeld door de algemeen tandarts","Ja, altijd verwijzen bij DPSI 3","Ja, als de patiënt dat wil","Alleen verwijzen als patiënt ouder is dan 40 jaar"],exp:"DPSI 3 kan behandeld worden door GP: MHI + SRP. Verwijzing bij DPSI 4 dat niet reageert."},
]},

// ═══ ENDO CIKMIS (15 vragen) ═══
endo_cikmis:{title:"Endodontologie – Çıkmış Sorular (15 vragen)",questions:[
{q:"Spontane hevige tandpijn element 36 ook 's nachts, langdurige koude-reactie, licht percussie-positief. Diagnose?",opts:["Irreversibele pulpitis","Reversibele pulpitis","Pulpanecrose","Condenserende osteïtis"],exp:"Irreversibele pulpitis: spontane pijn (nachts), langdurige koude-reactie, percussie-positief → WKB."},
{q:"Welke irrigatievloeistof is de goudstandaard bij WKB?",opts:["NaOCl – antimicrobieel én lost organisch weefsel op","Chloorhexidine 2% – sterkste antibacteriële werking","EDTA – verwijdert smear layer","Aqua destillata – onschadelijk"],exp:"NaOCl: goudstandaard. Antimicrobieel + lost organisch weefsel op. Concentratie NL: 2,5-3%."},
{q:"Waarom mogen NaOCl en chloorhexidine NIET gecombineerd worden als irrigantia?",opts:["Ze vormen een bruinzwart precipitaat (parachloraniline), potentieel toxisch","Ze neutraliseren elkaars werking","CHX lost NaOCl op","Ze zijn beide te sterk samen"],exp:"NaOCl + CHX = bruinzwart precipitaat (parachloraniline), cytotoxisch. Altijd tussenspoelen met EDTA."},
{q:"Op welke afstand van de röntgenapex wordt de werkhoogte bij WKB vastgesteld?",opts:["0,5-1mm van de röntgenapex","Precies op de röntgenapex","2mm van de röntgenapex","Aan de tandvleesrand"],exp:"Werkhoogte = 0,5-1mm van röntgenapex. Bevestiging met apex-locator + röntgenfoto."},
{q:"Kind 8 jaar, element 21 geavulseerd, 40 minuten droog bewaard. Prognose en beleid?",opts:["Matige prognose: PDL deels dood maar replantatie zinvol (apex open: revascularisatie mogelijk)","Goede prognose: direct replantatie","Slechte prognose: geen replantatie","Direct naar ziekenhuis sturen"],exp:"40 min droog = marginale grens. Apex open bij 8-jarige → revascularisatie mogelijk! Replantatie zinvol."},
{q:"Welke classificatie beschrijft tandtrauma?",opts:["Andreasen classificatie","Hamp classificatie","Ellis classificatie","Angle classificatie"],exp:"Andreasen (1981): concussie, subluxatie, extrusie, laterale luxatie, intrusie, avulsie."},
{q:"Verschil interne vs. externe wortelresorptie op röntgen?",opts:["Interne: symmetrische uitbreiding kanaalcavum. Externe: asymmetrisch, onregelmatig","Interne resorptie: asymmetrisch. Externe: symmetrisch","Ze zijn röntgenologisch identiek","Interne is altijd groter"],exp:"Interne: ronde symmetrische uitbreiding. Externe: asymmetrisch, onregelmatig, van buitenaf."},
{q:"Bij welke situatie is DETI score 1 van toepassing?",opts:["Ludwig's angina met luchtwegproblemen","Alveolitis na extractie","Irreversibele pulpitis met sterke pijn","Avulsie van een melktand"],exp:"DETI 1 = direct, levensbedreigend. Ludwig's angina = bilaterale submandibulaire cellulitis."},
{q:"Wanneer is een primaire endodontische laesie te verwachten bij een paro-endo laesie?",opts:["Negatieve vitaliteitstest, smalere sinus tractus vanuit de apex","Positieve vitaliteitstest, sinus tractus vanuit margo gingivalis","Beide positief en negatief vitaal","Geen vitaliteitstest nodig"],exp:"Primair endodontisch: pulpa necrotisch (negatieve vitaliteitstest), sinus vanuit apex. Na WKB verdwijnt paro-component."},
{q:"Avulsie blijvende tand gesloten apex (volwassene): wanneer start u WKB?",opts:["7-10 dagen na replantatie, voor verwijderen spalk","Direct bij de replantatie","6 maanden later","Nooit"],exp:"Gesloten apex: revascularisatie onwaarschijnlijk. WKB 7-10 dagen na replantatie."},
{q:"Welke obturatietechniek geeft de beste aanpassing aan complexe kanalanatomie?",opts:["Warme verticale condensatie (WVC)","Laterale condensatie (koud)","Pastieuze injectietechniek","Enkelpuntmethode"],exp:"WVC: thermoplastisch guttapercha, betere aanpassing aan zijkanaaltjes dan koude condensatie."},
{q:"Pijnloze periapicale radiolucency element 11, vitaal bij koude. Meest waarschijnlijke diagnose?",opts:["Nader onderzoek nodig – vitale tand met periapicale radiolucency is ongewoon","Asymptomatische apicale parodontitis","Chronische granuloom","Condenserende osteïtis"],exp:"Vitaal + radiolucency = uitzonderlijk. Overweeg: vals-positieve test, vroege necrose. Condenserende osteïtis = radiopaciteit."},
{q:"Wat is het doel van EDTA als irrigans?",opts:["Smear layer verwijdering (chelator)","Antimicrobiële werking","Organisch weefsel oplossen","pH-regulatie in kanaal"],exp:"EDTA 17%: chelator voor anorganische structuren. Verwijdert smear layer. Eindirrigatie na NaOCl."},
{q:"Intrusie element 21 bij kind 9 jaar. Correct beleid?",opts:["Spontane heruitbraak afwachten (kinderen <12 jaar)","Direct chirurgisch repositie","Orthodontisch repositie","Direct WKB starten"],exp:"Intrusie bij kind <12 jaar, open apex: spontane heruitbraak afwachten (6-12 weken), succes 80-90%."},
{q:"Welke spalk na avulsiereplantatie?",opts:["Flexibele composietdraadspalk 7-14 dagen","Stijve acrylspalk 4 weken","Metalen orthodontische band 6 weken","Hechtingenspalk 2 weken"],exp:"Flexibele spalk (0,4mm composietdraad) 7-14 dagen. Flexibel = minder ankyloserisico."},
]},

// ═══ BASIS MEDISCH CIKMIS (15 vragen) ═══
basis_cikmis:{title:"Basisch-Medisch – Çıkmış Sorular (15 vragen)",questions:[
{q:"Eerste keus antibioticum bij orofaciale infectie bij penicilline-allergische patiënt?",opts:["Clindamycine 300mg","Amoxicilline 500mg","Metronidazol 500mg","Tetracycline 250mg"],exp:"Penallergie: clindamycine (breed gram+ + anaeroben). Cave C. difficile colitis."},
{q:"Maximale adrenalinedosis bij patiënt met angina pectoris?",opts:["0,04 mg per tandheelkundige sessie","Geen adrenaline gebruiken","0,2 mg per sessie","Geen beperking bij 1:100.000"],exp:"Cardiovasculaire patiënten: max 0,04 mg adrenaline/sessie (= ~2 carpules 1:100.000)."},
{q:"Patiënt gebruikt warfarine, INR=3,2. Is enkelvoudige extractie veilig?",opts:["Ja, INR ≤3,5 veilig met lokale hemostase, warfarine niet stoppen","Nee, altijd warfarine stoppen","Ja, maar warfarine 3 dagen stoppen","Nee, altijd naar ziekenhuis"],exp:"INR ≤3,5: extractie veilig met lokale hemostase. Warfarine NIET stoppen: tromboserisico."},
{q:"Welke micro-organismen zijn verantwoordelijk voor orofaciale infecties?",opts:["Gemengde flora: aerobe + anaerobe bacteriën, overwegend gramnegatieve anaeroben","Exclusief aerobe grampositieve kokken","Alleen Candida species","Voornamelijk virussen"],exp:"Orofaciale infecties: gemengde flora, Streptococcus + anaeroben (Prevotella, Fusobacterium)."},
{q:"Werkingsduur lidocaïne 2% met 1:100.000 adrenaline?",opts:["60-90 minuten pulpaire anesthesie","30 minuten","3-4 uur","15 minuten"],exp:"Lidocaïne 2% + adrenaline: pulpair 60-90 min, zachte weefsels 3-5 uur."},
{q:"Meest effectieve prion-inactivatie voor CJD-besmette instrumenten?",opts:["NaOH 1M + autoclaaf 134°C","Autoclaaf 121°C/20 min","Glutaaraldehyde 2% 10 uur","Droge hitte 180°C/30 min"],exp:"Prionen resistent tegen standaard sterilisatie. Meest effectief: NaOH 1M + autoclaaf 134°C."},
{q:"Hoogste risico op MRONJ (osteonecrose kaak) bij?",opts:["Osteoporose behandeld met oraal bisfosfonaat >5 jaar","Hypertensie","Aspirine gebruik","DM type 1, goed gereguleerd"],exp:"Oraal bisfosfonaat >5 jaar (of + corticosteroïden): verhoogd MRONJ-risico bij invasieve ingrepen."},
{q:"Patiënt gebruikt dabigatran (DOAC). Beleid bij geplande extractie?",opts:["Laatste dosis overslaan voor invasieve ingreep, overleg cardioloog","Geen aanpassing nodig","Omzetten naar warfarine","Stop DOAC 2 weken voor extractie"],exp:"DOAC: laatste dosis overslaan. Overleg cardioloog. Geen INR nodig."},
{q:"Bijwerking specifiek voor prilocaïne bij hoge doses?",opts:["Methemoglobinemie","Tachycardie","Nierinsufficiëntie","Hepatotoxiciteit"],exp:"Prilocaïne → orthotoluïdine → methemoglobinemie. Symptomen: cyanose, dyspnoe."},
{q:"Endocarditis profylaxe dosis amoxicilline?",opts:["2g oraal 30-60 minuten voor ingreep","500mg 3x/dag 7 dagen","1g IV direct voor ingreep","250mg 4x/dag 5 dagen"],exp:"ESC: Amoxicilline 2g oraal eenmalig 30-60 min voor ingreep. Penallergie: Clindamycine 600mg."},
{q:"Welke factor is GEEN risicofactor voor postoperatieve bloeding bij antistolling?",opts:["Leeftijd >50 jaar","INR >3,5","Meerdere extracties in één sessie","Aspirinegebruik als enkel medicament"],exp:"Leeftijd >50 jaar is geen specifieke risicofactor voor postoperatieve bloeding."},
{q:"Bacteriën verantwoordelijk voor infectieuze endocarditis na tandheelkundige ingreep?",opts:["Viridans-streptokokken (S. sanguis, mutans, mitis)","Staphylococcus aureus","Pseudomonas aeruginosa","Escherichia coli"],exp:"Viridans-streptokokken (normale mondflora) via bacteriëmie → hartkleppen."},
{q:"Bètablokkertype met minste interactie met adrenaline?",opts:["Selectieve bèta-1-blokkers (metoprolol) geven minder hypertensie","Adrenaline is gecontraïndiceerd bij bètablokkers","Non-selectieve bètablokkers zijn veiliger","Geen klinisch relevante interactie"],exp:"Non-selectief (propranolol) + adrenaline → hypertensieve crisis. Selectief (metoprolol) = minder risico."},
{q:"Recent myocardinfarct (3 maanden geleden): wanneer elektieve tandheelkunde?",opts:["Na 6 maanden","Direct als stabiel","Na 1 jaar","Nooit"],exp:"Na acuut MI: geen elektieve tandheelkunde gedurende 6 maanden."},
{q:"Welk type stralingsschade is meest relevant bij tandheelkundige röntgenfoto's?",opts:["Stochastische effecten (geen drempelwaarde, kans proportioneel aan dosis)","Directe schade aan DNA","Deterministische effecten (drempelwaarde aanwezig)","Thermische schade"],exp:"Stochastische effecten bij lage doses: kanker, genetische schade. Geen drempelwaarde."},
]},

// ═══ RADIO CIKMIS (10 vragen) ═══
radio_cikmis:{title:"Radiologie – Çıkmış Sorular (10 vragen)",questions:[
{q:"Wat beschrijft het ALARA-principe in de radiologie?",opts:["As Low As Reasonably Achievable: stralingsbelasting zo laag als redelijkerwijs mogelijk","Altijd minimale kV gebruiken","Als loodschort aanwezig is geen beperking nodig","Altijd digitale receptoren verplicht"],exp:"ALARA: rechtvaardiging, optimalisatie, dosislimieten. Kernprincipe radiologisch beleid."},
{q:"Effectieve dosis van een digitale panoramafoto?",opts:["15-25 µSv","<5 µSv","100-300 µSv","2000 µSv"],exp:"Panorama digitaal: ~15-25 µSv. Periapicaal: 1-8 µSv. CBCT klein: 30-50 µSv."},
{q:"Röntgenologisch beeld kenmerkend voor radiculaire cyste?",opts:["Grote periapicale radiolucency met corticale begrenzing, gerelateerd aan necrotische tand","Kleine periapicale radiolucency, geen cortex","Multiloculair radiolucent beeld","Periapicale radiopaciteit"],exp:"Radiculaire cyste: >1cm, scherpe cortex, altijd gerelateerd aan necrotische tand."},
{q:"Zwangere patiënte met acute tandpijn (DETI 3). Is periapicale foto gecontraïndiceerd?",opts:["Nee, met loodschort en schildklierbeschermer acceptabel indien klinisch geïndiceerd","Ja, strikt gecontraïndiceerd in alle trimesters","Ja, uitstellen tot na bevalling","Alleen gecontraïndiceerd in 1e trimester"],exp:"Röntgen bij zwangerschap: niet absoluut gecontraïndiceerd met loodschort + indicatie."},
{q:"Welke eenheid voor effectieve stralingsdosis?",opts:["Sievert (Sv)","Gray (Gy)","Becquerel (Bq)","Röntgen (R)"],exp:"Sievert = effectieve dosis = geabsorbeerde dosis × weegfactoren. Biologisch risico van straling."},
{q:"Effect van hogere kV op röntgenfoto?",opts:["Minder contrast (grijzer beeld), meer doordringvermogen","Meer contrast","Kleinere dosis","Kortere belichtingstijd"],exp:"Hogere kV: meer doordringvermogen → minder absorptie-verschil → minder contrast (grijzer)."},
{q:"Röntgenologisch beeld pathognomonisch voor condenserende osteïtis?",opts:["Periapicale radiopaciteit bij vitaal element","Periapicale radiolucency","Intraosseale lucency","Verlies PDL-ruimte"],exp:"Condenserende osteïtis = periapicale radiopaciteit. Reactief botvorming bij chronische pulpaprikkel."},
{q:"Wanneer is CBCT geïndiceerd boven 2D-röntgen?",opts:["Alleen wanneer 2D diagnostische informatie onvoldoende geeft en CBCT klinisch voordeel heeft","Altijd bij WKB","Als alternatief voor panorama","Bij alle impacted verstandskiezen"],exp:"CBCT: strikte rechtvaardiging vereist. Alleen bij aantoonbaar voordeel (complexe endo, implantaat)."},
{q:"Ankylose röntgenologisch versus normale tand?",opts:["Verdwijning van de PDL-ruimte, tand gefuseerd aan omringend bot","Grotere PDL-ruimte","Periapicale radiolucency","Grotere pocketdiepte op röntgen"],exp:"Ankylose: fusie cement/bot → PDL-ruimte verdwijnt. Percussie: metallische klank."},
{q:"Beste röntgenfoto voor alveolaire botkam bij paro-diagnostiek?",opts:["Bitewing röntgenfoto","CBCT","Periapicale röntgenfoto","Occlusale röntgenfoto"],exp:"Bitewing: ideaal voor interproximaal botverlies en alveolaire kamhoogte."},
]},

// ═══ STATISTIEK CIKMIS (14 vragen) ═══
statistiek_cikmis:{title:"Statistiek & EBM – Çıkmış Sorular (14 vragen)",questions:[
{q:"Studie: TP=80, FN=20, FP=10, TN=90. Wat is de sensitiviteit?",opts:["80% (TP/TP+FN = 80/100)","89%","90%","80/90"],exp:"Sensitiviteit = TP/(TP+FN) = 80/100 = 80%."},
{q:"ARR=0,08 (8%). Wat is het NNT?",opts:["12,5 (1/ARR)","8","0,08","80"],exp:"NNT = 1/ARR = 1/0,08 = 12,5. Behandel 12-13 patiënten voor 1 extra gunstige uitkomst."},
{q:"Welk studiedesign heeft de hoogste bewijskracht?",opts:["Systematische review van meerdere RCT's","Prospectief cohortonderzoek","RCT","Case-control studie"],exp:"Hiërarchie: 1. Systematische review RCT's. 2. RCT. 3. Cohort. 4. Case-control."},
{q:"SnNout staat voor?",opts:["Sensitiviteit hoog → negatieve test sluit ziekte uit","Specificiteit laag → negatieve test sluit ziekte uit","Specificiteit hoog → positieve test bevestigt ziekte","Sensitiviteit laag → positieve test bevestigt ziekte"],exp:"SnNout: hoge Sensitiviteit → Negatieve test sluit ziekte uit. SpPin: hoge Specificiteit → Positieve test bevestigt ziekte."},
{q:"Test specificiteit 95%, sensitiviteit 70%. Lage ziekte-prevalentie (1%): wat met PPV?",opts:["PPV daalt, want veel vals-positieven bij lage prevalentie","PPV stijgt naar bijna 100%","PPV blijft stabiel","Specificiteit bepaalt PPV niet"],exp:"Lage prevalentie: weinig zieken → relatief veel FP → PPV daalt. NPV stijgt."},
{q:"Recall bias treedt op in welk studiedesign?",opts:["Case-control studie (patiënten herinneren blootstelling onjuist)","RCT","Prospectief cohortonderzoek","Cross-sectioneel onderzoek"],exp:"Case-control: cases herinneren blootstelling anders dan controles → recall bias."},
{q:"Definitie van ARR?",opts:["Risico controlegroep – Risico interventiegroep","Risico interventie / Risico controle","1/NNT","Relatieve risicoreductie"],exp:"ARR = absoluut verschil in risico. RRR = ARR/Risico controle × 100%."},
{q:"LR+ van test met sensitiviteit 90% en specificiteit 80%?",opts:["4,5 (Sens/(1-Spec) = 0,90/0,20)","9","0,125","18"],exp:"LR+ = 0,90/0,20 = 4,5. >10 = sterk bewijs. 4,5 = matig."},
{q:"Intention-to-treat analyse betekent?",opts:["Alle gerandomiseerde deelnemers geanalyseerd in de toegewezen groep","Alleen analyse van compliant deelnemers","Deelnemers die uitvallen worden geëxcludeerd","Deelnemers mogen van groep wisselen"],exp:"ITT: alle deelnemers in oorspronkelijk toegewezen groep. Minimaliseert attrition bias."},
{q:"p-waarde 0,03: wat betekent dit?",opts:["De kans op het gevonden resultaat (of extremer) bij geen effect = 3%","97% zekerheid over effect","Effect is zeker aanwezig","3% kans op fout in de studie"],exp:"p-waarde: kans om dit resultaat te zien als nulhypothese waar. p<0,05 = statistisch significant."},
{q:"Meest geschikt statistisch maat voor case-control studies?",opts:["Odds ratio (OR)","Relatief risico (RR)","Sensitiviteit","NNT"],exp:"Case-control: OR = odds ziekte bij blootgestelden / odds niet-blootgestelden. RR niet berekenen bij case-control."},
{q:"Wat is publicatiebias?",opts:["Positieve/significante studies vaker gepubliceerd dan negatieve","Auteurs publiceren verkeerde data","Tijdschriften accepteren alle studies","Peer review voorkomt bias"],exp:"Publicatiebias: positieve resultaten vaker gepubliceerd → systematische reviews overschatten effectiviteit."},
{q:"NPV van 98%: klinische interpretatie?",opts:["98% van negatieve tests zijn terecht negatief (bijna geen gemiste gevallen)","98% van positieve tests zijn terecht positief","Specificiteit is 98%","Sensitiviteit is 98%"],exp:"NPV = TN/(TN+FN). 98% → als test negatief, is er 98% kans dat patiënt echt ziektevrij is."},
{q:"PICO staat voor?",opts:["Patient, Intervention, Comparator, Outcome","Patient, Incidence, Cost, Outcome","Problem, Intervention, Criteria, Objective","Population, Indication, Comparison, Overview"],exp:"PICO: Patiënt/Probleem, Interventie, Comparator/Controle, Outcome. Klinische vraagformulering EBM."},
]},

// ═══ CARIOLOGIE CIKMIS (5 vragen) ═══
cario_cikmis:{title:"Cariologie – Çıkmış Sorular (5 vragen)",questions:[
{q:"Op welke pH begint demineralisatie van tandglazuur?",opts:["pH 5,5","pH 7,0","pH 4,0","pH 6,5"],exp:"Kritische pH glazuur: 5,5. Dentine: 6,0-6,7. S. mutans verlaagt plaque-pH via suikermetabolisme."},
{q:"Initiële carieslaesie (ICDAS 1) zichtbaar als wit vlekje. Beleid?",opts:["Remineralisatie: fluoride, dieetadvies, monitoring","Directe kaviteitsbehandeling","Extractie","Pulpacapping"],exp:"ICDAS 1-2: niet-cavitair → remineralisatie mogelijk. Fluoride, dieetadvies, monitoring."},
{q:"Welke bacterie is verantwoordelijk voor wortelcaries?",opts:["Actinomyces species","Streptococcus mutans","Lactobacillus acidophilus","Porphyromonas gingivalis"],exp:"Actinomyces (A. viscosus, A. naeslundii): wortelcaries. Lactobacillus: progressie dentine. S. mutans: glazuurcaries."},
{q:"Preventieve werkingsduur van fluoride lak (Duraphat)?",opts:["3-6 maanden","1 dag","1 jaar","Permanent"],exp:"Fluoride lak: 3-6 maanden effectief. Hoog-risico kinderen: 2-4x per jaar."},
{q:"Welke suiker is het meest cariogeen?",opts:["Sucrose","Fructose","Glucose","Xylitol"],exp:"Sucrose: S. mutans gebruikt sucrose voor glucanen (plaque-adhesie) + zuurproductie. Xylitol: cariostatisch."},
]},

// ═══ PEDODONTOLOGIE CIKMIS (5 vragen) ═══
pedo_cikmis:{title:"Pedodontologie – Çıkmış Sorular (5 vragen)",questions:[
{q:"Wanneer breekt de eerste blijvende molaar (6-jaars molaar) door?",opts:["6-7 jaar","4-5 jaar","8-9 jaar","10-11 jaar"],exp:"Eerste blijvende molaar doorbreekt ~6-7 jaar. EERSTE blijvende tand. Sealant preventie-indicatie."},
{q:"Correct beleid bij avulsie van een melktand (4 jaar)?",opts:["GEEN replantatie: risico op ankylosis en schade tandkiem","Direct replantatie","Replantatie na 24 uur","Endodontische behandeling"],exp:"Avulsie melktand: GEEN replantatie. Risico op ankylosis + mechanische schade onderliggend tandkiem."},
{q:"Definitie ECC (Early Childhood Caries)?",opts:["Caries bij kind ≤71 maanden (5 jaar 11 maanden)","Caries bij volwassenen na chemo","Caries bij 6-12 jaar","Wortelcaries bij kinderen"],exp:"ECC: aanwezigheid carieslaesies bij kind ≤71 maanden. S-ECC: ernstige variant."},
{q:"Pulpatherapie bij carieuze pulpablootstelling melktand met vitale radiculaire pulpa?",opts:["Pulpotomie (verwijdering kroonpulpa, behoud radiculaire pulpa)","Pulpectomie (volledige verwijdering)","Directe pulpacapping met Ca(OH)₂","Extractie"],exp:"Pulpotomie: kroonpulpa weg, radiculaire pulpa vitaal behouden. MTA of Formocresol."},
{q:"Aanbevolen leeftijd voor eerste tandartsbezoek?",opts:["Bij 1 jaar (na doorbraak eerste melktand)","Bij de eerste tandbrekende klacht","Bij 2-3 jaar","Bij schoolleeftijd (6 jaar)"],exp:"Eerste bezoek bij 1 jaar na doorbraak eerste melktand. Cariesrisicoassessment + preventie ouders."},
]},

// ═══ KINESIOLOGIE CIKMIS (5 vragen) ═══
kinesio_cikmis:{title:"Kinesiologie – Çıkmış Sorular (5 vragen)",questions:[
{q:"Goudstandaard voor diagnose slaapbruxisme?",opts:["Polysomnografie (PSG)","Klinisch onderzoek (sleetstanden)","Anamnese van de partner","EMG van masseter overdag"],exp:"PSG = goudstandaard slaapbruxisme. Praktijk: anamnese + klinisch onderzoek als screening."},
{q:"Eerste keus behandeling bij CMD (craniomandibulaire dysfunctie)?",opts:["Stabilisatiespalk + fysiotherapie + pijnstilling","Onmiddellijke occlusale equilibratie","Chirurgie van het TMJ","Antidepressiva als enige behandeling"],exp:"CMD eerste keus: conservatief. Stabilisatiespalk, fysiotherapie, NSAID. Chirurgie alleen na falen."},
{q:"Bij welke AHI-waarde is OSAS ernstig?",opts:["AHI ≥30/uur","AHI ≥5/uur","AHI ≥15/uur","AHI ≥50/uur"],exp:"OSAS: licht 5-15, matig 15-30, ernstig ≥30 apneus/hypopneus per uur."},
{q:"Patiënt heeft 'reciproke klik' bij openen en sluiten. Diagnose?",opts:["Discusverplaatsing met repositie","Artrose van het TMJ","Discusverplaatsing zonder repositie","Myalgie kauwspieren"],exp:"Reciproke klik = klik bij opening én sluiting = discusverplaatsing MET repositie."},
{q:"Bijwerking van MRA (Mandibulaire Repositie Apparaat) bij OSAS?",opts:["Occlusiewijzigingen na langdurig gebruik","Tachycardie","Gehoorproblemen","Halitosis"],exp:"MRA bijwerkingen: speekselvloed, kaakpijn, occlusiewijzigingen na langdurig gebruik."},
]},

// ═══ ORALE PATHOLOGIE CIKMIS (5 vragen) ═══
pato_cikmis:{title:"Orale Pathologie – Çıkmış Sorular (5 vragen)",questions:[
{q:"Welke premaligne laesie heeft het hoogste maligne potentieel?",opts:["Erythroplakieën (40-50% maligne transformatie)","Homogene leukoplakieën","Orale lichen planus (reticulair)","Submuceuze fibrose"],exp:"Erythroplakieën: 40-50% maligne transformatiekans. Biopt altijd verplicht."},
{q:"Pijnloze radiolucency rond de kroon van een niet-doorgebroken element. Diagnose?",opts:["Dentigerale (folliculaire) cyste","Radiculaire cyste","Nasopalatinale cyste","Keratocyste"],exp:"Dentigerale cyste: rondom kroon niet-doorgebroken tand. Follikel uitgezet door vloeistof."},
{q:"Welke cyste heeft de hoogste recidiefkans?",opts:["Odontogene keratocyste (OKC) – 25-60%","Radiculaire cyste","Dentigerale cyste","Nasopalatinale cyste"],exp:"OKC: hoogste recidiefkans (25-60%) door actief groeiend epitheel. Kan bij Gorlin-Goltz syndroom."},
{q:"Afteus ulcus major (Sutton's ulcer) kenmerkt zich door?",opts:["Meer dan 10mm, genezing >6 weken, litteken","Minder dan 5mm diameter, geen litteken","Multipele kleine ulcera","Alleen op het harde gehemelte"],exp:"Major RAU (Sutton): >10mm, genezing >6 weken, LITTEKEN. Minor: <10mm, geen litteken, 7-14 dagen."},
{q:"Orale lichen planus (OLP) verhoogt het risico op?",opts:["Mondholtecarcinoom (0,5-2%), met name de erosieve variant","Keratocyste","Halitosis","ANUG"],exp:"OLP erosief: 0,5-2% maligne transformatie. Monitoring noodzakelijk."},
]},

// ═══ ORTHODONTIE CIKMIS (4 vragen) ═══
ortho_cikmis:{title:"Orthodontie – Çıkmış Sorular (4 vragen)",questions:[
{q:"Wat is de normale overjet?",opts:["2-4 mm","0-1 mm","5-7 mm","1 mm"],exp:"Normale overjet: 2-4 mm. >4mm = vergroot overjet (klasse II div 1)."},
{q:"Orthodontische tandbeweging: wat gebeurt aan de drukzijde?",opts:["Botafbraak (osteoklastenactiviteit)","Botaanmaak (osteoblasten)","PDL-verdikking","Geen verandering"],exp:"Drukzijde: compressie PDL → osteoklastenactiviteit → botafbraak. Trekzijde: osteoblasten → botaanmaak."},
{q:"Wat is een 'crossbite' (kruisbeet)?",opts:["Boventanden staan aan de binnenzijde (palatinaal/linguaal) van de ondertanden","Boventanden staan te ver voor de ondertanden","Geen contact voor/achter","Voorste open beet"],exp:"Crossbite: bucco-linguaal omgekeerde relatie. Boven-elementen staan palatinaal t.o.v. onderelementen."},
{q:"Waarom is retentie na orthodontische behandeling nodig?",opts:["Tanden neigen terug te bewegen (relapse)","Tanden kunnen spontaan rechter worden","Retentie verbetert esthetiek","Zonder retentie breekt de spalk"],exp:"Na orthodontie: tandmemory in PDL, groei, tong/lippen → relapse-neiging. Levenslange retentie."},
]},

// ═══ FUNCTIE/MZK CIKMIS (5 vragen) ═══
functie_cikmis:{title:"Orale Functieleer/MKA – Çıkmış Sorular (5 vragen)",questions:[
{q:"Optimaal bewaarmedium voor geavulseerde tand?",opts:["Melk (osmolariteit vergelijkbaar met PDL-cellen, laag calcium)","Gewoon kraanwater","Fysiologisch zout","Speeksel"],exp:"Melk: beste beschikbaar. HBSS/Viaspan is beter maar niet beschikbaar. Kraanwater = slecht (hypotoon)."},
{q:"Bij welk abces is hospitalisatie altijd geïndiceerd?",opts:["Submandibulaire of sublinguale abces (Ludwig's angina risico)","Periapicaal abces met fistel","Parodontaal abces DPSI 4","Alveolitis"],exp:"Submandibulaire/sublinguale cel: luchtwegrisico. Ludwig's angina = DETI 1. Altijd hospitalisatie."},
{q:"Timing van palatumsluiting bij schisis lip-alveolus-palatum?",opts:["9-18 maanden (na lip 3-6 maanden)","Bij geboorte","3-6 maanden (gelijktijdig met lip)","Na 4 jaar"],exp:"Lip (cheiloplastiek): 3-6 maanden. Palatum (palatoplastiek): 9-18 maanden. Vroeger belemmert groei."},
{q:"Alveolitis sicca: welk beleid is ONJUIST?",opts:["Spoelen met warm water aanraden","Ioodoform gaas (Alvogyl) plaatsen","Analgesie voorschrijven","Roken afraden"],exp:"GEEN warm water spoelen (lost stolsel op). Alvogyl = eerste keus. Geen AB bij ongecompliceerde alveolitis."},
{q:"MRONJ staat voor?",opts:["Medication-Related OsteoNecrosis of the Jaw","Micro-RNA Oncologisch Nekrotisch Jawprobleem","Mandibulaire Radiogeen Necrose Ostitis","Medicament-Reactief Niet-Odontogene Jaw"],exp:"MRONJ: geassocieerd met bisfosfonaten (IV), denosumab, bevacizumab. ≥8 weken blootgelegd bot, geen bestraling."},
]},

// ═══ SPEEKSEL CIKMIS (3 vragen) ═══
speeksel_cikmis:{title:"Speeksel & Orale Biologie – Çıkmış Sorular (3 vragen)",questions:[
{q:"Welke speekselklier draagt het meest bij aan totale speekselvolume?",opts:["Glandula submandibularis (60-65%)","Glandula parotis","Glandula sublingualis","Kleine speekselklieren"],exp:"Submandibularis: 60-65% volume. Parotis: 25% maar meeste amylase. Sublingualis: meeste IgA."},
{q:"Eerste keus bij xerostomie door medicamenten?",opts:["Speekselstimulerend middel (pilocarpine) + speekselsubstituten + fluoride preventie","Stoppen met alle medicamenten","Antibiotica kuur","Chirurgische klierverwijdering"],exp:"Pilocarpine stimuleert restsecretie. Speekselsubstituten: symptomatisch. Intensieve fluoride preventie."},
{q:"Verschil primair vs. secundair Sjögren-syndroom?",opts:["Primair: sicca (droge ogen + mond) zonder andere auto-immuunziekte. Secundair: + andere auto-immuunziekte (RA, SLE)","Primair: alleen droge ogen. Secundair: droge ogen + droge mond","Primair is ernstiger","Secundair heeft betere prognose"],exp:"Primair Sjögren: geïsoleerd sicca. Secundair: sicca + andere auto-immuunziekte."},
]},

// ═══ SOCIALE TH CIKMIS (2 vragen) ═══
sociale_cikmis:{title:"Sociale Tandheelkunde & Ethiek – Çıkmış Sorular (2 vragen)",questions:[
{q:"Leeftijdsgrens voor volledige zelfstandige medische beslissingen in Nederland (WGBO)?",opts:["18 jaar","12 jaar","16 jaar","21 jaar"],exp:"WGBO: ≥18 = volledig zelfstandig. 16-17: zelfstandig. 12-16: dubbele toestemming. <12: ouders."},
{q:"Welk principe beschrijft de plicht van de tandarts om niet te schaden?",opts:["Non-maleficence (niet schaden)","Autonomie","Beneficence (weldoen)","Rechtvaardigheid"],exp:"Non-maleficence = geen schade toebrengen ('primum non nocere'). Beauchamp & Childress 4 principes."},
]},

// ═══ PARO OEFENTOETS AI (bestaand) ═══
paro_oefen:{title:"Parodontologie – AI Oefentoets (10 vragen)",questions:[
{q:"Welk type resorptie is typisch voor parodontitis?",opts:["Horizontale alveolaire botafname","Interne resorptie","Externe cervicale resorptie","Intrusie-gerelateerde resorptie"],exp:"Parodontitis: horizontale botafname van alveolaire kam door chronische ontsteking."},
{q:"Patiënt gebruikt metformine, DPSI 3. Invloed metformine op paro-behandelresultaat?",opts:["Metformine verbetert insulinegevoeligheid, gunstig voor paro-respons","Metformine verslechtert paro-respons","Geen relatie met paro","Verhoogt bloedingsrisico"],exp:"Metformine: anti-inflammatoir, betere insulinegevoeligheid. Goed gereguleerde DM = betere paro-respons."},
{q:"Welke informatie is essentieel bij stellen paro-diagnose?",opts:["Pocketdiepte + BOP + röntgen botverlies + klinisch attachmentverlies","Alleen de pocketdiepte","Alleen BOP-meting","Alleen röntgenfoto's"],exp:"Complete paro-diagnose: PPD, BOP, CAL (= PPD ± recessie), röntgenologisch botverlies."},
{q:"Wat is 'full-mouth disinfection' en wanneer toegepast?",opts:["SRP volledig gebit binnen 24-48 uur + CHX om herbesmetting te voorkomen","SRP verspreid over meerdere weken","Alleen supragin. scaling alle sextanten","AB als enige behandeling"],exp:"Full-mouth disinfection (Quirynen): SRP binnen 24-48u + CHX. Voorkomt herbesmetting."},
{q:"Betekenis van CAL (Clinical Attachment Level)?",opts:["Afstand van cement-glazuurgrens (CEJ) tot bodem pocket","Pocketdiepte alleen","Afstand van tandvleesrand tot bodem pocket","Röntgenologisch botverlies"],exp:"CAL = CEJ tot bodem pocket = PPD ± recessie. Maat voor werkelijk attachmentverlies."},
{q:"22-jarige patiënt, snelle progressieve paro (stadium III, graad C). Waarom relevant?",opts:["Jonge leeftijd bij ernstige paro suggereert genetische/immunologische factoren – indicatie graad C","Jonge leeftijd geen invloed op prognose","Jonge patiënten reageren altijd beter op behandeling","Leeftijd bepaalt alleen anesthesietype"],exp:">30% botverlies bij <30 jaar = Graad C. Suggereert agressieve pathogenen of immuundeficiëntie."},
{q:"Onderscheid ANUP van ANUG?",opts:["ANUP heeft botverlies, ANUG alleen gingivale necrose","ANUP heeft fetor, ANUG niet","ANUG heeft spontane bloeding, ANUP niet","Ze zijn identiek"],exp:"ANUG: necrotiserende gingivitis, geen botverlies. ANUP: + botverlies/attachmentverlies. ANUP is irreversibel."},
{q:"Patiënt gebruikt ciclosporine na niertransplantatie. Orale bijwerking?",opts:["Gingivale hyperplasie","Droge mond (xerostomie)","Branden van de mond","Tandontkalking"],exp:"Ciclosporine → gingivale hyperplasie (ook: fenytoïne, nifedipine). Eventueel gingivectomie + medicatieswitch."},
{q:"SPT en aanbevolen frequentie bij hoog-risico patiënten?",opts:["Supportive Periodontal Therapy – elke 3 maanden bij hoog risico","Single Periodontal Treatment – eenmalig","Systematic Preventive Treatment – jaarlijks","Standard Periodontal Testing – elke controle"],exp:"SPT = onderhoudsfase. Hoog-risico (rokers, DM, diepe restpockets): elke 3 maanden."},
{q:"Patiënt DPSI 2 (alleen tandsteen), perfecte mondhygiëne. Behandeling?",opts:["Verwijdering subgingivaal tandsteen en supragin. scaling","Geen behandeling, perfect MH volstaat","Antibiotica kuur","SRP (subgingivale reiniging)"],exp:"DPSI 2: tandsteen aanwezig → verwijdering supra + subgingivaal. MH lost tandsteen niet op."},
]},

// ═══ ENDO OEFENTOETS AI (bestaand) ═══
endo_oefen:{title:"Endodontologie – AI Oefentoets (10 vragen)",questions:[
{q:"Scherpe pijn bij koude die direct stopt na stimulus. Percussie negatief. Diagnose?",opts:["Reversibele pulpitis","Irreversibele pulpitis","Pulpanecrose","Dentinehypersensitiviteit"],exp:"Reversibele pulpitis: koude-pijn stopt direct. Percussie negatief. Geen WKB nodig."},
{q:"Waarom wordt articaïne NIET aanbevolen voor blokkade nervus alveolaris inferior?",opts:["Hoger risico op persisterende paresthesie bij blokkade-injecties","Articaïne werkt niet in onderkaak","Articaïne is te duur","Articaïne alleen beschikbaar als 1%"],exp:"Articaïne: meer paresthesie-rapportages bij IAN-block. Gebruik bij blokkade: lidocaïne 2%."},
{q:"Avulsie waarbij tand 2 uur droog bewaard is. Beste beleid?",opts:["Replantatie als 'intentional ankylose-geval': alveole behouden, PDL-cellen afgestorven","Replantatie zinvol, PDL kan herstellen","Niet replantaten, direct implantaat","Wachten 1 week, dan beslissing"],exp:"Na >60 min droog: PDL-cellen afgestorven. Replantatie voor alveole-behoud bij kinderen."},
{q:"Kleur precipitaat bij NaOCl + CHX contact?",opts:["Bruinzwart","Wit","Geel","Rood"],exp:"NaOCl + CHX = bruinzwart precipitaat (parachloraniline). Cytotoxisch. Tussenspoelen met steriel water."},
{q:"Paro-endo laesie met positieve vitaliteitstest: primaire diagnose?",opts:["Primair parodontale laesie","Primair endodontische laesie","Gecombineerde laesie","Kan niet bepaald worden"],exp:"Positieve vitaliteitstest = pulpa levend = primaire paro-oorzaak. Behandeling: paro-therapie eerst."},
{q:"Functie van de bilaminaire zone (TMJ)?",opts:["Gevasculariseerd weefsel posterieur aan de discus – voorziet bloed/innervatie","Lubricatie gewrichtsoppervlak","Produceert collageen voor discusreparatie","Verbindt condylus aan processus styloideus"],exp:"Bilaminaire zone: rijkelijk gevasculariseerd en geïnnerveerd. Aangevallen bij discus-anterieure dislocatie."},
{q:"Warm carrier-based obturatie (bijv. Thermafil) – type?",opts:["Warm drager-based techniek","Laterale condensatie","Enkelpuntmethode","Pasta-injectie"],exp:"Carrier-based: metalen/kunststof drager + thermoplastisch GP. Snel, goede afsluiting. Verwijdering bij herbehandeling moeilijk."},
{q:"Wanneer is elektieve WKB relatief gecontraïndiceerd?",opts:["Bij patiënten met recent hartinfarct (<6 maanden)","Bij DM type 2","Bij patiënten ouder dan 70 jaar","Bij DPSI 3"],exp:"Recent MI <6 maanden: geen elektieve tandheelkunde inclusief WKB."},
{q:"Apex-locator: welke parameter bepaalt werkhoogte?",opts:["Impedantie (weerstand) van periapicaal weefsel versus mucosa-contact","Weerstand instrument-shaft","Druk op instrument","Kleur LED-indicator"],exp:"Apex-locator: impedantiemeting. Bij apicale constrictie verandert impedantie significant."},
{q:"Meest voorkomende complicatie na extractie onderkaaksmolaar?",opts:["Alveolitis sicca (droge alveole)","Zenuwschade nervus alveolaris inferior","Maxillaire sinusperforatie","Verslikken van de tand"],exp:"Alveolitis sicca: 2-5% aller extracties, 30-40% impacted wisdom teeth. Optreden: 2-5 dagen postoperatief."},
]},

// ═══ BASIS OEFENTOETS AI (bestaand) ═══
basis_oefen:{title:"Basisch-Medisch – AI Oefentoets (11 vragen)",questions:[
{q:"Eerste keus analgeticum bij gezonde volwassene met matige tandpijn?",opts:["Ibuprofen 400mg (NSAID – anti-inflammatoir)","Codeine 30mg","Tramadol 50mg","Morfine 10mg"],exp:"Ibuprofen: COX-remming → anti-inflammatoir + analgetisch. Ideaal voor tandpijn."},
{q:"Welke ziekte veroorzaakt verhoogd bloedingsrisico bij tandheelkundige ingrepen?",opts:["Hemofilie A (factor VIII deficiëntie)","Hypothyreoïdie","Hypertensie","DM type 2"],exp:"Hemofilie A: factor VIII deficiëntie → verlengde stollingstijd. Overleg hematologie vóór invasief."},
{q:"Standaard NaOCl concentratie bij WKB in Nederland?",opts:["2,5-3%","0,5-1%","5-6%","10%"],exp:"NL standaard: NaOCl 2,5-3%. Balans: antimicrobieel effect vs. weefseltoxiciteit."},
{q:"Effect van adrenaline op cardiovasculair systeem?",opts:["Tachycardie, verhoogde contractiliteit, hypertensie bij hogere doses","Bradycardie en hypotensie","Perifere vasodilatatie","Verminderd hartminuutvolume"],exp:"Adrenaline: β1 → tachycardie + contractiliteit↑. α1 (hogere doses) → vasoconstrictie → hypertensie."},
{q:"Acute pijn en zwelling rechts onderkaak, koorts 39°C, beperkte mondopening. Meest urgente zorg?",opts:["DETI 1: direct SEH – mogelijke Ludwig's angina, luchtwegbewaking","Röntgenfoto en afwachten","DETI 3: afspraak volgende dag","AB voorschrijven en wachten"],exp:"Submandibulaire zwelling + trismus + koorts = Ludwig's angina risico. DETI 1-2. Luchtwegobstructie."},
{q:"Sjögren-syndroom: effect op cariesrisico?",opts:["Verhoogd cariesrisico door xerostomie","Geen effect","Verminderd cariesrisico door IgA-verhoging","Verminderd cariesrisico door droge mond"],exp:"Sjögren → xerostomie → verminderd speekselbufferend vermogen → hoog cariesrisico. Intensieve fluoride."},
{q:"Welk antihypertensivum veroorzaakt gingivale hyperplasie?",opts:["Nifedipine (calciumantagonist)","Enalapril (ACE-remmer)","Metoprolol (bèta-blokker)","Hydrochloorthiazide (diureticum)"],exp:"Calciumantagonisten (nifedipine, amlodipine) → gingivale hyperplasie in 10-20% gebruikers."},
{q:"Halfwaardetijd van lidocaïne?",opts:["1,5-2 uur","10 minuten","6 uur","24 uur"],exp:"Lidocaïne: t½ ~1,5-2 uur. Hepatisch metabolisme. Leverinsufficiëntie: verlengde halfwaardetijd."},
{q:"Bacteriën verantwoordelijk voor caries?",opts:["Streptococcus mutans (initiatie) en Lactobacillus (progressie)","Staphylococcus aureus en E. coli","Prevotella en Fusobacterium","Treponema en Porphyromonas"],exp:"S. mutans: initiatie. Lactobacillus: progressie dentine. P. gingivalis + T. denticola = paro-pathogenen."},
{q:"Sterilisatiemethode geschikt voor poeder en oliën?",opts:["Droge hitte (160°C/2 uur)","Stoomautoclaaf","Ethyleenoxide","Glutaaraldehyde"],exp:"Droge hitte: poeder, oliën, vetachtige materialen die niet bestand zijn tegen stoom."},
{q:"Mepivacaïne 3% (zonder vasoconstrictor): correct?",opts:["Beschikbaar zonder vasoconstrictor – geschikt bij cardiovasculaire contra-indicaties","Niet beschikbaar zonder vasoconstrictor","Alleen voor kinderen","Vereist altijd felypressine"],exp:"Mepivacaïne 3% (Scandonest): zonder vasoconstrictor. ~30-45 min. Bij cardiovasculaire contra-indicaties."},
]},

// ═══ CARIOLOGIE OEFENTOETS AI (bestaand) ═══
cario_oefen:{title:"Cariologie – AI Oefentoets (4 vragen)",questions:[
{q:"Patiënt heeft ICDAS score 4. Aanbevolen behandeling?",opts:["Restauratieve behandeling (kaviteitsvoorbereiding)","Alleen fluoride applicatie","Extractie","Sealant toepassen"],exp:"ICDAS 4: dentine betrokken, open kaviteit → restauratief. ICDAS 1-3: non-invasief."},
{q:"Kritische pH voor wortelcaries (cement/dentine)?",opts:["6,0-6,7 (hoger dan glazuur)","5,5","4,5","7,0"],exp:"Wortelcement/dentine: pH 6,0-6,7. Hoger dan glazuur (5,5) → verhoogd risico bij xerostomie."},
{q:"Xylitol cariostatisch mechanisme?",opts:["Niet gefermenteerd door bacteriën + inhibeert S. mutans groei","Stimuleert speekselproductie","Versterkt glazuur","Verhoogt plaque-pH door basische reactie"],exp:"Xylitol: niet-fermenteerbaar. S. mutans neemt op maar kan het niet metaboliseren → energieverspilling."},
{q:"Effect fluoride op bestaande carieuze laesies?",opts:["Bevordert remineralisatie vroege laesies (ICDAS 1-2), geneest geen kaviteiten","Kan glazuur volledig herstellen tot normaal","Stopt alle cariesprogressie","Geen effect op aangetaste gebieden"],exp:"Fluoride: remineralisatie early lesions. Kaviteiten (ICDAS 5-6): restauratief nodig."},
]},

// ═══ KINESIO OEFENTOETS AI (bestaand) ═══
kinesio_oefen:{title:"Kinesiologie – AI Oefentoets (4 vragen)",questions:[
{q:"TMJ gewrichtsoppervlakken zijn bedekt met welk type weefsel?",opts:["Fibreus kraakbeen (niet hyalien)","Hyalien kraakbeen","Elastisch kraakbeen","Bot"],exp:"TMJ: fibreus kraakbeen. Anders dan meeste synoviale gewrichten (hyalien). Betere regeneratiecapaciteit."},
{q:"Welke spier opent de mond?",opts:["M. pterygoideus lateralis (inferior kop) + suprahyoidale spieren","M. masseter","M. temporalis","M. pterygoideus medialis"],exp:"Mondopening: pterygoideus lateralis inferior + suprahyoidaal (digastricus, mylohyoideus, geniohyoideus)."},
{q:"CPAP goudstandaard OSAS. Wanneer is MRA een goed alternatief?",opts:["Licht-matig OSAS (AHI 5-30) of CPAP-intolerantie","Ernstig OSAS (AHI >30)","Alle vormen van OSAS","Alleen bij snurken (AHI <5)"],exp:"MRA: licht-matig OSAS, CPAP-intolerantie. Ernstig: CPAP eerste keus."},
{q:"Typische bevinding bij CMD-myalgie bij klinisch onderzoek?",opts:["Palpatiepijn van de kauwspieren","Klik bij mondopening","Beperkte mondopening zonder pijn","Röntgenologisch zichtbare artrose"],exp:"CMD-myalgie: palpatiepijn masseter/temporalis/pterygoideus. Geen klik (= discusprobleem)."},
]},

// ═══ PATO OEFENTOETS AI (bestaand) ═══
pato_oefen:{title:"Orale Pathologie – AI Oefentoets (3 vragen)",questions:[
{q:"Hartvormige anterieure maxillaire radiolucency in de mediaanlijn. Diagnose?",opts:["Nasopalatinale cyste","Radiculaire cyste","Dentigerale cyste","Folliculaire cyste"],exp:"Nasopalatinale cyste: hartvormig tussen centrale incisieven, mediaanlijn. Geen relatie niet-doorgebroken tand."},
{q:"Behandeling minor afteus ulcus?",opts:["Symptomatische behandeling (CHX, analgesie) – spontane genezing 7-14 dagen","Systemische corticosteroïden","Directe biopsie","Antivirale therapie"],exp:"Minor RAU: zelfbeperkend 7-14 dagen. CHX-spoeling + triamcinolon voor pijn."},
{q:"Betelnoot gebruik verhoogt risico op?",opts:["Submuceuze fibrose en mondholtecarcinoom","Orale lichen planus","Candidiasis","Sialadenitis"],exp:"Betelnoot (Areca catechu): submuceuze fibrose (7-13% maligne transformatie). Carcinogeen: arecoline."},
]},

// ═══ ORTHO OEFENTOETS AI (bestaand) ═══
ortho_oefen:{title:"Orthodontie – AI Oefentoets (2 vragen)",questions:[
{q:"Oorzaak van wortelresorptie bij orthodontische behandeling?",opts:["Overmatige krachten die apicale bloedvoorziening compressen","Ontstekingsreactie door beugel-metaal","Normale fysiologische reactie","Verkeerde beugelpositionering"],exp:"Ortho wortelresorptie: zware/langdurige krachten → apicale vasculaire compressie → cementresorptie."},
{q:"Meest geschikt retainer voor langdurige retentie na recht zetten onderincisieven?",opts:["Vaste linguaalretainer (bonded retainer)","Verwijderbaar retentieapparaat alleen","Geen retentie na 2 jaar","Functioneel apparaat"],exp:"Vaste linguaalretainer: permanente retentie zonder compliance-probleem. Combinatie vast + verwijderbaar ook."},
]},

// ═══ FUNCTIE OEFENTOETS AI (bestaand) ═══
functie_oefen:{title:"Orale Functieleer – AI Oefentoets (3 vragen)",questions:[
{q:"Patiënt: IV zoledroninezuur (oncologie), verloren implantaat, hoog MRONJ-risico. Beleid?",opts:["Gecontraïndiceerd: IV bisfosfonaten = absolute contra-indicatie nieuwe implantaten","Nieuw implantaat direct plaatsen","Wachten 6 maanden dan implantaat","Oraal bisfosfonaat als vervanging"],exp:"IV bisfosfonaten oncologie: absoluut hoog MRONJ-risico. Invasieve ingrepen gecontraïndiceerd."},
{q:"Welke Angle-klasse: prognath onderkaak?",opts:["Angle Klasse III","Angle Klasse I","Angle Klasse II","Klasse IV (bestaat niet)"],exp:"Angle III: onderkaak prognath. Omgekeerde beet, negatieve overjet. Erfelijke component."},
{q:"Alveolaire botplastiek bij schisis op welke leeftijd?",opts:["7-10 jaar (voor doorbraak hoektand)","Bij geboorte","3-6 maanden","9-18 maanden"],exp:"Alveolaire botplastiek: 7-10 jaar, vóór doorbraak hoektand (12-23). Botgraft van crista iliaca."},
]},

// ═══ STATISTIEK OEFENTOETS AI (bestaand) ═══
statistiek_oefen:{title:"Statistiek & EBM – AI Oefentoets (6 vragen)",questions:[
{q:"Fluoride-studie: 15% caries controle, 9% caries fluoride-groep. Bereken RRR.",opts:["40% (ARR=6%, RRR=ARR/risico controle=6/15×100)","6%","15/9=167%","60%"],exp:"ARR=15-9=6%. RRR=6/15×100=40%. NNT=1/0,06=16,7."},
{q:"Screeningstest leukoplakieën: hoge specificiteit, matige sensitiviteit. Gevolg?",opts:["Weinig vals-positieven, maar meer vals-negatieven (gemiste gevallen)","Veel vals-positieven, weinig vals-negatieven","Geen vals-positieven","Hoge PPV"],exp:"Hoge spec = weinig FP. Matige sens = meer FN (gemiste gevallen). Bij screening premaligne: sens prioriteit."},
{q:"Confounding in cohort paro-studie voorkomen door?",opts:["Randomisatie (RCT) of multivariate analyse (observationeel)","Grotere steekproef","Langere follow-up","Meer meetpunten"],exp:"Confounding: derde variabele beïnvloedt blootstelling + uitkomst. RCT: randomisatie. Cohort: multivariate regressie."},
{q:"Wat is NNH (Number Needed to Harm)?",opts:["1/ARI (absoluut risico-increment) voor bijwerkingen","Hetzelfde als NNT","Kans bijwerking / placebo","Relatief risico bijwerking"],exp:"NNH = 1/ARI. Hoeveel patiënten behandelen voor 1 extra bijwerking. Hoge NNH = veiliger."},
{q:"Cross-sectionele studie: verband snackfrequentie en DMFT. Welke conclusie is NIET terecht?",opts:["Hoge snackfrequentie veroorzaakt caries (causaliteit)","Er is een associatie","Meer onderzoek nodig","Cross-sectioneel toont alleen associatie"],exp:"Cross-sectioneel: momentopname, geen tijdvolgorde. Causaliteit kan NIET worden vastgesteld."},
{q:"Bewijsniveau expert consensus zonder systematisch literatuuronderzoek?",opts:["Niveau 4-5 (laagste)","Niveau 1 (hoogste)","Niveau 2","Niveau 3"],exp:"Expert consensus = laagste bewijskracht. 1=SR/RCT, 2=RCT, 3=cohort, 4=case-control, 5=expert."},
]},

// ═══ RADIO OEFENTOETS AI (bestaand) ═══
radio_oefen:{title:"Radiologie – AI Oefentoets (5 vragen)",questions:[
{q:"Aanbevolen minimale afstand tandarts tot röntgenbron bij periapicale opname?",opts:["1,5-2 meter (of achter beschermende wand)","50 cm","Geen minimum bij digitale röntgen","5 meter"],exp:"Inversekwadraatswet: op 2m is intensiteit 4× lager dan op 1m. Aanbeveling: minimaal 1,5-2 meter."},
{q:"Waarom heeft CBCT hogere dosis dan panoramafoto?",opts:["Volumetrische data: meerdere röntgenpulsen vanuit meerdere hoeken","Langere belichtingstijd per opname","Hogere kV-instelling","CBCT gebruikt andere straling"],exp:"CBCT: 3D door opnames vanuit 360° → meer pulsen → hogere cumulatieve dosis."},
{q:"Röntgenologisch kenmerk dat granuloom van cyste onderscheidt?",opts:["Cyste: groter (>10mm), scherpe corticale begrenzing. Granuloom: kleiner, minder scherp","Ze zijn identiek","Granuloom heeft altijd corticale begrenzing","Cyste altijd distaal"],exp:"Definitief onderscheid: histologisch. Röntgenologisch: cyste groter, scherper. Granuloom kleiner."},
{q:"Ankylotische tand: geluid bij percussie?",opts:["Metallisch, hoog klinkend geluid","Dof, pijnlijk geluid","Normaal resonant geluid","Geen geluid"],exp:"Ankylose: tand gefuseerd aan bot, geen PDL-demping → metallisch hoog percussiegeluid."},
{q:"Wanneer is bitewing meest informatief?",opts:["Interproximaal caries opsporing en alveolaire botbeoordeling","Periapicale pathologie","Panoramaoverzicht kaaksgewrichten","Sinus maxillaris"],exp:"Bitewing: interproximale caries (vroeg) + alveolaire kamhoogte. Periapicale foto: apicale regio."},
]},

// ═══ SOCIALE OEFENTOETS (open vragen) ═══
sociale_oefen:{title:"Sociale TH & Ethiek – Casusoefen (2 vragen)",questions:[
{q:"Een 16-jarige komt zonder ouders voor een vulling. Mag u behandelen zonder oudertoestemming?",opts:["Ja, 16-17 jaar: zelfstandige toestemming (WGBO)","Nee, altijd oudertoestemming bij minderjarigen","Nee, wachten tot 18 jaar","Ja, maar ouders achteraf informeren"],exp:"WGBO: 16-17 jaar = zelfstandige beslissingsbevoegdheid. 12-16: dubbele toestemming vereist."},
{q:"U ziet signalen van huiselijk geweld bij een patiënt. Wat zijn uw eerste stappen?",opts:["Signalen registreren, meldcode raadplegen, advies inwinnen bij Veilig Thuis","Direct politie bellen","Patiënt confronteren en aangifte doen","Niets doen, beroepsgeheim"],exp:"Meldcode stappen: 1. Signalen verzamelen. 2. Collegiale consultatie. 3. Gesprek patiënt. 4. Wegen ernst/veiligheid. 5. Beslissen melden."},
]},
};

window.QUIZZES = Object.assign(window.QUIZZES || {}, sets);
})();
