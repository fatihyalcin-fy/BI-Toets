/* =================================================================
   data_cikmis_speeksel.js – Speeksel & Orale Biologie Cikmis Sorular (3 sets, 36 vragen)
   opts[0] = altijd het JUISTE antwoord. quiz.js shuffelt bij weergave.
   ================================================================= */
(function () {
  var sets = {

    speeksel_cikmis_1: {
      title: 'Speeksel & Orale Biologie Çıkmış – Set 1',
      questions: [
        {
          q: 'Mucinen hebben een sterk hydrofoob karakter. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Mucinen zijn hydrofiel, niet hydrofoob. De uitgebreide glycosylering (suikerketens) maakt mucinen juist sterk hydrofiel, waardoor ze water binden en voor glijbaarheid zorgen.'
        },
        {
          q: 'Bij patiënten met xerostomie door bestraling is palliatief care met speekselvervangers geïndiceerd. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Bestralingsinduceerde xerostomie leidt tot permanente beschadiging van de speekselklieren. Speekselvervangers worden ingezet als palliatieve maatregel om klachten te verlichten.'
        },
        {
          q: 'MUC5B bindt aan de meeste orale bacteriën. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Niet MUC5B maar MUC7 is het mucine dat aan de meeste orale bacteriën bindt en hen helpt aggregeren voor klaring uit de mondholte.'
        },
        {
          q: 'MUC7 helpt bacteriën aggregeren samen met sIgA. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'MUC7 bindt aan orale bacteriën en werkt samen met sIgA om bacterienaggregatie te bevorderen, waardoor bacteriën efficiënter worden ingeslikt en verwijderd.'
        },
        {
          q: 'Speekselklieren staan onder invloed van zowel het sympathisch als parasympathisch zenuwstelsel. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Beide onderdelen van het autonome zenuwstelsel innerveren de speekselklieren. Parasympathisch stimuleert waterrijke secretie; sympathisch stimuleert eiwit- en muceusrijke secretie.'
        },
        {
          q: 'De parotisklier produceert sereus speeksel. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'De parotisklier is een puur sereuze klier en produceert dun, waterachtig speeksel rijk aan amylase en andere eiwitten.'
        },
        {
          q: 'sIgA in speeksel is de eerste lijn van afweer tegen orale micro-organismen. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Secretoir IgA (sIgA) is het dominante immunoglobuline in speeksel en vormt de eerste immunologische verdedigingslinie in de mondholte door adhesie van pathogenen te blokkeren.'
        },
        {
          q: 'Amylase in speeksel breekt zetmeel af tot:',
          opts: ['Maltose en dextrines', 'Glucose', 'Fructose', 'Sucrose'],
          exp: 'Speekselamylase (ptyaline) hydrolyseert α-1,4-glycosidische bindingen in zetmeel en produceert daarbij maltose en grotere dextrine-fragmenten, niet vrij glucose.'
        },
        {
          q: 'De bufferende werking van speeksel berust voornamelijk op:',
          opts: ['Bicarbonaat', 'Albumine', 'Lysozyme', 'Mucine'],
          exp: 'Het bicarbonaatsysteem is de belangrijkste buffer in speeksel, met name in gestimuleerd speeksel. Fosfaat is een secundaire buffer; albumine speelt geen rol als speeksel-buffer.'
        },
        {
          q: 'Lysozyme in speeksel werkt:',
          opts: ['Bactericide door afbraak van de celwand', 'Bacteriostatisch door remming van DNA-synthese', 'Fungostatisch door membraanschade', 'Virucide door kapselafbraak'],
          exp: 'Lysozyme klieft de β-1,4-glycosidische binding in het peptidoglycaan van bacteriële celwanden (muramidase-activiteit), wat leidt tot osmotische lysis en bacteriedood.'
        },
        {
          q: 'Na inname van een zure vloeistof treedt veel speekselproductie op als autonome reflex. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Zure stimuli activeren chemoreceptoren in de mondholte, wat via parasympathische reflexen leidt tot verhoogde speekselproductie ter neutralisering van het zuur.'
        },
        {
          q: 'Xerostomie wordt gedefinieerd als:',
          opts: ['Een subjectief gevoel van een droge mond', 'Objectief verminderde speekselproductie (<0,1 ml/min onstimuleerd)', 'Afwezigheid van speekselklieren', 'Een speekselproductie <0,5 ml/min gestimuleerd'],
          exp: 'Xerostomie is per definitie een subjectieve klacht (droge mond gevoel). Het kan optreden ook bij normale speekselproductie. Hyposalivatie is de objectieve vermindering van speekselflow.'
        }
      ]
    },

    speeksel_cikmis_2: {
      title: 'Speeksel & Orale Biologie Çıkmış – Set 2: Halitose & Speekselklieren',
      questions: [
        {
          q: 'Halitose wordt primair veroorzaakt door:',
          opts: ['Afbraak van zwavelhoudende aminozuren door anaerobe bacteriën', 'Overmatige speekselproductie', 'Fluoride in tandpasta', 'Verhoogde pH in de mondholte'],
          exp: 'Anaerobe bacteriën, met name op de tongrug en in parodontale pockets, breken zwavelhoudende aminozuren (cysteïne, methionine) af tot vluchtige zwavelverbindingen (H₂S, CH₃SH) die de onaangename geur veroorzaken.'
        },
        {
          q: 'Chloorhexidine (CHX) is effectief bij de behandeling van halitose. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'CHX heeft breed-spectrum antibacteriële werking en reduceert aantoonbaar de concentratie vluchtige zwavelverbindingen (VSC) die verantwoordelijk zijn voor halitose.'
        },
        {
          q: 'Een combinatie van tongschraper en mondspoeling is effectiever dan alleen mondspoeling bij halitose. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'De tongrug is de belangrijkste bron van halitose. Mechanische reiniging met een tongschraper verwijdert het tongbeslag en versterkt daardoor het effect van een antimicrobiële mondspoeling.'
        },
        {
          q: 'De oorzaak van halitose is in circa 90% van de gevallen intraoraal. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Studies tonen aan dat circa 85–90% van halitose een intraoral origine heeft, voornamelijk tongbeslag en parodontale aandoeningen. Extraorale oorzaken (longen, maag) zijn zeldzamer.'
        },
        {
          q: 'Welke componenten zijn actief in mondwater als anti-halitose middelen?',
          opts: ['Zink, fluoride, CHX en cetylpyridiniumchloride', 'Uitsluitend fluoride', 'Uitsluitend alcohol', 'Natriumlaurylsulfaat en menthol'],
          exp: 'Effectieve anti-halitose mondspoelmiddelen bevatten combinaties van: zink (neutraliseert VSC), CHX of cetylpyridiniumchloride (CPC) als antibacteriële middelen, en fluoride voor cariësbescherming.'
        },
        {
          q: 'Het speeksel van de submandibulaire klier is:',
          opts: ['Gemengd (sereus én muceus)', 'Puur sereus', 'Puur muceus', 'Uitsluitend waterig'],
          exp: 'De submandibulaire klier is een gemengde klier met zowel sereuze als muceuse acini. Ze levert circa 70% van het totale rustvolume speeksel.'
        },
        {
          q: 'De sublinguale klier produceert voornamelijk:',
          opts: ['Muceus speeksel', 'Sereus speeksel', 'Gelijkwaardig sereus en muceus speeksel', 'Waterspeeksel zonder eiwitten'],
          exp: 'De sublinguale klier is overwegend muceus. Het geproduceerde speeksel is visceuzer en muceusrijker dan dat van de parotis of submandibulaire klier.'
        },
        {
          q: 'Tijdens een stresssituatie (bijv. tandartsbezoek) neemt de speekselproductie:',
          opts: ['Af door sympathische activatie', 'Toe door parasympathische activatie', 'Niet significant toe of af', 'Toe door adrenaline'],
          exp: 'Stress activeert het sympathisch zenuwstelsel, wat leidt tot verminderde secretie (droge mond gevoel) en een meer visceus speeksel. Parasympathische activatie is juist verantwoordelijk voor copieuse, waterrijke secretie.'
        },
        {
          q: 'De speekselpellicle op emailoppervlak bestaat uit:',
          opts: ['Eiwitten die selectief adsorberen op het emailoppervlak', 'Een bacteriële biofilm', 'Calciumfosfaatkristallen', 'Dode epitheelcellen'],
          exp: 'De verworven pellicle is een acellulair, bacterievrij eiwitlaagje. Speekseleiwitten (prolinerijke eiwitten, mucinen, statharinen) adsorberen selectief aan hydroxyapatiet van het emailoppervlak.'
        },
        {
          q: 'Verminderde speekselproductie verhoogt het cariësrisico omdat:',
          opts: ['Er minder buffering, remineralisatie en antimicrobiële bescherming plaatsvindt', 'Er meer suiker in de mond achterblijft', 'Tandplaque harder wordt', 'Het email zachter wordt door pH-stijging'],
          exp: 'Speeksel heeft drie cruciale anticariogene functies: (1) buffering van zuren, (2) levering van calcium en fosfaat voor remineralisatie, en (3) antimicrobiële eiwitten. Vermindering van al deze functies verhoogt het cariësrisico significant.'
        },
        {
          q: 'De parasympathische innervatie van de parotisklier verloopt via:',
          opts: ['N. auriculotemporalis (parasympathische vezels via n. glossopharyngeus)', 'N. facialis', 'N. trigeminus (V3) direct', 'N. vagus'],
          exp: 'Preganglionaire parasympathische vezels lopen via de n. glossopharyngeus (IX) naar het ganglion oticum; postganglionaire vezels bereiken de parotis via de n. auriculotemporalis (tak van V3).'
        },
        {
          q: 'De normale onstimuleerde speekselstroom bedraagt:',
          opts: ['Meer dan 0,1 ml/min', 'Meer dan 1 ml/min', 'Meer dan 0,5 ml/min', 'Meer dan 2 ml/min'],
          exp: 'Normaalwaarden: onstimuleerd speeksel >0,1 ml/min (hyposalivatie <0,1 ml/min); gestimuleerd speeksel >1 ml/min (hyposalivatie <0,5–1 ml/min afhankelijk van de richtlijn).'
        }
      ]
    },

    speeksel_cikmis_3: {
      title: 'Speeksel & Orale Biologie Çıkmış – Set 3: Orale Microbiologie',
      questions: [
        {
          q: 'Streptococcus mutans hecht aan het emailoppervlak via:',
          opts: ['Glucanen gesynthetiseerd uit sucrose door glucosyltransferase', 'Calciumionen in het email', 'Fimbriae die binden aan pellicle-eiwitten', 'Lipoteichoïnezuur in de celwand'],
          exp: 'S. mutans bezit glucosyltransferasen (GTF) die sucrose omzetten in glucanen (met name onoplosbaar mutaan). Dit glucaan fungeert als matrix voor stevige hechting aan het tandoppervlak en is essentieel voor cariogene plaquevorming.'
        },
        {
          q: 'Het cariogene potentieel van sucrose is groter dan dat van glucose, omdat:',
          opts: ['S. mutans maakt uitsluitend glucaan voor hechting wanneer sucrose als substraat beschikbaar is', 'Sucrose sneller fermenteert dan glucose', 'Sucrose een lagere pH-daling veroorzaakt', 'Glucose stimuleert meer S. mutans groei'],
          exp: 'Glucosyltransferases kunnen alleen glucaan synthetiseren met sucrose als donor van de glucosylgroep. Vrij glucose of fructose kan deze reactie niet aandrijven, waardoor sucrose uniek cariogeen is voor adhesie.'
        },
        {
          q: 'Een plaque-biofilm is:',
          opts: ['Een complexe samenleving van micro-organismen ingebed in een extracellulaire matrix', 'Een homogene verzameling van gelijksoortige bacteriën', 'Een steriele eiwitfilm op het tandoppervlak', 'Een tijdelijk ophopende bacteriemassa zonder structuur'],
          exp: 'Tandplaque is een paradigmatisch voorbeeld van een biofilm: een georganiseerde, heterogene microbiële gemeenschap ingebed in een zelfgeproduceerde extracellulaire polymeermatrix (EPS), met interspecies-communicatie en verhoogde antibiotica-resistentie.'
        },
        {
          q: 'Veillonella verbruikt het lactaat dat S. mutans produceert, waardoor de pH in plaque stijgt. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Veillonella spp. zijn anaeroben die lactaat (eindproduct van S. mutans fermentatie) gebruiken als energiebron en omzetten tot propionaat en acetaat, verbindingen die minder zuur zijn. Dit draagt bij aan een hogere plaque-pH.'
        },
        {
          q: 'Bij gingivitis treedt er toename op van creviculaire vloeistof en immuuncellen. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Gingivale ontstekingsreactie leidt tot vasodilatatie en verhoogde permeabiliteit, waardoor de productie van gingivale creviculaire vloeistof (GCF) stijgt. GCF bevat immuunglobulinen, complement en leukocyten als verdediging.'
        },
        {
          q: 'Parodontitis is een infectieziekte. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Parodontitis is een infectieuze, ontstekingsgemedieerde aandoening veroorzaakt door subgingivale parodontopathogene bacteriën (zoals Porphyromonas gingivalis, Tannerella forsythia). De gastheer-immuunrespons speelt echter een cruciale rol in de weefselafbraak.'
        },
        {
          q: 'Candida albicans behoort tot het normale mondflora. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'C. albicans is een commensal schimmel die in kleine aantallen bij circa 40–60% van gezonde personen aanwezig is in de mondholte zonder pathologie te veroorzaken. Opportunistische infectie treedt op bij immunosuppressie of verminderde speekselproductie.'
        },
        {
          q: 'Recidiverende herpes-infecties in het mond-lipgebied worden veroorzaakt door:',
          opts: ['HSV-1 (Herpes Simplex Virus type 1)', 'HSV-2 (Herpes Simplex Virus type 2)', 'EBV (Epstein-Barr virus)', 'CMV (Cytomegalovirus)'],
          exp: 'HSV-1 is verantwoordelijk voor orolabiale herpes (koortslip). Na primaire infectie latentie in het ganglion trigeminale; reactivatie leidt tot recidieven in het lippen- en mondgebied. HSV-2 veroorzaakt hoofdzakelijk genitale herpes.'
        },
        {
          q: 'Lymfocyten circuleren continu tussen bloed, lymfevaten en lymfeklieren. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Lymfocyten recirculeren voortdurend via de lymfevaten, ductus thoracicus, bloedbaan en lymfoïde organen. Dit "homing"-mechanisme maakt het mogelijk dat geactiveerde lymfocyten geïnfecteerde weefsels snel kunnen bereiken.'
        },
        {
          q: 'Keelinfecties kunnen zowel door virussen als door bacteriën worden veroorzaakt. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'De meeste keelinfecties (faryngitis/tonsillitis) zijn viraal (rhinovirus, adenovirus, EBV). Circa 15–30% wordt veroorzaakt door bacteriën, met Streptococcus pyogenes (groep A) als belangrijkste verwekker van bacteriële tonsillitis.'
        },
        {
          q: 'Schimmelinfecties spelen de belangrijkste rol bij de ontwikkeling van mondkanker. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'De voornaamste risicofactoren voor oraal plaveiselcelcarcinoom zijn tabak, alcohol en in toenemende mate HPV (orofaryngeaal). Candida-infectie kan bijdragen aan leukoplakieontwikkeling maar is geen hoofdoorzaak van mondkanker.'
        },
        {
          q: 'HPV veroorzaakt in een groot percentage orale tumoren. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Hoewel HPV (met name HPV-16) een sterk verband vertoont met orofaryngeale tumoren (tonsillen, tongbasis), is het slechts bij een minderheid van alle orale carcinomen betrokken. Tabak en alcohol blijven de dominante etiologische factoren voor mondkanker.'
        }
      ]
    }

  };
  window.QUIZZES = Object.assign(window.QUIZZES || {}, sets);
})();
