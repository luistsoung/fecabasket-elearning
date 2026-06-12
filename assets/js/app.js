/* =========================================================
   FECABASKET E-LEARNING — App globale
   Navigation mobile, scroll-reveal, header dynamique, toast,
   prefetch (instant nav), barre de progression, smooth-scroll ancres
   ========================================================= */

(function () {
    'use strict';

    // ----- Navigation mobile -----
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (toggle && navLinks) {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggle.classList.toggle('open');
            navLinks.classList.toggle('open');
        });
        navLinks.querySelectorAll('a').forEach((a) => {
            a.addEventListener('click', () => {
                toggle.classList.remove('open');
                navLinks.classList.remove('open');
            });
        });
        // Fermeture menu : touche Échap
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('open')) {
                toggle.classList.remove('open');
                navLinks.classList.remove('open');
            }
        });
        // Fermeture menu : clic extérieur
        document.addEventListener('click', (e) => {
            if (!navLinks.classList.contains('open')) return;
            if (e.target.closest('.nav')) return;
            toggle.classList.remove('open');
            navLinks.classList.remove('open');
        });
    }

    // ----- Header shadow on scroll -----
    const header = document.querySelector('.header');
    if (header) {
        const onScroll = () => {
            header.classList.toggle('scrolled', window.scrollY > 12);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // ----- Scroll reveal -----
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && reveals.length) {
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('visible');
                        io.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );
        reveals.forEach((el) => io.observe(el));
    } else {
        reveals.forEach((el) => el.classList.add('visible'));
    }

    // ----- Active nav link selon URL -----
    const here = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach((a) => {
        const href = a.getAttribute('href');
        if (href === here || (here === '' && href === 'index.html')) {
            a.classList.add('active');
        }
    });

    // ----- Toast helper -----
    window.fecaToast = function (message) {
        let t = document.querySelector('.toast');
        if (!t) {
            t = document.createElement('div');
            t.className = 'toast';
            document.body.appendChild(t);
        }
        t.textContent = message;
        t.classList.add('show');
        clearTimeout(window.__toastT);
        window.__toastT = setTimeout(() => t.classList.remove('show'), 3200);
    };

    // =====================================================
    //  NEWSLETTER : envoi vers Google Apps Script
    // =====================================================
    // ⬇ À CONFIGURER après déploiement du script Google Apps Script.
    //   Coller ici l'URL du Web App (étape 3 du guide) :
    //   assets/newsletter/SETUP.md
    const NEWSLETTER_ENDPOINT = ''; // ex: 'https://script.google.com/macros/s/AKfycby.../exec'
    // =====================================================

    document.querySelectorAll('form[data-newsletter]').forEach((f) => {
        f.addEventListener('submit', async (e) => {
            e.preventDefault();
            const input = f.querySelector('input[type="email"]');
            const btn = f.querySelector('button[type="submit"]');
            if (!input || !input.value) return;
            const email = input.value.trim();
            const originalBtnHtml = btn ? btn.innerHTML : '';
            if (btn) {
                btn.disabled = true;
                btn.innerHTML = 'Envoi…';
            }

            // Mode démo (endpoint non configuré)
            if (!NEWSLETTER_ENDPOINT) {
                window.fecaToast('⚠️ Formulaire en mode démo — endpoint non configuré côté serveur.');
                if (btn) { btn.disabled = false; btn.innerHTML = originalBtnHtml; }
                console.warn('[FECABASKET] NEWSLETTER_ENDPOINT non configuré. Voir assets/newsletter/SETUP.md');
                return;
            }

            // Envoi réel vers Apps Script (mode no-cors pour éviter les soucis preflight)
            try {
                const formData = new URLSearchParams();
                formData.append('email', email);
                formData.append('source', location.pathname);
                formData.append('referrer', document.referrer || '');
                formData.append('userAgent', navigator.userAgent.slice(0, 200));

                await fetch(NEWSLETTER_ENDPOINT, {
                    method: 'POST',
                    mode: 'no-cors',
                    body: formData
                });

                window.fecaToast('✅ Merci ! Un e-mail de confirmation vient de vous être envoyé.');
                input.value = '';
            } catch (err) {
                console.error('[FECABASKET] Erreur envoi newsletter :', err);
                window.fecaToast('⚠️ Erreur. Réessayez ou écrivez à luistsoung@yahoo.fr');
            } finally {
                if (btn) { btn.disabled = false; btn.innerHTML = originalBtnHtml; }
            }
        });
    });

    // =====================================================
    //  NAVIGATION RAPIDE : prefetch + barre de progression
    // =====================================================

    // --- 1. Barre de progression top (feedback clic) ---
    const bar = document.createElement('div');
    bar.className = 'route-progress';
    document.body.appendChild(bar);
    const startProgress = () => bar.classList.add('loading');
    const stopProgress = () => {
        bar.classList.remove('loading');
        bar.classList.add('done');
        setTimeout(() => bar.classList.remove('done'), 250);
    };
    // bfcache restore : reset progress
    window.addEventListener('pageshow', stopProgress);
    window.addEventListener('pagehide', stopProgress);

    // --- 2. Helpers ---
    const prefetched = new Set();
    const isInternal = (a) => {
        if (!a || !a.href) return false;
        if (a.target && a.target !== '_self') return false;
        if (a.hasAttribute('download')) return false;
        if (a.getAttribute('href')?.startsWith('#')) return false;
        if (a.getAttribute('href')?.startsWith('mailto:')) return false;
        if (a.getAttribute('href')?.startsWith('tel:')) return false;
        try {
            const u = new URL(a.href, location.href);
            if (u.origin !== location.origin) return false;
            if (u.pathname === location.pathname && !u.hash) return false;
            return true;
        } catch (_) { return false; }
    };
    const prefetch = (url) => {
        if (prefetched.has(url)) return;
        prefetched.add(url);
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        link.as = 'document';
        document.head.appendChild(link);
    };

    // --- 3. Prefetch au survol (desktop) ---
    let hoverTimer;
    document.addEventListener('mouseover', (e) => {
        const a = e.target.closest('a');
        if (!isInternal(a)) return;
        clearTimeout(hoverTimer);
        hoverTimer = setTimeout(() => prefetch(a.href), 60);
    }, { passive: true });
    document.addEventListener('mouseout', () => clearTimeout(hoverTimer), { passive: true });

    // --- 4. Prefetch au touchstart (mobile) ---
    document.addEventListener('touchstart', (e) => {
        const a = e.target.closest('a');
        if (!isInternal(a)) return;
        prefetch(a.href);
    }, { passive: true });

    // --- 5. Barre de progression au clic interne ---
    document.addEventListener('click', (e) => {
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || e.button !== 0) return;
        const a = e.target.closest('a');
        if (!isInternal(a)) return;
        startProgress();
    });

    // --- 6. Préchargement prioritaire des pages principales (au repos) ---
    const PRIORITY = [
        'index.html', 'niveaux.html', 'vae.html', 'tactique.html',
        'quiz.html', 'ressources.html', 'process-corporation.html',
        'inscription.html', 'tous-nos-lions.html'
    ];
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 1500));
    idle(() => {
        PRIORITY.forEach((page) => {
            if (page !== here) prefetch(page);
        });
    }, { timeout: 3000 });

    // =====================================================
    //  SMOOTH SCROLL ANCRES (compensation header sticky)
    // =====================================================
    document.addEventListener('click', (e) => {
        const a = e.target.closest('a[href^="#"]');
        if (!a) return;
        const id = a.getAttribute('href').slice(1);
        if (!id || id === 'top') return;
        const target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        const headerH = (document.querySelector('.header')?.offsetHeight || 0) + 14;
        const top = target.getBoundingClientRect().top + window.scrollY - headerH;
        window.scrollTo({ top, behavior: 'smooth' });
        history.replaceState(null, '', '#' + id);
        // fermer le menu mobile si ouvert
        toggle?.classList.remove('open');
        navLinks?.classList.remove('open');
    });

    // ----- Compteurs animés (hero stats) -----
    const counters = document.querySelectorAll('[data-count]');
    if ('IntersectionObserver' in window && counters.length) {
        const ioC = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (!e.isIntersecting) return;
                const el = e.target;
                const target = parseInt(el.dataset.count, 10);
                const suffix = el.dataset.suffix || '';
                const dur = 1400;
                const start = performance.now();
                const tick = (now) => {
                    const p = Math.min(1, (now - start) / dur);
                    const v = Math.floor(target * (0.2 + 0.8 * (1 - Math.pow(1 - p, 3))));
                    el.textContent = v.toLocaleString('fr-FR') + suffix;
                    if (p < 1) requestAnimationFrame(tick);
                    else el.textContent = target.toLocaleString('fr-FR') + suffix;
                };
                requestAnimationFrame(tick);
                ioC.unobserve(el);
            });
        });
        counters.forEach((c) => ioC.observe(c));
    }
})();
