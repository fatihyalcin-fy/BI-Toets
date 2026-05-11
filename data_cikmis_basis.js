/* =================================================================
   data_cikmis_basis.js – Basisch-Medisch Çıkmış Sorular (5 sets)
   Bron: BASIS MEDISCH 2020-2025.pdf
   opts[0] = altijd het JUISTE antwoord. quiz.js shuffelt bij weergave.
   ================================================================= */
(function () {
  var sets = {

    // ═══ SET 1 – Farmacologie & interacties ═══
    basis_cikmis_1: {
      title: 'Basisch-Medisch Çıkmış – Set 1: Farmacologie & Interacties',
      questions: [
        {
          q: 'Ciclosporine en Tetracycline kunnen niet gecombineerd worden. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Ciclosporine en Tetracycline mogen niet gecombineerd worden vanwege farmacologische interacties (o.a. verhoogd nefrotoxiciteitsrisico en verlaagde ciclosporinespiegel).'
        },
        {
          q: 'Grapefruitsap veroorzaakt een farmacokinetische interactie doordat het leverenzymen remt, waardoor simvastatine langzamer wordt afgebroken. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Grapefruitsap remt CYP3A4 in de darmwand en lever → verminderde first-pass metabolisme van simvastatine → hogere bloedspiegels. Dit is een farmacokinetische interactie, NIET farmacodynamisch.'
        },
        {
          q: 'Grapefruitsap remt leverenzymen en dit is een farmacodynamische interactie. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Remming van CYP3A4 door grapefruitsap beïnvloedt de kinetiek (absorptie/metabolisme) van het geneesmiddel, niet het werkingsmechanisme zelf. Het is dus een farmacoKINETISCHE, geen farmacoDYNAMISCHE interactie.'
        },
        {
          q: 'Een enzymremmer verhoogt de geneesmiddelspiegel in het bloed. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Een enzymremmer vertraagt de afbraak (metabolisme) van een geneesmiddel, waardoor de spiegel in het bloed stijgt. Dit kan leiden tot toxiciteit.'
        },
        {
          q: 'Een enzymremmer versnelt het metabolisme van een geneesmiddel. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Een enzymREMMER verTRAAAGT het metabolisme (minder enzymactiviteit → langzamere afbraak). Een enzymINDUCEER versnelt het metabolisme. Vertraging leidt tot hogere spiegels.'
        },
        {
          q: 'Tetracycline en Amoxicilline kunnen gecombineerd worden. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Tetracycline is bacteriostatisch (remt groei) en Amoxicilline is bactericide (doodt bacteriën). Bactericide middelen werken het best bij actief delende bacteriën – bacteriostatische middelen remmen die deling, dus er is antagonisme. Combinatie is ongewenst.'
        },
        {
          q: 'Welke volgorde beschrijft de farmacokinetische processen correct?',
          opts: [
            'A) Absorptie, distributie, metabolisme, excretie',
            'B) Absorptie, metabolisme, distributie, excretie',
            'C) Distributie, absorptie, metabolisme, excretie',
            'D) Metabolisme, absorptie, distributie, excretie'
          ],
          exp: 'ADME: Absorptie → Distributie → Metabolisme → Excretie. Dit is de standaard farmacokinetische volgorde.'
        },
        {
          q: 'Een korte halfwaardetijd betekent dat het doseringsinterval kleiner moet zijn. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Korte halfwaardetijd = geneesmiddel wordt snel afgebroken → spiegel daalt snel → vaker doseren nodig → kleiner interval. Lange halfwaardetijd = minder frequent doseren.'
        },
        {
          q: 'Vetoplosbaarheid van een geneesmiddel heeft invloed op de absorptiesnelheid. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'WATERoplosbare geneesmiddelen worden sneller geabsorbeerd vanuit het maag-darmkanaal. VEToplosbare middelen worden langzamer geabsorbeerd maar hebben een groter distributievolume. Vetoplosbaarheid beïnvloedt vooral distributie, niet primair absorptiesnelheid.'
        },
        {
          q: 'Wat is het werkingsmechanisme van Ibuprofen?',
          opts: [
            'A) Niet-selectieve remming van de aanmaak van prostaglandines (COX-1 en COX-2)',
            'B) Selectieve remming van COX-2 alleen',
            'C) Remming van lipoxygenase enzym',
            'D) Blokkade van histaminereceptoren'
          ],
          exp: 'Ibuprofen is een niet-selectief NSAID: remt zowel COX-1 als COX-2 → verminderde prostaglandinesynthese → anti-inflammatoir, analgetisch en antipyretisch effect.'
        },
        {
          q: 'Paracetamol gecombineerd met een NSAID verhoogt het risico op maagbloedingen. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Paracetamol remt COX nauwelijks in de maagwand en heeft geen significant effect op prostaglandines die de maagslijmvliesbescherming verzorgen. Alleen NSAIDs (door COX-1-remming) verhogen het risico op maagbloedingen. Combinatie paracetamol + NSAID verhoogt dit risico niet extra.'
        },
        {
          q: 'NSAIDs zijn gecontraïndiceerd bij nierinsufficiëntie. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'NSAIDs remmen prostaglandinesynthese in de nier. Prostaglandines handhaven de glomerulaire filtratiesnelheid bij verlaagde nierperfusie. NSAID-gebruik bij nierinsufficiëntie kan acute nierschade verergeren.'
        },
        {
          q: 'Een geneesmiddelallergie is gerelateerd aan de toegediende dosis. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Allergische reacties zijn immuungemedieerd en dosisONAFHANKELIJK (type I–IV hypersensitiviteit). Zelfs een minimale dosis kan een ernstige anafylaxie veroorzaken. Dit onderscheidt allergie van toxiciteit (die wél dosisgerelateerd is).'
        },
        {
          q: 'Welke endocarditis-profylaxe is correct voor een bloedige ingreep in de paro bij een indicatie-patiënt?',
          opts: [
            'B) Amoxicilline 2g oraal, 30-60 minuten vóór de ingreep (eenmalig)',
            'A) Amoxicilline 375mg + Metronidazol 250mg 3x per dag gedurende 7 dagen',
            'C) Clindamycine 600mg 3x per dag gedurende 5 dagen',
            'D) Geen profylaxe nodig bij paro-ingrepen'
          ],
          exp: 'ESC-richtlijn endocarditis profylaxe: Amoxicilline 2g eenmalig oraal 30-60 min voor de ingreep. Bij penallergie: Clindamycine 600mg eenmalig. Geen kuur van meerdere dagen.'
        },
        {
          q: 'Tandartsen in Nederland zijn bevoegd om alle geneesmiddelen voor te schrijven. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Tandartsen hebben een beperkte voorschrijfbevoegdheid: alleen geneesmiddelen die verband houden met de tandheelkundige behandeling (zoals analgetica, AB voor orofaciale infecties, lokale anesthetica). Zij mogen NIET alle geneesmiddelen voorschrijven.'
        }
      ]
    },

    // ═══ SET 2 – Anesthesie & Verdoving ═══
    basis_cikmis_2: {
      title: 'Basisch-Medisch Çıkmış – Set 2: Anesthesie & Verdoving',
      questions: [
        {
          q: 'Droge mond behoort tot de bijwerkingen van anticholinergica. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Anticholinergica blokkeren muscarinereceptoren, waaronder die in de speekselklieren. Dit leidt tot verminderde speekselproductie (xerostomie/droge mond).'
        },
        {
          q: 'Droge mond is een bijwerking van parasympatolytica. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Parasympatolytica (= anticholinergica) blokkeren het parasympathische zenuwstelsel. Speekselproductie wordt aangestuurd door de parasympathicus, dus blokkade leidt tot droge mond.'
        },
        {
          q: 'Ongecontroleerde hyperthyreoïdie is een absolute contra-indicatie voor verdovingsvloeistof met adrenaline. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Ongecontroleerde hyperthyreoïdie is een RELATIEVE contra-indicatie, niet absoluut. Adrenaline kan cardiovasculaire effecten versterken bij hyperthyreoïdie, maar met voorzichtigheid (lage dosis, langzame injectie) is gebruik mogelijk.'
        },
        {
          q: 'Bij stabiele angina pectoris is verdovingsvloeistof met 1:200.000 adrenaline geschikt. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Bij stabiele angina: maximaal 1:100.000 adrenaline met beperkt volume (max 0,04 mg adrenaline per sessie = ~2 carpules van 1,8ml). 1:200.000 is een lagere concentratie en dus niet de correct genoemde richtlijn; de richtlijn beperkt de totale DOSIS, niet verplicht de verdunning.'
        },
        {
          q: 'Een patiënt had 8 maanden geleden een hartinfarct en heeft geen klachten meer. Welk beleid bij verdoving?',
          opts: [
            'A) Alleen lage dosis adrenaline (max 0,04 mg per sessie)',
            'B) Normale verdoving mogelijk zonder beperkingen',
            'C) Geen adrenaline toevoegen',
            'D) Verwijzen naar cardioloog voor elke tandheelkundige sessie'
          ],
          exp: 'Na myocardinfarct: bij herstel (>6 maanden) maar recent (<1 jaar): voorzichtig met adrenaline, maximaal 0,04 mg per sessie. Volledig normaal adrenalinegebruik pas na 1 jaar stabiel herstel.'
        },
        {
          q: 'Hoe controleer je of een mandibulair blok geslaagd is?',
          opts: [
            'A) Vragen of de lip en tong aan die zijde half verdoofd aanvoelen',
            'B) De patiënt laten bijten om te testen of de kauwspieren verdoofd zijn',
            'C) Sonderen van de gingiva rondom de te behandelen tand',
            'D) Wachten tot de patiënt pijn aangeeft bij de behandeling'
          ],
          exp: 'Mandibulair blok (n. alveolaris inferior): verdooft lip, tong en halfzijdige mandibula. Controle: half verdoofde onderlip en tong aan de geïnjecteerde zijde is het meest betrouwbare teken.'
        },
        {
          q: 'Voor verdoving van de palatinale zijde van element 16 injecteer je in de overgang van het horizontale naar het verticale palatum. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Palatinale verdoving voor 16: injectie ter hoogte van het foramen palatinum majus (groot palatinumgat), gelegen ~1cm mediaal van de gingiva ter hoogte van de 2e molaar. De overgang horizontaal/verticaal palatum is niet de juiste anatomische locatie.'
        },
        {
          q: 'Een patiënt weegt 70 kg en heeft ernstige nierinsufficiëntie. De maximale adrenalinedosis moet met 50% worden verminderd. Hoeveel carpules mag u geven?',
          opts: [
            'A) 1 carpule articaïne 4% met 1:100.000 adrenaline',
            'B) 3 carpules articaïne 4% met 1:100.000 adrenaline',
            'C) 2 carpules lidocaïne 2% zonder adrenaline',
            'D) Geen verdoving bij ernstige nierinsufficiëntie'
          ],
          exp: 'Bij ernstige nierinsufficiëntie: verminderde klaring van lokale anesthetica en adrenaline. 50% dosisreductie is geïndiceerd. Normaalgewijs ~4 carpules max → 50% = ~2, maar 1 carpule als veilig minimum bij ernstige insufficiëntie.'
        },
        {
          q: 'Felypressine mag niet worden toegediend aan zwangere vrouwen. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Felypressine heeft een oxytocine-achtige werking en kan uteruscontracties stimuleren, wat het risico op vroeggeboorte verhoogt. Felypressine is gecontraïndiceerd bij zwangerschap.'
        },
        {
          q: 'Naalddruk, temperatuur van de vloeistof en injectiesnelheid bepalen mede of een injectie pijnlijk is. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Pijnlijke injectie wordt veroorzaakt door: te hoge naalddruk, te koude vloeistof (lichaamstemperatuur is optimaal), te snelle injectie (druk in weefsel) en chemische prikkeling. Alle genoemde factoren zijn relevant.'
        },
        {
          q: 'Anafylactische shock na verdoving bij de tandarts komt redelijk vaak voor (circa 1 op 500). Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Anafylaxie na lokale anesthesie bij de tandarts is zeldzaam: incidentie ~1:500.000 behandelingen. Echte allergie voor lokale anesthetica (amides) is uiterst zeldzaam. Meeste reacties zijn vasovagaal of door adrenaline.'
        },
        {
          q: 'Bij een patiënt met stress heeft het sympathische zenuwstelsel de overhand. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Stress activeert de "fight-or-flight" respons via het sympathisch zenuwstelsel: verhoogde hartfrequentie, bloeddruk, adrenalineafgifte. De parasympathicus is juist actief in rust ("rest and digest").'
        },
        {
          q: 'Toevoeging van adrenaline aan verdovingsvloeistof verlengt de werkingsduur. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Adrenaline veroorzaakt vasoconstrictie ter plaatse van de injectie → verminderde absorptie van het lokaal anestheticum in de bloedbaan → langere aanwezigheid op de injectieplaats → verlengde werkingsduur en ook verminderde systemische toxiciteit.'
        },
        {
          q: 'Een patiënt met hypoparathyreoïdie vraagt om een extractie. Welk beleid voor de verdoving?',
          opts: [
            'A) Verdoving zonder adrenaline of met minimale adrenaline vanwege het risico op hartritmestoornissen',
            'B) Normale verdoving met adrenaline, hypoparathyreoïdie is geen contra-indicatie',
            'C) Verwijzen naar het ziekenhuis voor elke ingreep',
            'D) Alleen algemene anesthesie is toegestaan'
          ],
          exp: 'Hypoparathyreoïdie → laag calcium → verhoogde neuromusculaire prikkelbaarheid → risico op hartritmestoornissen, ook bij adrenaline-stress. Voorzichtig met adrenaline.'
        },
        {
          q: 'Een patiënt gebruikt prednison 40 mg per dag langdurig. U kunt een extractie zelf uitvoeren. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Hoge dosis corticosteroïden (>7,5–10 mg/dag langdurig) → bijnierschorsinsufficiëntie risico → addisoncrisis bij stress van extractie mogelijk. Bij >20 mg/dag langdurig: verwijzing naar kaakchirurgie of aanvullende corticosteroïdendekking vereist.'
        }
      ]
    },

    // ═══ SET 3 – Infectiepreventie & Microbiologie ═══
    basis_cikmis_3: {
      title: 'Basisch-Medisch Çıkmış – Set 3: Infectiepreventie & Microbiologie',
      questions: [
        {
          q: 'In de waterleidingen van tandartsstoelen kan zich biofilm vormen. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Tandartsstoelwaterleidingen zijn dunne slangetjes met lage doorstroomsnelheid. Dit bevordert biofilmvorming (Legionella, Pseudomonas etc.). Regelmatige doorspoeling en desinfectie zijn noodzakelijk.'
        },
        {
          q: 'In de waterleidingen van de tandartsstoel stroomt het water vrijwel niet, waardoor biofilm gemakkelijk kan ontstaan. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Stagnatie van water in dunne slangen bij de tandartsstoel → ideale omstandigheden voor biofilmvorming. Aanbeveling: dagelijks doorspoelen 2-3 minuten vóór de eerste patiënt.'
        },
        {
          q: 'Handhygiëne is de belangrijkste maatregel om overdracht van micro-organismen te verminderen. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'WHO en RIVM: handhygiëne is de meest effectieve en bewezen maatregel tegen overdracht van pathogenen in de gezondheidszorg. Handen zijn de belangrijkste vehikels voor kruisbesmetting.'
        },
        {
          q: 'Chemische desinfectie is beter dan thermische desinfectie. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Thermische desinfectie (vb. reiniger-desinfector, autoclaaf) geniet de voorkeur boven chemische methoden. Thermisch is betrouwbaarder, minder afhankelijk van contacttijd/concentratie, en minder risico op resistentie of toxische residuen.'
        },
        {
          q: '80% alcohol is geschikt voor desinfectie van oppervlakken. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: '70-80% ethanol of isopropanol is effectief voor oppervlaktedesinfectie: denatuureert eiwitten en lost vetten op. 100% alcohol is minder effectief (geen water = denaturatie minder efficiënt). 80% is een geschikte concentratie.'
        },
        {
          q: 'Na een prikaccident is de eerste stap het goed doorspoelen van de wond met water. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Prikaccident protocol: 1) Uitknijpen van de wond (bloed laten vloeien), 2) Ruim spoelen met water/zeep, 3) Melden bij bedrijfsarts/leidinggevende, 4) Bloed afnemen voor basislijn (hepatitis B, C, HIV). NIET afbinden of zuigen.'
        },
        {
          q: 'Als HIV-besmet bloed spat op een schaafwond, is er een grote kans op besmetting. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Transmissierisico HIV: percutaan (prikaccident) ~0,3%, slijmvliescontact ~0,09%, intact huid vrijwel nul. Schaafwond verhoogt risico licht boven intact huid, maar is nog steeds klein. "Grote kans" is onjuist.'
        },
        {
          q: 'Een patiënt met open (besmettelijke) tuberculose behandel je aan het einde van de dag, na alle andere patiënten. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Open tuberculose is een luchtweg-infectie. RIVM-richtlijn: patiënt met open TBC NIET in de normale praktijk behandelen tijdens de besmettelijke fase. Verwijzen naar gespecialiseerde setting met luchtdrukbeheersing. Behandelen aan het eind van de dag beschermt andere patiënten niet voldoende.'
        },
        {
          q: 'Na drie toedieningen van het Hepatitis B-vaccin is iedereen voldoende beschermd. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Ca. 5-10% van de gevaccineerden is non-responder: na het volledige schema (0-1-6 maanden) geen aantoonbare antistofrespons. Anti-HBs-titer controle na vaccinatie is aanbevolen voor zorgverleners.'
        },
        {
          q: 'MRSA is gevaarlijker voor mensen met een verminderde weerstand. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'MRSA (Meticilline-Resistente Staphylococcus aureus) is met name gevaarlijk bij immuungecompromitteerde personen, oudere patiënten en patiënten met invasieve apparatuur (katheters, prothesen). Gezonde dragers hebben doorgaans geen klachten.'
        },
        {
          q: 'U belt na behandeling na en de patiënt heeft Hepatitis C. Wat is het correct beleid?',
          opts: [
            'A) Niets extra doen; standaard infectiepreventie-richtlijnen zijn al toegepast',
            'B) Andere patiënten die die dag behandeld zijn bellen om hen te informeren',
            'C) De tandartsstoel laten controleren op besmetting',
            'D) Direct contact opnemen met de GGD'
          ],
          exp: 'Hepatitis C: bloedoverdraagbaar. Als standaard infectiepreventie correct is toegepast (handschoenen, sterilisatie, barcière-maatregelen), is er geen risico voor andere patiënten. Geen extra actie vereist.'
        },
        {
          q: 'Een patiënt belt na behandeling dat hij gonorroe heeft. Wat is het correct beleid?',
          opts: [
            'A) Niets extra doen; standaard infectiepreventie was al van toepassing',
            'B) Alle patiënten die die dag behandeld zijn informeren',
            'C) Desinfectie van de behandelkamer herhalen',
            'D) Contact opnemen met de GGD voor bronopsporing'
          ],
          exp: 'Gonorroe wordt niet overgedragen via tandheelkundige behandelinstrumenten bij correct gebruik van standaard infectiepreventie. Geen extra actie nodig voor andere patiënten.'
        },
        {
          q: 'Wat beschermt u het best tegen besmetting met bof (mumps) tijdens een behandeling?',
          opts: [
            'A) Een chirurgisch masker dragen',
            'B) Handschoenen dragen',
            'C) Bril dragen',
            'D) Niets kan u beschermen'
          ],
          exp: 'Bof (mumps) is een druppelinfectie. Een chirurgisch masker beschermt tegen inhalatie van geïnfecteerde druppels. FFP2-masker geeft nog betere bescherming. Handschoenen en bril beschermen niet de luchtwegen.'
        },
        {
          q: 'Na een spataccident in de ogen reinigt u de ogen met alcohol. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Na spataccident in de ogen: direct en ruim spoelen met lauw stromend water of fysiologisch zout (0,9% NaCl) gedurende 10-15 minuten. NOOIT alcohol gebruiken in of rond de ogen — dit veroorzaakt ernstige chemische beschadiging.'
        },
        {
          q: 'Bèta-lactam antibiotica werken niet tegen bacteriën zonder celwand. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Bèta-lactam antibiotica (penicillines, cefalosporines) remmen de celwandsynthese door binding aan PBP-eiwitten. Bacteriën zonder celwand (zoals Mycoplasma) hebben geen peptidoglycaan celwand en zijn dus intrinsiek resistent tegen bèta-lactams.'
        }
      ]
    },

    // ═══ SET 4 – Fysiologie & Cardiologie ═══
    basis_cikmis_4: {
      title: 'Basisch-Medisch Çıkmış – Set 4: Fysiologie & Cardiologie',
      questions: [
        {
          q: 'Veneus bloed is bijna volledig leeg van zuurstof. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Veneus bloed in de vena cava heeft nog een zuurstofsaturatie van ~75% (SvO2 ≈ 70-75%). Slechts 20-25% van het zuurstof wordt in rust onttrokken aan het arteriële bloed. "Bijna leeg" is dus onjuist.'
        },
        {
          q: 'De aortadruk is het hoogst tijdens welke fase van de hartcyclus?',
          opts: [
            'A) Ejectiefase (wanneer het bloed de aorta in wordt gepompt)',
            'B) Isovolumetrische contractiefase (alle kleppen gesloten)',
            'C) Diastolische vulfase',
            'D) Isovolumetrische relaxatiefase'
          ],
          exp: 'Tijdens de ejectiefase opent de aortaklep en stroomt bloed de aorta in → maximale aortadruk (systolische druk). In de isovolumetrische fase zijn alle kleppen gesloten, de aortadruk daalt al.'
        },
        {
          q: 'Waar vindt de grootste bloeddrukdaling in het vaatbed plaats?',
          opts: [
            'A) In de arteriolen en capillairen',
            'B) In de venen',
            'C) In de grote arteriën',
            'D) In de aorta'
          ],
          exp: 'Arteriolen hebben de grootste vaatweerstand (weerstandsvaten). De bloeddruk daalt het sterkst ter hoogte van arteriolen en capillairen. Dit zorgt voor gecontroleerde doorbloeding van weefsels.'
        },
        {
          q: 'De polsdruk neemt toe als de aortawand stijver wordt. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Polsdruk = systolische – diastolische druk. Bij stijvere aortawand (arteriosclerose) kan de aorta minder bufferen: hogere systolische piek, lagere diastolische druk → grotere polsdruk. Kenmerkend voor ouderen.'
        },
        {
          q: 'Hypertensie is belastend voor het hart omdat de diastolische aortadruk hoog is, waardoor het hart langer moet contraheren. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Hoge diastolische aortadruk = hoge "afterload". Het hart moet harder werken om bloed de aorta in te pompen. Dit leidt tot linkerventrikel hypertrofie en verhoogd zuurstofverbruik van de hartspier.'
        },
        {
          q: 'Een sportieve jongeman van 25 jaar heeft pijn op de borst tijdens inspanning. Meest waarschijnlijke diagnose?',
          opts: [
            'A) Hyperventilatie of musculoskeletale pijn',
            'B) Angina pectoris door coronairlijden',
            'C) Aortadissectie',
            'D) Myocardinfarct'
          ],
          exp: 'Angina pectoris door atherosclerose is zeldzaam bij gezonde sportieve jongeren onder de 40 jaar. Inspanningsgerelateerde pijn op de borst bij een jonge patiënt is vaker hyperventilatie, costochondritis of inspanningsastma.'
        },
        {
          q: 'Een CVA (beroerte) kan endocarditis veroorzaken. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'De relatie is omgekeerd: endocarditis kan een CVA veroorzaken door embolieën van geïnfecteerde thrombi van de hartklep naar de hersenen. Een CVA zelf veroorzaakt geen endocarditis.'
        },
        {
          q: 'Een patiënt met een pacemaker heeft endocarditis-profylaxe nodig voor tandheelkundige ingrepen. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Volgens de ESC-richtlijnen is een pacemaker (zonder bijkomend kleplijden of congenitale hartafwijking) GEEN indicatie voor endocarditisprofylaxe bij tandheelkundige ingrepen. Alleen specifieke hoog-risico cardiale condities zijn indicatie.'
        },
        {
          q: 'Een patiënt heeft een bloeddruk van 180/110 mmHg. Wat is het correct beleid?',
          opts: [
            'A) Elektieve behandeling uitstellen en doorsturen naar huisarts of specialist',
            'B) Behandeling voortzetten, maar bloeddruk monitoren',
            'C) Spoedindicatie: direct behandelen om stress te minimaliseren',
            'D) Geen actie nodig, dit is normaal bij een angstige patiënt'
          ],
          exp: 'BD 180/110 = graad 2 hypertensie. Elektieve tandheelkunde moet worden uitgesteld. Doorsturen naar huisarts voor instelling. Bij spoed: voorzichtig handelen en cardiale risico\'s minimaliseren.'
        },
        {
          q: 'Een patiënt met acuut reuma in de anamnese heeft altijd endocarditis-profylaxe nodig bij extracties. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Acuut reuma zonder bijkomend kleplijden is GEEN indicatie voor endocarditis-profylaxe. Alleen als acuut reuma heeft geleid tot klepafwijkingen (bijv. mitraalinsufficiëntie) is profylaxe geïndiceerd (en dan alleen bij hoog-risico kleplijden per ESC).'
        },
        {
          q: 'Aspirine zorgt voor een sterk verminderde bloedplaatjesaggregatie. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Aspirine remt COX-1 in bloedplaatjes irreversibel → verminderde thromboxaan A2-synthese → verminderde plaatjesaggregatie voor de gehele levensduur van het plaatje (7-10 dagen). Dit maakt aspirine effectief als antistolling bij cardiovasculaire preventie.'
        },
        {
          q: 'Hoe behandelt u een patiënt met stabiele angina pectoris bij de tandarts?',
          opts: [
            'A) Adrenaline beperken (max 0,04 mg per sessie) en stressminimalisatie',
            'B) Normaal adrenalinegebruik is volledig veilig',
            'C) Helemaal geen adrenaline gebruiken',
            'D) Altijd verwijzen naar het ziekenhuis'
          ],
          exp: 'Stabiele angina: adrenaline is NIET gecontraïndiceerd, maar dosis beperken tot max 0,04 mg per sessie. Stress minimaliseren (goede pijnstilling, ontspannen sfeer) vermindert endogeen adrenaline-vrijmaken, wat meer risico geeft dan exogeen in de verdoving.'
        },
        {
          q: 'Een persoon met bloedgroep A kan 2 liter bloed ontvangen van een donor met bloedgroep O. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Bloedgroep O is de universele donor voor rode bloedcellen, maar geeft ook anti-A en anti-B antistoffen in het plasma. Bij grote transfusievolumes (>1L) kunnen deze antistoffen hemolyse veroorzaken bij een ontvanger met bloedgroep A. 2L is te groot volume.'
        },
        {
          q: 'Een Adams-Stokes aanval is een syncope veroorzaakt door een impuls- of geleidingsstoornis in het hart. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Adams-Stokes aanval: plotse bewusteloosheid door tijdelijk hartblok (AV-blok) of ventrikelfibrilleren → cerebrale hypoperfusie. Geen aankondiging, snel herstel. Behandeling: pacemaker.'
        },
        {
          q: 'Perifere chemosensoren reageren op pH, pO2 en pCO2 in arterieel bloed. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Perifere chemoreceptoren (glomus caroticum, glomus aorticum) registreren pO2, pCO2 en pH in arterieel bloed. Ze zijn vooral gevoelig voor hypoxie (laag pO2). Centrale chemoreceptoren reageren primair op pCO2/pH in de liquor.'
        }
      ]
    },

    // ═══ SET 5 – Endocrinologie, Neurologie & Systeem ═══
    basis_cikmis_5: {
      title: 'Basisch-Medisch Çıkmış – Set 5: Endocrinologie, Neurologie & Systeem',
      questions: [
        {
          q: 'Ziekte van Graves: wat zijn de kenmerken?',
          opts: [
            'A) Overactieve schildklier (hyperthyreoïdie): gewichtsverlies, tachycardie, nervositeit',
            'B) Onderactieve schildklier (hypothyreoïdie): gewichtstoename, vermoeidheid, traagheid',
            'C) Intermitterende schildklieractiviteit: wisselende klachten',
            'D) Schildklier produceert te veel calcitonine'
          ],
          exp: 'Graves = auto-immuun hyperthyreoïdie (stimulerende TSH-receptor antistoffen). Symptomen: afvallen, tachycardie, tremor, exofthalmus, warmte-intolerantie, diarree. Hypothyreoïdie heeft de omgekeerde symptomen.'
        },
        {
          q: 'Stijging van de glucosespiegel stimuleert de afgifte van glucagon. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'DALING van de glucosespiegel (hypoglykemie) stimuleert glucagonafgifte vanuit de alpha-cellen van de eilandjes van Langerhans. Glucagon verhoogt de glucosespiegel (glycogenolyse, gluconeogenese). Stijging van glucose stimuleert juist INSULINE.'
        },
        {
          q: 'Parkinson-patiënten klagen vaak over een droge mond. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Veel Parkinson-patiënten gebruiken anticholinergica als medicatie (trihexifenidyl, biperideen) om tremor te verminderen. Anticholinergica remmen speekselproductie → droge mond (xerostomie). Ook de ziekte zelf kan speekselklieractiviteit beïnvloeden.'
        },
        {
          q: 'De ziekte van Parkinson heeft ook niet-motorische symptomen. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Parkinson heeft naast motorische (tremor, rigiditeit, bradykinesie, houdingsinstabiliteit) ook niet-motorische symptomen: cognitieve achteruitgang, depressie, slaapstoornis, autonome dysfunctie (orthostatische hypotensie), droge mond, en geurverlies (vroeg symptoom).'
        },
        {
          q: 'Stoornissen van het cerebellum kenmerken zich door:',
          opts: [
            'A) Coördinatiestoornissen en spraakstoornissen (dysartrie)',
            'B) Geheugenstoornissen en gedragsveranderingen',
            'C) Verlies van bewustzijn en epilepsie',
            'D) Parese en sensibiliteitsverlies'
          ],
          exp: 'Cerebellum reguleert motorische coördinatie en balans. Letsels geven: ataxie (coördinatiestoornis), dysmetrie, nystagmus, dysartrie (scanderende spraak), intentietremor. Geheugenstoornissen zijn frontaal/hippocampaal.'
        },
        {
          q: 'Myxoedeem coma treedt op bij slecht ingestelde hypothyreoïdie in combinatie met een stresssituatie en is levensgevaarlijk. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Myxoedeem coma: extreme decompensatie van ernstige hypothyreoïdie, getriggerd door infectie, koude, operatie of trauma. Mortaliteit 20-60%. Kenmerken: hypothermie, bradycardie, bewustzijnsdaling, hypoventilatie. Noodopname + IV thyroxine.'
        },
        {
          q: 'Bij osteoporose zijn de osteoblasten actiever dan de osteoclasten. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Bij osteoporose is de BOTAFBRAAK groter dan de BOTOPBOUW: osteoCLASTEN zijn relatief meer actief, osteoBLASTEN schieten tekort. Netto botmassaverlies → broze botten. Behandeling richt zich op remming van osteoclasten (bisfosfonaten).'
        },
        {
          q: 'Een oudere patiënt met parodontitis heeft waarschijnlijk diabetes mellitus type 1. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'DM type 1 ontstaat meestal op jonge leeftijd (auto-immuun vernietiging bètacellen). DM type 2 is geassocieerd met leeftijd, obesitas en insulineresistentie. Bij een oudere patiënt met paro denk je aan type 2, niet type 1.'
        },
        {
          q: 'Een diabetes type 2 patiënt gebruikt insuline-injecties. Dit betekent dat:',
          opts: [
            'A) De orale antidiabetica niet meer voldoende werkten om de glykemie te reguleren',
            'B) De patiënt type 1 diabetes heeft ontwikkeld',
            'C) De patiënt chronisch insuline-afhankelijk is geworden door een auto-immuunreactie',
            'D) Dit altijd komt door slechte therapietrouw'
          ],
          exp: 'DM type 2 is progressief. Als orale medicatie (metformine, sulfonylureum, etc.) onvoldoende is, wordt insuline toegevoegd. Dit betekent niet dat de patiënt type 1 heeft gekregen; het is een progressiestap binnen type 2.'
        },
        {
          q: 'Bij een patiënt met multipele sclerose moet u rekening houden met tremoren. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'MS kan demyelinisatie veroorzaken in cerebellaire banen → intentietremor, ataxie. Praktisch: patiënt kan moeite hebben met stilliggen, mondopening kan fluctueren. Extra voorzichtigheid bij instrumenten in de mond is aangewezen.'
        },
        {
          q: 'Bij een patiënt met reumatoïde artritis mag u het hoofd niet te ver achterover bewegen vanwege:',
          opts: [
            'A) Risico op atlantoaxiale subluxatie (dislocatie van C1-C2 nekwervels)',
            'B) Risico op verslikken door verlies van slikreflex',
            'C) Risico op flauwvallen door vasovagale reactie',
            'D) Risico op kaakgewrichtsschade'
          ],
          exp: 'RA kan het transversale ligament van de atlas aantasten → atlantoaxiale instabiliteit. Hyperextensie van het hoofd kan dan leiden tot compressie van de medulla oblongata of cervicale myelopathie. Cave bij intubatie en in de tandartsstoel.'
        },
        {
          q: 'Levercirrose is irreversibel. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Levercirrose = vervanging van levercellen door bindweefsel (fibrose). Dit proces is grotendeels irreversibel (in tegenstelling tot vroege fibrose). Behandeling richt zich op stoppen van verdere schade. Enige curatieve optie is levertransplantatie.'
        },
        {
          q: 'Van de drie takken van de nervus trigeminus heeft alleen de nervus mandibularis zowel motorische als sensibele vezels. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'N. ophthalmicus (V1) en n. maxillaris (V2) zijn puur sensibel. N. mandibularis (V3) is gemengd: sensibel (tong, tanden onderkaak, huid) én motorisch (kauwspieren: m. masseter, m. temporalis, mm. pterygoidei, m. mylohyoideus).'
        },
        {
          q: 'Na een maagbypass-operatie is er een verhoogd cariësrisico vanwege:',
          opts: [
            'B) Refluxklachten en frequente zure oprispingen die het tandglazuur aantasten',
            'A) Afname van speekselproductie door de operatie',
            'C) Verhoogde suikerconsumptie na de operatie',
            'D) Verminderde fluoride-absorptie'
          ],
          exp: 'Na gastric bypass: anatomische veranderingen leiden tot verhoogde gastro-oesofageale reflux (GERD) en frequent braken → zuur contact met gebit → erosie van tandglazuur → verhoogd cariësrisico.'
        },
        {
          q: 'Bij patiënten met coeliakie kunnen glazuurafwijkingen voorkomen. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Coeliakie (glutenintolerantie) veroorzaakt malabsorptie van calcium, vitamine D en andere mineralen tijdens de tandvorming → hypomineralisatie/hypoplasie van het glazuur. Symmetrische, chronologische glazuurafwijkingen in het blijvende gebit zijn een klassieke bevinding bij coeliakie.'
        }
      ]
    }

  };

  window.QUIZZES = Object.assign(window.QUIZZES || {}, sets);
})();
