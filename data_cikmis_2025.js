/* =================================================================
   data_cikmis_2025.js – Çıkmış Sorular 2025 (Juni & December)
   Bronnen: THK1 Juni PDF, THK2 Juni PDF, Ethiek Juni PDF,
            THK1 Dec DOCX, THK2 Dec PDF, Ethiek Dec DOCX, THK2 Dec Part2 DOCX
   opts[0] = altijd het JUISTE antwoord. quiz.js shuffelt bij weergave.
   ================================================================= */
(function(){
var sets = {

// ═══════════════════════════════════════════════
// CARIOLOGIE – JUNI 2025
// ═══════════════════════════════════════════════
cario_cikmis_2025juni: {
  title: "Cariologie Çıkmış – 2025 Juni",
  questions: [
    {q: "Wat is de definitie van Ekstrand score 4?", opts: ["Tot in de pulpa", "Halverwege het dentine", "Beginstadium glazuur", "Cavitatie in dentine"], exp: "Ekstrand score 4 = cariësslaesie reikt tot in de pulpa."},
    {q: "U ziet op een cariesfoto een knobbeltop met glazuurafbraak en onderliggend doorschemering van dentine. Het oppervlak is zwart, dof en ruw. Wat is de diagnose?", opts: ["Actieve caries", "Inactieve caries", "Erosie", "Fluorose"], exp: "Zwart/dof/ruw oppervlak + ondermijnd dentine = actieve caries."},
    {q: "Wat is de beste aanpak voor een 43 buccale gladde caviteit bedekt met plaque maar met glimmend dentine?", opts: ["Gladmaken en poetsen met fluoride tandpasta", "Prepareren en restaureren", "Afwachten en observeren", "Sealen met fissurenvernis"], exp: "Glimmend dentine = inactieve caries. Behandeling: gladmaken en fluoride toepassen, geen restauratie nodig."},
    {q: "U ziet bij element 47 distaal een wortelcaviteit met plaque en leerachtig verkleurd dentine. Wat doet u?", opts: ["Prepareren en restaureren", "Gladmaken en poetsen met fluoride tandpasta", "Afwachten", "Sealen"], exp: "Leerachtig verkleurd dentine met plaque = actieve caries. Actieve rootcaries wordt geprepareerd en gerestaureerd."},
    {q: "U heeft bij een approximale klasse II preparatie de glazuur-dentinegrens schoongemaakt. Er is 2 mm ondermijnd glazuur aanwezig. Wat doet u?", opts: ["Het ondermijnd glazuur weghalen", "Zo vullen met composiet", "Sealen", "Afwachten"], exp: "Ondermijnd glazuur heeft geen onderliggende steun en breekt snel af; het moet worden verwijderd vóór restauratie."},
    {q: "Wat is de definitie van Ekstrand score 3?", opts: ["Laesie zichtbaar zonder droogblazen, met microverlies van het glazuur", "Laesie alleen zichtbaar na droogblazen", "Cavitatie tot in dentine", "Laesie tot in de pulpa"], exp: "Ekstrand 3: laesie zichtbaar zonder droogblazen, met microcaviteit van het glazuur."},
    {q: "Wanneer bepaalt u de kleur van een tand?", opts: ["Na aanslag verwijderen, in het begin van de behandeling", "Na aanbrengen van de rubberdam", "Na het polijsten", "Aan het eind van de behandeling"], exp: "Kleur bepalen vóór de behandeling en na verwijdering van aanslag, want tanden drogen uit onder behandeling."},
    {q: "Welke uitspraak over composiet is juist?", opts: ["Composiet maximaal 2 mm per laag aanbrengen", "Meer dan 2 mm aanbrengen als lichtbron dichtbij wordt gehouden"], exp: "Composiet polymeriseert maximaal 2 mm diep; per laag maximaal 2 mm aanbrengen voor adequate uitharding."},
    {q: "Op de foto ziet u een cariëslaesie waarbij de caviteit kleiner is dan de helft van het dentine. Wat is de ICDAS-score?", opts: ["ICDAS 5", "ICDAS 4", "ICDAS 3", "ICDAS 6"], exp: "ICDAS 5 = caviteit met blootligging dentine waarbij de caviteit minder dan de helft van het dentineoppervlak beslaat."},
    {q: "Aan welk substraat hecht resin-gemodificeerd glasionomer (RMGIC) chemisch?", opts: ["Glazuur én dentine", "Alleen glazuur, niet dentine", "Alleen dentine, niet glazuur", "Geen van beide chemisch"], exp: "RMGIC hecht chemisch aan zowel glazuur als dentine via ionische binding met calciumionen."},
    {q: "Welk adhesief is het beste voor hechting aan glazuur?", opts: ["3-stap ets-en-spoel adhesief", "2-stap zelf-etsend adhesief", "1-stap zelf-etsend adhesief", "Geen adhesief nodig"], exp: "3-stap ets-en-spoel met aparte fosforzuuretsing geeft de beste hechting aan glazuur."},
    {q: "Hoe kunt u approximale caries bij element 21 het best detecteren?", opts: ["Transilluminatie (FOTI/DIFOTI)", "Bitewing röntgen", "Visueel inspecteren", "Sonde gebruik"], exp: "Voor approximale caries in het front is transilluminatie (FOTI) de beste methode naast bitewing."},
    {q: "In de PMO vindt u een approximale cariëslaesie bedekt met tandplaque. Is deze laesie actief of inactief?", opts: ["Actief", "Inactief", "Kan niet worden vastgesteld", "Afwachten en her-evalueren"], exp: "Aanwezigheid van plaque op een laesie duidt op een actieve caries."},
    {q: "Waar ziet u het meeste caries bij 12-jarigen?", opts: ["Putten en fissuren", "Approximale vlakken", "Gladde vlakken", "Cervicaal"], exp: "Bij 12-jarigen zijn putten en fissuren van (pre)molaren de meest voorkomende locatie voor caries."},
    {q: "Wat is de beste methode voor vroege detectie van approximale caries in het front?", opts: ["Bitewing röntgenopname en transilluminatie", "Alleen visuele inspectie", "Alleen sonde", "Panoramische röntgenopname"], exp: "Combinatie van bitewing en transilluminatie geeft de beste detectie van approximale caries in het front."}
  ]
},

// ═══════════════════════════════════════════════
// CARIOLOGIE – DECEMBER 2025
// ═══════════════════════════════════════════════
cario_cikmis_2025dec: {
  title: "Cariologie Çıkmış – 2025 December",
  questions: [
    {q: "Wat is de definitie van Ekstrand score 4?", opts: ["Tot in de pulpa", "Tot halverwege het dentine", "Zichtbaar na droogblazen", "Microcaviteit glazuur"], exp: "Ekstrand score 4 = cariësslaesie reikt tot in de pulpa."},
    {q: "U ziet bij element 43 buccaal een caviteit bedekt met plaque, maar het dentine is glimmend. Wat is uw diagnose en behandeling?", opts: ["Inactieve caries; gladmaken en poetsen met fluoride tandpasta", "Actieve caries; prepareren en restaureren", "Actieve caries; sealen", "Inactieve caries; afwachten"], exp: "Glimmend dentine onder plaque = inactieve caries. Behandeling: gladmaken en fluoride applicatie."},
    {q: "Element 47 distaal heeft een wortelcaviteit met plaque en leerachtig verkleurd dentine. Wat doet u?", opts: ["Prepareren en restaureren", "Gladmaken en poetsen met fluoride tandpasta", "Sealen met glasionomer", "Afwachten en her-evalueren"], exp: "Leerachtig verkleurd dentine = actieve caries. Actieve rootcaries wordt geprepareerd en gerestaureerd."},
    {q: "Wat is de definitie van Ekstrand score 3?", opts: ["Laesie zichtbaar zonder droogblazen, met microverlies van het glazuur", "Laesie zichtbaar na droogblazen, geen caviteit", "Cavitatie tot halverwege dentine", "Laesie tot in pulpa"], exp: "Ekstrand 3: laesie zichtbaar zonder droogblazen met microcaviteit (microverlies van het glazuur)."},
    {q: "Wanneer bepaalt u de kleur van een tand?", opts: ["In het begin van de behandeling, na verwijdering van aanslag", "Na aanbrengen van de rubberdam", "Na polijsten van het oppervlak", "Aan het eind van de behandeling"], exp: "Kleur bepalen vóór de behandeling en na verwijdering van aanslag, want tanden drogen uit tijdens behandeling."},
    {q: "Welke uitspraak over composiet is juist?", opts: ["Composiet maximaal 2 mm per laag aanbrengen", "Meer dan 2 mm als lichtbron dichtbij gehouden wordt"], exp: "Per laag maximaal 2 mm composiet aanbrengen voor adequate polymerisatie."},
    {q: "Wat is de ICDAS-score op een foto waarbij de caviteit minder dan de helft van het dentineoppervlak beslaat?", opts: ["ICDAS 5", "ICDAS 4", "ICDAS 3", "ICDAS 6"], exp: "ICDAS 5 = caviteit met blootligging dentine, kleiner dan de helft van het dentineoppervlak."},
    {q: "Aan welk substraat hecht resin-gemodificeerd glasionomer (RMGIC) chemisch?", opts: ["Glazuur én dentine", "Alleen glazuur", "Alleen dentine", "Geen chemische hechting"], exp: "RMGIC hecht chemisch via ionische binding aan zowel glazuur als dentine."},
    {q: "Welk adhesief geeft de beste hechting aan glazuur?", opts: ["3-stap ets-en-spoel adhesief", "2-stap zelf-etsend adhesief", "1-stap universeel adhesief", "RMGIC zelfhechtend"], exp: "3-stap ets-en-spoel geeft de beste hechting aan glazuur door separate fosforzuuretsing."},
    {q: "Hoe detecteert u het best approximale caries bij element 21?", opts: ["Transilluminatie (FOTI)", "Bitewing röntgen", "Visuele inspectie", "Sondering"], exp: "FOTI/transilluminatie is bijzonder geschikt voor approximale caries detectie in het front."},
    {q: "Waar ziet u het meeste caries bij 12-jarigen?", opts: ["Putten en fissuren", "Approximale vlakken", "Gladde vlakken", "Cervicale vlakken"], exp: "Bij 12-jarigen zijn putten en fissuren de meest voorkomende locatie voor caries."},
    {q: "In de PMO vindt u een cariëslaesie bedekt met plaque. Is deze actief of inactief?", opts: ["Actief", "Inactief", "Kan niet worden bepaald", "Afhankelijk van de diepte"], exp: "Plaquebedekte laesie in de PMO = actieve caries."},
    {q: "Wat is het maximale PMO-interval bij een patiënt met initiële wortelcaries?", opts: ["3 maanden", "6 maanden", "12 maanden", "Geen PMO nodig"], exp: "Bij initiele wortelcaries wordt het PMO-interval verkort naar maximaal 3 maanden."},
    {q: "Wat is de ICDAS score 3 definitie?", opts: ["Laesie zichtbaar na droogblazen met microverlies van het glazuur", "Laesie zichtbaar zonder droogblazen", "Cavitatie tot in dentine", "Glazuurverkleuring zonder caviteit"], exp: "ICDAS 3: laesie zichtbaar na droogblazen met microcaviteit, beperkt tot glazuur."},
    {q: "Foto: caries in de PMO bedekt met plaque. Het dentine is leerachtig verkleurd. Wat is de activiteitsstatus?", opts: ["Actief", "Inactief", "Gestopt", "Afhankelijk van de kleur"], exp: "Leerachtig verkleurd dentine met plaque = actieve caries die behandeling vereist."}
  ]
},

// ═══════════════════════════════════════════════
// ENDODONTOLOGIE – JUNI 2025
// ═══════════════════════════════════════════════
endo_cikmis_2025juni: {
  title: "Endodontologie Çıkmış – 2025 Juni",
  questions: [
    {q: "Welke uitspraak over stiften is het meest juist?", opts: ["Als resterende 3 dentinewanden voldoende retentie geven, is een stift niet nodig", "Metalen stiften hechten beter aan worteldentine dan vezels", "Een stift is altijd nodig na WKB", "Stiften versterken altijd de tandwortel"], exp: "Bij voldoende resterende tandstructuur (3 wanden) is een stift niet nodig. Stiften geven retentie, geen versterking."},
    {q: "Hoelang duurt heftige napijn na een wortelkanaalbehandeling doorgaans?", opts: ["3-5 dagen", "1 week", "2 weken", "1 dag"], exp: "Hevige post-endodontische pijn duurt doorgaans 3-5 dagen; persisterende pijn na 1 week vereist evaluatie."},
    {q: "Wat bestaat een apicaal litteken na WKB histologisch uit?", opts: ["Bindweefsel", "Botweefsel", "Granulomateus weefsel", "Cysteus weefsel"], exp: "Een apicaal litteken (scar) bestaat uit fibrotisch bindweefsel; het is een normale uitkomst en geen pathologie."},
    {q: "Wat is het voordeel van langzaam uithardend kanaalcement?", opts: ["Langere werktijd", "Minder krimp", "Betere hechting aan dentine", "Gemakkelijker te verwijderen"], exp: "Langzaam uithardend kanaalcement geeft de behandelaar meer werktijd voor de obturatie."},
    {q: "Waarom is een K-Flex file flexibeler dan een standaard K-vijl?", opts: ["K-Flex heeft een diamantvormige doorsnede (i.p.v. vierkant)", "K-Flex is gemaakt van nikkel-titanium", "K-Flex is dunner dan een K-vijl", "K-Flex heeft een grotere taper"], exp: "K-Flex vijl heeft een ruitvormige (diamant) dwarsdoorsnede in plaats van vierkant, wat meer flexibiliteit geeft."},
    {q: "Wat is het nadeel van glasionomercement als wortelkanaalcement?", opts: ["Moeilijk te verwijderen bij herbehandeling", "Slechte afdichting", "Korte werktijd", "Niet biocompatibel"], exp: "Glasionomercement als sealant hecht sterk en is moeilijk te verwijderen bij herbehandeling."},
    {q: "Welke uitspraak over crown-down preparatie is het meest juist?", opts: ["Crown-down preparatie helpt vijlbreuk te voorkomen", "Als een afgebroken file niet verwijderd wordt, is het succespercentage 20%"], exp: "Crown-down methode vermindert spanning op de vijl en voorkomt breuk. Afgebroken vijl heeft niet standaard 20% succes."},
    {q: "Bij welk gebitselement komt een C-vormig kanaal het meest voor?", opts: ["Ondermolaar (36/46)", "Bovenmolaar", "Onderhoektand", "Bovenincisief"], exp: "C-vormige kanalen komen het vaakst voor in de ondermolaren, met name 36 en 46."},
    {q: "Wat is het nadeel van natriumhypochloriet (NaOCl) als irrigatievloeistof?", opts: ["Kortdurend antibacterieel effect, beschadigt kanaaldentine bij hoge concentraties", "Te weinig weefseloplossend vermogen", "Werkt niet tegen gramnegatieve bacteriën", "Geen nadelen"], exp: "NaOCl heeft een kortdurend effect en kan bij hoge concentraties kanaaldentine beschadigen en aanhechting verminderen."},
    {q: "Waarom gebruiken we een rubberdam bij WKB?", opts: ["Voor asepsis en voorkomen dat bacteriën uit de mond in het kanaal komen", "Alleen voor het comfort van de patiënt", "Om speeksel te absorberen", "Om bloeding te stoppen"], exp: "Rubberdam is essentieel voor asepsis: voorkomt contaminatie van wortelkanaal met orale flora."},
    {q: "Een kies met MOD-restauratie ondergaat een WKB. Wat doet u na de WKB?", opts: ["Alle knobbels overkappen met een kroon", "Oude vulling vervangen met nieuw composiet", "Afwachten en observeren", "Endokroon plaatsen"], exp: "Na WKB van een kies met MOD: alle knobbels overkappen ter preventie van fractuur."},
    {q: "Bij welk gebitselement komen 2 wortelkanalen het meest voor?", opts: ["Onderhoektand (33/43)", "Bovenhoektand (13/23)", "Bovencuspidaat", "Onderpremolaar"], exp: "Onderhoektanden (cuspidaten) hebben in 15-30% van de gevallen 2 kanalen."},
    {q: "Wat is de beste bewaarmethode voor een geëvulste tand?", opts: ["In melk bewaren", "In de mondbodem bewaren", "In water bewaren", "Droog bewaren in een zakdoek"], exp: "Melk is de beste bewaaroplossing voor een geëvulste tand: fysiologische osmolariteit, antibacterieel."},
    {q: "Hoe differentieert u het best een endo- van een paro-laesie?", opts: ["Vitaliteits-/sensibiliteitstest", "Percussietest", "Röntgenfoto", "Pocketmeting"], exp: "Sensibiliteitstest is de belangrijkste differentiatiemethode: endo-laesie = avitaal; paro-laesie = vitaal."},
    {q: "Een 8-jarig kind komt 3 dagen na een gecompliceerde kroonfractuur van 11. Welke behandeling past u toe?", opts: ["Pulpotomie", "Pulpectomie", "Direct capping", "Afwachten"], exp: "3 dagen na gecompliceerde kroonfractuur bij een 8-jarige: pulpotomie (Cvek) om vitale pulpa te behouden."}
  ]
},

// ═══════════════════════════════════════════════
// ENDODONTOLOGIE – DECEMBER 2025
// ═══════════════════════════════════════════════
endo_cikmis_2025dec: {
  title: "Endodontologie Çıkmış – 2025 December",
  questions: [
    {q: "Welke uitspraak over stiften is het meest juist?", opts: ["Als resterende 3 dentinewanden voldoende retentie geven, is een stift niet nodig", "Metalen stiften hechten beter aan worteldentine", "Een stift is altijd nodig na WKB", "Stiften versterken de tandwortel"], exp: "Stift is niet nodig bij voldoende resterende tandstructuur (3 dentinewanden)."},
    {q: "Wat is de incidentie van heftige napijn na WKB bij een necrotische pulpa?", opts: ["3-5%", "20-40%", "10-15%", "50%"], exp: "Na WKB van een necrotische pulpa is de kans op heftige napijn 3-5%."},
    {q: "Hoelang duurt heftige napijn na WKB doorgaans?", opts: ["3-5 dagen", "1 week", "2 weken", "1-2 dagen"], exp: "Hevige post-endodontische pijn duurt doorgaans 3-5 dagen."},
    {q: "Wat bestaat een apicaal litteken histologisch uit?", opts: ["Bindweefsel", "Botweefsel", "Granulomateus weefsel", "Epitheliaal weefsel"], exp: "Apicaal litteken = fibrotisch bindweefsel (scar tissue); geen pathologie."},
    {q: "Wat is het voordeel van langzaam uithardend kanaalcement?", opts: ["Langere werktijd", "Minder krimp", "Betere antibacteriële werking", "Gemakkelijker verwijderbaar"], exp: "Langere werktijd is het belangrijkste voordeel van langzaam uithardend kanaalcement."},
    {q: "Waarom is de K-Flex file flexibeler dan een standaard K-vijl?", opts: ["Diamantvormige doorsnede in plaats van vierkant", "Gemaakt van nikkel-titanium", "Grotere taper", "Kleinere diameter"], exp: "K-Flex vijl heeft een ruitvormige dwarsdoorsnede, waardoor meer flexibiliteit."},
    {q: "Wat is het nadeel van glasionomer als wortelkanaalcement?", opts: ["Moeilijk te verwijderen bij herbehandeling", "Slechte afdichting", "Niet biocompatibel", "Korte werktijd"], exp: "Glasionomer hecht sterk aan dentine en is daardoor moeilijk te verwijderen bij retreatment."},
    {q: "Welke uitspraak over crown-down preparatie is juist?", opts: ["Crown-down preparatie helpt vijlbreuk te voorkomen", "Als een afgebroken file niet verwijderd is, is het succespercentage 20%"], exp: "Crown-down methode reduceert torsie op de vijl en voorkomt breuk."},
    {q: "Wat voorkomt vijlbreuk het beste?", opts: ["Goede toegangsholte maken (crown-down)", "Gebruik van stalen vijlen", "Irrigatie met NaOCl", "Handvijlen gebruiken"], exp: "Een adequate toegangsholte en crown-down techniek zijn de beste preventie van vijlbreuk."},
    {q: "Een kies heeft MOD-restauratie en ondergaat WKB. Wat doet u na de WKB?", opts: ["Alle knobbels overkappen", "Oude vulling vervangen", "Afwachten", "Endokroon plaatsen"], exp: "Na WKB bij MOD-kies: alle knobbels overkappen om fractuur te voorkomen."},
    {q: "Bij welke cuspidaat komen 2 kanalen het meest voor?", opts: ["Onderhoektand (cuspidaat)", "Bovenhoektand (cuspidaat)", "Boven- en ondercuspidaat gelijk", "Premolaar"], exp: "Onderhoektanden hebben in 15-30% van de gevallen 2 wortelkanalen."},
    {q: "Waarvoor geeft een stift retentie of resistentie?", opts: ["Retentie", "Resistentie", "Beide gelijk", "Geen van beide"], exp: "Een stift geeft primair retentie aan de kern; resistentie (breukweerstand) wordt gegeven door de resterende tandstructuur."},
    {q: "Bij een geëvulste tand met volledig gevormde apex, wat doet u?", opts: ["Binnen 7-14 dagen een WKB starten", "Afwachten voor revascularisatie", "Direct WKB uitvoeren op de dag van reimplantatie", "Tand niet reimplanteerden"], exp: "Volledig gevormde apex: WKB starten 7-14 dagen na reimplantatie om resorptie te voorkomen."},
    {q: "Hoe differentieert u een endo-laesie van een paro-laesie?", opts: ["Vitaliteits-/sensibiliteitstest", "Percussietest", "Röntgenfoto", "Pocketmeting"], exp: "Sensibiliteitstest is de sleutel: endo-laesie = avitaal; paro-laesie = vitaal."},
    {q: "Een 8-jarig kind komt 3 dagen na een gecompliceerde kroonfractuur van 11. Welke behandeling?", opts: ["Pulpotomie", "Pulpectomie", "Direct capping", "Extractie"], exp: "Pulpotomie (Cvek-methode) is de behandeling van keuze bij een open apex en vitale pulpa na 3 dagen."}
  ]
},

// ═══════════════════════════════════════════════
// PARODONTOLOGIE – JUNI 2025
// ═══════════════════════════════════════════════
paro_cikmis_2025juni: {
  title: "Parodontologie Çıkmış – 2025 Juni",
  questions: [
    {q: "PPS-code 3 komt overeen met een pocketdiepte van:", opts: ["Meer dan 4 mm", "Meer dan 6 mm", "3-4 mm", "Meer dan 7 mm"], exp: "PPS code 3 = pocketdiepte 4-6 mm (meer dan 3,5 mm tot en met 5,5 mm); bij twijfel: >4 mm."},
    {q: "Wanneer geeft u antibiotica bij parodontale behandeling?", opts: ["Als de pockets niet reageren ondanks goede mondhygiëne", "Als de patiënt rookt", "Altijd bij parodontitis stadium III", "Nooit bij paro-behandeling"], exp: "Antibiotica bij paro: als pockets niet reageren op initiële behandeling ondanks adequate mondhygiëne (stadium III/IV graad C)."},
    {q: "U besluit antibioticum te geven tijdens de initiële parodontale behandeling. Wat is het beste spoelmiddel als aanvulling?", opts: ["Chloorhexidine (CHX)", "H2O2", "NaOCl", "Fysiologisch zout"], exp: "CHX is het meest bewezen spoelmiddel bij paro-behandeling; werkt antibacterieel en vermindert gingivale ontsteking."},
    {q: "Wat is de beste behandeling voor halitose?", opts: ["Tongscraper + mondwater", "Alleen mondwater", "Alleen flossen", "Antibiotica"], exp: "Combinatie van tongscraper en CHX-mondwater is effectiever voor halitose dan mondwater alleen."},
    {q: "Is het juist dat bij een plaquescore van 20% geen mondhygiëne-instructies nodig zijn tijdens de initiële behandeling?", opts: ["Onjuist", "Juist"], exp: "Onjuist. Mondhygiëne-instructies zijn altijd onderdeel van de initiële paro-behandeling, ongeacht de plaquescore."},
    {q: "Een 16-jarig meisje heeft veel pijnklachten, vieze smaak en geur, recessies en losse ondertanden. Wat is de diagnose?", opts: ["ANUP (Acute Necrotiserende Ulceratieve Parodontitis)", "ANUG (Acute Necrotiserende Ulceratieve Gingivitis)", "Agressieve parodontitis", "Paro-abces"], exp: "ANUP = ANUG + botverlies + losse tanden + recessies. Bij 16-jarige met losse tanden: ANUP."},
    {q: "Wat is de bekende bijwerking van chloorhexidine op de speekselklieren?", opts: ["Zwelling van de glandula parotis", "Droge mond", "Verhoogde speekselsecretie", "Sialadenitis"], exp: "CHX kan parotiszwelling veroorzaken als bijwerking, naast tandbevlekking en smaakverandering."},
    {q: "Een pocket van 10 mm wordt na initiële behandeling teruggebracht naar 6 mm. Is dit voldoende?", opts: ["Voldoende (10/2 = 5 + 1 = 6 mm is acceptabel)", "Onvoldoende, want restpocket > 6 mm", "Afhankelijk van de locatie", "Altijd verwijzen naar specialist"], exp: "Formule: diepste pocket gedeeld door 2 + 1 mm = verwachte verbetering. 10 mm → verwacht 6 mm: voldoende resultaat."},
    {q: "Bij welke pocket verwacht u meer aanhechtingswinst?", opts: ["Elemento 13b pocket van 10 mm", "Elemento 26mp pocket van 6 mm", "Beide gelijk", "Diepe pockets geven minder winst"], exp: "Diepere pockets (10 mm) tonen meer absolute aanhechtingswinst na behandeling dan ondiepe pockets (6 mm)."},
    {q: "Wat vermindert bij rokers na paro-behandeling (Salzer 2015)?", opts: ["Bloeding (BOP)", "Plaque en bloeding", "Pocketdiepte", "Botverlies"], exp: "Salzer et al. 2015: bij rokers vermindert na behandeling voornamelijk de bloeding, minder effect op plaque."},
    {q: "Vanaf welke leeftijd wordt PPS uitgevoerd?", opts: ["Vanaf 18 jaar (onjuist dat het vanaf 12 jaar is)", "Vanaf 12 jaar", "Vanaf 21 jaar", "Vanaf 15 jaar"], exp: "PPS wordt aanbevolen vanaf 18 jaar; de bewering dat het vanaf 12 jaar is, is onjuist."},
    {q: "Welk element heeft geen wortelgroef die furcatie-problemen geeft, element 45 of 24?", opts: ["Element 45", "Element 24", "Beide hebben geen wortelgroef", "Beide hebben een wortelgroef"], exp: "Element 45 (onderpremolaar) heeft geen furcatie. Element 24 (bovenpremolaar) heeft 2 wortels maar geen grove wortelgroef."},
    {q: "Wat is het meest voorkomende probleem na tunneloperatie van graad 3 furcaties?", opts: ["Caries in de furcatie", "Wortelresorptie", "Peri-implantitis", "Pocketrecidief"], exp: "Na tunneloperatie voor graad 3 furcaties is caries in de furcatie het meest voorkomende probleem."},
    {q: "Wat meet de pocketdiepte?", opts: ["Afstand van de gingivarand tot het diepste punt van het pocketepitheel", "Afstand van de gingivarand tot het bot", "Aanhechtingsverlies", "CEJ tot botrand"], exp: "Pocketdiepte = afstand van de vrije gingivarand tot het diepste punt van de sulcus/pocket."},
    {q: "Waarom heeft een rokende patiënt verhoogd risico op caries, parodontitis en droge mond?", opts: ["Roken vermindert de speekselsecretie", "Roken verhoogt de hoeveelheid bacteriën", "Roken verlaagt de immuniteit", "Roken verhoogt de suikersinname"], exp: "Roken vermindert de speekselsecretie, waardoor minder bescherming tegen caries en paro, en meer droge mond."}
  ]
},

// ═══════════════════════════════════════════════
// PARODONTOLOGIE – DECEMBER 2025
// ═══════════════════════════════════════════════
paro_cikmis_2025dec: {
  title: "Parodontologie Çıkmış – 2025 December",
  questions: [
    {q: "PPS-code 3 correspondeert met een pocketdiepte van:", opts: ["Meer dan 4 mm", "Meer dan 6 mm", "2-3 mm", "Minder dan 3 mm"], exp: "PPS code 3 = pocketdiepte 4-6 mm (>3,5 mm t/m 5,5 mm)."},
    {q: "Wanneer is antibiotica bij paro-behandeling geïndiceerd?", opts: ["Als pockets niet reageren ondanks goede mondhygiëne", "Als de patiënt rookt", "Altijd bij Stadium III", "Nooit"], exp: "Antibiotica bij persistente pockets ondanks adequate mondhygiëne en initiële behandeling."},
    {q: "Welk spoelmiddel gebruik je bij antibiotica en paro-behandeling?", opts: ["Chloorhexidine (CHX)", "H2O2 en CHX samen", "NaOCl", "Fysiologisch zout"], exp: "CHX is het bewezen aanvullend spoelmiddel bij paro-behandeling met antibiotica."},
    {q: "Een 16-jarig meisje heeft pijnklachten, vieze smaak, recessies en losse tanden. Diagnose?", opts: ["ANUP (Acute Necrotiserende Ulceratieve Parodontitis)", "ANUG", "Chronische parodontitis", "Paro-abces"], exp: "ANUP = ANUG + botverlies + losse tanden + recessies bij jongere patiënt."},
    {q: "Bekende bijwerking van CHX op de speekselklieren?", opts: ["Zwelling van de glandula parotis", "Droge mond", "Verhoogde secretie", "Sialadenitis"], exp: "CHX kan parotiszwelling veroorzaken naast tandbevlekking."},
    {q: "Pocket van 10 mm bij element 22 wordt na behandeling 6 mm. Is dit voldoende?", opts: ["Voldoende", "Onvoldoende, restpocket > 6 mm", "Afhankelijk van locatie", "Altijd verwijzen"], exp: "10 mm pocket: verwachte uitkomst 6 mm (10/2 + 1). Dit is voldoende behandelresultaat."},
    {q: "Wat vermindert bij rokers na paro-behandeling (Salzer 2015)?", opts: ["Bloeding (BOP)", "Plaque en bloeding samen", "Alleen pocketdiepte", "Botverlies"], exp: "Salzer 2015: bij rokers vermindert na behandeling voornamelijk de bloeding."},
    {q: "Is PPS starten vanaf 18 jaar juist?", opts: ["Onjuist (PPS start al vroeger)", "Juist", "Alleen bij hoog risico", "Alleen na tandartsbezoek"], exp: "Onjuist. PPS wordt aanbevolen voor alle patiënten, ook jongere. De bewering dat het alleen vanaf 18 jaar geldt is onjuist."},
    {q: "Heeft element 45 een wortelgroef die paro-problemen geeft?", opts: ["Nee, element 45 heeft geen wortelgroef", "Ja, sterke wortelgroef", "Alleen bij parodontitis", "Afhankelijk van de patiënt"], exp: "Element 45 (onderpremolaar) heeft geen furcatie en geen significante wortelgroef."},
    {q: "Meest voorkomend probleem na tunnel van graad 3 furcaties?", opts: ["Caries", "Wortelresorptie", "Abces", "Pocketrecidief"], exp: "Caries in de furcatie is het meest voorkomende probleem na tunneloperatie."},
    {q: "Wat meet de pocketdiepte precies?", opts: ["Gingivarand tot diepste punt van het pocketepitheel", "Gingivarand tot het bot", "CEJ tot gingivarand", "Aanhechtingsverlies"], exp: "Pocketdiepte = afstand van vrije gingivarand tot bodem van de pocket (diepste punt epitheel)."},
    {q: "Wat is de oorzaak van het verhoogde paro-risico bij rokers?", opts: ["Verminderde speekselsecretie en slechtere doorbloeding", "Meer bacteriesoorten", "Betere mondhygiëne door droge mond", "Verhoogd immuunsysteem"], exp: "Roken veroorzaakt vasoconstrictie, verminderde speekselsecretie en onderdrukt de immuunrespons."},
    {q: "Wat is de definitie van parodontitis (aanhechtingsverlies)?", opts: ["Approximaal aanhechtingsverlies ≥2 mm + gingivale recessie of pocket ≥7 mm", "Pocket > 3 mm", "Botverlies op röntgen", "Bloeding na sonderen"], exp: "Parodontitis = approximaal aanhechtingsverlies ≥2 mm met gingivale recessie of pockets ≥7 mm."},
    {q: "Wanneer is er radiologisch botverlies bij parodontitis?", opts: ["Als afstand bot tot glazuur-cementgrens meer dan 1-2 mm is", "Altijd zichtbaar op röntgen", "Alleen bij graad C", "Nooit radiologisch zichtbaar"], exp: "Botverlies is radiologisch zichtbaar als de afstand van bot tot de glazuur-cementgrens meer dan 1-2 mm bedraagt."},
    {q: "Is een plaquescore van 20% reden om geen MH-instructies te geven?", opts: ["Onjuist", "Juist"], exp: "Onjuist. MH-instructies zijn altijd onderdeel van de initiële behandeling, ook bij lage plaquescore."}
  ]
},

// ═══════════════════════════════════════════════
// KINDERTANDHEELKUNDE (PEDO) – JUNI 2025
// ═══════════════════════════════════════════════
pedo_cikmis_2025juni: {
  title: "Kindertandheelkunde Çıkmış – 2025 Juni",
  questions: [
    {q: "Een 11-jarig kind is ernstig angstig voor de tandarts. Wat is de meest waarschijnlijke verklaring?", opts: ["Een slechte vroegere ervaring bij de tandarts", "Angst past bij het leeftijdspatroon van 11 jaar", "Aangeboren angststoornis", "Ouderlijk gedrag"], exp: "Bij een 11-jarig kind is een slechte eerdere ervaring de meest voorkomende oorzaak van tandartsvrees."},
    {q: "Welke van de volgende is een voorbeeld van een copingstrategie?", opts: ["Huilen", "Ziek melden (vermijden)", "Dappere houding", "Samenwerken"], exp: "Huilen is een actieve copingrespons bij kinderen; ziek melden is vermijdend coping."},
    {q: "Wat is conditionering in de tandheelkundige context?", opts: ["Het aanleren van gewenst gedrag door systematische blootstelling", "Wennen aan nieuwe situaties", "Ontspanningstechnieken toepassen", "Afleidingstechnieken gebruiken"], exp: "Conditionering = systematisch aanleren van gewenst gedrag via positieve bekrachtiging (operante conditionering)."},
    {q: "Welke uitspraak is juist over vroeg tandartsbezoek?", opts: ["Als het kind na de eruptie van de eerste melktand naar de tandarts gaat, heeft het betere mondhygiëne dan bij een eerste bezoek op 4 jaar", "Een eerste bezoek op 4 jaar is vroeg genoeg", "Het maakt geen verschil wanneer het eerste bezoek plaatsvindt", "Later beginnen geeft minder angst"], exp: "Vroeg tandartsbezoek (bij eerste melktand) leidt tot betere mondhygiënegewoonten en minder angst."},
    {q: "Een 7-jarig kind kan zelf poetsen, maar ouders zijn verantwoordelijk. Klopt dit?", opts: ["Onjuist", "Juist"], exp: "Onjuist. Ouders zijn verantwoordelijk voor het (mee)poetsen tot minimaal 10 jaar; een 7-jarige kan niet zelfstandig voldoende poetsen."},
    {q: "Welke definitie hoort bij een angststoornis?", opts: ["Excessieve angst voor een bepaalde situatie die de persoon dwingt te vermijden en sociale problemen veroorzaakt", "Angst die past bij de leeftijd", "Tijdelijke angst voor onbekende situaties", "Angst alleen bij de tandarts"], exp: "Angststoornis = excessieve, niet-proportionele angst voor een situatie die de dagelijkse levensfunctionering beperkt."},
    {q: "Hoeveel keer per jaar wordt zilverdiaminefluoride (ZDF/SDF) aanbevolen?", opts: ["2 keer per jaar", "5 keer per jaar", "1 keer per jaar", "Elke 3 maanden"], exp: "SDF wordt doorgaans 2x per jaar aangebracht voor cariesarrest bij kinderen."},
    {q: "Is pijnervaring subjectief en verschilt het tussen mensen?", opts: ["Juist", "Onjuist"], exp: "Pijnervaring is subjectief: afhankelijk van angst, eerdere ervaringen, cultuur en persoonlijkheid."},
    {q: "Waar ziet u het meeste caries bij 12-jarigen?", opts: ["Putten en fissuren van molaren en premolaren", "Approximale vlakken", "Gladde vlakken", "Cervicale vlakken"], exp: "Bij 12-jarigen zijn putten en fissuren de meest voorkomende locatie voor caries."},
    {q: "Een kind heeft meerdere approximale cariës en de ouders kunnen niet goed poetsen. Wat doet u?", opts: ["Hall-kroon plaatsen", "Patient doorverwijzen naar pedodontoloog als enige optie", "Composietrestauraties plaatsen", "Fluoride lakken"], exp: "Hall-kroon is een evidence-based behandeloptie bij approximale caries bij kinderen met slechte mondhygiëne."}
  ]
},

// ═══════════════════════════════════════════════
// KINDERTANDHEELKUNDE (PEDO) – DECEMBER 2025
// ═══════════════════════════════════════════════
pedo_cikmis_2025dec: {
  title: "Kindertandheelkunde Çıkmış – 2025 December",
  questions: [
    {q: "Een 11-jarig kind is ernstig angstig. Wat is de waarschijnlijkste oorzaak?", opts: ["Een slechte vroegere tandartservaring", "Angst past bij het leeftijdspatroon van 11 jaar", "Erfelijke angststoornis", "Schoolstress"], exp: "Bij 11-jarige is een slechte eerdere tandartservaring de meest voorkomende oorzaak van tandartsvrees."},
    {q: "Welke is een copingrespons bij kinderen?", opts: ["Huilen", "Ziek melden", "Vluchten", "Schreeuwen"], exp: "Huilen is een emotionele copingrespons; ziek melden is een vermijdende strategie."},
    {q: "U geeft een kind fluoride als preventieve maatregel. Is dit ook geïndiceerd bij hoog risico?", opts: ["Ja, bij hoog risico is het de aanbeveling voor de populatie", "Nee, alleen bij laag risico", "Alleen bij volwassenen", "Alleen bij melktanden"], exp: "Fluoride applicatie is extra geïndiceerd bij hoog cariesrisico; het is een doelgroepgerichte preventieve maatregel."},
    {q: "Welke uitspraak over vroeg tandartsbezoek is juist?", opts: ["Als het kind na eruptie van de eerste melktand naar de tandarts gaat, heeft het betere mondhygiëne dan bij eerste bezoek op 4 jaar", "Een eerste bezoek op 4 jaar is vroeg genoeg", "Het tijdstip maakt niet uit", "Later beginnen is beter"], exp: "Vroeg tandartsbezoek (bij eerste melktand) bevordert positief mondgezondheidsgedrag."},
    {q: "Is een 7-jarig kind verantwoordelijk voor het eigen poetsen?", opts: ["Onjuist, ouders zijn verantwoordelijk", "Juist, een 7-jarige kan zelfstandig poetsen", "Afhankelijk van het kind", "Alleen bij goede motoriek"], exp: "Onjuist. Ouders blijven verantwoordelijk voor het (mee)poetsen tot minimaal 10 jaar."},
    {q: "Welke definitie past bij een angststoornis?", opts: ["Excessieve angst voor een bepaalde situatie die sociale problemen veroorzaakt en vermijding afdwingt", "Tijdelijke angst voor onbekende situaties", "Angst die past bij de leeftijd", "Angst alleen bij de tandarts"], exp: "Angststoornis = excessieve, vermijdende angst die het dagelijks functioneren belemmert."},
    {q: "Hoe vaak per jaar wordt SDF (zilverdiaminefluoride) aanbevolen?", opts: ["2 keer per jaar", "5 keer per jaar", "1 keer per jaar", "Elke maand"], exp: "SDF wordt 2x per jaar aanbevolen voor cariesarrest bij kinderen."},
    {q: "Waar ziet u het meeste caries bij 12-jarigen?", opts: ["Putten en fissuren", "Approximale vlakken", "Gladde vlakken", "Cervicale vlakken"], exp: "Putten en fissuren zijn de meest caries-gevoelige locaties bij 12-jarigen."},
    {q: "Een kind heeft approximale caries en ouders poetsen onvoldoende. Wat doet u?", opts: ["Hall-kroon plaatsen", "Alleen doorverwijzen naar pedodontoloog", "Composiet vulling", "Fluoride lak"], exp: "Hall-kroon is evidence-based bij approximale caries bij kinderen met slechte mondhygiëne."},
    {q: "Is pijnervaring subjectief en verschilt het per persoon?", opts: ["Juist", "Onjuist"], exp: "Pijnervaring is subjectief: beïnvloed door angst, cultuur, eerdere ervaringen en persoonlijkheid."}
  ]
},

// ═══════════════════════════════════════════════
// SPEEKSEL & ORALE BIOLOGIE – JUNI 2025
// ═══════════════════════════════════════════════
speeksel_cikmis_2025juni: {
  title: "Speeksel & Orale Biologie Çıkmış – 2025 Juni",
  questions: [
    {q: "Xerostomie is hetzelfde als verhoogde speekselsecretie. Juist of onjuist?", opts: ["Onjuist", "Juist"], exp: "Onjuist. Xerostomie = droge mondklacht; het is juist geassocieerd met verminderde (niet verhoogde) speekselproductie."},
    {q: "Een gezonde vrouw met goede mondhygiëne en geen caries klaagt over halitose. Wat is de meest waarschijnlijke oorzaak?", opts: ["Anaerobe bacteriën op de achterkant van de tong", "Droge mond (xerostomie)", "Slechte mondhygiëne", "Parodontitis"], exp: "De meest voorkomende oorzaak van intraorele halitose bij gezonde patiënten: anaerobe bacteriën dorsaal op de tong."},
    {q: "Wat is een bijwerking van chloorhexidine op de speekselklieren?", opts: ["Zwelling van de glandula parotis", "Dikker speeksel", "Droge mond", "Verhoogde speekselproductie"], exp: "CHX kan parotiszwelling veroorzaken als bijwerking."},
    {q: "Wat is de bijdrage van de glandula parotis aan de speekselsecretie op volgorde van laag naar hoog?", opts: ["Slaap < rust < kauwen (gestimuleerd)", "Kauwen < rust < slaap", "Rust < slaap < kauwen", "Slaap = rust < kauwen"], exp: "Parotis-bijdrage: laagst tijdens slaap, iets meer in rust, hoogst tijdens kauwen (gestimuleerde secretie)."},
    {q: "Welke speekselklier produceert het meest de speekselstenen (sialolithiasis)?", opts: ["Glandula submandibularis", "Glandula parotis", "Glandulae sublingualis", "Kleine speekselklieren"], exp: "Glandula submandibularis: meest stijgend en langzaam vloeiend speeksel → meest gevoelig voor speekselstenen."},
    {q: "Is hyposialie door medicatiegebruik een bekend fenomeen?", opts: ["Juist", "Onjuist"], exp: "Juist. Meer dan 400 medicamenten kunnen hyposialie veroorzaken (o.a. antihypertensiva, antidepressiva, antihistaminica)."},
    {q: "Gestimuleerd speeksel heeft een lagere pH en lagere buffercapaciteit dan onstimuleerd. Juist of onjuist?", opts: ["Onjuist", "Juist"], exp: "Onjuist. Gestimuleerd speeksel heeft een HOGERE pH en HOGERE buffercapaciteit dan onstimuleerd speeksel."},
    {q: "Halitose wordt veroorzaakt door vluchtige zwavelhoudende verbindingen (methylmercaptaan + waterstofdioxide). Juist?", opts: ["Juist", "Onjuist"], exp: "Juist. Halitose: VSCs (volatile sulfur compounds) = methylmercaptaan (CH3SH) + waterstofsulfide (H2S)."},
    {q: "Is CHX antibacterieel?", opts: ["Juist", "Onjuist"], exp: "Juist. CHX is een brede-spectrum antibacterieel middel dat werkt door celwandschade bij bacteriën."},
    {q: "Is stress een oorzaak van intraorele halitose?", opts: ["Juist", "Onjuist"], exp: "Juist. Stress veroorzaakt verminderde speekselsecretie (droge mond), wat halitose kan bevorderen."}
  ]
},

// ═══════════════════════════════════════════════
// SPEEKSEL & ORALE BIOLOGIE – DECEMBER 2025
// ═══════════════════════════════════════════════
speeksel_cikmis_2025dec: {
  title: "Speeksel & Orale Biologie Çıkmış – 2025 December",
  questions: [
    {q: "Xerostomie is hetzelfde als verhoogde speekselsecretie. Juist of onjuist?", opts: ["Onjuist", "Juist"], exp: "Onjuist. Xerostomie = subjectieve klacht van droge mond, geassocieerd met verminderde speekselsecretie."},
    {q: "Een gezonde vrouw met goede mondhygiëne, geen caries, klaagt over halitose. Meest waarschijnlijke oorzaak?", opts: ["Anaerobe bacteriën op de achterkant van de tong", "Droge mond", "Parodontitis", "Slechte mondhygiëne"], exp: "Anaerobe bacteriën dorsaal op de tong: de meest voorkomende oorzaak van intraorele halitose bij gezonde patiënten."},
    {q: "Welke bijwerking heeft CHX op de speekselklieren?", opts: ["Zwelling van de glandula parotis", "Dikker speeksel", "Droge mond", "Verhoogde speekselsecretie"], exp: "CHX kan parotiszwelling veroorzaken als bijwerking."},
    {q: "Bijdrage van de glandula parotis aan speekselsecretie van laag naar hoog?", opts: ["Slaap < rust < kauwen", "Kauwen < rust < slaap", "Rust < slaap < kauwen", "Slaap = rust = kauwen"], exp: "Parotis levert de grootste bijdrage bij gestimuleerde secretie (kauwen), minst tijdens slaap."},
    {q: "Welke speekselklier is het meest gevoelig voor speekselsteenvorming?", opts: ["Glandula submandibularis", "Glandula parotis", "Glandula sublingualis", "Kleine speekselklieren"], exp: "Glandula submandibularis: langzaam, slijmerig speeksel in tegenstroom → meest gevoelig voor sialolithiasis."},
    {q: "Kan hyposialie worden veroorzaakt door medicatiegebruik?", opts: ["Juist", "Onjuist"], exp: "Juist. Meer dan 400 medicamenten kunnen hyposialie veroorzaken."},
    {q: "Heeft gestimuleerd speeksel een lagere pH en lagere buffercapaciteit? Juist of onjuist?", opts: ["Onjuist", "Juist"], exp: "Onjuist. Gestimuleerd speeksel heeft een hogere pH en hogere buffercapaciteit."},
    {q: "Halitose wordt veroorzaakt door vluchtige zwavelverbindingen. Juist of onjuist?", opts: ["Juist", "Onjuist"], exp: "Juist. VSCs (methylmercaptaan + H2S) zijn de hoofdoorzaak van halitose."},
    {q: "Is CHX antibacterieel?", opts: ["Juist", "Onjuist"], exp: "Juist. CHX heeft een breed antibacterieel spectrum."},
    {q: "Een vrouw met droge mond heeft onstimuleerd speeksel 0,08 ml/min en gestimuleerd 0,6 ml/min. Wat is de diagnose?", opts: ["Xerostomie en hyposialie", "Alleen xerostomie", "Normaal", "Alleen hyposialie"], exp: "Onstimuleerd <0,1 ml/min = hyposialie; klacht van droge mond = xerostomie. Combinatie = xerostomie én hyposialie."},
    {q: "Is stress een oorzaak van intraorele halitose?", opts: ["Juist", "Onjuist"], exp: "Juist. Stress reduceert speekselsecretie, wat halitose bevordert."}
  ]
},

// ═══════════════════════════════════════════════
// KINESIOLOGIE/TMD – JUNI 2025
// ═══════════════════════════════════════════════
kinesio_cikmis_2025juni: {
  title: "Kinesiologie/TMD Çıkmış – 2025 Juni",
  questions: [
    {q: "Een vrouw heeft hoofdpijnklachten die verergeren door stress en door kauwen van hard voedsel. Wat is de diagnose?", opts: ["Spierspanningshoofdpijn", "Secundaire hoofdpijn door TMD", "Migraine", "Clusterhoofdpijn"], exp: "Hoofdpijn die verergert bij kauwen en stress, zonder gewrichtsklachten: spierspanningshoofdpijn (myogeen)."},
    {q: "Een patiënt heeft een 'open lock'. Wat is het klinisch beeld?", opts: ["De patiënt kan de mond niet sluiten", "De patiënt kan de mond niet openen", "De patiënt heeft pijn bij het kauwen", "De patiënt heeft klikgeluiden"], exp: "Open lock = luxatie van het kaakgewricht waarbij de mond niet meer gesloten kan worden."},
    {q: "Welk klinisch teken duidt op de invloed van chemische factoren bij gebitsslijtage (erosie)?", opts: ["Behoud van de glazuurrand ter hoogte van de sulcus gingivalis", "Breuk in knobbels en restauraties", "Slijtage van occlusale vlakken", "Dentineblootstelling"], exp: "Erosie: glazuurrand ter hoogte van de gingivarand (geprotegeerd door vloeistoffilm) blijft intact; kenmerkend voor chemische aantasting."},
    {q: "Een 70-jarige vrouw heeft chronische TMD-klachten. Wat zijn de meest kenmerkende pijnklachten?", opts: ["Moeilijk te lokaliseren, zeurende pijn in de wang, soms stekend", "Pijn op het oor die voelt als lopende mieren", "Scherpe pijn bij mondopening", "Pijn alleen bij kauwen"], exp: "Chronische myofasciale pijn bij TMD: diffuus, moeilijk te lokaliseren, zeurend/branderig van karakter."},
    {q: "Is manipulatie van de discus door een orofaciaal fysiotherapeut de aangewezen behandeling voor acute discusverplaatsing zonder reductie?", opts: ["Onjuist", "Juist"], exp: "Onjuist. Acute discusverplaatsing zonder reductie: behandeling is mobilisatietherapie en een opbeetplaat, niet discusmanipulatie."},
    {q: "Wat is de eerste aangewezen behandeling bij myogene bewegingsbeperking van de kaak?", opts: ["Mobiliserende therapie", "Opbeetplaat", "Spierrelaxantia", "Artrocentese"], exp: "Bij myogene bewegingsbeperking is mobiliserende therapie (fysiotherapie, rekoefeningen) de eerste keuze."},
    {q: "De maximale occlusie verschuift van achteroverliggende naar rechtopzittende positie. Welke richting?", opts: ["Meer dorsaal (posterieur)", "Meer mesiaal (anterieur)", "Geen verandering", "Lateraal"], exp: "In rechtopzittende positie schuift de mandibula meer dorsaal door de zwaartekracht: occlusie gaat meer posterieur."},
    {q: "Moet een opbeetplaat dik worden gemaakt?", opts: ["Onjuist", "Juist"], exp: "Onjuist. Een stabilisatieopbeetplaat moet dun, hard en stabiel zijn, niet dik."},
    {q: "Welke uitspraak over het Dahl-effect is juist?", opts: ["Het Dahl-effect treedt op in een periode van 6 maanden tot 2 jaar", "Het Dahl-effect komt bij 40% van de bruxismepatiënten voor"], exp: "Het Dahl-effect (intrusie/extrusie) treedt op gedurende 6 maanden tot 2 jaar na plaatsing van anterieure restauraties."},
    {q: "Is het acceptabel als een stabilisatieopbeetplaat bij een volledig gebit tot en met de tweede molaren wordt vervaardigd (als M3 moeilijk af te drukken is)?", opts: ["Juist", "Onjuist"], exp: "Juist. Als derde molaren niet adequaat in het afdrukmateriaal zijn vertegenwoordigd, is een plaat t/m M2 acceptabel."}
  ]
},

// ═══════════════════════════════════════════════
// KINESIOLOGIE/TMD – DECEMBER 2025
// ═══════════════════════════════════════════════
kinesio_cikmis_2025dec: {
  title: "Kinesiologie/TMD Çıkmış – 2025 December",
  questions: [
    {q: "Een vrouw heeft hoofdpijnklachten die verergeren bij stress en hard kauwen. Diagnose?", opts: ["Spierspanningshoofdpijn", "Secundaire TMD-hoofdpijn", "Migraine", "Clusterhoofdpijn"], exp: "Stress- en kauwen-gerelateerde hoofdpijn zonder gewrichtsklachten = spierspanningshoofdpijn (myogeen)."},
    {q: "Open lock: wat is het klinisch beeld?", opts: ["De patiënt kan de mond niet sluiten", "De patiënt kan de mond niet openen", "Pijn bij kauwen", "Klikgeluid bij mondopening"], exp: "Open lock = kaakgewrichtsluxatie waarbij de mond open staat en niet meer gesloten kan worden."},
    {q: "Welk klinisch teken duidt op chemische factoren bij gebitsslijtage?", opts: ["Behoud van glazuurrand ter hoogte van de sulcus gingivalis", "Breuk in knobbels", "Dentineblootstelling", "Occlusale slijtage"], exp: "Bij erosie blijft de glazuurrand bij de gingivarand intact (beschermd door vloeistoffilm); dit is specifiek voor chemische slijtage."},
    {q: "Chronische TMD bij een 70-jarige: meest kenmerkende pijnomschrijving?", opts: ["Diffuus, zeurend en soms stekend in de wang", "Pijn op het oor zoals lopende mieren", "Scherpe pijn bij kaakopening", "Pijn uitsluitend bij kauwen"], exp: "Chronische myofasciale TMD-pijn: diffuus, moeilijk te lokaliseren, zeurend van karakter."},
    {q: "Is manipulatie door een orofaciaal fysiotherapeut de juiste behandeling bij acute discusverplaatsing zonder reductie?", opts: ["Onjuist", "Juist"], exp: "Onjuist. Behandeling: mobilisatietherapie + opbeetplaat; geen discusmanipulatie."},
    {q: "Eerste behandeling bij myogene bewegingsbeperking van de kaak?", opts: ["Mobiliserende therapie", "Opbeetplaat", "Artrocentese", "Chirurgie"], exp: "Mobiliserende therapie (fysiotherapie) is de eerste keuze bij myogene bewegingsbeperking."},
    {q: "Maximale occlusie in achteroverliggende vs rechtopzittende positie: wat verandert er?", opts: ["Gaat meer dorsaal in rechtopzittende positie", "Gaat meer mesiaal", "Geen verschil", "Gaat lateraal"], exp: "In rechtopzittende positie verschuift de occlusie naar dorsaal door de zwaartekracht op de mandibula."},
    {q: "Moet een stabilisatieopbeetplaat dik zijn?", opts: ["Onjuist", "Juist"], exp: "Onjuist. Een goede opbeetplaat is dun, hard en stabiel."},
    {q: "Het Dahl-effect treedt op na 6 maanden tot 2 jaar. Juist?", opts: ["Juist", "Onjuist"], exp: "Juist. Het Dahl-effect (tandbewegingen na anterieure verhoging) duurt 6 maanden tot 2 jaar."},
    {q: "Is een stabilisatieopbeetplaat t/m M2 acceptabel als M3 niet goed af te drukken is?", opts: ["Juist", "Onjuist"], exp: "Juist. Bij volledige dentitie met moeilijk af te drukken M3 is een plaat t/m M2 acceptabel."}
  ]
},

// ═══════════════════════════════════════════════
// ORALE PATHOLOGIE – JUNI 2025
// ═══════════════════════════════════════════════
pato_cikmis_2025juni: {
  title: "Orale Pathologie Çıkmış – 2025 Juni",
  questions: [
    {q: "Een patiënt heeft een pijnloze bloemkoolvormige laesie in de mond die al 2 weken bestaat. Meest waarschijnlijke diagnose?", opts: ["Papilloom", "Verruceus carcinoom", "Fibroom", "Leukoplakio"], exp: "Bloemkoolvormige pijnloze laesie (exofytisch): meest waarschijnlijk papilloom (HPV-gerelateerd), niet verruceus carcinoom bij 2 weken."},
    {q: "Wat is de primaire behandeling van een plaveiselcelcarcinoom op de tong?", opts: ["Chirurgische excisie", "Chemo- en radiotherapie", "Radiotherapie alleen", "Watchful waiting"], exp: "Primaire behandeling van plaveiselcelcarcinoom op de tong: chirurgische excisie (met vrije marges)."},
    {q: "Hoe ontstaat kanker?", opts: ["Door DNA-mutaties en verstoorde celdeling", "Door een bacteriële infectie", "Door een virale infectie", "Door een schimmelinfectie"], exp: "Kanker ontstaat door accumulatie van DNA-mutaties die de celcycluscontrole verstoren."},
    {q: "Is ameloblastoom een kwaadaardig gezwel dat vaker in de onderkaak voorkomt?", opts: ["Onjuist (ameloblastoom is benigne)", "Juist", "Het is maligne en zit vaker boven", "Het is benigne en zit vaker boven"], exp: "Onjuist. Ameloblastoom is een BENIGNE odontogene tumor, wel lokaal invasief. Komt vaker voor in de onderkaak."},
    {q: "Wat zijn de voorkeurslocaties van een folliculaire cyste?", opts: ["Onder de M3 en boven de hoektanden", "Onder én boven M3", "Alleen onderkaak M3", "Alleen bovenkaak hoektanden"], exp: "Folliculaire cyste (dentigerous cyst): meest bij geïmpacteerde ondermolaar M3 en bovenkaak hoektanden."},
    {q: "Wat is het meest voorkomende klinische effect van chemotherapie in de mond?", opts: ["Mucositis", "Osteoradionecrose", "Xerostomie", "Candidiasis"], exp: "Mucositis is de meest voorkomende bijwerking van chemotherapie in de mond (50-80% van de patiënten)."},
    {q: "Wat is een typische LATE bestralingsbijwerking in de mond?", opts: ["Osteoradionecrose", "Mucositis", "Candidiasis", "Xerostomie acuut"], exp: "Late bestralingsbijwerking: osteoradionecrose. Mucositis is een ACUTE bijwerking."},
    {q: "Waar komt een mucocele NIET voor?", opts: ["Bovenlip", "Onderlip", "Mondbodem", "Wang"], exp: "Mucocele komt zelden voor in de bovenlip; meest voorkomend in de onderlip."},
    {q: "Plaveiselcelcarcinoom komt het vaakst voor bij:", opts: ["Mannen en vrouwen boven de 40 jaar", "Jongens en meisjes op schoolleeftijd", "Vrouwen boven de 60 jaar", "Mannen onder de 30 jaar"], exp: "Plaveiselcelcarcinoom: meest bij volwassenen >40 jaar; sterk geassocieerd met roken en alcohol."},
    {q: "Is een ranula een cyste van de glandula submandibularis?", opts: ["Onjuist (ranula is van de glandula sublingualis)", "Juist"], exp: "Onjuist. Een ranula is een retentiemucocele van de glandula sublingualis, niet van de submandibularis."},
    {q: "Na chirurgische marginale resectie van plaveiselcelcarcinoom: wat is het risico?", opts: ["Hoge kans op kaakfractuur", "Altijd botreconstructie nodig", "Geen complicaties", "Infectie"], exp: "Na marginale resectie van de kaak: hoge kans op kaakfractuur door verminderde botsterkte."},
    {q: "Dubbelzien en tranende ogen zijn kenmerkend voor sinus maxillaris-tumoren. Juist?", opts: ["Juist", "Onjuist"], exp: "Juist. Uitbreiding van sinuscarcinoom naar de orbita veroorzaakt diplopia (dubbelzien) en epiphora (tranende ogen)."}
  ]
},

// ═══════════════════════════════════════════════
// ORALE PATHOLOGIE – DECEMBER 2025
// ═══════════════════════════════════════════════
pato_cikmis_2025dec: {
  title: "Orale Pathologie Çıkmış – 2025 December",
  questions: [
    {q: "Een patiënt heeft een pijnloze bloemkoolvormige laesie in de mond (2 weken). Meest waarschijnlijke diagnose?", opts: ["Papilloom", "Verruceus carcinoom", "Fibroom", "Leukoplakio"], exp: "Bloemkoolvormige pijnloze laesie van 2 weken: meest waarschijnlijk papilloom (HPV-gerelateerd)."},
    {q: "Primaire behandeling van plaveiselcelcarcinoom op de tong?", opts: ["Chirurgische excisie", "Chemo- en radiotherapie", "Radiotherapie", "Watchful waiting"], exp: "Primaire behandeling: chirurgische excisie met vrije snijvlakken."},
    {q: "Hoe ontstaat kanker?", opts: ["Door DNA-mutaties en verstoorde celdeling", "Door bacteriële infectie", "Door virale infectie", "Door voedingstekort"], exp: "Kanker = accumulatie van DNA-mutaties met verstoorde celcycluscontrole."},
    {q: "Is ameloblastoom een kwaadaardig gezwel dat vaker in de onderkaak voorkomt?", opts: ["Onjuist (ameloblastoom is benigne)", "Juist"], exp: "Onjuist. Ameloblastoom is benigne (wel lokaal invasief). Komt vaker voor in de onderkaak."},
    {q: "Voorkeurslocaties van een folliculaire cyste?", opts: ["Onder M3 en boven de hoektanden", "Alleen boven en onder M3", "Alleen onderkaak", "Alleen bovenkaak"], exp: "Folliculaire cyste: meest bij geïmpacteerde M3 onderkaak en hoektanden bovenkaak."},
    {q: "Meest voorkomend klinisch effect van chemotherapie in de mond?", opts: ["Mucositis", "Osteoradionecrose", "Candidiasis", "Xerostomie"], exp: "Mucositis is de meest voorkomende orale bijwerking van chemotherapie."},
    {q: "Typische LATE bestralingsbijwerking?", opts: ["Osteoradionecrose", "Mucositis", "Candidiasis", "Smaakverlies"], exp: "Osteoradionecrose = late bestralingsbijwerking. Mucositis = acute bijwerking."},
    {q: "Waar komt een mucocele NIET voor?", opts: ["Bovenlip", "Onderlip", "Mondbodem", "Wang"], exp: "Mucocele zelden in de bovenlip; meest voorkomend in de onderlip."},
    {q: "Plaveiselcelcarcinoom meest bij:", opts: ["Mannen en vrouwen boven de 40 jaar", "Kinderen en jongeren", "Vrouwen boven de 70 jaar", "Mannen onder de 30 jaar"], exp: "Plaveiselcelcarcinoom: volwassenen >40 jaar, geassocieerd met roken en alcohol."},
    {q: "Is een ranula een cyste van de glandula submandibularis?", opts: ["Onjuist (van de glandula sublingualis)", "Juist"], exp: "Onjuist. Ranula = retentiemucocele van de glandula sublingualis."},
    {q: "Na marginale resectie van plaveiselcelcarcinoom: risico?", opts: ["Hoge kans op kaakfractuur", "Altijd botreconstructie nodig", "Geen risico", "Infectie"], exp: "Na marginale resectie: verhoogd fractuurrisico door verminderde botsubstantie."},
    {q: "Dubbelzien en tranende ogen kenmerkend bij sinuscarcinoom?", opts: ["Juist", "Onjuist"], exp: "Juist. Orbitale invasie van sinuscarcinoom veroorzaakt diplopia en epiphora."}
  ]
},

// ═══════════════════════════════════════════════
// ORALE FUNCTIELEER / MKA – JUNI 2025
// ═══════════════════════════════════════════════
functie_cikmis_2025juni: {
  title: "Orale Functieleer Çıkmış – 2025 Juni",
  questions: [
    {q: "Wanneer beoordeelt u de beethoogte?", opts: ["Wanneer de patiënt de v- en f-klanken uitspreekt", "Wanneer de patiënt de s-klanken uitspreekt", "In maximale intercuspidatie", "Bij ontspannen kaakstand"], exp: "Beethoogte wordt beoordeeld aan de hand van de v/f-klanken (vrije ruimte = sprekend contact); s-klanken = phonetische ruimte."},
    {q: "Element 38 wordt getrokken. Welke Kennedy-classificatie hoort hierbij?", opts: ["Kennedy klasse II, modificatie I", "Kennedy klasse I, modificatie I", "Kennedy klasse II, geen modificatie", "Kennedy klasse III"], exp: "Bij extractie van 38 (links achtervak): vrijeindig links + tandboog rechts intact = Kennedy klasse II (links) met modificatie I (rechts)."},
    {q: "Bij brugpreparaties moeten de pijlers parallel zijn voor de inzetrichting. Komen de meeste ondersnijdingen vaker voor in de bovenkaak?", opts: ["Juist", "Onjuist"], exp: "Juist. Divergentie van pijlers in de bovenkaak door anatomische positie leidt tot meer ondersnijdingen."},
    {q: "Verbeteren ondersnijdingen in de prothese de pasvorm en retentie?", opts: ["Onjuist", "Juist"], exp: "Onjuist. Ondersnijdingen in de prothesebasis verslechteren de pasvorm; ze moeten worden uitgeblokt."},
    {q: "Wat is een absolute contra-indicatie voor implantaten?", opts: ["Radiotherapie minder dan 9 maanden geleden", "Gebruik van orale bisfosfonaten", "Diabetes mellitus gecontroleerd", "Roken"], exp: "IV-bisfosfonaten en recente radiotherapie (<9 maanden) zijn absolute contra-indicaties voor implantaten."},
    {q: "Is slechte mondhygiëne een contra-indicatie voor een frameprothese?", opts: ["Juist", "Onjuist"], exp: "Juist. Slechte mondhygiëne leidt tot verhoogd caries- en paro-risico bij de ankerelementen van een frameprothese."},
    {q: "Welke methode wordt gebruikt voor pre-implantaire botvermeerdering?", opts: ["Guided Bone Regeneration (GBR)", "Greft van de tibia", "Distraktieosteogenese", "Sinus lift"], exp: "GBR (Guided Bone Regeneration) is de meest gebruikte methode voor pre-implantaire botvermeerdering."},
    {q: "Welke structuur is het minst resilient (minste veerkracht) in de kaak?", opts: ["Palatum", "Processus alveolaris", "Tuber maxillae", "Torus palatinus"], exp: "Het palatum heeft de minste veerkracht (resilientie) en is ongunstig als draagvlak voor prothesen."},
    {q: "Voor welk element doet u een balanstest voor element 26. In welke richting schuift u?", opts: ["Links", "Rechts", "Naar voren", "Naar achteren"], exp: "Balanstest voor element 26 (linksachter): u schuift naar links (werkkant) om de balanscontacten rechts te beoordelen."},
    {q: "Welke stof in tandheelkundige materialen is kankerverwekkend?", opts: ["Cadmium", "Koper", "Nikkel", "Zink"], exp: "Cadmium is een bekend carcinogeen en mag niet in tandheelkundige legermaterialen aanwezig zijn."},
    {q: "De palatinale knobbels van de bovenmolaren occluderen met de fossa van de ondermolaren. Heet dit het lingualized occlusieconcept?", opts: ["Onjuist", "Juist"], exp: "Onjuist. Dit is het normaal kauwvlakkenocclusieschema (cusp-fossa). Lingualized occlusie = palatinale knobbels occluderen in centrale fossa van de onderprothese, andere knobbels hebben geen contact."},
    {q: "De meest waarschijnlijke complicatie van een implantaat bij element 26 (op röntgenfoto)?", opts: ["Verlies van osseointegratie", "Breuk van porselein", "Schroefbreuk", "Peri-implantitis"], exp: "Implantaat op positie 26 heeft grote occlusale belasting; meest waarschijnlijke complicatie afhankelijk van röntgenbeeld: verlies van osseointegratie."},
    {q: "Een 74-jarige edentate man draagt 14 jaar een prothese en heeft pijn en zwelling in de omslagplooi onderkaak. Diagnose?", opts: ["Irritatie-fibroom (epulis fissuratum)", "Chronische periostitis", "Osteomyelitis", "Paro-abces"], exp: "Chronisch slecht passende prothese → irritatie van de omslagplooi → irritatie-fibroom (epulis fissuratum)."},
    {q: "Dubbeldraadtechniek: welke volgorde is juist?", opts: ["Dunne draad plaatsen, dikke draad plaatsen, alleen dikke draad verwijderen vóór afdruk", "Dunne draad plaatsen, dikke draad plaatsen, beide draden verwijderen", "Dikke draad plaatsen, dunne draad plaatsen, dikke verwijderen", "Beide draden tegelijk plaatsen en verwijderen"], exp: "Dubbeldraadtechniek: 1e dunne draad in sulcus, 2e dikke draad erop, vóór afdruk alleen de dikke draad verwijderen."},
    {q: "Waarvoor gebruikt u een uitgebreide (dikke) retractiedraad?", opts: ["Om meer vloeistof te absorberen en sulcus te verbreden", "Om niet te slijpen tijdens prepareren", "Om bloeding te stoppen", "Om afdrukmateriaal te plaatsen"], exp: "Dikke retractiedraad: meer vloeistofabsorptie en sulcusverbreding voor een nauwkeurige sulcusafdruk."}
  ]
},

// ═══════════════════════════════════════════════
// ORALE FUNCTIELEER / MKA – DECEMBER 2025
// ═══════════════════════════════════════════════
functie_cikmis_2025dec: {
  title: "Orale Functieleer Çıkmış – 2025 December",
  questions: [
    {q: "Element 38 wordt getrokken. Welke Kennedy-classificatie hoort hierbij?", opts: ["Kennedy klasse II, modificatie I", "Kennedy klasse I, modificatie I", "Kennedy klasse II, geen modificatie", "Kennedy klasse III"], exp: "Extractie van 38: vrijeindig links + intact rechts = Kennedy klasse II, modificatie I."},
    {q: "Hoe lang wacht u na een kroonverlenging in het esthetische gebied om ongewenste resultaten te voorkomen?", opts: ["6 maanden", "6 weken", "3 maanden", "1 jaar"], exp: "Na kroonverlenging in het esthetische gebied: wachten tot weefsel volledig gerijpt is = minimaal 6 maanden."},
    {q: "Waarom geeft u de voorkeur aan een stegprothese boven een implantaat?", opts: ["De prothese kan direct op het implantaat worden aangesloten (via de steg)", "Meer esthetisch", "Goedkoper", "Minder invasief"], exp: "Stegprothese: de prothese wordt via de steg direct aan de implantaten gekoppeld, biedt goede retentie."},
    {q: "Heeft de vorm van het palatum invloed op de retentie van een bovenprothese?", opts: ["Ja, een vlak palatum geeft slechtere retentie", "Nee, niet belangrijk als het palatum bedekt is", "Ja, gewelfd palatum is slechter", "Nee, nooit invloed"], exp: "Een vlak palatum geeft minder retentie door minder luchtdicht afsluiting; gewelfd palatum geeft betere retentie."},
    {q: "Welke behandeling is het meest geschikt voor een patiënt met missende element 12 en diepe beet?", opts: ["Etsbrug (want implantaat is niet de voorkeur bij diepe beet)", "Implantaat als minder invasief", "Conventionele brug", "Niets doen"], exp: "Bij diepe beet is het implantaat riskant vanwege onvoldoende occlusale ruimte; etsbrug is de voorkeur."},
    {q: "Minimale afstand tussen twee implantaten bij plaatsing zonder schade aan omliggend weefsel?", opts: ["3 mm", "2 mm", "4 mm", "5 mm"], exp: "Minimale afstand tussen twee implantaten: 3 mm om botresorptie en biologic width te beschermen."},
    {q: "Minimum aantal implantaten voor een bovenkaakprothese?", opts: ["4 implantaten", "2 implantaten", "6 implantaten", "8 implantaten"], exp: "Bovenkaak heeft een groter draagvlak nodig vanwege de spongieuze botstructuur; minimaal 4 implantaten aanbevolen."},
    {q: "Is slechte mondhygiëne een contra-indicatie voor een frameprothese?", opts: ["Juist", "Onjuist"], exp: "Juist. Slechte mondhygiëne is een contra-indicatie vanwege caries- en paro-risico voor de ankerelementen."},
    {q: "Welke methode voor pre-implantaire botvermeerdering?", opts: ["Guided Bone Regeneration (GBR)", "Tibiagreft", "Distraktieosteogenese", "Sinus lift"], exp: "GBR is de meest gebruikte en bewezen methode voor lokale botvermeerdering vóór implantaatplaatsing."},
    {q: "Welke structuur is het minst resilient?", opts: ["Palatum", "Processus alveolaris", "Tuber", "Torus"], exp: "Het palatum heeft de minste veerkracht en is het minst geschikt als enig draagvlak voor een prothese."},
    {q: "Balanstest element 26: in welke richting schuif je?", opts: ["Links", "Rechts", "Naar voren", "Naar achteren"], exp: "Balanstest element 26: schuif naar links (werkkant), controleer balanscontacten aan de rechterzijde."},
    {q: "Welke stof is kankerverwekkend in tandheelkundige materialen?", opts: ["Cadmium", "Koper", "Nikkel", "Zink"], exp: "Cadmium is een carcinogeen dat niet toegestaan is in tandheelkundige legeringen."},
    {q: "Is een chamferpreparatie alleen voor zirkonium en niet voor metaal?", opts: ["Onjuist", "Juist"], exp: "Onjuist. Chamferpreparatie wordt gebruikt voor zirkonium EN voor metaal-porseleinkronen; schouder voor volkeramiek."},
    {q: "Wat gebruik je voor het beoordelen van sterke occlusale contacten?", opts: ["Shimstock-folie", "Rood-blauw articulatiepapier", "Wax", "Spiegel"], exp: "Shimstock-folie (8 micron) is het meest sensitief voor het detecteren van de sterkste occlusale contacten."},
    {q: "Bij welk implantatiesysteem zijn mechanische complicaties gemakkelijker op te lossen?", opts: ["Geschroefd implantatiesysteem", "Gecementeerd implantatiesysteem", "Beide gelijk", "Afhankelijk van de locatie"], exp: "Geschroefde implantaten: gemakkelijk te verwijderen en complicaties op te lossen; gecementeerd is moeilijker te verwijderen."},
    {q: "Hoe voorkomt u peri-implantaire cementitis (ontsteking door cementresten)?", opts: ["Gebruik een geschroefd implantaat", "Minder cement in de kroon", "Beter mondhygiëne-instructies geven", "Antibiotica na plaatsing"], exp: "Geschroefd implantaat elimineert het risico op cementresten volledig; geen cement = geen cementitis."}
  ]
},

// ═══════════════════════════════════════════════
// ORTHODONTIE – JUNI 2025
// ═══════════════════════════════════════════════
ortho_cikmis_2025juni: {
  title: "Orthodontie Çıkmış – 2025 Juni",
  questions: [
    {q: "Element 35 is doorgebroken maar 45 nog niet na enkele maanden; 74 nog aanwezig. Wat doet u?", opts: ["Extractie 74 als de wortel van 45 voor 3/4 gevormd is", "Afwachten tot 74 vanzelf exfolieert", "Direct 74 extraheren", "Röntgenfoto maken en afwachten"], exp: "Extraheer de melkmolaar (74) zodra de wortel van 45 voor 3/4 gevormd is om doorbraak te bevorderen."},
    {q: "Gaat het sluiten van een diasteem via skeletale verankering langzamer dan zonder skeletale verankering?", opts: ["Onjuist", "Juist"], exp: "Onjuist. Skeletale verankering (mini-implantaten) levert efficiëntere krachten; sluiting gaat niet langzamer."},
    {q: "Een 12-jarig meisje heeft een diepe beet waarbij de ondertanden het palatum raken. Ze is niet gemotiveerd. Wat doet u?", opts: ["Wijzen op de medische indicatie en uitleggen, maar de uiteindelijke beslissing aan haar en de ouders laten", "Toch starten met behandelen ondanks gebrek aan motivatie", "Niets doen, afwachten", "Direct doorverwijzen naar kaakchirurg"], exp: "Bij niet-gemotiveerde patiënt: uitleg geven over risico, maar autonomie respecteren; beslissing bij patiënt en ouders."},
    {q: "Een 10-jarig kind heeft ernstige crowding en wil een beugel, maar heeft slechte mondhygiëne. Wat doet u?", opts: ["Uitleggen dat mondhygiëne eerst op orde moet zijn; ortho kan altijd nog", "Meteen doorsturen naar een orthodontist", "Beugel plaatsen ondanks slechte mondhygiëne", "Alleen flossen adviseren"], exp: "Goede mondhygiëne is een vereiste vóór orthodontische behandeling; eerst MH verbeteren, dan ortho."},
    {q: "Typische schisisspraak wordt vooral veroorzaakt door:", opts: ["Open nasaliteit (hypernasaliteit)", "Open verbinding mond-neus ter hoogte van het palatum durum", "Taalstoornis", "Afwijkende tongpositie"], exp: "Schisis veroorzaakt hypernasaliteit door onvoldoende sluiting van de velo-pharyngeale ring."},
    {q: "U doet een autotransplantatie van een volledig afgevormde premolaar. Waarop let u?", opts: ["Endodontische behandeling vóór transplantatie", "Geen belasting voor de eerste 8 weken", "Alleen schalkverankering", "Worteldoorsnijding"], exp: "Bij volledig afgevormde premolaar: WKB uitvoeren vóór transplantatie om revascularisatie te vermijden."},
    {q: "Wanneer extraheert u M1 bij een normaal groeiend kind met diepe caries?", opts: ["Zodra u de furcatie van M2 ziet op de OPT", "Nadat M2 volledig is doorgebroken", "Zo vroeg mogelijk", "Pas op 12-jarige leeftijd"], exp: "Ideale extratietijdstip M1: zodra de furcatie van M2 zichtbaar is op de OPT (optimale migratie van M2)."},
    {q: "Een 6-jarige patiënt: 11 is doorgebroken, maar 21 na 1 jaar nog niet. Wat doet u?", opts: ["Periapicale röntgenfoto", "Afwachten nog een jaar", "Panoramische röntgenfoto", "Direct doorverwijzen"], exp: "Als 21 na 1 jaar niet is doorgebroken terwijl 11 wel aanwezig is: periapicale röntgenfoto voor beoordeling."},
    {q: "Een 10-jarige patiënt: welke elementen zijn aanwezig?", opts: ["Incisieven, M1, waarschijnlijk ondercuspidaat", "Incisieven, M1, zeker bovencuspidaat", "Alleen incisieven en M1", "Alle blijvende tanden"], exp: "Op 10 jaar: incisieven en M1 aanwezig; premolaren doorbreken; ondercuspidaat breekt eerder door dan bovencuspidaat."},
    {q: "Na ortho-behandeling is 'settling' van cuspidaten mogelijk bij een 2-2 spalk. Juist?", opts: ["Juist", "Onjuist"], exp: "Juist. Een 2-2 spalk in de bovenkaak laat de cuspidaten vrij om te settlen in de juiste occlusie."},
    {q: "Kan een Hyrax worden gebruikt voor palatumexpansie bij jonge kinderen?", opts: ["Juist", "Onjuist"], exp: "Juist. Hyrax (rapid palatal expander) is geïndiceerd bij jonge kinderen met open sutura mediana palatina."},
    {q: "Tot welke leeftijd zien we sagittale groei van de kaken?", opts: ["Tot 18 jaar", "Tot 25 jaar", "Tot 16 jaar", "Tot 21 jaar"], exp: "Sagittale kaakgroei stopt grotendeels rond 18 jaar (bij meisjes eerder, rond 16-17 jaar)."},
    {q: "Bij schisis groeit de bovenkaak minder dan normaal, waardoor een mesiorelatie ontstaat. Juist?", opts: ["Juist", "Onjuist"], exp: "Juist. Littekenweefsel na palatumoperatie remt de bovenkaakgroei, wat leidt tot een mesiorelatie (klasse III)."},
    {q: "Is orthodontische behandeling bij volwassenen moeilijker doordat botombouw langzamer verloopt?", opts: ["Juist", "Onjuist"], exp: "Juist. Bij volwassenen verloopt botombouw langzamer: behandeling duurt langer en kan pijnlijker zijn."}
  ]
},

// ═══════════════════════════════════════════════
// ORTHODONTIE – DECEMBER 2025
// ═══════════════════════════════════════════════
ortho_cikmis_2025dec: {
  title: "Orthodontie Çıkmış – 2025 December",
  questions: [
    {q: "Bij schisis groeit de bovenkaak minder dan de onderkaak, waardoor een mesiorelatie ontstaat. Juist?", opts: ["Juist", "Onjuist"], exp: "Juist. Littekencontractie na schisisoperatie remt bovenkaakgroei → mesiorelatie (klasse III)."},
    {q: "Een diasteem sluiten via skeletale verankering: gaat dit langzamer dan zonder?", opts: ["Onjuist", "Juist"], exp: "Onjuist. Skeletale verankering maakt efficiënte krachtoverbrenging mogelijk, niet langzamer."},
    {q: "Een 12-jarig meisje met ernstige diepe beet is niet gemotiveerd voor behandeling. Wat doet u?", opts: ["Wijzen op medische indicatie en beslissing bij patiënt en ouders laten", "Toch beginnen met behandeling", "Niets doen", "Doorverwijzen naar kaakchirurg"], exp: "Respect voor autonomie: uitleg geven, maar beslissing laten aan patiënt en ouders."},
    {q: "Is ortho behandeling moeilijker bij volwassenen vanwege langzamere botombouw?", opts: ["Juist", "Onjuist"], exp: "Juist. Botombouw bij volwassenen is trager: behandeling duurt langer en kan pijnlijker zijn."},
    {q: "Autotransplantatie van een volledig afgevormde premolaar: wat doet u vooraf?", opts: ["Endodontische behandeling uitvoeren", "8 weken geen belasting", "Vitaliteitstest doen", "Afwachten"], exp: "Volledig afgevormde premolaar: WKB vóór transplantatie om verlies van vitaliteit te voorkomen."},
    {q: "Een 6-jarige: 11 doorgebroken, na 1 jaar 21 nog niet. Wat doet u?", opts: ["Periapicale röntgenfoto", "Afwachten", "Direct extraheren", "Verwijzen naar orthodontist"], exp: "Bij vertraagde doorbraak van 21 terwijl 11 al aanwezig is: periapicale röntgenfoto."},
    {q: "Hyrax voor palatumexpansie bij jonge kinderen: geïndiceerd?", opts: ["Juist", "Onjuist"], exp: "Juist. Hyrax is geïndiceerd bij jonge kinderen met een open middenpalatinasutura."},
    {q: "Sagittale groei van de kaken duurt tot welke leeftijd?", opts: ["18 jaar", "25 jaar", "16 jaar", "21 jaar"], exp: "Sagittale groei stopt grotendeels rond 18 jaar."},
    {q: "Na ortho is 'settling' van cuspidaten mogelijk bij een 2-2 spalk. Juist?", opts: ["Juist", "Onjuist"], exp: "Juist. Bij een 2-2 spalk in de bovenkaak kunnen de cuspidaten vrij settlen in occlusie."},
    {q: "Wortelbreuk ter hoogte van het bot zonder verdere schade: is orthodontische extrusie altijd mogelijk?", opts: ["Onjuist", "Juist"], exp: "Onjuist. Orthodontische extrusie is niet altijd mogelijk; het hangt af van de hoogte en positie van de fractuur."}
  ]
},

// ═══════════════════════════════════════════════
// MKA-CHIRURGIE (FUNCTIE/MKA) – JUNI 2025
// ═══════════════════════════════════════════════
basis_cikmis_2025juni: {
  title: "MKA-Chirurgie Çıkmış – 2025 Juni",
  questions: [
    {q: "Alveolitis treedt op 6-8 dagen na de extractie. Juist?", opts: ["Onjuist (3-5 dagen)", "Juist"], exp: "Onjuist. Alveolitis (dry socket) treedt typisch op 3-5 dagen na de extractie, niet 6-8 dagen."},
    {q: "Wat doet u bij een antrumperforatie na kiesextractie?", opts: ["Primair sluiten met een mucoperiostale lap", "Overhechten van bestaand slijmvlies", "Afwachten", "Antibiotica geven en afwachten"], exp: "Antrumperforatie: primair sluiten met een buccale mucoperiostale verschuivingslap om communicatie te sluiten."},
    {q: "U extraheert een bovenpremolaar. Welke beweging maakt u als eerste?", opts: ["Luxatie palatinaal", "Luxatie buccaal", "Rotatie", "Tractie"], exp: "Bovenpremolaar extractie: eerst palatinaal luxeren (dunste bot is buccaal, maar palatinale luxatie geeft meer controle)."},
    {q: "Er treedt een tuberfractuur op. U extraheert de kies en plaatst het tuber terug. Juist?", opts: ["Juist", "Onjuist"], exp: "Juist. Bij tuberfractuur: kies extraheren en het tuber-fragment reponeren en fixeren ter behoud van bot."},
    {q: "Een 21-jarige man heeft een groeiende zwelling bij 11-21, geen klachten. Wat doet u eerst?", opts: ["Vitaliteitstest", "Röntgenfoto", "Biopsie", "Antibiotica"], exp: "Bij een groeiende zwelling in het front: eerst vitaliteitstest uitvoeren om de oorzaak (endo vs. cyste) te bepalen."},
    {q: "Kunnen we het geslacht bepalen door gebitsstudie?", opts: ["Juist", "Onjuist"], exp: "Juist. Forensische tandheelkunde: geslacht kan worden bepaald via tandgrootte (mannen > vrouwen), emaildikte en andere kenmerken."},
    {q: "Welk klinisch kenmerk ziet u bij een pterygomandibulaire loge-abces?", opts: ["Trismus", "Gezwollen wang", "Fluctuatie extraoraal", "Koorts"], exp: "Pterygomandibulaire loge-abces: trismus (kaakklem) door betrokkenheid van de m. pterygoideus medialis."},
    {q: "Welke impactie van M3 in de onderkaak is moeilijker te verwijderen?", opts: ["Disto-angulair", "Buccolinguaal", "Mesiaal-angulair", "Horizontaal"], exp: "Disto-angulair geïmpcateerde M3: meest moeilijke positie door gebrek aan ruimte distaal en ongunstige hefboom."},
    {q: "Welk kenmerk ziet u bij een dentogene sinusitis?", opts: ["Enkelzijdige foetide (stinkende) neusafvloed", "Verstopte neus bilateraal", "Koorts en algehele malaise", "Pijn bij palpatie sinus frontalis"], exp: "Dentogene sinusitis: ENKELVOUDIGE foetide neusafvloed ipsilateraal; het meest onderscheidend kenmerk."},
    {q: "Waarmee onderscheidt u een centraal reuzecelgranuloom radiologisch van andere letsels?", opts: ["Van een odontoom", "Van een mixoom (myxoom)", "Van een ameloblastoom", "Van een radiculaire cyste"], exp: "Centraal reuzecelgranuloom: radiologisch onderscheid van mixoom; histologisch onderscheid van andere letsels."},
    {q: "Hoe herkent u een radix-tang?", opts: ["De bekken liggen op elkaar bij sluiting", "S-vormige vorm", "Bredere bekken", "Kortere handgreep"], exp: "Wortel(radix)-tang: smallere, rechte bekken die bij sluiting op elkaar liggen voor grip op wortelfragmenten."},
    {q: "Wat is het beleid bij focale scleroserende osteomyelitis?", opts: ["Afwachten (observeren)", "Extractie", "Antibiotica", "Chirurgische verwijdering"], exp: "Focale scleroserende osteomyelitis: conservatief beleid, afwachten; behandeling van de oorzaak (caries/pulpitis)."},
    {q: "Is de grootte van een wortelrest bepalend voor de noodzaak van chirurgische verwijdering?", opts: ["Juist", "Onjuist"], exp: "Juist. Grootte, locatie en symptomen bepalen of een wortelrest verwijderd moet worden."},
    {q: "Welke zenuwen verzorgen de innervatie van de tongpunt?", opts: ["Nervus lingualis (n. trigeminus V3) en chorda tympani", "Nervus facialis en nervus trigeminus", "Nervus hypoglossus en nervus facialis", "Nervus glossopharyngeus"], exp: "Tongpunt: n. lingualis (sensibel, tak van V3) + chorda tympani (smaak, tak van n. facialis VII)."},
    {q: "Wat is de behandeling van een subperiostaal abces?", opts: ["Incisie door het periost en drainage", "Endodontische behandeling", "Antibiotica zonder drainage", "Afwachten"], exp: "Subperiostaal abces: incisie en drainage door het periost; antibiotica als aanvulling bij verspreiding."}
  ]
},

// ═══════════════════════════════════════════════
// MKA-CHIRURGIE – DECEMBER 2025
// ═══════════════════════════════════════════════
basis_cikmis_2025dec: {
  title: "MKA-Chirurgie Çıkmış – 2025 December",
  questions: [
    {q: "Alveolitis treedt op 6-8 dagen na de extractie. Juist?", opts: ["Onjuist (typisch 3-5 dagen)", "Juist"], exp: "Onjuist. Alveolitis (dry socket) treedt typisch op 3-5 dagen na extractie."},
    {q: "Antrumperforatie na kiesextractie: wat doet u?", opts: ["Primair sluiten met een mucoperiostale lap", "Overhechten", "Afwachten", "Antibiotica"], exp: "Antrumperforatie: primair sluiten met een buccale mucoperiostale verschuivingslap."},
    {q: "U extraheert een bovenpremolaar. Welke beweging maakt u eerst?", opts: ["Luxatie palatinaal", "Luxatie buccaal", "Rotatie", "Tractie"], exp: "Eerste beweging bij extractie bovenpremolaar: palatinale luxatie."},
    {q: "Tuberfractuur: kies extraheren en tuber terugplaatsen. Juist?", opts: ["Juist", "Onjuist"], exp: "Juist. Tuber reponeren en fixeren bij tuberfractuur is de juiste behandeling."},
    {q: "Een 21-jarige man heeft een groeiende zwelling bij 11-21, geen klachten. Wat doet u eerst?", opts: ["Vitaliteitstest", "Röntgenfoto", "Biopsie", "Antibiotica"], exp: "Eerst vitaliteitstest: bepaal of de oorzaak endodontisch of cysteus is."},
    {q: "Kunnen we het geslacht bepalen via gebitsstudie?", opts: ["Juist", "Onjuist"], exp: "Juist. Forensische tandheelkunde: geslacht bepaalbaar via tandgrootte, emaildikte."},
    {q: "Klinisch kenmerk bij pterygomandibulaire loge-abces?", opts: ["Trismus", "Gezwollen wang", "Fluctuatie extraoraal", "Koorts"], exp: "Pterygomandibulaire loge-abces: trismus door betrokkenheid pterygoideus medialis."},
    {q: "Welke M3 onderkaak is moeilijker te verwijderen?", opts: ["Disto-angulair", "Buccolinguaal", "Mesiaal-angulair", "Horizontaal"], exp: "Disto-angulaire M3: moeilijkste positie door gebrek aan ruimte en ongunstige hefboomwerking."},
    {q: "Kenmerk van dentogene sinusitis?", opts: ["Enkelzijdige foetide neusafvloed", "Verstopte neus bilateraal", "Pijn sinus frontalis", "Koorts"], exp: "Dentogene sinusitis: enkelvoudige foetide neusafvloed ipsilateraal."},
    {q: "Centraal reuzecelgranuloom: waarmee onderscheidt het zich radiologisch?", opts: ["Van een mixoom (myxoom)", "Van een odontoom", "Van een ameloblastoom", "Van een radiculaire cyste"], exp: "Radiologisch onderscheid van centraal reuzecelgranuloom: van mixoom/myxoom."},
    {q: "Hoe herkent u een wortel(radix)-tang?", opts: ["Bekken liggen op elkaar bij sluiting", "S-vormige vorm", "Bredere bekken", "Kortere handgreep"], exp: "Worteltang: smallere bekken die bij sluiting op elkaar liggen."},
    {q: "Beleid bij focale scleroserende osteomyelitis?", opts: ["Afwachten", "Extractie", "Antibiotica", "Chirurgische verwijdering"], exp: "Focale scleroserende osteomyelitis: conservatief beleid, afwachten en oorzaak behandelen."},
    {q: "Hoe behandelt u een subperiostaal abces?", opts: ["Incisie door het periost en drainage", "Endodontische behandeling", "Antibiotica zonder drainage", "Afwachten"], exp: "Subperiostaal abces: incisie en drainage door het periost."},
    {q: "Is zwelling van de omslagplooi met lichte pijn kenmerkend voor een subperiostaal abces?", opts: ["Juist", "Onjuist"], exp: "Juist. Subperiostaal abces: zwelling van de omslagplooi, lichte drukpijn, fluctuatie."},
    {q: "Mucositis rondom een implantaat wordt behandeld door optimaliseren mondhygiëne, mechanische reiniging en CHX. Is dit voldoende?", opts: ["Juist", "Onjuist"], exp: "Juist. Mucositis (gingivitis equivalent rond implantaat) is reversibel met MH-optimalisatie, reiniging en CHX-spoeling."}
  ]
},

// ═══════════════════════════════════════════════
// ETHIEK & SOCIALE TANDHEELKUNDE – JUNI 2025
// ═══════════════════════════════════════════════
sociale_cikmis_2025juni: {
  title: "Ethiek & Sociale Tandheelkunde Çıkmış – 2025 Juni",
  questions: [
    {q: "Noem een symptoom van een paniekstoornis (voor de MC-vraag: welk is GEEN symptoom)?", opts: ["Hartkloppingen, kortademigheid en gevoel van wurging", "Rustige ademhaling en ontspanning", "Verhoogde hartfrequentie en zweten", "Gevoel van derealisatie of depersonalisatie"], exp: "Paniekstoornis: hartkloppingen, kortademigheid, gevoel van stikken, zweten, derealisatie. Rustige ademhaling is GEEN symptoom."},
    {q: "Wat betekent het principe van respect voor autonomie bij de tandarts?", opts: ["De patiënt heeft het recht om zelf beslissingen te nemen over zijn behandeling na adequate informatie", "De tandarts beslist wat het beste is voor de patiënt", "De patiënt volgt altijd het advies van de tandarts", "Autonomie geldt alleen voor volwassenen"], exp: "Respect voor autonomie = het recht van de patiënt om, na adequate informatie, zelf te beslissen over zijn behandeling."},
    {q: "Voor wie geldt de WKKGZ (Wet kwaliteit, klachten en geschillen zorg)?", opts: ["Zowel zorgverleners als zorgaanbieders (beide)", "Alleen zorgverleners", "Alleen zorgaanbieders", "Alleen patiënten"], exp: "WKKGZ geldt voor zowel zorgverleners als zorgaanbieders (beide)."},
    {q: "Welke wet regelt de informatieplicht en het toestemmingsvereiste in de tandheelkunde?", opts: ["WGBO (Wet Geneeskundige Behandelovereenkomst)", "WKKGZ", "BIG-wet", "Zorgverzekeringswet"], exp: "WGBO regelt o.a. informatieplicht, toestemmingsvereiste (informed consent), dossierplicht en geheimhouding."},
    {q: "Wat valt onder de basisverzekering in de tandheelkunde?", opts: ["Bijzondere tandheelkunde voor jeugd en volwassenen (AWBZ/bijzondere tandheelkunde)", "Partiële prothese voor ouderen", "Orthodontische behandelingen voor jongeren", "Implantaten"], exp: "Onder de basisverzekering valt bijzondere tandheelkunde voor patiënten die niet in de reguliere praktijk behandeld kunnen worden."},
    {q: "Wat zijn twee voordelen van een uitneembare prothese bij een patiënt met Downsyndroom?", opts: ["Gemakkelijk te reinigen en geen chirurgie nodig", "Betere esthetiek en meer comfort", "Goedkoper dan implantaten en snelle plaatsing", "Stabielere occlusie en minder onderhoud"], exp: "Uitneembare prothese bij Downsyndroom: voordelen zijn gemakkelijk reinigen (buiten de mond) en geen invasieve chirurgie."},
    {q: "Noem een patiëntengroep waarop bijzondere tandheelkunde zich richt.", opts: ["Patiënten met ernstige geestelijke beperking", "Gezonde volwassenen", "Kinderen zonder behandelvrees", "Ouderen met goede mondhygiëne"], exp: "Bijzondere tandheelkunde: patiënten met ernstige somatische, psychische of verstandelijke beperkingen die extra zorg nodig hebben."},
    {q: "Welk onderdeel hoort bij de WGBO?", opts: ["Informed consent (toestemmingsvereiste)", "Klachtenprocedure", "Kwaliteitsregistratie", "Declaratieverplichting"], exp: "WGBO: informatieplicht, toestemmingsvereiste (informed consent), inzage dossier, geheimhouding, vertegenwoordiging."},
    {q: "Hoe respecteert een tandarts de autonomie van een patiënt concreet?", opts: ["Door de patiënt volledig te informeren over diagnose, opties en risicos, zodat hij een geïnformeerde keuze kan maken", "Door het beste behandelplan te kiezen zonder overleg", "Door de patiënt door te verwijzen", "Door alleen kleine ingrepen te doen"], exp: "Respect voor autonomie: volledige en begrijpelijke informatie geven en de patiënt zelf laten beslissen (informed consent)."},
    {q: "Welke behandelingen kan een tandarts delegeren aan een mondhygiënist?", opts: ["Preventieve mondverzorging en niet-invasieve behandelingen", "Invasieve mondverzorging", "Kroon cementeren", "Wortelkanaalbehandeling"], exp: "Delegeerbaar: preventieve mondverzorging, niet-invasieve cosmetische handelingen. Niet delegeerbaar: invasieve handelingen."}
  ]
},

// ═══════════════════════════════════════════════
// ETHIEK & SOCIALE TANDHEELKUNDE – DECEMBER 2025
// ═══════════════════════════════════════════════
sociale_cikmis_2025dec: {
  title: "Ethiek & Sociale Tandheelkunde Çıkmış – 2025 December",
  questions: [
    {q: "Welk is GEEN symptoom van een paniekstoornis?", opts: ["Rustige ademhaling en ontspanning", "Hartkloppingen", "Gevoel van stikken", "Zweten en beven"], exp: "Paniekstoornis: hartkloppingen, kortademigheid, zweten, beven, gevoel van stikken. Rustige ademhaling is GEEN symptoom."},
    {q: "Wat betekent respect voor autonomie?", opts: ["De patiënt heeft het recht om, na informatie, zelf te beslissen over zijn behandeling", "De tandarts beslist wat het beste is", "Autonomie geldt alleen voor wilsbekwame volwassenen", "De patiënt volgt het behandelplan van de tandarts"], exp: "Autonomie = zelfbeschikkingsrecht: na adequate informatie zelf beslissen."},
    {q: "Voor wie geldt de WKKGZ?", opts: ["Zowel zorgverleners als zorgaanbieders", "Alleen zorgverleners", "Alleen zorgaanbieders", "Alleen voor ziekenhuizen"], exp: "WKKGZ geldt voor beide: zorgverleners én zorgaanbieders."},
    {q: "Welke wet regelt de dossierplicht in de tandheelkunde?", opts: ["WGBO", "WKKGZ", "BIG-wet", "AVG"], exp: "WGBO regelt de dossierplicht, informatieplicht, toestemmingsvereiste en geheimhouding."},
    {q: "Wat valt onder de basisverzekering in de tandheelkunde?", opts: ["Bijzondere tandheelkunde voor jeugd en volwassenen", "Partiële prothese voor ouderen", "Orthodontie voor jongeren", "Implantaten"], exp: "Basisverzekering: bijzondere tandheelkunde voor patiënten die niet regulier behandeld kunnen worden."},
    {q: "Wat is de patiënt-tandarts relatie juridisch gezien?", opts: ["Een behandelovereenkomst (contract)", "Een sociale relatie", "Een vrijwillige relatie zonder juridische basis", "Geen juridische relatie"], exp: "Patiënt-tandarts relatie = behandelovereenkomst (WGBO), een contractuele relatie."},
    {q: "Welk advies geeft u aan een patiënt met verstandelijke beperking en slechte mondhygiëne?", opts: ["Eenvoudige poetsinstructies, elektrische tandenborstel en regelmatige tandheelkundige controles", "Mondspoeling als enige maatregel", "Afwachten tot er klachten zijn", "Doorverwijzen zonder instructies"], exp: "Bij verstandelijke beperking: eenvoudige, herhaalbare instructies, elektrische tandenborstel, frequente controles."},
    {q: "Wat omvat informed consent?", opts: ["Informatie over diagnose, behandelplan, risicos en alternatieven, gevolgd door toestemming van de patiënt", "Alleen de handtekening van de patiënt", "Garantie geven dat de behandeling slaagt", "Juridische bescherming van de tandarts"], exp: "Informed consent: volledige informatie + vrijwillige toestemming van de patiënt."},
    {q: "Welke handelingen kan een tandarts delegeren?", opts: ["Preventieve mondverzorging en niet-invasieve cosmetische behandelingen", "Invasieve behandelingen", "Wortelkanaalbehandeling", "Kroon cementeren"], exp: "Delegeerbaar aan mondhygiënist/preventieassistent: preventieve zorg, niet-invasieve handelingen."},
    {q: "Waarom is een dossierplicht belangrijk?", opts: ["Voor continuïteit van zorg, juridische verantwoording en kwaliteitsbewaking", "Alleen voor juridische bescherming van de tandarts", "Om het behandelplan vast te leggen voor de verzekering", "Voor statistische doeleinden"], exp: "Dossierplicht: continuïteit van zorg, juridische verantwoording, communicatie en kwaliteitsbewaking."}
  ]
}

};
window.QUIZZES = Object.assign(window.QUIZZES || {}, sets);
})();
