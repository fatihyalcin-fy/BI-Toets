(function () {
  var sets = {

    endo_cikmis_1: {
      title: 'Endodontologie Çıkmış – Set 1: Diagnose & Pulpa',
      questions: [
        {
          q: 'NaOCl oplossing kan de smeerlaag (smear layer) oplossen. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'NaOCl lost organisch weefsel op maar NIET de smeerlaag; daarvoor is EDTA nodig.'
        },
        {
          q: 'Bij gevoelige tandhalzen wat is de voorkeursmethode voor behandeling?',
          opts: ['Tubulusingang blokkeren', 'Vitale inhoud dentinetubuli denatureren'],
          exp: 'Voorkeur: tubulusingang blokkeren (bijv. met fluoride of dentinebondingsystemen).'
        },
        {
          q: 'Voor reversibele pulpitis kies je pulpotomie. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Bij reversibele pulpitis is indirecte pulpa-overkapping geïndiceerd, niet pulpotomie.'
        },
        {
          q: 'Als het wortelkanaal niet steriel is, geef je een antibioticakuur. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Systemische antibiotica zijn niet geïndiceerd voor een niet-steriel kanaal; lokale desinfectie (CaOH) is de aanpak.'
        },
        {
          q: 'Element 47 is licht percussiegevoelig, niet sensibel, met verbreding van de paro-spleet. Wat is de diagnose?',
          opts: ['Niet-pijnlijke parodontitis apicalis', 'Niet-pijnlijke irreversibele pulpitis'],
          exp: 'Negatieve sensibiliteitstest + verbreding paro-spleet wijst op parodontitis apicalis (pulpanecrose).'
        },
        {
          q: 'Element 21 heeft een open apex (diameter 3 mm) en een necrotische pulpa na trauma. Welke behandeling kies je?',
          opts: ['Apexificatie', 'Apexresectie'],
          exp: 'Bij open apex met necrotische pulpa is apexificatie (bijv. MTA of CaOH) de eerste keus.'
        },
        {
          q: 'Duaal uithardend composietcement voor een glasvezelstift is de voorkeur vanwege compatibiliteit. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Duaal uithardend cement garandeert volledige polymerisatie diep in het kanaal, compatibel met glasvezelstiften.'
        },
        {
          q: 'Wat is de kans op genezing na kanaalbehandeling bij een apicale pocketcyste?',
          opts: ['Klein', 'Groot'],
          exp: 'Een ware (pocket)cyste geneest niet spontaan na WKB; chirurgische verwijdering is vaak nodig.'
        },
        {
          q: 'Wat is de juiste methode voor eindgrens-bepaling bij pijnlijke parodontitis apicalis?',
          opts: ['Elektronische lengtemeter + röntgencontrole', 'Vijl 4 mm korter instellen + schuine foto'],
          exp: 'Elektronische lengtemeter gecombineerd met röntgencontrole geeft de meest betrouwbare eindgrens.'
        },
        {
          q: 'Bij een meerkanalig element zijn meerdere lengtefoto\'s uit verschillende richtingen nodig. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Verschillende hoeken vermijden superimposatie en tonen afzonderlijke kanalen betrouwbaar.'
        },
        {
          q: 'Bij een onvolledige kroonfractuur neemt de pijn toe bij kauwen. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Kauwdruk opent de fractuurlijn en veroorzaakt scherpe pijn; karakteristiek voor cracked tooth.'
        },
        {
          q: 'Een ledge in het wortelkanaal wordt gevormd door:',
          opts: ['Pulpakamer niet goed geopend', 'EDTA niet gebruiken'],
          exp: 'Onvoldoende rechttrekken van de coronale toegang dwingt vijlen tegen de kanaalmuur, wat een ledge veroorzaakt.'
        },
        {
          q: 'De koudtest wordt bij voorkeur geplaatst op:',
          opts: ['Glazuur', 'Restauratie'],
          exp: 'Glazuur geleidt temperatuurprikkels het meest direct naar de pulpa voor een betrouwbare respons.'
        },
        {
          q: 'Bij elektrische lengtebepaling mag geen metalen rubberdam-klem worden gebruikt vanwege meetfouten. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Meetfouten door een metalen klem zijn acceptabel; een rubberdam-klem mag worden gebruikt.'
        },
        {
          q: 'Aanwezigheid van pijn vóór de behandeling verhoogt de kans op napijn na de definitieve vulling. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Pre-operatieve pijn is een bewezen risicofactor voor post-operatieve (na)pijn na WKB.'
        },
      ]
    },

    endo_cikmis_2: {
      title: 'Endodontologie Çıkmış – Set 2: Pulpitis & Techniek',
      questions: [
        {
          q: 'Bij een cracked tooth met vitale pulpa neemt de pijn toe als de kauwdruk wegvalt. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Het wegvallen van druk opent de fractuurlijn plotseling, wat een scherpe pijnprikkel geeft.'
        },
        {
          q: 'Bij latexallergie kies je voor welk alternatief voor de rubberdam?',
          opts: ['Cofferdam van silicone', 'Geen guttapercha gebruiken'],
          exp: 'Silicone rubberdam is het standaard alternatief bij latexallergie.'
        },
        {
          q: 'Waarvoor wordt ultrageluid bij wortelkanaalbehandeling (WKB) primair gebruikt?',
          opts: ['Irrigatie', 'Preparatie'],
          exp: 'Passieve ultrasone irrigatie (PUI) verbetert de distributie en werking van irrigatievloeistoffen.'
        },
        {
          q: 'Bij WKB in meerdere zittingen gebruik je tussentijds CaOH als medicament plus een tijdelijke vulling. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'CaOH tussentijds vermindert bacteriële belasting; hermetische tijdelijke afdichting voorkomt herbesmetting.'
        },
        {
          q: 'Vergelijk de overlevingskans van de pulpa na luxatie versus horizontale wortelfractuur:',
          opts: ['Kleiner na luxatie', 'Groter na luxatie'],
          exp: 'Luxatie beschadigt de apicale vaatsteel ernstiger dan een horizontale wortelfractuur.'
        },
        {
          q: 'Dichtgroeien van wortelkanalen is synoniem voor:',
          opts: ['Obliteratie', 'Apicale constrictie'],
          exp: 'Obliteratie = pulpale calcificatie waarbij het kanaal geheel of gedeeltelijk verdwijnt.'
        },
        {
          q: 'Na een wortelkanalbehandeling is wortelcement doorgeperst en is er hevige pijn na 24 uur. Wat is de eerste keus?',
          opts: ['Pijnstillers en afwachten', 'Directe chirurgie'],
          exp: 'Doorgeperst cement lost meestal spontaan op; pijnstillers zijn afdoende in de acute fase.'
        },
        {
          q: 'Een apicaal litteken is periapicaal ontstekingsweefsel dat vervangen is door celarm bindweefsel. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Apicaal litteken = celarm fibrotisch weefsel, röntgenologisch zichtbaar als persisterende maar stabiele radiolucentie.'
        },
        {
          q: 'Bij pulpa-amputatie wordt verbandmateriaal aangebracht nadat het geïnfecteerde pulpadeel verwijderd is. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Na verwijdering van het geïnfecteerde coronale pulpadeel wordt MTA of CaOH als verbandmateriaal geplaatst.'
        },
        {
          q: 'Tertiair dentine leidt tot afname van de toegang voor bacteriën vanuit caries. Dit is:',
          opts: ['Afname van toegang voor bacteriën', 'Toename van doorlaatbaarheid'],
          exp: 'Tertiair (reparatief) dentine vormt een extra barrière tegen bacteriële penetratie richting pulpa.'
        },
        {
          q: 'Na WKB kan celarm bindweefsel op röntgen zichtbaar zijn als scherpe radiolucentie met onregelmatige omtrek bij element 12. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Een apicaal litteken (celarm bindweefsel) kan persisteren als radiolucentie ondanks geslaagde WKB.'
        },
        {
          q: 'De grootste diameter van het kanaal van de bovenincisief ligt in welke richting?',
          opts: ['Bukkolinguaal', 'Mesiodistaal'],
          exp: 'Bovenincisieven hebben een ovaal kanaal met de grootste diameter bukkopalatinaal/bukkolinguaal.'
        },
        {
          q: 'Bij DETI-score "slecht" op één criterium moet je:',
          opts: ['Het CEB-formulier invullen (DETI B)', 'DETI-score A toekennen'],
          exp: 'Eén slechte deelscore geeft DETI B, waarvoor het CEB (complexiteitsevaluatieformulier) ingevuld dient te worden.'
        },
        {
          q: 'De kans op doorpersen van cement is het grootst bij welke vultechniek?',
          opts: ['Warme verticale compactie', 'Laterale compactie'],
          exp: 'Thermoplastisch guttapercha bij warme technieken heeft meer vloeibaarheid en drukt makkelijker door het foramen.'
        },
        {
          q: 'Uitgebreide ontstekingsgebieden in de pulpa gaan vrijwel altijd gepaard met pijn. Dit is:',
          opts: ['Vrijwel altijd pijn aanwezig', 'Uitgebreide ontsteking kan pijnloos verlopen'],
          exp: 'Uitgebreide pulpaire ontsteking veroorzaakt vrijwel altijd klinisch pijn.'
        },
      ]
    },

    endo_cikmis_3: {
      title: 'Endodontologie Çıkmış – Set 3: Fistel, Resorptie & Materialen',
      questions: [
        {
          q: 'Een door een fistel veroorzaakte pocket vereist paro-behandeling na WKB. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Een endodontisch-veroorzaakte sinustract verdwijnt na succesvolle WKB zonder aparte paro-behandeling.'
        },
        {
          q: 'Obliteratie na laterale luxatie leidt tot welke kleur van de tand?',
          opts: ['Gele verkleuring', 'Grijze verkleuring'],
          exp: 'Obliteratie/calcificatie geeft een gele verkleuring; grijs wijst op pulpanecrose.'
        },
        {
          q: 'Wat is het kenmerk van de koudtest bij irreversibele pulpitis?',
          opts: ['Pijn houdt aan na verwijdering van de kou', 'Scherpe heftige pijn die direct ophoudt'],
          exp: 'Aanhouding van de pijn na wegname van de stimulus is het klassieke teken van irreversibele pulpitis.'
        },
        {
          q: 'Als een laesie tot de pulpa reikt zonder expositie, dan is de pulpa irreversibel ontstoken. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Bij diepe laesie tot aan de pulpa is reversibel herstel niet meer realistisch; irreversibele pulpitis is te verwachten.'
        },
        {
          q: 'De endodontische opening van een bovenmolaar ligt ten opzichte van de pulpakamervloer:',
          opts: ['Iets mesiaal en vestibulair', 'Iets distaal en palatinaal'],
          exp: 'De toegangsopening van bovenmolaren wordt iets mesiaal en vestibulair van het midden van de kroon geplaatst.'
        },
        {
          q: 'De Flexofile heeft:',
          opts: ['Een niet-snijdende punt (blunt tip)', 'Een snijdende punt'],
          exp: 'De Flexofile heeft een veilige, niet-snijdende punt om transportatie en perforatie te voorkomen.'
        },
        {
          q: 'Bij directe pulpa-overkapping is het belangrijk dat er een bloedstolsel tussen het verbandmateriaal en de pulpa zit. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Bij directe pulpa-overkapping moet de wond droog zijn; een bloedstolsel verslechtert de hechting van MTA of CaOH.'
        },
        {
          q: 'Bij interne resorptie is de behandeling:',
          opts: ['Pulpectomie en volledige WKB', 'Partiële pulpotomie'],
          exp: 'Interne resorptie vereist volledige verwijdering van de pulpa en hermetische vulling van het kanaal.'
        },
        {
          q: 'Bij een distaal belichte röntgenfoto komt het vestibulair gelegen kanaal meer mesiaal te liggen. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'SLOB-regel: het vestibulair gelegen kanaal verschuift in tegengestelde richting van de buisverplaatsing.'
        },
        {
          q: 'Om de verwerkingstijd van MTA te verlengen, voeg je toe:',
          opts: ['Calciumsulfaat (gips)', 'Bis-GMA'],
          exp: 'Gips (calciumsulfaat) vertraagt de verharding van Portland cement en MTA.'
        },
        {
          q: 'Als bij DETI geen enkel criterium van toepassing is, kent men toe:',
          opts: ['DETI-score A', 'DETI-score B'],
          exp: 'DETI A = geen complicerende factoren; DETI B = minimaal één complicerende factor.'
        },
        {
          q: 'Guttapercha-stiften desinfecteer je het beste met:',
          opts: ['70-80% alcohol', '5% natriumhypochloriet'],
          exp: 'Guttapercha wordt gedesinfecteerd met 70-80% alcohol gedurende 30-60 seconden.'
        },
        {
          q: 'Resorptie van de lamina dura treedt op bij:',
          opts: ['Zowel acute als chronische pulpitis', 'Alleen acute pulpitis'],
          exp: 'Lamina dura-resorptie kan zowel bij acute als bij chronische periapicale ontsteking optreden.'
        },
        {
          q: 'Wat is de voorwaarde voor het vullen van een wortelkanaal?',
          opts: ['Afwezigheid van exsudaatafvloed', 'Afwezigheid van pijn'],
          exp: 'Het kanaal mag pas gevuld worden als er geen exsudaat meer afvloeit; pijn alléén is geen absolute contra-indicatie.'
        },
        {
          q: 'Bij allergie voor epoxyhars, welk kanaalcement kies je?',
          opts: ['Roekoseal (silicoon-basis)', 'AH26 (epoxyhars-basis)'],
          exp: 'Roekoseal is op siliconenbasis en bevat geen epoxyhars, geschikt bij epoxyharsallergie.'
        },
      ]
    },

    endo_cikmis_4: {
      title: 'Endodontologie Çıkmış – Set 4: Vultechnieken & Prognose',
      questions: [
        {
          q: 'Welk is een voorbeeld van een warme vultechniek?',
          opts: ['Guttapercha-injectietechniek', 'Stiftsectietechniek'],
          exp: 'De guttapercha-injectietechniek verwarmt de gutta tot het thermoplastisch is; stiftsectie is een koude techniek.'
        },
        {
          q: 'Guttapercha verandert van volume wanneer je het samendumt. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Guttapercha is niet comprimeerbaar; het volume verandert niet bij condensatie.'
        },
        {
          q: 'De meest complicerende factor bij WKB van de bovencuspidaat is:',
          opts: ['Extreme wortellengte', 'Meer dan één kanaal'],
          exp: 'De bovencuspidaat heeft de langste wortel van het gebit, wat preparatie en obturatie bemoeilijkt.'
        },
        {
          q: 'Waarom is het succespercentage van kanaalbehandeling lager bij een grote periapicale laesie?',
          opts: ['Grotere kans op een ware cyste', 'Moeilijkere bacteriële flora in het kanaal'],
          exp: 'Grote laesies bevatten vaker een echte cyste die niet regresseert na WKB.'
        },
        {
          q: 'Radiolucenties bij een verticale wortelfractuur zijn het meest frequent te zien:',
          opts: ['Rond apex én langs de wortel (halovorm)', 'Uitsluitend ter weerszijden van de fractuurlijn'],
          exp: 'Verticale fractuur geeft een kenmerkend halo-patroon van radiolucentie langs de hele wortel.'
        },
        {
          q: 'Waarom is het succespercentage bij WKB met een grote laesie lager vergeleken met kleine laesies?',
          opts: ['Grotere kans op een cyste die niet regresseert', 'Flora in het kanaal is moeilijker te bestrijden'],
          exp: 'Grotere laesies representeren vaker ware cysten die chirurgische interventie nodig hebben.'
        },
        {
          q: 'Periapicale ontsteking veroorzaakt in 80% van de gevallen apicale resorptie. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Periapicale ontsteking gaat in de meerderheid van gevallen gepaard met enige mate van wortelresorptie.'
        },
        {
          q: 'Bij kroonpreparatie van een premolaar zijn welke pulpahoorns het meest in gevaar?',
          opts: ['Vestibulair (buccale) pulpahoorns', 'Palatinale pulpahoorns'],
          exp: 'De buccale pulpahoorn van premolaren staat hoger dan de palatinale en is kwetsbaarder bij kroonpreparatie.'
        },
        {
          q: 'Wat is het klinische beeld van een onvolledige kroonfractuur?',
          opts: ['Licht tot ernstige pijn bij kauwen', 'Geen klachten'],
          exp: 'Kauwdruk opent de fractuurlijn en veroorzaakt kenmerkende scherpe pijn bij cracked tooth.'
        },
        {
          q: 'De kans op vijlbreuk bij roterende NiTi-instrumenten neemt toe in kromme kanalen. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Cyclische vermoeidheid en torsiebelasting nemen toe bij sterke krommingen, wat breuk bevordert.'
        },
        {
          q: 'MTA en nieuwe calciumsilicaatcementen bevatten geen zware metalen. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Nieuwere calciumsilicaatcementen (bijv. Biodentine) zijn ontwikkeld zonder de zware metalen die in Portland cement zitten.'
        },
        {
          q: 'Het apicaal eindpunt bij vitaalextirpatie is:',
          opts: ['0-1 mm voor de röntgenapex', '2-3 mm voor de röntgenapex'],
          exp: 'Bij vitale pulpa prepareer je tot 0-1 mm van de röntgenapex (anatomisch foramen).'
        },
        {
          q: 'De prognose van een wortelkanaalbehandeling wordt het sterkst bepaald door:',
          opts: ['Eindgrens van de vulling', 'Vultechniek'],
          exp: 'Een correcte eindgrens (niet te kort, niet overvuld) is de belangrijkste prognostische factor.'
        },
        {
          q: 'Meebewegen van buurelementen bij de mobiliteitstest is kenmerkend voor:',
          opts: ['Fractuur van de processus alveolaris', 'Horizontale wortelfractuur'],
          exp: 'Bij alveolaire fractuur bewegen meerdere elementen mee als één blok.'
        },
        {
          q: 'Bij een onvolledige knobbelfractuur met vitale pulpa treedt pijn op bij het wegvallen van kauwdruk. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Ontspanning van de fractuurlijn na loslaten van kauwdruk geeft de typische pijnprikkel bij cracked cusp.'
        },
      ]
    },

    endo_cikmis_5: {
      title: 'Endodontologie Çıkmış – Set 5: Trauma & Preparatietechnieken',
      questions: [
        {
          q: 'Vergelijk de overlevingskans van de pulpa na luxatie met extrusie versus intrusie:',
          opts: ['Kleiner na extrusie dan na intrusie', 'Groter na extrusie dan na intrusie'],
          exp: 'Intrusie beschadigt de vaatsteel het zwaarst; extrusie heeft relatief betere prognose, maar beide zijn slechter dan horizontale fractuur.'
        },
        {
          q: 'Gips toevoegen aan MTA vertraagt de verharding. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Calciumsulfaat (gips) remt de hydratatiekinetiek van calciumsilicaten en verlengt zo de verwerkingstijd.'
        },
        {
          q: 'Waarom is het succespercentage van WKB lager bij een grote periapicale laesie?',
          opts: ['Micro-organismen in dentinetubuli zijn moeilijker te bereiken', 'De bacteriële flora is anders'],
          exp: 'Grotere laesies gaan vaker gepaard met bacteriële invasie in dentinetubuli buiten het kanaal.'
        },
        {
          q: 'Wat is het voornaamste voordeel van de crown-down/step-down preparatietechniek?',
          opts: ['Voorkomen van persing van geïnfecteerde inhoud naar apicaal', 'Coronaal weefsel besparen'],
          exp: 'Crown-down verwijdert eerst de coronale infectie, waardoor minder geïnfecteerd debris apicaal gedrukt wordt.'
        },
        {
          q: 'In welke wortel van de eerste bovenmolaar komen twee kanalen het meest frequent voor?',
          opts: ['Mesiobuccale wortel', 'Distobuccale wortel'],
          exp: 'De mesiobuccale wortel bevat in 60-70% van de gevallen twee kanalen (MB1 en MB2).'
        },
        {
          q: 'Steriele pulpanecrose kan het gevolg zijn van:',
          opts: ['Thermisch trauma', 'Blootliggend dentine door fractuur'],
          exp: 'Thermisch trauma (bijv. overmatige warmteontwikkeling bij preparatie) kan pulpanecrose veroorzaken zonder bacteriële infectie.'
        },
        {
          q: 'Portland cement en MTA hebben een verhardingstijd die vertraagd wordt door gips. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Gips vertraagt de setting van Portland cement en MTA door competitie met de hydratatieproducten.'
        },
        {
          q: 'Het instrument bij passieve ultrasone irrigatie (PUI) is vergeleken met de mastervijl:',
          opts: ['Duidelijk dunner dan de mastervijl', 'Gelijk aan de mastervijl'],
          exp: 'PUI-instrumenten zijn bewust kleiner (bijv. ISO 15-20) dan de mastervijl om vrije resonantie in het kanaal te garanderen.'
        },
        {
          q: 'Bij latexallergie gebruik je een rubberdam van silicone. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Silicone rubberdam is het veilige alternatief voor latexallergische patiënten.'
        },
        {
          q: 'Bij pulpa-expositie door caries bij een onvolgroeide wortel kies je voor:',
          opts: ['Pulpa vitaal houden (pulpotomie/overkapping)', 'Zo volledig mogelijk extirperen'],
          exp: 'Bij een onvolgroeide wortel is wortelontwikkeling (apexogenese) het doel; pulpa vitaal houden is essentieel.'
        },
        {
          q: 'Periapicale ontsteking leidt in 80% van de gevallen tot:',
          opts: ['Apicale resorptie', 'Apicale hypercementose'],
          exp: 'Apicale resorptie is de meest voorkomende radiologische bevinding bij periapicale ontsteking.'
        },
        {
          q: 'Na endodontische behandeling waarbij de randcrista doorbroken is, is de beste restauratie:',
          opts: ['Knobbels overkappen met een kroon of onlay', 'Directe restauratie zonder stift palatinaal'],
          exp: 'Doorbroken marginale crista verhoogt het fractuurrisico; overkapping van knobbels is dan aangewezen.'
        },
        {
          q: 'Bij DETI-beoordeling met wortelresorptie met perforatie is de score:',
          opts: ['DETI B', 'DETI A'],
          exp: 'Wortelresorptie met perforatie is een complicerende factor die DETI B geeft.'
        },
        {
          q: 'Bij kroonpreparatie van premolaren is het grootste risico aan welke pulpahoorns?',
          opts: ['Buccale pulpahoorns', 'Palatinale pulpahoorns', 'Beide pulpahoorns gelijk', 'Geen risico'],
          exp: 'De buccale pulpahoorn van premolaren staat hoger en is meer in gevaar bij kroonpreparatie.'
        },
        {
          q: 'Het succes van directe pulpa-overkapping op de lange termijn is afhankelijk van een hermetisch afsluitend vulmateriaal. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Een waterdichte restauratie bovenop het verbandmateriaal voorkomt microlekkage en herbesmetting van de pulpa.'
        },
      ]
    },

    endo_cikmis_6: {
      title: 'Endodontologie Çıkmış – Set 6: MTA, Cement & Diagnose',
      questions: [
        {
          q: 'Welk type zenuw geeft voornamelijk de doffe, zeurende pijn in een tand?',
          opts: ['C-zenuwvezels', 'A-delta-zenuwvezels'],
          exp: 'C-vezels (ongemyeliniseerd) geven diepe, zeurende pijn; A-delta-vezels geven scherpe, kortdurende pijn.'
        },
        {
          q: 'Preparatie van dentine voor een volledige kroon brengt altijd letsel toe aan de pulpa. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Elke dentinepreparatie veroorzaakt enige pulpale reactie; de mate hangt af van resterende dentinedikte en koeling.'
        },
        {
          q: 'Wat veroorzaakt de grijze verkleuring bij gebruik van MTA?',
          opts: ['Bismutoxide', 'Aluminiumferriet'],
          exp: 'Bismutoxide is toegevoegd als röntgenopacifier en is verantwoordelijk voor de grijze verkleuring van traditioneel MTA.'
        },
        {
          q: 'Het grootste verschil tussen Portland cement en MTA is:',
          opts: ['Toevoeging van bismutoxide voor radiopaciteit in MTA', 'Toevoeging van tetra-calcium-aluminoferriet'],
          exp: 'MTA = Portland cement + bismutoxide (radiopacifier). De basische calciumsilicaatsamenstelling is vergelijkbaar.'
        },
        {
          q: 'Portland cement en MTA worden vertraagd in verharden door gips. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Gips vertraagt de hydratatie van calciumsilicaten, wat de verwerkingstijd van MTA en Portland cement verlengt.'
        },
        {
          q: 'Na endodontische behandeling is de beste manier om de kanaaluitgang af te dekken en lekkage te voorkomen:',
          opts: ['Glasionomeercement', 'MTA'],
          exp: 'Glasionomeer als interne afdichting vlak voor de definitieve restauratie voorkomt coronal microleakage.'
        },
        {
          q: 'EDTA lost de smeerlaag op. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'EDTA chelateert calcium uit de anorganische dentinematrix en verwijdert zo de smeerlaag; NaOCl kan dit niet.'
        },
        {
          q: 'Naast guttapercha is het belangrijkste bestanddeel van guttapercha-stiften:',
          opts: ['Zinkoxide', 'Bismutoxide'],
          exp: 'Guttapercha-stiften bestaan voor ~75% uit zinkoxide als vulstof en ~20% uit gutta-percha.'
        },
        {
          q: 'De stiftsectietechniek bij guttapercha is een:',
          opts: ['Koude vultechniek', 'Warme vultechniek'],
          exp: 'Stiftsectie gebruikt koude laterale condensatie; guttapercha-injectie of Thermafil zijn warme technieken.'
        },
        {
          q: 'Guttapercha-stiften kun je het beste desinfecteren met:',
          opts: ['70-80% alcohol', '5% NaOCl'],
          exp: 'Alcohol desinfecteert guttapercha effectief zonder de structuur aan te tasten; NaOCl kan de stift beschadigen.'
        },
        {
          q: 'Bij laterale compactie met een spreader verandert het volume van guttapercha. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Guttapercha is niet comprimeerbaar; volume verandert niet, er ontstaat slechts een ruimte voor de volgende stift.'
        },
        {
          q: 'Externe wortelresorptie bij bovenincisief met perforatie valt in welke DETI-klasse?',
          opts: ['DETI B', 'DETI A'],
          exp: 'Externe resorptie met perforatie is een complicerende factor → DETI B → CEB-formulier invullen.'
        },
        {
          q: 'Irreversibele pulpitis kenmerkt zich door een verhoogde én langdurige respons op de koudtest. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Bij irreversibele pulpitis is de koudpijnrespons heviger en houdt aan na wegname van de stimulus.'
        },
        {
          q: 'Alleen bij acute pulpitis treedt resorptie van de lamina dura op. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Lamina dura-resorptie kan zowel bij acute als chronische periapicale ontsteking optreden.'
        },
        {
          q: 'Apicale resorptie wordt veroorzaakt door 80% van de gevallen van parodontitis apicalis. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'De meerderheid van periapicale ontstekingsprocessen leidt tot enige mate van apicale wortelresorptie.'
        },
      ]
    },

    endo_cikmis_7: {
      title: 'Endodontologie Çıkmış – Set 7: Biofilm, Diagnose & Stiften',
      questions: [
        {
          q: 'Wat is een kenmerk van biofilm in het wortelkanaal?',
          opts: ['Door slijmomhulsel minder gevoelig voor antimicrobiële middelen', 'Spoorvorming geeft resistentie', 'Co-aggregatie loskoppeling kanaalmuur', 'Biofilm heeft geen speciale weerstand'],
          exp: 'Het slijmomhulsel (matrix) van biofilm beschermt bacteriën tegen irrigantia en antimicrobiële middelen.'
        },
        {
          q: 'Element 47 is licht percussiegevoelig, niet sensibel, met verbreding van de paro-spleet. Wat is de diagnose?',
          opts: ['Niet-pijnlijke parodontitis apicalis', 'Niet-pijnlijke irreversibele pulpitis'],
          exp: 'Negatieve sensibiliteitstest en verbreding parodontaal ligament = pulpanecrose met parodontitis apicalis.'
        },
        {
          q: 'Bij cracked tooth treedt pijn op bij het wegvallen van de kauwdruk. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Loslaten van druk opent de fractuurlijn en stimuleert intradentale zenuwvezels.'
        },
        {
          q: 'Wat beschrijft centrale sensitisatie bij chronische pijn na WKB?',
          opts: ['Pijn lijkt uit een groter gebied te komen dan de behandelde tand', 'Napijn na WKB die verdwijnt na 48 uur'],
          exp: 'Centrale sensitisatie = verhoogde gevoeligheid van het centrale zenuwstelsel, waardoor pijn ruimer wordt beleefd.'
        },
        {
          q: 'Het primaire doel van endodontische behandeling is het verwijderen of verminderen van de microbiële biofilm. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Eliminatie van de microbiële infectie (biofilm) uit het kanaalsysteem is het fundamentele doel van WKB.'
        },
        {
          q: 'Waarom is de bovencuspidaat moeilijk endodontisch te behandelen?',
          opts: ['Extreme wortellengte', 'C-vormig kanaal'],
          exp: 'De bovencuspidaat heeft de langste wortel, wat toegang en werklengte-bepaling bemoeilijkt.'
        },
        {
          q: 'Als de pulpa gedeeltelijk vitaal is, is vitale pulpa-amputatie (pulpotomie) geïndiceerd. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Bij gedeeltelijk vitale pulpa is volledige WKB (pulpectomie) geïndiceerd, niet alleen pulpotomie.'
        },
        {
          q: 'Voor obturatie van dunne, sterk gekromde kanalen (30 graden) is de voorkeur:',
          opts: ['35.04 of 30.06 (flexibeler profiel)', '25.06 (grotere coniciteit)'],
          exp: 'Kleinere masterpoint met geringere coniciteit is flexibeler en volgt de kromming beter.'
        },
        {
          q: 'Waarom wordt het kanaal geprepareerd tot maat 35 of 40?',
          opts: ['Om NaOCl tot aan het apex te laten bereiken (irrigatie-effectiviteit)', 'Puur voor mechanische reiniging'],
          exp: 'Grotere preparatiemaat laat irrigatienaald dieper plaatsen, wat apicale irrigatiedistributie verbetert.'
        },
        {
          q: 'Wat is de beste irrigatiestrategie bij WKB?',
          opts: ['Combinatie ultrasonische irrigatie en handirrigatie', 'Alleen handirrigatie'],
          exp: 'PUI in combinatie met handirrigatie verbeteren bereik en werking van irrigantia significant.'
        },
        {
          q: 'Pijn vóór de behandeling verhoogt de kans op napijn na WKB met:',
          opts: ['20-40%', '3-5%'],
          exp: 'Pre-operatieve pijn is een sterke predictor voor post-operatieve napijn; kans stijgt tot 20-40%.'
        },
        {
          q: 'Waar is het hechtingsoppervlak bij stiftopbouw het zwakst?',
          opts: ['Composiet–wortelwandinterface', 'Stift–composietinterface'],
          exp: 'De binding tussen composiet en dentine van de wortelwand is de zwakste schakel bij stiftopbouw.'
        },
        {
          q: 'Duaal uithardend composietcement is geschikt voor glasvezelstiften. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Duaal hardend cement polymeriseert ook zonder lichtbereik diep in het kanaal, ideaal voor glasvezelstiften.'
        },
        {
          q: 'Wat is de meest voorkomende complicatie bij metalen stiften?',
          opts: ['Loskomen van de stift', 'Fractuur van de stift'],
          exp: 'Metalen stiften komen vaker los door cementfalen dan dat ze breken.'
        },
        {
          q: 'Hoe sluit je het kanaal af bij WKB in twee zittingen (ACTA-protocol)?',
          opts: ['Afsluiten zonder medicament met glasionomeercement', 'Afsluiten met calciumhydroxide', 'Open laten', 'Antibiotica oraal'],
          exp: 'ACTA-protocol: kanaal afsluiten met glasionomeer (zonder tussentijds medicament) na de eerste zitting.'
        },
      ]
    },

    endo_cikmis_8: {
      title: 'Endodontologie Çıkmış – Set 8: Trauma & Wortelfracturen',
      questions: [
        {
          q: 'Steriele pulpanecrose kan het gevolg zijn van:',
          opts: ['Thermisch trauma', 'Carieslaesie'],
          exp: 'Thermisch trauma (overkapping, slijpen) kan pulpanecrose veroorzaken zonder bacteriële infectie.'
        },
        {
          q: 'Bij een geïnfecteerde horizontale wortelfractuur is de radiolucentie zichtbaar:',
          opts: ['Ter weerszijden van de fractuurlijn', 'Alleen rond de apex'],
          exp: 'Infectie van het fractuurgebied toont radiolucentie rondom de fractuurlijn, niet uitsluitend apicaal.'
        },
        {
          q: 'Na laterale luxatie kan de sensibiliteit na 6-12 maanden terugkeren. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Revascularisatie kan optreden na laterale luxatie, met herstel van sensibiliteitsrespons binnen 6-12 maanden.'
        },
        {
          q: 'Bij element 21 met open apex (3 mm) en necrotische pulpa na trauma kies je voor:',
          opts: ['Apexificatie', 'Apexresectie'],
          exp: 'Apexificatie (MTA of CaOH) creëert een apicale stop zodat het kanaal later adequaat gevuld kan worden.'
        },
        {
          q: 'De overlevingskans van de pulpa na luxatie is kleiner dan na horizontale wortelfractuur. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Bij luxatie wordt de apicale vaatsteel zwaarder beschadigd dan bij een horizontale wortelfractuur.'
        },
        {
          q: 'Obliteratie na traumatische luxatie leidt tot welke kleur?',
          opts: ['Gele verkleuring', 'Grijze verkleuring'],
          exp: 'Obliteratie (calcificatie) geeft een gele tint; grijs wijst op pulpanecrose en bloedafbraakproducten.'
        },
        {
          q: 'Steriele necrose kan optreden door mechanisch trauma. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Mechanisch trauma (bijv. avulsie, luxatie) kan de vaatsteel afscheuren en steriele necrose induceren.'
        },
        {
          q: 'Bij een avulsie van een element met niet-afgesloten apex dat 1 uur na trauma wordt gereplanteeerd, kies je voor:',
          opts: ['Revascularisatie afwachten', 'Apexificatie binnen 2 weken starten'],
          exp: 'Open apex en relatief korte extraorale tijd: revascularisatie is mogelijk; WKB pas starten als necrose bewezen is.'
        },
        {
          q: 'Luxatie met extrusie geeft een grotere kans op pulpaoverleving dan luxatie met intrusie. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Intrusie veroorzaakt de zwaarste vasculaire schade en heeft de slechtste pulpaprognose.'
        },
        {
          q: 'Een endodontische pocket onderscheidt zich van een parodontale pocket door:',
          opts: ['Smalle begrenzing (smal, diep traject)', 'Coronaal wijdere opening'],
          exp: 'Een sinustract vanuit endodontische oorsprong is smal en diep; een paro-pocket is bredere, meer horizontale defect.'
        },
        {
          q: 'Na laterale luxatie kan de pulpa soms niet reageren, maar later herstellen. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Tijdelijke uitval van sensibiliteitsrespons na laterale luxatie sluit revascularisatie niet uit.'
        },
        {
          q: 'NaOCl-accidenten treden het meest frequent op bij:',
          opts: ['Irrigatienaald vastgeklemd in kanaal', 'Open apex'],
          exp: 'Een vastgelopen irrigatienaald zorgt voor drukopbouw en geforceerde extrusie van NaOCl periapicaal.'
        },
        {
          q: 'Bij pijnlijke parodontitis apicalis is het correct om de vijl 4 mm korter in te stellen en een schuine foto te nemen. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Bij pijnlijke paro apicalis is elektronische lengtebepaling + röntgencontrole de betrouwbaardere methode.'
        },
        {
          q: 'Voorafgemeten paperpoints gebruiken helpt om overpreparatie te voorkomen. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Paperpoints ingesteld op de werkhoogte detecteren exsudaat en voorkomen dat je voorbij de apex werkt.'
        },
        {
          q: 'Wat is de overlevingskans van de pulpa na horizontale wortelfractuur vergeleken met luxatie?',
          opts: ['Groter na horizontale wortelfractuur', 'Kleiner na horizontale wortelfractuur'],
          exp: 'Bij horizontale wortelfractuur blijft de apicale vaatsteel intact, waardoor pulpaoverleving beter is dan bij luxatie.'
        },
      ]
    },

    endo_cikmis_9: {
      title: 'Endodontologie Çıkmış – Set 9: MTA, Instrumenten & Obturatie',
      questions: [
        {
          q: 'Portland cement en MTA worden vertraagd in verharden door gips. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Gips concurreert met de hydratatieproducten en verlengt de verhardingstijd van calciumsilicaatcementen.'
        },
        {
          q: 'Nieuwere calciumsilicaatcementen (niet afgeleid van Portland cement) bevatten geen zware metalen. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Synthetische calciumsilicaatcementen zoals Biodentine zijn vrij van de zware metalen in traditioneel Portland cement.'
        },
        {
          q: 'Na pulpotomie kunnen zowel interne resorptie als obliteratie optreden. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Beide complicaties zijn beschreven na pulpotomie; follow-up is noodzakelijk.'
        },
        {
          q: 'Het doel van WKB is het volledig weghalen van geïnfecteerd dentine. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Het is onmogelijk en niet het doel alle geïnfecteerd dentine te verwijderen; het gaat om reductie van bacteriën tot een aanvaardbaar niveau.'
        },
        {
          q: 'Preventieve behandeling van dens invaginatus bestaat uit:',
          opts: ['Reinigen van de invaginatie en hermetisch afsluiten', 'Frequent licht beslepen om tertiair dentine te stimuleren', 'Spitse knobbel elimineren'],
          exp: 'De invaginatie wordt zo volledig mogelijk gereinigd en afgedicht om bacteriële invasie te voorkomen.'
        },
        {
          q: 'Het risico op vijlbreuk bij roterende NiTi-instrumenten neemt toe wanneer:',
          opts: ['De vijl niet-draaiend wordt ingebracht', 'Er geen smeermiddel wordt gebruikt'],
          exp: 'Een vijl die niet roteert bij inbrengen accumuleert torsiekrachten die direct kunnen leiden tot breuk.'
        },
        {
          q: 'De kans op doorpersen van cement is het grootst bij welke techniek?',
          opts: ['Thermafil (warme techniek)', 'Laterale compactie (koude techniek)'],
          exp: 'Thermafil en andere warme technieken maken guttapercha vloeibaar, wat de kans op apicale extrusie vergroot.'
        },
        {
          q: 'Een doel van wortelkanaalpreparatie is NaOCl tot aan de apex laten werken. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Voldoende preparatiegrootte is nodig om irrigantia tot apicaal te laten penetreren.'
        },
        {
          q: 'Een nadeel van continue ultrasone stroom is dat de effectiviteit afhankelijk is van de coniciteit van het kanaal. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Continue ultrasone stroom werkt minder goed in nauw kanalen; de amplitude van het instrument wordt beperkt door kanaalmuren.'
        },
        {
          q: 'Een apicaal litteken bestaat uit corticaal bot dat periapicale ontsteking vervangt. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Een apicaal litteken bestaat uit celarm bindweefsel (fibrose), niet uit bot; het is röntgenologisch zichtbaar als persisterende radiolucentie.'
        },
        {
          q: 'Na endodontische behandeling waarbij de marginale crista is doorbroken, moeten de knobbels worden overkapat. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Verlies van marginale crista verhoogt het fractuurrisico aanzienlijk; kroon of onlay ter bescherming is nodig.'
        },
        {
          q: 'Een gaaf, niet-sensibel element met periapicale radiolucentie bevat in de pulpaholte:',
          opts: ['Meer dan 10³ bacteriën', 'Geen bacteriën'],
          exp: 'Periapicale radiolucentie bij een niet-sensibele tand duidt op geïnfecteerde pulpanecrose met significante bacteriële belasting.'
        },
        {
          q: 'MTA gemengd met gips verhardt:',
          opts: ['Vertraagd', 'Versneld'],
          exp: 'Gips remt de hydratatiekinetiek van calciumsilicaten, waardoor MTA langer vloeibaar blijft.'
        },
        {
          q: 'DETI A = ongecompliceerd en DETI B = gecompliceerd, waarvoor het CEB-formulier ingevuld moet worden. Juist of Onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'DETI B geeft aan dat er complicerende factoren zijn; het CEB-formulier registreert deze voor verwijzing of specialistische behandeling.'
        },
        {
          q: 'Formocresol leidt tot meer napijn dan calciumhydroxide bij WKB. Juist of Onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Onderzoek toont geen significant verschil in napijn tussen formocresol en calciumhydroxide als tussenmedicament.'
        },
      ]
    },

  };
  window.QUIZZES = Object.assign(window.QUIZZES || {}, sets);
})();
