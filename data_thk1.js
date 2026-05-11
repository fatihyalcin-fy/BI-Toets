/* THK-1 Proeftentamen – 70 real exam questions from 2025 Juni
   Source: SECIL BI2026 HAZIRAN > THK1 > THK1 2025 Juni.pdf
   opts[0] = correct answer in every question. */
(function () {
  var sets = {

    /* ── CARIOLOGIE – 15 vragen ──────────────────────────── */
    thk1_cario: {
      title: 'THK-1 Cariologie (15 vragen)',
      questions: [
        {
          q: 'Wat betekent Ekstrand-score 4?',
          opts: [
            'Een laesie tot in de pulpa',
            'Een laesie alleen zichtbaar na droogblazen',
            'Een witte vlek zonder cavitatie',
            'Alleen radiologisch zichtbare glazuurlaesie'
          ],
          exp: 'Ekstrand-score 4 = uitgebreide caviteit met blootliggend dentine, of laesie die de pulpa heeft bereikt.'
        },
        {
          q: 'Op een foto ziet u glazuurafbraak op een knobbelpunt met onderliggende donkere doorschemering in dentine. Het oppervlak is dof en ruw. Hoe beoordeelt u deze laesie?',
          opts: [
            'Actief',
            'Inactief',
            'Secundair',
            'Niet-carieus'
          ],
          exp: 'Dof, ruw oppervlak met plaque en doorschemering = actieve laesie. Inactieve laesies zijn glanzend en hard.'
        },
        {
          q: 'Bij witte verkleuringen in het bovenfront denkt u vooral aan:',
          opts: [
            'Fluorose of hypoplasie',
            'Abrasie',
            'Pulpanecrose',
            'Parodontitis'
          ],
          exp: 'Witte vlekken/strepen frontgebit → differentiaal: fluorose (systemisch) of hypoplasie (lokaal/systemisch glazuurstoornis).'
        },
        {
          q: 'Element 43 heeft buccaal een wortelcaviteit die met plaque bedekt is, maar het dentine is glanzend. Wat is de meest aangewezen behandeling?',
          opts: [
            'Glad maken, poetsinstructie en fluoride tandpasta',
            'Prepareren en restaureren',
            'Extractie',
            'Endodontische behandeling'
          ],
          exp: 'Glanzend dentine = inactieve laesie. Glad maken + OHI + fluoride is de conservatieve aanpak; cavitair prepareren is niet nodig.'
        },
        {
          q: 'Element 47 heeft distaal een wortelcaviteit met plaque en leerachtig verkleurd dentine. Wat is de meest aangewezen behandeling?',
          opts: [
            'Glad maken en poetsen met fluoride tandpasta',
            'Onmiddellijk extraheren',
            'Orthodontisch behandelen',
            'Alleen radiografisch vervolgen'
          ],
          exp: 'Leerachtig (zacht) dentine + plaque = actieve wortelcariës. Debridement + fluoride is eerste stap; een cavitaire restauratie volgt alleen als het niet stopt.'
        },
        {
          q: 'Bij een klasse-II-caviteit is de glazuur-dentinegrens schoon, maar er blijft 2 mm ondermijnd glazuur over. Wat doet u?',
          opts: [
            'Het ondermijnde glazuur verwijderen',
            'Direct vullen zonder verdere correctie',
            'Alleen polijsten',
            'De caviteit openlaten'
          ],
          exp: 'Ondermijnd glazuur zonder dentinesteun breekt af na plaatsen restauratie → verwijderen om randintegriteit te waarborgen.'
        },
        {
          q: 'Welke omschrijving past het best bij Ekstrand-score 3?',
          opts: [
            'Laesie zichtbaar zonder droogblazen, met microcavitatie in glazuur',
            'Laesie alleen zichtbaar na droogblazen',
            'Laesie tot in de pulpa',
            'Alleen wortelcariës'
          ],
          exp: 'Ekstrand-score 3 = laesie zichtbaar in vochtige toestand, met microcavitatie of grijze doorschemering vanuit dentine.'
        },
        {
          q: 'U ziet slijtage op de knobbelpunten. Welke diagnose past het best in de differentiaaldiagnose?',
          opts: [
            'Erosie',
            'Apicale parodontitis',
            'Gingivitis',
            'Speekselsteen'
          ],
          exp: 'Vlakke, glanzende knobbelslijtage zonder haakvormige randen → erosie (chemisch). Abrasie geeft ruwer beeld; atritie uitsluitend occlusale contactpunten.'
        },
        {
          q: 'Wanneer bepaalt u idealiter de kleur voor een composietrestauratie?',
          opts: [
            'Aan het begin van de behandeling, na het verwijderen van aanslag',
            'Na het plaatsen van rubberdam',
            'Na het uitharden van het composiet',
            'Een week na de behandeling'
          ],
          exp: 'Kleur bepalen vóór behandeling op een gehydrateerde tand. Rubberdam en etsen maken de tand droger/witter en vertekenen de kleur.'
        },
        {
          q: 'Tijdens de PMO vindt u een approximale cariëslaesie die met plaque bedekt is. Hoe beoordeelt u deze laesie meestal?',
          opts: [
            'Actief',
            'Inactief',
            'Traumatisch',
            'Niet te beoordelen'
          ],
          exp: 'Plaquebedekte approximale laesie = actief. Inactieve laesies zijn glad, glanzend en vrij van plaque.'
        },
        {
          q: 'Welke uitspraak over composiet is het meest juist?',
          opts: [
            'Composiet wordt bij voorkeur in lagen van maximaal ongeveer 2 mm aangebracht',
            'Composiet kan altijd in één laag van 8 mm worden aangebracht',
            'Composiet hoeft niet belicht te worden',
            'Composiet hecht chemisch aan alle tandweefsels'
          ],
          exp: 'Lichtgeleiding in composiet is beperkt; lagen > 2 mm harden onvoldoende uit. Chemische hechting via adhesief, niet direct aan tandweefsels.'
        },
        {
          q: 'Welke omschrijving past het best bij ICDAS 5?',
          opts: [
            'Duidelijke caviteit met zichtbaar dentine, minder dan de helft van het oppervlak',
            'Alleen een witte vlek',
            'Alleen radiologisch zichtbaar',
            'Geen klinische afwijking'
          ],
          exp: 'ICDAS 5 = duidelijke caviteit waarbij minder dan de helft van het oppervlak aangetast is en dentine zichtbaar is. ICDAS 6 = meer dan de helft.'
        },
        {
          q: 'Waaraan hecht resin-modified glasionomeer cement chemisch?',
          opts: [
            'Glazuur en dentine',
            'Alleen glazuur',
            'Alleen dentine',
            'Alleen composiet'
          ],
          exp: 'RMGIC hecht chemisch (polyacrylzuur) aan zowel glazuur als dentine; extra etsen vergroot de mechanische retentie van de harscomponent.'
        },
        {
          q: 'Welk adhesiefsysteem geeft de beste hechting aan glazuur?',
          opts: [
            'Drie-staps etch-and-rinse',
            'Twee-staps self-etch',
            'Alleen primer',
            'Alleen glasionomeer'
          ],
          exp: 'Drie-staps etch-and-rinse (fosforzuur + primer + bond) geeft de hoogste glasuurhechting door maximale micromechanische verankering.'
        },
        {
          q: 'Welke methode is geschikt om approximale cariës bij element 21 te detecteren?',
          opts: [
            'Transilluminatie of bitewing-röntgenfoto',
            'Alleen percussie',
            'Alleen sensibiliteitstest',
            'Alleen pocketmeting'
          ],
          exp: 'FOTI/DIFOTI (transilluminatie) en bitewing-röntgenfoto zijn de standaardmethoden voor approximale cariësdetectie; percussie en vitaaltests geven geen caviteitsinfo.'
        }
      ]
    },

    /* ── ENDODONTIE – 20 vragen ──────────────────────────── */
    thk1_endo: {
      title: 'THK-1 Endodontie (20 vragen)',
      questions: [
        {
          q: 'Welke uitspraak over stiften is het meest juist?',
          opts: [
            'Als er drie resterende dentinewanden zijn, kan een stift overbodig zijn',
            'Metalen stiften hechten altijd beter aan worteldentine',
            'Elke endodontisch behandelde tand heeft een stift nodig',
            'Een stift versterkt altijd de wortel'
          ],
          exp: 'Een stift vervangt verloren coronaal dentine maar verzwakt de wortel niet. Bij voldoende coronale structuur (≥3 wanden) is een stift niet noodzakelijk.'
        },
        {
          q: 'Hoe lang duurt hevige napijn na endodontische behandeling meestal?',
          opts: [
            'Ongeveer 3-5 dagen',
            'Altijd 6 maanden',
            'Altijd 1 jaar',
            'Napijn komt nooit voor'
          ],
          exp: 'Post-endodontische pijn (flare-up) duurt meestal 3-5 dagen en is zelfbeperkend. Langdurige pijn wijst op complicaties.'
        },
        {
          q: 'Waaruit bestaat een apicaal litteken vooral?',
          opts: [
            'Bindweefsel',
            'Botweefsel',
            'Glazuur',
            'Dentine'
          ],
          exp: 'Apicaal littekenweefsel (scar tissue) is fibrotisch bindweefsel; het ontstaat wanneer botregeneratie uitblijft maar de laesie toch geneest.'
        },
        {
          q: 'Wat is een voordeel van langzaam uithardend kanaalcement?',
          opts: [
            'Langere werktijd',
            'Geen irrigatie nodig',
            'Het lost sneller op',
            'Het voorkomt altijd napijn'
          ],
          exp: 'Langzaam uithardend cement geeft meer werktijd voor positie-aanpassingen voor definitieve verharding; sneller uitharden verhoogt breukkans.'
        },
        {
          q: 'Waarom is een K-flex-vijl flexibeler dan een gewone K-vijl?',
          opts: [
            'Door de vorm van de doorsnede',
            'Door de kleurcode',
            'Omdat hij van glas is gemaakt',
            'Omdat hij niet gesteriliseerd wordt'
          ],
          exp: 'K-flex-vijlen hebben een ruitvormige (rhomboïde) doorsnede in plaats van een vierkante, waardoor meer flexibiliteit en betere snijprestaties.'
        },
        {
          q: 'Wat is een nadeel van glasionomeer wortelkanaalcement?',
          opts: [
            'Het is moeilijk te verwijderen',
            'Het is niet radiopaak',
            'Het hecht nooit aan dentine',
            'Het hardt nooit uit'
          ],
          exp: 'GIC-kanaalcement hecht aan dentine maar is na uitharden moeilijk te verwijderen bij retreatment, wat een klinisch nadeel is.'
        },
        {
          q: 'Welke uitspraak over crown-down preparatie is het meest juist?',
          opts: [
            'Crown-down preparatie kan de kans op vijlbreuk verkleinen',
            'Crown-down preparatie maakt irrigatie onmogelijk',
            'Crown-down preparatie wordt alleen bij melkelementen gebruikt',
            'Crown-down preparatie vervangt rubberdam'
          ],
          exp: 'Crown-down verwijdert obstructies coronaal eerst, waardoor kleinere apicale vijlen minder weerstand ondervinden → lagere kans op breuk.'
        },
        {
          q: 'Bij welk elementtype komt een C-vormig kanaal het vaakst voor?',
          opts: [
            'Ondermolaar',
            'Bovenincisief',
            'Bovencuspidaat',
            'Onderincisief'
          ],
          exp: 'C-vormige kanalen komen het vaakst voor in tweede ondermolaren (met name bij Aziatische populaties), ook mogelijk in derde molaren.'
        },
        {
          q: 'Wat is een nadeel van natriumhypochloriet?',
          opts: [
            'De werking is afhankelijk van contacttijd en omstandigheden',
            'Het heeft geen antibacteriële werking',
            'Het lost geen organisch weefsel op',
            'Het is altijd volledig inert'
          ],
          exp: 'NaOCl is effectief maar de weefseldissolutie en antibacteriële werking zijn afhankelijk van concentratie, temperatuur en contacttijd.'
        },
        {
          q: 'Waarom gebruikt u rubberdam bij een wortelkanaalbehandeling?',
          opts: [
            'Voor asepsis en om contaminatie te voorkomen',
            'Om de tandkleur te bepalen',
            'Om de occlusie te verlagen',
            'Om de pocketdiepte te meten'
          ],
          exp: 'Rubberdam isoleert het werkveld, voorkomt speekselcontaminatie en beschermt de luchtweg bij gebruik van vijlen en irriganten.'
        },
        {
          q: 'Een molaar heeft een MOD-restauratie en u voert een endodontische behandeling uit. Waar moet u restauratief vooral aan denken?',
          opts: [
            'Overkappen van de knobbels kan nodig zijn',
            'Er is nooit verdere restauratie nodig',
            'Extractie is altijd geïndiceerd',
            'Alleen polijsten is voldoende'
          ],
          exp: 'MOD + endodontie = veel dentinevolies en verzwakte knobbels. Volledige knobbelbescherming (onlay/kroon) vermindert fraktuurrisico.'
        },
        {
          q: 'Bij welke cuspidaat worden twee kanalen relatief vaker gezien?',
          opts: [
            'Ondercuspidaat',
            'Bovencuspidaat',
            'Bovenmolaar',
            'Melkmolaar'
          ],
          exp: 'Tweede kanaal in ondercuspidaat (hoektand onderkaak) komt in 6-15% voor, vaker dan in bovencuspidaat.'
        },
        {
          q: 'Welke eigenschap hoort bij een ideaal stiftmateriaal?',
          opts: [
            'Retentie en gunstige spanningsverdeling',
            'Maximale wortelverzwakking',
            'Altijd metaalachtig uiterlijk',
            'Geen relatie met restauratie'
          ],
          exp: 'Ideale stift: voldoende retentie, elasticiteitsmodulus vergelijkbaar met dentine (stress-distributie), esthetiek en verwijderbaarheid bij retreatment.'
        },
        {
          q: 'Een avulsie bij een element met gesloten apex: wanneer start u bij voorkeur met wortelkanaalbehandeling?',
          opts: [
            'Binnen 7-14 dagen',
            'Pas na 2 jaar',
            'Alleen als de tand verkleurt na 10 jaar',
            'Nooit'
          ],
          exp: 'Gesloten apex = geen revascularisatie mogelijk → WKB binnen 7-14 dagen na replantatie om resorptie te voorkomen (Andreasen-richtlijn).'
        },
        {
          q: 'Bij een kanaal geprepareerd tot vijl #30: welke taper is gunstiger voor irrigatie?',
          opts: [
            '.06',
            '.00',
            'Negatieve taper',
            'Taper speelt nooit een rol'
          ],
          exp: 'Hogere taper (.06 vs .02) geeft een wijder coronale reservoir voor irrigant, betere vloeistofuitwisseling en reiniging diep in het kanaal.'
        },
        {
          q: 'Welke vorm heeft de endodontische opening van een bovenincisief meestal?',
          opts: [
            'Driehoekig of ovaal',
            'Rond en zeer klein',
            'Alleen distaal',
            'Alleen via de apex'
          ],
          exp: 'Endodontische caviteit (endodontische toegang) bij bovenincisief is palatinaal en heeft een driehoekige/ovale vorm die past bij het pulpakanaalverloop.'
        },
        {
          q: 'Waarin bewaart u een geavulseerd element bij voorkeur?',
          opts: [
            'Melk',
            'Droog gaas',
            'Alcohol',
            'Warm water'
          ],
          exp: 'Melk (pH ~7, osmolaliteit ~280 mOsm) is geschikt bewaarmedium: handhaaft PDL-celviabiliteit. Zoutoplossing of Hanks\' BSS zijn ook OK; droog/alcohol is schadelijk.'
        },
        {
          q: 'Welke test helpt het meest bij differentiatie tussen een endodontische en parodontale laesie?',
          opts: [
            'Sensibiliteitstest',
            'Alleen kleur bepalen',
            'Alleen plaque-index',
            'Alleen pocketmeting'
          ],
          exp: 'Sensibiliteitstest (koude/elektrisch) onderscheidt vitale van non-vitale pulpa → cruciaal voor endo-paro-differentiatie.'
        },
        {
          q: 'Een kind van 8 jaar komt 3 dagen na een gecompliceerde kroonfractuur van element 11. Welke behandeling past het best?',
          opts: [
            'Pulpotomie',
            'Implantaat',
            'Volledige prothese',
            'Alleen tandsteen verwijderen'
          ],
          exp: 'Gecompliceerde kroonfractuur 3 dagen oud bij jong blijvend element → pulpotomie (gedeeltelijke amputatie) om wortelvorming te bewaren. Apexogenese protocol.'
        },
        {
          q: 'Hoe kan een echte apicale cyste definitief worden vastgesteld?',
          opts: [
            'Histologisch onderzoek',
            'Alleen percussie',
            'Alleen kleurmeting',
            'Alleen anamnese'
          ],
          exp: 'Röntgenologisch en klinisch kan men een granuloom van een cyste niet onderscheiden; histologisch onderzoek na apicoectomie is de goudstandaard.'
        }
      ]
    },

    /* ── SPEEKSEL – 10 vragen ────────────────────────────── */
    thk1_speeksel: {
      title: 'THK-1 Speeksel & Halitose (10 vragen)',
      questions: [
        {
          q: 'Wat betekent xerostomie?',
          opts: [
            'Het subjectieve gevoel van een droge mond',
            'Een verhoogde glazuurvorming',
            'Gingivale recessie',
            'Een wortelfractuur'
          ],
          exp: 'Xerostomie = subjectief droge-mondsensatie; hyposialie = objectief verlaagde speekselproductie. Beide kunnen tegelijk optreden maar hoeven niet samen te gaan.'
        },
        {
          q: 'Een gezonde vrouw met goede mondhygiëne heeft halitose. Wat is een waarschijnlijke oorzaak?',
          opts: [
            'Anaerobe bacteriën op de dorsale tong',
            'Fluorose',
            'Een teveel aan glazuur',
            'Orthodontische retentie'
          ],
          exp: 'Intra-orale halitose ontstaat voor ~80-90% door vluchtige zwavelverbindingen (VSC) geproduceerd door anaerobe bacteriën op de tongrug.'
        },
        {
          q: 'Wat is een mogelijke bijwerking van chloorhexidine?',
          opts: [
            'Zwelling van de glandula parotis of verandering van speeksel',
            'Wortelverlenging',
            'Vorming van nieuw glazuur',
            'Revascularisatie van pulpa'
          ],
          exp: 'CHX bijwerkingen: tand- en tongverkleuring, smaakverandering, en soms parotiszwelling/speekselverandering bij langdurig gebruik.'
        },
        {
          q: 'Hoe verandert de bijdrage van de parotis aan speekselproductie?',
          opts: [
            'Slaap < rust < kauwen/gestimuleerd',
            'Kauwen < slaap < rust',
            'Slaap is altijd het hoogst',
            'De bijdrage verandert nooit'
          ],
          exp: 'Parotis produceert weinig in rust/slaap (submandibulair domineert), maar bij kauwen stijgt parotisbijdrage sterk tot ~45-50% van totaal speeksel.'
        },
        {
          q: 'In welke speekselklier komt een speekselsteen het vaakst voor?',
          opts: [
            'Glandula submandibularis',
            'Glandula parotis',
            'Glandula sublingualis',
            'Kleine speekselklieren'
          ],
          exp: 'Speekselstenen (sialolithiasis) in 80-90% in ductus van glandula submandibularis (Wharton\'s gang) vanwege langere ductus en slijmeriger, calciumrijker speeksel.'
        },
        {
          q: 'Medicatiegebruik kan leiden tot:',
          opts: [
            'Hyposialie',
            'Altijd hypersalivatie',
            'Glazuuraplasie',
            'Wortelgroei'
          ],
          exp: 'Anticholinergica, antidepressiva, antihypertensiva en diuretica zijn veelvoorkomende oorzaken van medicatiegerelateerde hyposialie (>400 geneesmiddelen beschreven).'
        },
        {
          q: 'Welke uitspraak over gestimuleerd speeksel is het meest juist?',
          opts: [
            'Het heeft doorgaans een hogere pH en buffercapaciteit',
            'Het heeft altijd een lagere pH en lagere buffercapaciteit',
            'Het bevat nooit bicarbonaat',
            'Het wordt niet geproduceerd'
          ],
          exp: 'Gestimuleerd speeksel bevat meer bicarbonaat → hogere pH (7,4–7,8) en betere buffercapaciteit dan rustspeeksel (pH ~6,8). Beschermend voor glazuur.'
        },
        {
          q: 'Halitose wordt mede veroorzaakt door producten uit de afbraak van:',
          opts: [
            'Zwavelhoudende aminozuren',
            'Alleen glucose',
            'Alleen calcium',
            'Alleen fluoride'
          ],
          exp: 'VSC zoals H₂S en CH₃SH ontstaan uit bacteriële proteolyse van zwavelhoudende aminozuren (methionine, cysteine) in eiwitresten, epitheel en bloed.'
        },
        {
          q: 'Welke uitspraak over chloorhexidine is juist?',
          opts: [
            'Chloorhexidine heeft een antibacteriële werking',
            'Chloorhexidine is alleen analgetisch',
            'Chloorhexidine is alleen anesthetisch',
            'Chloorhexidine werkt niet tegen bacteriën'
          ],
          exp: 'CHX is een breed-spectrum antibacteriëel middel (bacteriëel en bacteriostatisch afhankelijk van concentratie) via membraandisruptie. Geen analgetische of anesthetische eigenschappen.'
        },
        {
          q: 'Kan stress bijdragen aan intra-orale halitose?',
          opts: [
            'Ja',
            'Nee, nooit',
            'Alleen bij kinderen',
            'Alleen radiologisch'
          ],
          exp: 'Stress → sympathisch zenuwstelsel actief → verminderde speekselproductie → drogere mond → meer VSC-productie → halitose.'
        }
      ]
    },

    /* ── KINDERTANDHEELKUNDE – 10 vragen ─────────────────── */
    thk1_pedo: {
      title: 'THK-1 Kindertandheelkunde (10 vragen)',
      questions: [
        {
          q: 'Een kind van 11 jaar is ernstig angstig voor de tandarts. Wat kan een oorzaak zijn?',
          opts: [
            'Een eerdere negatieve ervaring',
            'Alleen tandkleur',
            'Altijd een syndroom',
            'Alleen de aanwezigheid van melkelementen'
          ],
          exp: 'Tandartsangst bij kinderen is multifactorieel: eerdere pijnervaring, conditionering door ouders/media, temperament. Eerdere negatieve ervaring is de sterkste risicofactor.'
        },
        {
          q: 'Wat is een voorbeeld van copinggedrag?',
          opts: [
            'Huilen of zich ziek melden',
            'Glazuurremineralisatie',
            'Pulpaobliteratie',
            'Cementvorming'
          ],
          exp: 'Copinggedrag = gedragsreacties op stressoren. Huilen, vermijden, zich ziek melden zijn coping-reacties bij angst; de overige opties zijn biologische processen.'
        },
        {
          q: 'Wat betekent conditionering?',
          opts: [
            'Het aanleren van gewenst gedrag',
            'Een tand extraheren',
            'Een kanaal prepareren',
            'Een röntgenfoto beoordelen'
          ],
          exp: 'Gedragsconditionering (Tell-Show-Do, desensibilisatie) = gewenst gedrag aanleren via positieve bekrachtiging en stapsgewijze blootstelling.'
        },
        {
          q: 'Welke uitspraak over het eerste tandartsbezoek is het meest juist?',
          opts: [
            'Een bezoek na eruptie van het eerste melkelement kan bijdragen aan betere mondhygiëne',
            'Het eerste bezoek is pas nodig op 12-jarige leeftijd',
            'Het eerste bezoek is alleen voor orthodontie',
            'Vroeg bezoek verhoogt altijd het cariësrisico'
          ],
          exp: 'NVVP en ADA aanbeveling: eerste bezoek rond 1 jaar (zodra eerste melktand doorkomt) voor preventie, OHI aan ouders en cariësrisicoassessment.'
        },
        {
          q: 'Een kind van 7 jaar kan zelf poetsen. Wie blijft verantwoordelijk?',
          opts: [
            'De ouders/verzorgers blijven verantwoordelijk en moeten ondersteunen',
            'Het kind is volledig zelfstandig verantwoordelijk',
            'Poetsen moet worden vermeden',
            'Alleen de tandarts poetst'
          ],
          exp: 'Tot ca. 10-12 jaar ontbreekt de fijne motoriek voor effectief poetsen. Ouders dienen te superpondersen en zo nodig na te poetsen, met name de achterste elementen.'
        },
        {
          q: 'Welke omschrijving past bij een angststoornis?',
          opts: [
            'Excessieve angst voor een situatie met vermijding en mogelijke sociale problemen',
            'Alleen donkere tandkleur',
            'Alleen tijdelijk lachen',
            'Alleen cariësactiviteit'
          ],
          exp: 'DSM-5 angststoornis = excessive, aanhoudende angst met vermijdingsgedrag dat functioneren/socialiseren belemmert. Tandartsfobie valt onder specifieke fobie.'
        },
        {
          q: 'Hoe vaak per jaar wordt zilverdiaminefluoride in deze context genoemd?',
          opts: [
            'Twee keer per jaar',
            'Tien keer per dag',
            'Eenmalig levenslang',
            'Nooit'
          ],
          exp: 'SDF (silver diamine fluoride) wordt doorgaans 2× per jaar aangebracht voor cariësstop in melkgebit of bij risicopatiënten; minimaal invasieve aanpak.'
        },
        {
          q: 'Welke uitspraak over pijnervaring is juist?',
          opts: [
            'Pijnervaring is subjectief en verschilt per persoon',
            'Pijn is bij iedereen hetzelfde',
            'Pijn is alleen radiologisch meetbaar',
            'Kinderen voelen geen pijn'
          ],
          exp: 'Pijn is een biopsychosociaal fenomeen (IASP). Kinderen voelen pijn, maar uitingsvorm verschilt per leeftijd en temperament. Subjectief = moeilijk objectiveerbaar.'
        },
        {
          q: 'Waar ziet u bij een kind van ongeveer 12 jaar vaak cariës?',
          opts: [
            'In pits en fissuren',
            'Alleen apicaal',
            'Alleen in de pulpakamer',
            'Alleen in alveolair bot'
          ],
          exp: 'Bij adolescenten is de eerste/tweede blijvende molaar het meest cariësgevoelig vanwege diepe fissuren; pits-en-fissuurcariës is de meest voorkomende locatie.'
        },
        {
          q: 'Een kind heeft meerdere approximale cariëslaesies en ouders kunnen de mondhygiëne onvoldoende uitvoeren. Wat kan een passende optie zijn?',
          opts: [
            'Hall-kroon of verwijzing naar pedodontoloog overwegen',
            'Niets doen',
            'Alle elementen extraheren',
            'Alleen kleur bepalen'
          ],
          exp: 'Hall-techniek (stainless steel kroon over carieus melkelement zonder preparatie) is evidence-based bij hoog-risico kinderen; bij complexe situaties verwijzing pedodontoloog.'
        }
      ]
    },

    /* ── PARODONTOLOGIE – 15 vragen ──────────────────────── */
    thk1_paro: {
      title: 'THK-1 Parodontologie (15 vragen)',
      questions: [
        {
          q: 'Wat betekent een pocketdiepte van meer dan 6 mm binnen PPS?',
          opts: [
            'Een hogere risicocategorie en noodzaak tot verdere beoordeling',
            'Een gezonde sulcus',
            'Alleen een esthetisch probleem',
            'Een cariësclassificatie'
          ],
          exp: 'PPS (Periodontaal Patiënt Scherm / BSP stage & grade): PD > 6 mm wijst op gevorderde parodontitis (Stage III/IV) en vereist specialistische beoordeling.'
        },
        {
          q: 'Wanneer kan antibiotica bij parodontale behandeling worden overwogen?',
          opts: [
            'Bij goede mondhygiëne maar onvoldoende respons van pockets',
            'Bij elke gingivitis',
            'Alleen bij bleken',
            'Nooit'
          ],
          exp: 'Systemische antibiotica (amoxicilline + metronidazol) worden overwogen als adjuvans bij parodontitis die onvoldoende reageert op mechanische behandeling, mits mondhygiëne acceptabel is.'
        },
        {
          q: 'Als u tijdens de initiële parodontale behandeling antibiotica geeft, welk spoelmiddel kan worden overwogen?',
          opts: [
            'Chloorhexidine en/of waterstofperoxide volgens protocol',
            'Suikerdrank',
            'Alcohol',
            'Olie'
          ],
          exp: 'CHX 0,12-0,2% spoelmiddel als adjuvans vermindert bacteriële herkolonisatie. Waterstofperoxide (H₂O₂) wordt soms gebruikt bij ANUG-behandeling.'
        },
        {
          q: 'Welke aanpak is effectiever bij halitosebehandeling?',
          opts: [
            'Tongschraper gecombineerd met mondspoelmiddel',
            'Alleen parfum',
            'Alleen orthodontie',
            'Alleen implantologie'
          ],
          exp: 'Mechanische tongschraping + antibacteriëel mondspoelmiddel (CHX, cetylpyridinium) is evidence-based meest effectief voor intra-orale halitose reductie.'
        },
        {
          q: 'Bij een plaque-score van 20% hoeft tijdens initiële behandeling geen mondhygiëne-instructie plaats te vinden. Deze uitspraak is:',
          opts: [
            'Onjuist',
            'Juist',
            'Alleen juist bij kinderen',
            'Alleen juist bij radiologie'
          ],
          exp: 'OHI is een kernonderdeel van elke parodontale behandeling, ook als plaquescore laag is. Motivatie en instructie zijn altijd onderdeel van de initiële fase.'
        },
        {
          q: 'Een 16-jarig meisje heeft veel pijn, vieze smaak en geur, recessies en losse ondertanden. Welke diagnose past hierbij?',
          opts: [
            'ANUG/ANUP',
            'Fluorose',
            'Erosie',
            'Bruxisme'
          ],
          exp: 'ANUG (Acute Necrotizing Ulcerative Gingivitis) kenmerkt zich door pijn, bloeding, geur, necrotische papillen en ulcera; bij pocketvorming → ANUP. Typisch bij adolescenten.'
        },
        {
          q: 'Welke bijwerking kan bij chloorhexidine voorkomen?',
          opts: [
            'Zwelling van de parotis',
            'Wortelverlenging',
            'Glazuurvorming',
            'Cystevorming'
          ],
          exp: 'Chloorhexidine kan naast verkleuring en smaakverandering ook parotiszwelling veroorzaken, met name bij langdurig gebruik van hoge concentraties.'
        },
        {
          q: 'Een pocket van 10 mm wordt na initiële behandeling 6 mm. Hoe beoordeelt u dit?',
          opts: [
            'Er blijft een restpocket die verdere aandacht kan vragen',
            'Dit is altijd volledig voldoende',
            'Dit is een endodontisch succes',
            'Dit bewijst cariësinactiviteit'
          ],
          exp: 'Restpocket ≥6 mm na actieve behandeling is een indicator voor chirurgische behandeling of intensivering van onderhoud; niet als volledig succes te beschouwen.'
        },
        {
          q: 'Bij welke pocket verwacht u relatief meer aanhechtingswinst?',
          opts: [
            'Bij een diepere pocket',
            'Bij een gezonde sulcus van 1 mm',
            'Alleen bij glazuurlaesies',
            'Bij geen enkele pocket'
          ],
          exp: 'Diepere pockets (>6 mm) laten meer aanhechingswinst zien na SRP dan ondiepe pockets; bij pockets < 3 mm kan behandeling zelfs leiden tot klein aanhechingsverlies.'
        },
        {
          q: 'Wat kan bij rokers verminderd zichtbaar zijn?',
          opts: [
            'Bloeding',
            'Wortellengte',
            'Glazuurdikte',
            'Pulpa-inhoud'
          ],
          exp: 'Nicotine induceert vasoconstrictie → verminderde bloeding bij pocketmeting bij rokers. Dit kan de klinische ernst maskeren (lagere BOP ondanks actieve parodontitis).'
        },
        {
          q: 'Vanaf welke leeftijd wordt PPS in deze context genoemd?',
          opts: [
            'Vanaf 18 jaar',
            'Vanaf 3 jaar',
            'Alleen vanaf 65 jaar',
            'Leeftijd speelt geen rol'
          ],
          exp: 'PPS (Periodontaal Patiënt Screeen / BPE-achtige screening) wordt in de Nederlandse praktijk standaard toegepast vanaf 18 jaar bij nieuwe patiënten.'
        },
        {
          q: 'Bij welke elementen werd genoemd dat er geen wortelgroef is?',
          opts: [
            '45 en 24',
            '11 en 21',
            '16 en 26',
            '36 en 46'
          ],
          exp: 'Element 45 (tweede premolaar onderkaak) en 24 (eerste premolaar bovenkaak) worden in de literatuur genoemd als elementen zonder of met minimale wortelgroef.'
        },
        {
          q: 'Wat is een veelvoorkomend probleem na een tunneloperatie bij graad-3-furcaties?',
          opts: [
            'Cariës in het furcatiegebied',
            'Spontaan witter worden',
            'Pulpaexpansie',
            'Verdikking van glazuur'
          ],
          exp: 'Na tunneloplossing (graad III furcatie) zijn worteloppervlakken blootgesteld en moeilijk reinigbaar → verhoogd cariësrisico in furcatiegebied.'
        },
        {
          q: 'Tussen welke punten meet u een pocket?',
          opts: [
            'Gingivarand tot het diepste punt van het pocketepitheel',
            'Glazuurkleur tot speeksel-pH',
            'Pulpa tot incisale rand',
            'Kroonlengte tot tandkleur'
          ],
          exp: 'Pocketdiepte = afstand van gingivarand tot het diepste punt van de pocketbodem (sulcus/pocketepitheel), gemeten met pocketmeter.'
        },
        {
          q: 'Een roker heeft verhoogd risico op cariës, parodontitis en droge mond. Welke verklaring past hierbij?',
          opts: [
            'Minder speeksel en verandering van microbiële balans',
            'Meer glazuurproductie',
            'Grotere pulpakamer',
            'Kortere wortels'
          ],
          exp: 'Roken vermindert speekselflow en -samenstelling, verstoort de orale microbiota richting parodontaalpathogenen, en heeft directe cytotoxische effecten op parodontaal weefsel.'
        }
      ]
    }

  }; // end sets

  window.QUIZZES = Object.assign(window.QUIZZES || {}, sets);
})();
