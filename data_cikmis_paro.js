/* =================================================================
   data_cikmis_paro.js – Parodontologie Cikmis Sorular (6 sets, 90 vragen)
   opts[0] = altijd het JUISTE antwoord. quiz.js shuffelt bij weergave.
   ================================================================= */
(function () {
  var sets = {

    paro_cikmis_1: {
      title: 'Parodontologie Cikmis – Set 1: DPSI & PPS',
      questions: [
        {
          q: 'Wat is het effect van stokers (interdentale borsteltjes) op plaque en bloeding?',
          opts: ['Verminderd plaque en verminderde bloeding', 'Verhoogd plaque en meer bloeding', 'Geen effect op plaque', 'Alleen effect op bloeding'],
          exp: 'Stokers verminderen aantoonbaar zowel plaque als bloeding bij interdentaal gebruik.'
        },
        {
          q: 'Een patient heeft losse tanden met pijn en necrotiserende gingivitis. Meest waarschijnlijke diagnose?',
          opts: ['ANUP (Acute Necrotiserende Ulceratieve Parodontitis)', 'ANUG (Acute Necrotiserende Ulceratieve Gingivitis)', 'Chronische parodontitis', 'Parodontaal abces'],
          exp: 'Losse tanden wijzen op botverlies, wat kenmerkend is voor ANUP en niet voor ANUG.'
        },
        {
          q: 'Een pocket van 12mm wordt behandeld tot 10mm. Daarna SRP tot 6mm restpocket. Is dit voldoende?',
          opts: ['Onvoldoende', 'Voldoende', 'Afhankelijk van BOP', 'Afhankelijk van botdefect'],
          exp: 'Norm: beginpocket/2 + 1mm = 10/2+1 = 6mm. Restpocket van 6mm zit op de grens en is onvoldoende.'
        },
        {
          q: 'Welke bijwerking van chloorhexidine (CHX) treedt op bij langdurig gebruik?',
          opts: ['Zwelling van de parotisklier', 'Dik speeksel', 'Tanden worden losser', 'Verhoogde bloeding'],
          exp: 'Bij langdurig CHX-gebruik is zwelling van de parotidea (speekselklier) beschreven als bijwerking.'
        },
        {
          q: 'Heeft chloorhexidine (CHX) antibacteriele werking?',
          opts: ['Ja', 'Nee', 'Alleen op aeroben', 'Alleen op gram-positieve bacterien'],
          exp: 'CHX is een breed-spectrum antisepticum met bewezen antibacteriele werking.'
        },
        {
          q: 'Welke pocketdiepte hoort bij PPS score 3?',
          opts: ['Meer dan 4mm en maximaal 6mm', 'Meer dan 6mm', 'Minder dan 4mm', 'Precies 4mm'],
          exp: 'PPS 3 = pocketdiepte meer dan 4mm en maximaal 6mm (sondering 3,5-5,5mm = score 2, >5,5mm = score 3 of 4).'
        },
        {
          q: 'Hoeveel procent van de Nederlandse bevolking boven de 50 jaar heeft parodontitis?',
          opts: ['25%', '50%', '10%', '75%'],
          exp: 'Circa 25% van de Nederlanders boven de 50 heeft klinisch relevante parodontitis.'
        },
        {
          q: 'Wat is de beste aanpak bij halitose van orale origine?',
          opts: ['Tongschraper plus mondspoeling', 'Alleen mondspoeling', 'Alleen tandenpoetsen', 'Antibioticakuur'],
          exp: 'Tongschraper verwijdert de bacteriele coating op de tong; gecombineerd met spoelmiddel geeft dit de beste halitosereductie.'
        },
        {
          q: 'Hoe wordt de pocketdiepte correct gemeten?',
          opts: ['Vanaf de rand van de gingiva tot de bodem van de pocket', 'Vanaf de bovenkant van het bot tot de gingivarand', 'Vanaf het diepste punt van het pocketepitheel tot de gingivarand', 'Vanaf de glazuur-cementgrens tot de gingivarand'],
          exp: 'Pocketdiepte = afstand van de gingivarand tot de bodem van de pocket (diepste punt sonde).'
        },
        {
          q: 'Stelling: Bij een plaqueindex onder de 20% hoef je geen mondhygieneinstructie te geven. Juist of onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Onjuist: ook bij plaque <20% geef je instructie op maat, want individuele risicoprofielen vereisen altijd begeleiding.'
        },
        {
          q: 'Wanneer zijn antibiotica (AB) geindiceerd bij parodontitis?',
          opts: ['Na goede mondhygiene en behandeling met onvoldoende aanhechtingswinst', 'Altijd bij diepere pockets', 'Als de patient rookt en geen aanhechtingswinst heeft', 'Bij elke stadium III parodontitis'],
          exp: 'AB zijn geindiceerd na adequate MHI + SRP met onvoldoende aanhechtingswinst, maar niet specifiek vanwege roken.'
        },
        {
          q: 'Wat is de vaakste reden voor falen bij een tand met furcatiebetrokkenheid graad 3?',
          opts: ['Caries', 'Fractuur', 'Parodontitis recidief', 'Occlusaal trauma'],
          exp: 'Furcatie graad 3 (door-en-door) maakt reiniging bijna onmogelijk, wat caries in het furcatiegebied bevordert.'
        },
        {
          q: 'Stelling: Diabetes is bijna nooit gerelateerd aan parodontitis. Juist of onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Onjuist: diabetes en parodontitis hebben een bidirectionele relatie die goed onderbouwd is in de literatuur.'
        },
        {
          q: 'Stelling: Parodontitis en diabetes zijn geassocieerd. Juist of onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Juist: de relatie tussen parodontitis en diabetes (bidirectioneel) is wetenschappelijk aangetoond.'
        },
        {
          q: 'Stelling: P. gingivalis is aanwezig bij zowel gingivitis als parodontitis. Juist of onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Juist: P. gingivalis kan bij beide worden gevonden, maar is sterker geassocieerd met parodontitis dan met gingivitis.'
        }
      ]
    },

    paro_cikmis_2: {
      title: 'Parodontologie Cikmis – Set 2: DPSI scores, diagnose & anatomie',
      questions: [
        {
          q: 'Stelling: Subgingivale kolonisatie met anaerobe gram-negatieve bacterien leidt vrijwel altijd tot aanhechtingsverlies. Juist of onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Onjuist: aanwezigheid van anaerobe gram-negatieve bacterien leidt niet bij iedereen en niet altijd tot aanhechtingsverlies.'
        },
        {
          q: 'Stelling: Parodontitis is een risicofactor voor peri-implantitis door dezelfde lifestyle-risicofactoren. Juist of onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Juist: roken, diabetes en slechte mondhygiene zijn risicofactoren voor zowel parodontitis als peri-implantitis.'
        },
        {
          q: 'Hoe snel hechten micro-organismen zich aan een schoon mondoppervlak?',
          opts: ['Na enkele minuten', 'Na enkele uren', 'Na enkele dagen', 'Na enkele weken'],
          exp: 'Pellikelvorming en initieel plaque-aanhechting vinden al binnen enkele minuten na reiniging plaats.'
        },
        {
          q: 'Wanneer adviseer je een single-tufted borstel?',
          opts: ['Bij furcaties en eindstandige elementen', 'Alleen bij furcaties', 'Alleen bij eindstandige elementen', 'Nooit, ragers zijn altijd beter'],
          exp: 'Single-tufted borstel is effectief bij furcatiebetrokkenheid en eindstandige elementen waar ragers niet passen.'
        },
        {
          q: 'Welk element heeft een gunstiger prognose: 13 met een 10mm pocket of 26MP met een 6mm pocket?',
          opts: ['13 met 10mm pocket', '26MP met 6mm pocket', 'Ze zijn gelijkwaardig', 'Afhankelijk van de furcatiestatus'],
          exp: 'Element 13 (cuspidaat, eenwortelig) heeft minder complexiteit dan een bovenmolaar; diepere pocket geeft meer winst na SRP.'
        },
        {
          q: 'Heeft subgingivaal tandsteen een voorkeurslocatie?',
          opts: ['Linguaal onderfront en vestibulair bovenmolaarstreek', 'Geen voorkeurslocatie', 'Buccaal onderfront', 'Overal gelijk verdeeld'],
          exp: 'Subgingivaal tandsteen vormt zich bij voorkeur linguaal in het onderfront en vestibulair in de bovenmolaarstreek.'
        },
        {
          q: 'Man van 24 jaar met parodontitis stadium IV graad C, initieel pocket 10mm, na behandeling 6mm. Voldoende of onvoldoende?',
          opts: ['Voldoende', 'Onvoldoende', 'Grenswaarde', 'Afhankelijk van BOP'],
          exp: 'Norm: 10/2+1 = 6mm. Restpocket van juist 6mm is voldoende bij stadium IV graad C.'
        },
        {
          q: 'Chronische parodontitis met furcatiebetrokkenheid en beginpocket 8mm, restpocket 7mm na behandeling. Oordeel?',
          opts: ['Onvoldoende vanwege overschrijden de normpocket', 'Voldoende vanwege de furcatie', 'Voldoende bij furcatie graad 2', 'Afhankelijk van botdefect'],
          exp: 'Norm: 8/2+1 = 5mm. Restpocket van 7mm overschrijdt de norm ruimschoots, dus onvoldoende resultaat.'
        },
        {
          q: 'Wat is het doel van de PPS (Parodontale Prevalentie Screening)?',
          opts: ['Identificeren van mogelijke parodontale problemen in de populatie', 'Ernst van parodontitis vaststellen', 'Diagnose stellen', 'Behandelplan bepalen'],
          exp: 'PPS is een screentool om mogelijke parodontale problemen te signaleren, geen diagnostisch instrument voor ernst.'
        },
        {
          q: 'Stelling: De PPS vertelt hoe erg de parostatus van een patient is. Juist of onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Onjuist: PPS is een screeningsinstrument, geen maat voor ernst. Voor ernst gebruik je DPSI of volledige parodontale kaart.'
        },
        {
          q: 'Welke PPS-score hoort bij een sondering van maximaal 5,5mm?',
          opts: ['Score 2', 'Score 1', 'Score 3', 'Score 4'],
          exp: 'PPS score 2 = sondeerdiepte 3,5-5,5mm. Geen recessie of furcatie.'
        },
        {
          q: 'Stelling: DPSI wordt alleen gebruikt bij patienten ouder dan 18 jaar. Juist of onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Onjuist: DPSI kan ook bij jongeren en kinderen worden toegepast om parodontale gezondheid te monitoren.'
        },
        {
          q: 'Waarvoor is de DPSI bedoeld?',
          opts: ['Globaal overzicht van parodontale problemen per patient', 'Diagnose parodontitis stellen', 'Behandelplan bepalen', 'Ernst van parodontitis kwantificeren'],
          exp: 'DPSI geeft een globaal overzicht van parodontale problemen per sextant; is geen diagnosemiddel.'
        },
        {
          q: 'Sextant met element 35 linguaal 5mm pocket zonder recessie en buccaal 1mm recessie zonder pocket. Welke DPSI-score?',
          opts: ['3-', '3+', '2', '4'],
          exp: 'DPSI 3- = pocket 3,5-5,5mm zonder recessie of furcatie. De 5mm linguaal bepaalt de score; recessie buccaal zonder pocket verandert dat niet naar 3+.'
        },
        {
          q: 'In welke DPSI-categorie valt score 3+?',
          opts: ['Categorie C', 'Categorie B', 'Categorie A', 'Categorie D'],
          exp: 'DPSI categorie C = score 3+ of 4: pockets >3,5mm met recessie, furcatiebetrokkenheid of verlies van aanhechting.'
        }
      ]
    },

    paro_cikmis_3: {
      title: 'Parodontologie Cikmis – Set 3: Behandeling, AB & evaluatie',
      questions: [
        {
          q: 'Hoe vaak wordt de DPSI afgenomen?',
          opts: ['Bij elke periodieke mondonderzoek (PMO)', 'Een keer per jaar', 'Alleen bij nieuwe patienten', 'Elke twee jaar'],
          exp: 'DPSI hoort bij elke PMO te worden uitgevoerd om tijdig veranderingen te signaleren.'
        },
        {
          q: 'Stelling: Peri-mucositis mag niet met handinstrumenten worden behandeld. Juist of onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Onjuist: handinstrumenten (curets) worden ook bij peri-mucositis ingezet als onderdeel van debridement.'
        },
        {
          q: 'Wat heeft beter bewijs voor interdentale reiniging: ragers of tandenstokers?',
          opts: ['Ragers', 'Tandenstokers', 'Ze zijn gelijkwaardig', 'Afhankelijk van pocketzdiepte'],
          exp: 'Ragers (interdentale borsteltjes) tonen in systematische reviews betere plaquereductie dan tandenstokers.'
        },
        {
          q: 'Welk antibioticum is eerste keus bij necrotiserende parodontitis?',
          opts: ['Amoxicilline gecombineerd met metronidazol', 'Alleen amoxicilline', 'Clindamycine', 'Doxycycline'],
          exp: 'Bij necrotiserende parodontitis: amoxicilline 500mg + metronidazol 500mg 3x/dag 7 dagen.'
        },
        {
          q: 'Een patient van 60 jaar reageert onvoldoende op paro-behandeling. Wanneer zijn AB geindiceerd?',
          opts: ['Als de biofilm niet onder controle is na adequate behandeling', 'Als de patient rookt', 'Altijd bij oudere patienten', 'Na 3 maanden her-evaluatie zonder winst'],
          exp: 'AB zijn geindiceerd als adequate biofilmcontrole (MHI + SRP) onvoldoende aanhechtingswinst geeft, niet vanwege roken.'
        },
        {
          q: 'Stelling: Pocketreductie-chirurgie mag pas na 1 jaar opnieuw worden uitgevoerd. Juist of onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Juist: na chirurgische pocketreductie moet minimaal 1 jaar worden gewacht voordat een nieuwe chirurgische ingreep wordt overwogen.'
        },
        {
          q: 'Welke complicatie treedt het vaakst op na een tunneloperatie bij furcatie graad 3?',
          opts: ['Caries in het furcatiegebied', 'Fractuur van de tand', 'Wortelresorptie', 'Peri-implantitis'],
          exp: 'Na tunneloperatie is het furcatiegebied moeilijk schoon te houden, waardoor caries de vaakste reden voor verlies is.'
        },
        {
          q: 'Stelling: Subgingivale kolonisatie van anaeroben leidt vrijwel altijd tot aanhechtingsverlies. Juist of onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Onjuist: het immuunsysteem en gastheerfactoren bepalen of kolonisatie leidt tot aanhechtingsverlies.'
        },
        {
          q: 'Stelling: Roken is een risicofactor voor gegeneraliseerde early-onset parodontitis. Juist of onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Juist: roken is een significante risicofactor voor parodontitis, inclusief vroeg-optredende vormen.'
        },
        {
          q: 'Stelling: Parodontale fibroblasten maken collageen maar kunnen het ook afbreken. Juist of onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Juist: fibroblasten produceren collageen en secreteren tegelijk collagenases (MMPs) voor afbraak en remodellering.'
        },
        {
          q: 'Wat zijn de eerste rontgenologische verschijnselen van periapicale ontsteking?',
          opts: ['Verbreding van de parodontale spleet', 'Verdwijning van het trabekelpatroon', 'Diffuse radiolucency', 'Condenserende osteitis'],
          exp: 'Het vroegste rontgenologische teken van periapicale ontsteking is verbreding van de parodontale spleet rondom de apex.'
        },
        {
          q: 'Stelling: Mesiale furcatie van een bovenmolaar wordt vanaf palatinaal gemeten. Juist of onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Juist: de mesiale furcatie van bovenmolaren is het best bereikbaar en meetbaar vanaf de palatinale zijde.'
        },
        {
          q: 'Stelling: Eliminatie van A. actinomycetemcomitans is belangrijk bij gelokaliseerde juveniele parodontitis. Juist of onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Juist: Aggregatibacter actinomycetemcomitans is de sleutelpathogeen bij gelokaliseerde juveniele (early-onset) parodontitis.'
        },
        {
          q: 'Stelling: De fossa canina is een berucht gebied voor parodontale problemen. Juist of onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Juist: de fossa canina heeft een dunne botplaat, waardoor paro-problemen hier snel tot botverlies en recessie leiden.'
        },
        {
          q: 'Waarvoor is de DPSI primair bedoeld?',
          opts: ['Globaal overzicht van parodontale problemen per sextant', 'Diagnose parodontitis stellen', 'Ernst bepalen', 'Behandelplan maken'],
          exp: 'DPSI is een screeningsinstrument voor een globaal overzicht van parodontale problemen, geen diagnosemiddel.'
        }
      ]
    },

    paro_cikmis_4: {
      title: 'Parodontologie Cikmis – Set 4: Classificatie & microbiologie',
      questions: [
        {
          q: 'Stelling: Tandsteen op een implantaat hecht net zo vast als op een natuurlijk element. Juist of onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Onjuist: tandsteen hecht minder stevig op titaniumoppervlakken dan op glazuur of cement van natuurlijke elementen.'
        },
        {
          q: 'Op welke structuur lijkt cellulair cement het meest?',
          opts: ['Bot', 'Dentine', 'Glazuur', 'Elastisch kraakbeen'],
          exp: 'Cellulair cement lijkt histologisch en functioneel het meest op bot vanwege ingebedde cementikelcellen en collagene matrix.'
        },
        {
          q: 'Stelling: Bij een plaqueindex onder de 15% is geen mondhygieneinstructie nodig. Juist of onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Onjuist: ook bij lage plaqueindices geef je gerichte instructie op basis van individuele risico en gezondheidsdoelen.'
        },
        {
          q: 'Stelling: Mobiliteit groter dan 1mm in horizontale richting is grade 2. Juist of onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Juist: grade 2 mobiliteit = meer dan 1mm horizontale uitwijking; grade 3 = ook verticale mobiliteit aanwezig.'
        },
        {
          q: 'Stelling: P. gingivalis is aanwezig bij zowel gingivitis als parodontitis. Juist of onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Juist: P. gingivalis kan worden aangetroffen bij beide, maar is sterker geassocieerd met parodontitis.'
        },
        {
          q: 'Stelling: Bij diabetespatienten zijn dezelfde bacteriesoorten aanwezig als bij niet-diabetespatienten. Juist of onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Onjuist: hoewel vergelijkbaar, zijn er kwantitatieve en deels kwalitatieve verschillen in het subgingivale microbioom bij diabetici.'
        },
        {
          q: 'Stelling: P. gingivalis is sterk gerelateerd aan zowel gingivitis als parodontitis. Juist of onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Onjuist: P. gingivalis is sterk gerelateerd aan parodontitis, maar niet in gelijke mate aan gingivitis.'
        },
        {
          q: 'Stelling: De fossa canina is een bekende risicolocatie voor parodontitis. Juist of onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Juist: dunne botplaat in de fossa canina maakt cuspidaten gevoelig voor parodontale problemen en recessies.'
        },
        {
          q: 'Stelling: Roken is een risicofactor voor gegeneraliseerde early-onset parodontitis. Juist of onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Juist: roken verhoogt het risico op parodontitis aanzienlijk door immuunsuppressie en vasoconstrictie.'
        },
        {
          q: 'Stelling: Parodontale fibroblasten produceren collageen en kunnen het ook enzymatisch afbreken. Juist of onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Juist: fibroblasten secreteren zowel collageen als matrix-metalloproteasen (MMPs) voor afbraak en hermodellering.'
        },
        {
          q: 'Stelling: Mesiale furcatie van een bovenmolaar wordt gemeten vanaf palatinale zijde. Juist of onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Juist: de mesiale furcatie-ingang van bovenmolaren bevindt zich meer palatinaal en is vandaar het best te sonderen.'
        },
        {
          q: 'Stelling: Eliminatie van A. actinomycetemcomitans is essentieel bij gelokaliseerde juveniele parodontitis. Juist of onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Juist: A. actinomycetemcomitans (Aa) is de sleutelpathogeen; AB-therapie gericht op Aa is onderdeel van de behandeling.'
        },
        {
          q: 'Welke mobiliteitsmaat hoort bij grade 2?',
          opts: ['Horizontale uitwijking meer dan 1mm', 'Horizontale uitwijking minder dan 1mm', 'Verticale mobiliteit aanwezig', 'Geen voelbare mobiliteit'],
          exp: 'Grade 2 = meer dan 1mm horizontale mobiliteit zonder verticale component; grade 3 = ook verticale mobiliteit.'
        },
        {
          q: 'Waarvoor is de DPSI primair bedoeld?',
          opts: ['Globaal overzicht van parodontale problemen geven', 'Diagnose van parodontitis stellen', 'Behandelplan opstellen', 'Ernst van parodontitis meten'],
          exp: 'DPSI dient als screeningsinstrument voor een globaal overzicht per sextant, niet voor diagnose of ernstmeting.'
        },
        {
          q: 'Eerste rontgenologisch verschijnsel van een periapicale ontsteking?',
          opts: ['Verbreding van de parodontale spleet ter hoogte van de apex', 'Verdwijning van het trabekelpatroon', 'Grote radiolucency rondom de apex', 'Condenserende osteitis'],
          exp: 'De verbreding van de parodontale spleet is het vroegste, subtielste rontgenologische teken van periapicale pathologie.'
        }
      ]
    },

    paro_cikmis_5: {
      title: 'Parodontologie Cikmis – Set 5: Anatomie, risicofactoren & diagnose',
      questions: [
        {
          q: 'Stelling: PPS score 2 betekent pockets kleiner dan 4mm met negatieve recessie. Juist of onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Onjuist: PPS score 2 = sondeerdiepte 3,5-5,5mm; recessie is een aparte bevinding die de score wijzigt naar 3+.'
        },
        {
          q: 'Stelling: Bij PPS score 2 is het maximaal denkbare aanhechtingsverlies 5mm. Juist of onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Juist: PPS score 2 (max pocket 5,5mm) plus geen recessie geeft een maximaal aanhechtingsverlies van circa 5mm.'
        },
        {
          q: 'Stelling: Een element heeft een dubieuze prognose als lokale of systemische factoren de behandeluitkomst beinvloeden. Juist of onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Juist: de prognose "dubieus" betekent dat factoren zoals furcatie, strategische waarde of systemische ziekte de uitkomst onzeker maken.'
        },
        {
          q: 'Wat geeft een element een "slechte" prognose?',
          opts: ['Verticale wortelbreuk', 'Meer dan de helft van de wortellengte botverlies', 'Furcatie graad 2', 'Pocket van 8mm'],
          exp: 'Verticale wortelbreuk is een absolute contra-indicatie voor behoud; dat geeft een slechte prognose.'
        },
        {
          q: 'Welk type medicament veroorzaakt gingivale hyperplasie?',
          opts: ['Calciumantagonisten (bijv. nifedipine)', 'NSAIDs', 'Antibiotica', 'Antidepressiva'],
          exp: 'Nifedipine, fenytoïne en cyclosporine zijn de klassieke oorzaken van medicamenteuze gingivale hyperplasie.'
        },
        {
          q: 'Stelling I: Stadium geeft ernst en complexiteit. Stelling II: Graad geeft mate van progressie. Beide juist of niet?',
          opts: ['Beide stellingen zijn juist', 'Alleen stelling I is juist', 'Alleen stelling II is juist', 'Beide stellingen zijn onjuist'],
          exp: 'Correct: stadium = ernst + complexiteit, graad = progressiesnelheid en risicofactoren (2018 classificatie).'
        },
        {
          q: 'Vanaf welk percentage aangedane elementen spreek je van gegeneraliseerde parodontitis?',
          opts: ['30% of meer van alle elementen', 'Minder dan 30%', '50% of meer', 'Minder dan 50%'],
          exp: 'Gegeneraliseerd = minimaal 30% van de aanwezige elementen aangedaan, inclusief minimaal 2 niet-incisieven/cuspidaten.'
        },
        {
          q: 'Een patient heeft 28 elementen waarvan 10 met botverlies stadium II. Is dit gegeneraliseerd?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Juist: 10/28 = 35,7%, dus meer dan 30%, en daarmee gegeneraliseerde parodontitis.'
        },
        {
          q: 'Stelling: Roken van meer dan 10 sigaretten per dag en diabetes mellitus zijn bewezen risicofactoren voor graad C parodontitis. Juist of onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Juist: roken ≥10 sig/dag en DM met HbA1c ≥7% zijn criteria voor graad C in de 2018-classificatie.'
        },
        {
          q: 'Stelling: Bij 6 aangedane elementen is sprake van gegeneraliseerde parodontitis. Juist of onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Onjuist: gegeneraliseerd vereist ≥30% van alle elementen aangedaan; 6 van 28 is slechts 21%, dus lokaal.'
        },
        {
          q: 'Stelling: Bij een pseudopocket is er rontgenologisch geen botverlies zichtbaar. Juist of onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Juist: pseudopocket = gingivale hyperplasie naar coronaal zonder onderliggend botverlies; rontgen toont geen crestal botverlies.'
        },
        {
          q: 'Stelling: Aanhechtingsverlies = pocketdiepte + recessie. Juist of onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Juist: klinisch aanhechtingsverlies (CAL) = pocketdiepte gemeten vanaf gingivarand + eventuele recessie ten opzichte van de CEJ.'
        },
        {
          q: 'Stelling: Een prognose "hopeloos" wordt uitsluitend gegeven als meer dan de helft van het bot verloren is. Juist of onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Onjuist: ook verticale wortelbreuk, ernstige furcatie en strategische onbruikbaarheid kunnen een hopeloos prognose geven.'
        },
        {
          q: 'Stelling: Een horizontale mobiliteit van 2,5mm valt onder mobiliteitsklasse 3. Juist of onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Juist: mobiliteitsklasse 3 = meer dan 1mm horizontale mobiliteit gecombineerd met verticale mobiliteit; 2,5mm overschrijdt dat ruimschoots.'
        },
        {
          q: 'Welke definitie hoort bij "lokale" parodontitis?',
          opts: ['Minder dan 30% van de elementen aangedaan', 'Meer dan of gelijk aan 30% aangedaan', 'Altijd minder dan 6 elementen', 'Alleen anterieure elementen'],
          exp: 'Lokale parodontitis = minder dan 30% van de aanwezige elementen aangedaan.'
        }
      ]
    },

    paro_cikmis_6: {
      title: 'Parodontologie Cikmis – Set 6: Gemengd & THK-1 2025',
      questions: [
        {
          q: 'Wat is het beste spoelmiddel bij antibioticabehandeling tijdens initiele paro-behandeling?',
          opts: ['CHX of H2O2', 'CHX en H2O2 tegelijk', 'Alleen NaCl', 'Alleen water'],
          exp: 'CHX of H2O2 als mondspoelmiddel tijdens de initieel paro-behandeling; niet combineren vanwege precipitaatvorming.'
        },
        {
          q: 'Wat is de beste behandeling van halitose van orale origine?',
          opts: ['Tongschraper plus mondwater', 'Alleen mondwater', 'Alleen tongschraper', 'Antibiotica'],
          exp: 'Combinatie van tongschraper (mechanische reductie) en antiseptisch mondwater geeft de beste halitosereductie.'
        },
        {
          q: 'Meisje van 16 jaar met pijn, vieze smaak, recessies en losse tanden. Meest waarschijnlijke diagnose?',
          opts: ['ANUP (Acute Necrotiserende Ulceratieve Parodontitis)', 'ANUG (Acute Necrotiserende Ulceratieve Gingivitis)', 'Agressieve parodontitis', 'Gingivaal abces'],
          exp: 'Losse tanden duiden op botverlies wat wijst op ANUP; ANUG heeft geen botverlies.'
        },
        {
          q: 'Een pocket van 10mm wordt na initieel behandeling 6mm. Is dit voldoende?',
          opts: ['Onvoldoende', 'Voldoende', 'Borderline voldoende', 'Afhankelijk van stadium'],
          exp: 'Norm: 10/2+1 = 6mm. Een restpocket van precies 6mm of meer is onvoldoende; het doel is <6mm.'
        },
        {
          q: 'Waar wordt meer aanhechtingswinst verwacht na SRP: element 13 met 10mm pocket of element 26MP met 6mm pocket?',
          opts: ['Element 13 met 10mm pocket', 'Element 26MP met 6mm pocket', 'Gelijkwaardig', 'Afhankelijk van furcatie'],
          exp: 'Diepere pockets geven na SRP meer absolute aanhechtingswinst; 10mm pocket meer winst dan 6mm pocket.'
        },
        {
          q: 'Wat is het effect van roken op de speekselproductie in relatie tot paro/caries?',
          opts: ['Minder speeksel door vasoconstrictie', 'Meer bacteriesoorten', 'Meer speeksel', 'Geen effect op speeksel'],
          exp: 'Roken leidt tot verminderde speekselflow door vasoconstrictie, wat caries- en parorisico verhoogt.'
        },
        {
          q: 'Wat kenmerkt ANUG ten opzichte van ANUP?',
          opts: ['Necrose van papillen zonder botverlies', 'Necrose van papillen met botverlies', 'Losse tanden aanwezig', 'Recessies aanwezig'],
          exp: 'ANUG = necrotiserende gingivitis zonder onderliggend botverlies; ANUP = ANUG + botverlies/aanhechtingsverlies.'
        },
        {
          q: 'Wanneer vindt de her-evaluatie na initiele paro-behandeling bij voorkeur plaats?',
          opts: ['4 tot 8 weken na de laatste SRP-sessie', '2 weken na de laatste SRP-sessie', 'Direct na elke SRP-sessie', '3 maanden na start behandeling'],
          exp: 'Her-evaluatie vindt 4-8 weken na de laatste SRP-sessie plaats, zodat weefsel kan herstellen.'
        },
        {
          q: 'Waar bevindt subgingivaal tandsteen zich bij voorkeur?',
          opts: ['Linguaal onderfront en vestibulair bovenmolaarstreek', 'Buccaal onderfront', 'Linguaal bovenmolaren', 'Overal gelijk'],
          exp: 'Subgingivaal tandsteen accumuleert bij voorkeur linguaal in het onderfront en vestibulair in de bovenmolaarstreek.'
        },
        {
          q: 'Is furcatieplastiek de oplossing bij een approximale furcatiebetrokkenheid graad 2?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Onjuist: furcatieplastiek is niet de standaardbehandeling bij graad 2; tunneloperatie of wortelresectie is dan eerder aangewezen.'
        },
        {
          q: 'Stelling: Furcatie graad 1 behandeling bestaat alleen uit mondhygieneinstructie en gebitsreiniging. Juist of onjuist?',
          opts: ['Onjuist', 'Juist'],
          exp: 'Onjuist: ook bij furcatie graad 1 wordt een single-tufted borstel of rager geadviseerd voor adequate reiniging van het furcatiegebied.'
        },
        {
          q: 'Stelling: Scaling en rootplaning leidt zelden tot ernstige pulpa-afwijkingen. Juist of onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Juist: SRP kan tijdelijke gevoeligheid geven, maar ernstige pulpa-afwijkingen (necrose) zijn zeldzaam.'
        },
        {
          q: 'Stelling: Na paro-chirurgie is aantoonbare pocketreductie pas na 1 jaar te beoordelen. Juist of onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Juist: weefselheling na paro-chirurgie verloopt langzaam; definitieve beoordeling vindt minimaal 1 jaar na de ingreep plaats.'
        },
        {
          q: 'Hoe draagt transiete bacteriemie bij aan de associatie tussen parodontitis en cardiovasculaire ziekte?',
          opts: ['Paro-pathogenen in ontstoken weefsel bereiken de bloedbaan en kunnen vaatwandontsteking veroorzaken', 'Bacterien reizen via speeksel naar het hart', 'Er is geen verband met bacteriemie', 'Alleen via directe tandextractie'],
          exp: 'Bij uitgebreide paro-ontsteking treden bacterien en LPS via de kapotte sulcusepitheel de bloedbaan in, wat bijdraagt aan atherosclerose.'
        },
        {
          q: 'Stelling: Transiete bacteriemie speelt een rol bij de associatie van parodontitis met cardiovasculaire ziekte. Juist of onjuist?',
          opts: ['Juist', 'Onjuist'],
          exp: 'Juist: transiete bacteriemie vanuit ontstoken paro-weefsel is een van de verklaringsmechanismen voor de paro-cardiovasculaire link.'
        }
      ]
    }

  };
  window.QUIZZES = Object.assign(window.QUIZZES || {}, sets);
})();
