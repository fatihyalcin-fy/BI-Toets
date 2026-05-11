/* =================================================================
   data_cikmis_pedo.js – Pedodontologie Cikmis Sorular (4 sets, 60 vragen)
   opts[0] = altijd het JUISTE antwoord. quiz.js shuffelt bij weergave.
   ================================================================= */
(function () {
  var sets = {

    pedo_cikmis_1: {
      title: 'Pedodontologie Cikmis – Set 1: Diagnose & Kaasmolaar',
      questions: [
        {
          q: 'Een kind heeft een kaasmolaar met een glazuurafwijking op het bovenincisief. Bij welk element is de afwijking groter?',
          opts: ['De molaar', 'Het incisief'],
          exp: 'Bij kaasmolaren (MIH) is de afwijking op de molaar groter dan op het incisief.'
        },
        {
          q: 'Een 4-jarig kind heeft pijn bij een kies. Welk diagnostisch hulpmiddel heeft de voorkeur?',
          opts: ['Rontgenfoto', 'Koudtest'],
          exp: 'Bij jonge kinderen is de koudtest onbetrouwbaar; een rontgenfoto geeft betrouwbaarder diagnostische informatie.'
        },
        {
          q: 'Wanneer is fluoride in lepelvorm geindiceerd bij kinderen?',
          opts: ['Alleen als andere fluoridemaatregelen onvoldoende zijn', 'Preventief bij elke halfjaarlijkse controle'],
          exp: 'Fluoride in lepelvorm is alleen geindiceerd wanneer andere preventiemaatregelen ontoereikend zijn.'
        },
        {
          q: 'Het is juist om bij een angstige kleuter de anesthesie uit te stellen totdat er pijn is.',
          opts: ['Onjuist', 'Juist'],
          exp: 'Wachten op pijn vergroot de angst; anesthesie bij angstige kleuters dient tijdig en zorgvuldig te worden gegeven.'
        },
        {
          q: 'Welke fluorideconcentratie in tandpasta wordt aanbevolen voor kinderen van 2-4 jaar?',
          opts: ['500-750 ppm', '250 ppm'],
          exp: 'Voor kinderen van 2-4 jaar adviseert het Ivoren Kruis tandpasta met 500-750 ppm fluoride.'
        },
        {
          q: 'Wat vermindert de pijn bij een injectie bij kinderen van 7-12 jaar het meest?',
          opts: ['Afleiding via video zonder moeder', 'Moeder die verhalen vertelt'],
          exp: 'Actieve afleiding (bijv. video) zonder storende aanwezigheid is effectiever dan verbale afleiding door de ouder.'
        },
        {
          q: 'Een 4-jarig kind heeft een horizontale breuk bij de apex van element 61. Wat is de juiste behandeling?',
          opts: ['Afwachten', 'Direct extraheren'],
          exp: 'Een apicale fractuur van een melktand bij een jong kind wordt conservatief behandeld door af te wachten.'
        },
        {
          q: 'Hoe zijn de contactvlakken bij melkelementen vergeleken met blijvende elementen?',
          opts: ['Breed', 'Smal'],
          exp: 'Melkelementen hebben brede, vlakke contactvlakken in tegenstelling tot de smallere contactpunten bij blijvende elementen.'
        },
        {
          q: 'Welke aankondiging door de tandarts is het meest geschikt voor een kind?',
          opts: ['"Ik ga eerst even kijken"', '"Ik ga niet eng doen"'],
          exp: 'Een neutrale, eerlijke aankondiging als "even kijken" wekt vertrouwen en vermijdt negatieve anticipatie.'
        },
        {
          q: 'Youri (5 jaar, angstig) heeft een fistel boven een donkerverkleurde 51 zonder klachten. Wat is de juiste aanpak?',
          opts: ['Afspraak plannen voor extractie van 51', 'Afwachten'],
          exp: 'Een fistel wijst op chronische infectie; extractie is geindiceerd om schade aan de blijvende opvolger te voorkomen.'
        },
        {
          q: 'Stelling A: Kaasmolaren (MIH) hebben een relatie met ziekten op jonge leeftijd. Stelling B: De ernst van MIH is altijd hetzelfde. Welke stelling is juist?',
          opts: ['Stelling A is juist', 'Stelling B is juist'],
          exp: 'Stelling A is juist; er is een verband tussen MIH en ziekten in de eerste levensjaren, terwijl de ernst sterk varieert.'
        },
        {
          q: 'Na hoeveel maanden worden nieuwe bitewings gemaakt bij een kind met laag cariesrisico?',
          opts: ['18 maanden', '24 maanden'],
          exp: 'Bij laag cariesrisico is de aanbevolen interval voor bitewings 18 maanden.'
        },
        {
          q: 'Een kleuter van 4-6 jaar kan prima zelfstandig poetsen.',
          opts: ['Onjuist', 'Juist'],
          exp: 'Kinderen hebben tot ongeveer 10 jaar napoetsen door een ouder nodig vanwege onvoldoende motoriek.'
        },
        {
          q: 'Hypomaturatie op de bovenincisieven treedt op bij een minder ernstige vorm van kaasmolaren (MIH).',
          opts: ['Onjuist', 'Juist'],
          exp: 'Hypomaturatie op incisieven is juist kenmerkend voor een ernstiger beeld van MIH, niet de mildere vorm.'
        },
        {
          q: 'Wat is de beste methode om ongewenst gedrag bij een kind af te zwakken?',
          opts: ['Time-out', 'Shaping'],
          exp: 'Time-out is een vorm van negatieve straf (operante conditionering) die effectief ongewenst gedrag afzwakt.'
        },
      ]
    },

    pedo_cikmis_2: {
      title: 'Pedodontologie Cikmis – Set 2: Gebitsontwikkeling & Anesthesie',
      questions: [
        {
          q: 'Op welk moment moet een onaangename behandeling worden aangekondigd aan een kind?',
          opts: ['Kort van tevoren', 'Lang van tevoren'],
          exp: 'Een onaangename behandeling kort van tevoren aankondigen voorkomt langdurige angstopbouw.'
        },
        {
          q: 'Een melktand is verloren door fysiologische wisseling en de blijvende tand is nog niet doorgebroken. Wat gebeurt er met de DMFT-score?',
          opts: ['DMFT blijft gelijk', 'DMFT stijgt met 1'],
          exp: 'Fysiologisch verlies door wisseling zonder caries-gerelateerd verlies verandert de DMFT-score niet.'
        },
        {
          q: 'Is de doorbraak van het blijvend gebit afhankelijk van het geslacht?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Meisjes krijgen hun blijvende gebit gemiddeld iets eerder dan jongens; geslacht heeft een aantoonbaar effect.'
        },
        {
          q: 'De tweede melkmolaar wordt getrokken omdat de premolaar doorbreekt. Wat gebeurt er met de DMFT-score?',
          opts: ['DMFT stijgt niet (geen punt toevoegen)', 'DMFT stijgt met 1'],
          exp: 'Fysiologisch verlies in het kader van normale wisseling leidt niet tot een aanpassing van de DMFT-score.'
        },
        {
          q: 'Wat is het basisadvies van het Ivoren Kruis voor kinderen van 2-5 jaar?',
          opts: ['2x per dag poetsen met peutertandpasta', '1x per dag poetsen'],
          exp: 'Het Ivoren Kruis adviseert kinderen van 2-5 jaar tweemaal daags poetsen met een geschikte peutertandpasta.'
        },
        {
          q: 'Zijn kaasmolaren (MIH) vatbaarder voor caries?',
          opts: ['Ja, meer vatbaar voor caries', 'Nee, minder vatbaar'],
          exp: 'Het aangetaste glazuur bij MIH is poreuzer en daardoor beduidend vatbaarder voor caries.'
        },
        {
          q: 'Element 61 wordt op 4-jarige leeftijd geintrudeerd. Was de intrusie een jaar eerder (op 3 jaar) schadelijker voor de opvolger?',
          opts: ['Groter schadelijk effect op 3-jarige leeftijd', 'Kleiner schadelijk effect op 3-jarige leeftijd'],
          exp: 'Op 3-jarige leeftijd is de glazuurvorming van de blijvende opvolger nog bezig, waardoor intrusie dan schadelijker is.'
        },
        {
          q: 'Waar bevindt zich de insteekplaats voor mandibulaire anesthesie bij kinderen ten opzichte van volwassenen?',
          opts: ['Hoger dan bij volwassenen', 'Lager dan bij volwassenen'],
          exp: 'Bij kinderen ligt het foramen mandibulare hoger, dus wordt de insteekplaats hoger gekozen dan bij volwassenen.'
        },
        {
          q: 'Wat is de behandeling van keuze bij extrusie van een melkfrontelement?',
          opts: ['Extractie', 'Reponeren'],
          exp: 'Extrusie van een melkfrontelement heeft een hoog risico op schade aan de blijvende kiem; extractie is daarom geindicieerd.'
        },
        {
          q: 'Hoe zijn de approximale vlakken van melkelementen vergeleken met blijvende elementen (gezien van vestibulair)?',
          opts: ['Boller', 'Vlakker'],
          exp: 'Melkelementen zijn approximaal boller dan blijvende elementen, wat het breed contactvlak mede verklaart.'
        },
        {
          q: 'Resorberen de wortels van melkelementen onregelmatig?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Wortelresorp tie van melkelementen verloopt vaak onregelmatig, afhankelijk van positie en druk van de opvolger.'
        },
        {
          q: 'Moeten kinderen van 2-5 jaar tweemaal per dag poetsen?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Het Ivoren Kruis beveelt tweemaal daags poetsen aan voor kinderen vanaf de doorbraak van de eerste melktand.'
        },
        {
          q: 'Wortels van melkelementen resorberen bijna altijd gelijkmatig.',
          opts: ['Onjuist', 'Juist'],
          exp: 'Wortelresorp tie van melkelementen is doorgaans onregelmatig, niet gelijkmatig.'
        },
        {
          q: 'Is communicatie met een kind voor 50% non-verbaal?',
          opts: ['Onjuist – circa 80% is non-verbaal', 'Juist – 50% verbaal en 50% non-verbaal'],
          exp: 'Onderzoek toont aan dat communicatie bij kinderen voor circa 80% non-verbaal plaatsvindt.'
        },
        {
          q: 'Wat is de juiste positie voor ouders bij het tandenpoetsen van een jong kind?',
          opts: ['Achter het kind, met het hoofd van het kind naar achteren', 'Voor het kind'],
          exp: 'De optimale poetspositie is achter het kind staan met het hoofd licht naar achteren voor goed zicht en bereik.'
        },
      ]
    },

    pedo_cikmis_3: {
      title: 'Pedodontologie Cikmis – Set 3: Behandeling & Adhesief',
      questions: [
        {
          q: 'Helpt structuur en grenzen bieden bij de behandeling van een moeilijk behandelbaar kind?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Voorspelbare structuur en duidelijke grenzen vergroten het gevoel van veiligheid en verbeteren het gedrag van het kind.'
        },
        {
          q: 'Een kind van 6 jaar kan prima zelfstandig tandenpoetsen.',
          opts: ['Onjuist', 'Juist'],
          exp: 'Kinderen missen tot circa 10 jaar de fijne motoriek voor adequaat zelfstandig poetsen; napoetsen door een ouder is nodig.'
        },
        {
          q: 'Welk melkelement is het belangrijkst voor de gebitsontwikkeling?',
          opts: ['Tweede ondermelkmolaar', 'Tweede bovenmelkmolaar'],
          exp: 'De tweede ondermelkmolaar is als ruimtebewaker cruciaal voor de juiste doorbraak van de eerste blijvende molaar.'
        },
        {
          q: 'Is de beoordeling van interproximale caries op contactvlakken bij melkelementen betrouwbaarder dan bij blijvende elementen?',
          opts: ['Minder betrouwbaar bij melkelementen', 'Meer betrouwbaar bij melkelementen'],
          exp: 'Het brede contactvlak van melkelementen bemoeilijkt de radiologische beoordeling van interproximale caries.'
        },
        {
          q: 'Is paracetamol als premedicatie soms geindiceerd in de kindertandheelkunde?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Paracetamol als premedicatie kan de pijnbeleving verminderen en de behandeling bij angstige of pijnlijke kinderen vergemakkelijken.'
        },
        {
          q: 'Welk oplosmiddel bevat primer/bond adhesief dat geschikt is voor melkelementen?',
          opts: ['Alcohol', 'Aceton'],
          exp: 'Primer/bond voor melkelementen is op alcoholbasis omdat melkdentine vochtiger is en acetonsystemen minder effectief zijn.'
        },
        {
          q: 'Welk type geprefabriceerde kroon wordt het meest gebruikt voor melkmolaren?',
          opts: ['Nikkel-chroom kroon', 'Polycarbonaatskroon'],
          exp: 'Nikkel-chroom (stalen) kronen zijn de meest toegepaste geprefabriceerde kronen voor melkmolaren vanwege duurzaamheid.'
        },
        {
          q: 'Wat adviseert het Ivoren Kruis voor kinderen van 0-1 jaar?',
          opts: ['1x per dag poetsen bij de doorbraak van de eerste melktand', '2x per dag poetsen'],
          exp: 'Zodra de eerste melktand doorbreekt wordt eenmaal daags poetsen aanbevolen door het Ivoren Kruis.'
        },
        {
          q: 'Vereist primer/bond adhesief voor melkelementen droog of vochtig dentine?',
          opts: ['Vochtig dentine', 'Droog dentine'],
          exp: 'Melkdentine heeft een hogere vochtgraad; een vochtig dentineoppervlak is nodig voor optimale hechting van het adhesief.'
        },
        {
          q: 'Heeft melk een cariogeen effect?',
          opts: ['Juist – melk bevat lactose dat cariogeen is', 'Onjuist – melk heeft geen cariogeen effect'],
          exp: 'Melk bevat lactose, een vergistbare suiker die bij frequent contact met het gebit caries kan veroorzaken.'
        },
        {
          q: 'Waar bevindt de insteekplaats voor mandibulaire anesthesie bij kinderen zich ten opzichte van volwassenen?',
          opts: ['Hoger dan bij volwassenen', 'Lager dan bij volwassenen'],
          exp: 'Bij kinderen ligt het foramen mandibulare relatief hoger dan bij volwassenen, waardoor hoger wordt ingespoten.'
        },
        {
          q: 'Wat is de kans op een goede uitkomst van een pulpotomie bij een melkelement met irreversibele pulpitis?',
          opts: ['Circa 30%', 'Circa 15%'],
          exp: 'Bij irreversibele pulpitis van een melkelement bedraagt het slagingspercentage van een pulpotomie circa 30%.'
        },
        {
          q: 'Zijn kaasmolaren (MIH) vatbaarder voor caries?',
          opts: ['Ja, meer vatbaar voor caries', 'Nee, minder vatbaar'],
          exp: 'Het poreuze, hypomineraliseerde glazuur van MIH-elementen maakt ze aanzienlijk cariesgevoeliger.'
        },
        {
          q: 'Welk melkelement is het belangrijkst voor behoud van de gebitsontwikkeling?',
          opts: ['Tweede ondermelkmolaar', 'Tweede bovenmelkmolaar'],
          exp: 'De tweede ondermelkmolaar fungeert als ruimtebewaker voor de blijvende premolaar en eerste molaar.'
        },
        {
          q: 'Wat is de maximale fluorideconcentratie in vrij verkrijgbare tandpasta voor kinderen tot 4 jaar in Nederland?',
          opts: ['750 ppm', '250 ppm'],
          exp: 'In Nederland mag vrij verkrijgbare tandpasta voor kinderen tot 4 jaar maximaal 750 ppm fluoride bevatten.'
        },
      ]
    },

    pedo_cikmis_4: {
      title: 'Pedodontologie Cikmis – Set 4: Behandeling, Fluoride & Gedrag',
      questions: [
        {
          q: 'Leidt niet-restauratieve cariesbehandeling (NRCT) tot betere mondhygiene?',
          opts: ['Juist', 'Onjuist'],
          exp: 'NRCT omvat tandenpoetsinstructie en dieetadvisering waardoor de mondhygiene aantoonbaar verbetert.'
        },
        {
          q: 'Is de Hall-techniek voor melkmolaren voorspelbaar?',
          opts: ['Voorspelbaar', 'Onvoorspelbaar'],
          exp: 'De Hall-techniek heeft een hoge en voorspelbare slagingskans voor melkmolaren in de literatuur aangetoond.'
        },
        {
          q: 'Wat is de vaakste complicatie van anesthesie bij kinderen?',
          opts: ['Lip-bijtring na de behandeling', 'Overdosering van het anestheticum'],
          exp: 'Kinderen bijten na anesthesie onbewust op hun verdoofde lip, wat leidt tot wondjes (lip-bijtring).'
        },
        {
          q: 'Is de effectiviteit van niet-restauratieve cariesbehandeling (NRCT) wetenschappelijk aangetoond?',
          opts: ['Juist', 'Onjuist'],
          exp: 'NRCT is wetenschappelijk onderbouwd als effectieve benadering voor cariesletsels bij kinderen met een hoog risico.'
        },
        {
          q: 'Een kind poet st goed maar heeft toch een caviteit. Wat is de aangewezen aanpak?',
          opts: ['Geen invasieve restauratie (NRCT-aanpak)', 'Directe invasieve restauratie'],
          exp: 'Bij goede mondhygiene en cariesstop door NRCT-maatregelen is een invasieve restauratie niet altijd noodzakelijk.'
        },
        {
          q: 'Hoe vaak per jaar wordt zilverdiaminefluoride (ZDF) aangebracht?',
          opts: ['2x per jaar', '5x per jaar'],
          exp: 'De aanbevolen applicatiefrequentie van 38% zilverdiaminefluoride is tweemaal per jaar voor optimale cariesremming.'
        },
        {
          q: 'Kinderen van ouders met angst voor de tandarts hebben vaker een slecht gebit.',
          opts: ['Juist', 'Onjuist'],
          exp: 'Ouderlijke tandartsangst leidt tot vermijdingsgedrag en minder tandheelkundige zorg voor het kind, wat het gebit schaadt.'
        },
        {
          q: 'Wanneer moet het eerste tandartsbezoek van een kind plaatsvinden?',
          opts: ['Wanneer de eerste melktand doorbreekt', 'Op 4-jarige leeftijd'],
          exp: 'Het eerste tandartsbezoek wordt aanbevolen zodra de eerste melktand doorbreekt voor preventie en gewenning.'
        },
        {
          q: 'Wat is de definitie van een angststoornis?',
          opts: ['Angst zonder duidelijke reden die het sociaal functioneren belemmert', 'Angst met een specifieke reden in een specifieke situatie'],
          exp: 'Een angststoornis onderscheidt zich van normale angst doordat de angst irrationeel is en het dagelijks leven verstoort.'
        },
        {
          q: 'Een kind van 7 jaar kan prima zelfstandig tandenpoetsen.',
          opts: ['Onjuist', 'Juist'],
          exp: 'Kinderen hebben door onvoldoende fijne motoriek tot circa 10 jaar hulp of controle bij het poetsen nodig.'
        },
        {
          q: 'Wat is shaping in de kindertandheelkunde?',
          opts: ['Behandeling in kleine stappen opbouwen', 'Negatief gedrag afremmen via straf'],
          exp: 'Shaping is een gedragstechniek waarbij de behandeling stapsgewijs wordt opgebouwd zodat het kind went aan elke stap.'
        },
        {
          q: 'Wat is operante conditionering?',
          opts: ['Leren door gevolgen van het eigen gedrag (beloning/straf)', 'Alleen effectief als het kind meteen meewerkt'],
          exp: 'Operante conditionering berust op het principe dat gedrag toeneemt bij beloning en afneemt bij straf of gebrek aan beloning.'
        },
        {
          q: 'Waarom huilt een kind tijdens het eerste tandartsbezoek?',
          opts: ['Angst voor het onbekende', 'Kiespijn'],
          exp: 'Huilen bij het eerste bezoek is vrijwel altijd gebaseerd op angst voor de onbekende situatie, niet op pijn.'
        },
        {
          q: 'Beschermt fluoride tegen tandslij tage?',
          opts: ['Onjuist – fluoride beschermt niet tegen slijtage', 'Juist – fluoride beschermt ook tegen slijtage'],
          exp: 'Fluoride werkt remineralisering en cariespreventie, maar biedt geen bescherming tegen mechanische of erosieve slijtage.'
        },
        {
          q: 'Welk effect heeft 38% zilverdiaminefluoride (ZDF) op een carieslaesie?',
          opts: ['De laesie verkleurt donker/zwart', 'De tand wordt gevoelig'],
          exp: 'Zilverdiaminefluoride stopt caries maar veroorzaakt altijd een donkere/zwarte verkleuring van de behandelde laesie.'
        },
      ]
    },

  };
  window.QUIZZES = Object.assign(window.QUIZZES || {}, sets);
})();
