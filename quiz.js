/* ================================================================
   BI Toets Studieplatform – quiz.js
   Full quiz engine with answer shuffling (Fisher-Yates).

   Data contract (window.QUIZZES):
   {
     "setId": {
       title: "Set title",
       questions: [
         {
           q:    "Question text",
           opts: ["CORRECT answer", "Wrong 1", "Wrong 2", "Wrong 3"],
           // opts[0] is ALWAYS the correct answer in the source data.
           // This engine shuffles opts and tracks the new correct index.
           exp:  "Optional explanation text"
         }
       ]
     }
   }
   ================================================================ */

/* ----------------------------------------------------------------
   INTERNAL STATE
   ---------------------------------------------------------------- */
var _quizState = {
  setId:        null,   // currently active set id
  questions:    [],     // shuffled question list (original order shuffled)
  shuffledOpts: [],     // per-question: array of {text, isCorrect}
  currentIdx:   0,      // index of current question
  score:        0,      // number of correct answers
  answered:     false,  // has the current question been answered?
  targetEl:     null    // DOM element where quiz is rendered
};

/* ----------------------------------------------------------------
   UTILITY: Fisher-Yates shuffle (returns a NEW array)
   ---------------------------------------------------------------- */
function _shuffle(arr) {
  var a = arr.slice(); // copy
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a;
}

/* ----------------------------------------------------------------
   UTILITY: get the quiz data object safely
   ---------------------------------------------------------------- */
function _getSet(setId) {
  if (!window.QUIZZES) {
    console.error('quiz.js: window.QUIZZES is not defined.');
    return null;
  }
  var set = window.QUIZZES[setId];
  if (!set) {
    console.error('quiz.js: set "' + setId + '" not found in window.QUIZZES.');
    return null;
  }
  return set;
}

/* ----------------------------------------------------------------
   UTILITY: find a target container
   Accepts a string id or a DOM element.
   ---------------------------------------------------------------- */
function _getTarget(containerIdOrEl) {
  if (typeof containerIdOrEl === 'string') {
    return document.getElementById(containerIdOrEl);
  }
  return containerIdOrEl || null;
}

/* ----------------------------------------------------------------
   startQuiz(setId, containerId?)
   Starts a quiz from window.QUIZZES[setId].
   containerId – optional; defaults to 'quiz-container-{setId}'.
   ---------------------------------------------------------------- */
function startQuiz(setId, containerId) {
  var set = _getSet(setId);
  if (!set) return;

  var targetId = containerId || ('quiz-container-' + setId);
  var el = _getTarget(targetId);
  if (!el) {
    console.error('quiz.js: container "' + targetId + '" not found.');
    return;
  }

  _initQuizState(setId, set.questions, el);
  _renderQuestion();
}

/* ----------------------------------------------------------------
   startQuizSet(setGroupId, setIndex, containerId?)
   Starts a quiz for a numbered subset.
   setGroupId + '_' + setIndex must be a key in window.QUIZZES,
   e.g. startQuizSet('paro', 2) → uses window.QUIZZES['paro_2'].
   ---------------------------------------------------------------- */
function startQuizSet(setGroupId, setIndex, containerId) {
  var setId = setGroupId + '_' + setIndex;
  startQuiz(setId, containerId || ('quiz-container-' + setGroupId));
}

/* ----------------------------------------------------------------
   resetQuiz(setId, containerId?)
   Resets quiz state and shows the set-selector (or re-renders the
   start state depending on what was rendered before).
   ---------------------------------------------------------------- */
function resetQuiz(setId, containerId) {
  var set = _getSet(setId);
  if (!set) return;

  var targetId = containerId || ('quiz-container-' + setId);
  var el = _getTarget(targetId);
  if (!el) return;

  _initQuizState(setId, set.questions, el);
  _renderQuestion();
}

/* ----------------------------------------------------------------
   Internal alias used from score-card "Opnieuw" button.
   ---------------------------------------------------------------- */
function resetAndStart(setId, containerId) {
  resetQuiz(setId, containerId);
}

/* ----------------------------------------------------------------
   _initQuizState – initialise internal state with shuffled data
   ---------------------------------------------------------------- */
function _initQuizState(setId, rawQuestions, el) {
  // Shuffle question order
  var shuffledQuestions = _shuffle(rawQuestions);

  // For each question, shuffle the options and track correct index
  var shuffledOpts = [];
  for (var i = 0; i < shuffledQuestions.length; i++) {
    var q = shuffledQuestions[i];
    var opts = q.opts || [];

    // Build objects: correct answer is always opts[0] in source data
    var optObjs = opts.map(function(text, idx) {
      return { text: text, isCorrect: idx === 0 };
    });

    // Shuffle the option objects
    shuffledOpts.push(_shuffle(optObjs));
  }

  _quizState.setId      = setId;
  _quizState.questions  = shuffledQuestions;
  _quizState.shuffledOpts = shuffledOpts;
  _quizState.currentIdx = 0;
  _quizState.score      = 0;
  _quizState.answered   = false;
  _quizState.targetEl   = el;
}

/* ----------------------------------------------------------------
   _renderQuestion – renders the current question into the container
   ---------------------------------------------------------------- */
function _renderQuestion() {
  var el = _quizState.targetEl;
  if (!el) return;

  var idx   = _quizState.currentIdx;
  var total = _quizState.questions.length;

  // If we have finished all questions, show score
  if (idx >= total) {
    _renderScore();
    return;
  }

  var q    = _quizState.questions[idx];
  var opts = _quizState.shuffledOpts[idx];

  var letters = ['A', 'B', 'C', 'D', 'E', 'F'];

  // Build options HTML
  var optsHtml = '';
  for (var i = 0; i < opts.length; i++) {
    var letter = letters[i] || String(i + 1);
    var escapedText = _escHtml(opts[i].text);
    optsHtml +=
      '<button class="quiz-option" ' +
        'onclick="selectAnswer(this, ' + opts[i].isCorrect + ')" ' +
        'data-index="' + i + '">' +
        '<span class="opt-letter">' + letter + '</span>' +
        escapedText +
      '</button>';
  }

  // Build explanation HTML
  var expHtml = '';
  if (q.exp) {
    expHtml =
      '<div class="quiz-explanation" id="_qexp_' + _quizState.setId + '">' +
        '<strong>Toelichting:</strong> ' + _escHtml(q.exp) +
      '</div>';
  }

  var html =
    '<div class="quiz-controls">' +
      '<div class="quiz-progress">' +
        'Vraag <strong>' + (idx + 1) + '</strong> van ' + total +
        ' &nbsp;|&nbsp; Score: <strong>' + _quizState.score + '</strong>' +
      '</div>' +
    '</div>' +
    '<div class="quiz-question">' +
      '<div class="qnum">Vraag ' + (idx + 1) + ' van ' + total + '</div>' +
      '<p class="qtext">' + _escHtml(q.q) + '</p>' +
      '<div class="quiz-options">' + optsHtml + '</div>' +
      expHtml +
      '<div class="quiz-next-btn" id="_qnext_' + _quizState.setId + '">' +
        (idx + 1 < total
          ? '<button class="btn btn-primary" onclick="nextQuestion()">Volgende vraag &rarr;</button>'
          : '<button class="btn btn-success" onclick="nextQuestion()">Bekijk resultaat &rarr;</button>'
        ) +
      '</div>' +
    '</div>';

  el.innerHTML = html;
  _quizState.answered = false;
}

/* ----------------------------------------------------------------
   selectAnswer(btn, isCorrect)
   Called when a quiz option button is clicked.
   ---------------------------------------------------------------- */
function selectAnswer(btn, isCorrect) {
  // Ignore if already answered
  if (_quizState.answered) return;
  _quizState.answered = true;

  var container = btn.closest('.quiz-options');
  if (!container) return;

  // Disable all options
  var allOptions = container.querySelectorAll('.quiz-option');
  for (var i = 0; i < allOptions.length; i++) {
    allOptions[i].disabled = true;
  }

  if (isCorrect) {
    btn.classList.add('correct');
    _quizState.score++;
  } else {
    btn.classList.add('wrong');
    // Reveal the correct answer
    for (var j = 0; j < allOptions.length; j++) {
      var idx = parseInt(allOptions[j].getAttribute('data-index'), 10);
      var opts = _quizState.shuffledOpts[_quizState.currentIdx];
      if (opts[idx] && opts[idx].isCorrect) {
        allOptions[j].classList.add('reveal-correct');
        break;
      }
    }
  }

  // Show explanation if present
  var setId = _quizState.setId;
  var expEl = document.getElementById('_qexp_' + setId);
  if (expEl) expEl.classList.add('show');

  // Show next button
  var nextEl = document.getElementById('_qnext_' + setId);
  if (nextEl) nextEl.classList.add('show');
}

/* ----------------------------------------------------------------
   nextQuestion – advances to the next question or shows score
   ---------------------------------------------------------------- */
function nextQuestion() {
  _quizState.currentIdx++;
  _quizState.answered = false;
  _renderQuestion();
}

/* ----------------------------------------------------------------
   _renderScore – renders the final score card
   ---------------------------------------------------------------- */
function _renderScore() {
  var el = _quizState.targetEl;
  if (!el) return;

  var score = _quizState.score;
  var total = _quizState.questions.length;
  var pct   = total > 0 ? Math.round((score / total) * 100) : 0;

  var colorClass, msg;
  if (pct >= 80) {
    colorClass = 'score-green';
    msg = 'Uitstekend! Je hebt de slagingsgrens van 80% gehaald. Goed bezig!';
  } else if (pct >= 60) {
    colorClass = 'score-orange';
    msg = 'Bijna! Je zit boven de 60%, maar de slagingsgrens is 80%. Nog wat oefenen!';
  } else {
    colorClass = 'score-red';
    msg = 'Meer oefening nodig. Bestudeer de theorie opnieuw en probeer het nog eens.';
  }

  var setId = _quizState.setId;

  var html =
    '<div class="score-card ' + colorClass + '">' +
      '<h3>Quiz voltooid!</h3>' +
      '<div class="score-num">' + score + '/' + total + '</div>' +
      '<div class="score-pct">' + pct + '%</div>' +
      '<div class="score-msg">' + _escHtml(msg) + '</div>' +
      '<button class="btn btn-secondary" onclick="resetAndStart(\'' + setId + '\', \'' + _escAttr(el.id || '') + '\')">' +
        'Opnieuw &rarr;' +
      '</button>' +
    '</div>';

  el.innerHTML = html;
}

/* ----------------------------------------------------------------
   initSetSelector(containerId, setGroupIds)
   Renders a grid of set-selection cards into the given container.

   containerId  – id of the DOM element to render into
   setGroupIds  – array of set id strings, e.g. ['paro_1','paro_2']
                  OR a single set-group prefix string like 'paro',
                  in which case all keys matching 'paro_N' are used.
   quizTargetId – optional id of the quiz container element
                  (defaults to 'quiz-container-{first-setGroup}')
   ---------------------------------------------------------------- */
function initSetSelector(containerId, setGroupIds, quizTargetId) {
  var el = _getTarget(containerId);
  if (!el) {
    console.error('quiz.js: initSetSelector – container "' + containerId + '" not found.');
    return;
  }

  if (!window.QUIZZES) {
    el.innerHTML = '<p style="color:var(--gray-500);font-size:13px;">Nog geen quizzen beschikbaar.</p>';
    return;
  }

  // Resolve set ids
  var ids = [];
  if (typeof setGroupIds === 'string') {
    // Find all matching keys: setGroupIds + '_' + N
    var prefix = setGroupIds + '_';
    var keys = Object.keys(window.QUIZZES).sort(_naturalSetSort);
    for (var k = 0; k < keys.length; k++) {
      if (keys[k].indexOf(prefix) === 0) {
        ids.push(keys[k]);
      }
    }
    // Also include exact match if present
    if (window.QUIZZES[setGroupIds]) {
      ids.unshift(setGroupIds);
    }
  } else if (Array.isArray(setGroupIds)) {
    ids = setGroupIds.slice().sort(_naturalSetSort);
  }

  if (ids.length === 0) {
    el.innerHTML = '<p style="color:var(--gray-500);font-size:13px;">Geen sets gevonden.</p>';
    return;
  }

  // Determine quiz target
  var targetId = quizTargetId;
  if (!targetId) {
    // Derive from first set id
    var base = ids[0].replace(/_\d+$/, '');
    targetId = 'quiz-container-' + base;
  }

  // Render cards
  var cardsHtml = '';
  for (var i = 0; i < ids.length; i++) {
    var id  = ids[i];
    var set = window.QUIZZES[id];
    if (!set) continue;

    var qCount = set.questions ? set.questions.length : 0;
    var title  = set.title || id;

    cardsHtml +=
      '<button class="quiz-set-card" onclick="startQuiz(\'' + id + '\', \'' + targetId + '\')">' +
        '<div class="set-title">' + _escHtml(title) + '</div>' +
        '<span class="set-badge">' + qCount + ' vragen</span>' +
      '</button>';
  }

  var totalQuestions = 0;
  for (var qIdx = 0; qIdx < ids.length; qIdx++) {
    var qSet = window.QUIZZES[ids[qIdx]];
    totalQuestions += qSet && qSet.questions ? qSet.questions.length : 0;
  }

  el.innerHTML =
    '<div class="quiz-set-selector">' +
      '<h3>Kies een oefenset:</h3>' +
      '<div class="set-selector-meta">' + ids.length + ' sets · ' + totalQuestions + ' vragen</div>' +
      '<div class="quiz-set-grid">' + cardsHtml + '</div>' +
    '</div>';
}

/* ----------------------------------------------------------------
   _naturalSetSort – keeps quiz_2 before quiz_10.
   ---------------------------------------------------------------- */
function _naturalSetSort(a, b) {
  return String(a).localeCompare(String(b), undefined, { numeric: true, sensitivity: 'base' });
}

/* ----------------------------------------------------------------
   _escHtml – minimal HTML escaping to prevent XSS
   ---------------------------------------------------------------- */
function _escHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function _escAttr(str) {
  return _escHtml(str).replace(/`/g, '&#96;');
}
