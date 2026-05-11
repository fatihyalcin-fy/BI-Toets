(function(){
var sets = {

  /* ===== CARIOLOGIE ===== */
  cario_cikmis_2022dec: {
    title: 'Cariologie Çıkmış – 2022 December',
    questions: [
      {q: 'Is het wetenschappelijk aangetoond dat NRC (Naar Risicogerichte Cariëszorg) de mondhygiëne verbetert?', opts: ['Onjuist', 'Juist'], exp: 'Er is onvoldoende wetenschappelijk bewijs dat NRC mondhygiëne verbetert.'},
      {q: 'Een 12-jarige heeft de meeste kans op welk type cariës?', opts: ['Pit- en fissuurcariës', 'Approximale cariës'], exp: 'Bij 12-jarigen is pit- en fissuurcariës het meest voorkomend.'},
      {q: 'Waar staat ART voor in de kindertandheelkunde?', opts: ['Atraumatic Restorative Treatment', 'Advanced Restorative Technique'], exp: 'ART staat voor Atraumatic Restorative Treatment, een minimaalinvasieve methode.'},
      {q: 'De bruine verkleuring van dentine door cariës wordt veroorzaakt door:', opts: ['Maillard-reactie (versuikering)', 'Proteolyse'], exp: 'De bruinkleurig van carieus dentine ontstaat door de Maillard-reactie (versuikeringsreactie).'},
      {q: 'Vloeicomposiet gebruiken we NIET als cement voor glasvezelstiften in de wortel omdat:', opts: ['Het meer polymerisatiekrimp heeft', 'Het zich niet goed hecht aan dentine'], exp: 'Vloeicomposiet heeft meer polymerisatiekrimp en is daardoor minder geschikt als stiftcement.'},
      {q: 'Wat is een kenmerk van progressieve secundaire cariës?', opts: ['Randbreuk en grote laesie onder de restauratie', 'Caviteit naast de vulling gevuld met plaque'], exp: 'Progressieve secundaire cariës kenmerkt zich door randbreuk en een grotere laesie onder de restauratie.'},
      {q: 'Gestimuleerd speeksel heeft een lagere pH dan ongestimuleerd speeksel?', opts: ['Onjuist', 'Juist'], exp: 'Gestimuleerd speeksel heeft juist een hogere pH (meer basisch) dan ongestimuleerd speeksel.'},
      {q: 'Wat beschermt onze tanden tegen slijtage door masticatie?', opts: ['Mucinen', 'Amylase'], exp: 'Mucinen in speeksel vormen een beschermende laag en beschermen tanden tegen slijtage.'},
      {q: 'De Tiel-Culemborg-studie over gefluorideerd drinkwater toonde aan dat in de controlestad Culemborg:', opts: ['Witte-vleklaesies gemakkelijker tot cariës progresseerden', 'Er minder kans was op cariës (50%)'], exp: 'Zonder fluoride in drinkwater progresseerden witte-vleklaesies sneller naar cariës.'},
      {q: 'RMGIC (glasionomeercement) kan hechten aan:', opts: ['Dentine en glazuur', 'Alleen glazuur'], exp: 'RMGIC hecht chemisch aan zowel dentine als glazuur.'},
      {q: 'Welke monomer penetreert gemakkelijker door handschoenen?', opts: ['HEMA', 'Bis-GMA'], exp: 'HEMA is een kleinere, hydrofiele monomer die gemakkelijker door latexhandschoenen diffundeert.'},
      {q: 'Wat is de composietkrimp bij molaarrestauraties?', opts: ['4% van het volume', 'Minder dan bij frontelementen'], exp: 'Composiet krimpt ongeveer 2-4% bij polymerisatie; bij molaren is dit vergelijkbaar met front.'},
      {q: 'Uit onderzoek geeft welke hechtingstechniek de slechtste klinische prognose?', opts: ['Twee-stap etch-and-rinse', 'Drie-stap etch-and-rinse'], exp: 'Twee-stap etch-and-rinse systemen scoren klinisch slechter dan drie-stap systemen.'},
      {q: 'Wat betekent Ekstrand-score 4?', opts: ['Cariës reikt tot halverwege in dentine', 'Cariës reikt tot aan de pulpa'], exp: 'Ekstrand-score 4 staat voor carieuze laesie die tot halverwege in dentine reikt.'},
      {q: 'Om lekkage te voorkomen brengen we na wortelkanaalbehandeling aan:', opts: ['Een dunne laag RMGIC', 'Guttapercha'], exp: 'Een dunne laag RMGIC sluit de kanaalingang af en voorkomt coronal lekkage.'}
    ]
  },

  cario_cikmis_2023dec: {
    title: 'Cariologie Çıkmış – 2023 December',
    questions: [
      {q: 'Welke monomer gaat makkelijker door handschoenen?', opts: ['HEMA', 'Bis-GMA'], exp: 'HEMA is kleiner en hydrofieler en diffundeert sneller door latexhandschoenen.'},
      {q: 'Wat is juist over een posterior composietvulling?', opts: ['De vulling krimpt ca. 4% van het volume', 'Posterior composiet krimpt minder dan anterieur'], exp: 'Composiet krimpt bij polymerisatie circa 2-4% in volume, ook bij posterieure vullingen.'},
      {q: 'Uit onderzoek geeft welke methode de slechtste klinische prognose?', opts: ['Twee-stap etch-and-rinse', 'Drie-stap etch-and-rinse'], exp: 'Twee-stap etch-and-rinse heeft klinisch de slechtste prognose vergeleken met drie-stap.'},
      {q: 'Een foto toont asymmetrische incisale hypoplasie (11, 12, 21). Wat is de meest waarschijnlijke diagnose?', opts: ['Hypomineralisatie', 'Fluorosis'], exp: 'Asymmetrische opaciteiten op slechts enkele elementen wijzen op hypomineralisatie (MIH).'},
      {q: 'Een foto toont een kuiltje op een knobbelpunt. Wat is de diagnose?', opts: ['Erosie', 'Abrasie'], exp: 'Erosie geeft typisch cupsidvormige defecten op knobbelpunten door zuur.'},
      {q: 'Een laesie op een knobbelpunt met zwarte verkleuring en weefselverlies (doorbescheemering) is:', opts: ['Actief', 'Inactief'], exp: 'Zwarte verkleuring met weefselverlies op een knobbel duidt op een actieve cariëslaesie.'},
      {q: 'Wat is de Ekstrand-score 4?', opts: ['Cariës tot halverwege in dentine', 'Cariës tot aan de pulpa'], exp: 'Ekstrand-score 4 betekent dat de carieuze laesie halverwege in het dentine reikt.'},
      {q: 'Een 12-jarige patient heeft de meeste kans op welk type cariës?', opts: ['Pit- en fissuurcariës', 'Approximale cariës'], exp: 'Op 12-jarige leeftijd is pit- en fissuurcariës de meest voorkomende cariësvorm.'},
      {q: 'Een patiënt heeft Ekstrand 1. Na een jaar is het Ekstrand 2. Wat doe je?', opts: ['Preventie (fissurlak, fluoride)', 'Restauratie plaatsen'], exp: 'Bij progressie van Ekstrand 1 naar 2 is preventie (fissurlak/fluoride) de aangewezen behandeling.'},
      {q: 'Wat is ICDAS-score 3?', opts: ['Zichtbare laesie in vochtig glazuur, breekt niet bij sonderen', 'Cavitatie tot in dentine'], exp: 'ICDAS 3 is een zichtbare verandering in droog glazuur die niet breekt bij sonderen.'},
      {q: 'GIC (glasionomeercement) hardt volledig uit na:', opts: ['Meerdere dagen', 'Enkele uren'], exp: 'GIC bereikt volledige uitharding pas na meerdere dagen door een langzame zuurbase-reactie.'},
      {q: 'Secundaire cariës kenmerkt zich door plaqueopbouw op de restauratiegrens. Juist of onjuist?', opts: ['Juist', 'Onjuist'], exp: 'Plaqueopbouw op de restauratiegrens is inderdaad een kenmerk van (recidief)cariës.'},
      {q: 'Welk element heeft vrijwel nooit een anatomische variant (extra groeve/wortel)?', opts: ['Tweede premolaar (45)', 'Eerste premolaar (24)'], exp: 'De tweede premolaar onderkaken heeft zelden anatomische varianten; de eerste premolaar bovenkaken vaak wel.'},
      {q: 'Pulpitis in combinatie met een periapicale laesie onder een intacte kroon: is de pulpa altijd geïnfecteerd?', opts: ['Juist', 'Onjuist'], exp: 'Een intacte kroon sluit bacteriële infectie niet uit; pulpitis met periapicale laesie impliceert infectie.'},
      {q: 'Wat is de correcte definitie van conditioneren in de gedragstherapie?', opts: ['Leren door ervaring', 'Wennen aan een nieuwe situatie'], exp: 'Conditioneren is een leerproces waarbij gedrag verandert door ervaring (stimulus-respons).'}
    ]
  },

  /* ===== ENDODONTOLOGIE ===== */
  endo_cikmis_2022dec: {
    title: 'Endodontologie Çıkmış – 2022 December',
    questions: [
      {q: 'Een essentieel verschil tussen MTA en nieuwere calciumsilicaatmaterialen is dat nieuwere materialen geen zware metalen bevatten?', opts: ['Juist', 'Onjuist'], exp: 'Nieuwere calciumsilicaten (bijv. Biodentine) bevatten geen bismutoxide en veroorzaken geen verkleuring.'},
      {q: 'Pulpotomie kan leiden tot interne resorptie en obliteratie?', opts: ['Juist', 'Onjuist'], exp: 'Pulpotomie kan zowel interne resorptie als kanaalobliteratie als complicatie geven.'},
      {q: 'Welk hechtvlak is het zwakst bij een stiftopbouw?', opts: ['Tussen composiet en wortelwand (dentine)', 'Tussen stift en composiet'], exp: 'De hechting van composiet aan radiculair dentine (wortelwand) is het meest kwetsbaar bij stiftopbouwen.'},
      {q: 'Wat is de vorm van de toegangscaviteit van een bovenste premolaar?', opts: ['Ovaal', 'Rond'], exp: 'De toegangscaviteit van een bovenpremolaar is ovaalvormig door de twee kanalen (buccaal en palatinaal).'},
      {q: 'De toegangscaviteit van een bovenmolaar blijft mesial van de oblique richel?', opts: ['Juist', 'Onjuist'], exp: 'De toegangscaviteit van een bovenmolaar wordt aan de mesiale kant van de oblique richel aangelegd.'},
      {q: 'MTA-verkleuring wordt veroorzaakt door:', opts: ['Bismutoxide', 'Calciumsilicaat'], exp: 'Bismutoxide in traditionele MTA is verantwoordelijk voor tandverkleuring na behandeling.'},
      {q: 'EDTA wordt gebruikt om de smeerlaag op te lossen?', opts: ['Juist', 'Onjuist'], exp: 'EDTA is een chelaatvormer die de smeerlaag (smear layer) effectief verwijdert.'},
      {q: 'Wat is het doel van wortelkanaalpreparatie?', opts: ['Biofilm van alle kanaalwanden verwijderen voor optimale irrigatie', 'Alleen de apicale reiniging'], exp: 'Wortelkanaalpreparatie dient om biofilm van alle wanden te verwijderen voor effectieve irrigatie.'},
      {q: 'Bij een wortelkanaalbehandeling in twee zittingen: wat brengen we tussen de zittingen in?', opts: ['Geen medicament (ACTA-protocol)', 'Calciumhydroxide'], exp: 'Het ACTA-protocol adviseert afsluiten zonder intervisitair medicament; CaOH is een alternatief maar niet standaard.'},
      {q: 'Welke zenuw innerveeert de tanden primair voor pijn?', opts: ['C-vezels (ongemyeliniseerd)', 'A-vezels (gemyeliniseerd)'], exp: 'C-vezels registreren chronische, zeurende pijn in de pulpa; A-vezels scherpe, directe pijn.'},
      {q: 'De kans op napijn na wortelkanaalbehandeling bij preoperatieve pijn is:', opts: ['20-40%', '3-5%'], exp: 'Als er vóór de behandeling pijn was, is de kans op napijn 20-40%.'},
      {q: 'Dual-cure cement wordt gebruikt bij een stift omdat:', opts: ['Het hecht aan zowel dentine als de stift', 'Het lichtgehard kan worden'], exp: 'Dual-cure cement polymeriseert chemisch in diepere kanaalgedeelten waar licht niet doordringt.'},
      {q: 'De meest voorkomende complicatie van een metalen stift is:', opts: ['Loskomen van de stift', 'Fractuur van de wortel'], exp: 'Loskomen is de meest gerapporteerde complicatie van metalen stiften.'},
      {q: 'Guttapercha bestaat voornamelijk uit:', opts: ['Guttapercha (transpolyisopreeen) en zinkoxide', 'Calciumhydroxide en guttapercha'], exp: 'Guttapercha-punten bestaan uit guttapercha (trans-polyisopreen) en zinkoxide als hoofdcomponenten.'},
      {q: 'Koude compactie van guttapercha is de beste obturatiemethode?', opts: ['Onjuist', 'Juist'], exp: 'Warme guttapercha-technieken (bijv. injectie) geven betere afdichting dan koude laterale compactie.'}
    ]
  },

  endo_cikmis_2023dec: {
    title: 'Endodontologie Çıkmış – 2023 December',
    questions: [
      {q: 'Wat is de toegangscaviteitvorm van een bovenste premolaar?', opts: ['Ovaal', 'Rond'], exp: 'Bovenpremolaren hebben twee kanalen (buccaal/palatinaal) en een ovale toegangscaviteit.'},
      {q: 'MTA-verkleuring wordt veroorzaakt door:', opts: ['Bismutoxide', 'Calciumsilicaat'], exp: 'Bismutoxide in klassieke MTA veroorzaakt donkere tandverkleuring.'},
      {q: 'Dual-cure cement hecht aan dentine en de stift – gebruik dual-cure?', opts: ['Juist', 'Onjuist'], exp: 'Dual-cure cement is aangewezen omdat het zowel licht- als chemisch polymeriseert en ook apicaal hecht.'},
      {q: 'EDTA lost de smeerlaag op?', opts: ['Juist', 'Onjuist'], exp: 'EDTA is een chelaatvormer die effectief de smeerlaag van de kanaalwand verwijdert.'},
      {q: 'De wortelkanaalbehandeling in twee zittingen: wat is het ACTA-protocol?', opts: ['Kanaalmond afdekken zonder intervisitair medicament', 'Calciumhydroxide in het kanaal plaatsen'], exp: 'Het ACTA-protocol sluit kanalen af zonder medicament; dit is de eerste keuze in Nederland.'},
      {q: 'De kans op napijn bij preoperatieve pijn vóór wortelkanaalbehandeling is:', opts: ['20-40%', '3-5%'], exp: 'Preoperatieve pijn verhoogt de kans op napijn aanzienlijk: 20-40%.'},
      {q: 'Welke zenuw registreert pijn in de pulpa?', opts: ['C-vezels', 'A-vezels'], exp: 'C-vezels (ongemyeliniseerd) zorgen voor de zeurende, chronische pijncomponent in de pulpa.'},
      {q: 'De meest voorkomende complicatie van een metalen stift is:', opts: ['Loskomen van de stift', 'Wortelfractuur'], exp: 'De meest gerapporteerde complicatie van metalen stiften is het loskomen.'},
      {q: 'Guttapercha bestaat voornamelijk uit:', opts: ['Trans-polyisopreen en zinkoxide', 'Calciumhydroxide en zinkoxide'], exp: 'Guttapercha-punten bevatten voornamelijk trans-polyisopreen (guttapercha) en zinkoxide.'},
      {q: 'Bij tunnel-operatie voor een graad-III-furcatiedefect: wat is de meest voorkomende reden van tandverlies?', opts: ['Cariës', 'Fractuur'], exp: 'Na tunneloperatie is cariës in het furcatiegebied de meest frequente oorzaak van tandverlies.'},
      {q: 'De retentie van een gouden kroon na wortelkanaalbehandeling neemt af met ca.:', opts: ['50%', '60%'], exp: 'Wortelkanaalbehandeling reduceert de kroonretentie door verlies van pulpale ondersteuning met circa 50%.'},
      {q: 'Acute pulpitis is op de röntgenfoto zichtbaar als verbreding van het parodontaal ligament?', opts: ['Onjuist', 'Juist'], exp: 'Acute pulpitis toont geen röntgenologische wijzigingen; PDL-verbreding treedt later op bij periapicale ontsteking.'},
      {q: 'Succes van apexresectie bedraagt gemiddeld:', opts: ['70%', '45%'], exp: 'De succeskans van apexresectie ligt op circa 70% in de literatuur.'},
      {q: 'Het doel van wortelkanaalpreparatie is:', opts: ['Biofilm van alle kanaalwanden verwijderen', 'Alleen de apex reinigen'], exp: 'Volledige biofilmverwijdering van alle wanden is het primaire doel van preparatie.'},
      {q: 'Welk element heeft zelden een anatomische wortelvariant?', opts: ['Tweede premolaar (45)', 'Eerste premolaar (24)'], exp: 'Tand 45 heeft zelden anatomische varianten; 24 heeft vaker een extra wortel of groeve.'}
    ]
  },

  /* ===== PARODONTOLOGIE ===== */
  paro_cikmis_2022dec: {
    title: 'Parodontologie Çıkmış – 2022 December',
    questions: [
      {q: 'We behalen meer aanhechtingswinst na parodontale behandeling bij:', opts: ['6 mm pocket bij 36 met buccale furcatie graad 2', '6 mm pocket bij 26 met mesiale furcatie graad 2'], exp: 'Aanhechtingswinst is groter bij ondermolaren dan bovenmolaren; furcatie op 26 heeft slechtere prognose.'},
      {q: 'PPS (Periodontale Proefzitting Score) wordt gebruikt voor:', opts: ['Identificeren van mogelijke parodontitis', 'Bepalen van de ernst van parodontitis'], exp: 'PPS screent op de aanwezigheid van parodontitis; verdere diagnostiek bepaalt de ernst.'},
      {q: 'CHX wordt gegeven voor halitose?', opts: ['Juist', 'Onjuist'], exp: 'CHX heeft antibacteriële werking en reduceert vluchtige zwavelverbindingen die halitose veroorzaken.'},
      {q: 'CHX is:', opts: ['Antibacterieel en antiplaque (beide)', 'Alleen antibacterieel'], exp: 'CHX heeft zowel een antibacterieel als antiplaque-effect.'},
      {q: 'Wat is een nadeel van chloorhexidine (CHX)?', opts: ['Verkleuring van tanden en smaakverandering', 'Zwelling van de parotis'], exp: 'Bekende nadelen van CHX zijn tandsteen, tandverkleuring en smaakverandering.'},
      {q: 'Intra-orale halitose kan door stress ontstaan?', opts: ['Juist', 'Onjuist'], exp: 'Stress vermindert speekselsecretie, wat bacteriële groei en daarmee halitose bevordert.'},
      {q: 'Patiënten boven de 50 jaar: welk percentage lijdt aan parodontitis?', opts: ['25%', '50%'], exp: 'Circa 25% van de volwassenen boven 50 jaar heeft ernstige parodontitis (Canvas-referentie).'},
      {q: 'Welk antibioticum geef je bij necrotiserende parodontitis?', opts: ['Amoxicilline met metronidazol', 'Alleen amoxicilline'], exp: 'De combinatie amoxicilline + metronidazol is de standaard bij necrotiserende parodontitis.'},
      {q: 'Een pocket van 10 mm gereduceerd tot 6 mm na behandeling bij element 12. Is dit voldoende?', opts: ['Voldoende', 'Onvoldoende'], exp: 'Een reductie van 10 mm naar 6 mm is klinisch significant en wordt als voldoende beschouwd.'},
      {q: 'Welke situatie heeft een gunstiger prognose?', opts: ['10 mm pocket bij 13 (molaar zonder furcatie)', '6 mm pocket bij 26 (furcatie graad 2)'], exp: 'Furcatiebetrokkenheid verslechtert de prognose; een diepe pocket zonder furcatie heeft betere prognose.'},
      {q: 'Een 16-jarige patient met pijnlijke gingiva, vieze smaak en losse tanden: diagnose?', opts: ['ANUG/ANUP', 'Agressieve parodontitis'], exp: 'ANUG/ANUP (acute necrotiserende gingivitis/parodontitis) presenteert met pijn, foetide adem en ulcera.'},
      {q: 'Bij welke parodontitis-patiënt geef je antibiotica?', opts: ['Goede mondhygiëne maar persisterende diepe pockets', 'Rokende patiënt met slechte mondhygiëne'], exp: 'Antibiotica zijn geïndiceerd bij patiënten met goede MH maar toch persisterende diepe pockets.'},
      {q: 'Plaqueindex minder dan 20% – geen verdere instructie nodig?', opts: ['Juist', 'Onjuist'], exp: 'Een plaqueindex < 20% wordt als acceptabel beschouwd en vereist geen aanvullende instructie.'},
      {q: 'Wat is de pocket-depth die we meten bij pocketmeting?', opts: ['Van de gingivalrand tot de diepste punt van het sulcus/pockets-epitheel', 'Van het bot tot de gingivalrand'], exp: 'Pocketdiepte wordt gemeten van de gingivalrand tot de diepste plek van het sulcusepitheel.'},
      {q: 'PPS tot 5 mm krijgt score 2?', opts: ['Juist', 'Onjuist'], exp: 'Een PPS van ≤ 5 mm valt in score 2 van de basic periodontal examination.'}
    ]
  },

  paro_cikmis_2023dec: {
    title: 'Parodontologie Çıkmış – 2023 December',
    questions: [
      {q: 'Welk antibioticum geef je bij necrotiserende parodontitis?', opts: ['Amoxicilline met metronidazol', 'Alleen amoxicilline'], exp: 'Combinatie amoxicilline + metronidazol is standaard bij ANUG/ANUP.'},
      {q: 'PPS tot 5 mm geeft score 2?', opts: ['Juist', 'Onjuist'], exp: 'PPS ≤ 5 mm correspondeert met score 2 bij de BPE-screening.'},
      {q: 'Pocket van 10 mm gereduceerd tot 6 mm (element 12): voldoende?', opts: ['Voldoende', 'Onvoldoende'], exp: 'Een reductie van 10→6 mm is klinisch significant en wordt als voldoende beschouwd.'},
      {q: 'Welke situatie geeft een gunstiger prognose?', opts: ['10 mm pocket bij 13 zonder furcatie', '6 mm pocket bij 26 met furcatie graad 2'], exp: 'Furcatiebetrokkenheid verslechtert de prognose; diepe pocket zonder furcatie is prognostisch beter.'},
      {q: 'Intra-orale halitose kan door stress ontstaan?', opts: ['Juist', 'Onjuist'], exp: 'Stress verlaagt speekselsecretie, bevordert anaerobe bacteriën en daarmee halitose.'},
      {q: 'Beste behandeling voor intra-orale halitose?', opts: ['Tongscraper + mondspoelmiddel met zink', 'Alleen mondspoelmiddel met CHX'], exp: 'Combinatie van tongschraper en zink-bevattend mondspoelmiddel is het effectiefst bij intra-orale halitose.'},
      {q: 'Een 16-jarige patient heeft pijnlijke gingiva, vieze smaak en losse tanden: diagnose?', opts: ['ANUG/ANUP', 'Agressieve parodontitis'], exp: 'ANUG/ANUP presenteert klassiek met pijn, ulcera en foetide adem bij jonge mensen.'},
      {q: 'Patiënten boven de 50 jaar: welk percentage heeft parodontitis?', opts: ['25%', '50%'], exp: 'Volgens Canvas heeft 25% van de mensen boven de 50 jaar parodontitis.'},
      {q: 'Na paro-chirurgie bij graad III furcatiedefect (tunneloperatie): meest voorkomende reden van tandverlies?', opts: ['Cariës', 'Fractuur'], exp: 'Na tunneloperatie is cariës in het furcatiegebied de meest frequente reden van tandbehoud-verlies.'},
      {q: 'CHX nadelen zijn: smaakverandering, tandsteen en verkleuring?', opts: ['Juist', 'Onjuist'], exp: 'Dit zijn de klassieke bijwerkingen van langdurig CHX-gebruik.'},
      {q: 'Bij welke paro-patiënt gebruik je antibiotica?', opts: ['Goede mondhygiëne maar nog persisterende diepe pockets', 'Rokende patiënt met slechte mondhygiëne'], exp: 'AB is geïndiceerd bij refractaire parodontitis ondanks goede MH.'},
      {q: 'Plaqueindex minder dan 20% – geen instructie nodig?', opts: ['Juist', 'Onjuist'], exp: 'PI < 20% is acceptabel; geen aanvullende instructie nodig.'},
      {q: 'Wat meten we bij pocketdieptemeting?', opts: ['Van gingivalrand tot diepste punt sulcusepitheel', 'Van bot tot gingivalrand'], exp: 'Pocketdiepte = van gingivalrand tot diepste punt van het zakepitheel.'},
      {q: 'Welke is de beste interdentale reiniging?', opts: ['Ragers/interdentaalborstel', 'Tandenstokers'], exp: 'Interdentaalborstels (ragers) reinigen effectiever dan tandenstokers, met name bij aanwezige parodontale pockets.'}
    ]
  },

  /* ===== KINDERTANDHEELKUNDE (PEDO) ===== */
  pedo_cikmis_2022dec: {
    title: 'Kindertandheelkunde Çıkmış – 2022 December',
    questions: [
      {q: 'Hoe reageert een kind op angst in de tandartspraktijk?', opts: ['Door coping (actieve aanpassingsstrategie)', 'Door conditionering'], exp: 'Coping is de manier waarop een kind actief omgaat met angst en stressvolle situaties.'},
      {q: 'Tell-Show-Do en shaping zijn beide voorbeelden van:', opts: ['Leren in stapjes (gedragsshaping)', 'Conditioneren'], exp: 'Zowel Tell-Show-Do als shaping zijn gedragstechnieken gebaseerd op stapsgewijs leren.'},
      {q: 'Wanneer is de mondgezondheid het best bij kinderen?', opts: ['Als het kind het eerste bezoek vóór het 4e levensjaar brengt', 'Na het doorkomen van de eerste melktanden'], exp: 'Vroeg contact met de tandarts (vóór leeftijd 4) bevordert mondgezondheid op lange termijn.'},
      {q: 'Ouders hebben angst voor de tandarts: gevolg voor het kind?', opts: ['Kinderen hebben ook angst en slechtere mondhygiëne', 'Goede mondzorg omdat ouders extra letten op het kind'], exp: 'Ouderlijke tandartsangst correleert met tandartsangst en slechtere mondgezondheid bij het kind.'},
      {q: 'Hoe vaak per jaar wordt zilveraminefluoride (SDF) aangebracht?', opts: ['2 keer per jaar', '5 keer per jaar'], exp: 'SDF wordt aanbevolen 1-2 keer per jaar aan te brengen voor cariësinhibitie.'},
      {q: 'Een kind van 18 maanden: waarom is goede mondzorg belangrijk?', opts: ['Na doorkomen van de eerste melktanden moet mondzorg starten', 'Na het 4e levensjaar'], exp: 'Mondzorg moet starten zodra de eerste melktanden doorbreken (circa 6 maanden).'},
      {q: 'Pijn is subjectief omdat:', opts: ['Er persoonlijke verschillen zijn in pijnbeleving', 'Pijn altijd hetzelfde aanvoelt'], exp: 'Pijn is subjectief door individuele verschillen in perceptie, emotie en context.'},
      {q: 'Een patiëntje met kleine approximale gaatjes; ouders weigeren te poetsen. Wat doe je?', opts: ['Hall-techniek (stainless steel crown)', 'Verwijzen naar kindertandarts als enige optie'], exp: 'De Hall-techniek plaatst een stalen kroon zonder preparatie; minimaal invasief bij medewerking-problemen.'},
      {q: 'Wanneer is de mondgezondheid van een kind beter?', opts: ['Als het kind vóór het 4e jaar voor het eerst naar de tandarts gaat', 'Na het doorkomen van de eerste melktanden'], exp: 'Vroeg eerste tandartsbezoek (< 4 jaar) is geassocieerd met betere mondgezondheid.'},
      {q: 'Eerste blijvende molaar heeft diepe cariës. Wanneer trek je hem voor de tweede molaar?', opts: ['Als de furcatie van de tweede molaar zichtbaar is op de röntgenfoto', 'Na het doorkomen van de tweede molaar'], exp: 'Extractie is optimaal als de furcatie van de tweede molaar röntgenologisch zichtbaar is voor goede mesiale migratie.'},
      {q: 'Zilveraminefluoride wordt aangebracht:', opts: ['2 keer per jaar', '5 keer per jaar'], exp: 'De standaard aanbeveling is 1-2 toepassingen per jaar.'},
      {q: 'ART staat voor:', opts: ['Atraumatic Restorative Treatment', 'Advanced Restorative Technique'], exp: 'ART (Atraumatic Restorative Treatment) is een minimaalinvasieve cariësbehandelingsmethode.'},
      {q: 'PPS-screening: tot welke leeftijd?', opts: ['Vanaf 12 jaar', 'Vanaf 18 jaar'], exp: 'PPS-screening bij jongeren wordt aanbevolen vanaf 12 jaar (volwassen elementen aanwezig).'}
    ]
  },

  pedo_cikmis_2023dec: {
    title: 'Kindertandheelkunde Çıkmış – 2023 December',
    questions: [
      {q: 'Ouders hebben angst voor de tandarts: wat is het gevolg voor het kind?', opts: ['Kind heeft ook angst en slechtere mondhygiëne', 'Kind heeft goede mondzorg'], exp: 'Ouderlijke tandartsangst correleert sterk met tandartsangst en slechtere mondgezondheid bij kinderen.'},
      {q: 'Pijn is subjectief omdat:', opts: ['Er persoonlijke verschillen zijn in pijnbeleving', 'Pijn voor iedereen hetzelfde aanvoelt'], exp: 'Pijnbeleving varieert door individuele biologische, psychologische en sociale factoren.'},
      {q: 'Wanneer is de mondgezondheid van een kind het best?', opts: ['Als het kind vóór het 4e jaar voor het eerst naar de tandarts gaat', 'Na het doorkomen van de eerste melktanden'], exp: 'Vroeg eerste tandartsbezoek (< 4 jaar) is geassocieerd met betere mondgezondheid.'},
      {q: 'Hoe vaak per jaar wordt zilveraminefluoride aangebracht?', opts: ['2 keer per jaar', '5 keer per jaar'], exp: 'SDF wordt 1-2 keer per jaar aangebracht voor cariësinhibitie.'},
      {q: 'Een kind van 12 jaar: meest voorkomend cariëstype?', opts: ['Pit- en fissuurcariës', 'Approximale cariës'], exp: 'Op 12-jarige leeftijd is pit- en fissuurcariës het meest voorkomend.'},
      {q: 'Conditioneren is:', opts: ['Leren door ervaring', 'Wennen aan een nieuwe situatie'], exp: 'Conditioneren is een leertheorie waarbij gedrag verandert door herhaalde ervaringen.'},
      {q: 'Ouders willen tanden van hun kind niet poetsen; kind heeft kleine approximale gaatjes. Wat doe je?', opts: ['Hall-kroon plaatsen', 'Verwijzen naar kindertandarts als enige optie'], exp: 'De Hall-techniek is minimaalinvasief en geschikt bij gebrek aan medewerking van ouders.'},
      {q: 'Tell-Show-Do en shaping zijn voorbeelden van:', opts: ['Leren in stapjes', 'Conditioneren'], exp: 'Beide technieken zijn gebaseerd op stapsgewijze gedragsvorming (shaping).'},
      {q: 'Wanneer eerste blijvende molaar extraheren t.b.v. tweede molaar?', opts: ['Als furcatie van tweede molaar röntgenologisch zichtbaar is', 'Na doorbreken van de tweede molaar'], exp: 'Röntgenologisch zichtbare furcatie van M2 is het juiste moment voor seriemextractie.'},
      {q: 'PPS-screening: vanaf welke leeftijd?', opts: ['Vanaf 12 jaar', 'Vanaf 18 jaar'], exp: 'PPS wordt aanbevolen vanaf 12 jaar als permanente dentitie grotendeels doorgebroken is.'},
      {q: 'Een kind van 9 jaar; eerste molaar met cariës. Wanneer extraheer je?', opts: ['Als de furcatie van de tweede molaar zichtbaar is op röntgenfoto', 'Na volledige wortelvorming tweede molaar'], exp: 'Furcatie van M2 zichtbaar op röntgen is het criterium voor optimale extractietiming.'},
      {q: 'Shaping in de kindertandheelkunde betekent:', opts: ['Gedragsvorming door stapsgewijs leren', 'Wortelkanaalpreparatie'], exp: 'In gedragsmanagement is shaping het stapsgewijs aanleren van gewenst gedrag bij het tandartspraktijkbezoek.'}
    ]
  },

  /* ===== SPEEKSEL ===== */
  speeksel_cikmis_2022dec: {
    title: 'Speeksel Çıkmış – 2022 December',
    questions: [
      {q: 'De bijdrage van de parotisklier aan speeksel in oplopende volgorde is:', opts: ['Slaap < rust < kauwen', 'Rust < slaap < kauwen'], exp: 'Parotis produceert het minst tijdens slaap, meer in rust en het meest bij kauwstimulatie.'},
      {q: 'Gestimuleerd speeksel heeft een lagere pH dan ongestimuleerd speeksel?', opts: ['Onjuist', 'Juist'], exp: 'Gestimuleerd speeksel heeft een hogere pH door meer bicarbonaatbuffering.'},
      {q: 'Wat beschermt onze tanden tegen slijtage door masticatie?', opts: ['Mucinen', 'Amylase'], exp: 'Mucinen vormen een smeerende beschermende laag op het tandoppervlak.'},
      {q: 'CHX wordt gegeven voor halitose?', opts: ['Juist', 'Onjuist'], exp: 'CHX heeft antibacterieel effect en reduceert VSC-producerende bacteriën die halitose veroorzaken.'},
      {q: 'Xerostomie gaat gepaard met hoge speekselsecretie?', opts: ['Onjuist', 'Juist'], exp: 'Xerostomie is per definitie verminderde speekselsecretie of een droge-mondgevoel.'},
      {q: 'Hyposalie wordt gemeten in rust én gestimuleerd?', opts: ['Juist', 'Onjuist'], exp: 'Hyposalie-diagnose vereist meting van zowel rustspeeksel als gestimuleerd speeksel.'},
      {q: 'Welke pH heeft rust-speeksel vergeleken met gestimuleerd speeksel?', opts: ['Rustspeceksel heeft lagere pH dan gestimuleerd speeksel', 'Rustspeeksel heeft hogere pH'], exp: 'Gestimuleerde parotis produceert meer bicarbonaat, dus hogere pH. Rust-speeksel is minder gebufferd en zuurder.'},
      {q: 'De rustbijdrage van de parotis aan totaal speeksel is het laagst?', opts: ['Juist', 'Onjuist'], exp: 'In rust levert de parotis relatief minder bij; submandibulair/sublinguaal domineren.'},
      {q: 'Mucinen beschermen tegen erosie door slijtage?', opts: ['Juist', 'Onjuist'], exp: 'Mucinen vormen een beschermend filmlaagje op het tandoppervlak.'},
      {q: 'Medicijnen kunnen hyposalie veroorzaken?', opts: ['Juist', 'Onjuist'], exp: 'Veel medicijnen (antihistaminica, antidepressiva, diuretica) hebben xerostomie als bijwerking.'},
      {q: 'Speekselstenen komen het meest voor bij de submandibulaklier?', opts: ['Juist', 'Onjuist'], exp: 'De ductus van Wharton (submandibulair) is het langst en meest horizontaal, waardoor stenen vaker voorkomen.'}
    ]
  },

  speeksel_cikmis_2023dec: {
    title: 'Speeksel Çıkmış – 2023 December',
    questions: [
      {q: 'Hyposalie wordt gemeten in rust én bij stimulatie?', opts: ['Juist', 'Onjuist'], exp: 'Diagnose hyposalie vereist meting van rustspeeksel én gestimuleerd speeksel.'},
      {q: 'Rustspeceeksel heeft een lagere pH dan gestimuleerd speeksel?', opts: ['Juist', 'Onjuist'], exp: 'Juist: gestimuleerd speeksel bevat meer bicarbonaat en heeft een hogere pH dan rustspeeksel.'},
      {q: 'Xerostomie gaat gepaard met hoge speekselsecretie?', opts: ['Onjuist', 'Juist'], exp: 'Xerostomie = verminderde speekselsecretie; hoge secretie is het tegendeel.'},
      {q: 'Bijdrage parotis aan speeksel van weinig naar veel:', opts: ['Slaap < rust < kauwen', 'Rust < slaap < kauwen'], exp: 'Parotis secreteert het minst tijdens slaap en het meest bij kauwstimulatie.'},
      {q: 'Mucinen beschermen tanden tegen slijtage door masticatie?', opts: ['Juist', 'Onjuist'], exp: 'Mucinen vormen een beschermend slijmlaagje op het tandoppervlak.'},
      {q: 'Speekselstenen komen het meest voor bij de submandibulaklier?', opts: ['Juist', 'Onjuist'], exp: 'De lange, horizontale ductus Wharton van de submandibulaklier predisponeert voor sialolithiase.'},
      {q: 'Medicijnen zijn een oorzaak van hyposalie?', opts: ['Juist', 'Onjuist'], exp: 'Veel medicijnen (antidepressiva, antihistaminica, diuretica) veroorzaken droge mond.'},
      {q: 'CHX heeft een antibacterieel effect bij halitose?', opts: ['Juist', 'Onjuist'], exp: 'CHX vermindert VSC-producerende bacteriën en heeft zo effect bij halitose.'},
      {q: 'Intra-orale halitose: beste behandeling?', opts: ['Tongscraper + mondspoelmiddel met zink', 'Antibiotica'], exp: 'Mechanische tongschraaptechiek gecombineerd met zink-bevattend mondspoelmiddel is het effectiefst.'}
    ]
  },

  /* ===== RADIOLOGIE ===== */
  radio_cikmis_2023juni: {
    title: 'Radiologie Çıkmış – 2023 Juni',
    questions: [
      {q: 'Wat is de beste röntgencombinatie om apicale botafbraak te interpreteren?', opts: ['Hoog contrast, steile bundel loodrecht op radix, horizontaal tussen contactpunten', 'Laag contrast, vlakke bundel loodrecht op radix, horizontaal tussen contactpunten'], exp: 'Hoog contrast en juiste bundelhoek geven de beste interpretatie van peri-apicale botafbraak.'},
      {q: 'Wat is de beste opname om parodontitis te evalueren?', opts: ['Twee verticale bitewings links en twee rechts', 'OPT'], exp: 'Verticale bitewings geven het meest nauwkeurige beeld van het alveolaire botpatroon bij parodontitis.'},
      {q: 'Wat is de milliamperage (mA)?', opts: ['De hoeveelheid röntgenstralen (intensiteit)', 'De doordringkracht van de stralen (kVp)'], exp: 'Milliamperage bepaalt de hoeveelheid/intensiteit van röntgenfotonen; kVp bepaalt de energie.'},
      {q: 'Als de afstand van focus tot film gehalveerd wordt, wordt de intensiteit van de bundel:', opts: ['Vier maal zo groot', 'Twee maal zo groot'], exp: 'Volgens de wet van het omgekeerde kwadraat: halve afstand = viervoudige intensiteit.'},
      {q: 'Pulpitis is op röntgenfoto zichtbaar als verbreding van het parodontaal ligament?', opts: ['Onjuist', 'Juist'], exp: 'Acute pulpitis is niet röntgenologisch zichtbaar; PDL-verbreding treedt op bij periapicale pathologie.'},
      {q: 'Acute pulpitis geeft botresorptie vergeleken met chronische pulpitis die dit niet doet?', opts: ['Onjuist', 'Juist'], exp: 'Acute pulpitis zelf geeft geen botresorptie; chronische periapicale ontsteking wél.'},
      {q: 'Lamina dura is:', opts: ['Radiopaque', 'Radiolucent'], exp: 'Lamina dura is de radiologisch zichtbare corticale botlaag rondom de wortel – radiopaque.'},
      {q: 'Een 13-jarig kind met element 75 dat nog niet gewisseld is: beste opname?', opts: ['OPT om alle elementen en verstandskiezen te evalueren', 'Periapicale opname van regio 75 alleen'], exp: 'Een OPT geeft overzicht van alle elementen inclusief geïmpacteerde kiezen bij groeidiagnose.'},
      {q: 'Cervicale laesie of externe cervicale resorptie: onderscheid op röntgenfoto?', opts: ['Externe resorptie is onscherp begrensd en buiten het kanaal', 'Cervicale cariës is altijd radiopaque'], exp: 'Externe cervicale resorptie toont een onscherp, irregulair radiolucent beeld buiten het wortelkanaal.'},
      {q: 'Wat is de röntgenbundel bij een foto van de onderkaak waarbij de onderrand mandibula zichtbaar is (te kort gepositioneerd)?', opts: ['Bundel minder steil van boven richten', 'Bundel minder steil van onderen richten'], exp: 'Als de onderrand zichtbaar is, is de bundel te steil van boven; correctie: minder steile bundel van boven.'}
    ]
  },

  /* ===== ORALE PATHOLOGIE ===== */
  pato_cikmis_2022juni: {
    title: 'Orale Pathologie Çıkmış – 2022 Juni',
    questions: [
      {q: 'Wat is de etiologie van lingua geografica?', opts: ['De oorzaak is onbekend', 'Candida albicans'], exp: 'Lingua geografica (benigne migratoire glossitis) heeft een onbekende etiologie.'},
      {q: 'Aften komen het minst voor op:', opts: ['Gingiva en gehemelte (gekeratiniseerd slijmvlies)', 'Binnenzijde onderlip'], exp: 'Aften komen bijna niet voor op gekeratiniseerd slijmvlies zoals gingiva en gehemelte.'},
      {q: 'Bij aften-gelijkende laesies met koorts moet je denken aan:', opts: ['Herpes simplex infectie', 'Lichen planus'], exp: 'Koorts bij aphtheuze laesies wijst op primaire of recidiverende herpetische stomatitis.'},
      {q: 'Bij mondbranden ziet het slijmvlies er normaal uit?', opts: ['Juist', 'Onjuist'], exp: 'Burning mouth syndrome gaat zonder zichtbare afwijkingen van het mondslijmvlies.'},
      {q: 'Bij welke aandoening speelt Candida albicans GEEN etiologische rol?', opts: ['Focale epitheliale hyperplasie (HPV-13/32)', 'Mediane rhomboïde glossitis'], exp: 'Focale epitheliale hyperplasie (ziekte van Heck) wordt veroorzaakt door HPV, niet Candida.'},
      {q: 'Raciale pigmentatie zien we vooral op:', opts: ['Gingiva en alveolaire mucosa', 'Wangslijmvlies'], exp: 'Raciale pigmentatie manifesteert zich het meest op de gingiva en alveolaire mucosa.'},
      {q: 'Welke behandeling kan leiden tot pigmentatie van huid en slijmvlies?', opts: ['Ziekte van Addison', 'Diabetes mellitus'], exp: 'Addison-ziekte (bijnierinsufficiëntie) geeft hyperpigmentatie van huid en slijmvlies.'},
      {q: 'Een papilloom van het mondslijmvlies wordt veroorzaakt door:', opts: ['HPV (humaan papillomavirus)', 'Mechanische irritatie'], exp: 'Orale papillomen worden veroorzaakt door HPV.'},
      {q: 'Mediane rhomboïde glossitis is gerelateerd aan:', opts: ['Candida albicans', 'Virale infectie'], exp: 'Mediane rhomboïde glossitis is een chronische Candida-geassocieerde aandoening van de tongrug.'},
      {q: 'Röntgenologisch kan een centraal reuscelgranuloom wél onderscheiden worden van:', opts: ['Odontoom', 'Ameloblastoom'], exp: 'Een odontoom is sterk radiopaque (calcificaties) en daarmee duidelijk te onderscheiden van een reuscelgranuloom.'},
      {q: 'Lip-kaakspleet is ontstaan door gebrek aan fusie tussen:', opts: ['Processus nasalis medialis en processus maxillaris', 'Processus nasalis lateralis en processus nasalis medialis'], exp: 'Een lip-kaakspleet ontstaat door incomplete fusie van processus nasalis medialis en maxillaris.'},
      {q: 'Frequentie van lipkaakverhemeltespleet in Nederland:', opts: ['1:500', '1:700'], exp: 'In Nederland wordt een frequentie van circa 1:500 levend geborenen gerapporteerd.'},
      {q: 'Een ameloblastoom kan ontstaan in de wand van een:', opts: ['Dentogene cyste', 'Simpele beencyste'], exp: 'Ameloblastoom ontwikkelt zich frequent uit het epitheel van een dentogene (folliculaire) cyste.'},
      {q: 'Een residuale cyste is etiologisch het meest verwant met:', opts: ['Radiculaire cyste', 'Folliculaire cyste'], exp: 'Een residuale cyste is een achtergebleven radiculaire cyste na tandextractie.'},
      {q: 'Wat is de meest voorkomende kwaadaardige tumor in de mond?', opts: ['Plaveiselcelcarcinoom', 'Speekselkliertumor'], exp: 'Plaveiselcelcarcinoom maakt ruim 90% uit van alle orale maligniteiten.'}
    ]
  },

  pato_cikmis_2023dec: {
    title: 'Orale Pathologie Çıkmış – 2023 December',
    questions: [
      {q: 'Het allerbelangrijkste verschil tussen benigne en maligne tumor is:', opts: ['Invasieve groei', 'Gevoeligheid voor straling'], exp: 'Invasieve groei (en metastasering) is het meest fundamentele onderscheid tussen benigne en maligne tumoren.'},
      {q: 'Maligne tumorcellen verschillen van normale cellen door:', opts: ['Afwijkingen in DNA en celdeling', 'Alleen grootte van de cel'], exp: 'Maligne cellen kenmerken zich door genomische instabiliteit en ontregelde celdeling.'},
      {q: 'Metastasen in het kaakbot vinden we vooral in:', opts: ['Kaakhoek/ondermolaarstreek', 'Boven front'], exp: 'Kaakbotmetastasen lokaliseren zich bij voorkeur in de kaakhoek/ondermolaarstreek.'},
      {q: 'Enkelvoudige kaakspleet (lip-kaak): onvoldoende fusie van welke structuren?', opts: ['Processus nasalis medialis en processus maxillaris', 'Processus nasalis lateralis en processus maxillaris'], exp: 'Lip-kaakspleet = onvoldoende fusie processus nasalis medialis + maxillaris.'},
      {q: 'Carcinoma in situ op de tong: behandeling?', opts: ['Excisie', 'Afwachten en controle'], exp: 'Tong en mondbodem zijn hoog-risicolocaties; excisie is de behandeling van keuze.'},
      {q: 'Bruxisme verergert slaapapneu?', opts: ['Onjuist', 'Juist'], exp: 'Er is geen causale relatie aangetoond dat bruxisme slaapapneu verergert.'},
      {q: 'Wat is de meest voorkomende kwaadaardige tumor in de mond?', opts: ['Plaveiselcelcarcinoom (SCC)', 'Non-Hodgkin-lymfoom'], exp: 'SCC maakt >90% uit van alle orale maligniteiten.'},
      {q: 'SCC van de tong: behandeling?', opts: ['Excisie', 'Radiotherapie alleen'], exp: 'Primaire behandeling van tongkanker is chirurgische excisie, eventueel gecombineerd met radiotherapie.'},
      {q: 'Folliculaire cyste komt het meest voor bij:', opts: ['Onderste verstandskies en bovenste hoektand', 'Bovenste molaren'], exp: 'Folliculaire cyste is geassocieerd met geïmpacteerde elementen: M3 OK en cuspidaat BK.'},
      {q: 'Leukoplakies maligniteitsrisico is het hoogst bij:', opts: ['Erytroplakie', 'Witte homogene leukoplakis'], exp: 'Erytroplakie heeft het hoogste maligne transformatierisico van alle orale premaligne laesies.'},
      {q: 'Een pijnlijke, vaste, elastische zwelling op de wang/omslagplooi bij een patiënt met 14 jaar oude prothese:', opts: ['Irritatiefibroom', 'Chronische periostitis'], exp: 'Langdurig prothetische irritatie veroorzaakt een irritatiefibroom (epulis fissuratum).'},
      {q: 'Focale scleroserende osteomyelitis (condensing ostitis): beleid?', opts: ['Behandeling van de oorzaak (WKB of extractie) en afwachten', 'Chirurgisch curetteren'], exp: 'Behandeling van de pulpale oorzaak volstaat; de sclerose hoeft niet chirurgisch behandeld te worden.'},
      {q: 'Kleine wortelresten: is de grootte van de rest bepalend voor het beleid?', opts: ['Juist', 'Onjuist'], exp: 'Tot ca. 1,5 mm kunnen wortelresten zonder pathologie worden achtergelaten; grootte is bepalend.'}
    ]
  },

  /* ===== ORALE FUNCTIELEER / CMD ===== */
  functie_cikmis_2022juni: {
    title: 'Orale Functieleer Çıkmış – 2022 Juni',
    questions: [
      {q: 'Dahl-effect: verticale occlusie 6 mm verhoogd – is dit haalbaar?', opts: ['Onjuist', 'Juist'], exp: 'Dahl-effect geeft maximaal ~4,7 mm verticale dimensieverhoging; 6 mm is te veel.'},
      {q: 'ADD zonder reductie (symptomatisch): verwijzen naar fysiotherapeut?', opts: ['Juist', 'Onjuist'], exp: 'Symptomatische disk displacement without reduction wordt verwezen naar fysiotherapeut voor mobilisatie.'},
      {q: 'ADD met reductie: de disc schiet tijdens het openen over de kaakkopje?', opts: ['Juist', 'Onjuist'], exp: 'Bij ADD met reductie schiet de disc mesiaal over de condylus bij mondopening, waarna reductie optreedt.'},
      {q: 'Arthrogene CMD-pijn is brandend van karakter?', opts: ['Onjuist', 'Juist'], exp: 'Arthrogene pijn is scherp; myogene pijn is zeurend; neuropatische pijn is brandend.'},
      {q: 'Chronische TMD-pijn verloopt progressief als niet behandeld?', opts: ['Onjuist', 'Juist'], exp: 'Chronische TMD heeft doorgaans een zelfbeperkend verloop; progressie is niet de regel.'},
      {q: 'Een splint moet dik, stabiel, hard en uitneembaar zijn?', opts: ['Onjuist', 'Juist'], exp: 'Een occlusale splint moet maximaal 2,5 mm dik zijn; een te dikke splint geeft problemen.'},
      {q: 'Je maakt een splint. De derde molaar is moeilijk afdruk te nemen; zijn de tweede molaren voldoende?', opts: ['Onjuist', 'Juist'], exp: 'Verstandskiezen moeten op de splint meegenomen worden om elongatie en primair contact te voorkomen.'},
      {q: 'Bij boven-prothese op 6 implantaten: welk occlusieconcept kies je?', opts: ['Bilateraal gebalanceerde occlusie (verdeelde krachten)', 'Cuspidaatgeleiding'], exp: 'Bij een implantaat-gedragen prothese tegenover een (volledige) prothese kies je bilateraal gebalanceerde occlusie.'},
      {q: 'Patiënt met bruxisme: 2 knobbels overkappen met composiet of zirconia?', opts: ['Composiet', 'Zirconia (monobloc)'], exp: 'Bij bruxisme worden composietknobbels geprefereerd; composiet absorbeert krachten beter en is eenvoudiger te repareren.'},
      {q: 'Bij het nemen van de beet: 2 wax-indices – is dit voldoende?', opts: ['Onjuist', 'Juist'], exp: 'Drie bietregistraties worden aanbevolen; twee die overeenkomen zijn voldoende voor verificatie.'},
      {q: 'U maakt een artikulatie liggend en daarna zit de patient rechtop. Waar zie je meer contact?', opts: ['Meer mesiale contacten in rechtopstaande positie', 'Meer distale contacten'], exp: 'In liggende positie is de mandibula meer distaal; rechtopzittend schuift de kaak meer naar ventraal (mesialer contact).'},
      {q: 'Open lock: wat doe je?', opts: ['Meteen reponeren (manuele repositie)', 'Afwachten'], exp: 'Open lock (luxatie van de kaak) wordt behandeld door onmiddellijke manuele repositie.'},
      {q: 'Meest voorkomende breuk bij boven-premolaren in vergelijking met andere tanden?', opts: ['Juist', 'Onjuist'], exp: 'Bovenpremolaren breken vaker dan andere tanden door occlusale belasting en palatinale knobbel.'}
    ]
  },

  functie_cikmis_2023dec: {
    title: 'Orale Functieleer Çıkmış – 2023 December',
    questions: [
      {q: 'Dahl-effect: verticale dimensieverhoging van 6 mm – haalbaar?', opts: ['Onjuist', 'Juist'], exp: 'Dahl-effect geeft maximaal 4,7 mm; 6 mm is niet haalbaar met dit principe.'},
      {q: 'ADD zonder reductie (symptomatisch): verwijzen naar fysiotherapeut?', opts: ['Juist', 'Onjuist'], exp: 'Fysiotherapie (passieve/actieve mobilisatie) is geïndiceerd bij symptomatische ADD zonder reductie.'},
      {q: 'Arthrogene CMD heeft brandende pijn als kenmerk?', opts: ['Onjuist', 'Juist'], exp: 'Arthrogene pijn is scherp; brandende pijn past bij neuropathische oorzaak.'},
      {q: 'Chronische TMD-pijn verloopt progressief als niet behandeld?', opts: ['Onjuist', 'Juist'], exp: 'Chronische TMD heeft doorgaans een zelfbeperkend karakter; progressief verloop is niet de regel.'},
      {q: 'Een splint moet dik zijn voor goede stabiliteit?', opts: ['Onjuist', 'Juist'], exp: 'Een splint moet dun zijn (< 2,5 mm); een te dikke splint geeft juist problemen.'},
      {q: 'Splint zonder derde molaren inclusief – voldoende?', opts: ['Onjuist', 'Juist'], exp: 'Verstandskiezen moeten op de splint staan om extrusie en primaire contacten te voorkomen.'},
      {q: 'Open kaak-luxatie: wat doe je?', opts: ['Meteen manueel reponeren', 'Afwachten'], exp: 'Kaaksdislocatie (open lock) vereist directe manuele repositie.'},
      {q: 'Boven-overkappingsprothese op 4 implantaten: krachten verdelen of cuspidaatgeleiding?', opts: ['Krachten verdelen (bilateraal gebalanceerde occlusie)', 'Cuspidaatgeleiding'], exp: 'Bij totale protheses op implantaten kies je altijd voor bilateraal gebalanceerde occlusie.'},
      {q: 'Bij beet-registratie: worden 2 of 3 registraties genomen?', opts: ['3 registraties (twee overeenstemmende = correct)', 'Altijd slechts 2'], exp: 'Drie beetregistraties worden genomen; twee die overeenkomen gelden als correct.'},
      {q: 'Bij articulatie in liggende positie dan rechtopzittend: waar zie je meer contact?', opts: ['Meer mesiale contacten rechtop', 'Meer distale contacten rechtop'], exp: 'Rechtopzittend schuift de mandibula meer naar ventraal, wat mesiale contacten geeft.'},
      {q: 'Bot-ankylose in gewrichtsruimte: behandeling?', opts: ['Chirurgisch verwijderen van het aangetaste weefsel', 'Afwachten'], exp: 'Botankylose van het kaakgewricht vereist chirurgische interventie (condylectomie of arthroplastiek).'},
      {q: 'Tumor in sinus maxillaris met diplopie en tranende ogen?', opts: ['Juist (passend bij orbitabodeminvasie)', 'Onjuist'], exp: 'Diplopie en tranende ogen wijzen op invasie van de orbitabodem door een sinusmaximalaristumor.'}
    ]
  },

  /* ===== ORTHODONTIE ===== */
  ortho_cikmis_2022juni: {
    title: 'Orthodontie Çıkmış – 2022 Juni',
    questions: [
      {q: 'Bij een eerste blijvende molaar met diepe cariës: wanneer extraheer je zodat de tweede molaar de plek inneemt?', opts: ['Als de furcatie van de tweede molaar röntgenologisch zichtbaar is', 'Na het doorkomen van de tweede molaar'], exp: 'Furcatie zichtbaarheid van M2 is het optimale extractiemoment voor mesiale migratie.'},
      {q: 'Orthodontie is moeilijker bij volwassenen omdat bot-opbouw traag is en behandeling pijnlijker?', opts: ['Onjuist', 'Juist'], exp: 'Dezelfde kracht wordt bij volwassenen toegepast; de reden is het ontbreken van groeimodificatie, niet pijn of botopbouw.'},
      {q: 'Bollard-anker bij een gemotiveerde patient voor elastieken om kaakgroei te modificeren?', opts: ['Juist', 'Onjuist'], exp: 'Bollard-anker is geïndiceerd bij agressieve tandbewegingen en elastieken, maar niet voor groeimodificatie bij gemotiveerde patiënten.'},
      {q: 'Sagittale vlak-groei eindigt op:', opts: ['25 jaar', '18 jaar'], exp: 'De spheno-occipitale synchondrose sluit rond 18-25 jaar; sagittale groei eindigt circa 25 jaar.'},
      {q: 'Meisje van 12 jaar, niet gemotiveerd, diepe beet. Beslissing nemen:', opts: ['Samen met meisje en ouders beslissen', 'Alleen ouders beslissen'], exp: 'Van 12-16 jaar beslist het kind samen met de ouders; daarvóór beslissen alleen de ouders.'},
      {q: 'Patiënt met matige mondhygiëne maar wil orthodontie. Wat doe je?', opts: ['Eerst mondhygiëne verbeteren, dan orthodontie', 'Gelijk starten met orthodontie'], exp: 'Mondhygiëne moet altijd eerst verbeterd worden vóór orthodontische behandeling.'},
      {q: 'Een 14-jarige patient zonder hoektand: meest waarschijnlijke diagnose?', opts: ['Geïmpacteerde hoektand', 'Agenesie'], exp: 'Op 14-jarige leeftijd zou de hoektand al moeten zijn doorgebroken; impactie is de meest voorkomende oorzaak.'},
      {q: 'Na trauma is een element op botniveau afgebroken. Extrusie kan altijd als er geen schade aan de wortel is?', opts: ['Onjuist', 'Juist'], exp: 'Extrusie is niet altijd mogelijk; botafbreuk op wortelniveau kan contra-indicatie voor extrusie zijn.'},
      {q: 'Headgear onderzoek: geen verschil in therapietrouw tussen jongens en meisjes?', opts: ['Juist', 'Onjuist'], exp: 'Onderzoek toont geen significant geslachtsverschil in headgear-draagtijd.'},
      {q: 'Ongewenste tandverplaatsingen treden op binnen 6 maanden na orthodontie?', opts: ['Juist', 'Onjuist'], exp: 'Relaps na orthodontie treedt het snelst op in de eerste 6 maanden na behandeling.'},
      {q: 'Tand 45 is doorgebroken maar 35 vertraagd: wat doe je?', opts: ['Afwachten', 'Direct extractie melktand'], exp: 'Asymmetrie van 6 maanden of meer is reden voor röntgenologische controle en eventuele extractie van de melktand.'},
      {q: 'Juiste doorbraak-volgorde bovenkaken:', opts: ['Eerste premolaar, daarna hoektand en tweede premolaar vrijwel gelijktijdig', 'Hoektand eerder dan eerste premolaar'], exp: 'In bovenkaken breekt de eerste premolaar door vóór hoektand en tweede premolaar.'},
      {q: 'Een 9-jarige: M1 cariës, geen andere problemen. Wanneer extraheren?', opts: ['Als furcatie M2 röntgenologisch zichtbaar is', 'Pas op 10 jaar'], exp: 'Röntgenologische furcatiezichtbaarheid M2 is het criterium; na 10 jaar is extractie suboptimaal.'}
    ]
  },

  ortho_cikmis_2023dec: {
    title: 'Orthodontie Çıkmış – 2023 December',
    questions: [
      {q: 'Orthodontie is moeilijker bij volwassenen doordat bot-opbouw traag is en behandeling pijnlijker is?', opts: ['Onjuist', 'Juist'], exp: 'Dezelfde krachten worden toegepast; de werkelijke reden is dat groeimodificatie bij volwassenen niet mogelijk is.'},
      {q: 'Bollard-anker kan gebruikt worden bij gemotiveerde patient voor elastieken?', opts: ['Juist', 'Onjuist'], exp: 'Bollard is geïndiceerd bij forse intrusie, intermaxillaire elastieken en protractie van de hele kaak.'},
      {q: 'Sagittale groei eindigt op:', opts: ['25 jaar', '18 jaar'], exp: 'Spheno-occipitale synchondrose sluit rond 18-25 jaar; sagittale groei eindigt circa 25 jaar.'},
      {q: 'Meisje 12 jaar, niet gemotiveerd, diepe beet: beslissing?', opts: ['Meisje en ouders samen beslissen', 'Alleen ouders'], exp: 'Van 12-16 jaar beslist het kind samen met de ouders over de behandeling.'},
      {q: 'Patiënt met matige mondhygiëne wil orthodontie: wat doe je?', opts: ['Eerst mondhygiëne verbeteren', 'Direct starten'], exp: 'Goede mondhygiëne is een voorwaarde voor ortodontische behandeling.'},
      {q: '14-jarige patient zonder hoektand: diagnose?', opts: ['Geïmpacteerde hoektand', 'Agenesie'], exp: 'Impactie van de bovenste hoektand is het meest frequent op 14-jarige leeftijd.'},
      {q: 'Na trauma element op botniveau gebroken: altijd extrusie mogelijk?', opts: ['Onjuist', 'Juist'], exp: 'Botafbreuk op wortelniveau kan contra-indicatie zijn voor extrusie.'},
      {q: 'Headgear: geen verschil in therapietrouw jongens vs meisjes?', opts: ['Juist', 'Onjuist'], exp: 'Wetenschappelijk onderzoek toont geen geslachtsverschil in headgear-draagtijd.'},
      {q: 'Ongewenste tandverplaatsingen treden op binnen 6 maanden na orthodontie?', opts: ['Juist', 'Onjuist'], exp: 'Relaps is het grootst in de eerste 6 maanden na beëindigen van de behandeling.'},
      {q: 'Een meisje van 12 jaar heeft een open beet na orthodontie. Oorzaak?', opts: ['Verkeerde tonggewoonte', 'Groeipatroon'], exp: 'Een open beet na orthodontiebehandeling wordt bij een 25-jarige veroorzaakt door tongpersen.'},
      {q: 'Eerste röntgenopname bij kinderen (BTW): aanbevolen leeftijd?', opts: ['4-6 jaar', 'Pas bij 12 jaar'], exp: 'Eerste bitewing-opname wordt aanbevolen tussen 4-6 jaar bij aanwezigheid van contactpunten.'},
      {q: 'M1 extraheren (serie-extractie): wanneer?', opts: ['Als driekwart van de wortelvorming zichtbaar is', 'Zodra furcatie M2 zichtbaar is'], exp: 'Bij serie-extractie wordt M1 geëxtraheerd als driekwart van de wortelvorming zichtbaar is op röntgenfoto.'}
    ]
  },

  /* ===== BASIS MEDISCH ===== */
  basis_cikmis_2022juni: {
    title: 'Basis Medisch Çıkmış – 2022 Juni',
    questions: [
      {q: 'Endocarditis-profylaxe antibioticum wordt gegeven:', opts: ['1 uur vóór de behandeling (2 g amoxicilline)', 'Bij aanvang van de behandeling'], exp: 'Endocarditis-profylaxe bestaat uit 2 g amoxicilline oraal 1 uur vóór de ingreep.'},
      {q: 'Reumatoïde artritis is een indicatie voor endocarditis-profylaxe?', opts: ['Onjuist', 'Juist'], exp: 'Reumatoïde artritis is geen indicatie; hartklepaandoeningen en kunsthartkleppen zijn dat wel.'},
      {q: 'Bij penicilline-allergie wordt bij endocarditis-profylaxe erythromycine gegeven?', opts: ['Onjuist', 'Juist'], exp: 'Bij penicilline-allergie wordt clindamycine gegeven, niet erythromycine.'},
      {q: 'Behandeling van een vers open sinus maxillaris door kiesextractie:', opts: ['Sluiten, antibiotica en neusdruppels', 'Sluiten alleen'], exp: 'Een verse antrum-perforatie wordt gesloten met een lapplastiek, antibiotica en neusdruppels.'},
      {q: 'Behandeling van subcutaan abces:', opts: ['Incisie en drainage onder lokale anesthesie', 'Punctie en drukverband'], exp: 'Subcutaan abces wordt behandeld met incisie en drainage onder lokale anesthesie.'},
      {q: 'Kenmerkend voor een periapicaal abces zijn kloppende pijn en percussiepijn?', opts: ['Juist', 'Onjuist'], exp: 'Kloppende kaakpijn en percussiegevoeligheid zijn klassieke symptomen van een periapicaal abces.'},
      {q: 'Welke geïmpacteerde verstandskies is het moeilijkst te verwijderen?', opts: ['Disto-angulaire inclinatie', 'Mesio-angulaire inclinatie'], exp: 'Disto-angulaire verstandskiezen zijn het moeilijkst te extraheren omdat ze niet kunnen erupteren.'},
      {q: 'Alveolitis treedt op 6-8 dagen na extractie?', opts: ['Onjuist', 'Juist'], exp: 'Alveolitis (droog socket) treedt op na 3-5 dagen, niet 6-8 dagen.'},
      {q: 'Mucositis als complicatie van bestraling treedt op:', opts: ['Snel na het starten van de bestraling', 'Pas maanden later'], exp: 'Mucositis is een vroege bestralingscomplicatie die binnen de eerste weken optreedt.'},
      {q: 'Osteoradionecrose is een typische late bestralingscomplicatie?', opts: ['Juist', 'Onjuist'], exp: 'Osteoradionecrose treedt op maanden tot jaren na bestraling van het hoofd-halsgebied.'},
      {q: 'Paracetamol heeft een bloedstelpend effect?', opts: ['Onjuist', 'Juist'], exp: 'Paracetamol heeft geen significant bloedstelpend effect; NSAID"s remmen trombocytenfunctie.'},
      {q: 'Behandeling periapicaal abces: endostart en vijlen tot pusafvloed?', opts: ['Juist', 'Onjuist'], exp: 'Periapicaal abces wordt behandeld door endostart en vijlen/ruimen totdat pus afvloeit.'},
      {q: 'Subperiostaal abces: behandeling?', opts: ['Incisie en drainage', 'Conservatief behandelen'], exp: 'Subperiostaal abces vereist incisie en drainage, niet via het kanaal.'},
      {q: 'Mondkanker als metastase van primaire tumor elders: in welk percentage?', opts: ['1-2%', '5%'], exp: 'Slechts 1-2% van de mondtumoren betreft metastasen van elders in het lichaam.'},
      {q: 'Tandextractie P1 boven: beweging voornamelijk?', opts: ['Palatinale luxatie', 'Buccale luxatie'], exp: 'Boven-P1 wordt geëxtraheerd met voornamelijk palatinale luxatiebeweging (dunne buccale cortex).'}
    ]
  },

  basis_cikmis_2023dec: {
    title: 'Basis Medisch Çıkmış – 2023 December',
    questions: [
      {q: 'Osteoporose is een absolute contra-indicatie voor implantaten?', opts: ['Onjuist', 'Juist'], exp: 'Orale bisfosfonaten bij osteoporose zijn afhankelijk van dosis en duur; i.v. toediening is relatief gecontra-indiceerd.'},
      {q: 'Wat is de minimale intermaxillaire afstand voor een implantaat?', opts: ['7 mm (midden op midden)', '4 mm'], exp: 'Minimaal 7 mm inter-implantaire afstand (centrum-centrum) is vereist voor abutment en suprastructuur.'},
      {q: 'Cementitis bij implantaten voorkomen door:', opts: ['Schroefretentief abutment gebruiken', 'Weinig cement gebruiken'], exp: 'Schroefretentieve verbindingen elimineren cement en voorkomen zodoende cementitis peri-implantitis.'},
      {q: 'De meest voorkomende complicatie van een solitaire implantaatkroon is:', opts: ['Loskomen van het abutment', 'Fractuur van het abutment'], exp: 'Loskomen van het abutment is de meest gerapporteerde complicatie bij single-tooth implantaten.'},
      {q: 'Behandeling antrum-perforatie bij kiesextractie:', opts: ['Sluiten met lapplastiek, antibiotica en neusdruppels', 'Alleen sluiten'], exp: 'Verse antrum-perforatie: primair sluiten + antibiotica + neusdruppels om sinusitis te voorkomen.'},
      {q: 'Behandeling dentogene sinusitis maxillaris:', opts: ['Behandeling van de tandheelkundige oorzaak', 'Caldwell-Luc operatie direct'], exp: 'Eerst de dentale oorzaak aanpakken (extractie/WKB); Caldwell-Luc alleen bij refractaire gevallen.'},
      {q: 'Dentogene sinusitis: kenmerk vergeleken met rhinogene?', opts: ['Foetide neusafvloed, enkelzijdig', 'Bilateraal en pijnlozer'], exp: 'Dentogene sinusitis is altijd enkelzijdig met een foetide geur; rhinogene is bilateraler.'},
      {q: 'Metastasen in het kaakbot komen meest voor in:', opts: ['Kaakhoek/ondermolaarstreek', 'Voorste onder kaak'], exp: 'Kaakbotmetastasen lokaliseren bij voorkeur in de kaakhoek en ondermolaarregio.'},
      {q: 'Marginal resectie van de mandibula: risico?', opts: ['Hoog fractuurrisico door behoud mandibulabasis', 'Reconstructie altijd noodzakelijk'], exp: 'Bij marginale resectie blijft de mandibulabasis behouden, wat een verhoogd fractuurrisico geeft.'},
      {q: 'Innervatie van de tongpunt?', opts: ['Nervus lingualis (trigeminus) en chorda tympani (facialis)', 'Alleen glossopharyngeus'], exp: 'Tongpunt: sensorisch via n. lingualis (V3), smaak via chorda tympani (VII).'},
      {q: 'Extractie van P2 onderkaak: beweging?', opts: ['Rotatiebeweging', 'Buccale luxatie'], exp: 'Tanden in de onderkaak tot en met premolaren worden geëxtraheerd met rotatiebeweging.'}
    ]
  },

  /* ===== PROTHETIEK ===== */
  sociale_cikmis_2022juni: {
    title: 'Prothetiek & Sociale Tandheelkunde Çıkmış – 2022 Juni',
    questions: [
      {q: 'Op-wang- of tongbijten kan optreden als de molaren niet in de neutrale zone zijn opgesteld?', opts: ['Juist', 'Onjuist'], exp: 'Tanden buiten de neutrale zone worden bij functionele bewegingen geraakt door wang of tong.'},
      {q: 'Ondersnijdingen in de kaak geven meer retentie aan de volledige prothese?', opts: ['Onjuist', 'Juist'], exp: 'Postextractie-ondersnijdingen blokkeren de inzetroute van de prothese en geven geen retentie.'},
      {q: 'Frameprothese is gecontra-indiceerd bij slechte mondhygiëne?', opts: ['Juist', 'Onjuist'], exp: 'Bij slechte mondhygiëne is een frameprothese contra-indiceerd vanwege verhoogd cariës- en parodontitisrisico.'},
      {q: 'Bij extractie voor immediaat-prothese: eerst boven, daarna onderkaak extraheren?', opts: ['Onjuist', 'Juist'], exp: 'Extractievolgorde is eerst onder, daarna boven; hechten begint distaal.'},
      {q: 'Extractiebeweging van centrale boven-incisief is voornamelijk rotatoir?', opts: ['Juist', 'Onjuist'], exp: 'De boven centrale incisief heeft een ronde wortel en wordt met rotatiebewegingen geëxtraheerd.'},
      {q: 'Extractiebeweging van P1 boven is voornamelijk palatinale luxatie?', opts: ['Juist', 'Onjuist'], exp: 'Boven-P1 wordt geëxtraheerd met palatinale luxatie (dunne buccale corticalis).'},
      {q: 'Extractiebeweging van P2 onder is voornamelijk buccaal?', opts: ['Onjuist', 'Juist'], exp: 'Onderpremolaren worden geëxtraheerd met rotatie, niet met buccale luxatie.'},
      {q: 'Pijlerelementen voor een frameprothese in beide kaken: welke keuze?', opts: ['36-46 en 13-23-33-43', '16-26 en 13-23-33-43'], exp: 'In de onderkaak molaren als pijlers (36-46) en in de bovenkaak hoektanden; dit geeft betere steun.'},
      {q: 'Juiste doorbraak-volgorde:', opts: ['Bovenste eerste premolaar vóór hoektand', 'Hoektand vóór eerste premolaar boven'], exp: 'Boven breekt eerste premolaar eerder door dan hoektand (hoektand circa gelijktijdig met P2).'},
      {q: 'Kroon op 26: balanstest in welke richting schuiven?', opts: ['Links (werking rechts, balans links)', 'Rechts'], exp: 'Bij balanszijde-controle schuif je naar de niet-werkende zijde (links bij kroon 26 rechts).'},
      {q: 'Slechte mondhygiëne is een contra-indicatie voor een partiele prothese?', opts: ['Onjuist (voor plaatjes)', 'Juist altijd'], exp: 'Een frameprothese is gecontra-indiceerd bij slechte MH; een plaatjesprothese is dat niet per se.'},
      {q: 'Flabby ridge (slappe kaakwal) ontstaat plotseling?', opts: ['Onjuist', 'Juist'], exp: 'Flabby ridge ontstaat geleidelijk door chronische prothese-irritatie, niet plotseling.'},
      {q: 'Voor een full-contour zirconiakroon (monobloc) wordt een facing gebruikt?', opts: ['Onjuist', 'Juist'], exp: 'Monobloc zirconia heeft geen porselein-facing; het is een enkelvoudig materiaal.'},
      {q: 'Chamfer-preparatie is geschikt voor zowel zirconia als metaal-keramiek?', opts: ['Juist', 'Onjuist'], exp: 'Chamfer (holle schouder) is de standaard preparatievorm voor zirconia en metaal-keramiek.'},
      {q: 'Beste materiaal voor occlusale contacten controleren?', opts: ['Shimstock-folie', 'Rood-blauw artikulatiepapier'], exp: 'Shimstock (12 micron folie) geeft de meest nauwkeurige indicatie van occlusale contactpunten.'}
    ]
  },

  /* ===== STATISTIEK / EBM ===== */
  statistiek_cikmis_2023dec: {
    title: 'Statistiek / EBM Çıkmış – 2023 December',
    questions: [
      {q: 'Als de standaarddeviatie kleiner wordt, neemt de power van de toets toe?', opts: ['Juist', 'Onjuist'], exp: 'Kleinere spreiding (SD) verhoogt de power omdat effecten beter detecteerbaar worden.'},
      {q: 'Bij ratio-meetniveau met twee groepen is de beste statistische toets:', opts: ['Independent-samples t-toets', 'Chi-kwadraattoets'], exp: 'Ratio-data met twee onafhankelijke groepen: de t-toets voor onafhankelijke steekproeven is aangewezen.'},
      {q: 'Bij nominaal of ordinaal meetniveau is de beste toets:', opts: ['Chi-kwadraattoets', 'T-toets'], exp: 'Nominale en categorische data worden geanalyseerd met de chi-kwadraattoets.'},
      {q: 'Bij drie of meer groepen met ratio-data is de beste toets:', opts: ['Variantie-analyse (ANOVA)', 'T-toets'], exp: 'ANOVA vergelijkt gemiddelden van drie of meer groepen bij ratio-meetniveau.'},
      {q: 'Modus en mediaan bepalen uit een frequentietabel met twee kolommen: is dit mogelijk?', opts: ['Juist', 'Onjuist'], exp: 'Uit een frequentietabel zijn modus (meest voorkomende waarde) en mediaan (middelste waarde) direct te bepalen.'},
      {q: 'Range bepalen uit een frequentietabel: is dit mogelijk?', opts: ['Juist', 'Onjuist'], exp: 'Range = maximumwaarde minus minimumwaarde; beide zijn af te lezen uit een frequentietabel.'},
      {q: 'Gemiddelde berekenen uit een frequentietabel: is dit mogelijk?', opts: ['Juist', 'Onjuist'], exp: 'Het gewogen gemiddelde is berekend als som(waarde × frequentie) / totaal frequentie.'}
    ]
  }

};
window.QUIZZES = Object.assign(window.QUIZZES || {}, sets);
})();
