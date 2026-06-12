/* =========================================================
   FECABASKET E-Learning — Sélecteur de langue FR | EN
   Version statique sans Google Translate :
   - 2 versions HTML : / (français) et /en/ (anglais)
   - Sélecteur 1-clic, ZÉRO latence, ZÉRO dépendance externe
   - Pages traduites Phase 1 : index, tous-nos-lions, ressources, cours-niveau1, vae
   - Pour les autres pages : EN redirige vers en/index.html avec notice
   ========================================================= */
(function () {
    'use strict';

    /* ----- Pages disponibles en anglais (Phase 1) ----- */
    var TRANSLATED = [
        'index.html',
        'tous-nos-lions.html',
        'ressources.html',
        'cours-niveau1.html',
        'cours-niveau2.html',
        'cours-niveau3.html',
        'cours-animateur.html',
        'cours-moniteur.html',
        'niveaux.html',
        'process-corporation.html',
        'quiz.html',
        'tactique.html',
        'vae.html',
        'youzou-elite-one-dames.html',
        'youzou-elite-one-messieurs.html'
    ];

    /* ----- Détection langue actuelle ----- */
    var path = window.location.pathname;
    var isEN = path.indexOf('/en/') !== -1 || /\/en\/?$/.test(path);

    /* ----- Filename actuel ----- */
    var filename = path.split('/').pop() || 'index.html';
    if (!filename.endsWith('.html')) filename = 'index.html';

    /* ----- URLs cibles FR ↔ EN ----- */
    function urlFR() {
        if (isEN) return '../' + filename;
        return filename;
    }
    function urlEN() {
        if (isEN) return filename;
        if (TRANSLATED.indexOf(filename) !== -1) return 'en/' + filename;
        return 'en/index.html?from=' + encodeURIComponent(filename);
    }

    /* ----- CSS ----- */
    var css = ''
        + '.lang-switcher{display:inline-flex;gap:3px;background:rgba(0,77,31,.10);border:2px solid rgba(0,77,31,.18);border-radius:100px;padding:3px;margin-right:10px;align-items:center;font-family:"Inter",system-ui,sans-serif;flex-shrink:0}'
        + '.lang-switcher .lang-btn{background:transparent;border:0;padding:7px 14px;border-radius:100px;font-size:.85rem;font-weight:800;letter-spacing:.04em;cursor:pointer;color:#1f2937;transition:background .2s,color .2s,transform .15s;line-height:1;min-width:38px;text-align:center;text-decoration:none;display:inline-block}'
        + '.lang-switcher .lang-btn:hover{background:rgba(0,77,31,.14);transform:translateY(-1px);color:#1f2937;text-decoration:none}'
        + '.lang-switcher .lang-btn.active{background:linear-gradient(135deg,#007A33,#004D1F);color:#fff;box-shadow:0 2px 8px rgba(0,77,31,.25)}'
        + '.lang-switcher .lang-btn.active:hover{color:#fff}'
        + '@media (max-width:720px){.lang-switcher{margin-right:6px}.lang-switcher .lang-btn{padding:5px 9px;font-size:.72rem}}'
        + '@media (max-width:520px){.lang-switcher{margin-right:4px}.lang-switcher .lang-btn{padding:5px 8px}}'
        + '.lang-notice{position:fixed;bottom:14px;right:14px;background:#1f2937;color:#fff;padding:10px 18px;border-radius:100px;font-size:.78rem;z-index:9998;box-shadow:0 6px 20px rgba(0,0,0,.28);display:flex;align-items:center;gap:10px;font-family:"Inter",system-ui,sans-serif;max-width:92vw}'
        + '.lang-notice button{background:#fff;color:#1f2937;border:0;padding:4px 11px;border-radius:100px;font-size:.7rem;font-weight:800;cursor:pointer}'
        + '.lang-notice button:hover{background:#fcd116;color:#1f2937}';
    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    /* ----- Construction switcher ----- */
    function buildSwitcher() {
        var nav = document.querySelector('.nav');
        if (!nav) return;
        if (document.querySelector('.lang-switcher')) return;

        var sw = document.createElement('div');
        sw.className = 'lang-switcher';
        sw.setAttribute('role', 'group');
        sw.setAttribute('aria-label', 'Language selector / Selecteur de langue');

        var frBtn = document.createElement('a');
        frBtn.className = 'lang-btn' + (isEN ? '' : ' active');
        frBtn.href = urlFR();
        frBtn.textContent = 'FR';
        frBtn.setAttribute('aria-label', 'Francais');
        frBtn.setAttribute('hreflang', 'fr');
        if (!isEN) frBtn.setAttribute('aria-current', 'true');

        var enBtn = document.createElement('a');
        enBtn.className = 'lang-btn' + (isEN ? ' active' : '');
        enBtn.href = urlEN();
        enBtn.textContent = 'EN';
        enBtn.setAttribute('aria-label', 'English');
        enBtn.setAttribute('hreflang', 'en');
        if (isEN) enBtn.setAttribute('aria-current', 'true');

        sw.appendChild(frBtn);
        sw.appendChild(enBtn);

        var toggle = nav.querySelector('.nav-toggle');
        if (toggle) nav.insertBefore(sw, toggle);
        else nav.appendChild(sw);
    }

    /* ----- Notice si redirection depuis page non traduite ----- */
    function showRedirectNotice() {
        var params = new URLSearchParams(window.location.search);
        var from = params.get('from');
        if (!from || !isEN) return;

        var labelMap = {
            'niveaux.html': 'Levels',
            'cours-animateur.html': 'Animateur Course',
            'cours-moniteur.html': 'Moniteur Course',
            'cours-niveau2.html': 'Level 2 Course',
            'cours-niveau3.html': 'Level 3 Course',
            'tactique.html': 'Tactical Animation',
            'quiz.html': 'Quizzes',
            'process-corporation.html': 'Process Corporation',
            'youzou-elite-one-dames.html': 'Youzou Elite One Women',
            'youzou-elite-one-messieurs.html': 'Youzou Elite One Men'
        };
        var label = labelMap[from] || 'this page';

        var notice = document.createElement('div');
        notice.className = 'lang-notice';
        notice.innerHTML = '<span>The English version of <strong>' + label + '</strong> is coming soon. Redirected to home.</span>'
                         + '<button type="button">OK</button>';
        notice.querySelector('button').addEventListener('click', function(){ notice.remove(); });
        document.body.appendChild(notice);
        setTimeout(function(){ if (notice.parentElement) notice.remove(); }, 9000);
    }

    /* ----- Boot ----- */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function(){ buildSwitcher(); showRedirectNotice(); });
    } else {
        buildSwitcher();
        showRedirectNotice();
    }
})();
