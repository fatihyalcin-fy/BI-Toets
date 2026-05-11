# BI-Toets

Statik BI Toets studieplatformu. Site `index.html` üzerinden çalışır; quiz motoru ve soru bankaları ayrı dosyalara bölünmüştür.

## Yapı

- `index.html` - tek sayfa uygulama kabuğu, ders sekmeleri ve içerik alanları.
- `style.css` - tüm görsel stiller.
- `app.js` - sayfa navigasyonu, sekmeler, akordeon kartlar ve mobil sidebar.
- `quiz.js` - quiz motoru, set seçici, soru/şık karıştırma ve skor ekranı.
- `data_cikmis*.js` - çıkmış soru setleri.
- `data_drive_imported.js` - Google Drive arşivinden aktarılan ek çıkmış setler ve Drive manifesti.
- `data_drive_notes.js` - Google Drive dosyalarındaki çıkmış soru odaklarından üretilmiş konu çalışma kartları.
- `data_drive_casus.js` - Google Drive casus/behandelplan kaynaklarından aktarılan açık soru casus bankası.
- `data_ai*.js` - AI alıştırma setleri.
- `data_thk1.js` - THK-1 deneme sınavı setleri.

## Soru Ekleme Formatı

Her data dosyası `window.QUIZZES` içine set ekler:

```js
(function () {
  var sets = {
    paro_cikmis_7: {
      title: 'Parodontologie Cikmis - Set 7',
      questions: [
        {
          q: 'Vraagtekst?',
          opts: ['Juiste antwoord', 'Fout antwoord 1', 'Fout antwoord 2'],
          exp: 'Korte toelichting.'
        }
      ]
    }
  };

  window.QUIZZES = Object.assign(window.QUIZZES || {}, sets);
})();
```

Belangrijk: `opts[0]` is altijd het juiste antwoord. `quiz.js` schudt de opties bij weergave.

## Schaalbaar Gebruik

Set-prefixen bepalen automatisch welke sets in een selector verschijnen:

- `paro_cikmis_1`, `paro_cikmis_2`, ... verschijnen onder Parodontologie.
- `endo_cikmis_1`, `basis_cikmis_1`, `pedo_cikmis_1`, `speeksel_cikmis_1` werken hetzelfde.
- `cario_cikmis_*`, `kinesio_cikmis_*`, `functie_cikmis_*`, `pato_cikmis_*`, `ortho_cikmis_*`, `radio_cikmis_*`, `statistiek_cikmis_*` en `sociale_cikmis_*` worden ook automatisch opgepikt.
- AI sets volgen hetzelfde patroon: `paro_ai_1`, `paro_ai_2`, ...

Nieuwe vragen toevoegen betekent dus meestal:

1. Voeg een nieuw set-object toe aan de juiste `data_cikmis_<vak>.js`.
2. Zorg dat het bestand onderaan `index.html` met `<script src="..."></script>` geladen wordt.
3. Open `index.html` opnieuw of refresh de browser.
