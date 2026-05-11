/* =================================================================
   data_drive_imported.js
   Google Drive cikmis soru aktarimi.

   opts[0] = altijd het juiste antwoord. quiz.js shuffelt bij weergave.
   ================================================================= */
(function(){
  window.QUIZZES = window.QUIZZES || {};

  function q(text, answer, wrong1, wrong2, wrong3, exp){
    return { q:text, opts:[answer, wrong1, wrong2, wrong3], exp:exp || answer };
  }

  function fromConcepts(title, source, rows){
    return {
      title: title + " · " + source,
      questions: rows.map(function(row){
        return q(row[0], row[1], row[2], row[3], row[4], row[5] || ("Bron: " + source));
      })
    };
  }

  var sets = {
    cario_cikmis_2025_juni_drive: fromConcepts("Cariologie cikmis", "THK1 2025 Juni", [
      ["Welke pH hoort bij de kritische pH van glazuur?", "Ongeveer 5,5", "Ongeveer 7,4", "Ongeveer 4,0", "Ongeveer 6,8", "Glazuur lost makkelijker op onder pH 5,5; dentine/worteloppervlak is kwetsbaarder bij hogere pH."],
      ["Welke bacterie wordt vooral gekoppeld aan initiatie van caries?", "Streptococcus mutans", "Porphyromonas gingivalis", "Candida albicans", "Treponema denticola", "S. mutans hecht goed, maakt zuur en speelt een grote rol in initiatie."],
      ["Welke bacterie past het best bij progressie van diepe dentinecaries?", "Lactobacillus", "S. sanguinis", "Actinomyces naeslundii alleen", "Prevotella intermedia", "Lactobacillen worden vaak gekoppeld aan progressie in een zuur milieu."],
      ["Wat is het beleid bij een actieve white spot zonder cavitatie?", "Non-invasief: fluoride, plaquecontrole en dieetadvies", "Direct prepareren en restaureren", "Extractie", "Antibiotica", "Niet-gecaviteerde laesies kunnen remineraliseren als de biofilm en zuuraanvallen worden aangepakt."],
      ["Welke fluorideconcentratie hoort meestal bij tandpasta voor volwassenen?", "Ongeveer 1450 ppm", "100 ppm", "5000 ppm standaard voor iedereen", "0 ppm", "1450 ppm is de standaard preventieve concentratie; 5000 ppm is voor hoog-risico op indicatie."],
      ["Wat is het belangrijkste effect van fluoride op vroege caries?", "Remineralisatie stimuleren en demineralisatie remmen", "Alle bacterien doden", "Caviteiten sluiten", "Speekselproductie volledig herstellen", "Fluoride verschuift de balans richting remineralisatie maar herstelt geen echte caviteit."],
      ["Welke voedingsfactor is het meest cariogeen?", "Frequentie van fermenteerbare koolhydraten", "Alleen totale hoeveelheid water", "Alleen vetinname", "Eiwit bij ontbijt", "Frequent suikergebruik houdt plaque-pH langdurig laag."],
      ["Welke ICDAS-score is nog duidelijk non-cavitair?", "ICDAS 1-2", "ICDAS 5-6", "Alleen ICDAS 6", "Geen enkele", "ICDAS 1-2 zijn vroege visuele veranderingen zonder caviteit."],
      ["Wat is een fissuursealant vooral bedoeld om te voorkomen?", "Occlusale caries in diepe fissuren", "Gingivale recessie", "Endodontische infectie", "Ankylose", "Sealants sluiten retentieve fissuren af voor plaque en substraat."],
      ["Wat verhoogt vooral het risico op wortelcaries?", "Gingivarecessie plus xerostomie", "Alleen jonge leeftijd", "Hoge speekselflow", "Perfecte plaquecontrole", "Worteldentine is minder mineraalrijk en kwetsbaar bij droge mond."],
      ["Welke maatregel past bij hoog cariesrisico?", "Intensieve fluoridepreventie en kortere recall", "Alleen jaarlijks poetsadvies", "Geen rontgencontrole", "Antibiotica profylaxe", "Hoog risico vraagt actieve preventie, monitoring en eventueel hoog-fluoride op recept."],
      ["Wat betekent een actieve carieuze laesie klinisch vaak?", "Mat, ruw oppervlak met plaque-retentie", "Glanzend hard oppervlak", "Altijd pijn", "Altijd radiopaciteit", "Actieve laesies zijn vaak mat/krijtachtig en ruw."],
      ["Waarom is xylitol minder cariogeen?", "Het wordt niet goed gefermenteerd door cariogene bacterien", "Het bevat calciumhydroxide", "Het doodt alle mondflora", "Het vervangt fluoride volledig", "Xylitol levert weinig zuurproductie en kan S. mutans ongunstig beinvloeden."],
      ["Wat is de eerste stap bij een patient met veel nieuwe carieslaesies?", "Risicofactoren analyseren: dieet, plaque, speeksel en fluoride", "Direct alle elementen kronen", "Alleen panoramafoto maken", "Geen behandeling", "Cariologie is risicogestuurd: oorzaak aanpakken voordat restauratief werk duurzaam wordt."],
      ["Wanneer is restauratief ingrijpen duidelijker aangewezen?", "Bij gecaviteerde laesie met dentinebetrokkenheid", "Bij elke white spot", "Bij plaque zonder laesie", "Bij alleen droge mond", "Cavitatie en reinigingsonmogelijkheid maken restauratie logisch."],
    ]),

    sociale_cikmis_2025_juni_drive: fromConcepts("Sociale TH / Ethiek cikmis", "Ethiek 2025 juni", [
      ["Welk ethisch principe staat centraal bij informed consent?", "Autonomie", "Alleen rechtvaardigheid", "Paternalisme", "Utilitarisme zonder toestemming", "Autonomie betekent dat de patient geinformeerd zelf beslist."],
      ["Wat moet de tandarts minimaal bespreken voor toestemming?", "Diagnose, behandeling, alternatieven, risico's en nietsdoen", "Alleen de prijs", "Alleen de behandelduur", "Alleen de technische naam", "Informed consent vraagt begrijpelijke informatie over relevante keuzes."],
      ["Wat betekent non-maleficence?", "Niet schaden", "Altijd behandelen", "Iedereen hetzelfde tarief", "Patient mag niets beslissen", "Non-maleficence is de plicht schade te vermijden."],
      ["Wat betekent beneficence?", "Handelen in het belang van de patient", "Alleen eigen belang volgen", "Nooit verwijzen", "Geen uitleg geven", "Beneficence is weldoen: het welzijn van de patient bevorderen."],
      ["Wat is belangrijk bij een wilsonbekwame patient?", "Wettelijke vertegenwoordiger betrekken en belang patient bewaken", "Altijd zonder toestemming behandelen", "Altijd weigeren", "Alleen assistent laten beslissen", "Bij wilsonbekwaamheid blijft proportionaliteit en patientbelang leidend."],
      ["Wanneer mag beroepsgeheim worden doorbroken?", "Bij zwaarwegend gevaar en na zorgvuldige afweging", "Bij elke nieuwsgierige vraag", "Nooit, ook niet bij acuut gevaar", "Alleen voor marketing", "Doorbreken kan alleen uitzonderlijk, bijvoorbeeld bij ernstig gevaar."],
      ["Wat is professioneel bij een fout of complicatie?", "Open disclosure: uitleg, empathie en dossiervoering", "Verzwijgen", "Alleen mondeling ontkennen", "Patient blokkeren", "Transparantie en leren van fouten horen bij professioneel handelen."],
      ["Wat betekent rechtvaardigheid in zorgcontext?", "Eerlijke verdeling en gelijke behandeling van vergelijkbare gevallen", "De snelste patient krijgt alles", "Alleen betalende patienten helpen", "Altijd dezelfde behandeling voor iedereen", "Rechtvaardigheid gaat over eerlijke toegang en proportionele keuzes."],
    ]),

    kinesio_cikmis_2025_juni_drive: fromConcepts("Kinesiologie / TMD cikmis", "THK2 2025 Juni", [
      ["Wat past het best bij discusverplaatsing met repositie?", "Klik bij openen en sluiten", "Volledig pijnloze normale beweging", "Altijd koorts", "Periapicale radiolucentie", "Reciproke klik is klassiek voor discusverplaatsing met repositie."],
      ["Wat is eerste keus bij de meeste TMD-klachten?", "Conservatief beleid: uitleg, oefentherapie, spalk/pijnstilling waar nodig", "Direct chirurgie", "Alle kiezen inslijpen", "Antibiotica", "TMD wordt meestal reversibel en conservatief behandeld."],
      ["Welke spier is een krachtige mondsluiter?", "M. masseter", "M. digastricus", "M. mylohyoideus", "M. geniohyoideus", "Masseter, temporalis en pterygoideus medialis sluiten de mond."],
      ["Welke beweging hoort bij de laterale pterygoid?", "Protrusie en openen ondersteunen", "Alleen lip sluiten", "Tong heffen", "Speeksel produceren", "De laterale pterygoid trekt condylus/discus naar voren."],
      ["Wanneer is OSAS ernstig op AHI?", "AHI 30 of hoger", "AHI 1", "AHI 5 alleen", "AHI 10 altijd ernstig", "OSAS: licht 5-15, matig 15-30, ernstig >=30."],
      ["Wat is de gouden standaard voor OSAS-diagnostiek?", "Polysomnografie", "Bitewing", "Speekseltest", "DPSI", "Slaaponderzoek objectiveert apneu/hypopneu."],
      ["Wanneer kan een MRA passend zijn bij OSAS?", "Bij licht-matig OSAS of CPAP-intolerantie", "Bij elke ernstige OSAS als eerste keus", "Alleen bij caries", "Nooit", "CPAP is goudstandaard; MRA is bruikbaar bij geselecteerde patienten."],
      ["Welke bijwerking kan op lange termijn bij MRA optreden?", "Occlusieverandering", "Pulpanecrose door fluoride", "Gingivale hyperplasie", "Tonsillitis", "MRA kan mandibula/tandstand langdurig beinvloeden."],
      ["Wat is bruxisme primair?", "Herhaald kauwspieractiviteit zoals klemmen of knarsen", "Een bacteriele infectie", "Een cyste", "Een speekselklierziekte", "Bruxisme is spieractiviteit, niet per se een ziekte."],
      ["Wat is belangrijk bij TMD-anamnese?", "Pijn, functiebeperking, geluiden, parafunctie en psychosociale factoren", "Alleen bloeddruk", "Alleen cariesstatus", "Alleen fluoridegebruik", "TMD-diagnostiek is biopsychosociaal."],
    ]),

    functie_cikmis_2025_juni_drive: fromConcepts("Orale Functieleer / MZK cikmis", "THK2 2025 Juni", [
      ["Wat beschrijft centric relation het best?", "Kaakrelatie onafhankelijk van tandcontacten", "Maximale intercuspidatie", "Alleen laterotrusie", "Een cariesindex", "CR is een gewrichts/kaakrelatie, niet hetzelfde als maximale occlusie."],
      ["Wat is canine guidance?", "Laterale geleiding vooral door de cuspidaten", "Alle molaren dragen lateraal", "Geen contact bij laterale beweging", "Alleen incisale beet", "Bij hoektandgeleiding discluderen posterioren tijdens laterale beweging."],
      ["Wat is groepsfunctie?", "Meerdere elementen begeleiden laterale beweging", "Alleen de centrale incisief", "Geen enkel contact", "Alleen een protheseconcept", "Groepsfunctie verdeelt laterale contacten over meerdere tanden."],
      ["Wat is een belangrijk risico bij extractie bovenmolaar?", "Sinusperforatie", "Avulsie van onderincisief", "Ankylose van TMJ", "Fluorose", "Bovenmolaarwortels liggen dicht bij sinus maxillaris."],
      ["Wat is eerste beleid bij alveolitis sicca?", "Spoelen/inspectie, pijnstilling en eventueel Alvogyl", "Systemisch antibiotica standaard", "Direct implantaat", "Geen pijnstilling", "Droge alveole is pijnlijk maar meestal lokaal te behandelen."],
      ["Wanneer is verwijzing/hospitalisatie urgenter bij infectie?", "Trismus, koorts, slikproblemen of mondbodemzwelling", "Alleen lichte drukpijn", "Alleen koudegevoeligheid", "Alleen plaque", "Diepe loge-infecties kunnen luchtwegbedreigend zijn."],
      ["Wat is MRONJ?", "Medicatie-gerelateerde osteonecrose van de kaak", "Een orthodontische klasse", "Een speekseltest", "Een carieslaesie", "MRONJ is geassocieerd met antiresorptiva/antiangiogene medicatie."],
      ["Welke medicatiegroep verhoogt MRONJ-risico?", "Bisfosfonaten en denosumab", "Paracetamol", "Fluoridetabletten", "Vitamine C", "Antiresorptiva remmen botturnover en verhogen risico bij kaakchirurgie."],
      ["Wat is belangrijk voor implantaatplanning?", "Botvolume, anatomie, medische risico's en prothetisch plan", "Alleen de kleur van tanden", "Alleen leeftijd", "Geen rontgen nodig", "Implantologie is prothetisch gestuurd en anatomisch begrensd."],
      ["Wat is een contra-indicatie voor direct electieve chirurgie?", "Slecht gereguleerde systemische ziekte of acute infectieverspreiding", "Gezonde patient", "Goede mondhygiene", "Stabiele occlusie", "Medische stabiliteit en infectiecontrole komen eerst."],
      ["Welke fase hoort vroeg in een behandelplan?", "Pijn, infectie en hopeloze elementen aanpakken", "Eerst definitieve kronen", "Eerst whitening", "Eerst esthetische veneers", "Spoed en causaliteit gaan voor definitieve restauratie."],
      ["Wat is belangrijk bij prothetische planning?", "Steun, retentie, stabiliteit en occlusie", "Alleen tandkleur", "Alleen anesthesie", "Alleen antibioticum", "Prothetiek vraagt mechanische en biologische randvoorwaarden."],
    ]),

    pato_cikmis_2025_juni_drive: fromConcepts("Orale Pathologie cikmis", "THK2 2025 Juni", [
      ["Welke laesie is het meest verdacht premaligne?", "Erythroplakie", "Linea alba", "Fordyce spots", "Fissured tongue", "Erythroplakie heeft relatief hoge kans op dysplasie/maligniteit."],
      ["Wat is beleid bij persisterend ulcus langer dan 2 weken?", "Verwijzen/biopt overwegen", "Altijd afwachten", "Alleen poetsadvies", "Antibiotica zonder diagnose", "Niet-genezend ulcus moet maligniteit uitsluiten."],
      ["Welke cyste zit typisch rond de kroon van een niet-doorgebroken tand?", "Dentigerale cyste", "Radiculaire cyste", "Nasolabiale cyste", "Mucokele", "Dentigerale cyste ontstaat rond de kroon."],
      ["Welke odontogene cyste recidiveert relatief vaak?", "Odontogene keratocyste", "Eruptiecyste", "Radiculaire cyste na extractie", "Mucusretentiecyste", "OKC groeit agressiever en recidiveert vaker."],
      ["Wat past bij radiculaire cyste?", "Periapicaal bij een niet-vitale tand", "Rond vitale kroon van impacted tand", "Alleen in lip", "Altijd multiloculair posterieur", "Radiculaire cyste is inflammatoir en apicaal gerelateerd."],
      ["Wat is een ranula?", "Mucusretentie/extravasatie in mondbodem", "Botcyste in mandibula", "Premaligne witte plek", "Speekselsteen in parotisgang", "Ranula komt uit sublinguale speekselklierregio."],
      ["Welke witte laesie veeg je meestal niet af?", "Leukoplakie", "Pseudomembraneuze candidiasis", "Voedseldebris", "Materia alba", "Leukoplakie is een klinische diagnose na uitsluiten andere oorzaken."],
      ["Wat verhoogt risico op mondkanker sterk?", "Roken plus alcohol", "Fluoride", "Sealants", "Xylitol", "Tabak en alcohol werken synergistisch."],
      ["Welke variant lichen planus vraagt extra follow-up?", "Erosieve/atrofische variant", "Alleen reticulaire asymptomatische lijn", "Fordyce spots", "Geografische tong", "Erosieve OLP heeft meer klachten en monitoring nodig."],
      ["Wat is de juiste actie bij vermoeden plaveiselcelcarcinoom?", "Snelle verwijzing naar MKA/oncologisch traject", "Half jaar afwachten", "Alleen mondspoeling", "Restauratie maken", "Vroege diagnose is bepalend voor prognose."],
    ]),

    ortho_cikmis_2025_juni_drive: fromConcepts("Orthodontie cikmis", "THK2 2025 Juni", [
      ["Wat is normale overjet ongeveer?", "2-4 mm", "10-12 mm", "0 mm altijd", "8 mm standaard", "Overjet van 2-4 mm wordt meestal als normaal beschouwd."],
      ["Wat gebeurt aan de drukzijde bij orthodontische tandbeweging?", "Botresorptie door osteoclasten", "Botaanmaak door osteoblasten", "Geen PDL-reactie", "Emailvorming", "Drukzijde activeert botafbraak; trekzijde botaanmaak."],
      ["Wat gebeurt aan de trekzijde?", "Botaanmaak", "Botresorptie", "Pulpanecrose standaard", "Caries", "Trek in PDL stimuleert osteoblastische botaanmaak."],
      ["Waarom is retentie nodig?", "Om relapse te beperken", "Om caries te genezen", "Om speeksel te verhogen", "Om alle pijn te stoppen", "Tanden hebben neiging terug te bewegen door PDL en groei."],
      ["Wat is een kruisbeet?", "Boven-element staat te ver linguaal/palatinaal t.o.v. onder-element", "Alleen diepe beet", "Altijd open beet", "Alleen crowding", "Crossbite is een transversale afwijking."],
      ["Wat is een diepe beet?", "Vergrote verticale overlap", "Geen verticale overlap", "Alleen sagittale afwijking", "Geen contact posterior", "Deep bite gaat over verticale incisale overlap."],
      ["Wat is open beet?", "Ontbrekende verticale overlap/contact waar dit verwacht wordt", "Te veel overbite", "Alle tanden staan perfect", "Alleen rotatie", "Open beet kan anterior of posterior zijn."],
      ["Welke kracht is bij orthodontie wenselijk?", "Licht en continu", "Heel zwaar en kort", "Alleen intermitterend trauma", "Geen controle nodig", "Lichte continue krachten geven biologisch gunstiger beweging."],
      ["Wat is interceptieve orthodontie?", "Vroeg ingrijpen om ontwikkeling te sturen", "Alleen volwassenenbehandeling", "Alleen retentie", "Alleen extractie van verstandskiezen", "Interceptief behandelt of voorkomt ernstiger afwijkingen in groei."],
      ["Welke complicatie kan bij langdurige orthodontie optreden?", "Wortelresorptie", "Endocarditis standaard", "Sialolithiasis", "ANUG altijd", "Apicale wortelresorptie is een bekende orthodontische complicatie."],
    ]),

    radio_cikmis_2024_juni_drive: fromConcepts("Radiologie cikmis", "2024 JUNI RADIO VRAGEN", [
      ["Wat betekent ALARA?", "Stralingsdosis zo laag als redelijkerwijs haalbaar", "Altijd loodschort zonder indicatie", "Altijd hoogste dosis", "Alleen CBCT gebruiken", "ALARA/optimalisatie blijft kernprincipe."],
      ["Wanneer is CBCT gerechtvaardigd?", "Als 2D-opnamen onvoldoende zijn en het beleid verandert", "Altijd bij elke endo", "Voor routinecontrole zonder vraag", "Nooit", "CBCT vraagt specifieke indicatie vanwege hogere dosis."],
      ["Welke opname is nuttig voor interproximaal botverlies?", "Bitewing", "Schedel-PA", "MRI", "Echo", "Bitewings tonen alveolaire kam en approximale caries goed."],
      ["Wat is een periapicale radiolucentie bij niet-vitale tand vaak?", "Apicale parodontitis/granuloom/cyste spectrum", "Altijd ameloblastoom", "Altijd gezonde anatomie", "Alleen sinus", "Vitaliteit en kliniek bepalen verdere diagnose."],
      ["Wat is condenserende osteitis radiologisch?", "Periapicale radiopaciteit", "Multiloculaire lucentie", "Volledig normale lamina dura", "Horizontale fractuur", "Chronische lage prikkel kan sclerotisch bot geven."],
      ["Wat doet hogere kV met contrast?", "Minder contrast, grijzer beeld", "Altijd meer contrast", "Geen effect", "Foto wordt MRI", "Hogere energie geeft meer doordringing en minder contrastverschil."],
      ["Welke structuur moet je beschermen bij intraorale opnamen?", "Schildklier waar relevant met goede collimatie/techniek", "Alleen elleboog", "Geen weefsels", "Alleen knie", "Optimalisatie gebruikt collimatie, snelle receptor en indicatie."],
      ["Wat is belangrijk bij opnamekeuze?", "Klinische vraag bepaalt techniek", "Altijd panorama eerst", "Altijd CBCT eerst", "Geen indicatie nodig", "Rechtvaardiging begint bij de diagnostische vraag."],
      ["Wat kan een panoramafoto minder goed tonen dan intraoraal?", "Fijne approximale cariesdetails", "Grove kaakoverzicht", "Mandibulakanaal verloop", "Sinusgebied globaal", "Panorama is overzicht maar minder scherp dan intraorale opname."],
      ["Wat is stochastische stralingsschade?", "Kansgebonden effect zonder duidelijke drempel", "Effect met harde drempel zoals erytheem", "Altijd direct zichtbaar", "Geen biologisch effect", "Bij lage tandheelkundige doses gaat het vooral om kansrisico."],
    ]),

    statistiek_cikmis_2023_2024_drive: fromConcepts("Statistiek / EBM cikmis", "2023-2024 wetenschap", [
      ["Hoe bereken je sensitiviteit?", "TP / (TP + FN)", "TN / (TN + FP)", "TP / (TP + FP)", "FN / (FN + TP)", "Sensitiviteit is het aandeel zieken dat positief test."],
      ["Hoe bereken je specificiteit?", "TN / (TN + FP)", "TP / (TP + FN)", "TP / (TP + FP)", "FP / (FP + TN)", "Specificiteit is het aandeel niet-zieken dat negatief test."],
      ["Wat gebeurt met PPV bij lagere prevalentie?", "PPV daalt", "PPV stijgt altijd", "PPV blijft exact gelijk", "PPV wordt sensitiviteit", "Bij lage prevalentie wegen vals-positieven zwaarder."],
      ["Wat betekent SnNout?", "Hoge sensitiviteit: negatieve test sluit uit", "Hoge specificiteit: negatieve test sluit uit", "Lage sensitiviteit bevestigt", "Odds ratio", "SnNout is een diagnostisch ezelsbruggetje."],
      ["Wat betekent SpPin?", "Hoge specificiteit: positieve test bevestigt", "Hoge sensitiviteit: positieve test bevestigt", "Lage specificiteit sluit uit", "NNT", "SpPin koppelt specificiteit aan bevestigen bij positieve test."],
      ["Hoe bereken je ARR?", "Risico controle - risico interventie", "Risico interventie / risico controle", "Odds cases / odds controls", "1 / risico interventie", "ARR is absoluut risicoverschil."],
      ["Hoe bereken je NNT?", "1 / ARR", "ARR / 1", "Sensitiviteit + specificiteit", "TP / FP", "NNT is het omgekeerde van absolute risicoreductie."],
      ["Welk design geeft sterk bewijs voor interventie-effect?", "Gerandomiseerde gecontroleerde trial", "Case report", "Expert opinion alleen", "Narratieve mening", "RCT beperkt confounding via randomisatie."],
      ["Wat is recall bias vooral?", "Vertekende herinnering van blootstelling", "Meetfout door kapotte rontgenbuis", "Alleen randomisatie", "Geen bias", "Komt vaak voor bij case-control studies."],
      ["Wat is confounding?", "Een derde factor vertekent verband tussen blootstelling en uitkomst", "Alleen een type tandsteen", "Een perfecte randomisatie", "Een p-waarde", "Confounding kan een schijnverband of verborgen verband veroorzaken."],
    ]),

    radio_cikmis_2020_juni_drive: fromConcepts("Radiologie cikmis", "BI 2020 Radiologie", [
      ["Volgens onderzoeken wordt bij adolescenten meer dentinecaries gevonden met rontgenfoto's dan met spiegel en sonde. Wat is juist?", "Rontgenfoto's kunnen verborgen dentinecaries beter tonen", "Spiegel en sonde tonen altijd meer dentinecaries", "Rontgenfoto's zijn hiervoor nooit bruikbaar", "Alleen panorama is geschikt", "Bitewings detecteren approximale/dentine laesies die klinisch gemist kunnen worden."],
      ["Wat is halsschaduw op een rontgenfoto?", "Een projectie/absorptie-effect dat op caries kan lijken", "Altijd beginnende caries", "Altijd wortelfractuur", "Altijd botverlies", "Cervical burnout ontstaat door lagere absorptie in de halsregio."],
      ["Wat is bij de bissectriceregel-techniek kenmerkend?", "Geen paralleltechniek met filmhouder zoals bij instelapparaat", "Altijd CBCT", "Altijd panorama", "Geen intraorale opname", "Bissectrice gebruikt een andere geometrie dan paralleltechniek."],
      ["Welk materiaal is doorgaans meer radioopaak?", "Amalgaam", "Dentine", "Lucht", "Pulpakamer", "Metalen zoals amalgaam absorberen meer straling."],
      ["Waarmee hangt kilovoltage vooral samen?", "Doordringvermogen van de rontgenbundel", "Alleen filmformaat", "Alleen speekselflow", "Alleen vergroting", "Hogere kV geeft meer doordringing en ander contrast."],
      ["Hoe ziet de parodontaalspleet er radiologisch uit?", "Radiolucente lijn", "Radiopake bol", "Altijd onzichtbaar", "Alleen op CBCT zichtbaar", "PDL-ruimte is een donkere lijn tussen lamina dura en wortel."],
      ["Zijn bitewings alleen voor interproximale caries bedoeld?", "Nee, ook botniveau/parodontale beoordeling kan relevant zijn", "Ja, uitsluitend caries", "Nooit voor caries", "Alleen voor sinusdiagnostiek", "Bitewings tonen approximale caries en alveolaire kam."],
      ["Wanneer is een panorama-opname gerechtvaardigd?", "Als de klinische vraag niet met kleinere/solo-opname te beantwoorden is", "Altijd bij elke controle", "Nooit", "Alleen bij zwangerschap", "Rechtvaardiging vraagt passende diagnostische meerwaarde."],
      ["Wat betekent ALARA?", "As Low As Reasonably Achievable", "As Long As Radiographs Apply", "Always Large Radiographic Area", "Automatic Low Angle Radiography", "Dosis zo laag als redelijkerwijs haalbaar."],
      ["Mogen intraorale opnamen bij zwangerschap indien gerechtvaardigd?", "Ja, met indicatie en optimalisatie", "Nee, absoluut nooit", "Alleen na bevalling", "Alleen met CBCT", "Zwangerschap is geen absolute contra-indicatie bij noodzakelijke tandheelkundige opname."],
      ["Wat moet met fosforplaatjes gebeuren na belichting?", "Scannen/uitlezen", "Autoclaveren voor uitlezen", "In de ontwikkelvloeistof", "Weggooien zonder scan", "PSP-platen moeten digitaal worden uitgelezen."],
      ["Welke begrenzing van radiolucentie kan verdacht zijn voor maligniteit?", "Onscherp slecht gedefinieerd", "Perfect corticaal begrensd", "Altijd hartvormig", "Alleen rond kroon", "Invasieve laesies hebben vaker onscherpe grenzen."],
      ["Wat is belangrijk bij beoordeling van botafbraak?", "Bundelrichting en projectie meenemen", "Alleen tandkleur", "Alleen leeftijd", "Geen opnamekwaliteit", "Projectiefouten kunnen botniveau vertekenen."],
    ]),

    statistiek_cikmis_2020_juni_drive: fromConcepts("Statistiek / Methodologie cikmis", "BI 2020 Statistiek en Methodologie", [
      ["Wat is het meetniveau van eetgewoonten zoals suiker/zuur/zout/water categorieen?", "Nominaal", "Ordinaal", "Interval", "Ratio", "Categorieen zonder natuurlijke rangorde zijn nominaal."],
      ["Mag je de range berekenen bij slijtage in millimeters?", "Ja, bij kwantitatieve ratio/intervaldata", "Nee, nooit", "Alleen bij nominale data", "Alleen bij geslacht", "Range = maximum - minimum en past bij numerieke data."],
      ["In regressie y = 3,5 + 0,5x, wat betekent 3,5?", "Verwachte score bij x = 0", "Hellingshoek", "Correlatie", "P-waarde", "Intercept is voorspelde uitkomst zonder voorbereidingstijd."],
      ["Wanneer mag de nulhypothese verworpen worden bij p=0,03 en alpha=0,05?", "Omdat p kleiner is dan alpha", "Omdat p groter is dan alpha", "Nooit bij t-toets", "Alleen bij n=1000", "p<0,05 betekent statistisch significant op 5%-niveau."],
      ["Waarvan hangt de power van een studie onder andere af?", "Effectgrootte", "Alleen titel", "Alleen tandnummer", "Alleen kleurcodering", "Groter effect is makkelijker te detecteren."],
      ["Welke toets past bij vier dieetgroepen en gewichtsverandering in kg?", "Eenweg-ANOVA", "Chi-kwadraattoets", "McNemar altijd", "Fisher exact altijd", "Continue uitkomst met >2 groepen: ANOVA."],
      ["Welke toets past bij leeftijdsgroep en correct/incorrect als categorische variabelen?", "Chi-kwadraattoets", "Independent t-toets", "ANOVA", "Pearson correlatie", "Twee categorische variabelen vergelijk je met chi-kwadraat."],
      ["Wat is een PICO-domein voor 5000 ppm versus 1450 ppm fluoride tegen wortelcaries?", "Therapie/preventie", "Diagnostiek", "Etiologie alleen", "Prognose zonder interventie", "Het vergelijkt preventieve interventies."],
      ["Welk design is een studie met random toewijzing aan 5000 ppm of 1450 ppm tandpasta?", "Gerandomiseerde gecontroleerde trial", "Case-control", "Cross-sectioneel", "Case report", "Randomisatie naar interventie wijst op RCT."],
      ["Wat is blindering in een interventiestudie?", "Patient/onderzoeker weet niet welke interventie wordt gebruikt", "Alle data verwijderen", "Alleen meer deelnemers", "Geen follow-up", "Blindering beperkt performance/detectiebias."],
      ["Wat betekent compliance-bias praktisch?", "Deelnemers volgen de interventie niet zoals bedoeld", "De onderzoeker rekent verkeerd", "De uitkomst is nominaal", "De tabel is te klein", "Niet-naleving kan effectschatting vertekenen."],
      ["Hoe verhoog je betrouwbaarheid van CAL-metingen?", "Standaardisatie en kalibratie van beoordelaars", "Elke keer andere sonde", "Geen protocol", "Alleen patient mening", "Meetbetrouwbaarheid vraagt stabiele procedure en kalibratie."],
    ]),

    pato_cikmis_2022_juni_drive: fromConcepts("Orale Pathologie / MKA cikmis", "THK2 Juni 2022", [
      ["Wat is de etiologie van lingua geografica?", "Onbekend", "Altijd Candida albicans", "Altijd alcohol", "Altijd roken", "De oorzaak van lingua geografica is niet eenduidig bekend."],
      ["Waar komen aften relatief minder vaak voor?", "Gingiva en gehemelte", "Binnenzijde onderlip", "Wangslijmvlies", "Omslagplooi", "Aften zitten vooral op niet-gekeratiniseerde mucosa."],
      ["Welke behandeling kan bij aften gebruikt worden?", "Corticosteroiden", "Alleen antischimmelmiddel", "Altijd antibiotica", "Altijd extractie", "Topische corticosteroiden kunnen ontsteking/pijn verminderen."],
      ["Aftenachtige laesies met koorts doen denken aan?", "Herpes simplex infectie", "Fordyce spots", "Neurofibromatose", "Linea alba", "Koorts past bij virale/systemische infectie."],
      ["Hoe ziet het slijmvlies er bij mondbranden vaak uit?", "Min of meer normaal", "Altijd felrood", "Altijd geel", "Altijd ulceratief", "Burning mouth heeft vaak weinig zichtbare afwijkingen."],
      ["Bij welke aandoening speelt Candida vrijwel zeker geen etiologische rol?", "Focale epitheliale hyperplasie", "Stomatitis prothetica", "Cheilitis angularis", "Mediane rhomboide glossitis", "Focale epitheliale hyperplasie is HPV-gerelateerd."],
      ["Een papilloom van mondslijmvlies wordt vermoedelijk veroorzaakt door?", "Een virus, vaak HPV", "Amalgaamcontact", "Excessief poetsen", "Fluoride", "Papillomen zijn vaak HPV-geassocieerd."],
      ["Waar zie je raciale pigmentatie vooral?", "Gingiva en alveolaire mucosa", "Alleen tongrug", "Alleen mondbodem", "Alleen wangslijmvlies", "Melaninepigmentatie is vaak gingivaal/alveolair zichtbaar."],
      ["Welke aandoening kan pigmentatie van huid en slijmvlies geven?", "Ziekte van Addison", "Hypertensie", "Diabetes mellitus standaard", "Acute pulpitis", "Addison kan mucocutane hyperpigmentatie veroorzaken."],
      ["Waarvan kan een ameloblastoom ontstaan?", "Wand van een dentogene cyste", "Ductus nasopalatinus cyste alleen", "Simpele beencyste altijd", "Speekselkliergang", "Ameloblastoom is odontogeen en kan cystegeassocieerd zijn."],
      ["Wat is een residuale cyste etiologisch meestal?", "Achtergebleven radiculaire cyste", "Achtergebleven eruptiecyste", "Achtergebleven ranula", "Nieuwe papilloom", "Residuale cyste blijft achter na verwijderen van oorzakelijke tand."],
      ["Wat is beleid bij focaal scleroserende osteomyelitis?", "Oorzaak behandelen of afwachten afhankelijk van kliniek", "Altijd radiotherapie", "Altijd chemotherapie", "Altijd niets ongeacht klachten", "Beleid hangt af van oorzaak/symptomen; vaak endo/extractie of controle."],
      ["Wat is typisch voor dentogene sinusitis?", "Eenzijdige foetide neusafvloed en dentale oorzaak", "Altijd bilateraal door verkoudheid", "Nooit pijn", "Alleen oogklachten", "Odontogene sinusitis is vaak eenzijdig met dentale focus."],
      ["Hoe wordt een verse oro-antrale perforatie na extractie behandeld?", "Primair sluiten, vaak met instructies en medicatie op indicatie", "Altijd open laten", "Alleen spoelen tot helder", "Nooit hechten", "Verse communicatie moet gesloten worden om sinuscomplicatie te voorkomen."],
      ["Welke verstandskiespositie is vaak het moeilijkst te verwijderen?", "Disto-angulair", "Mesio-angulair", "Verticaal", "Volledig doorgebroken recht", "Disto-angulaire derde molaren zijn technisch vaak lastiger."],
      ["Waar vind je kaakbotmetastasen relatief vaak?", "Kaakhoek/ondermolaarstreek", "Bovenfront", "Alleen tuber", "Onderfront alleen", "Mandibula posterieur is klassiek vaker betrokken."],
      ["Wat is de meest voorkomende kwaadaardige tumor in de mond?", "Plaveiselcelcarcinoom", "Speekselkliertumor", "Non-Hodgkin lymfoom", "Metastase", "OSCC is de meest voorkomende orale maligniteit."],
      ["Welke late bijwerking past bij bestraling in hoofd-halsgebied?", "Osteoradionecrose", "Directe eruptie", "Acute fluorose", "Gingivale hyperplasie door nifedipine", "ORN is een bekende late radiatiecomplicatie."],
    ]),

    functie_cikmis_2022_juni_drive: fromConcepts("Prothese / Functieleer cikmis", "THK2 Juni 2022", [
      ["Wang- of tongbijten bij prothese kan ontstaan wanneer molaren niet waar staan?", "Niet in de neutrale zone", "Altijd te wit zijn", "Te radioopaak zijn", "Geen cuspidaat hebben", "Neutrale zone is belangrijk voor spierbalans."],
      ["Geven ondersnijdingen in de kaak altijd meer retentie voor volledige prothese?", "Nee, ze kunnen insertierichting juist hinderen", "Ja, altijd", "Alleen bij bovenkaak altijd", "Alleen bij kinderen", "Undercuts moeten vaak geblokt of chirurgisch gecorrigeerd worden."],
      ["Is frameprothese gecontra-indiceerd bij slechte mondhygiene?", "Ja, slechte mondhygiene is een belangrijke contra-indicatie", "Nee, nooit relevant", "Alleen bij fluoridegebruik", "Alleen bij gezonde patient", "Frameprothesen verhogen plaque-retentie rond pijlers."],
      ["Bij immediaatprothese-extracties, welke volgorde is logisch?", "Planning per kaak; wondsluiting systematisch, vaak posterior naar anterior/distal starten", "Willekeurig", "Altijd alleen boven", "Nooit hechten", "Extractie/hechting volgt prothetisch-chirurgische planning."],
      ["Hoe onderscheidt een worteltang zich vaak van een gewone extractietang?", "Bekken die elkaar raken", "Geen handvat", "Altijd plastic", "Alleen voor bovenmolaren", "Worteltangen hebben smallere bekken voor wortelresten."],
      ["Welke occlusie past bij veel volledige prothesen?", "Bilateraal gebalanceerde occlusie", "Altijd cuspidaatgeleiding", "Altijd open beet", "Geen contact", "Volledige prothesen vragen stabiliteit bij bewegingen."],
      ["Wat is een nadeel van adhesiefbrug bij diepe beet?", "Weinig ruimte voor retentievleugel", "Te veel speekselproductie", "Altijd wortelresorptie", "Nooit esthetisch", "Deep bite kan ruimte en belasting ongunstig maken."],
      ["Wat is een voordeel van lithiumdisilicaat?", "Esthetiek", "Altijd goedkoopste", "Geen preparatie nodig", "Geneest caries", "Lithiumdisilicaat is bekend om esthetische eigenschappen."],
      ["Wat is bij peri-implantitis kenmerkend?", "Botverlies rond implantaat met ontsteking", "Alleen cariës in implantaat", "Pulpanecrose", "Furcatie in implantaat", "Implantaten hebben geen pulpa maar kunnen peri-implantaire botafbraak krijgen."],
      ["Wat is belangrijk bij pijlerselectie voor frameprothese?", "Strategische verdeling, parodontale prognose en hygiene", "Alleen tandkleur", "Alleen leeftijd", "Geen occlusie", "Pijlers bepalen steun, retentie en prognose."],
    ])
  };

  Object.keys(sets).forEach(function(id){
    window.QUIZZES[id] = sets[id];
  });

  window.DRIVE_IMPORT_MANIFEST = [
    {folder:"2025 Juni", files:["THK1 2025 Juni.pdf","2025 JUNI THK2.pdf","Ethiek 2025 juni[1].pdf"]},
    {folder:"2025 december", files:["THK1-2025 DEC.docx","casuslar.docx","canvas casuslar hepsi.pdf","Ethiek.docx","THK2-2025 DEC.pdf","2025-Dec THK2.rtf","2025 December THK2 Part 1.pdf","2025 December THK2 Part 2.docx","3 WhatsApp exam images"]},
    {folder:"2024 JUNI CIKMIS SORULAR", files:["2024 JUNI CASUS 2&3.docx","Juni 2024 casussen.docx","2024 JUNI RADIO VRAGEN.docx","2024 JUNI THK 2-VRAGEN.docx","2024 JUNI- THK 1- VRAGEN.docx","EXTRA-Examens of afgelopende jaren THK-1.pdf","EXTRA-THK2_laatste_jaren_zonder_herhaaldvragen[1].pdf","2024 JUNI BM.docx"]},
    {folder:"Root/older archive", files:["BASIS MEDISCH 2020-2025.pdf","Casusen vanaf 2018 (1).pdf","Perio cikmislar.pdf","Endo cikmislar.pdf","Pedo cikmislar.pdf","Speeksel cikmislar.pdf","2020","2021","2022","2023","2019","2018"]}
  ];
})();
