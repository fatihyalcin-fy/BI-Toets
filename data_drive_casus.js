/* =================================================================
   data_drive_casus.js
   Google Drive kaynakli casus / behandelplan soru bankasi.
   ================================================================= */
(function(){
  window.DRIVE_CASUS = {
    bp1: [
      {
        source: "casuslar.docx · 2025 December",
        title: "Behandelplan 2025 Dec · 25-jarige patient met pijn linksboven",
        text: "25-jarige vrouw. Regelmatige tandartsbezoeken, maar 2 jaar niet geweest door financiele problemen. Sinds 2-3 maanden toenemende pijn linksboven; rechts onder was er langer pijn maar nu niet. Poetst 2x/dag, geen interdentale reiniging, geen mondspoeling. Wens: goede mondhygiene en pijnvrij kauwen. Medisch: chronische bronchitis met inhalatiemedicatie, bruxisme, roken 6/dag, werkt 3 dagen/week op kinderdagverblijf.",
        questions: [
          {
            q: "Noem 5 risicofactoren uit de anamnese en geef passend advies.",
            a: "1. Inhalator: verhoogt xerostomie/caries- en candidarisico; mond spoelen na gebruik. 2. Roken: paro- en wondgenezingsrisico; stopadvies/verwijzing huisarts. 3. Bruxisme: slijtage/fractuurrisico; bewustwording, eventueel kaakfysio en later splint. 4. Geen interdentale reiniging: approximale caries/paro; ragers of stokers instrueren. 5. Kinderdagverblijf/voeding: frequente suikermomenten; maximaal 7 eet-/drinkmomenten per dag."
          },
          {
            q: "Interpreteer 24, 25 en 27: sensibiliteit 24++ 25++ 27++, percussie 24+ 25+ 27++, palpatie negatief.",
            a: "Bij alle drie past symptomatische irreversibele pulpitis met beginnende/symptomatische apicale parodontitis. 27 lijkt de hoofdoorzaak door sterkere percussiepijn. Prognose 24/25 goed bij adequate endo en coronale afsluiting; 27 matig-goed afhankelijk van restweefsel, cariesschade en eventuele cracks door bruxisme."
          },
          {
            q: "Kies 3 prioriteiten uit CARIO, PARO, ENDO, STAND, SLYT, MEDISCH en motiveer.",
            a: "ENDO eerst wegens pijn/infectie en wens pijnvrij kauwen. Daarna PARO als fundament: roken en geen interdentale reiniging bedreigen langetermijnbehoud. Daarna CARIO of SLYT: cariescontrole voorkomt nieuwe endo; bruxismebescherming voorkomt fractuur van verzwakte/restauratieve elementen."
          },
          {
            q: "Maak een gefaseerd behandelplan zonder budgetbeperking.",
            a: "Fase 0 diagnostiek: bitewings/solo's, paro-screening, cariesrisico, slijtageanalyse. Fase 1 spoed: pijnklacht lokaliseren, endostart/WKB 27 en zo nodig 24/25, tijdelijke afsluiting. Fase 2 causaal: MHI, rookadvies, interdentale reiniging, cariescontrole, restauraties, paro-initiele therapie. Fase 3 definitief: definitieve endo-afsluiting, cusp-overkappende restauraties/kronen waar nodig, splint bij bruxisme. Fase 4 onderhoud: recall, caries/paro-herbeoordeling, splintcontrole."
          },
          {
            q: "Pas het plan aan bij budget van 1000 euro.",
            a: "Prioriteer pijn en behoud: diagnostiek beperkt tot noodzakelijke opnamen, endostart/WKB of extractie-indicatie voor pijnveroorzaker, tijdelijke/duurzame directe restauraties, MHI en preventie. Dure kronen/prothetiek uitstellen; behandelplan faseren met duidelijke risico-uitleg en korte recall."
          }
        ]
      },
      {
        source: "Casusen vanaf 2018 (1).pdf",
        title: "DIB-1 · Syrische man met hiaten en beperkt budget",
        text: "Patient met hiaten, matige mondhygiene en budget van ongeveer 500 euro voor dit jaar. Er zijn rontgenfoto's, lichtfoto's en paro-status beschikbaar.",
        questions: [
          { q: "Welke onderdelen moet je systematisch beschrijven?", a: "Extra-oraal, intra-oraal inclusief kaakrelatie/functie, cario/endo, parodontale aspecten inclusief PPS, wensen en beperkingen." },
          { q: "Hoe bouw je het behandelplan op?", a: "Eerst urgentie en ziektecontrole: pijn/infectie, MHI, caries- en paro-controle. Daarna opties met voordelen/nadelen en zorgdoel. Bij laag budget: minimaal invasief en gefaseerd, met preventie en tijdelijke oplossingen." },
          { q: "Wat hoort in het zorgplan voor 2 jaar?", a: "Korte recall, herbeoordeling paro/caries, gefaseerde restauratieve zorg, budgetspreiding en duidelijke evaluatiemomenten." }
        ]
      },
      {
        source: "Casusen vanaf 2018 (1).pdf",
        title: "64-jarige treinbestuurder · esthetiek, veel eetmomenten en posterior problemen",
        text: "Man, 64 jaar, treinbestuurder, 10 jaar niet bij tandarts geweest. Eet 10-15 keer per dag, poetst 1x/dag met fluoride tandpasta, rookt niet. Komt vanwege diasteem/hiaten aan achtertanden en esthetische wens. Geringe parodontitis, doorschemerende/niet goed aansluitende amalgaamrestauraties posterior. ASA 1. Verzekerd voor 1000 euro per jaar.",
        questions: [
          { q: "Wat zijn de hoofdproblemen?", a: "Hoog cariesrisico door frequente eetmomenten, restauratieve insufficiente posterior vullingen, beperkte mondhygiene, lichte paro en esthetische/prothetische wens." },
          { q: "Welke opties leg je voor?", a: "Causale fase met voedingsadvies/MHI en restauratievervanging; daarna gefaseerde posterior rehabilitatie. Opties: directe restauraties, indirecte restauraties/kronen waar nodig, of prothetische vervanging van hiaten. Voordelen/nadelen per optie: kosten, duurzaamheid, invasiviteit, onderhoud." },
          { q: "Wat is de budgetstrategie?", a: "Eerst ziektecontrole en noodzakelijke restauraties binnen verzekerd budget; esthetiek/prothetiek spreiden over meerdere jaren of tijdelijke oplossing aanbieden." }
        ]
      }
    ],

    bp2: [
      {
        source: "casuslar.docx · 2025 December",
        title: "Implantaat bij paro-patient · peri-implantitis risico",
        text: "Patient met parodontale voorgeschiedenis wil implantaten. In Drive-notities staat nadruk op parodontitis als risicofactor voor peri-implantitis en gedeelde lifestyle-risico's.",
        questions: [
          { q: "Hoe plan je implantaten bij een paro-patient?", a: "Geen implantaat voordat paro stabiel is. Eerst diagnose, MHI, rookstop, initiele paro-therapie, herbeoordeling en SPT-compliance. Daarna pas implantaatplanning met botanalyse en risico-uitleg." },
          { q: "Welke informatie geef je over peri-implantitis?", a: "Parodontitisgeschiedenis, roken, plaque en matige nazorg verhogen risico. Implantaten vragen levenslange nazorg; restpockets en bloeding moeten onder controle zijn." }
        ]
      },
      {
        source: "casuslar.docx · 2025 December",
        title: "Stegconstructie op implantaten · voordelen en nadelen",
        text: "Drive-bron noemt vragen over stegprothese/stegconstructie op implantaten, met voor- en nadelen.",
        questions: [
          { q: "Noem voordelen van een stegconstructie.", a: "Goede retentie en stabiliteit, krachtenverdeling over implantaten, vaak comfortabeler dan conventionele prothese. Minder technische nazorg kan een voordeel zijn afhankelijk van ontwerp en hygiene." },
          { q: "Noem nadelen van een stegconstructie.", a: "Hogere kosten, meer techniek/labwerk, hygiene rond steg is lastiger, ruimte nodig, complicaties zoals peri-implantitis, slijtage clips of technische reparaties blijven mogelijk." }
        ]
      },
      {
        source: "Casusen vanaf 2018 (1).pdf",
        title: "Frame onderkaak tegen volledige prothese bovenkaak",
        text: "Onderkaak moet een frameprothese krijgen; bovenkaak een volledige prothese. De tweede tekening van het frame wordt beoordeeld.",
        questions: [
          { q: "Waar let je op bij het frameontwerp?", a: "Pijlerkeuze, steunpunten, retentiearmen, indirecte retentie, zadeluitbreiding, occlusie tegen volledige bovenprothese en reinigbaarheid. Slechte mondhygiene is een belangrijke contra-indicatie of reden voor voorbereiding." },
          { q: "Welke occlusiegedachte is belangrijk tegenover een volledige prothese?", a: "Stabiliteit van de volledige prothese is leidend; vermijd storende laterale contacten en plan occlusie die prothese niet doet kantelen." }
        ]
      },
      {
        source: "Casusen vanaf 2018 (1).pdf",
        title: "Ernstige occlusale slijtage · budget 500 euro",
        text: "Casus met ernstige occlusale slijtage, enkele carieuze laesies en gevoelige tanden. Budget 500 euro. Rontgen- en lichtfoto's worden gegeven. Opdracht: complete intake en drie behandelplannen met nazorg.",
        questions: [
          { q: "Wat neem je op in de intake?", a: "Slijtageanalyse, bruxisme/erosie/anamnese, voedings- en refluxvragen, cariesrisico, pulpastatus, occlusie, esthetische/functionele wensen en budget." },
          { q: "Geef drie behandelplanniveaus.", a: "1. Budget/minimaal: preventie, desensibilisatie, directe restauraties, monitoring. 2. Gefaseerd: beetverhoging/testfase, composietopbouwen per sextant. 3. Uitgebreid: diagnostische wax-up, indirecte restauraties/kronen/onlays, splint en onderhoud." },
          { q: "Welke nazorg hoort erbij?", a: "Slijtagecontrole, splintcontrole, fluoride/preventie, cariësrecall en evaluatie van pijn/gevoeligheid." }
        ]
      }
    ],

    casus: [
      {
        source: "2024 JUNI CASUS 2&3.docx",
        title: "Alicia · pedodontologische cariescasus",
        text: "Alicia is verlegen en verstopt zich achter haar moeder. Ouders zijn gescheiden; zij verhuisde met moeder en broertje. Ze poetst zelfstandig. Eet 3 keer per dag, maar drinkt tussendoor appelsap in plaats van water. Moeder denkt dat natuurlijk appelsap onschadelijk is en heeft de mondzorg na de scheiding wat losgelaten.",
        questions: [
          { q: "Wat wil je nog weten om het cariesrisico te bepalen?", a: "Leeftijd, fluoridegebruik, poetsbegeleiding door ouder, frequentie appelsap/tussendoortjes, eerdere caries/restauraties, pijnklachten, plaque, speeksel/xerostomie, sociale belastbaarheid en behandelervaring." },
          { q: "Noem 3 behandelmethoden/gedragsmethoden voor Alicia.", a: "Tell-show-do, shaping/graduele gewenning, positieve bekrachtiging. Eventueel fissuursealants/fluoride/NRCT/restauratief onder lokale anesthesie afhankelijk van laesies en coöperatie." },
          { q: "Hoe leg je aan moeder uit hoe dit kon ontstaan?", a: "Appelsap bevat suikers/zuren en frequente blootstelling veroorzaakt zuuraanvallen. Natuurlijk betekent niet tandvriendelijk. Zelfstandig poetsen kan onvoldoende zijn bij kinderen; ouderlijke begeleiding is nodig." },
          { q: "Moet je bitewings opnieuw maken?", a: "Niet routinematig als recente kwalitatief goede BW's beschikbaar zijn en diagnostische vraag beantwoord is. Herhalen alleen bij onvoldoende kwaliteit, nieuwe vraag of risicogestuurde interval." },
          { q: "Is er sprake van kindermishandeling/verwaarlozing?", a: "Niet automatisch. Wel signaleren: gemiste zorg, pijn, veel caries, sociale context. Bespreek zorgvuldig, ondersteun moeder, documenteer, volg meldcode bij blijvende zorgen of onveiligheid." },
          { q: "Maak een sessieplan.", a: "Sessie 1: kennismaken, pijn/urgent, risicoanalyse, uitleg appelsap, poetsinstructie. Sessie 2: preventie, fluoride/sealants/NRCT waar passend. Sessie 3+: restauratief of verwijzing kindertandarts/sedatie bij onvoldoende coöperatie. Recall kort." }
        ]
      },
      {
        source: "Juni 2024 casussen.docx",
        title: "Man met klemmen, diasteem 11-21, ontbrekende 16/26 en pijn 46",
        text: "Man met klemmen, diasteem tussen 11 en 21. Element 46 heeft pijnlijke parodontitis apicalis en botverlies/furcatie. 16 en 26 ontbreken. Wordt soms wakker met hoofdpijn. Vriend stoort zich aan diasteem. Gebruikt veel antidepressiva. Budget 2500 euro.",
        questions: [
          { q: "Wat zijn de hoofdproblemen?", a: "Endodontische/apicale pathologie 46, bruxisme/klemmen met hoofdpijn, ontbrekende molaren 16/26, esthetische wens diasteem, medicatie mogelijk xerostomie/bruxismebijdrage, budgetbeperking." },
          { q: "Wat prioriteer je?", a: "Eerst pijn/infectie 46 diagnosticeren en behandelen of extractie bij slechte prognose. Daarna bruxisme/medicatie-risico en preventie. Daarna molaarvervanging en diasteem-esthetiek afhankelijk van budget." },
          { q: "Wat doe je met het diasteem?", a: "Alleen na diagnose oorzaak en paro/occlusie. Opties: niets, composiet bonding, orthodontie, indirect restauratief. Bespreek dat esthetiek niet voor urgentie gaat." }
        ]
      },
      {
        source: "Casusen vanaf 2018 (1).pdf",
        title: "Meike · meisje met vader na scheiding en pijn",
        text: "Meike komt met haar vader voor eerste bezoek wegens pijn. Ouders zijn pas gescheiden; zij woont bij haar vader en komt niet met moeder. Ze lijkt moeilijk behandelbaar.",
        questions: [
          { q: "Welke vragen horen bij deze casus?", a: "Hoe oud is Meike en waarop baseer je dat? Wat is het tandheelkundige en sociale overzicht? Wat is je behandelplan?" },
          { q: "Hoe benader je dit klinisch?", a: "Rustige kennismaking, pijntriage, leeftijd/gebitsfase bepalen, sociale context zonder oordeel uitvragen, ouderlijke toestemming/gezag helder krijgen, kind centraal houden." },
          { q: "Wat is een passend behandelplan?", a: "Eerst pijn oplossen en vertrouwen opbouwen. Daarna preventie, ouderinstructie, gefaseerde restauratieve zorg en korte recall. Bij signalen van verwaarlozing: documenteren en meldcode volgen." }
        ]
      },
      {
        source: "Casusen vanaf 2018 (1).pdf",
        title: "Sociale casus 2021 · onterechte nota weekenddienst",
        text: "Patient komt endo afmaken na weekenddienst. Collega is bekend in tandartskring. Patient klaagt over nota: verdoving gedeclareerd terwijl geen verdoving is gegeven, avond-/spoedcodes mogelijk discutabel, codes gecombineerd die niet samen mogen. Patient heeft geen geld meer en wil nu extractie.",
        questions: [
          { q: "Wat adviseer je de patient over de collega/nota?", a: "Blijf professioneel en feitelijk. Erken zorgen, adviseer contact met de betreffende praktijk/verzekeraar of klachtenfunctionaris. Doe geen ongefundeerde beschuldigingen, maar leg uit welke onderdelen vragen oproepen." },
          { q: "Wat doe je voor verdere behandeling?", a: "Maak eigen diagnose en behandelopties inclusief kosten. Bespreek behoud via endo versus extractie, urgentie, pijn, prognose en financiele consequenties. Laat patient autonoom kiezen na informed consent." },
          { q: "Welke acties kun/moet je ondernemen?", a: "Dossier zorgvuldig bijhouden, eventueel met toestemming informatie opvragen, patient wijzen op klachtenroute. Bij duidelijke structurele fraude/onveiligheid kan professionele meldroute/beroepsnorm relevant zijn." }
        ]
      },
      {
        source: "Casusen vanaf 2018 (1).pdf",
        title: "Ethiek · 83-jarige vader met zoon en volledige extractie",
        text: "Ethiekcasus uit Drive: zoon komt met 83-jarige vader; vragen lijken te draaien om volledige extractie, besluitvorming en vertegenwoordiging.",
        questions: [
          { q: "Wat beoordeel je eerst?", a: "Wilsbekwaamheid van vader, eigen wens van patient, medische indicatie, alternatieven, risico's, informed consent en mogelijke druk door zoon." },
          { q: "Hoe betrek je de zoon?", a: "Alleen met toestemming van de patient of als vertegenwoordiger bij wilsonbekwaamheid. De wens van de patient blijft centraal." },
          { q: "Wat is ethisch belangrijk bij volledige extractie?", a: "Proportionaliteit, reversibiliteit, alternatieven, kwaliteit van leven, medische risico's en voldoende bedenktijd bij niet-acute behandeling." }
        ]
      },
      {
        source: "Casusen vanaf 2018 (1).pdf",
        title: "Praktijknood · roerloze patient na alarm",
        text: "Collega behandelt in andere kamer. Je hoort alarm en ziet een roerloze patient op de vloer.",
        questions: [
          { q: "Wat doe je direct?", a: "Veiligheid controleren, aanspreken/schudden, hulp roepen, ABCDE/BLS starten, 112/AED, ademhaling/pols beoordelen volgens protocol, taken delegeren en documenteren." },
          { q: "Wat is belangrijk in de praktijkorganisatie?", a: "Noodprotocol, teamtraining, AED/noodkoffer, taakverdeling, registratie van incident en nazorg voor patient/team." }
        ]
      }
    ],

    endo_trauma: [
      {
        source: "canvas casuslar hepsi.pdf",
        title: "Joeri · 7-8 jaar, gecompliceerde kroonfractuur 11",
        text: "Joeri valt van zijn fiets. Veel pijn aan 11. Geen duidelijke verplaatsing of mobiliteit, wel bloed uit de tand. Foto gemaakt.",
        questions: [
          { q: "Hoe oud is Joeri en wat is de diagnose?", a: "Ongeveer 7-8 jaar; gecompliceerde kroonfractuur met pulpa-expositie en open apex/ontwikkelend element." },
          { q: "Welke behandeling voer je meteen uit?", a: "Partiele pulpotomie/pulpotomie en afdekken/restaureren van de breuk. Geen spalk en geen volledige WKB als pulpa vitaal is en apex open." },
          { q: "Wat is vervolg en prognose?", a: "Composietrestauratie, controles op vitaliteit, apexontwikkeling en resorptie. Prognose goed bij snelle behandeling." }
        ]
      },
      {
        source: "canvas casuslar hepsi.pdf",
        title: "Tanja · 16 jaar met asymmetrische voortanden",
        text: "16-jarige patient stoort zich aan asymmetrische voortanden. Foto toont beeld passend bij oud trauma.",
        questions: [
          { q: "Wat is de diagnose?", a: "Vervangingsresorptie/ankylose van 11 door tandletsel in het verleden, waarschijnlijk op jonge leeftijd." },
          { q: "Welke behandelopties zijn er?", a: "Resorptie is niet te stoppen. Opties: monitoren tijdelijk, decoronatie voor botbehoud, tijdelijke voorziening, later implantaat of autotransplantatie afhankelijk van groei/leeftijd." },
          { q: "Wat is de prognose?", a: "Slecht voor behoud op lange termijn; behandelkeuze richt zich op bot/esthetiek en timing." }
        ]
      },
      {
        source: "canvas casuslar hepsi.pdf",
        title: "Open apex en necrotische 11 · behandelkeuze",
        text: "Tandarts concludeert dat 11 necrotisch is en endodontische behandeling nodig heeft. Mogelijke voorgeschiedenis: ongecompliceerde kroonfractuur of laterale luxatie bij kind met open apex.",
        questions: [
          { q: "Waarom is normale WKB ongunstig?", a: "Open apex en dunne wortelwanden maken volledige conventionele WKB minder voorspelbaar en fractuurgevoelig." },
          { q: "Welke behandelopties zijn relevant?", a: "Regeneratieve endodontische behandeling/revitalisatie of apexificatie met MTA/bioceramische plug; conventionele WKB alleen met duidelijke nadelen besproken." }
        ]
      },
      {
        source: "canvas casuslar hepsi.pdf",
        title: "Horizontale wortelfractuur 21",
        text: "Patient gevallen; 21 licht mobiel, gevoelig, reageert normaal op koude. Beweging doet pijn.",
        questions: [
          { q: "Diagnose en behandeling?", a: "Horizontale wortelfractuur. Flexibele spalk 2-4 weken, controles. Geen WKB zolang pulpa vitaal blijft; bij necrose WKB tot fractuurlijn." },
          { q: "Prognose en complicaties?", a: "Vaak goed, afhankelijk van dislocatie en genezing. Complicaties: pulpanecrose, ontstekingsresorptie, mobiliteit of infectie aan fractuurlijn." }
        ]
      },
      {
        source: "canvas casuslar hepsi.pdf",
        title: "John · ECR na ortho en oud trauma",
        text: "John, 45 jaar. Element 41 voelt raar, is gevoeliger voor koude en verkleurd. Lange orthodontische behandeling vroeger en auto-ongeluk 20 jaar geleden. Voortanden reageren normaal op koude; 41 licht percussiegevoelig en metallische klank.",
        questions: [
          { q: "Wat verwacht je op de foto en wat is diagnose?", a: "Beeld passend bij externe cervicale resorptie of vervangingsresorptie-achtig traumaresultaat; bij 'pink tooth'/cervicaal defect: ECR. CBCT kan nodig zijn voor omvang." },
          { q: "Wat is behandeling en prognose?", a: "Afhankelijk van omvang: externe/inwendige benadering, flap en restauratie, soms preventieve endo; bij uitgebreid defect extractie. Prognose dubieus bij subgingivale/botniveau uitbreiding." }
        ]
      },
      {
        source: "canvas casuslar hepsi.pdf",
        title: "Avulsie 21 en intrusie 11 · verdenking mandibulafractuur",
        text: "21-jarige patient met tandletsel na fietsval: avulsie 21 en intrusieluxatie 11. Geen neurologisch letsel, maar mogelijk mandibulafractuur.",
        questions: [
          { q: "Waar let je op bij anamnese en onderzoek?", a: "Onderlipgevoel, beetverandering, occlusiestoornis, mondopening, kinwond, mondbodemhematoom, step/diastase, palpatie mandibula." },
          { q: "Welke tekenen passen bij collumfractuur?", a: "Prematuur contact aangedane zijde, contralaterale open beet, deviatie kin naar aangedane zijde en beperkte mondopening." }
        ]
      },
      {
        source: "Juni 2024 casussen.docx",
        title: "Avulsie 43 · teruggeplaatst door vriend, 3 weken later resorptie",
        text: "25-jarige patient komt 3 weken na trauma. Element 43 was geavulseerd en door vriend meteen teruggeimplanteerd. Nu beeld van externe resorptie.",
        questions: [
          { q: "Wat zijn de belangrijkste diagnostische vragen?", a: "Extra-orale droogtijd, opslagmedium, spalkduur, endodontische behandeling gestart ja/nee, mobiliteit, percussieklank, resorptietype en infectietekenen." },
          { q: "Wat is waarschijnlijk beleid?", a: "Bij gesloten apex is WKB snel nodig om ontstekingsresorptie te voorkomen. Bij bestaande externe ontstekingsresorptie: endodontische desinfectie/calciumhydroxide of passend protocol; prognose afhankelijk van omvang." }
        ]
      },
      {
        source: "Juni 2024 casussen.docx",
        title: "Gecompromitteerde kroonfractuur na spoed",
        text: "Patient gaat meteen naar spoeddienst na trauma met gecompromitteerde kroonfractuur. Vraag: wat doet spoedtandarts, prognose en controle?",
        questions: [
          { q: "Wat verwacht je van de spoedtandarts?", a: "Diagnostiek: foto, vitaliteit, percussie, mobiliteit, pocket/fractuurlijn. Bij gecompliceerde kroonfractuur: pulpotomie of pulpectomie afhankelijk van leeftijd/apex/tijd; restauratieve afsluiting." },
          { q: "Wat is controlebeleid?", a: "Klinische en radiologische controles op vitaliteit, apicale pathologie en resorptie; schema afhankelijk van trauma maar minimaal weken-maanden-jaar." }
        ]
      },
      {
        source: "korte behandelplan juni en december 2023.pdf",
        title: "Korte behandelplan 2023 · trauma mix",
        text: "Drive-bron noemt herhaalde casussen met intrusie, extrusie, luxatie en ongecompliceerde/gecompliceerde kroonfractuur.",
        questions: [
          { q: "Hoe structureer je elke traumacasus?", a: "Letseltype, apex open/gesloten, tijd sinds trauma, mobiliteit/dislocatie, pulpastatus, rontgen/CBCT waar nodig, acute behandeling, spalkduur, endo-indicatie en follow-up." },
          { q: "Wat zijn kernverschillen tussen letsels?", a: "Intrusie geeft hoog resorptie/necrose-risico; extrusie/laterale luxatie vraagt repositie en spalk; kroonfractuur draait om pulpa-expositie; avulsie draait om droogtijd en PDL-overleving." }
        ]
      }
    ]
  };
})();
