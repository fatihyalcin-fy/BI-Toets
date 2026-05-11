/* ================================================================
   BI Toets Studieplatform – app.js
   Navigation, tabs, theory cards, hamburger menu.
   ================================================================ */

/* ----------------------------------------------------------------
   PAGE NAVIGATION
   showPage(id)  – shows page-{id}, updates active nav item.
   The second argument `btn` is optional; when called from exam-card
   grid clicks it may be null.
   ---------------------------------------------------------------- */
function showPage(id, btn) {
  // Hide all pages
  var pages = document.querySelectorAll('.page');
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.remove('active');
  }

  // Show target page
  var target = document.getElementById('page-' + id);
  if (target) {
    target.classList.add('active');
  }

  // Update active nav-item
  var navItems = document.querySelectorAll('.nav-item');
  for (var j = 0; j < navItems.length; j++) {
    navItems[j].classList.remove('active');
  }

  // If a specific button was passed, activate it
  if (btn) {
    btn.classList.add('active');
  } else {
    // Try to find the nav item whose onclick references this page id
    for (var k = 0; k < navItems.length; k++) {
      var onclick = navItems[k].getAttribute('onclick') || '';
      if (onclick.indexOf("'" + id + "'") !== -1 || onclick.indexOf('"' + id + '"') !== -1) {
        navItems[k].classList.add('active');
        break;
      }
    }
  }

  // Update topbar title from the section-hdr h2, if present
  var sectionH2 = target ? target.querySelector('.section-hdr h2') : null;
  var topbarTitle = document.getElementById('topbar-title');
  if (topbarTitle) {
    if (sectionH2) {
      topbarTitle.textContent = sectionH2.textContent;
    } else {
      topbarTitle.textContent = 'BI Toets Studieplatform by FY';
    }
  }

  // On mobile, close sidebar after navigation
  if (window.innerWidth <= 900) {
    closeSidebar();
  }

  // Scroll to top of content
  var content = document.getElementById('content');
  if (content) {
    content.scrollTop = 0;
  }
  window.scrollTo(0, 0);
}

/* ----------------------------------------------------------------
   TAB SYSTEM
   openTab(section, tab, btn)
   section  – prefix used in DOM ids (e.g. 'paro')
   tab      – tab name (e.g. 'notities')
   btn      – the clicked .tab-btn element
   ---------------------------------------------------------------- */
function openTab(section, tab, btn) {
  // Find the parent page (the closest .page ancestor of btn)
  var page = btn ? btn.closest('.page') : document;
  if (!page) page = document;

  // Hide all tab-content elements within this page
  var contents = page.querySelectorAll('.tab-content');
  for (var i = 0; i < contents.length; i++) {
    contents[i].classList.remove('active');
  }

  // Deactivate all tab buttons within this page's tab-bar
  var buttons = page.querySelectorAll('.tab-btn');
  for (var j = 0; j < buttons.length; j++) {
    buttons[j].classList.remove('active');
  }

  // Activate the selected tab content
  var targetContent = document.getElementById(section + '-' + tab);
  if (targetContent) {
    targetContent.classList.add('active');
  }

  // Activate the clicked button
  if (btn) {
    btn.classList.add('active');
  }
}

/* ----------------------------------------------------------------
   THEORY CARD TOGGLE
   toggleCard(header) – expands/collapses the theory card body.
   Called by onclick on .theory-header elements.
   ---------------------------------------------------------------- */
function toggleCard(header) {
  var card = header.closest('.theory-card');
  if (!card) return;
  card.classList.toggle('open');
}

function escapeHtml(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderDriveCasusGroup(groupName, containerId) {
  var container = document.getElementById(containerId);
  var groups = window.DRIVE_CASUS || {};
  var cases = groups[groupName] || [];
  if (!container || !cases.length) return;

  var html = [
    '<div class="info-box">',
    '<div class="info-box-title">📁 Google Drive çıkmış casusları</div>',
    '<ul><li>' + cases.length + ' Drive casus seti · kaynak dosyaya göre gruplanmış soru/cevap kartları</li></ul>',
    '</div>'
  ];

  for (var i = 0; i < cases.length; i++) {
    var item = cases[i];
    html.push('<div class="casus-card">');
    html.push('<div class="casus-label">' + escapeHtml(item.title) + '</div>');
    html.push('<div class="casus-text">' + escapeHtml(item.text) + '</div>');
    html.push('<div class="casus-source">Bron: ' + escapeHtml(item.source) + '</div>');
    for (var j = 0; j < (item.questions || []).length; j++) {
      var qa = item.questions[j];
      html.push('<div class="casus-q">');
      html.push('<div class="casus-q-text">' + escapeHtml(qa.q) + '</div>');
      html.push('<button class="btn btn-secondary" onclick="this.nextElementSibling.classList.toggle(\'show\')">Toon antwoord</button>');
      html.push('<div class="casus-answer">' + escapeHtml(qa.a).replace(/\n/g, '<br>') + '</div>');
      html.push('</div>');
    }
    html.push('</div>');
  }

  container.innerHTML = html.join('');
}

function renderDriveCasussen() {
  renderDriveCasusGroup('bp1', 'drive-casus-bp1');
  renderDriveCasusGroup('bp2', 'drive-casus-bp2');
  renderDriveCasusGroup('casus', 'drive-casus-korte');
  renderDriveCasusGroup('endo_trauma', 'drive-casus-endo-trauma');
}

function renderDriveNotesGroup(groupName, containerId) {
  var container = document.getElementById(containerId);
  var groups = window.DRIVE_NOTES || {};
  var notes = groups[groupName] || [];
  if (!container || !notes.length) return;

  var totalPoints = 0;
  for (var i = 0; i < notes.length; i++) {
    totalPoints += (notes[i].points || []).length;
  }

  var html = [
    '<div class="info-box drive-notes-summary">',
    '<div class="info-box-title">📁 Google Drive ile hizalanmış konu çalışması</div>',
    '<ul><li>' + notes.length + ' konu kartı · ' + totalPoints + ' sınav odağı · Drive çıkmış dosyalarındaki tekrar eden başlıklardan derlendi</li></ul>',
    '</div>',
    '<div class="drive-notes-grid">'
  ];

  for (var n = 0; n < notes.length; n++) {
    var note = notes[n];
    html.push('<article class="drive-note-card">');
    html.push('<div class="drive-note-source">Bron: ' + escapeHtml(note.source) + '</div>');
    html.push('<h3>' + escapeHtml(note.title) + '</h3>');
    html.push('<ul>');
    for (var p = 0; p < (note.points || []).length; p++) {
      html.push('<li>' + escapeHtml(note.points[p]) + '</li>');
    }
    html.push('</ul>');
    html.push('</article>');
  }

  html.push('</div>');
  container.innerHTML = html.join('');
}

function renderDriveNotes() {
  var targets = {
    paro: 'drive-notes-paro',
    endo: 'drive-notes-endo',
    cario: 'drive-notes-cario',
    pedo: 'drive-notes-pedo',
    speeksel: 'drive-notes-speeksel',
    sociale: 'drive-notes-sociale',
    kinesio: 'drive-notes-kinesio',
    functie: 'drive-notes-functie',
    pato: 'drive-notes-pato',
    ortho: 'drive-notes-ortho',
    basis: 'drive-notes-basis',
    radio: 'drive-notes-radio',
    statistiek: 'drive-notes-statistiek',
    methodologie: 'drive-notes-methodologie',
    bp1: 'drive-notes-bp1',
    bp2: 'drive-notes-bp2',
    casus: 'drive-notes-casus',
    endo_trauma: 'drive-notes-endo-trauma'
  };

  Object.keys(targets).forEach(function(groupName) {
    renderDriveNotesGroup(groupName, targets[groupName]);
  });
}

/* ----------------------------------------------------------------
   HAMBURGER / SIDEBAR
   ---------------------------------------------------------------- */
function toggleSidebar() {
  var body = document.body;
  if (body.classList.contains('sidebar-open')) {
    closeSidebar();
  } else {
    openSidebar();
  }
}

function openSidebar() {
  document.body.classList.add('sidebar-open');

  // Make overlay visible and clickable
  var overlay = document.querySelector('.sidebar-overlay');
  if (overlay) {
    overlay.style.display = 'block';
    // Force reflow for transition
    overlay.offsetHeight; // eslint-disable-line no-unused-expressions
    overlay.style.opacity = '1';
  }

  // Prevent body scroll while sidebar is open on mobile
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  document.body.classList.remove('sidebar-open');

  var overlay = document.querySelector('.sidebar-overlay');
  if (overlay) {
    overlay.style.opacity = '0';
    // Hide after transition completes
    setTimeout(function() {
      if (!document.body.classList.contains('sidebar-open')) {
        overlay.style.display = 'none';
      }
    }, 300);
  }

  document.body.style.overflow = '';
}

/* ----------------------------------------------------------------
   WINDOW RESIZE
   If the window is resized wider than 900px, remove mobile sidebar
   state so the sidebar stays visible as a fixed panel.
   ---------------------------------------------------------------- */
window.addEventListener('resize', function() {
  if (window.innerWidth > 900) {
    document.body.classList.remove('sidebar-open');
    document.body.style.overflow = '';

    var overlay = document.querySelector('.sidebar-overlay');
    if (overlay) {
      overlay.style.display = 'none';
      overlay.style.opacity = '0';
    }
  }
});

/* ----------------------------------------------------------------
   INIT
   On DOMContentLoaded: inject overlay element, wire hamburger
   button, and show the home page.
   ---------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function() {
  // Inject sidebar overlay into body if not already present
  if (!document.querySelector('.sidebar-overlay')) {
    var overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    overlay.addEventListener('click', closeSidebar);
    // Insert before sidebar so z-index layering works correctly
    document.body.insertBefore(overlay, document.body.firstChild);
  }

  // Wire up the hamburger button if it exists
  var hamburger = document.querySelector('.hamburger-btn');
  if (hamburger) {
    hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleSidebar();
    });
  }

  // Close sidebar when any nav-item is clicked (for mobile)
  var navItems = document.querySelectorAll('.nav-item');
  for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', function() {
      if (window.innerWidth <= 900) {
        closeSidebar();
      }
    });
  }

  // Show the home page by default
  renderDriveNotes();
  renderDriveCasussen();
  var homeBtn = document.querySelector('.nav-item[onclick*="home"]');
  showPage('home', homeBtn || null);
});
