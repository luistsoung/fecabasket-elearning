/* =========================================================
   FECABASKET — Affichage du contenu des manuels FIBA WABC
   Modal cliquable sur chaque sous-thème (.subtheme[data-ref])
   ========================================================= */

(function () {
    'use strict';

    let manuelsData = null;

    // Auto-détection du niveau depuis le nom de fichier de la page
    function detectLevel() {
        const path = location.pathname.toLowerCase();
        if (path.includes('animateur')) return 'animateur';
        if (path.includes('moniteur')) return 'moniteur';
        if (path.includes('niveau3')) return 'niveau3';
        if (path.includes('niveau2')) return 'niveau2';
        if (path.includes('niveau1')) return 'niveau1';
        return 'animateur';
    }
    const LEVEL = detectLevel();
    const DATA_URL = `assets/data/manuels-${LEVEL}.json`;

    // ---------- Création du DOM modal ----------
    function buildModal() {
        if (document.querySelector('.fb-modal')) return;
        const modal = document.createElement('div');
        modal.className = 'fb-modal';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.innerHTML = `
            <div class="fb-modal-content">
                <div class="fb-modal-head">
                    <div>
                        <h2 class="fb-modal-title">Chargement…</h2>
                        <span class="source"></span>
                    </div>
                    <button class="fb-modal-close" aria-label="Fermer">✕</button>
                </div>
                <div class="fb-modal-body loading"></div>
            </div>
            <div class="fb-imgview"><img alt=""></div>
        `;
        document.body.appendChild(modal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
        modal.querySelector('.fb-modal-close').addEventListener('click', closeModal);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const iv = document.querySelector('.fb-imgview.open');
                if (iv) { iv.classList.remove('open'); return; }
                closeModal();
            }
        });
    }

    function openModal() {
        const m = document.querySelector('.fb-modal');
        if (m) {
            m.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
    }
    function closeModal() {
        const m = document.querySelector('.fb-modal');
        if (m) {
            m.classList.remove('open');
            document.body.style.overflow = '';
        }
    }

    // ---------- Rendu du contenu d'une section ----------
    function escapeHtml(s) {
        return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function renderSection(ref) {
        if (!manuelsData || !manuelsData[ref]) {
            return `<p style="color:var(--gris)">Contenu non disponible pour cette section.</p>`;
        }
        const sec = manuelsData[ref];
        const blocks = sec.blocks || [];
        const snaps = sec.snapshots || [];

        // Construire le HTML : alterner blocs textuels et snapshots de pages
        let html = '';

        // Pré-traitement : grouper les blocs par page et par type
        // Filtrer le bruit : pieds de page, numéros de page, marqueurs
        const cleaned = blocks.filter(b => {
            const t = b.text;
            if (t.length < 8 && !/[a-zA-Z]/.test(t)) return false;
            if (/^MANUEL DE L['']ENTRA[ÎI]NEUR\s*\d*$/i.test(t)) return false;
            if (/^Manuel de l['']entra[îi]neur\s+\d/i.test(t)) return false;
            if (/^MANUEL DES ENTRA[ÎI]NEURS\s*$/i.test(t)) return false;
            if (/^Le mini-basket\s+\d/i.test(t)) return false;
            if (t.length < 4) return false;
            return true;
        });

        // Page → blocs
        const byPage = {};
        cleaned.forEach(b => {
            byPage[b.page] = byPage[b.page] || [];
            byPage[b.page].push(b);
        });

        // Itérer page par page
        sec.pages.forEach((pageNum, pIdx) => {
            const pageBlocks = byPage[pageNum] || [];
            const snap = snaps.find(s => s.page === pageNum);

            // Pour chaque bloc de cette page
            pageBlocks.forEach(blk => {
                if (blk.kind === 'title' && blk.text.length > 5) {
                    html += `<h3>${escapeHtml(blk.text)}</h3>`;
                } else if (blk.kind === 'subtitle' && blk.text.length > 5) {
                    html += `<h4>${escapeHtml(blk.text)}</h4>`;
                } else {
                    // Détecter listes (• ou tirets ou numérotation)
                    if (/^[•\-•–]/.test(blk.text) || /^\d+\.\s/.test(blk.text)) {
                        const items = blk.text.split(/\s+(?=[•\-•]|\d+\.)/).filter(x => x.length > 5);
                        if (items.length > 1) {
                            html += '<ul>' + items.map(i => `<li>${escapeHtml(i.replace(/^[•\-•–]\s*|^\d+\.\s*/, ''))}</li>`).join('') + '</ul>';
                            return;
                        }
                    }
                    html += `<p>${escapeHtml(blk.text)}</p>`;
                }
            });

            // Insérer le snapshot de la page comme illustration (sauf si déjà beaucoup d'images)
            if (snap && pIdx < 3) {  // limite : on n'affiche que 3 snapshots max
                html += `
                    <figure class="fb-page-snap" data-fullsize="${snap.file}">
                        <img src="assets/img/${snap.file}" alt="Page ${snap.page} du manuel" loading="lazy">
                        <figcaption class="fb-page-snap-caption">📕 Page ${snap.page} · cliquer pour agrandir</figcaption>
                    </figure>
                `;
            }
        });

        // Référence finale
        html += `
            <div class="fb-modal-meta">
                <strong>📚 Source :</strong> ${escapeHtml(sec.manuel)} — pages ${sec.pages.join(', ')}<br>
                <strong>🏀 Référentiel :</strong> FIBA World Association of Basketball Coaches (WABC)
            </div>
        `;

        return html;
    }

    // ---------- Ouvrir une section ----------
    async function openSection(ref, title) {
        buildModal();
        const m = document.querySelector('.fb-modal');
        m.querySelector('.fb-modal-title').textContent = title || 'Contenu du manuel';
        m.querySelector('.source').textContent = '📕 FIBA WABC Coaches Manual';
        const body = m.querySelector('.fb-modal-body');
        body.classList.add('loading');
        body.innerHTML = '';
        openModal();

        // Charger les données si pas déjà en cache
        if (!manuelsData) {
            try {
                const r = await fetch(DATA_URL);
                manuelsData = await r.json();
            } catch (err) {
                body.classList.remove('loading');
                body.innerHTML = `<p style="color:var(--rouge)">Erreur de chargement du contenu : ${err.message}</p>`;
                return;
            }
        }

        body.classList.remove('loading');
        body.innerHTML = renderSection(ref);

        // Image fullscreen au clic
        body.querySelectorAll('.fb-page-snap').forEach(fig => {
            fig.addEventListener('click', () => {
                const src = 'assets/img/' + fig.dataset.fullsize;
                const iv = m.querySelector('.fb-imgview');
                iv.querySelector('img').src = src;
                iv.classList.add('open');
            });
        });
        const iv = m.querySelector('.fb-imgview');
        iv.addEventListener('click', () => iv.classList.remove('open'));

        body.scrollTop = 0;
    }

    // ---------- Attacher les clics ----------
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.subtheme[data-ref]').forEach(el => {
            el.addEventListener('click', () => {
                const ref = el.dataset.ref;
                const titleEl = el.querySelector('strong');
                const title = titleEl ? titleEl.textContent : ref;
                openSection(ref, title);
            });
        });
    });
})();
