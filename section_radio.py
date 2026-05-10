import os
OUTPUT = '/sessions/determined-eloquent-pasteur/mnt/outputs/BI_Toets_Studieplatform.html'

RADIO = '''
<!-- ██████ RADIOLOGIE ██████ -->
<div class="page" id="page-radio">
  <div class="section-hdr">
    <div class="section-icon si-blue">📡</div>
    <div><h2>Radiologie</h2><p>Radiologie &amp; Wetenschap · 20 MC-vragen · Slagingsgrens 80%</p></div>
  </div>
  <div class="tab-bar">
    <button class="tab-btn active" onclick="openTab('radio','notities',this)">📖 Studienotities</button>
    <button class="tab-btn" onclick="openTab('radio','samenvatting',this)">⚡ Samenvatting</button>
    <button class="tab-btn" onclick="openTab('radio','cikmis',this)">📝 Cikmış Sorular</button>
    <button class="tab-btn" onclick="openTab('radio','oefen',this)">🧪 Oefentoets (AI)</button>
  </div>
  <div class="tab-content active" id="radio-notities">
    <div class="info-box"><div class="info-box-title">🎯 Kernthema's Radiologie</div>
    <ul>
      <li>Röntgenproductie – eigenschappen van röntgenstraling</li>
      <li>Beeldvorming – periapicale, bitewing, panorama, CBCT</li>
      <li>Stralingsbescherming – ALARA-principe, beschermingsmiddelen</li>
      <li>Dosimetrie – eenheden (Gy, Sv, mSv)</li>
      <li>Radiologische diagnostiek tandheelkundige aandoeningen</li>
      <li>Kwaliteitscriteria röntgenfoto's</li>
    </ul></div>

    <div class="theory-card open">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-blue">Straling</span><h3>Röntgenstraling – Productie en Eigenschappen</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <ul>
          <li><strong>Productie:</strong> Elektronen worden versneld naar wolframanode → bremsstrahlung + karakteristieke straling</li>
          <li><strong>Eigenschappen:</strong> Elektromagnetische golf, reist met lichtsnelheid, geen massa/lading, ioniserend</li>
          <li><strong>kV (kilovolt):</strong> Bepaalt kwaliteit (doordringvermogen) van de straling. Hoger kV → meer contrast reductie (grijzer beeld), meer doordringvermogen</li>
          <li><strong>mA (milliampère):</strong> Bepaalt kwantiteit (intensiteit). Hoger mA → meer fotonen → hogere dosis</li>
          <li><strong>Belichting (s):</strong> Duur van röntgenpulsatie. Minder mAs → lagere dosis</li>
        </ul>
        <div class="info-box">
          <div class="info-box-title">Inversekwadraatswet</div>
          <ul>
            <li>Intensiteit straling neemt af met het kwadraat van de afstand</li>
            <li>I₁/I₂ = d₂²/d₁² → dubbele afstand = ¼ intensiteit</li>
            <li>Tandarts moet minstens 1,5-2m van bron staan (of achter muur)</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-orange">Dosimetrie</span><h3>Stralingsdosimetrie – Eenheden</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <table>
          <tr><th>Eenheid</th><th>Grootheid</th><th>Definitie</th></tr>
          <tr><td>Gray (Gy)</td><td>Geabsorbeerde dosis</td><td>1 Gy = 1 J/kg weefsel</td></tr>
          <tr><td>Sievert (Sv)</td><td>Effectieve dosis</td><td>Gy × weegfactor straling × weegfactor weefsel</td></tr>
          <tr><td>Becquerel (Bq)</td><td>Radioactiviteit</td><td>1 verval per seconde</td></tr>
          <tr><td>mSv</td><td>Effectieve dosis (praktijk)</td><td>1/1000 Sv</td></tr>
        </table>
        <p style="margin-top:10px"><strong>Referentiedoses tandheelkunde:</strong></p>
        <table>
          <tr><th>Opname</th><th>Effectieve dosis</th></tr>
          <tr><td>Periapicale foto (digitaal)</td><td>~1-8 µSv</td></tr>
          <tr><td>Bitewing (digitaal)</td><td>~1-5 µSv</td></tr>
          <tr><td>Panoramafoto</td><td>~15-25 µSv</td></tr>
          <tr><td>CBCT (klein FOV)</td><td>~30-50 µSv</td></tr>
          <tr><td>CBCT (groot FOV)</td><td>~100-300 µSv</td></tr>
          <tr><td>Achtergrondstraling NL/jaar</td><td>~2000 µSv (2 mSv)</td></tr>
        </table>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-green">ALARA</span><h3>ALARA-principe en Stralingsbescherming</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <p><strong>ALARA</strong> = As Low As Reasonably Achievable</p>
        <ul>
          <li><strong>Rechtvaardiging:</strong> Alleen röntgenfoto maken als klinisch voordeel opweegt tegen stralingsrisico</li>
          <li><strong>Optimalisatie:</strong> Gebruik van loodschort, schildklierbeschermer, collimatie, digitale receptoren, correcte instellingen</li>
          <li><strong>Dosislimieten:</strong> Beroepsmatig max 20 mSv/jaar (gemiddeld 5 jaar), publiek max 1 mSv/jaar</li>
          <li><strong>Zwangerschap:</strong> Bij zwangere patiënt: strikt ALARA. Loodschort ALTIJD. Indien medisch noodzakelijk: röntgen niet gecontraïndiceerd.</li>
          <li><strong>Kinderen:</strong> Hogere stralingsgevoeligheid, sneller delende cellen → extra voorzichtigheid, lagere mAs</li>
        </ul>
        <div class="success-box">✅ Loodschort bij zwangere patiënt verplicht! Verwijzen voor CBCT bij zwangerschap tenzij strikt noodzakelijk.</div>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-purple">Diagnostiek</span><h3>Radiologische Diagnostiek Aandoeningen</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <table>
          <tr><th>Aandoening</th><th>Radiologisch beeld</th></tr>
          <tr><td>Caries (approxmaal)</td><td>Radiolucente schaduw onder glazuuroppervlak bitewing</td></tr>
          <tr><td>Periapicale granuloom</td><td>Periapicale radiolucency, ronde begrenzing</td></tr>
          <tr><td>Radiculaire cyste</td><td>Grotere periapicale radiolucency, corticale begrenzing</td></tr>
          <tr><td>Parodontaal botverlies</td><td>Horizontaal of verticaal verlies alveolaire kam</td></tr>
          <tr><td>Condenserende osteïtis</td><td>Periapicale radiopaciteit (reactief bot)</td></tr>
          <tr><td>Hypercementose</td><td>Bolvormige verdikking apex, PDL-ruimte aanwezig</td></tr>
          <tr><td>Ankylosis</td><td>Verdwijnen PDL-ruimte, tand gefuseerd aan bot</td></tr>
        </table>
      </div>
    </div>
  </div>

  <div class="tab-content" id="radio-samenvatting">
    <table class="summary-table">
      <tr><th>Concept</th><th>Kernpunt</th></tr>
      <tr><td>kV effect</td><td>Hogere kV = meer doordringvermogen, minder contrast</td></tr>
      <tr><td>mA effect</td><td>Hogere mA = meer fotonen, hogere dosis</td></tr>
      <tr><td>Inversekwadraatswet</td><td>Dubbele afstand = ¼ intensiteit</td></tr>
      <tr><td>Periapicale foto dosis</td><td>~1-8 µSv (digitaal)</td></tr>
      <tr><td>Panoramafoto dosis</td><td>~15-25 µSv</td></tr>
      <tr><td>CBCT groot FOV</td><td>~100-300 µSv</td></tr>
      <tr><td>Achtergrondstraling NL</td><td>~2 mSv/jaar</td></tr>
      <tr><td>ALARA</td><td>As Low As Reasonably Achievable</td></tr>
      <tr><td>Beroepsmatig max</td><td>20 mSv/jaar</td></tr>
      <tr><td>Zwangere patiënt</td><td>Loodschort altijd, röntgen niet absoluut gecontraïndiceerd</td></tr>
    </table>
  </div>

  <div class="tab-content" id="radio-cikmis">
    <div class="quiz-controls">
      <button class="btn btn-primary" onclick="startQuiz('radio_cikmis')">▶ Start toets (Echte examenvragen)</button>
      <button class="btn btn-secondary" onclick="resetQuiz('radio_cikmis')">↺ Opnieuw</button>
      <div class="quiz-progress" id="radio_cikmis-progress">Nog niet gestart</div>
    </div>
    <div id="radio_cikmis-score" style="display:none"></div>
    <div id="radio_cikmis-quiz"></div>
  </div>

  <div class="tab-content" id="radio-oefen">
    <div class="quiz-controls">
      <button class="btn btn-primary" onclick="startQuiz('radio_oefen')">▶ Start oefentoets (AI)</button>
      <button class="btn btn-secondary" onclick="resetQuiz('radio_oefen')">↺ Opnieuw</button>
      <div class="quiz-progress" id="radio_oefen-progress">Nog niet gestart</div>
    </div>
    <div id="radio_oefen-score" style="display:none"></div>
    <div id="radio_oefen-quiz"></div>
  </div>
</div>

<!-- ██████ STATISTIEK ██████ -->
<div class="page" id="page-statistiek">
  <div class="section-hdr">
    <div class="section-icon si-teal">📊</div>
    <div><h2>Statistiek</h2><p>Radiologie &amp; Wetenschap · 15 MC-vragen · Slagingsgrens 80%</p></div>
  </div>
  <div class="tab-bar">
    <button class="tab-btn active" onclick="openTab('statistiek','notities',this)">📖 Studienotities</button>
    <button class="tab-btn" onclick="openTab('statistiek','samenvatting',this)">⚡ Samenvatting</button>
    <button class="tab-btn" onclick="openTab('statistiek','cikmis',this)">📝 Cikmış Sorular</button>
    <button class="tab-btn" onclick="openTab('statistiek','oefen',this)">🧪 Oefentoets (AI)</button>
  </div>
  <div class="tab-content active" id="statistiek-notities">
    <div class="info-box"><div class="info-box-title">🎯 Kernthema's Statistiek – BI Toets</div>
    <ul>
      <li>Sensitiviteit en specificiteit – 2x2 tabel</li>
      <li>Voorspellende waarden (PPV, NPV)</li>
      <li>Likelihood ratio's (LR+, LR-)</li>
      <li>NNT (Number Needed to Treat), NNH (Number Needed to Harm)</li>
      <li>ARR (Absolute Risicoreductie), RRR (Relatieve Risicoreductie)</li>
      <li>Screeningstest criteria (Wilson-Jungner)</li>
    </ul></div>

    <div class="theory-card open">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-teal">2x2 Tabel</span><h3>2x2 Tabel – Sensitiviteit en Specificiteit</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <table>
          <tr><th></th><th>Ziekte +</th><th>Ziekte -</th></tr>
          <tr><td><strong>Test +</strong></td><td>TP (echte positieven)</td><td>FP (vals positieven)</td></tr>
          <tr><td><strong>Test -</strong></td><td>FN (vals negatieven)</td><td>TN (echte negatieven)</td></tr>
        </table>
        <table style="margin-top:14px">
          <tr><th>Maat</th><th>Formule</th><th>Interpretatie</th></tr>
          <tr><td><strong>Sensitiviteit</strong></td><td>TP / (TP + FN)</td><td>% werkelijk zieken die test+ zijn. Hoog → weinig FN. "SnNout"</td></tr>
          <tr><td><strong>Specificiteit</strong></td><td>TN / (TN + FP)</td><td>% werkelijk gezonden die test- zijn. Hoog → weinig FP. "SpPin"</td></tr>
          <tr><td><strong>PPV</strong></td><td>TP / (TP + FP)</td><td>% test-positieven die echt ziek zijn. Afhankelijk van prevalentie!</td></tr>
          <tr><td><strong>NPV</strong></td><td>TN / (TN + FN)</td><td>% test-negatieven die echt gezond zijn</td></tr>
          <tr><td><strong>LR+</strong></td><td>Sensitiviteit / (1-Specificiteit)</td><td>&gt;10 = zeer sterk bewijs ziekte aanwezig</td></tr>
          <tr><td><strong>LR-</strong></td><td>(1-Sensitiviteit) / Specificiteit</td><td>&lt;0,1 = sterk bewijs ziekte afwezig</td></tr>
        </table>
        <div class="success-box">✅ Ezelsbruggetje: <strong>SnNout</strong> = hoge Sensitiviteit, negatieve test → sluit ziekte UIT. <strong>SpPin</strong> = hoge Specificiteit, positieve test → bevestigt ziekte.</div>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-blue">NNT/ARR</span><h3>NNT, ARR en RRR</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <table>
          <tr><th>Maat</th><th>Formule</th><th>Interpretatie</th></tr>
          <tr><td><strong>ARR</strong> (Absoluut Risicoverschil)</td><td>Risico controle – Risico interventie</td><td>Absolute verbetering. Context afhankelijk.</td></tr>
          <tr><td><strong>RRR</strong> (Relatief Risicoverschil)</td><td>ARR / Risico controle</td><td>% risicoreductie t.o.v. controle. Kan misleidend zijn!</td></tr>
          <tr><td><strong>NNT</strong></td><td>1 / ARR</td><td>Hoeveel patiënten behandelen voor 1 extra genezing. LAGER = beter.</td></tr>
          <tr><td><strong>NNH</strong></td><td>1 / ARI (Absoluut Risico Increment)</td><td>Hoeveel patiënten behandelen voor 1 extra schade</td></tr>
          <tr><td><strong>OR</strong> (Odds Ratio)</td><td>Odds ziekte in behandeld / Odds in controle</td><td>Case-control studies, OR≈RR bij lage prevalentie</td></tr>
          <tr><td><strong>RR</strong> (Relatief Risico)</td><td>Risico behandeld / Risico controle</td><td>Cohort studies, RCT's</td></tr>
        </table>
        <div class="warn-box">⚠️ NNT berekening: als ARR = 0,05 (5%) → NNT = 1/0,05 = 20. Elke 20 behandelde patiënten, 1 extra genezing!</div>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-green">Studiedesign</span><h3>Studiedesigns – Bewijskracht</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <p><strong>Hiërarchie bewijskracht (hoog → laag):</strong></p>
        <ul>
          <li>1. Systematische review + meta-analyse van RCT's</li>
          <li>2. RCT (Gerandomiseerde Gecontroleerde Trial)</li>
          <li>3. Cohort studie (prospectief &gt; retrospectief)</li>
          <li>4. Case-control studie</li>
          <li>5. Cross-sectionele studie</li>
          <li>6. Case report / expertopinie</li>
        </ul>
        <table style="margin-top:10px">
          <tr><th>Studiedesign</th><th>Kenmerk</th><th>Bias risico</th></tr>
          <tr><td>RCT</td><td>Randomisatie, controlegroep</td><td>Laagst</td></tr>
          <tr><td>Cohort</td><td>Blootstelling → uitkomst</td><td>Confounding</td></tr>
          <tr><td>Case-control</td><td>Uitkomst → blootstelling (retrospectief)</td><td>Recall bias</td></tr>
          <tr><td>Cross-sectioneel</td><td>Momentopname, prevalentie</td><td>Geen causaliteit</td></tr>
        </table>
      </div>
    </div>
  </div>

  <div class="tab-content" id="statistiek-samenvatting">
    <table class="summary-table">
      <tr><th>Concept</th><th>Formule</th><th>Onthouden</th></tr>
      <tr><td>Sensitiviteit</td><td>TP/(TP+FN)</td><td><span class="badge-ans">SnNout</span></td></tr>
      <tr><td>Specificiteit</td><td>TN/(TN+FP)</td><td><span class="badge-ans">SpPin</span></td></tr>
      <tr><td>PPV</td><td>TP/(TP+FP)</td><td><span class="badge-ans">Prevalentieafh.</span></td></tr>
      <tr><td>NNT</td><td>1/ARR</td><td><span class="badge-j">Lager = beter</span></td></tr>
      <tr><td>ARR</td><td>Risico control - Risico interventie</td><td><span class="badge-ans">Absoluut</span></td></tr>
      <tr><td>RRR</td><td>ARR/Risico control</td><td><span class="badge-oj">Kan misleiden!</span></td></tr>
      <tr><td>LR+ &gt;10</td><td>Sterk bewijs aanwezig</td><td><span class="badge-j">Goed</span></td></tr>
      <tr><td>LR- &lt;0,1</td><td>Sterk bewijs afwezig</td><td><span class="badge-j">Goed</span></td></tr>
      <tr><td>Hoogste bewijs</td><td>Systematische review van RCT's</td><td><span class="badge-ans">Niveau 1</span></td></tr>
    </table>
  </div>
  <div class="tab-content" id="statistiek-cikmis">
    <div class="quiz-controls">
      <button class="btn btn-primary" onclick="startQuiz('statistiek_cikmis')">▶ Start toets</button>
      <button class="btn btn-secondary" onclick="resetQuiz('statistiek_cikmis')">↺ Opnieuw</button>
      <div class="quiz-progress" id="statistiek_cikmis-progress">Nog niet gestart</div>
    </div>
    <div id="statistiek_cikmis-score" style="display:none"></div>
    <div id="statistiek_cikmis-quiz"></div>
  </div>
  <div class="tab-content" id="statistiek-oefen">
    <div class="quiz-controls">
      <button class="btn btn-primary" onclick="startQuiz('statistiek_oefen')">▶ Start oefentoets (AI)</button>
      <button class="btn btn-secondary" onclick="resetQuiz('statistiek_oefen')">↺ Opnieuw</button>
      <div class="quiz-progress" id="statistiek_oefen-progress">Nog niet gestart</div>
    </div>
    <div id="statistiek_oefen-score" style="display:none"></div>
    <div id="statistiek_oefen-quiz"></div>
  </div>
</div>

<!-- ██████ METHODOLOGIE / EBM ██████ -->
<div class="page" id="page-methodologie">
  <div class="section-hdr">
    <div class="section-icon si-purple">🔭</div>
    <div><h2>Methodologie / Evidence-Based Medicine</h2><p>Radiologie &amp; Wetenschap · Open vragen · PICO</p></div>
  </div>
  <div class="tab-bar">
    <button class="tab-btn active" onclick="openTab('methodologie','notities',this)">📖 Studienotities</button>
    <button class="tab-btn" onclick="openTab('methodologie','oefen',this)">📝 Oefenvragen</button>
  </div>
  <div class="tab-content active" id="methodologie-notities">
    <div class="theory-card open">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-purple">PICO</span><h3>PICO – Evidence-Based Medicine</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <p>PICO is het structureringsmodel voor het formuleren van een klinische vraag:</p>
        <table>
          <tr><th>Letter</th><th>Betekenis</th><th>Voorbeeld (parodontitis)</th></tr>
          <tr><td><strong style="color:var(--primary)">P</strong></td><td>Patient/Probleem/Populatie</td><td>Volwassenen met stadium III parodontitis</td></tr>
          <tr><td><strong style="color:var(--success)">I</strong></td><td>Interventie</td><td>Subgingivale reiniging + amoxicilline</td></tr>
          <tr><td><strong style="color:var(--warning)">C</strong></td><td>Comparator/Controle</td><td>Subgingivale reiniging alleen (placebo)</td></tr>
          <tr><td><strong style="color:var(--danger)">O</strong></td><td>Outcome/Uitkomst</td><td>Pocketdiepte reductie na 3 maanden</td></tr>
        </table>
        <p style="margin-top:10px">Soms uitgebreid tot PICOS (S = Study type/design).</p>
      </div>
    </div>

    <div class="theory-card">
      <div class="theory-header" onclick="toggleCard(this)">
        <span class="theory-tag tt-blue">Bias</span><h3>Bias Typen in Wetenschappelijk Onderzoek</h3><span class="theory-chevron">▼</span>
      </div>
      <div class="theory-body">
        <table>
          <tr><th>Bias type</th><th>Definitie</th><th>Voorkomen</th></tr>
          <tr><td>Selectiebias</td><td>Steekproef niet representatief</td><td>Randomisatie</td></tr>
          <tr><td>Informatiebias</td><td>Onjuiste meting/registratie</td><td>Blindering, validatie instrumenten</td></tr>
          <tr><td>Recall bias</td><td>Patiënten herinneren blootstelling onjuist</td><td>Objectieve data</td></tr>
          <tr><td>Confounding</td><td>Derde variabele beïnvloedt relatie</td><td>Randomisatie, stratificatie, multivariaat analyse</td></tr>
          <tr><td>Publicatiebias</td><td>Positieve studies vaker gepubliceerd</td><td>Grijze literatuur, registratie voor start</td></tr>
          <tr><td>Attrition bias</td><td>Uitval deelnemers niet willekeurig</td><td>Intention-to-treat analyse</td></tr>
        </table>
      </div>
    </div>
  </div>
  <div class="tab-content" id="methodologie-oefen">
    <div class="casus-card">
      <div class="casus-label">EBM Oefenvraag 1</div>
      <div class="casus-text">Een studie vergelijkt chlorhexidine-spoeling met placebo bij patiënten na extractie. In de CHX-groep ontwikkelt 5% alveolitis, in de placebogroep 15%. De studie heeft 200 deelnemers per groep.</div>
      <div class="casus-q">
        <div class="casus-q-text">Bereken ARR, RRR en NNT.</div>
        <button class="btn btn-secondary" onclick="this.nextElementSibling.classList.toggle('show')">Toon antwoord</button>
        <div class="casus-answer">ARR = 15% - 5% = 10% (= 0,10). RRR = 10%/15% = 67%. NNT = 1/0,10 = 10. Interpretatie: Van elke 10 patiënten die CHX-spoeling krijgen, wordt 1 extra alveolitis voorkomen.</div>
      </div>
    </div>
    <div class="casus-card">
      <div class="casus-label">EBM Oefenvraag 2</div>
      <div class="casus-text">Formuleer een PICO-vraag voor de volgende klinische situatie: U wilt weten of fluoride lak (Duraphat) bij kinderen met hoog cariesrisico effectiever is dan tandpasta alleen om caries te voorkomen.</div>
      <div class="casus-q">
        <div class="casus-q-text">Schrijf de volledige PICO op.</div>
        <button class="btn btn-secondary" onclick="this.nextElementSibling.classList.toggle('show')">Toon antwoord</button>
        <div class="casus-answer">P: Kinderen 3-6 jaar met hoog cariesrisico (DMFT &gt;0). I: Fluoride lak (Duraphat 22.600 ppm) 2x per jaar applicatie + tandpasta. C: Tandpasta alleen (1000 ppm fluoride). O: Incidentie nieuwe carieuze laesies (dmft) over 2 jaar follow-up.</div>
      </div>
    </div>
  </div>
</div>
'''

with open(OUTPUT, 'a', encoding='utf-8') as f:
    f.write(RADIO)
print("RADIO+STATISTIEK+METHODOLOGIE written, total:", os.path.getsize(OUTPUT))
