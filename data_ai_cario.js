(function () {
  var sets = {

    cario_ai_1: {
      title: 'Cariologie – Set 1: Diagnose & ICDAS',
      questions: [
        {
          q: 'Welk ICDAS-score duidt op initiële emailcariës zonder zichtbaar verlies van tandsubstantie?',
          opts: ['ICDAS 1', 'ICDAS 3', 'ICDAS 5', 'ICDAS 0'],
          exp: 'ICDAS 1 = eerste visuele verandering in email na luchttroging; geen caviteit. ICDAS 0 = gezond.'
        },
        {
          q: 'Een patiënt heeft een witte vlek op het gladde vlak van element 46 die na drogen zichtbaar blijft. Welke ICDAS-score past het best?',
          opts: ['ICDAS 2', 'ICDAS 1', 'ICDAS 4', 'ICDAS 6'],
          exp: 'ICDAS 2 = duidelijke witte/bruine verkleuring die nat ook zichtbaar is. ICDAS 1 vereist luchttroging.'
        },
        {
          q: 'Wat is het primaire doel van ICDAS (International Caries Detection and Assessment System)?',
          opts: ['Gestandaardiseerde visuele detectie en monitoring van cariëslaesies', 'Bepalen van de behandelnoodzaak op röntgenfoto', 'Meten van de speekselbufferingskapaciteit', 'Classificeren van pulpapathologie'],
          exp: 'ICDAS unificeert de visuele detectie van cariës op schaal 0-6, voor zowel klinisch als epidemiologisch gebruik.'
        },
        {
          q: 'Welke factor verhoogt het risico op wortelcariës het meest?',
          opts: ['Gingivale recessie met blootgestelde cementum', 'Diepe fissuren', 'Hoge fluoride-inname', 'Orthodontische behandeling'],
          exp: 'Blootgesteld cementum demineraliseert al bij pH 6,7 (vs. email pH 5,5), waardoor recessie het grootste risico vormt.'
        },
        {
          q: 'Bitewingfoto\'s zijn het meest geschikt voor het detecteren van:',
          opts: ['Approximale cariës in email en dentine', 'Periapicale pathologie', 'Wortelcariës', 'Cariës op de occlusale vlakken'],
          exp: 'Bitewings tonen het approximale contactpunt; ze zijn geïndiceerd voor interproximale cariësdetectie.'
        },
        {
          q: 'Welke kleur geeft een actieve cariëslaesie op het gladde vlak aan?',
          opts: ['Wit/crème, mat, ruw oppervlak', 'Donkerbruin, hard, glanzend', 'Geel, glad, glanzend', 'Zwart, hard, gepolijst'],
          exp: 'Actieve laesies zijn wit/crème en mat door verhoogde porositeit. Inactieve laesies zijn donkerbruin en hard.'
        },
        {
          q: 'Wat verstaan we onder "arrested caries" (gestopte cariës)?',
          opts: ['Een laesie die niet meer voortschrijdt maar zichtbaar blijft', 'Een laesie volledig hersteld door remineralisatie', 'Een caviteit gevuld met secundair dentine', 'Een laesie die chirurgisch verwijderd is'],
          exp: 'Arrested caries = inactieve laesie: progressie gestopt, laesie blijft zichtbaar maar is donker, hard, gepolijst.'
        },
        {
          q: 'Welke methode combineert fluorescentiemeting voor vroege cariësdetectie?',
          opts: ['DIAGNOdent', 'CBCT', 'Bitewing', 'DPSI'],
          exp: 'DIAGNOdent gebruikt laser-geïnduceerde fluorescensie om gedemineraliseerd tandweefsel te detecteren.'
        },
        {
          q: 'Bij welk initieel cariësstadium is remineralisatietherapie het meest effectief?',
          opts: ['ICDAS 1-2 (email, geen caviteit)', 'ICDAS 4 (dentin betrokken, geen caviteit)', 'ICDAS 5 (duidelijke caviteit in dentine)', 'ICDAS 6 (uitgebreide caviteit)'],
          exp: 'Bij ICDAS 1-2 is het email nog intact; fluoride en remineraliserende middelen kunnen de laesie stoppen of omkeren.'
        },
        {
          q: 'Welke ICDAS-score beschrijft een diepe dentineschaduw zichtbaar door intact email?',
          opts: ['ICDAS 4', 'ICDAS 2', 'ICDAS 5', 'ICDAS 6'],
          exp: 'ICDAS 4 = donkere dentineschaduw door intact email, wijst op cariës in buitenste dentine zonder cavitatie.'
        }
      ]
    },

    cario_ai_2: {
      title: 'Cariologie – Set 2: Pathogenese',
      questions: [
        {
          q: 'Welke bacterie is de primaire verwekker van cariës en speelt de grootste rol in biofilmvorming?',
          opts: ['Streptococcus mutans', 'Lactobacillus acidophilus', 'Porphyromonas gingivalis', 'Actinomyces viscosus'],
          exp: 'S. mutans: hecht aan tandoppervlak via sucroseafhankelijk glucaan, produceert zuur en overleeft lage pH.'
        },
        {
          q: 'Welk suiker heeft de hoogste cariogene potentie?',
          opts: ['Sucrose', 'Fructose', 'Sorbitol', 'Xylitol'],
          exp: 'Sucrose is het meest cariogeen: S. mutans gebruikt het voor biofilmvorming én voor zuurbereiding.'
        },
        {
          q: 'De "stephan-curve" toont:',
          opts: ['pH-daling in plaque na suikerinname, gevolgd door geleidelijk herstel', 'Verhoging van speekselvloed na eten', 'Bufferingsreactie van speeksel over tijd', 'Remineralisatiesnelheid van email'],
          exp: 'Stephan-curve: direct pH-daling (<5,5 = kritiek) na suikerinname, herstel door speeksel in 20-40 minuten.'
        },
        {
          q: 'Welke rol speelt speeksel bij cariësbescherming?',
          opts: ['Bufferingskapaciteit, remineralisatie via Ca²⁺/F⁻, antimicrobiële eiwitten', 'Mechanische reiniging alleen', 'Remineralisatie via vitamine D', 'Bactericide werking via amylase'],
          exp: 'Speeksel neutraliseert zuur (bicarbonaat), levert Ca²⁺ en fosfaat voor remineralisatie, bevat lysozyme/IgA.'
        },
        {
          q: 'Welke pH-grens is kritiek voor demineralisatie van email?',
          opts: ['5,5', '6,0', '4,5', '7,0'],
          exp: 'Kritische pH voor email = 5,5; cementum demineraliseert al bij pH 6,7 — wortelcariës treedt eerder op.'
        },
        {
          q: 'Lactobacillen spelen in het cariësproces voornamelijk een rol als:',
          opts: ['Progressiebevorderaars in reeds gedemineraliseerd dentine', 'Initiatiefnemers van biofilm op intakke email', 'Producenten van glucanen voor hechting', 'Remineralisatiebevorderaars'],
          exp: 'Lactobacillen gedijen in een al zure omgeving; ze zijn secondair bij progressie in dentine, niet bij initiatie.'
        },
        {
          q: 'Wat is het effect van fluoride op het cariësproces?',
          opts: ['Remt demineralisatie en bevordert remineralisatie door fluorapatietvorming', 'Doodt S. mutans direct', 'Verhoogt speekselproductie', 'Blokkeert suikeropname door bacteriën volledig'],
          exp: 'Fluoride incorporeert in email als fluorapatiet (zuurresistenter), remt enolase in bacteriën, versnelt remineralisatie.'
        },
        {
          q: 'Welk mechanisme verklaart de beschermende werking van xylitol?',
          opts: ['Niet-fermenteerbaar door S. mutans; vermindert biofilmvorming en zuurproductie', 'Verhoogt pH van speeksel direct', 'Bevat fluoride', 'Stimuleert immuunrespons'],
          exp: 'Xylitol wordt opgenomen door S. mutans maar niet gefermenteerd; dit verstoort de metabolisme en reduceert virulentie.'
        },
        {
          q: 'Welk begrip beschrijft de dynamische balans tussen de- en remineralisatie?',
          opts: ['Cariësbalans (caries balance)', 'Stephan-evenwicht', 'pH-homeostase', 'Biofilmtransitie'],
          exp: 'Cariësbalans: wanneer beschermende factoren (speeksel, fluoride) > uitlokkende factoren (bacteriën, suiker) → remineralisatie overheerst.'
        },
        {
          q: 'Welke bacterie speelt een specifieke rol bij wortelcariës naast S. mutans?',
          opts: ['Actinomyces viscosus', 'Treponema denticola', 'Fusobacterium nucleatum', 'Candida albicans'],
          exp: 'Actinomyces spp. koloniseren cementum en zijn belangrijk bij wortelcariës; ze gedijen in een minder zure omgeving.'
        }
      ]
    },

    cario_ai_3: {
      title: 'Cariologie – Set 3: Behandeling & Preventie',
      questions: [
        {
          q: 'Welke concentratie fluoride tandpasta wordt aanbevolen voor volwassenen met een normaal cariësrisico?',
          opts: ['1000–1500 ppm', '250 ppm', '5000 ppm', '0 ppm (fluoridevrij)'],
          exp: 'Voor volwassenen: 1000-1500 ppm fluoride dagelijks. Hoog-risico patiënten: 5000 ppm op recept.'
        },
        {
          q: 'Wanneer is sealants (fissuurlak) geïndiceerd?',
          opts: ['Diepe fissuren op molaren bij kinderen met verhoogd cariësrisico', 'Alle gladde vlakken', 'Alleen wanneer cariës al aanwezig is', 'Uitsluitend op melktanden'],
          exp: 'Sealants: preventief voor diepe, retentieve fissuren op nieuwe permanente molaren bij hoog-risico patiënten.'
        },
        {
          q: 'Wat is het doel van "selective caries removal" (selectieve cariësverwijdering)?',
          opts: ['Soft geïnfecteerd dentine achterlaten nabij pulpa om directe pulpablootstelling te vermijden', 'Alle zachte cariës volledig verwijderen', 'Alleen hard dentine verwijderen', 'Gebruik van air abrasion'],
          exp: 'Selectieve verwijdering: verwijder randdentine volledig, laat zacht dentine over pulpa; seal met indirect pulpakap.'
        },
        {
          q: 'Welk materiaal wordt gebruikt voor atraumatische restauratieve therapie (ART)?',
          opts: ['Glasionomeercement (GIC)', 'Composiet', 'Amalgaam', 'Porselein'],
          exp: 'ART = handexcavatie + GIC. GIC bevat fluoride, hecht chemisch, geen elektriciteit nodig — ideaal voor beperkte settings.'
        },
        {
          q: 'Een patiënt heeft ICDAS 3-laesies op approximale vlakken zonder cavitatie. Welke aanpak is het meest evidence-based?',
          opts: ['Non-operatief: dieetadvies, fluoride, monitoring elke 6-12 maanden', 'Direct restaureren met composiet', 'Extractie van de tand', 'Endodontische behandeling'],
          exp: 'ICDAS 3 (email/buitenste dentine, geen caviteit) = non-operatief behandelen: remineralisatie is nog mogelijk.'
        },
        {
          q: 'Wat is de primaire indicatie voor applicatie van professionele fluoridelak (bijv. 22.600 ppm)?',
          opts: ['Hoog-risico patiënten en kinderen ≥6 maanden interval', 'Dagelijks thuisgebruik', 'Na elke maaltijd', 'Uitsluitend bij afwezige speekselklieren'],
          exp: 'Fluoridelak 22.600 ppm (Duraphat): professionele applicatie 2-4×/jaar voor hoog-risico patiënten, kinderen en xerostomie.'
        },
        {
          q: 'Welke factor heeft de grootste invloed op cariësrisicobeoordeling?',
          opts: ['Frequentie van suikerinname', 'Leeftijd van de patiënt', 'Geslacht', 'Gebitssanitatie'],
          exp: 'Frequente suikerinname houdt de plaque-pH chronisch laag → meest beïnvloedbare risicofactor voor cariës.'
        },
        {
          q: 'Wanneer is een indirect pulpakap geïndiceerd?',
          opts: ['Diepe laesie nabij pulpa, vitale tand, geen symptomen van irreversibele pulpitis', 'Alle gevallen van dentinecariës', 'Alleen bij kinderen', 'Na pulpabloedstelling'],
          exp: 'Indirect pulpakap: diepe laesie, vitale pulpa, geen spontane pijn → seal met GIC/calciumhydroxide, monitor.'
        },
        {
          q: 'Casein phosphopeptide-amorphous calcium phosphate (CPP-ACP) werkt via:',
          opts: ['Levering van biologisch beschikbaar Ca²⁺ en fosfaat voor remineralisatie', 'Directe bactericide werking', 'Verlaging van speeksel-pH', 'Blokkering van suikerreceptoren'],
          exp: 'CPP-ACP (GC Tooth Mousse): stabiliseert ACP in mond, levert Ca²⁺/fosfaat bij lage pH voor remineralisatie.'
        },
        {
          q: 'Welk röntgenologisch teken wijst op cariës die het dentine heeft bereikt op een bitewing?',
          opts: ['Radiolucente zone voorbij de enamel-dentine grens', 'Lichte radiopaciteit op het approximale vlak', 'Verlies van de lamina dura', 'Verbreding van het periodontale ligament'],
          exp: 'Approximale dentinecariës op bitewing: radiolucente driehoek waarvan de basis de DEJ overschrijdt.'
        }
      ]
    },

    cario_ai_4: {
      title: 'Cariologie – Set 4: Speciale Groepen',
      questions: [
        {
          q: 'Een zuigeling krijgt elke nacht een fles melk of sap mee naar bed. Welke aandoening is het meest waarschijnlijk?',
          opts: ['Zuigelingencariës (Early Childhood Caries, ECC)', 'Fluorose', 'Amelogenesis imperfecta', 'Dentinogenesis imperfecta'],
          exp: "ECC (zuigflessencariës): langdurig contact met fermenteerbare koolhydraten 's nachts → typisch patroon op buccale vlakken en incisieven."
        },
        {
          q: 'Bij welke systeemaandoening is het risico op cariës sterk verhoogd door verminderde speekselproductie?',
          opts: ['Syndroom van Sjögren', 'Diabetes type 1 (zonder xerostomie)', 'Hypothyreoïdie', 'Coeliakie'],
          exp: 'Sjögren-syndroom veroorzaakt xerostomie door autoimmune vernietiging van speekselklieren → hoog cariësrisico.'
        },
        {
          q: 'Welk geneesmiddel veroorzaakt het vaakst xerostomie als bijwerking?',
          opts: ['Anticholinergica (bijv. amitriptyline)', 'ACE-remmers', 'Bèta-blokkers', 'Statines'],
          exp: 'Anticholinergica (antidepressiva, antipsychotica, antihistaminica) blokkeren M3-receptoren in speekselklieren → droge mond.'
        },
        {
          q: 'Kinderen met Down-syndroom hebben een relatief lager cariësrisico door:',
          opts: ['Verhoogde speekselvloed en verhoogde salivaire IgA', 'Afwezigheid van S. mutans', 'Hogere fluoride-inname', 'Snellere doorbraak van tanden'],
          exp: 'Studies tonen dat kinderen met Down-syndroom vaak meer speeksel en hogere IgA hebben, wat cariës deels beschermt.'
        },
        {
          q: 'Een patiënt die bestraald is in het hoofd-halsgebied ontwikkelt ernstige "stralencariës". Welke locatie is typisch?',
          opts: ['Cervicale gebieden en incisaalkanten rondom de gehele dentitie', 'Alleen molaren', 'Uitsluitend occlusale vlakken', 'Approximale vlakken van premolaren'],
          exp: 'Stralencariës: xerostomie + verminderd herstel → cervicale, rondomloopse cariës, typisch na radiatie van speekselklieren.'
        },
        {
          q: 'Welke maatregel is het meest effectief ter preventie van stralencariës bij hoofd-halsbestraling?',
          opts: ['Dagelijkse applicatie van 1% NaF gel in fluoridetrays', 'Wekelijkse mondspoeling met 0,05% NaF', 'Hoge suikerbeperking alleen', 'Antibioticaprofylaxe'],
          exp: 'Fluoridetrays met 1% NaF dagelijks = standaard preventieprotocol voor bestralingsbehandelde patiënten.'
        },
        {
          q: 'Welk aspect van diabetes verhoogt het cariësrisico?',
          opts: ['Hoge glucose in speeksel en verminderde immuunfunctie', 'Verhoogde insulineproductie', 'Verminderd calciummetabolisme', 'Lage salivaire pH'],
          exp: 'Bij slecht gereguleerde diabetes: hoog glucose in speeksel = substraat voor cariogene bacteriën + verminderd bactericide vermogen.'
        },
        {
          q: 'Wat is het aanbevolen cariëspreventieprotocol voor patiënten met bulimia nervosa?',
          opts: ['Gebruik van fluoride, geen directe tandpoetsen na braken, gebruik van neutraliserende mondspoeling', 'Directe intensieve poetsen na elke braakbui', 'Extractie van aangetaste tanden', 'Uitsluitend dieetadvies'],
          exp: 'Na braken: 30 minuten wachten met poetsen (zuur verzacht email). Natriumbicarbonaat-spoeling neutraliseert maagzuur.'
        },
        {
          q: 'Welk kenmerk onderscheidt erosie door maagzuur van cariës?',
          opts: ['Erosie is een chemische (niet-bacteriële) aantasting, verspreid over occlusale vlakken en palatinale zijde', 'Erosie start altijd approximaal', 'Erosie veroorzaakt witte vlekken net als initiële cariës', 'Erosie treft uitsluitend cementum'],
          exp: 'Erosie: palatinale slijting boven- en occlusale vlakken ondertanden, geen bacteriebetrokkenheid, gladde concave defecten.'
        },
        {
          q: 'Bij welke frequentie van suikerinname is de kans op cariës het grootst?',
          opts: ['Meerdere malen per dag (>4-5×)', 'Eénmaal per dag grote hoeveelheid', 'Driemaal daags tijdens maaltijden', 'Suikerinname tijdens sporten'],
          exp: 'Frequentie > hoeveelheid: elke inname verlaagt pH voor 20-40 minuten. Meer dan 4-5× daags houdt plaque chronisch zuur.'
        }
      ]
    },

    cario_ai_5: {
      title: 'Cariologie – Set 5: Restauratiematerialen',
      questions: [
        {
          q: 'Wat is het voordeel van composiet ten opzichte van amalgaam voor posterieure restauraties?',
          opts: ['Esthetisch, geen kwik, adhesief gehecht (minder tandsubstantieverlies)', 'Hogere duurzaamheid op lange termijn', 'Lagere kosten', 'Eenvoudigere techniek'],
          exp: 'Composiet: tand-gekleurde esthetiek, adhesief hechting = minder preparatie nodig, geen kwikproblematiek.'
        },
        {
          q: 'Glasionomeercement (GIC) hecht via:',
          opts: ['Chemische binding met calciumionen in tandhardweefsel', 'Mechanische retentie alleen', 'Adhesieve monomerverbinding', 'Zink-polycarboxylaat binding'],
          exp: 'GIC: polyalkeenzuur bindt chemisch aan Ca²⁺ in cementum/dentine = self-adhesief. Geeft ook fluoride af.'
        },
        {
          q: 'Welk materiaal heeft de hoogste biocompatibiliteit als directe pulpaoverdekkingsmateriaal?',
          opts: ['Minerale trioxied aggregaat (MTA)', 'Zinkoxide-eugenol cement', 'Composiet', 'Amalgaam'],
          exp: 'MTA: uitstekende biocompatibiliteit, stimuleert dentijnbrug, hoge succesratio bij directe pulpakap en apexificatie.'
        },
        {
          q: 'Wat is het nadeel van glasionomeercement vergeleken met composiet?',
          opts: ['Lagere druksterkte en slijtageweerstand', 'Geeft geen fluoride af', 'Hecht slechter aan dentine', 'Veroorzaakt gingivale irritatie'],
          exp: 'GIC is minder slijtvast en heeft lagere sterkte dan composiet — beperkt gebruik op hoog-belaste occlusale vlakken.'
        },
        {
          q: 'Waarom is het belangrijk om composiet in lagen aan te brengen?',
          opts: ['Beperken van polymerisatiekrimping en interne stress', 'Verbeteren van kleurnauwkeurigheid', 'Verminderen van allergierisico', 'Versnellen van uitharding'],
          exp: 'Composiet krimpt 1-3% bij polymerisatie. Laagstechniek = kleinere volumes per keer → minder marginale spanning en lekkage.'
        },
        {
          q: 'Welke primer/bond-stap is bij een "total-etch" techniek nodig?',
          opts: ['Etsen met 37% fosforzuur, primer, adhesief', 'Alleen etsen', 'Alleen adhesief', 'Etsen met citroenzuur, zelfetsende primer'],
          exp: 'Total-etch: fosforzuur 15-30 sec email/10-15 sec dentine → spoelen → primer → adhesief → licht uitharden.'
        },
        {
          q: 'Een GIC restauratie na ART op een melktand: wanneer is dit een geschikte keuze?',
          opts: ['Kleine tot middelgrote laesie, beperkte toegang tot zorg, hoog cariësrisico kind', 'Grote occlusale laesie bij volwassene', 'Restauratie met hoge esthetische eis', 'Laesie reikend tot de pulpa'],
          exp: 'ART + GIC: WHO-aanbevolen voor beperkte setting, melktanden, kleine laesies. Niet voor grote belaste vlakken.'
        },
        {
          q: 'Welk type composiet is meest geschikt voor het occlusale vlak van een eerste permanente molaar?',
          opts: ['Hybride of nano-hybride composiet (balans sterkte-esthetiek)', 'Microfill composiet', 'Vloeibaar composiet als enige laag', 'Glasionomeer'],
          exp: 'Hybride/nano-hybride composiet: hogere buigsterkte voor occlusale belasting + goede esthetiek en polijstbaarheid.'
        },
        {
          q: 'Wat betekent "secondary caries" (secundaire cariës)?',
          opts: ['Cariës die ontstaat aan de rand van een bestaande restauratie', 'Cariës na een behandeling met fluoride', 'Recidief van reeds behandelde cariës in hetzelfde vlak', 'Cariës bij de tweede dentitie'],
          exp: 'Secundaire cariës: nieuwe cariëslaesie bij marginale spleet van bestaande restauratie — door microlekkage en bacteriëninfiltratie.'
        },
        {
          q: 'Welke eigenschap maakt amalgaam nog steeds klinisch relevant in sommige situaties?',
          opts: ['Bewezen lange termijn duurzaamheid, eenvoudiger in natte omgeving te plaatsen', 'Beste esthetiek', 'Laagste kosten bij alle soorten restauraties', 'Meest biocompatibel materiaal'],
          exp: 'Amalgaam is sterk, duurt gemiddeld 10-15 jaar, en werkt beter dan composiet in moeilijk drooghoudbare gebieden.'
        }
      ]
    },

    cario_ai_6: {
      title: 'Cariologie – Set 6: Minimaal Invasieve Tandheelkunde',
      questions: [
        {
          q: 'Wat is het kernprincipe van Minimally Invasive Dentistry (MID)?',
          opts: ['Maximaal behoud van gezond tandweefsel; alleen geïnfecteerd dentine verwijderen', 'Zo vroeg mogelijk operatief ingrijpen', 'Gebruik van laser voor alle ingrepen', 'Preventie uitsluitend via mondhygiëne'],
          exp: 'MID: cariësbeleid gericht op preventie, remineralisatie van vroege laesies en minimale weefselverwijdering bij operatief ingrijpen.'
        },
        {
          q: 'Welke methode maakt gebruik van resininfiltration (Bijv. Icon) en wat is de indicatie?',
          opts: ['Penetratie van laag-visceuze resin in gedemineraliseerd email zonder boren; ICDAS 1-2 approximaal', 'Infiltratie bij ICDAS 5 voor cosmetisch herstel', 'Uitsluitend voor fluorose behandeling', 'Kanaalvulling bij WKB'],
          exp: 'Icon (DMG): hars infiltreert gedemineraliseerde email, stopt progressie en maskeert witte vlekken. Indicatie: ICDAS 1-2.'
        },
        {
          q: 'Stepwise excavation (stapsgewijze cariësverwijdering) is geïndiceerd bij:',
          opts: ['Diepe laesie nabij pulpa in vitale, symptoomloze tand om pulpablootstelling te voorkomen', 'Alle cariëslaesies', 'Uitsluitend bij pedo-patiënten', 'Laesies waarbij pulpa reeds is blootgesteld'],
          exp: 'Stepwise: eerste sessie laat zacht dentine dichtbij pulpa; na 6-12 maanden reopening → hard tertiair dentine gevormd.'
        },
        {
          q: 'Wat is de rol van calciumhydroxide (Ca(OH)₂) bij indirecte pulpaoverkapping?',
          opts: ['Stimuleert tertiaire dentinevorming door hoge pH en bactericide werking', 'Vult de caviteit definitief', 'Blokkeert fluorideopname', 'Heeft geen effect op pulpaweefsel'],
          exp: 'Ca(OH)₂: hoge pH (12,4) = bactericide + stimuleert odontoblasten tot tertiair dentinevorming (dentijnbrug).'
        },
        {
          q: 'Welk concept beschrijft het idee dat de caviteitsgrens moet liggen in gezond weefsel maar dat de preparatievorm minimaal is?',
          opts: ['Conservatieve caviteitspreparatie (MID-principe)', 'Black\'s classificatie', 'Tunnel-preparatie', 'Box-only preparatie'],
          exp: 'MID caviteitspreparatie: geen preventieve uitbreiding; bereid alleen de laesie zelf uit, waarbij de restauratiemarge op gezonde email/dentine ligt.'
        },
        {
          q: 'Wat is een tunnel-preparatie en wanneer is het toepasbaar?',
          opts: ['Benadering van approximale cariës via occlusaal, waarbij het marginale randvlak intact blijft', 'Preparatie voor kroonrestauratie', 'Endodontisch toegangspad', 'ART-variant voor melktanden'],
          exp: 'Tunnelpreparatie: occlusale ingang richting approximale cariës; behoud marginale crista. Moeilijke techniek, beperkte indicatie.'
        },
        {
          q: 'Welke overweging bepaalt de keuze tussen non-operatief en operatief behandelen bij ICDAS 3?',
          opts: ['Activiteit van de laesie (actief vs. inactief) en cavitatiestatus', 'Alleen de ICDAS-score', 'Leeftijd van de patiënt', 'Kleur van de laesie'],
          exp: 'ICDAS 3: indien actief en laesie dreigt te cavitëren → operatief; indien inactief → monitor + remineralisatietherapie.'
        },
        {
          q: 'Wat is Silver Diamine Fluoride (SDF) en wat is de primaire indicatie?',
          opts: ['38% SDF-oplossing; arrest van actieve cariës bij kinderen en ouderen met beperkte behandelmogelijkheden', 'Fluoride lak voor preventie', 'Materaal voor permanente restauraties', 'Ontsmettingsmiddel voor wortelkanalen'],
          exp: 'SDF (bijv. Advantage Arrest): zilverionen doden bacteriën, fluoride mineraliseert — evidence-based voor cariësstop in hoog-risico/coöperatieve uitdagingen.'
        },
        {
          q: 'Welk principe beschrijft de Hall-techniek voor melkmolaren?',
          opts: ['Stainless steel kroon zonder cariësexcavatie, cementering over de laesie', 'Conventionele amalgaamrestauratie', 'Extractie gevolgd door ruimtehouder', 'Vitale pulpotomie eerst, daarna kroon'],
          exp: 'Hall-techniek: rvs-kroon over niet-geëxcaveerde laesie → verzegelt biofilm, stopt cariës, hoge overlevingsratio melkmolaren.'
        },
        {
          q: 'Welke maatregel heeft het grootste preventieve effect op populatieniveau?',
          opts: ['Fluoridatie van drinkwater', 'Individuele fluoridetrays', 'Vlakdekkende sealants', 'Dieetadvies per patiënt'],
          exp: 'Drinkwaterfluoridatie (0,7-1,0 ppm): WHO-erkende volksgezondheidsmaatregel met aantoonbare reductie van cariëspreva­lentie.'
        }
      ]
    },

    cario_ai_7: {
      title: 'Cariologie – Set 7: Röntgendiagnostiek & Monitoring',
      questions: [
        {
          q: 'Op welke bitewing-opname is dentinecariës approximaal te zien als een radiolucente zone die de DEJ overschrijdt?',
          opts: ['Zowel horizontale als verticale bitewing', 'Uitsluitend panoramische opname', 'Periapicale opname', 'CBCT'],
          exp: 'Bitewings (horizontaal standaard; verticaal bij verhoogd botverlies): beste methode voor interproximale cariës detectie.'
        },
        {
          q: 'Hoe vaak moeten bitewing-opnames worden gemaakt bij een patiënt met hoog cariësrisico?',
          opts: ['Elke 6 maanden', 'Jaarlijks', 'Eens per 2 jaar', 'Alleen als symptomen aanwezig zijn'],
          exp: 'EAPD/KNMT: hoog cariësrisico → bitewings elke 6 maanden; laag risico → 1-2 jaar.'
        },
        {
          q: 'Welke beeldvormingstechniek geeft de meest nauwkeurige 3D-informatie over cariësdiepte?',
          opts: ['CBCT (cone-beam computed tomography)', 'Bitewing', 'Periapicale opname', 'Panoramische opname'],
          exp: 'CBCT: 3D-informatie over cariësdiepte en pulparelatie, maar hogere stralingsdosis — niet routinematig geïndiceerd voor cariës.'
        },
        {
          q: 'Een radiolucente zone beperkt tot het buitenste derde van het email op een bitewing komt overeen met:',
          opts: ['ICDAS 1-2 (email cariës)', 'ICDAS 4 (dentine buitenste derde)', 'ICDAS 5 (diep dentine)', 'ICDAS 6 (caviteit)'],
          exp: 'Radiolucent in buitenste email = ICDAS 1-2 equivalent. Nog geen caviteit — kans op non-operatieve behandeling.'
        },
        {
          q: 'Waarom is de klinische diagnose van cariës op approximale vlakken soms moeilijker dan röntgendiagnose?',
          opts: ['Contactpunt verhindert directe visuele inspectie; tand-op-tandoverlap', 'Geen kleurverandering bij email cariës', 'Speeksel bedekt de laesie', 'Email is te dik op approximale vlakken'],
          exp: 'Approximale vlakken zijn bedekt door het contactpunt: niet zichtbaar bij directe inspectie. Bitewing omzeilt dit probleem.'
        },
        {
          q: 'Welke digitale methode kan cariësmonitoringbeelden objectief vergelijken over tijd?',
          opts: ['Gesubtraheerde digitale radiografie (digital subtraction radiography)', 'Conventionele röntgenfilm', 'DIAGNOdent', 'Transilluminatie (FOTI)'],
          exp: 'Digitale subtractie-radiografie: vergelijkt beelden pixelsgewijs om subtiele veranderingen in densiteit te detecteren.'
        },
        {
          q: 'FOTI (Fiber Optic Transilluminatie) werkt doordat:',
          opts: ['Gedemineraliseerd tandweefsel minder licht doorlaat dan gezond weefsel', 'Bacteriën fluoresceren onder speciaal licht', 'Email en dentine dezelfde lichtdoorlaatbaarheid hebben', 'Infrarood warmte weefselschade detecteert'],
          exp: 'FOTI: wit licht door tand; gedemineraliseerd weefsel (meer poreus) absorbeert meer licht → donkere schaduw zichtbaar.'
        },
        {
          q: 'Wat is een nadeel van DIAGNOdent voor cariësdetectie?',
          opts: ['Verhoogde vals-positieven bij tandplak, tandsteenresten en inactieve verkleuring', 'Niet bruikbaar op occlusale vlakken', 'Vereist röntgenstraling', 'Detecteert alleen email cariës'],
          exp: 'DIAGNOdent: tandplak en extrinsieke vlekken fluoresceren ook → vals-positieven. Kalibratie en schoon oppervlak nodig.'
        },
        {
          q: 'Bij welk cariësstadium is een periapicale röntgenfoto aanvullend nuttig naast de bitewing?',
          opts: ['Diepe cariës nabij pulpa om pulpa-pathologie en periapicale status te beoordelen', 'Initiële emailcariës', 'Wortelcariës', 'Monitoring na fluoride applicatie'],
          exp: 'Periapicale opname bij diepe laesie: beoordeelt pulpastatus, periapicale botresorptie en wortelanatomy voor behandelplanning.'
        },
        {
          q: 'Hoe wordt stralingsdosis geminimaliseerd bij bitewing-opnames?',
          opts: ['Gebruik van rectangulaire collimatie, snelle sensoren/film, en enkel wanneer klinisch geïndiceerd', 'Hogere kV en mA instelling', 'Meerdere opnames om beste beeld te verkrijgen', 'Geen loodschort gebruiken'],
          exp: 'ALARA-principe: rectangulaire collimatie (-65% dosis vs. rond), digitale sensor/F-film, alleen op indicatie.'
        }
      ]
    },

    cario_ai_8: {
      title: 'Cariologie – Set 8: Gemengd Klinisch',
      questions: [
        {
          q: 'Een 7-jarig kind heeft actieve ECC met cariës op de buccale vlakken van alle bovenmelkincisieven. Welke behandelstrategie heeft prioriteit?',
          opts: ['Cariësstabilisatie (SDF/GIC), dieetadvies, fluoride, overweeg gedragsmanagement/sedatie', 'Extractie van alle aangetaste tanden', 'Uitsluitend dieetadvies', 'Wachten tot de permanente tanden doorbreken'],
          exp: 'ECC-prioriteit: infect stoppen (SDF of GIC); voorkomen pijn/infectie; dieet/hygiëne-instructie. Extractie enkel indien noodzakelijk.'
        },
        {
          q: 'Welke diagnostische classificatie beschrijft cariësletsels op basis van topografische locatie (Class I-VI)?',
          opts: ['Black\'s Classification', 'ICDAS', 'DMFT-index', 'PUFA-index'],
          exp: 'Black (1908): Class I=fissuren, II=approximaal post, III=approximaal ant, IV=hoekfractuur ant, V=cervicaal, VI=cusp tip.'
        },
        {
          q: 'Wat meet de DMFT-index?',
          opts: ['Aantal decayed (aangetast), missing (ontbrekend), filled (gevuld) tanden in permanente dentitie', 'Cariësactiviteit per kwartaal', 'Mate van fluorosis', 'Diepte van parodontale pocket'],
          exp: 'DMFT (D=carieus, M=gemist door cariës, F=gevuld): epidemiologische index voor cariëservaring in permanente dentitie.'
        },
        {
          q: 'Wat is het verschil tussen "caries experience" en "caries activity"?',
          opts: ['Ervaring = historisch totaal (DMFT); activiteit = actieve, groeiende laesies nu aanwezig', 'Ze zijn synoniem', 'Ervaring = toekomstige risico; activiteit = verleden', 'Activiteit is altijd hoger dan ervaring'],
          exp: 'Caries experience: cumulatief (DMFT). Caries activity: hoeveel laesies groeien actief op dit moment.'
        },
        {
          q: 'Een volwassen patiënt presenteert met multipele cervicale witte vlekken na 2 jaar orthodontische behandeling. Wat is de meest waarschijnlijke verklaring?',
          opts: ['White spot laesies door verminderde mondverzorging rondom brackets', 'Fluorose', 'Amelogenesis imperfecta', 'Tetracycline-verkleuring'],
          exp: 'White spots na orthodontie = post-orthodontische cariës; retentie van plaque rondom brackets → email demineralisatie.'
        },
        {
          q: 'Bij welke buffer-capaciteit van speeksel is het cariësrisico het hoogst?',
          opts: ['Lage bufferkapaciteit (<6,0 op Dentobuff Strip)', 'Hoge bufferkapaciteit (>8,5)', 'Normale bufferkapaciteit', 'Bufferkapaciteit heeft geen relatie met cariës'],
          exp: 'Lage speekselbufferingskapaciteit = onvoldoende neutralisatie van plaque-zuren → langere aanhoudende pH-daling → cariësrisico.'
        },
        {
          q: 'Hoe wordt de speekselvloed klinisch beoordeeld?',
          opts: ['Gestimuleerde speekselvloed: >1 ml/min normaal; onstimuleerd: >0,1 ml/min normaal', 'Altijd fluorescentiemeting', 'Enkel op basis van klachten van de patiënt', 'Beoordeling van tongcoating'],
          exp: 'Speekselvloe: gestimuleerd >1 ml/min = normaal; onstimuleerd >0,1 ml/min = normaal. Xerostomie <0,1 ml/min onstim.'
        },
        {
          q: 'Wat is het verschil tussen primaire en secundaire preventie van cariës?',
          opts: ['Primair = voorkomen van nieuw cariës; secundair = vroegdetectie en stoppen van progressie', 'Primair = behandeling; secundair = preventie', 'Ze beschrijven hetzelfde', 'Primair = fluoride; secundair = sealants'],
          exp: 'Primaire preventie: cariës voorkómen (fluoride, hygiëne, dieet). Secundaire preventie: vroeg detecteren en non-operatief behandelen.'
        },
        {
          q: 'Welk begrip beschrijft het totaalplaatje van risicofactoren en beschermende factoren bij de individuele patiënt?',
          opts: ['Cariës-risicoanalyse (CRA)', 'DMFT-score', 'ICDAS staging', 'Parodontale index'],
          exp: 'CRA (bijv. CAMBRA-protocol): weegt biologische, gedragsmatige en klinische factoren voor gepersonaliseerd preventieplan.'
        },
        {
          q: 'Welk teken op een bitewing-opname duidt op reparatieve dentinevorming als reactie op cariës?',
          opts: ['Verhoogde radiopaciteit in de pulpakamer (secundair/tertiair dentine)', 'Radiolucente zone periapicaal', 'Verbreding van de parodontale spleet', 'Verlies van de lamina dura'],
          exp: 'Pulpakamerlumen verkleint door secundair/tertiair dentine als reactie op cariësstimulus — zichtbaar als radiopaciteit op röntgen.'
        }
      ]
    },

    cario_ai_9: {
      title: 'Cariologie – Set 9: Vroegkinderlijke Cariës & Pedo',
      questions: [
        {
          q: 'Wat is de definitie van Early Childhood Caries (ECC) volgens de AAPD?',
          opts: ['Aanwezigheid van één of meer gecarieerde, ontbrekende of gevulde tanden bij kinderen ≤5 jaar', 'Cariës op alle melktanden bij kinderen <3 jaar', 'Alleen rampante cariës bij zuigelingen', 'Cariës uitsluitend door flesvoeding'],
          exp: 'ECC (AAPD): ≥1 dmft-oppervlak bij kind ≤5 jaar. Ernstige ECC (S-ECC) = elke gladde vlak-cariës bij kind <3 jaar.'
        },
        {
          q: 'Wanneer moet de eerste tandartsafspraak voor een kind plaatsvinden?',
          opts: ['Bij het doorbreken van de eerste melktand of uiterlijk op 12 maanden leeftijd', 'Op 3-jarige leeftijd', 'Als alle melktanden door zijn', 'Alleen bij klachten'],
          exp: 'AAPD/KNMT: eerste tandheelkunde afspraak bij eerste melktand doorbraak of op leeftijd 12 maanden — voor risicobeoordeling en ouderadvies.'
        },
        {
          q: 'Welk element van de melkdentitie heeft het hoogste cariësrisico bij ECC?',
          opts: ['Bovenste melkincisieven (buccale vlak)', 'Onderste melkmolaren', 'Bovenste melkmolaren (occlusaal)', 'Onderste incisieven'],
          exp: "ECC-patroon: bovenste incisieven buccaal (langdurig contact met zoete vloeistoffen 's nachts) zijn het eerste aangetast."
        },
        {
          q: 'Welke interventie is evidence-based voor het aantasten van S. mutans-transmissie van moeder naar kind?',
          opts: ['Xylitol-behandeling van de moeder perinataal; verbeteren mondgezondheid ouders', 'Antibiotica voor het kind', 'Vroeg fluoride suppletie voor het kind alleen', 'Verwijdering van alle carieuze tanden van de moeder'],
          exp: 'Verticale transmissie: S. mutans overdracht van primaire verzorger → kind. Moederlijke xylitol-behandeling = evidence-based reductie.'
        },
        {
          q: 'Hoe verschilt de Hall-techniek van conventionele restauraties bij melkmolaren?',
          opts: ['Geen cariësexcavatie; stainless steel kroon gecementeerd over laesie', 'Cariës volledig verwijderen, GIC plaatsen', 'Pulpotomie altijd eerst', 'Uitsluitend composiet'],
          exp: 'Hall: geen boor, geen anesthesie nodig voor plaatsing (hoewel soms wenselijk), hoge satisfactie/succes in klinische trials.'
        },
        {
          q: 'Een 4-jarig kind heeft pijn en zwelling bij melkmolaar 75. Welke behandeling heeft prioriteit?',
          opts: ['Extractie van 75 met ruimtehouder overweging, of pulpotomie/pulpectomie indien haalbaar', 'Alleen antibiotica', 'Hall-kroon direct plaatsen', 'Watchful waiting'],
          exp: 'Acute infectie/abces: drainage + extractie of pulpotomie/pulpectomie. Ruimtehouder overwegen voor ruimtebehoud.'
        },
        {
          q: 'Bij welke leeftijd is het veilig om fluoride tandpasta te starten bij kinderen?',
          opts: ['Zodra de eerste tand doorbreekt, met een rijstkorrelgrootte pasta (≤1000 ppm)', 'Pas vanaf 6 jaar', 'Vanaf 3 jaar met erwtengrootgrootte', 'Alleen fluoride spoeling, geen tandpasta'],
          exp: 'AAPD/EAP: start bij eerste tand met rijstkorrel (0-3 jaar); erwtengrootgrootte 500-1000 ppm vanaf 3-6 jaar; 1000-1500 ppm >6 jaar.'
        },
        {
          q: 'Welke factor in de voeding heeft de grootste invloed op de ontwikkeling van ECC?',
          opts: ["Frequentie van suikerhoudende dranken op aanvraag, met name 's nachts", 'Totale hoeveelheid suiker per dag', 'Type melk (fles vs. borstvoeding)', 'Consistentie van vast voedsel'],
          exp: 'Nachtelijke fles met zoete vloeistoffen = langdurig contact tijdens verminderde speekselvloed → ernstigste ECC-risico.'
        },
        {
          q: 'Wat is Motivational Interviewing (MI) in de context van cariëspreventiebegeleiding?',
          opts: ['Samenwerkende gesprekstechniek om eigen motivatie van ouders/patiënt voor gedragsverandering te versterken', 'Informatieverstrekking over risico\'s van suiker', 'Angstreductietechniek voor kinderen', 'Dieet-dagboek analyse'],
          exp: 'MI: niet-directieve gespreksbenadering, ontlokt ambivalentie, vergroot eigen motivatie — effectiever dan directief advies.'
        },
        {
          q: 'Een 3-jarig kind heeft S-ECC (Severe ECC) met multipele actieve laesies. Behandeling onder algehele anesthesie wordt overwogen. Wanneer is dit gerechtvaardigd?',
          opts: ['Kind is niet coöperatief, uitgebreide behandeling noodzakelijk, risico op niet-behandelen is hoger dan anesthesierisico', 'Altijd bij S-ECC', 'Alleen als ouders hierom verzoeken', 'Nooit bij kinderen <4 jaar'],
          exp: 'Algehele anesthesie bij pedo: gerechtvaardigd bij uitgebreide behandelbehoefte + onvoldoende coöperatie na gedragsmanagement.'
        }
      ]
    },

    cario_ai_10: {
      title: 'Cariologie – Set 10: Gemengd Examenniveau',
      questions: [
        {
          q: 'Wat is de rol van glucosyltransferases (GTF) van S. mutans bij cariësinitiatie?',
          opts: ['Syntheseert extracellulair glucaan (plakfilm) uit sucrose voor bacteriehechting aan email', 'Fermenteert glucose tot melkzuur', 'Neutraliseert fluoride', 'Stimuleert speekselproductie'],
          exp: 'GTF: zet sucrose om in onoplosbaar glucaan → plakfilm → S. mutans hechting aan email-oppervlak. Sucrose is uniek substraat.'
        },
        {
          q: 'Welke van de volgende beschrijft het "ecological plaque hypothesis" van Marsh?',
          opts: ['Cariogene bacteriën winnen in aantal wanneer omstandigheden (frequente suiker, laag pH) dit bevorderen; niet pathogeen onder neutrale condities', 'S. mutans is altijd pathogeen ongeacht omgeving', 'Biofilm is altijd homogeen van samenstelling', 'Enkel S. mutans veroorzaakt cariës'],
          exp: 'Marsh: gezonde biofilm bevat ook mutans streptococci in lage aantallen. Pas onder continue suikerstress verschuift de balans naar cariogene flora.'
        },
        {
          q: 'Welk mechanisme verklaart dat fluorapatiet zuurbestendiger is dan hydroxyapatiet?',
          opts: ['Fluor vervangt OH⁻ in het apatietkristalrooster → lagere oplosbaarheid bij lage pH', 'Fluor vergroot de kristalomvang', 'Fluor absorbeert protonen direct', 'Fluor vormt een fysieke laag boven het email'],
          exp: 'Fluorapatiet: F⁻ vervangt OH⁻ → stabielere kristalstructuur → kritische pH voor demineralisatie daalt van 5,5 naar ~4,5.'
        },
        {
          q: 'Welke fluoridetoedieningsvorm heeft het meeste systemisch effect op de tandontwikkeling?',
          opts: ['Drinkwaterfluoridatie en fluoridetabletten tijdens tandontwikkeling (0-8 jaar)', 'Fluoride tandpasta', 'Fluoride mondspoeling', 'Fluoridelak'],
          exp: 'Systemisch fluoride tijdens amelogenese incorporeert in email. Lokale middelen werken posteruptief — beide zijn complementair.'
        },
        {
          q: 'CAMBRA (Caries Management By Risk Assessment) verdeelt patiënten in risicocategorieën. Welke factor categoriseert een patiënt als "hoog risico"?',
          opts: ['Aanwezigheid van 1+ nieuwe cariëslaesie in de afgelopen 3 jaar + slechte hygiëne + hoge suikerfrequentie', 'Ouder dan 60 jaar', 'Aanwezigheid van tandvleesontsteking', 'Orthodontische behandeling'],
          exp: 'CAMBRA hoog-risico: actuele/recente cariës-activiteit + pathologische factoren overwegen beschermende factoren.'
        },
        {
          q: 'Een laesie geclassificeerd als ICDAS 5 op de bitewing is röntgenologisch waarschijnlijk:',
          opts: ['Radiolucente zone in het binnenderde van dentine of tot de pulpa reikend', 'Radiolucente zone beperkt tot email', 'Geen zichtbare afwijking', 'Enkel radiopaciteit'],
          exp: 'ICDAS 5 = diepe dentinecariës, bijna pulpa. Bitewing: radiolucent in binnenderde dentine richting pulpa.'
        },
        {
          q: 'Wat is het grootste gevaar van het te vroeg operatief behandelen van een initiële emaillaesie (ICDAS 1-2)?',
          opts: ['Onnodige verwijdering van gezond weefsel en de "restauratiecyclus" initiëren', 'Verhoogd infectierisico', 'Pulpanecrose', 'Tandkleurverandering'],
          exp: 'Restauratiecyclus (Elderton): elke restauratie verzwakt de tand → toekomstige grotere restauraties nodig. Vermijd bij remineraliseerbare laesies.'
        },
        {
          q: 'Welke eigenschap van speekseleiwitten speelt een rol bij het beschermen van email door pellicle-vorming?',
          opts: ['Prolinerijke eiwitten en mucinen adsorberen selectief op email en vormen de acquired pellicle', 'Amylase verteert biofilm', 'IgA doodt S. mutans direct', 'Statherin slaat calcium neer op email'],
          exp: 'Acquired pellicle: dun eiwitlaagje op email direct na poetsen. Deels beschermend (fungeert als barrière), deels bevordert bacteriehechting.'
        },
        {
          q: 'Welke van de volgende uitspraken over atraumatische restauratieve therapie (ART) is correct?',
          opts: ['ART gebruikt hand-excavators en GIC; effectief voor kleine laesies in beperkte settings; hoge GIC-overleven in melkgebit', 'ART vereist altijd een tandartsboor', 'ART is alleen geschikt voor volwassenen', 'ART gebruikt composiet als restauratiemateriaal'],
          exp: 'ART: WHO-aanbevolen voor low-resource settings; hand-excavatie + GIC; hoge succesratio in melkdentitie, matig in permanente dentitie.'
        },
        {
          q: 'Een patient met actieve wortelcariës op meerdere cervicale vlakken. Welke combinatie-aanpak is het meest evidence-based?',
          opts: ['SDF-applicatie + professionele fluoridelak + dagelijkse 5000 ppm fluoride tandpasta + xerostomie-management', 'Alleen restaureren met GIC', 'Extractie van aangetaste tanden', 'Antibiotische mondspoeling'],
          exp: 'Wortelcariës management: SDF (stop progressie), fluoride lak professioneel, hoge fluoride thuis, aanpak oorzaak (bijv. xerostomie).'
        }
      ]
    }

  };

  window.QUIZZES = Object.assign(window.QUIZZES || {}, sets);
})();
