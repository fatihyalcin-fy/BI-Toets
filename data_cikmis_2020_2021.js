/* =================================================================
   data_cikmis_2020_2021.js – Çıkmış sorular 2020 & 2021
   Bron: BI-JUNI-2020 HEPSI, 2020 BM Gözden Geçirilmiş,
         2020 Radio/Statistiek, TH1+TH2 dec 2021,
         basis2021, BI-Statistiek 2021, BI-Radiologie dec 2021,
         THK II 2021 Gözden Geçirilmiş.
   opts[0] = altijd het JUISTE antwoord. quiz.js shuffelt bij weergave.
   ================================================================= */
(function(){
var sets = {

// ═══════════════════════════════════════════════
//  2020 – CARIOLOGIE
// ═══════════════════════════════════════════════
cario_cikmis_2020juni:{title:'Cariologie – Çıkmış 2020 Juni',questions:[
{q:'Als een blootliggend worteloppervlak zwart van kleur is, dan is de kans groot dat het:',opts:['Een inactief cariësproces is','Een actief cariësproces is'],exp:'Zwarte verkleuring duidt op inactivering van het cariësproces (remineralisatie/pigmentatie).'},
{q:'Een karakteristiek kenmerk van een actieve cariëslaesie in het glazuur is:',opts:['Een wit ruw dof oppervlak','Een wit glad glimmend oppervlak'],exp:'Actief: wit, ruw, dof oppervlak. Inactief: wit, glad, glimmend oppervlak.'},
{q:'Wanneer fissuurcariës in een 36 een score van 1 op de schaal van Ekstrand heeft en een jaar later een score 2, dan:',opts:['Is een sealant geïndiceerd om het cariësproces te laten remineraliseren','Moet er een lokale fluoride applicatie zoals fluoride lak aangebracht worden'],exp:'Progressie van score 1 naar 2 = indicatie voor sealant om verdere progressie te stoppen.'},
{q:'Een van de nadelen van glasionomeercement is dat de sterkte taaihard is ten opzichte van composiet.',opts:['Juist','Onjuist'],exp:'GIC is minder sterk dan composiet; dit is een nadeel voor occlusale restauraties.'},
{q:'Als bij een buccale initiële witte vleklaesie het glazuuroppervlak breekt, is de beste behandeling:',opts:['Glad prepareren, fluoride aanbrengen en poetsinstructie geven','Prepareren tot in dentine en restaureren'],exp:'Oppervlaktebreuk zonder cavitatie in dentine: glad prepareren + fluoride + OHI.'},
{q:'Een donkere doorschemerende occlusale cariëslaesie geeft aan dat de cariës:',opts:['In het dentine is doorgedrongen','Door de vorm van het glazuur er makkelijk plaque in blijft zitten'],exp:'Donkere doorschijn occlusaal = cariës heeft dentine bereikt (shadow).'},
{q:'Als men bij een periodiek mondonderzoek op de bitewing een approximale zwarting tot in het dentine ziet, is dit:',opts:['Een indicatie voor een actief cariësproces','Een indicatie voor een inactief cariësproces'],exp:'Bitewing: approximale zwarting tot in dentine = actieve cariës, restauratie-indicatie.'},
{q:'Bij een fissuurcariëslaesie met een Ekstrand score 4 zijn bacteriën doorgedrongen tot:',opts:['In de pulpa','Halverwege het dentine'],exp:'Ekstrand 4 = cariës tot in de pulpa.'},
{q:'Detectie van cariës in de 47 distaal in een regulier gebit zonder verstandskiezen kan het best worden uitgevoerd met:',opts:['Een röntgenfoto','Indirect zicht door middel van een mondspiegel'],exp:'Approximale detectie distaal 47 (geen 48): bitewing röntgenfoto is meest betrouwbaar.'},
{q:'In een dentine cariëslaesie tref je de volgende lagen aan van buiten naar binnen:',opts:['Verweekt, geïnfecteerd, ontkalkt','Verweekt, ontkalkt, geïnfecteerd'],exp:'Buitenste laag: verweekt dentine (geïnfecteerd). Daaronder: ontkalkt dentine. Binnenste: gezond dentine.'},
{q:'Na openen en het schoonmaken van de glazuur-dentinegrens is het glazuur onondersteund. Je kunt dit glazuur het best:',opts:['Weghalen met de airrotor','Laten zitten en opvullen met composiet'],exp:'Onondersteund glazuur bij preparatie: weghalen om randlekkage te voorkomen.'},
{q:'Bij een actieve dentine cariëslaesie met cavitatie in een 16 of 26 is de beste behandeling:',opts:['Te prepareren en restaureren met composiet','Het glazuur te bevelen en de patiënt te laten poetsen met een tandpasta met extra fluoride'],exp:'Actieve cavitatie in dentine (6) = prepareren en restaureren.'},
{q:'Onder een total-etch systeem wordt verstaan:',opts:['Een 2- of 3-staps ets-en-spoel adhesiefsysteem','Een 2-staps zelf-etsend adhesiefsysteem'],exp:'Total-etch = ets-en-spoel: apart etsings-, primer- en bondingstap.'},
{q:'Een posterior composietrestauratie krimpt bij verharding meer dan een flowable composiet.',opts:['Onjuist','Juist'],exp:'Posterior composiet bevat meer vulstof en krimpt minder dan flowable composiet.'},
{q:'Een patiënt heeft op veel plaatsen plaque. Wat is uw eerste behandelkeuze van een met plaque bedekte witte vleklaesie?',opts:['Plakverwijdering en fluoridetandpasta','Plakverwijdering en fluoridespelmiddel'],exp:'Eerste stap: plak verwijderen en dagelijks poetsen met fluoridetandpasta. Mondwater als aanvulling.'},
]},

// ═══════════════════════════════════════════════
//  2020 – PARODONTOLOGIE
// ═══════════════════════════════════════════════
paro_cikmis_2020juni:{title:'Parodontologie – Çıkmış 2020 Juni',questions:[
{q:'Een van de eigenschappen van chloorhexidine is dat het een antibacteriële werking heeft.',opts:['Juist','Onjuist'],exp:'CHX heeft bewezen antibacteriële werking en wordt gebruikt als adjuvans bij paro-behandeling.'},
{q:'Waar is de DPSI voor bedoeld?',opts:['Om globaal overzicht te krijgen van de parodontale problemen','Om de diagnose parodontitis te kunnen stellen'],exp:'DPSI = screeningsinstrument voor globaal overzicht. Definitieve diagnose vereist volledig paro-status.'},
{q:'Bij patiënten met een plaquescore van minder dan 20% hoeft tijdens de initiële behandeling geen mondhygiëne-instructie plaats te vinden.',opts:['Onjuist','Juist'],exp:'OHI is altijd onderdeel van initiële paro-behandeling, ongeacht de plaquescore.'},
{q:'Bij een pseudopocket is röntgenologisch geen botverlies te zien.',opts:['Juist','Onjuist'],exp:'Pseudopocket = vergroting door zwelling gingivaal weefsel zonder echt botverlies.'},
{q:'Wanneer zou u bij een patiënt met parodontitis de single tufted borstel adviseren?',opts:['Bij furcaties en eindstandige elementen','Alleen furcaties'],exp:'Single tufted borstel: furcaties EN eindstandige elementen (moeilijk bereikbare gebieden).'},
{q:'De meeste kans op een wortelgroeven bij de 24 is aan de distale zijde.',opts:['Juist','Onjuist'],exp:'Wortelgroeven 24 bevinden zich overwegend distaal, verhogen kans op paro-attachment verlies.'},
{q:'Diabetes is bijna nooit gerelateerd aan parodontitis.',opts:['Onjuist','Juist'],exp:'Diabetes is een bewezen risicofactor voor parodontitis (bidirectionele relatie).'},
{q:'Parodontitis kan een risicofactor zijn voor peri-implantitis, omdat patiënten dezelfde lifestyle risicofactoren hebben.',opts:['Juist','Onjuist'],exp:'Paro-patiënten hebben verhoogd risico op peri-implantitis door gedeelde risicofactoren (roken, DM).'},
{q:'Aanhechtingsverlies wordt vastgesteld door de pocketdiepte in combinatie met de recessie te meten.',opts:['Juist','Onjuist'],exp:'Klinisch aanhechtingsverlies = pocketdiepte + recessie (gemeten van CEJ).'},
{q:'Een element krijgt de prognose "hopeloos" als meer dan de helft van het bot verloren is gegaan.',opts:['Onjuist','Juist'],exp:'Hopeloos = terminaal botverlies (niet simpelweg >50%). Furcatie III, mobiliteit III, e.d. spelen ook mee.'},
{q:'Voor de classificatie van parodontitis spreken we bij 6 aangedane elementen van gegeneraliseerde parodontitis.',opts:['Onjuist','Juist'],exp:'Gegeneraliseerd = >30% van de elementen aangedaan. 6 van bijv. 28 is niet per se >30%.'},
{q:'Bij een patiënt wilt u de DPSI bepalen. U meet pockets van 5 mm zonder recessie bij 35 linguaal, en een recessie van 1 mm buccaal 35. Welke DPSI geeft u dit sextant?',opts:['3+','3-'],exp:'DPSI 3+ = pocketdiepte 3,5-5,5mm EN furcatie of botverlies. Recessie buccaal + pocket 5mm = 3+.'},
{q:'Bij gelijkmatige parodontale afbraak buccaal en linguaal van de eerste molaar in de onderkaak wordt de furcatie buccaal gemiddeld eerder toegankelijk dan linguaal.',opts:['Juist','Onjuist'],exp:'Furcatie-ingang 36 buccaal ligt coronaler dan linguaal, waardoor buccaal eerder bereikbaar bij afbraak.'},
{q:'Hoe snel vindt op een schoon tandoppervlak weer aanhechting van micro-organismen plaats?',opts:['Na enkele minuten','Na enkele uren'],exp:'Pellicle vormt zich direct na reiniging; bacteriële adhesie begint al binnen minuten.'},
{q:'De behandeling van peri-mucositis mag niet met handinstrumenten uitgevoerd worden.',opts:['Onjuist','Juist'],exp:'Peri-mucositis kan met hand- of ultrasonorinstrumenten behandeld worden.'},
]},

// ═══════════════════════════════════════════════
//  2020 – ENDODONTOLOGIE
// ═══════════════════════════════════════════════
endo_cikmis_2020juni:{title:'Endodontologie – Çıkmış 2020 Juni',questions:[
{q:'Bij een acute pulpitis is sprake van resorptie van de lamina dura, bij een chronische pulpitis niet.',opts:['Onjuist','Juist'],exp:'Resorptie lamina dura zien we bij apicale parodontitis, niet bij acute pulpitis.'},
{q:'Een preparatie aan het dentine ten behoeve van een volledige kroon brengt de pulpa altijd letsel toe.',opts:['Onjuist','Juist'],exp:'Kroonpreparatie bij voldoende dentin-dikte hoeft geen klinisch letsel toe te brengen.'},
{q:'Als de pulpa nog gedeeltelijk vitaal is, is een vitale amputatie geïndiceerd.',opts:['Juist','Onjuist'],exp:'Vitale amputatie (pulpotomie) is geïndiceerd bij partiële vitaliteit van de pulpa.'},
{q:'Hoe kun je guttapercha het beste desinfecteren?',opts:['Desinfecteren met 5% natriumhypochloriet','Desinfecteren met 70-80% alcohol'],exp:'Guttapercha: desinfectie met NaOCl 5%. Alcohol is minder effectief voor guttapercha.'},
{q:'Een periapicale ontsteking leidt in 80% van de gevallen tot:',opts:['Apicale hypercementose','Apicale resorptie'],exp:'Na periapicale ontsteking: in meerderheid hypercementose (cementafzetting als reactie).'},
{q:'Het is mogelijk om guttapercha zo samen te duwen in een wortelkanaal dat het daadwerkelijk van volume verandert.',opts:['Onjuist','Juist'],exp:'Guttapercha is niet samendrukbaar; volume verandert niet bij condensatie.'},
{q:'Na een pulpotomie kan zowel interne wortelresorptie als kanaalobliteratie optreden.',opts:['Juist','Onjuist'],exp:'Na pulpotomie zijn zowel interne resorptie als obliteratie (vaker) bekende complicaties.'},
{q:'De ingang van het zogenoemde vierde wortelkanaal in een eerste bovenmolaar bevindt zich ongeveer op de verbindingslijn tussen de kanaalingangen van:',opts:['Het mesiobuccale en het palatinale kanaal','Het distobuccale en het palatinale kanaal'],exp:'MB2-kanaal: zoek op de lijn MB1-palatinaal, iets mesio-palatinaal van MB1.'},
{q:'Bij een kroon- of caviteitspreparatie van de premolaren is het gevaar van expositie het grootst voor de palatinale pulpahorns.',opts:['Juist','Onjuist'],exp:'Bovenste premolaren: palatinale pulpahorn staat hoog, risico op expositie bij palatinale preparatie.'},
{q:'De voorkeur gaat uit naar een duaal uithardend composietcement voor het cementeren van een glasvezelstift.',opts:['Juist','Onjuist'],exp:'Duaal uithardend cement: goede hechting én licht bereikt niet in diepste deel van het kanaal.'},
{q:'Een voorbeeld van een warme vultechniek is:',opts:['Guttapercha-injectietechniek','Stiftsectietechniek'],exp:'Guttapercha-injectietechniek = thermoplastisch/warm systeem (bijv. Obtura). Stiftsectie = warm maar anders.'},
{q:'Een apicaal litteken ontstaat als het periapicale ontstekingsweefsel vervangen wordt door corticaal bot.',opts:['Onjuist','Juist'],exp:'Apicaal litteken = vervanging door fibreus weefsel (NIET bot). Röntgenologisch: blijvende radiolucency.'},
{q:'Een zogenaamde steriele pulpanecrose kan ontstaan als gevolg van:',opts:['Een thermische trauma','Blootliggend dentine door een fractuur'],exp:'Steriele necrose: trauma zonder bacteriële invasie, bijv. thermisch trauma (pulpaschade zonder opening).'},
{q:'Een onvolledige knobbelfractuur in een gebitselement met een vitale pulpa:',opts:['Geeft vaak een pijnreactie bij een bijttest, vooral bij het wegvallen van de kauwdruk','Veroorzaakt zelden klinische symptomen'],exp:'Knobbelfractuur (cracked tooth): klassiek symptoom = pijn bij loslaatfase van bijten.'},
{q:'Na een laterale luxatie reageert de pulpa soms niet. Na een half jaar tot een jaar kan deze sensibiliteit nog terugkeren.',opts:['Juist','Onjuist'],exp:'Na luxatietrauma: pulpa kan tijdelijk niet reageren. Herstel mogelijk tot 1 jaar later.'},
]},

// ═══════════════════════════════════════════════
//  2020 – KINDERTANDHEELKUNDE (PEDO)
// ═══════════════════════════════════════════════
pedo_cikmis_2020juni:{title:'Kindertandheelkunde – Çıkmış 2020 Juni',questions:[
{q:'De maximale fluorideconcentratie in vrij verkrijgbare tandpasta voor kinderen van 4 jaar en jonger in Nederland is:',opts:['1000 ppm','250 ppm','750 ppm'],exp:'NL: kinderen 0-6 jaar: peutertandpasta max 1000 ppm F (of kindertandpasta 1000-1450 ppm met kleine hoeveelheid).'},
{q:'Een kind van 6 jaar kan prima zelf tanden poetsen.',opts:['Onjuist','Juist'],exp:'Kinderen tot ca. 10-12 jaar: motoriek onvoldoende voor zelfstandig poetsen. Ouders moeten nazetten.'},
{q:'Uw advies aan ouders luidt: tijdens het poetsen bij uw kind gaat u het liefst:',opts:['Achter uw kind staan','Voor uw kind staan'],exp:'Achter het kind staan geeft beter zicht en controle, en stelt het kind gerust.'},
{q:'Onderzoek heeft aangetoond dat kinderen (van ongeveer 7-12 jaar) tijdens een behandeling de minste pijn voelen tijdens een injectie als de moeder erbij is die het kind verhalen vertelt.',opts:['Als de moeder erbij is die het kind verhalen vertelt','Met een afleiding zoals een video, maar zonder de moeder erbij'],exp:'Onderzoek: moeder die verhalen vertelt (afleiding) vermindert de pijnperceptie het meest.'},
{q:'De wortels van melkelementen resorberen bijna altijd gelijkmatig.',opts:['Onjuist','Juist'],exp:'Wortelresorptie melkelementen verloopt dikwijls ongelijkmatig, afhankelijk van positie opvolger.'},
{q:'In het Basisadvies Fluoride van het Ivoren Kruis luidt het advies voor kinderen van 2 tot 5 jaar:',opts:['2x per dag poetsen met fluoride-peutertandpasta','1x per dag poetsen met fluoride-peutertandpasta'],exp:'Ivoren Kruis: 2x daags poetsen met peutertandpasta (500 ppm F) voor 0-6 jarigen.'},
{q:'U ziet een fisteluitgang boven de donker verkleurde 51 bij Youri (5 jaar). Er zijn totaal geen klachten. Wat doet u?',opts:['U maakt een afspraak voor extractie 51','U wacht af zolang er geen klachten zijn'],exp:'Fistel bij avitale melktand = chronische infectie die het blijvende gebitselement kan schaden: extractie.'},
{q:'Als een kind een melktand heeft verloren door natuurlijke opvolging, maar de blijvende tand is nog niet doorgebroken, dan:',opts:['Blijft het DMFT-getal gelijk','Komt er 1 punt bij de DMFT-getal'],exp:'Melkelementen worden gescoord in dmft (kleine letters), niet DMFT. Blijft ongewijzigd.'},
{q:'Wanneer kan een fluoridegellepel bij kinderen gebruikt worden als extra cariëspreventiemiddel?',opts:['Alleen als andere preventieve maatregelen bij het kind niet voldoende werken','In principe kan dit preventief altijd bij de halfjaarlijkse controle worden gedaan'],exp:'Fluoridegellepel (hoge concentratie) is tweede-lijn: inzetten als poetsen + vernis onvoldoende is.'},
{q:'Stelling A: de kans op de ontwikkeling van een kaasmolaar heeft mogelijk een relatie met het frequent voorkomen van ziekte op jonge leeftijd. Stelling B: de ernst van de aantasting bij kaasmolaren is bij alle elementen vrijwel altijd hetzelfde.',opts:['Stelling A is juist','Stelling B is juist'],exp:'Kaasmolaar (MIH): relatie met frequente ziekte in 0-3 jaar (A=juist). Ernst varieert per element (B=onjuist).'},
]},

// ═══════════════════════════════════════════════
//  2020 – SPEEKSEL
// ═══════════════════════════════════════════════
speeksel_cikmis_2020juni:{title:'Speeksel – Çıkmış 2020 Juni',questions:[
{q:'De parotisklieren secreteren een mucine-arm speeksel.',opts:['Juist','Onjuist'],exp:'Parotis: sereus speeksel (mucine-arm). Gl. submandibularis en sublingualis: gemengd/mucineus.'},
{q:'Wat draagt bij om erosie tegen te gaan?',opts:['De aanwezigheid van een speekselpellicle op het tandoppervlak','Het slikken van vitamine-C tabletten'],exp:'Speekselpellicle beschermt het glazuur mechanisch en chemisch tegen erosie.'},
{q:'Halitose wordt veroorzaakt door producten die vrijkomen bij de afbraak van zwavel bevattende aminozuren.',opts:['Juist','Onjuist'],exp:'Halitose: vluchtige zwavelverbindingen (H2S, methyl mercaptaan) door bacteriële eiwitafbraak.'},
{q:'Een van de belangrijkste kenmerken van xerostomie is een verhoogde speekselsecretie.',opts:['Onjuist','Juist'],exp:'Xerostomie = droge mond door verlaagde of afwezige speekselsecretie.'},
{q:'HIV kan gemakkelijk via speeksel worden overgedragen.',opts:['Onjuist','Juist'],exp:'HIV-transmissie via speeksel is verwaarloosbaar laag; onvoldoende virusdeeltjes.'},
{q:'Een mucocèle is een slijmcyste die we vooral zien in de mondbodem.',opts:['Onjuist','Juist'],exp:'Mucocèle: vooral onderlip. Ranula = mucocèle in de mondbodem (gl. sublingualis).'},
{q:'Speekselstenen komen overwegend voor in de ductus van de gl. submandibularis.',opts:['Juist','Onjuist'],exp:'Sialolithiase: 80-90% in de ductus van Wharton (gl. submandibularis) door viskeuze secretie.'},
{q:'Door kauwen wordt de speekselsecretie gestimuleerd.',opts:['Juist','Onjuist'],exp:'Kauwen stimuleert mecanoreceptoren → reflex speekselstimulatie (tot 10x meer dan in rust).'},
{q:'Antidepressiva hebben als mogelijke bijwerking stimulatie van de speekselsecretie.',opts:['Onjuist','Juist'],exp:'Antidepressiva (TCA, SSRI) geven als bijwerking xerostomie (verminderde speekselsecretie).'},
{q:'Bij patiënten met ernstige parodontitis kan een verhoogde proteolytische activiteit in speeksel worden aangetoond.',opts:['Juist','Onjuist'],exp:'Speeksel bevat biomarkers (MMP, enzymen) die verhoogd zijn bij paro-patiënten.'},
]},

// ═══════════════════════════════════════════════
//  2020 – BASIS MEDISCH (deel 1: Ziekteleer)
// ═══════════════════════════════════════════════
basis_cikmis_2020juni_a:{title:'Basis Medisch – Çıkmış 2020 Juni (deel 1)',questions:[
{q:'Wanneer Herpes Zoster in de mond wordt geconstateerd, kunt u de tandheelkundige behandeling zonder specifieke voorzorgsmaatregelen uitvoeren.',opts:['Onjuist','Juist'],exp:'Herpes Zoster is besmettelijk; extra hygiënemaatregelen zijn vereist.'},
{q:'Een patiënt moet met het gebruik van Ascal stoppen voordat een bloedige tandheelkundige ingreep wordt gedaan.',opts:['Onjuist','Juist'],exp:'Ascal (lage-dosis aspirine) NIET stoppen; tromboserisico. Lokale hemostase volstaat meestal.'},
{q:'Een patiënt van 51 jaar zegt dat ze diabetes type 2 heeft, en toch gebruikt ze insuline injecties. Hoe kan dit?',opts:['Blijkbaar kon ze niet goed ingesteld worden op orale antidiabetica','Ze had eerst diabetes type 1 en die is overgegaan in diabetes type 2'],exp:'Type 2 DM kan insuline-afhankelijk worden als orale middelen onvoldoende regulatie geven.'},
{q:'Een patiënt klaagt over heftige pijn in de rechtergezichtshelft. Bij inspectie ziet u een rode huiduitslag in het pijnlijke gebied. Om welk ziektebeeld kan het hier gaan?',opts:['Herpes Zoster','Waterpokken'],exp:'Herpes Zoster (gordelroos): unilateraal, dermatoom-gebonden huiduitslag met hevige pijn.'},
{q:'Bij coeliakie komen onder andere glazuurafwijkingen voor.',opts:['Juist','Onjuist'],exp:'Coeliakie veroorzaakt glazuurhypoplasie en afteuze ulcera in de mond.'},
{q:'Een patiënt met een pacemaker moet voor een invasieve tandheelkundige ingreep antibiotica profylaxe krijgen om een endocarditis te voorkomen.',opts:['Onjuist','Juist'],exp:'Pacemaker is geen indicatie voor endocarditisprofylaxe. Indicaties zijn specifieke hartklepafwijkingen.'},
{q:'Een patiënt met de ziekte van Parkinson zal heel waarschijnlijk klagen over een droge mond.',opts:['Juist','Onjuist'],exp:'Parkinson: anticholinergica → xerostomie. Bovendien is speekselvloed (sialorrhee) ook mogelijk door slikproblemen.'},
{q:'Een patiënt vertelt u dat hij 3x per week naar een centrum gaat om zijn bloed te laten spoelen. Om wat voor nierpatiënt gaat het hier?',opts:['Een patiënt aan de hemodialyse','Een patiënt met een niertransplantaat'],exp:'Bloed spoelen 3x per week in een centrum = hemodialyse.'},
{q:'Waarom moeten extracties bij patiënten met de ziekte van Kahler extra voorzichtig worden uitgevoerd?',opts:['Er is een grotere kans op een kaakfractuur door verzwakking van de kaak','Er is een grotere kans op botnecrose door verminderde doorbloeding van de kaak'],exp:'Multipel myeloom (Kahler) veroorzaakt osteolytische laesies in het kaakbot → kaakfractuurrisico.'},
{q:'Een tandarts krijgt bloedspetters van een HIV-geïnfecteerde patiënt op een verse schaafwond op zijn arm. Deze tandarts loopt een grote kans om zelf met HIV besmet te raken.',opts:['Onjuist','Juist'],exp:'Transmissirisico via bloedspetters op huid is extreem laag (<0,1%). Groot risico is onjuist.'},
{q:'Wat is een gemeenschappelijk kenmerk van alle reumatische ziekten voor het tandheelkundig behandelplan?',opts:['Ze worden behandeld met immunosuppressiva, waardoor de patiënt infectiegevoeliger wordt','Ze worden behandeld met pijnstillers, waardoor er orale bijwerkingen kunnen ontstaan'],exp:'Immunosuppressiva (MTX, biologicals) bij reumatische ziekten verhogen infectierisico.'},
{q:'Wat is uw beleid als u bij een patiënt een bloeddrukwaarde van 180/110 mm Hg meet?',opts:['Doorsturen naar de huisarts/specialist','Alle tandheelkundige behandelingen zijn bij deze patiënt mogelijk'],exp:'Bloeddruk ≥180/110 = ernstige hypertensie; uitstellen behandeling + verwijzing huisarts.'},
{q:'Uw patiënt vertelt u dat hij de ziekte van Lyme heeft. Dat betekent dat hij is gebeten door een bug die besmet was met Lyme.',opts:['Onjuist','Juist'],exp:'Ziekte van Lyme wordt overgedragen door een tekenbeet, niet door een mug.'},
{q:'Een vasovagale collaps wordt gekenmerkt door een trage polsslag met een traag herstel.',opts:['Onjuist','Juist'],exp:'Vasovagale collaps: trage polsslag (bradycardie) MAAR snel herstel na platleggen.'},
{q:'De ontsteking bij systemische lupus erythematosus (SLE) beperkt zich tot de huid en de slijmvliezen.',opts:['Onjuist','Juist'],exp:'SLE is een systemische aandoening die nieren, hart, longen, gewrichten én huid aantast.'},
]},

// ═══════════════════════════════════════════════
//  2020 – BASIS MEDISCH (deel 2: Farmacologie)
// ═══════════════════════════════════════════════
basis_cikmis_2020juni_b:{title:'Basis Medisch – Çıkmış 2020 Juni (deel 2)',questions:[
{q:'Zwangere vrouwen hebben vaak last van gingivitis.',opts:['Juist','Onjuist'],exp:'Zwangerschap verhoogt progesteron → verhoogde gingivale doorbloeding → zwangerschapsgingivitis.'},
{q:'Wat is het gevaar als een patiënt met een te sterke schildklierwerking bij de tandarts komt?',opts:['De adrenaline in de verdoving kan leiden tot hartritmestoornissen','De patiënt kan gingivahyperplasie krijgen door de hoge schildklierspiegels in het bloed'],exp:'Hyperthyreoïdie + adrenaline (verdoving) → risico op hartritmestoornissen.'},
{q:'Een verlaagde bloedsuikerspiegel leidt tot een verhoogde kans op bacteriële infecties.',opts:['Onjuist','Juist'],exp:'Hypoglykemie op zichzelf verhoogt niet direct bacteriële infectiekans. Chronisch hoge bloedsuiker (hyperglykemie) wél.'},
{q:'U wilt een simpele extractie doen bij een patiënt die 40 mg prednison per dag slikt. Uw tandheelkundig beleid is dat u de extractie niet zelf doet en de patiënt doorstuurt naar de kaakchirurg.',opts:['Onjuist','Juist'],exp:'40 mg prednison per dag is geen absolute reden tot verwijzing voor simpele extractie. Lokale hemostase en monitoring volstaan.'},
{q:'Een patiënt die 8 maanden geleden een hartinfarct heeft gekregen, heeft geen klachten meer. Wat is uw beleid bij verdoving?',opts:['U mag alleen een verdoving geven met een lage dosis adrenaline','U mag alleen een verdoving geven met een hoge dosis adrenaline'],exp:'Na hartinfarct (>6 maanden geleden): lage dosis adrenaline (1:200.000 of max 2 carpules 1:100.000).'},
{q:'Een anafylactische shock na het ontvangen van een verdoving bij de tandarts komt redelijk vaak voor (1 op de 500 verdovingen).',opts:['Onjuist','Juist'],exp:'Anafylaxie op verdoving is zeldzaam (1 op 100.000 tot 1 op 1.000.000). Niet 1 op 500.'},
{q:'Een infectieuze endocarditis kan een CVA (beroerte) veroorzaken.',opts:['Juist','Onjuist'],exp:'Bacteriële emboli bij endocarditis kunnen cerebraal infarceren → CVA.'},
{q:'Pijn veroorzaakt door angina pectoris is midden op de borst gelokaliseerd en straalt uit naar de keel, kaken of de linkerarm.',opts:['Juist','Onjuist'],exp:'Angina pectoris: retrosternale pijn met uitstraling naar kaak, hals, linkerarm (inclusief pink).'},
{q:'Bij een patiënt met MS (multipele sclerose) moet een tandarts rekening houden met tremoren van de patiënt.',opts:['Juist','Onjuist'],exp:'MS: spastische parese en tremoren zijn mogelijk, relevant voor behandelpositie en instrumentgebruik.'},
{q:'De tandarts dient het hoofd van een reumatoïde artritispatiënt niet te ver achter over te bewegen vanwege het gevaar op:',opts:['Dislocatie van de nekwervels','Dichtdrukken van de bloedvaten in de hals'],exp:'RA: atlantoaxiale instabiliteit (C1-C2) → gevaar voor ruggenmergbeschadiging bij hyperextensie.'},
{q:'Het gebruik van antibiotica is essentieel als u gaat implanteren.',opts:['Onjuist','Juist'],exp:'Antibiotica bij implantaten is niet standaard geïndiceerd; alleen bij risicopatiënten of specifieke indicaties.'},
{q:'Adrenaline wordt toegevoegd aan lokale anesthetica vanwege de vasodilatoire eigenschappen.',opts:['Onjuist','Juist'],exp:'Adrenaline is een vasoconstrictor, niet vasodilatator. Verlengt anesthesieduur en vermindert bloeding.'},
{q:'Als u bij een bloedige parodontale behandeling een antibioticum als profylaxe maatregel zou moeten voorschrijven, dan heeft het de voorkeur om amoxicilline 375 mg 3x daags en metronidazol 250 mg 3x daags gedurende 7 dagen voor te schrijven.',opts:['Onjuist','Juist'],exp:'Paro-protocol NL: amoxicilline 500mg + metronidazol 500mg 3x/dag 7 dagen (niet 375/250 mg).'},
{q:'Het werkingsmechanisme van ibuprofen betreft:',opts:['Het remmen van de aanmaak van prostaglandines','Het remmen van de afgifte van serotonine'],exp:'NSAID (ibuprofen): COX-remmer → minder prostaglandinesynthese → analgesie, anti-inflammatoir.'},
{q:'Een droge mond behoort tot een van de bijwerkingen van anticholinergica.',opts:['Juist','Onjuist'],exp:'Anticholinergica remmen parasympathische stimulatie van speekselklieren → xerostomie.'},
]},

// ═══════════════════════════════════════════════
//  2020 – BASIS MEDISCH (deel 3: Fysiologie + Microbiologie)
// ═══════════════════════════════════════════════
basis_cikmis_2020juni_c:{title:'Basis Medisch – Çıkmış 2020 Juni (deel 3)',questions:[
{q:'Welke van de onderstaande items behoort tot de functies van de nieren?',opts:['Regeling van de bloeddruk op de lange termijn (dagen-maanden)','Regeling van de bloeddruk op de korte termijn (seconden-minuten-uren)'],exp:'Nieren reguleren bloeddruk op lange termijn via RAAS en volumehuishouding. Korte termijn = baroreceptoren.'},
{q:'Uitval van het rechter laterale systeem van het ruggenmerg veroorzaakt een volledige verlamming van de linkerhand.',opts:['Onjuist','Juist'],exp:'Laterale systeem = ipsilateraal motorisch. Rechts uitval = rechterhand parese (niet links).'},
{q:'In stressvolle omstandigheden, zoals een tandartsbezoek, zal het sympathische deel van het autonome zenuwstelsel de overhand hebben.',opts:['Juist','Onjuist'],exp:'Stress = sympathische activatie (fight or flight): tachycardie, hypertensie, droge mond.'},
{q:'Een eerste stap in het verkrijgen van het insulinegen is het isoleren van:',opts:['RNA uit de pancreas','RNA uit elke willekeurige cel'],exp:'Insuline wordt geproduceerd door bètacellen van de pancreas; mRNA voor insuline is daar aanwezig.'},
{q:'Een gestoorde werking van het cerebellum kenmerkt zich onder andere door:',opts:['Spraakstoornissen','Geheugenstoornissen'],exp:'Cerebellum: coördinatie, evenwicht, fijne motoriek, dysartrie (spraakstoornissen). Geheugen = hippocampus.'},
{q:'De n. trigeminus heeft drie hoofdtakken. Daarvan bevat alleen de n. mandibularis zowel motorische als sensibele vezels.',opts:['Juist','Onjuist'],exp:'N. mandibularis (V3) = gemengde zenuw: sensibel + motorisch (kauwspieren). V1 en V2 alleen sensibel.'},
{q:'Wanneer is er sprake van hypertensie?',opts:['Als de onderdruk hoger is dan 90 mm Hg of de bovendruk hoger is dan 140 mm Hg','Als de onderdruk hoger is dan 80 mm Hg of de bovendruk hoger is dan 120 mm Hg'],exp:'Hypertensie definitie: systolisch >140 mmHg OF diastolisch >90 mmHg.'},
{q:'Een persoon met bloedgroep A kan van een persoon met bloedgroep O zonder problemen twee liter bloed ontvangen.',opts:['Juist','Onjuist'],exp:'Bloedgroep O = universele donor. Ontvanger A kan O ontvangen. Hoeveelheid van 2L is ook acceptabel.'},
{q:'Hypertensie is belastend voor het hart. Waarom is dat?',opts:['Omdat de diastolische aortadruk te hoog is en het hart langer moet contraheren om tot ejectie te komen','Omdat er meer bloed moet worden rondgepompt'],exp:'Hoge afterload (diastolische aortadruk) → hart moet harder pompen → linkerventrikel hypertrofie.'},
{q:'Bij fractuurherstel wordt de vorming van een botachtige callus gevolgd door vorming van een vezelig-kraakbenige callus.',opts:['Onjuist','Juist'],exp:'Volgorde fractuurherstel: fibrinestolsel → bindweefsel callus → kraakbenige callus → botachtige callus → remodellering.'},
{q:'Aspirine (acetylsalicylzuur) zorgt voor een sterk verminderde werking van de bloedplaatjesaggregatie.',opts:['Juist','Onjuist'],exp:'Aspirine remt COX irreversibel in trombocyten → levenslang verminderde aggregatie per trombocyt.'},
{q:'Gram-positieve bacteriën zijn anaeroob, Gram-negatieve bacteriën zijn aeroob.',opts:['Onjuist','Juist'],exp:'Gram-positiviteit of -negativiteit zegt niets over aeroob/anaeroob gedrag; dit zijn onafhankelijke kenmerken.'},
{q:'Tanderosie is het oplossen van tandglazuur door zuren die uitgescheiden worden door de plaquebacteriën.',opts:['Onjuist','Juist'],exp:'Erosie = chemische oplossing door extrinsiek zuur (dranken, voedsel) of intrinsiek (maagzuur). Niet door bacteriën (dat is cariës).'},
{q:'Handhygiëne wordt beschouwd als de belangrijkste maatregel om het risico van overdracht van micro-organismen te verminderen.',opts:['Juist','Onjuist'],exp:'WHO: handhygiëne = meest effectieve maatregel tegen ziekenhuisinfecties en kruisbesmetting.'},
{q:'Parodontitis is een:',opts:['Infectieziekte','Ontstekingsziekte'],exp:'Parodontitis wordt primair veroorzaakt door bacteriële infectie die een ontstekingsreactie uitlokt.'},
]},

// ═══════════════════════════════════════════════
//  2020 – RADIOLOGIE
// ═══════════════════════════════════════════════
radio_cikmis_2020juni:{title:'Radiologie – Çıkmış 2020 Juni',questions:[
{q:'Volgens verschillende onderzoeken wordt bij adolescenten ruim 50% meer dentinecariës gevonden op basis van röntgenfoto\'s dan met spiegel en sonde.',opts:['Juist','Onjuist'],exp:'Bitewing detecteert approximale cariës die klinisch niet zichtbaar is; stelt ca. 50% meer laesies vast.'},
{q:'De halsschaduw wordt veroorzaakt voor het begin van cariës.',opts:['Onjuist','Juist'],exp:'Halsschaduw = uitdunning glazuur cervicaal + minder absorptie → donkere zone, geen cariës.'},
{q:'Bij de bissectriceregel-techniek worden geen filmhouders (instelapparaten) toegepast.',opts:['Juist','Onjuist'],exp:'Bissectricetechniek: geen filmhouder, film tegen het gehemelte, buis loodrecht op bissectrice.'},
{q:'Welk van de volgende materialen is meer radiopaak?',opts:['Amalgaam','Porselein'],exp:'Amalgaam is zeer radiopaak (sterk absorberende metaallegering). Porselein is minder radiopaak.'},
{q:'Kilovoltage is verband met:',opts:['Doordringen (penetratie)','Hoeveelheid (intensiteit)'],exp:'kV bepaalt de energie (doordringend vermogen) van de röntgenstraling. mA bepaalt de intensiteit.'},
{q:'De parodontaalspleet is gezien op een röntgenfoto als een:',opts:['Radiolucentie','Radiopaak lijn'],exp:'Parodontaalspleet = zachte weefselspleet → radiolucent (donkere lijn) naast de wortel.'},
{q:'We gebruiken bitewings alleen voor het opsporen van interproximale cariës.',opts:['Onjuist','Juist'],exp:'Bitewings dienen ook voor beoordeling van restauraties, paro-botniveau en calculus.'},
{q:'Panorama-opnamen zijn gerechtvaardigd als de pathologie niet op een solo-opname mogelijk om te zien is.',opts:['Juist','Onjuist'],exp:'ALARA: OPT gerechtvaardigd als pathologie te groot/complex is voor periapicale opname.'},
{q:'Volgens het ALARA-principe is een loodschort nodig om de schildklier te beschermen als we foto\'s van zwangere vrouwen nemen.',opts:['Juist','Onjuist'],exp:'ALARA bij zwangeren: loodschort + schildklierbeschermer aanbevolen voor optimale bescherming.'},
{q:'Fosforplaatjes moeten gescand worden na belichting.',opts:['Juist','Onjuist'],exp:'PSP-plaatjes (fosforplaatjes): latent beeld, uitlezen via scanner met laserlicht binnen redelijke tijd.'},
{q:'Tandheelkundige intra-orale opnamen bij zwangere vrouwen kunnen normaal worden gemaakt indien gerechtvaardigd.',opts:['Juist','Onjuist'],exp:'Röntgenfoto\'s bij zwangeren: veilig mits gerechtvaardigd, met schort en schildklierprotectie.'},
{q:'ALARA betekent:',opts:['As Low As Reasonably Achievable','As Low As Realistically Achievable'],exp:'ALARA = As Low As Reasonably Achievable: stralingsbeperking tot het redelijk haalbare minimum.'},
{q:'U maakt twee bitewingopnamen in de praktijk. De beste plaats om tijdens een opname te staan is achter het hoofd van de patiënt met 2 meter afstand.',opts:['Juist','Onjuist'],exp:'Stralingsbescherming operator: achter een scherm OF 2 meter afstand van de röntgenbuis, buiten de primaire bundel.'},
{q:'Een onscherp gedefinieerde begrenzing van een radiolucentie kan een aanwijzing zijn van een maligne bottumor.',opts:['Juist','Onjuist'],exp:'Maligne bottumoren: onscherpe, onregelmatige begrenzing (doorbraak corticaal bot).'},
]},

// ═══════════════════════════════════════════════
//  2020 – RADIOLOGIE (deel 2: december 2021 overlap)
// ═══════════════════════════════════════════════
radio_cikmis_2021dec:{title:'Radiologie – Çıkmış 2021 December',questions:[
{q:'Welke is meer radiopaak?',opts:['Dentine','Pulpa'],exp:'Dentine is mineraaldichter dan pulpa en absorbeert meer straling → radiopaakker.'},
{q:'Kilovoltage is in verband met:',opts:['Doordringen (penetratie)','Hoeveelheid (intensiteit)'],exp:'kV = energie/penetratie. mA = intensiteit/hoeveelheid fotonen.'},
{q:'Bitewings worden gebruikt voor:',opts:['Caries opsporen en vulling beoordelen en paro (A+B juist)','Alleen caries opsporen'],exp:'Bitewings: caries opsporing, restauraties beoordelen, paro-botniveau. Dus meerdere doeleinden.'},
{q:'In de bissectricetechniek-opname moet de bundel parallel aan de film zijn.',opts:['Onjuist','Juist'],exp:'Bissectricetechniek: bundel loodrecht op de bissectrice (hoeklijn film-as), NIET parallel aan de film.'},
{q:'Lamina dura is op de röntgenfoto een opaaklijn.',opts:['Juist','Onjuist'],exp:'Lamina dura = corticaal bot rond de wortel → verschijnt als witte (radioopake) lijn op röntgen.'},
{q:'In pulpitis zie je een verbreding van de parodontaalspleet.',opts:['Onjuist','Juist'],exp:'Parodontaalspleetverbreding zien we bij apicale parodontitis, niet bij pulpitis.'},
{q:'Wat is het ALARA-principe?',opts:['Het gebruik van een rechthoek tubus','Het gebruik van een schild voor de schildklier'],exp:'ALARA = As Low As Reasonably Achievable: maatregelen zoals rechthoekige tubus, lage dosis, gerechtvaardigd gebruik.'},
{q:'Wanneer de afstand van de focus tot de film wordt teruggebracht tot de helft, wordt de bundel vier maal zo groot.',opts:['Juist','Onjuist'],exp:'Omgekeerde kwadratenwet: halveer de afstand → bundeldoorsnede wordt 4x groter (kwadraat van 2).'},
{q:'Op een tweedimensionale röntgenopname is de afbraak van spongieus bot niet of nauwelijks te zien maar corticaal is een afbraak van 30% of meer meestal wel te zien.',opts:['Juist','Onjuist'],exp:'Radiologisch zichtbaar botverlies vereist 30-50% demineralisatie. Corticale afbraak eerder zichtbaar dan spongieuze.'},
]},

// ═══════════════════════════════════════════════
//  2020 – STATISTIEK
// ═══════════════════════════════════════════════
statistiek_cikmis_2020juni:{title:'Statistiek – Çıkmış 2020 Juni',questions:[
{q:'Het meetniveau van de variabele eetgewoonten (suiker, zuur, zout, water) is ordinaal meetniveau.',opts:['Onjuist','Juist'],exp:'Eetgewoonten zonder rangorde = nominaal meetniveau (categorieën zonder ordening).'},
{q:'Voor de variabele slijtage van het gebit in mm mag de range berekend worden.',opts:['Juist','Onjuist'],exp:'Slijtage in mm = ratio meetniveau; berekenbare range (maximum-minimum) is zinvol.'},
{q:'Regressievergelijking: score examen (y)=3,5+0,5 * voorbereidingstijd in uren (x). Zonder voorbereidingstijd haalt men 3,5.',opts:['Juist','Onjuist'],exp:'Intercept (3,5) = waarde van y als x=0 (geen voorbereiding). Uitspraak is juist.'},
{q:'In een frequentieverdeling met X=6(n=10), 7(n=35), 8(n=35), 10(n=20), totaal=100: de mediaan is 8.',opts:['Onjuist','Juist'],exp:'Cumulatief: 10+35=45 (t/m 7), 45+35=80 (t/m 8). Mediaan (50e percentiel) = 7 (niet 8).'},
{q:'De Pearson correlatiecoëfficiënt tussen X (44,47,49,53,57) en Y (14,12,10,8,6) is dichtbij r=-1.',opts:['Juist','Onjuist'],exp:'X stijgt, Y daalt consistent → perfecte negatieve lineaire relatie → r = -1.'},
{q:'De power van een studie hangt onder andere af van effectgrootte.',opts:['Juist','Onjuist'],exp:'Power = kans echte H0-verwerping. Afhankelijk van effectgrootte, n, significantieniveau en spreiding.'},
{q:'t-toets p=0,03, significantieniveau 5%. In dit geval mag de nulhypothese verworpen worden.',opts:['Juist','Onjuist'],exp:'p=0,03 < α=0,05: nulhypothese mag verworpen worden.'},
{q:'Knarsen is met stress vergeleken in een t-toets. De nulhypothese kan worden verworpen. Er is geen verschil in niveau van stress.',opts:['Onjuist','Juist'],exp:'Als H0 verworpen wordt, is er juist WEL een significant verschil gevonden.'},
{q:'One way ANOVA F=6,20, df1=1, df2=20. De bijbehorende overschrijdingskans is kleiner dan 1%.',opts:['Onjuist','Juist'],exp:'Kritieke F(1,20) bij 1% = 8,10 > 6,20. Dus p>1%. De uitspraak (p<1%) is onjuist.'},
{q:'Een onderzoeker wil vier groepen patiënten vergelijken qua gewichtsverandering (in kg). Bij een keuze is de chi-kwadraattoets de beste.',opts:['Onjuist','Juist'],exp:'Vier groepen met continue uitkomst (kg) → one-way ANOVA. Chi-kwadraat is voor categorische uitkomsten.'},
{q:'Een onderzoeker wil weten of patiënten boven of onder 55 jaar beter zijn in het correct tellen van elementen (correct/incorrect). De chi-kwadraattoets is de beste keuze.',opts:['Juist','Onjuist'],exp:'Twee categorische variabelen (leeftijdsgroep en correct/incorrect) → chi-kwadraat is juist.'},
{q:'t-toets T=4,20, df=7, significantieniveau 1%. In dit geval mag de nulhypothese niet verworpen worden.',opts:['Onjuist','Juist'],exp:'Kritieke t(7) bij 1% (tweezijdig) = ~3,50 < 4,20. Dus H0 mag WEL verworpen worden. Uitspraak is onjuist.'},
]},

// ═══════════════════════════════════════════════
//  2020 – KINESIOLOGIE
// ═══════════════════════════════════════════════
kinesio_cikmis_2020juni:{title:'Kinesiologie – Çıkmış 2020 Juni',questions:[
{q:'Bij een TMD-patiënt, welke elementen zijn meer versleten?',opts:['Premolaren','Molaren'],exp:'Bij bruxisme/TMD: premolaren tonen karakteristiek meer occlusale slijtage dan molaren.'},
{q:'Een patiënt met erg nekklachten stuur je door naar een fysiotherapeut.',opts:['Juist','Onjuist'],exp:'Nekklachten bij TMD: verwijzen naar orofaciaal fysiotherapeut is aanbevolen.'},
{q:'Een opbeetplaat dient hard, uitneembaar, dun en stabiel te zijn.',opts:['Juist','Onjuist'],exp:'Stabilisatieplaat: hard acrylaat, uitneembaar, dun (<2,5mm), stabiel (goede retentie).'},
{q:'Bij counseling van een mogelijke TMD-patiënt, stelt u de patiënt altijd gerust.',opts:['Onjuist','Juist'],exp:'Geruststelling (reassurance) is eerste stap, maar niet altijd automatisch juist. Bij ernstige aandoeningen gepaste informatieverstrekking.'},
{q:'Wanneer een tandarts tijdens het consult een patiënt met een acute open lock ziet, dient de tandarts zo snel mogelijk de onderkaak te reponeren.',opts:['Juist','Onjuist'],exp:'Acute luxatie (open lock) = kaakgewrichtluxatie; tandarts repositioneert de condyl zo snel mogelijk.'},
{q:'Bij obese OSA-patiënten is een MRA-behandeling minder effectief.',opts:['Juist','Onjuist'],exp:'Obesitas vermindert effectiviteit MRA bij slaapapneu door centrale/positiefactoren.'},
{q:'Bruxisme per definitie is de statische en dynamische tests bij tandcontact (TMD).',opts:['Onjuist','Juist'],exp:'Bruxisme: tandpersen (statisch) of tandknarsen (dynamisch). Definitie is niet exclusief aan TMD-tests.'},
{q:'Bij een gedisloceerde collumfractuur kan sprake zijn van een occlusie-stoornis. Het betreft dan een prematuur contact aan de aangedane zijde.',opts:['Juist','Onjuist'],exp:'Condylusfractuur → verkorting ramus → vroegtijdig contact ipsilateraal, open beet contralateraal.'},
{q:'Hypermobiliteit neemt af bij oudere leeftijd.',opts:['Juist','Onjuist'],exp:'Ligamentaire laxiteit en hypermobiliteit nemen meestal af met het ouder worden (weefsel wordt stijver).'},
]},

// ═══════════════════════════════════════════════
//  2020 – ORALE FUNCTIELEER
// ═══════════════════════════════════════════════
functie_cikmis_2020juni:{title:'Orale Functieleer – Çıkmış 2020 Juni (deel 1)',questions:[
{q:'Voor de kroon van de 26 doe je een balanstest, je schuift met de tanden naar:',opts:['Links','Rechts'],exp:'26 = linkse zijde. Balanstest: laterale beweging NAAR de kant van het element (werktand zijde).'},
{q:'Na het nemen van een afdruk voor een voorziening waarbij je een brug maakt tussen de 13-23, doe je:',opts:['Niets (beetbepaling niet nodig)','Beetbepalen met een slotje'],exp:'Brug 13-23: beide hoektanden zijn aanwezig, beetverhouding is stabiel, geen extra beetbepaling nodig.'},
{q:'Voor een etsbrug gebruik je:',opts:['Keramiek en metaal','Keramiek of metaal'],exp:'Maryland brug (etsbrug): combinatie van metalen vleugels (retentie) met porseleinlichaam.'},
{q:'Voor het hechten van een composietbrug gebruik je etsen en silaan.',opts:['Onjuist','Juist'],exp:'Composietbrug: etsen voor glazuur/dentine + zirconiabrug of all-ceramic vereist silaan. Maar composiet-composiet: etsen + bonding.'},
{q:'Voor het aanbrengen van een abutment van een implantaat heb je een momentsleutel nodig.',opts:['Juist','Onjuist'],exp:'Abutment torque: vastgesteld torque (Ncm) vereist voor correct aandraaien zonder overbelasting.'},
{q:'Een slechte mondhygiëne is een contraindicatie voor een frameprothese.',opts:['Juist','Onjuist'],exp:'Frameprothese vereist goede mondhygiëne; slechte MH verhoogt cariës- en paro-risico bij pijlerelementen.'},
{q:'Bij een prothese gebruiken we vooral porseleinen tanden.',opts:['Onjuist','Juist'],exp:'Prothese: acrylhars tanden zijn standaard (goedkoper, makkelijker aanpasbaar, minder slijtage antagonist).'},
{q:'Het doel van een stift is het versterken van het element.',opts:['Onjuist','Juist'],exp:'Stift dient ter retentie van de opbouw, NIET ter versterking van de resterende wortel.'},
{q:'Keramische stiften zijn van nature bros waardoor het materiaal niet buigt maar relatief gemakkelijk breekt.',opts:['Juist','Onjuist'],exp:'Keramische (zirconia) stiften: hard en bros, breekt bij overbelasting. Glasvezelstiften buigen meer.'},
{q:'Peri-implantitis vergeleken met parodontitis treedt er langzamer en verder verlies van het bindweefsel op.',opts:['Onjuist','Juist'],exp:'Peri-implantitis: snellere en agressievere botafbraak dan parodontitis door gebrek aan periodontaal ligament.'},
{q:'Resilientie is in een edentate mucosa overal gelijk.',opts:['Onjuist','Juist'],exp:'Mucosale veerkracht (resilientie) varieert per locatie: dikker slijmvlies = meer veerkracht.'},
{q:'In het geval van een resterende kleine wortelrest speelt de grootte van de wortel een rol wanneer je besluit de wortel te verwijderen of te houden.',opts:['Juist','Onjuist'],exp:'Bij kleine wortelresten: grootte, infectiestatus en anatomische nabijheid bepalen het beleid.'},
{q:'Aluminiumchloride, ijzersulfaat en aluin zijn medicamenten voor gingivale retractie. Ze hebben:',opts:['Een adstringerende werking','Een vasoconstrictoire werking'],exp:'Aluminiumchloride en ijzersulfaat: adstringerend. Adrenaline-houdende draad: vasoconstrictief.'},
{q:'De retentie van een gebitsprothese is het vermogen om horizontaalgerichte krachten te weerstaan.',opts:['Onjuist','Juist'],exp:'Retentie = weerstand tegen vertikale uittrekkrachten. Stabiliteit = weerstand tegen horizontale krachten.'},
{q:'Ondersnijdingen in de kaak geven meer retentie aan de volledig prothese.',opts:['Juist','Onjuist'],exp:'Anatomische ondersnijdingen: verhogen mechanische retentie van de prothese mits benut in opbouw.'},
]},

functie_cikmis_2020juni_b:{title:'Orale Functieleer – Çıkmış 2020 Juni (deel 2)',questions:[
{q:'Het definitieve kenmerk voor peri-implantitis is:',opts:['Botverlies','Pusvorming'],exp:'Peri-implantitis = definitief botverlies op röntgen + tekenen van ontsteking. Pusvorming is één symptoom.'},
{q:'Tijdens resorberen van de kaken gaat de bovenkaak breed/groter en de onderkaak smaller worden.',opts:['Onjuist','Juist'],exp:'Resorptie: bovenkaak wordt smaller (centraal), onderkaak wordt breder (buccale expansie van processus).'},
{q:'Waarom laten we de rand van een kroon approximaal liever niet in al bestaande composietvulling eindigen?',opts:['Vanwege het gevaar van randlekkage','Omdat je composiet niet onder de kroon mag laten zitten'],exp:'Composiet als kroonrand = randlekkage-risico, slechte aansluiting cement-composiet.'},
{q:'Flabby ridge kan plotseling van zelf ontstaan.',opts:['Onjuist','Juist'],exp:'Flabby ridge (fibreus weefsel) ontstaat geleidelijk door chronische druk van prothese, niet plotseling.'},
{q:'Bij overkappen van een knobbel van een endodontisch behandeld element kun je gebruik maken van composiet en dit gaat het element verzwakken.',opts:['Onjuist','Juist'],exp:'Composiet onlay op endo-element: kan element beschermen. Niet automatisch verzwakken.'},
{q:'Het loskomen van een brug wordt vaak als technisch falen waargenomen, behalve als het door cariës losgekomen is.',opts:['Juist','Onjuist'],exp:'Losgekomen brug door cariës = biologisch falen, niet technisch falen.'},
{q:'Ragaden ontstaat door stoffen bij de cuspidaten.',opts:['Onjuist','Juist'],exp:'Ragaden (cheilitis angularis) = mondhoekontsteking; oorzaak is te hoge beet/samengevallen mondhoeken, niet cuspidaat-contact.'},
{q:'Een kroon met 3 wortels. Bij een immediaat prothese: wanneer doe je de extractie? De beste tijd is 3 maanden voor plaatsing.',opts:['Juist','Onjuist'],exp:'Bij immediaat prothese: extractie en prothese plaatsen tegelijk (dag 0), niet 3 maanden eerder.'},
{q:'Bij kroon-caviteitpreparaties bij de premolaren is het meeste gevaar aan de palatinale pulpahorns.',opts:['Juist','Onjuist'],exp:'Bovenste premolaren: palatinale pulpahorn hoog gelegen → expositierisico bij palatinale preparatie.'},
{q:'Volledige kroonpreparatie veroorzaakt altijd pulpaprikkeling.',opts:['Onjuist','Juist'],exp:'Kroonpreparatie met voldoende dentinedikte en goede koeling hoeft geen klinisch relevante pulpaschade te geven.'},
]},

// ═══════════════════════════════════════════════
//  2020 – ORTHODONTIE
// ═══════════════════════════════════════════════
ortho_cikmis_2020juni:{title:'Orthodontie – Çıkmış 2020 Juni',questions:[
{q:'Bij een eerste blijvende molaar met diepe cariës: wanneer trek je de molaar uit zodat de tweede molaar de plaats van de eerste kan innemen?',opts:['Wanneer de furcatie van de tweede molaar zichtbaar is op de OPT','Na doorbreken van de tweede molaar'],exp:'Optimaal extractietijdstip 36: furcatie van de 37 net calcificeert (zichtbaar op OPT, ca. 8-9 jaar).'},
{q:'Snelle sutuurexpansie wordt toegepast:',opts:['Bij jonge kinderen','Bij meerdere posterieure elementen in kruisbeet'],exp:'Snelle palatinale expansie: effectief zolang de mediane sutuur open is (jonge kinderen <15 jaar).'},
{q:'De term oligodontie wordt gebruikt voor 6 of meer elementen die niet aangelegd zijn.',opts:['Juist','Onjuist'],exp:'Oligodontie = ≥6 ontbrekende elementen exclusief de M3. Hypodontie = <6 ontbrekende elementen.'},
{q:'Bij een extrusie van een element groeit het alveolaire bot verticaal.',opts:['Juist','Onjuist'],exp:'Orthodontische extrusie leidt tot verticale alveolaire botgroei mee (dentoalveolaire adaptatie).'},
{q:'Je ziet bij een kind van 10 jaar met ernstige crowding dat ze erg veel plaque heeft. Wat doe je?',opts:['Haar uitleggen dat ze eerst haar MH goed moet hebben, orthodontische behandeling kan altijd nog','Meteen doorsturen naar een orthodontoloog'],exp:'Orthodontische behandeling vereist adequate mondhygiëne. Eerst MH optimaliseren.'},
{q:'Een patiënt van 25 jaar die orthodontisch behandeld is heeft nu een openbeet. Dit kan komen door verkeerde tonggewoonte.',opts:['Verkeerde tonggewoonte','Patiënt duimzuigt'],exp:'Bij volwassene na ortho: relapse openbeet = tonggewoonte (tongue thrust) is de meest logische oorzaak.'},
{q:'De meeste behandeling van een geïmpacteerde cuspidaat is niets doen.',opts:['Ligeren en vrijleggen','Niets'],exp:'Geïmpacteerde cuspidaat: chirurgisch vrijleggen + orthodontisch ligeren (naar positie brengen).'},
{q:'Een spleet in het palatum bij linkszijdige lip-kaak-verhemeltespleet ontstaat door gebrek aan fusie tussen de processus nasalis medialis en processus maxillaris.',opts:['Juist','Onjuist'],exp:'Lip-kaakspleet: onvoldoende fusie processus nasalis medialis en processus maxillaris.'},
{q:'Waarom is de Activator bij volwassenen niet meer werkzaam?',opts:['Er geen sprake meer is van groei en bepaalde behandelingen niet meer mogelijk zijn','Er vaak een compromis gesloten wordt wat nieuwe problemen met zich meebrengt'],exp:'Activator werkt via groeimodulatie van de kaken; zonder groei (volwassenen) geen skeletaal effect.'},
{q:'Mesioliptrap is altijd negatieve overjet.',opts:['Onjuist','Juist'],exp:'Mesioliptrap (klasse III): kan positieve of neutrale overjet hebben (met of zonder dwangbeet).'},
]},

// ═══════════════════════════════════════════════
//  2020 – ORALE PATHOLOGIE
// ═══════════════════════════════════════════════
pato_cikmis_2020juni:{title:'Orale Pathologie – Çıkmış 2020 Juni',questions:[
{q:'Metastasen in het kaakbot vinden we vooral in het gebied van:',opts:['Kaakhoek/ondermolaarstreek','Tuber maxillaire/bovenmolaarstreek'],exp:'Metastasen in mandibula: meest frequent in het premolaar-molaargebied en de kaakhoek.'},
{q:'Het merendeel van de speekselkliertumoren komt voor in de gl. mandibularis.',opts:['Onjuist','Juist'],exp:'Speekselkliertumoren: meest in parotis (70-80%). Submandibularis 10-15%. Sublingualis zeldzaam.'},
{q:'Een late radiotherapie bijwerking is osteoradionecrose.',opts:['Juist','Onjuist'],exp:'Osteoradionecrose: late complicatie van kaakbestraling (maanden-jaren na RT).'},
{q:'Plaveiselcelcarcinoom is het meest voorkomende maligne tumor in de mond.',opts:['Juist','Onjuist'],exp:'SCC: >90% van alle maligne mondtumoren.'},
{q:'Van alle kwaadaardige tumoren die in het lichaam kunnen voorkomen, ontstaat het volgende percentage in de mond:',opts:['3%','12%'],exp:'Mondkanker: ca. 3% van alle maligne tumoren wereldwijd.'},
{q:'Leukoplakie van het mondslijmvlies komt vooral voor in de leeftijdscategorie:',opts:['40 jaar en ouder','20-30 jaar'],exp:'Leukoplakie: predominant bij patiënten >40 jaar, vaker mannen, risicofactoren roken/alcohol.'},
{q:'Een benigne tumor:',opts:['Groeit nauwelijks op','Groeit snel op'],exp:'Benigne tumoren: langzame groei, goed afgebakend, geen metastasen. Maligne = snelle groei.'},
{q:'Endocarditis wordt veroorzaakt door gram-positieve streptokokken.',opts:['Juist','Onjuist'],exp:'Infective endocarditis: Viridans streptokokken (gram-positief) meest frequent na tandheelkundige ingreep.'},
{q:'Alveolitis kan optreden na extractie van een gebitselement na 6-8 dagen.',opts:['Juist','Onjuist'],exp:'Alveolitis sicca (droge alveole): piek 2-4 dagen na extractie. 6-8 dagen is laat maar mogelijk.'},
{q:'Bij mondbranden:',opts:['Ziet het tong- en/of mondslijmvlies er min of meer normaal uit','Dient serologisch onderzoek te worden verricht'],exp:'Mondbranden (Burning Mouth Syndrome): geen zichtbare slijmvliesafwijkingen, klacht is subjectief.'},
]},

// ═══════════════════════════════════════════════
//  2020 – MKA (Mondkaakgelaat)
// ═══════════════════════════════════════════════
mkz_cikmis_2020juni:{title:'MKA-Chirurgie – Çıkmış 2020 Juni',questions:[
{q:'Het TNM-classificatiesysteem voor het plaveiselcelcarcinoom van de mond zegt iets over:',opts:['Het stadium van de ziekte','Het biologische gedrag van de tumor'],exp:'TNM: T=tumorgrootte, N=lymfklieren, M=metastasen. Classificeert het stadium van de ziekte.'},
{q:'Bij een complete schisis ziet men vaak een verminderde voorwaartse groei van de bovenkaak.',opts:['Juist','Onjuist'],exp:'Schisis: chirurgie beïnvloedt maxillaire groei → verminderde voorwaartse midface-groei.'},
{q:'Een mediaan rhomboïde glossitis is een aangeboren ziekte.',opts:['Onjuist','Juist'],exp:'Mediaan rhomboïde glossitis: niet aangeboren maar geassocieerd met Candida albicans-infectie.'},
{q:'Bij het trekken van de bovenste premolaar luxeer je eerst naar:',opts:['Buccaal','Palatinaal'],exp:'Bovenste premolaar: luxeer eerst buccaal (dunste botplaat), dan palatinaal, dan rotatie.'},
{q:'Bij een mesio-angulaire impactie van de 38 bestaat het verwijderen uit het vrijleggen van bot mesiaal van de kroon en het axiaal splitsen van de kroon.',opts:['Juist','Onjuist'],exp:'Mesio-angulaire 38: botosteotomie mesiaal + kronensplitsing van kroon van wortel.'},
{q:'Bij een subperiostaal abces, wat doe je?',opts:['Incisie en drainage door het periost','Endo starten'],exp:'Subperiostaal abces: incisie door mucosa EN periost, drainage.'},
{q:'Na operatieve verwijdering van de onderverstandskies treedt bij 5% van de gevallen een verstoorde wondgenezing op.',opts:['Onjuist','Juist'],exp:'Alveolitis na verwijdering 38: ca. 20-30% (niet 5%). 5% is te laag geschat.'},
{q:'Welke geïmpacteerde onderverstandskies is het moeilijkst te verwijderen?',opts:['Disto-angulaire inclinatie','Buccolinguale positie'],exp:'Disto-angulaire 38: meest beperkte toegang, beperkte luxatieruimte → moeilijkst te verwijderen.'},
{q:'Een onbehandeld periapicaal abces leidt in een volgende fase tot:',opts:['Periostitis','Osteomyelitis'],exp:'Progressie: pulpanecrose → periapicaal abces → periostitis → cellulitis/flegmone.'},
{q:'Een ameloblastoom is een dentogene tumor met neiging tot recidiefvorming na verwijdering.',opts:['Juist','Onjuist'],exp:'Ameloblastoom: lokaal agressief, hoog recidiefpercentage na conservatieve verwijdering.'},
{q:'Na doorbraak van een subperiostaal abces in de weke delen ontstaat een flegmone.',opts:['Juist','Onjuist'],exp:'Subperiostaal abces → doorbraak mucosa/huid → cellulitis/flegmone (diffuze ontsteking weke delen).'},
{q:'We onderscheiden een worteltang met een andere tang doordat de bekken elkaar raken.',opts:['Juist','Onjuist'],exp:'Worteltang: bekken raken elkaar (smaller, voor wortels). Extractietang: bekken raken niet.'},
{q:'Een residuele cyste is afhankelijk van: radiculaire cyste.',opts:['Juist','Onjuist'],exp:'Residuale cyste = achtergebleven radiculaire cyste na extractie van causaal element.'},
{q:'Bij maxillaire sinusitis: kenmerken zijn een foetide neusafvloed, loopneus en pijn in de mondholte.',opts:['Juist','Onjuist'],exp:'Dentogene sinusitis maxillaris: foetide (stinkende) eenzijdige neusafvloed, pijn regio P/M boven.'},
]},

// ═══════════════════════════════════════════════
//  2021 – STATISTIEK (December 2021)
// ═══════════════════════════════════════════════
statistiek_cikmis_2021dec:{title:'Statistiek – Çıkmış 2021 December',questions:[
{q:'Voor de variabele pocketdiepte gemeten in mm mag de standaarddeviatie berekend worden.',opts:['Juist','Onjuist'],exp:'Pocketdiepte in mm = ratio meetniveau; gemiddelde en SD mogen berekend worden.'},
{q:'In de gegeven frequentieverdeling van zuurstofzaturatie geldt mediaan = modus.',opts:['Juist','Onjuist'],exp:'Modus = 98 (hoogste freq 10). Mediaan (16e van 30 waarden) valt ook bij 98. Uitspraak is juist.'},
{q:'Regressievergelijking: kwaliteit van leven (y) = constant + coëfficiënt * gevulde vlakken (x). De score op kwaliteitvan leven neemt per gevuld vlak af met 0,87.',opts:['Juist','Onjuist'],exp:'Negatieve regressiecoëfficiënt voor gevulde vlakken = kwaliteit van leven daalt met meer vullingen.'},
{q:'Voor de Pearson correlatiecoëfficiënt r tussen X (36,28,34,26,23) en Y (3,15,9,17,26): r is precies -1.',opts:['Onjuist','Juist'],exp:'X daalt niet consistent (23<26<28<34<36), Y stijgt niet perfect tegenovergesteld → r ≠ -1.'},
{q:'Hoe kleiner het verschil tussen twee gemiddelden, hoe kleiner de power van een toets.',opts:['Juist','Onjuist'],exp:'Kleinere effectgrootte = moeilijker significant → meer kans op type II fout → lagere power.'},
{q:'t-toets T=6,45, df=7, significantieniveau 1%. De nulhypothese kan in dit geval NIET worden verworpen.',opts:['Onjuist','Juist'],exp:'Kritieke t(7) bij 1% (tweezijdig) = ~3,50 < 6,45 → H0 mag WEL verworpen worden. Uitspraak is onjuist.'},
{q:'One-way ANOVA: F=6,78, df1=1, df2=20. De bijbehorende overschrijdingskans p is kleiner dan 1%.',opts:['Onjuist','Juist'],exp:'Kritieke F(1,20) bij 1% = 8,10 > 6,78 → p>1%. Uitspraak dat p<1% is onjuist.'},
{q:'Chi-kwadraattoets toont relatie tussen kaakgewrichtsklachten en klemmen. H0 verworpen. De conclusie is: er is een relatie.',opts:['Juist','Onjuist'],exp:'H0 verworpen bij chi-kwadraattoets = er is een significante relatie/associatie aangetoond.'},
{q:'t-toets p=0,069, significantieniveau 5%. De nulhypothese mag worden verworpen.',opts:['Onjuist','Juist'],exp:'p=0,069 > α=0,05: H0 mag NIET verworpen worden. Uitspraak is onjuist.'},
{q:'Een onderzoeker wil bepalen of mensen die zich vaccineren tegen COVID-19 ouder zijn dan mensen die dat niet doen. Bij een keuze is de independent-samples t-toets de beste.',opts:['Juist','Onjuist'],exp:'Leeftijd (continue variabele) vergelijken tussen twee groepen → independent-samples t-toets is juist.'},
{q:'Een onderzoeker wil drie COVID-groepen (IC, ziekenhuis, thuis) vergelijken op wel/niet gevaccineerd. De variantie-analyse is de beste keuze.',opts:['Onjuist','Juist'],exp:'Drie groepen + categorische uitkomst (gevaccineerd ja/nee) → chi-kwadraat, niet ANOVA.'},
]},

// ═══════════════════════════════════════════════
//  2021 – BASIS MEDISCH
// ═══════════════════════════════════════════════
basis_cikmis_2021dec:{title:'Basis Medisch – Çıkmış 2021 December',questions:[
{q:'Antilichaamproductie behoort tot de aangeboren immuniteit.',opts:['Onjuist','Juist'],exp:'Antilichamen worden geproduceerd door B-lymfocyten (verworven immuniteit). Aangeboren: macrofagen, NK-cellen.'},
{q:'Bij aangeboren immuniteit tegen een virus is verantwoordelijk:',opts:['NK-cel (Natural Killer cel)','Macrofaag'],exp:'NK-cellen herkennen en vernietigen virusgeïnfecteerde cellen zonder voorafgaande sensibilisatie.'},
{q:'Volgorde botformatie bij fractuurherstel: botachtige callus gevolgd door kraakbenige callus.',opts:['Onjuist','Juist'],exp:'Juiste volgorde: fibrinestolsel → bindweefsel → kraakbenige callus → botachtige callus → remodellering.'},
{q:'Antilichaamproductie behoort tot de verworven immuniteit.',opts:['Juist','Onjuist'],exp:'Verworven immuniteit: B-cellen (antilichamen), T-cellen. Aangeboren: complement, fagocyten.'},
{q:'Glucagon verlaagt de bloedsuikerspiegel.',opts:['Onjuist','Juist'],exp:'Glucagon verhoogt de bloedsuikerspiegel (glycogenolyse in lever). Insuline verlaagt.'},
{q:'Ibuprofen is geschikt voor patiënten met maagklachten.',opts:['Onjuist','Juist'],exp:'NSAID\'s (ibuprofen) zijn gecontraïndiceerd bij maagklachten/ulcus vanwege COX-1-remming.'},
{q:'Een patiënt had een TIA 4 weken geleden. Je stelt de behandeling 3 maanden uit.',opts:['Onjuist','Juist'],exp:'Na TIA of CVA: electieve tandheelkundige behandeling uitstellen tot ≥1 maand (stabiele periode).'},
{q:'Steriliseren in praktijken via formaldehydegebruik.',opts:['Onjuist','Juist'],exp:'Formaldehyde is geen standaard sterilisatiemethode in de Nederlandse tandartspraktijk (autoclaaf is standaard).'},
{q:'Een patiënt heeft acute reuma. We doen endocarditis profylaxe.',opts:['Juist','Onjuist'],exp:'Doorgemaakte reumatische koorts met valvulopathie: endocarditis profylaxe geïndiceerd bij risicovolle ingrepen.'},
{q:'MRSA is meer virulent dan Staphylococcus aureus.',opts:['Onjuist','Juist'],exp:'MRSA is NIET inherent meer virulent, maar is resistent tegen meticilline/bètalactam-antibiotica.'},
{q:'Polsdruk neemt af wanneer arteriewanden verkalken.',opts:['Onjuist','Juist'],exp:'Arteriosclerose → stijvere wand → hogere systolische druk, gelijkblijvende diastolische → verhoogde polsdruk.'},
{q:'Groepsimmuniteit treedt op als 95% van de kinderen gevaccineerd is. Dit beschermt de andere kinderen.',opts:['Juist','Onjuist'],exp:'Groepsimmuniteit (herd immunity): hoge vaccinatiegraad beschermt ook niet-gevaccineerden via indirecte bescherming.'},
{q:'Patiënt heeft een gezond hart (25 jaar, sport). Pijn op de borst tijdens behandeling. Meest waarschijnlijk:',opts:['Hyperventilatie','Angina pectoris'],exp:'Jonge gezonde patiënt + pijn op borst bij tandarts = hyperventilatie (angst). Angina onwaarschijnlijk.'},
{q:'Een veneuze collaps/veneus bloed is bijna leeg van zuurstof.',opts:['Juist','Onjuist'],exp:'Veneus bloed heeft lager O2-gehalte maar is niet leeg; saturatie ca. 70-75% (arterieel ca. 98%).'},
]},

// ═══════════════════════════════════════════════
//  2021 – ORALE FUNCTIELEER (THK II December 2021)
// ═══════════════════════════════════════════════
functie_cikmis_2021dec:{title:'Orale Functieleer – Çıkmış 2021 December',questions:[
{q:'Intermaxillaire ruimte voor posterior implantaat: minimaal vereiste hoogte?',opts:['7 mm','4 mm'],exp:'Minimale intermaxillaire ruimte posterior implantaat: 7mm (voor kroon + abutment).'},
{q:'De meest biocompatibele kroonmateriaal is:',opts:['Goud','Keramiek/zirconium'],exp:'Goud is het meest biocompatibele kroonmateriaal door chemische inertie en weefselvriendelijkheid.'},
{q:'De meest overlevingskans heeft:',opts:['Goud','Monolithisch zirkonia'],exp:'Gouden kronen hebben de langste bewezen overlevingskans (>15 jaar) in klinische studies.'},
{q:'Het op de wang of op de tong bijten kan optreden als de molaren niet in de neutrale zone zijn opgesteld.',opts:['Juist','Onjuist'],exp:'Molaren buiten neutrale zone (te buccaal/linguaal) → patiënt bijt op wang of tong.'},
{q:'4 implantaten in de onderkaak met prothese: semi-starre met kans op kanteling of starre zonder kanteling?',opts:['Starre (geen kanteling) als all-on-4 constructie','Semi-starre met kans op kanteling'],exp:'All-on-4 (vaste brug op 4 implantaten) = starre constructie, geen kanteling.'},
{q:'Waarom gebruiken we gebreide retractiedraad bij afdruk?',opts:['Kan vloeistof goed resorberen','Niet gesplijt tijdens het aanbrengen in de sulcus'],exp:'Gebreide draad: betere vloeistof-absorptie (bloed, sulcusvloeistof) dan gevlochten draad.'},
{q:'Ragaden komen door teveel vullingen ter plaatse van de cuspidaten.',opts:['Onjuist','Juist'],exp:'Ragaden (cheilitis angularis) = mondhoekontsteking door te hoge beet (overlossing) of Candida.'},
{q:'Resorptie bovenkaak wordt breder, onderkaak wordt smaller.',opts:['Onjuist','Juist'],exp:'Resorptie: bovenkaak → smaller. Onderkaak → breder (centrifugale resorptie).'},
{q:'Flabby ridge ontstaat snel en spontaan.',opts:['Onjuist','Juist'],exp:'Flabby ridge = fibrotisch weefsel, geleidelijk ontstaan door langdurige prothesedruck.'},
{q:'Bij immediate prothese gebruik je porseleinen tanden.',opts:['Onjuist','Juist'],exp:'Immediate prothese: acrylhars tanden, niet porselein (porselein is te hard voor de eerste fase na extractie).'},
{q:'Slechte mondhygiëne is een contraindicatie voor een frameprothese.',opts:['Juist','Onjuist'],exp:'Frame vereist goede MH ter bescherming van pijlertanden; slechte MH = relatieve CI.'},
{q:'Osteoporose is een contraindicatie voor implantaten.',opts:['Onjuist','Juist'],exp:'Osteoporose is een relatieve risicofactor maar geen absolute CI voor implantaten.'},
{q:'16 mist, 15 en 17 grote MOD-vulling. Je kiest:',opts:['Onlay op 15/17 en implantaat voor 16','Maryland bridge'],exp:'Grote MOD-vullingen met ontbrekende 16: implantaat is eerste keus; eventueel onlay als alternatief.'},
{q:'12 mist door trauma, patiënt heeft overbeet en gummy smile. Je kiest:',opts:['Etsbrug 13-12','Conventionele brug 11-13'],exp:'Overbeet + gummy smile + 12 mist bij gezonde buurlanden: etsbrug (minimaal invasief) is beste keuze.'},
{q:'Voordeel van lithiumdissilicaat kroon is esthetisch.',opts:['Juist','Onjuist'],exp:'Lithiumdisilicaat (e.max): uitstekende esthetiek door translucentie en kleurovereenkomst met tand.'},
]},

// ═══════════════════════════════════════════════
//  2021 – KINESIOLOGIE (December 2021)
// ═══════════════════════════════════════════════
kinesio_cikmis_2021dec:{title:'Kinesiologie – Çıkmış 2021 December',questions:[
{q:'E-health is geschikt voor chronische TMD-pijn.',opts:['Juist','Onjuist'],exp:'E-health (online zelfmanagement, oefeningen op afstand) is evidence-based bij chronische TMD-behandeling.'},
{q:'Statische test geeft pijn maar geen pijn bij dynamische test. Diagnose:',opts:['Myalgie (myogene TMD)','Artralgie'],exp:'Statische test belast de spieren: pijn = myalgie. Dynamische test belast het gewricht: pijn = artralgie.'},
{q:'Bruxisme verergert slaapapneu.',opts:['Onjuist','Juist'],exp:'Bruxisme is functioneel gerelateerd aan slaapapneu: knarsen kan optreden als onbewust ademhalingsactiverend mechanisme.'},
{q:'Symptomatische discusverplaatsing zonder reductie (ADD-R): doorverwijzen naar orofaciaal fysiotherapeut.',opts:['Juist','Onjuist'],exp:'ADD-R: fysiotherapeut kan mobilisatietechnieken toepassen om bandlaxiteit te verbeteren.'},
{q:'Bij een open lock dient de tandarts zo snel mogelijk de onderkaak te reponeren.',opts:['Juist','Onjuist'],exp:'Acute kaakgewrichtsluxatie: zo snel mogelijk reponeren voor spierspasme optreedt.'},
{q:'Stabilisatieopbeetplaat dient hard, dun, uitneembaar en stabiel te zijn.',opts:['Juist','Onjuist'],exp:'Opbeetplaat: hard acryl, dun (<2,5mm), uitneembaar, stabiele retentie/steun.'},
{q:'OSAS kan een myocardinfarct (MI) veroorzaken.',opts:['Juist','Onjuist'],exp:'OSAS verhoogt cardiovasculair risico significant: hypertensie, aritmieën, MI-risico.'},
]},

// ═══════════════════════════════════════════════
//  2021 – MKA (December 2021)
// ═══════════════════════════════════════════════
mkz_cikmis_2021dec:{title:'MKA-Chirurgie – Çıkmış 2021 December',questions:[
{q:'Van alle kwaadaardige tumoren die in het lichaam kunnen voorkomen, ontstaat het volgende percentage in de mond:',opts:['3%','12%'],exp:'Mondkanker: ca. 3% van alle maligne tumoren wereldwijd.'},
{q:'Tumor in de sinus maxillaris: kenmerken zijn dubbelzien en tranende ogen.',opts:['Juist','Onjuist'],exp:'Sinus maxillaris tumor: doorgroei naar orbita → diplopie (dubbelzien) + epifora (tranende ogen).'},
{q:'Folliculaire cyste is geassocieerd met:',opts:['M3 onderkaak en cuspidaat bovenkaak (niet-geërupteerde elementen)','M3 boven- en onderkaak'],exp:'Folliculaire cyste: rondom kroon van geïmpacteerd element. Meest: 38/48 en 13 (geïmpacteerde cuspidaat).'},
{q:'Een residuale cyste is etiologisch het meest verwant met de radiculaire cyste.',opts:['Juist','Onjuist'],exp:'Residuale cyste = achtergebleven radiculaire cyste na extractie van het causale element.'},
{q:'Beleid bij focale scleroserende osteomyelitis bestaat meestal uit afwachten.',opts:['Juist','Onjuist'],exp:'Focale scleroserende OM: oorzaak behandelen (WKB of extractie). Sclerotisch bot: afwachten, remodellering.'},
{q:'Op de X-ray kan je een centrale reuscelgranuloom onderscheiden van een odontoom.',opts:['Juist','Onjuist'],exp:'Odontoom bevat calcificaties (radiopaak component) → duidelijk te onderscheiden van reuscelgranuloom.'},
{q:'Mediaan rhomboïde glossitis is een aangeboren afwijking.',opts:['Onjuist','Juist'],exp:'Mediaan rhomboïde glossitis: niet aangeboren, geassocieerd met Candida albicans.'},
{q:'Een plaveiselcelcarcinoom van de onderlip komt vooral voor bij:',opts:['Oudere mannen','Jonge mannen'],exp:'SCC onderlip: oudere mannen, risicofactoren: zonlicht, tabak, alcohol.'},
{q:'Hairy leukoplakia is een uiting van HIV-infectie.',opts:['Juist','Onjuist'],exp:'Harige leukoplakie (EBV) is een kenmerkende opportunistische infectie bij HIV/AIDS.'},
{q:'SCC op de tong: behandeling is lokale excisie, daarna radiotherapie en chemotherapie.',opts:['Juist','Onjuist'],exp:'Stadium IV tong-SCC: excisie + radio/chemotherapie. Stadium I/II: excisie alleen kan volstaan.'},
{q:'Kleine wortelresten: de grootte van de wortelrest is belangrijk voor de beslissing tot extractie.',opts:['Juist','Onjuist'],exp:'Beslissing: grootte, infectiestatus, anatomische nabijheid (sinus, n. alveolaris) bepalen het beleid.'},
{q:'Behandeling van subperiostaal abces: drainage en incisie door het periost.',opts:['Juist','Onjuist'],exp:'Subperiostaal abces: incisie door mucosa EN periost + drainage.'},
{q:'Een late radiotherapie bijwerking is osteoradionecrose.',opts:['Juist','Onjuist'],exp:'Osteoradionecrose: laat optredende complicatie van kaakbestraling (maanden tot jaren na RT).'},
{q:'Kaakontsteking kan veroorzaakt worden door bestraling.',opts:['Juist','Onjuist'],exp:'Bestraling kaakbot → hypoxische, avasculaire, hypofibrotische omgeving → osteoradionecrose-risico.'},
{q:'Een eenzijdige cheiloschisis ontstaat door onvoldoende fusie van de processus nasalis medialis en processus maxillaris.',opts:['Juist','Onjuist'],exp:'Lip-kaakspleet: fusiegebrek processus nasalis medialis en processus maxillaris.'},
]},

// ═══════════════════════════════════════════════
//  2021 – ORTHODONTIE (December 2021)
// ═══════════════════════════════════════════════
ortho_cikmis_2021dec:{title:'Orthodontie – Çıkmış 2021 December',questions:[
{q:'Bij een omgekeerde frontbeet kun je een dwangbeet aantreffen.',opts:['Juist','Onjuist'],exp:'Omgekeerde frontbeet (anterieure kruisbeet): vaak pseudoprogenie met dwangbeet (forcering onderkaak voor).'},
{q:'Patiënt 6 jaar, 11 al doorgebroken; 1 jaar later 21 nog niet. Je maakt een OPT.',opts:['Onjuist (solo-periapicale opname verdient voorkeur)','Juist'],exp:'Voor beoordeling enkel gebit: periapicale opname verdient voorkeur boven OPT (lagere dosis, betere details).'},
{q:'Patiënt 9 jaar met ernstig carieuze 16 zonder ruimtegebrek: wanneer is het goed om de 16 te extraheren?',opts:['Wanneer calcificatie van M2 zichtbaar is op de OPT','Wanneer de cuspidaat is doorgebroken'],exp:'Optimale timing extractie 16: wanneer furcatie/calcificatie van 17 zichtbaar is op OPT (ca. 8-9 jaar).'},
{q:'Buitenboordbeugel: uit onderzoek blijkt dat meisjes meer uren dragen dan jongens.',opts:['Juist','Onjuist'],exp:'Onderzoek: meisjes dragen de buitenboordbeugel gemiddeld meer uren dan jongens (compliance).'},
{q:'Op welke leeftijd moeten 13, 14 en 15 doorgekomen zijn: 13=11, 14=10, 15=11 jaar.',opts:['Juist','Onjuist'],exp:'Doorbraak: 14 (eerste premolaar) doorbreekt eerder dan 13 en 15 (ca. 10 jaar). 13 en 15: ca. 11-12 jaar.'},
{q:'Meisje 14 jaar, ontbrekende cuspidaat bovenkaak: dit is indicatie voor impactie.',opts:['Juist','Onjuist'],exp:'Ontbrekende cuspidaat bij 14-jarig meisje → waarschijnlijk geïmpacteerde cuspidaat (niet agenesie).'},
{q:'Orthodontische behandeling is voor volwassenen moeilijker omdat er geen groei meer is.',opts:['Onjuist','Juist'],exp:'Zonder groei: skeletale correctie niet meer mogelijk → compromis of orthognathische chirurgie nodig.'},
{q:'Meisje met diepe beet tot het palatum maar niet gemotiveerd voor ortho: de beste aanpak is de patiënt uitleggen en laten nadenken.',opts:['Juist','Onjuist'],exp:'Motivatie is essentieel voor orthodontisch succes. Bespreken en de patiënt laten beslissen is juist.'},
{q:'Extractie van de eerste melkmolaar bij serie-extractie: 6 maanden voor de eruptie van de premolaar.',opts:['Juist','Onjuist'],exp:'Serie-extractie volgorde: melkcuspidaat (bij laterale incisief) → eerste melkmolaar → 6 mnd vóór premolaaruitbraak.'},
{q:'Definitie oligodontie: 6 of meer niet-aangelegde kiezen in de volledige dentitie.',opts:['Onjuist','Juist'],exp:'Oligodontie: ≥6 congénitaal ontbrekende elementen exclusief M3. Niet beperkt tot molaren.'},
{q:'Hoofddoel van de Activator is verandering van de kaken in de sagittale richting.',opts:['Juist','Onjuist'],exp:'Activator: functioneel apparaat, beïnvloedt skeletale groei sagittaal (klasse II-correctie).'},
{q:'Openbeet na orthodontische behandeling (relapse) komt door een tonggewoonte.',opts:['Juist','Onjuist'],exp:'Relapse openbeet na ortho: meest frequente oorzaak is persisterende tongpositie/tongue thrust.'},
{q:'Wanneer wang wordt gebeten: vanwege de onregelmatige positie van de molaren.',opts:['Juist','Onjuist'],exp:'Molaren buiten de neutrale zone (te buccaal) → wang-bijten.'},
{q:'Patiënt heeft ortho-probleem maar mondhygiëne is niet goed. Meteen doorsturen?',opts:['Nee, eerst MH optimaliseren en daarna doorsturen','Ja, meteen doorsturen naar orthodontoloog'],exp:'Orthodontische behandeling vereist goede MH. Niet starten zonder adequate plaquecontrole.'},
]},

// ═══════════════════════════════════════════════
//  2021 – ORALE PATHOLOGIE (THK II December 2021)
// ═══════════════════════════════════════════════
pato_cikmis_2021dec:{title:'Orale Pathologie – Çıkmış 2021 December',questions:[
{q:'Tumor in de sinus maxillaris: kenmerken zijn dubbelzien en tranende ogen.',opts:['Juist','Onjuist'],exp:'Sinus maxillaris tumor met orbitale invasie → diplopie en epifora.'},
{q:'Tongcarcinoom in situ: behandeling is lokale excisie.',opts:['Juist','Onjuist'],exp:'Carcinoom in situ van de tong: lokale excisie met vrije marges is de standaardbehandeling.'},
{q:'Bestraling van het kaakbot kan kaakontsteking veroorzaken.',opts:['Juist','Onjuist'],exp:'Osteoradionecrose: bestraling leidt tot hypovascularisatie → verhoogde infectiegevoeligheid.'},
{q:'Een late radiotherapie bijwerking is osteoradionecrose.',opts:['Juist','Onjuist'],exp:'Vroege bijwerkingen: mucositis, erytheem. Late bijwerkingen: osteoradionecrose, xerostomie.'},
{q:'Mondbranden: het mondslijmvlies ziet er min of meer normaal uit.',opts:['Juist','Onjuist'],exp:'Burning Mouth Syndrome: geen zichtbare laesies, klacht is subjectief brandend gevoel.'},
{q:'Metastasen in het kaakbot worden meest gevonden in de kaakhoek/ondermolaarstreek.',opts:['Juist','Onjuist'],exp:'Kaakmetastasen: meest in de posterieure mandibula (premolaar-molaar, kaakhoek).'},
{q:'Een late radiotherapie bijwerking is erytheem van de huid.',opts:['Onjuist','Juist'],exp:'Erytheem = vroege bijwerking. Late bijwerkingen: fibrose, xerostomie, osteoradionecrose.'},
]},

// ═══════════════════════════════════════════════
//  2021 – TH1 December 2021 (Cariologie + Paro overlap)
// ═══════════════════════════════════════════════
cario_cikmis_2021dec:{title:'Cariologie – Çıkmış 2021 December',questions:[
{q:'Cariës kan worden behandeld met antibiotica.',opts:['Onjuist','Juist'],exp:'Cariës = multifactorieel chemisch/bacterieel destructieproces; antibiotica zijn niet standaard behandeling.'},
{q:'Tandplaque kan beïnvloed worden door de ontsteking, voedsel en het tandoppervlak.',opts:['Juist','Onjuist'],exp:'Plaquesamenstelling en adhesie worden beïnvloed door gastfactoren: speeksel, oppervlak, dieet, ontsteking.'},
{q:'Chloorhexidine spoelmiddel voorkomt opbouw van tandsteen en pellicle.',opts:['Onjuist','Juist'],exp:'CHX remt bacteriële kolonisatie maar heeft geen bewezen effect op tartraatneerslag (tandsteen).'},
{q:'Bij slechte adem/halitosis: mondspoelen van de hele mond of alleen gorgelen in de keel?',opts:['Spoelen van de hele mond','Alleen gorgelen in de keel'],exp:'Halitosis: oorzaak voornamelijk op de tong en in de sulcus. Spoelen van de gehele mond is effectiever.'},
]},

paro_cikmis_2021dec:{title:'Parodontologie – Çıkmış 2021 December',questions:[
{q:'Meisje 16 jaar, botverlies onderfront en veel pijn: juveniele parodontitis of ANUP?',opts:['ANUP (Acute Necrotiserende Ulceratieve Parodontitis)','Juveniele parodontitis'],exp:'ANUP: acute necrose + pijn + botverlies + fetor. Juveniele paro = gelokaliseerde agressieve paro (minder acuut).'},
{q:'Patient met parodontitis: behandeling met CHX 0,12% en H2O2, of alleen H2O2?',opts:['CHX 0,12% en H2O2','Alleen H2O2'],exp:'Bij paro: CHX 0,12% als adjuvans naast mechanische reiniging. H2O2 alleen is minder effectief.'},
{q:'Aanhechtingsverlies wordt vastgesteld door de pocketdiepte in combinatie met de recessie te meten.',opts:['Juist','Onjuist'],exp:'CAL = pocketdiepte + recessie (afstand CEJ tot margo gingivalis).'},
{q:'Parodontitis patiënt antibioticum: voorkeur voor amoxicilline + metronidazol 3x per dag 7 dagen.',opts:['Juist','Onjuist'],exp:'NVvP-protocol: amoxicilline 500mg + metronidazol 500mg 3x/dag gedurende 7 dagen.'},
]},

};
window.QUIZZES = Object.assign(window.QUIZZES || {}, sets);
})();
