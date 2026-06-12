/* =========================================================
   FECABASKET E-LEARNING — Schémas tactiques interactifs
   Inspirés FIBA WABC, FastModel, BBall-Coach, Hoop Coach
   ========================================================= */

const TACTIQUES = [
    {
        id: '5out-motion',
        cat: 'Attaque',
        type: 'dynamique',
        nom: 'Motion 5-Out',
        sub: 'Attaque positionnelle — Niveau 1/2',
        description: "Attaque moderne avec écartement maximal : les 5 joueurs partent au-delà de la ligne à 3 points. Espace pour dribbler, couper, écraner. Base de l'attaque européenne et FIBA contemporaine.",
        legende: [
            { c: 'rouge', t: 'Attaquant (1 à 5)' },
            { c: 'orange', t: 'Trajet du ballon' },
            { c: 'jaune', t: 'Coupe d\'un joueur' }
        ],
        // Positions initiales (x, y) sur un demi-terrain 600x560
        joueurs: [
            { id: 1, x: 300, y: 480, label: '1' }, // meneur top
            { id: 2, x: 510, y: 380, label: '2' }, // aile droite
            { id: 3, x: 90,  y: 380, label: '3' }, // aile gauche
            { id: 4, x: 470, y: 200, label: '4' }, // corner droit
            { id: 5, x: 130, y: 200, label: '5' }  // corner gauche
        ],
        balle: { sur: 1 },
        steps: [
            {
                titre: 'Position initiale 5-Out',
                texte: 'Les 5 joueurs occupent les 5 spots autour de l\'arc : meneur top, deux ailes 45°, deux corners. Écartement maximal.',
                passes: [],
                mouvements: []
            },
            {
                titre: '1. Passe meneur → aile droite (2)',
                texte: 'Le meneur 1 passe au 2 et coupe immédiatement vers le panier (cut basket).',
                passes: [{ de: 1, vers: 2 }],
                mouvements: []
            },
            {
                titre: '2. Coupe basket du meneur',
                texte: "Le 1 coupe ligne médiane vers le cercle. S'il est ouvert, le 2 lui sert un layup.",
                passes: [],
                mouvements: [{ id: 1, x: 320, y: 280 }],
                balleAvec: 2
            },
            {
                titre: '3. Remplissage : 4 monte au top',
                texte: 'Le 4 (corner droit) remonte au spot du meneur pour remplir l\'espace. Le 1 ressort au corner opposé.',
                passes: [],
                mouvements: [
                    { id: 4, x: 300, y: 480 },
                    { id: 1, x: 130, y: 200 },
                    { id: 5, x: 90,  y: 380 }
                ]
            },
            {
                titre: '4. Re-circulation et pick & roll',
                texte: 'Le 2 rend la balle à 4 au top. Le 5 monte poser un écran sur le porteur. Pick & roll classique.',
                passes: [{ de: 2, vers: 4 }],
                mouvements: [{ id: 5, x: 280, y: 420 }],
                balleAvec: 4
            }
        ]
    },

    {
        id: 'pick-roll',
        cat: 'Attaque',
        type: 'dynamique',
        nom: 'Pick & Roll central',
        sub: 'Combinaison à 2 — tous niveaux',
        description: 'La combinaison la plus utilisée au monde. Le poseur d\'écran libère le porteur de balle, puis « roule » vers le cercle. Lecture des défenseurs pour décider : tir, passe au rouleur, kick out.',
        legende: [
            { c: 'rouge', t: 'Attaquant' },
            { c: 'orange', t: 'Passe / dribble' },
            { c: 'jaune', t: 'Écran posé' }
        ],
        joueurs: [
            { id: 1, x: 300, y: 480, label: '1' },
            { id: 5, x: 300, y: 280, label: '5' },
            { id: 2, x: 510, y: 380, label: '2' },
            { id: 3, x: 90,  y: 380, label: '3' },
            { id: 4, x: 470, y: 180, label: '4' }
        ],
        balle: { sur: 1 },
        steps: [
            {
                titre: 'Position initiale',
                texte: 'Le 1 porte la balle au top. Le pivot 5 est en haut de la raquette. Trois shooteurs écartés.',
                passes: [],
                mouvements: []
            },
            {
                titre: '1. Le 5 monte poser l\'écran',
                texte: 'Le pivot 5 sort à hauteur de la ligne à 3 pts pour poser un écran solide à droite du meneur.',
                passes: [],
                mouvements: [{ id: 5, x: 360, y: 420 }],
                ecran: { x: 360, y: 420 }
            },
            {
                titre: '2. Dribble du porteur sur l\'écran',
                texte: 'Le 1 dribble fort sur l\'épaule du 5, en frôlant l\'écran (« thumb to thumb »).',
                passes: [],
                mouvements: [{ id: 1, x: 380, y: 380 }],
                dribble: { de: { x: 300, y: 480 }, vers: { x: 380, y: 380 } }
            },
            {
                titre: '3. Le 5 plonge (roll)',
                texte: 'Après l\'écran, le 5 pivote (rear turn) et plonge vers le cercle. Il est ouvert si l\'aide tarde.',
                passes: [],
                mouvements: [{ id: 5, x: 320, y: 230 }]
            },
            {
                titre: '4. Lecture : passe au rouleur',
                texte: "Si le défenseur du 5 hedge ou switch, le porteur lit l'aide et sert le rouleur dans la raquette.",
                passes: [{ de: 1, vers: 5 }],
                balleAvec: 5
            }
        ]
    },

    {
        id: 'give-go',
        cat: 'Attaque',
        type: 'dynamique',
        nom: 'Give & Go (passe et va)',
        sub: 'Fondamental — Animateur / N1',
        description: 'Le fondamental N°1 : passer puis couper immédiatement vers le panier pour recevoir un retour. Lecture du défenseur et timing de la coupe sont les clés.',
        legende: [
            { c: 'rouge', t: 'Attaquant' },
            { c: 'orange', t: 'Passe' },
            { c: 'jaune', t: 'Coupe vers le panier' }
        ],
        joueurs: [
            { id: 1, x: 300, y: 480, label: '1' },
            { id: 2, x: 510, y: 380, label: '2' },
            { id: 3, x: 90,  y: 380, label: '3' },
            { id: 4, x: 470, y: 180, label: '4' },
            { id: 5, x: 130, y: 180, label: '5' }
        ],
        balle: { sur: 1 },
        steps: [
            { titre: 'Position initiale', texte: 'Les 5 joueurs sont écartés. Le 1 porte la balle au top.', passes: [], mouvements: [] },
            { titre: '1. Passe 1 → 2', texte: 'Le meneur 1 passe au 2 sur l\'aile droite.', passes: [{ de: 1, vers: 2 }], mouvements: [], balleAvec: 2 },
            { titre: '2. Coupe basket du 1', texte: 'Le 1 coupe immédiatement après sa passe vers le panier (« passe et va »).', passes: [], mouvements: [{ id: 1, x: 310, y: 260 }] },
            { titre: '3. Retour 2 → 1 dans la raquette', texte: 'Si le défenseur du 1 a tourné la tête (sur la balle), le 2 sert le 1 pour un layup.', passes: [{ de: 2, vers: 1 }], balleAvec: 1, finCercle: { x: 310, y: 260 } }
        ]
    },

    {
        id: 'fastbreak',
        cat: 'Transition',
        type: 'dynamique',
        nom: 'Fast Break — 3 couloirs',
        sub: 'Contre-attaque rapide — Niveau 1/2',
        description: 'Principe FIBA : après une récupération, occuper les 3 couloirs (gauche, centre, droite) et avancer le ballon au plus vite par le couloir central.',
        legende: [
            { c: 'rouge', t: 'Attaquant' },
            { c: 'orange', t: 'Passe' },
            { c: 'jaune', t: 'Course en couloir' }
        ],
        joueurs: [
            { id: 5, x: 300, y: 530, label: '5' },
            { id: 1, x: 300, y: 470, label: '1' },
            { id: 2, x: 510, y: 470, label: '2' },
            { id: 3, x: 90,  y: 470, label: '3' },
            { id: 4, x: 300, y: 540, label: '4' }
        ],
        balle: { sur: 5 },
        steps: [
            { titre: 'Rebond défensif', texte: 'Le 5 (pivot) capte le rebond et passe rapidement au meneur 1 démarqué.', passes: [{ de: 5, vers: 1 }], balleAvec: 1, mouvements: [] },
            { titre: 'Les 3 couloirs s\'ouvrent', texte: 'Le 2 sprinte couloir droit, le 3 couloir gauche, le 1 dribble centre. Le 4 et 5 trailers.', passes: [], mouvements: [
                { id: 2, x: 510, y: 230 },
                { id: 3, x: 90,  y: 230 },
                { id: 1, x: 300, y: 320 }
            ] },
            { titre: 'Avancée centrale', texte: 'Le 1 dribble vivement le couloir central jusqu\'à la ligne des LF.', passes: [], mouvements: [{ id: 1, x: 300, y: 240 }], dribble: { de: { x: 300, y: 320 }, vers: { x: 300, y: 240 } } },
            { titre: 'Lecture : passe au coureur', texte: 'Si le défenseur s\'engage sur le porteur, passe au coureur opposé (2 ou 3) pour layup.', passes: [{ de: 1, vers: 2 }], balleAvec: 2, finCercle: { x: 470, y: 180 } }
        ]
    },

    {
        id: 'horns',
        cat: 'Attaque',
        type: 'statique',
        nom: 'Horns — alignement de base',
        sub: 'Système moderne — Niveau 2/3',
        description: 'Disposition « cornes » : 1 (meneur) en haut, 4 et 5 aux deux elbows (postes haut), 2 et 3 dans les corners. Crée double menace de pick & roll/pop.',
        legende: [
            { c: 'rouge', t: 'Attaquant' },
            { c: 'jaune', t: 'Écran haut potentiel' }
        ],
        joueurs: [
            { id: 1, x: 300, y: 470, label: '1' },
            { id: 4, x: 380, y: 320, label: '4' },
            { id: 5, x: 220, y: 320, label: '5' },
            { id: 2, x: 530, y: 130, label: '2' },
            { id: 3, x: 70,  y: 130, label: '3' }
        ],
        balle: { sur: 1 },
        steps: [
            { titre: 'Alignement Horns', texte: 'Le 4 et le 5 peuvent tous deux poser un écran. Le meneur choisit son côté selon la défense.', passes: [], mouvements: [], ecran: { x: 380, y: 320 } }
        ]
    },

    {
        id: '5out-static',
        cat: 'Attaque',
        type: 'statique',
        nom: '5-Out — alignement de départ',
        sub: 'Spread offense — tous niveaux',
        description: 'Les 5 spots de l\'attaque « 5 hors arc » : top, deux ailes 45°, deux corners. Permet jeu de coupes, de back-doors et d\'écrans sur porteur. Référence FIBA WABC.',
        legende: [{ c: 'rouge', t: 'Attaquant' }],
        joueurs: [
            { id: 1, x: 300, y: 480, label: '1' },
            { id: 2, x: 510, y: 380, label: '2' },
            { id: 3, x: 90,  y: 380, label: '3' },
            { id: 4, x: 470, y: 180, label: '4' },
            { id: 5, x: 130, y: 180, label: '5' }
        ],
        balle: { sur: 1 },
        steps: [
            { titre: 'Position 5-Out', texte: 'Espace optimal. Tout joueur peut couper vers le panier, tous les angles de passes sont ouverts.', passes: [], mouvements: [] }
        ]
    },

    {
        id: 'zone-23',
        cat: 'Défense',
        type: 'statique',
        nom: 'Défense de zone 2-3',
        sub: 'Défense de zone — N2',
        description: 'Disposition 2-3 : deux défenseurs au-dessus de la ligne des lancers francs, trois en bas (corners + raquette). Protège la raquette, vulnérable au tir extérieur et au high post.',
        legende: [
            { c: 'def', t: 'Défenseur' }
        ],
        joueurs: [
            { id: 1, x: 220, y: 380, label: 'D', def: true },
            { id: 2, x: 380, y: 380, label: 'D', def: true },
            { id: 3, x: 130, y: 220, label: 'D', def: true },
            { id: 4, x: 470, y: 220, label: 'D', def: true },
            { id: 5, x: 300, y: 180, label: 'D', def: true }
        ],
        balle: { sur: null },
        steps: [
            { titre: 'Alignement 2-3', texte: 'Les deux défenseurs avant pressent les meneurs, les trois arrière protègent la raquette et les corners.', passes: [], mouvements: [] }
        ]
    },

    {
        id: 'zone-32',
        cat: 'Défense',
        type: 'statique',
        nom: 'Défense de zone 3-2',
        sub: 'Défense de zone — Niveau 2/3',
        description: 'Disposition 3-2 : trois défenseurs en haut (top et deux ailes), deux en bas. Protège la ligne à 3 points et le high post. Vulnérable aux corners et à la ligne de fond.',
        legende: [{ c: 'def', t: 'Défenseur' }],
        joueurs: [
            { id: 1, x: 300, y: 400, label: 'D', def: true },
            { id: 2, x: 470, y: 350, label: 'D', def: true },
            { id: 3, x: 130, y: 350, label: 'D', def: true },
            { id: 4, x: 220, y: 200, label: 'D', def: true },
            { id: 5, x: 380, y: 200, label: 'D', def: true }
        ],
        balle: { sur: null },
        steps: [{ titre: 'Alignement 3-2', texte: '3 défenseurs en haut, 2 en bas. Bonne couverture du tir extérieur.', passes: [], mouvements: [] }]
    }
];

(function () {
    'use strict';

    const list = document.querySelector('.tactic-list');
    const stage = document.querySelector('.tactic-stage');
    if (!list || !stage) return;

    let currentId = TACTIQUES[0].id;
    let currentStep = 0;
    let playing = false;
    let playTimer = null;

    // Construire la liste
    TACTIQUES.forEach((t) => {
        const btn = document.createElement('button');
        btn.className = 'tactic-btn';
        btn.dataset.id = t.id;
        btn.innerHTML = `
            <span class="tactic-cat">${t.cat} · ${t.type}</span>
            <span>${t.nom}</span>
        `;
        btn.addEventListener('click', () => selectTactic(t.id));
        list.appendChild(btn);
    });

    function selectTactic(id) {
        currentId = id;
        currentStep = 0;
        stopPlay();
        list.querySelectorAll('.tactic-btn').forEach((b) => b.classList.toggle('active', b.dataset.id === id));
        renderStage();
    }

    function renderStage() {
        const t = TACTIQUES.find((x) => x.id === currentId);
        if (!t) return;
        const step = t.steps[currentStep];

        stage.innerHTML = `
            <div class="tactic-stage-head">
                <div>
                    <h2>${t.nom}</h2>
                    <small style="color:var(--gris)">${t.sub}</small>
                </div>
                <div class="stage-actions">
                    ${t.steps.length > 1 ? `
                        <button class="btn-icon" data-action="prev" title="Étape précédente" ${currentStep === 0 ? 'disabled style="opacity:.4;cursor:default"' : ''}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
                        </button>
                        <button class="btn-icon rouge" data-action="play" title="Lancer l\'animation">
                            ${playing ? '⏸' : '▶'}
                        </button>
                        <button class="btn-icon" data-action="next" title="Étape suivante" ${currentStep === t.steps.length - 1 ? 'disabled style="opacity:.4;cursor:default"' : ''}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 6l6 6-6 6"/></svg>
                        </button>
                    ` : ''}
                </div>
            </div>
            <div class="tactic-court">
                ${buildCourtSVG(t, step)}
            </div>
            <div class="tactic-info">
                <h3>${currentStep + 1}/${t.steps.length} — ${escapeHtml(step.titre)}</h3>
                <p>${escapeHtml(step.texte)}</p>
                <p style="margin-top:8px"><em style="color:var(--gris)">${escapeHtml(t.description)}</em></p>
                <div class="tactic-legend">
                    ${t.legende.map((l) => `<span><span class="swatch ${l.c === 'def' ? 'def' : ''}" style="${l.c !== 'def' ? 'background:var(--' + l.c + ')' : ''}"></span>${escapeHtml(l.t)}</span>`).join('')}
                </div>
            </div>
        `;

        stage.querySelectorAll('[data-action]').forEach((el) => {
            const a = el.dataset.action;
            if (el.hasAttribute('disabled')) return;
            el.addEventListener('click', () => {
                if (a === 'next') { stopPlay(); nextStep(); }
                else if (a === 'prev') { stopPlay(); prevStep(); }
                else if (a === 'play') { togglePlay(); }
            });
        });
    }

    function buildCourtSVG(t, step) {
        // Calculer positions courantes en intégrant tous les step.mouvements jusqu'à currentStep
        const positions = {};
        t.joueurs.forEach((j) => (positions[j.id] = { x: j.x, y: j.y, def: j.def, label: j.label }));
        let balleSur = t.balle.sur;
        let dribble = null;
        let finCercle = null;
        let ecran = null;

        for (let i = 0; i <= currentStep; i++) {
            const s = t.steps[i];
            if (s.mouvements) s.mouvements.forEach((m) => { positions[m.id].x = m.x; positions[m.id].y = m.y; });
            if (s.balleAvec) balleSur = s.balleAvec;
        }
        const cur = t.steps[currentStep];
        if (cur.dribble) dribble = cur.dribble;
        if (cur.finCercle) finCercle = cur.finCercle;
        if (cur.ecran) ecran = cur.ecran;

        // Passes du step courant
        const passes = cur.passes || [];

        let arrows = '';
        passes.forEach((p, idx) => {
            const from = positions[p.de];
            const to = positions[p.vers];
            if (!from || !to) return;
            arrows += dashedArrow(from.x, from.y, to.x, to.y, 'var(--orange)', 'pass-' + idx);
        });

        // Mouvements (flèches jaunes pleines depuis position précédente)
        let moveArrows = '';
        if (cur.mouvements) {
            cur.mouvements.forEach((m, idx) => {
                // Position précédente : avant ce step
                let prev = { x: t.joueurs.find((j) => j.id === m.id).x, y: t.joueurs.find((j) => j.id === m.id).y };
                for (let i = 0; i < currentStep; i++) {
                    const mvs = t.steps[i].mouvements || [];
                    mvs.forEach((mv) => { if (mv.id === m.id) prev = { x: mv.x, y: mv.y }; });
                }
                moveArrows += solidArrow(prev.x, prev.y, m.x, m.y, 'var(--jaune-fonce)', 'mv-' + idx);
            });
        }

        // Dribble (ondulé)
        let dribbleArrow = '';
        if (dribble) {
            dribbleArrow = wavyArrow(dribble.de.x, dribble.de.y, dribble.vers.x, dribble.vers.y, 'var(--orange)');
        }

        // Cercle d'arrivée
        let finition = '';
        if (finCercle) {
            finition = `<circle cx="${finCercle.x}" cy="${finCercle.y}" r="24" fill="none" stroke="var(--jaune)" stroke-width="3" stroke-dasharray="4 3" opacity=".9">
                <animate attributeName="r" values="20;28;20" dur="1.4s" repeatCount="indefinite"/>
            </circle>`;
        }

        // Écran (T-bar)
        let ecranEl = '';
        if (ecran) {
            ecranEl = `<g transform="translate(${ecran.x},${ecran.y})">
                <line x1="-18" y1="0" x2="18" y2="0" stroke="var(--jaune)" stroke-width="5" stroke-linecap="round"/>
                <line x1="0" y1="-10" x2="0" y2="10" stroke="var(--jaune)" stroke-width="5" stroke-linecap="round"/>
            </g>`;
        }

        // Joueurs
        let players = '';
        Object.entries(positions).forEach(([id, p]) => {
            const isBall = +id === +balleSur;
            const fill = p.def ? 'var(--vert-fonce)' : 'var(--rouge)';
            players += `
                <g class="player-token" transform="translate(${p.x},${p.y})">
                    <circle r="22" fill="${fill}" stroke="white" stroke-width="3" filter="url(#shadow)"/>
                    ${isBall ? `<circle r="9" cx="22" cy="-18" fill="var(--orange)" stroke="white" stroke-width="2">
                        <animate attributeName="r" values="9;11;9" dur="1.2s" repeatCount="indefinite"/>
                    </circle>` : ''}
                    <text x="0" y="6" text-anchor="middle" fill="white" font-weight="800" font-size="20" font-family="Inter, sans-serif">${p.label}</text>
                </g>
            `;
        });

        return `
        <svg viewBox="0 0 600 560" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;display:block;">
            <defs>
                <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="3" stdDeviation="3" flood-opacity=".35"/>
                </filter>
                <marker id="arrowhead-orange" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="var(--orange)"/>
                </marker>
                <marker id="arrowhead-jaune" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="var(--jaune-fonce)"/>
                </marker>
            </defs>

            <!-- Demi-terrain FIBA (parquet) -->
            <rect x="0" y="0" width="600" height="560" fill="#c98b48"/>
            <rect x="0" y="0" width="600" height="560" fill="none" stroke="white" stroke-width="3"/>

            <!-- Cercle central (ligne médiane en bas) -->
            <line x1="0" y1="540" x2="600" y2="540" stroke="white" stroke-width="3"/>
            <path d="M 540 540 A 60 60 0 0 1 660 540" fill="none" stroke="white" stroke-width="3"/>

            <!-- Raquette : 4,90 m large × 5,80 long. Rectangle FIBA -->
            <rect x="210" y="40" width="180" height="190" fill="none" stroke="white" stroke-width="3"/>

            <!-- Ligne des lancers francs -->
            <line x1="210" y1="230" x2="390" y2="230" stroke="white" stroke-width="3"/>

            <!-- Cercle des LF -->
            <circle cx="300" cy="230" r="60" fill="none" stroke="white" stroke-width="3"/>
            <path d="M 240 230 A 60 60 0 0 0 360 230" fill="none" stroke="white" stroke-width="3" stroke-dasharray="6 6"/>

            <!-- Cercle restrictif (no-charge) -->
            <path d="M 275 75 A 25 25 0 0 0 325 75" fill="none" stroke="white" stroke-width="2"/>

            <!-- Arc à 3 points -->
            <path d="M 30 40 L 30 130 A 270 270 0 0 0 570 130 L 570 40" fill="none" stroke="white" stroke-width="3"/>

            <!-- Panneau et anneau -->
            <line x1="260" y1="40" x2="340" y2="40" stroke="white" stroke-width="4"/>
            <circle cx="300" cy="56" r="11" fill="none" stroke="var(--rouge)" stroke-width="3"/>

            <!-- Flèches & overlays -->
            ${arrows}
            ${moveArrows}
            ${dribbleArrow}
            ${ecranEl}
            ${finition}

            <!-- Joueurs -->
            ${players}
        </svg>`;
    }

    function dashedArrow(x1, y1, x2, y2, color, id) {
        return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="3.5" stroke-dasharray="9 6" marker-end="url(#arrowhead-orange)" stroke-linecap="round">
            <animate attributeName="stroke-dashoffset" from="30" to="0" dur="1s" repeatCount="indefinite"/>
        </line>`;
    }
    function solidArrow(x1, y1, x2, y2, color, id) {
        return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="3.5" marker-end="url(#arrowhead-jaune)" stroke-linecap="round" opacity=".9"/>`;
    }
    function wavyArrow(x1, y1, x2, y2, color) {
        // crée un trajet ondulé entre deux points
        const dx = x2 - x1, dy = y2 - y1;
        const len = Math.hypot(dx, dy);
        const nx = -dy / len, ny = dx / len;
        const segs = Math.max(3, Math.floor(len / 24));
        let d = `M ${x1} ${y1}`;
        for (let i = 1; i <= segs; i++) {
            const t = i / segs;
            const cx = x1 + dx * t + nx * (i % 2 === 0 ? 8 : -8);
            const cy = y1 + dy * t + ny * (i % 2 === 0 ? 8 : -8);
            d += ` Q ${cx} ${cy} ${x1 + dx * (i / segs)} ${y1 + dy * (i / segs)}`;
        }
        return `<path d="${d}" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round" marker-end="url(#arrowhead-orange)"/>`;
    }

    function nextStep() {
        const t = TACTIQUES.find((x) => x.id === currentId);
        if (!t) return;
        if (currentStep < t.steps.length - 1) {
            currentStep++;
            renderStage();
        }
    }
    function prevStep() {
        if (currentStep > 0) {
            currentStep--;
            renderStage();
        }
    }

    function togglePlay() {
        if (playing) stopPlay();
        else startPlay();
    }
    function startPlay() {
        const t = TACTIQUES.find((x) => x.id === currentId);
        if (!t || t.steps.length <= 1) return;
        playing = true;
        renderStage();
        const advance = () => {
            if (!playing) return;
            if (currentStep < t.steps.length - 1) {
                currentStep++;
                renderStage();
                playTimer = setTimeout(advance, 2400);
            } else {
                stopPlay();
            }
        };
        playTimer = setTimeout(advance, 2400);
    }
    function stopPlay() {
        playing = false;
        if (playTimer) { clearTimeout(playTimer); playTimer = null; }
    }

    function escapeHtml(s) {
        return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    // Init
    list.querySelector('.tactic-btn').classList.add('active');
    renderStage();
})();
