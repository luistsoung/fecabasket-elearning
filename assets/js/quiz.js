/* =========================================================
   FECABASKET E-LEARNING — Moteur de quiz / QCM
   3 catégories : Quiz rapides · Quiz approfondis · QCM thématiques
   34 évaluations · ~464 questions · alignées FIBA WABC
   ========================================================= */

const QUIZZES = {

    // ====================================================
    // ⚡ QUIZ RAPIDES TRANSVERSAUX (4 × ~8 q = 32 q)
    // ====================================================
    'rap-regles': {
        title: 'Quiz · Règles FIBA officielles',
        niveau: 'Quiz rapide',
        cat: 'rapide',
        duree: '8 min',
        questions: [
            { q: 'Temps pour franchir la ligne médiane après remise ?', options: ['5 sec', '8 sec', '10 sec', '24 sec'], correct: 1, explication: 'Règle des 8 secondes FIBA.' },
            { q: 'Durée d\'une période FIBA sénior ?', options: ['8 min', '10 min', '12 min', '15 min'], correct: 1, explication: 'FIBA : 4 × 10 min.' },
            { q: 'Distance ligne à 3 points FIBA ?', options: ['6,25 m', '6,75 m', '7,24 m', '7,50 m'], correct: 1, explication: 'FIBA : 6,75 m.' },
            { q: 'Fautes personnelles avant exclusion ?', options: ['4', '5', '6', '7'], correct: 1, explication: '5 fautes FIBA.' },
            { q: 'TM max dans les 2 dernières min du 4ème QT ?', options: ['1', '2', '3', 'Illimité'], correct: 1, explication: '2 TM max.' },
            { q: 'Joueurs max simultanément ?', options: ['4', '5', '6', '7'], correct: 1, explication: '5 par équipe.' },
            { q: '2e faute T du même joueur ?', options: ['Avertissement', '2 LF', 'Disqualification', 'Aucune'], correct: 2, explication: 'Disqualification.' },
            { q: 'La règle des 24 secondes concerne...', options: ['Durée d\'une attaque', 'Pause', 'TM', 'Remplacement'], correct: 0, explication: '24 sec pour tenter un tir touchant le cercle.' },
            { q: 'Tir touche cercle aux 24s expirantes ?', options: ['0', '14 si attaque récupère', '24', 'Faute'], correct: 1, explication: 'Chrono à 14 sec.' },
            { q: 'Joueurs MAX le long de la zone restrictive aux LF ?', options: ['3', '4', '5', '6'], correct: 2, explication: '5 joueurs max.' },
        ]
    },
    'rap-pedagogie': {
        title: 'Quiz · Pédagogie Mini-Basket',
        niveau: 'Quiz rapide',
        cat: 'rapide',
        duree: '6 min',
        questions: [
            { q: 'Durée max séance Mini ?', options: ['30 min', '60 min', '75 min', '90 min'], correct: 1, explication: '60 min max.' },
            { q: 'Ratio jeu / explication ?', options: ['50/50', '70/30', '80/20', '90/10'], correct: 2, explication: '80% en jeu.' },
            { q: 'Hauteur panier Mini ?', options: ['2,40 m', '2,60 m', '2,80 m', '3,05 m'], correct: 1, explication: '2,60 m.' },
            { q: 'Principe N°1 Mini ?', options: ['Gagner', 'Plaisir, sécurité, participation', 'Tactique', 'Physique'], correct: 1, explication: 'Triptyque WABC.' },
            { q: 'Ballon Mini U11 ?', options: ['T4', 'T5', 'T6', 'T7'], correct: 1, explication: 'T5.' },
            { q: 'Défense recommandée Mini ?', options: ['Zone', 'Individuelle uniquement', 'Box-1', 'Press'], correct: 1, explication: 'Zone interdite en Mini.' },
            { q: 'Temps minimum / enfant en match ?', options: ['Au choix', '1 quart-temps complet', '50%', 'Aucune règle'], correct: 1, explication: '1 quart min.' },
            { q: 'Manipulation chez U7 commence par...', options: ['Tirs', 'Jeux à l\'arrêt puis en marchant', 'Défense', 'P&R'], correct: 1, explication: 'Motricité globale d\'abord.' },
        ]
    },
    'rap-tactique': {
        title: 'Quiz · Tactique et systèmes',
        niveau: 'Quiz rapide',
        cat: 'rapide',
        duree: '10 min',
        questions: [
            { q: 'Rôle du porteur après écran P&R ?', options: ['Donner direct', 'Lire défense : tir / pass roll / kick out', 'Reculer', 'Sortir'], correct: 1, explication: 'P&R = lecture défense.' },
            { q: 'Zone 2-3 : 2 défenseurs en ?', options: ['Ailes', 'Haut (LF/3pts top)', 'Ligne fond', 'Centre'], correct: 1, explication: '2 haut + 3 bas.' },
            { q: 'Point faible zone 2-3 ?', options: ['Corners', 'High post', 'Ligne fond', 'Sorties dribble'], correct: 1, explication: 'High post = zone clé.' },
            { q: '5-out : joueurs au-delà des 3 pts ?', options: ['3', '4', '5', 'Variable'], correct: 2, explication: '5 joueurs.' },
            { q: 'Give & Go consiste à ?', options: ['Passer et sortir', 'Passer puis couper au panier', 'Doubler la passe', '2 dribbles'], correct: 1, explication: 'Passe + coupe basket.' },
            { q: 'Contre pressing tout-terrain ?', options: ['Dribble long', 'Long ballon', 'Passes courtes, ouverture latérale', 'Touche'], correct: 2, explication: 'Triangle et passes courtes.' },
            { q: 'Qualité de Horns ?', options: ['Densité raquette', '2 grands aux elbows + ailes corners', 'Dos panier', 'Tous fond'], correct: 1, explication: 'Set Horns classique.' },
            { q: 'Fast break principe N°1 ?', options: ['Attendre', '3 couloirs et avancer vite', 'Dribble long', 'Au pivot'], correct: 1, explication: '3 couloirs.' },
        ]
    },
    'rap-securite': {
        title: 'Quiz · Sécurité et premiers secours',
        niveau: 'Quiz rapide',
        cat: 'rapide',
        duree: '5 min',
        questions: [
            { q: 'Commotion suspectée : action ?', options: ['Laisser revenir', 'Retrait définitif du match', 'Médicament', 'Sprints'], correct: 1, explication: 'Protocole SCAT.' },
            { q: 'Avant séance, vérifier ?', options: ['Chaussures', 'Terrain, paniers, ballons, trousse', 'Présence', 'Score'], correct: 1, explication: 'Check-list complète.' },
            { q: 'Entorse cheville : protocole ?', options: ['Courir', 'GREC : Glace Repos Élévation Compression', 'Massage', 'Anti-douleur'], correct: 1, explication: 'GREC = RICE en anglais.' },
            { q: 'Temp. max entraînement extérieur ?', options: ['28°C', '32°C', '35°C', 'Aucune'], correct: 1, explication: 'Au-delà : hyperthermie.' },
            { q: 'Fréquence d\'hydratation ?', options: ['Mi-temps', '15-20 min, petites gorgées', 'Soif', 'Fin séance'], correct: 1, explication: 'Pas attendre la soif.' },
            { q: 'Lunettes en match ?', options: ['Classiques', 'Lunettes de sport avec sangle, polycarbonate', 'Lentilles uniquement', 'Aucune'], correct: 1, explication: 'Lunettes de sport FIBA.' },
        ]
    },

    // ====================================================
    // 📚 QUIZ APPROFONDIS PAR NIVEAU (15 × 15-20 q ≈ 252 q)
    // ====================================================

    // --- Animateur (3 quiz approfondis) ---
    'qa-animateur-securite': {
        title: 'Quiz approfondi · Sécurité Mini-Basket',
        niveau: 'Animateur',
        cat: 'approfondi',
        duree: '12 min',
        questions: [
            { q: 'En cas de suspicion de commotion lors d\'un match jeune ?', options: ['Laisser revenir si mal de tête passe', 'Retirer immédiatement et définitivement', 'Donner médicament', 'Sprints pour évaluer'], correct: 1, explication: 'Protocole SCAT FIBA Medical : retrait immédiat, repos, examen médical. Pas de retour sans avis médical.' },
            { q: 'Avant chaque séance, vérifier ?', options: ['Chaussures uniquement', 'État terrain, paniers, ballons, trousse, eau', 'Présence seule', 'Score dernier match'], correct: 1, explication: 'Check-list sécurité : sol sec, paniers fixes, ballons gonflés, trousse, eau.' },
            { q: 'Première action entorse cheville ?', options: ['Faire courir', 'Protocole GREC : Glace Repos Élévation Compression', 'Masser', 'Anti-douleur'], correct: 1, explication: 'GREC/RICE. Aucune chaleur ni massage sur 48h.' },
            { q: 'Température max entraînement extérieur ?', options: ['28°C', '32°C', '35°C', 'Aucune limite'], correct: 1, explication: 'Au-delà 32°C : hyperthermie. Annuler si > 35°C.' },
            { q: 'Fréquence d\'hydratation pendant l\'effort ?', options: ['Mi-temps uniquement', 'Toutes les 15-20 min, par petites gorgées', 'Quand soif', 'Fin séance'], correct: 1, explication: '15-20 min, 150-200 ml. Ne pas attendre la soif.' },
            { q: 'Protection pour lunettes en match ?', options: ['Classiques', 'Lunettes de sport sangle + polycarbonate', 'Lentilles seules', 'Aucune'], correct: 1, explication: 'Lunettes de sport FIBA conformes.' },
            { q: 'Sol mouillé : que faire ?', options: ['Continuer', 'Arrêter, signaler, sécher avant reprise', 'Éviter la zone', 'Cône dessus'], correct: 1, explication: 'Sécurité absolue : arrêt + séchage + vérification.' },
            { q: 'Saignement de nez : geste ?', options: ['Tête en arrière', 'Tête en avant, compression 5 min', 'Allonger sur dos', 'Eau froide'], correct: 1, explication: 'Tête en avant + compression sous le nez.' },
            { q: 'Trousse de secours minimale Mini ?', options: ['Défibrillateur', 'Glace, désinfectant, pansements, bande, gants', 'Thermomètre auriculaire', 'Attelle'], correct: 1, explication: 'Trousse de base : indispensable.' },
            { q: 'Ratio encadrant/enfants Mini ?', options: ['1 pour 5', '1 pour 12 max', '1 pour 20', '1 pour 30'], correct: 1, explication: '12 max par animateur.' },
            { q: 'Valeurs FIBA prioritaires Mini ?', options: ['Gagner', 'Plaisir, sécurité, participation', 'Tactique', 'Physique'], correct: 1, explication: 'Triptyque WABC.' },
            { q: 'Un enfant pleure : attitude ?', options: ['Ignorer', 'Isoler', 'Écouter sans dramatiser, méthode 3 portes', 'Appeler parents'], correct: 2, explication: '3 portes : sortie courte, écoute, retour.' },
            { q: 'Comportement risquant la maltraitance ?', options: ['Encourager', 'Crier sur enfant pour erreur technique', 'Feedback positif', 'Aider'], correct: 1, explication: 'Crier = violence verbale. Toujours valoriser l\'effort.' },
            { q: 'Coup à la tête : quand alerter parents ?', options: ['Seulement si KO', 'Toujours, même léger', 'Si pleurs', 'Si visible bleu'], correct: 1, explication: 'TOUT coup à la tête signalé. Risque commotion différée.' },
            { q: 'Durée max séance Mini U7-U11 ?', options: ['30 min', '60 min', '90 min', '120 min'], correct: 1, explication: '60 min max.' },
        ]
    },

    'qa-animateur-pedagogie': {
        title: 'Quiz approfondi · Pédagogie Mini-Basket',
        niveau: 'Animateur',
        cat: 'approfondi',
        duree: '14 min',
        questions: [
            { q: 'Durée max recommandée séance Mini U7-U11 ?', options: ['30 min', '60 min', '75 min', '90 min'], correct: 1, explication: '60 minutes pour conserver attention et plaisir.' },
            { q: 'Ratio JEU / EXPLICATION en Mini ?', options: ['50/50', '70/30', '80/20', '95/5'], correct: 2, explication: 'Minimum 80% en jeu. Apprentissage par l\'action.' },
            { q: 'Hauteur du panier Mini ?', options: ['2,40 m', '2,60 m', '2,80 m', '3,05 m'], correct: 1, explication: '2,60 m WABC.' },
            { q: 'Principe prioritaire Mini ?', options: ['Gagner', 'Plaisir, sécurité, participation', 'Tactique', 'Physique'], correct: 1, explication: 'Triptyque WABC.' },
            { q: 'Ballon U11 mixte ?', options: ['T4', 'T5', 'T6', 'T7'], correct: 1, explication: 'T5 pour Mini.' },
            { q: 'Défense recommandée Mini ?', options: ['Zone', 'Individuelle uniquement', 'Box-1', 'Press'], correct: 1, explication: 'Zone interdite Mini.' },
            { q: 'Temps min par enfant en match ?', options: ['Au choix', '1 période complète', '50%', 'Aucune'], correct: 1, explication: '1 quart-temps min.' },
            { q: 'Manipulation U7 commence par ?', options: ['Tirs en course', 'Manipulation arrêt puis marche', 'Défense', 'P&R'], correct: 1, explication: 'Motricité globale d\'abord.' },
            { q: 'Phase découverte motrice = ?', options: ['U5-U7', 'U8-U9', 'U10-U11', 'U12-U13'], correct: 0, explication: 'WABC : 5-7 ans = découverte.' },
            { q: 'Analyse technique analytique dès ?', options: ['5 ans', '8 ans', '10 ans', '14 ans'], correct: 2, explication: 'Retour analytique 10-12 ans.' },
            { q: 'Enfants max par groupe Mini ?', options: ['4', '8', '12', '16'], correct: 1, explication: '8 max par sous-groupe.' },
            { q: 'Structure type séance 60 min ?', options: ['10/40/10', '5/10/35/10', '5/30/25', '15/45'], correct: 1, explication: 'Accueil 5\' + échauffement 10\' + contenu 35\' + jeu 10\'.' },
            { q: 'Durée max explication Mini ?', options: ['10 sec', '30 sec', '2 min', '5 min'], correct: 1, explication: 'Règle des 30 secondes.' },
            { q: 'Langage de l\'animateur ?', options: ['Technique précis', 'Voix posée, simple, démo', 'Crié', 'Anglais'], correct: 1, explication: 'Démonstration > théorie.' },
            { q: 'Enfant débutant : que faire ?', options: ['Banc', 'Adapter niveau, donner ses chances', 'Autre groupe', 'Arrêter'], correct: 1, explication: 'Inclusion : toucher balle, tirer.' },
            { q: 'Évaluation Mini : à favoriser ?', options: ['Classement', 'Observation sans juger, progrès', 'Tests chronométrés', 'Notation matchs'], correct: 1, explication: 'Évaluation formative.' },
            { q: 'Signe de concentration U8 ?', options: ['Immobile', 'Regarde coach et exécute', 'Parle peu', 'Sans question'], correct: 1, explication: 'Regard + exécution = concentration.' },
            { q: 'L\'animateur participe-t-il aux jeux ?', options: ['Jamais', 'Parfois pour motiver et démontrer', 'Tout le temps', 'Fin uniquement'], correct: 1, explication: 'Participation occasionnelle = excellente motivation.' },
        ]
    },

    'qa-animateur-fondamentaux': {
        title: 'Quiz approfondi · Fondamentaux ludiques',
        niveau: 'Animateur',
        cat: 'approfondi',
        duree: '13 min',
        questions: [
            { q: 'Premier fondamental Mini ?', options: ['Tir 3pts', 'Manipulation', 'P&R', 'Zone'], correct: 1, explication: 'Manipulation = base.' },
            { q: 'Combien de mains travailler dribble Mini ?', options: ['Forte', 'Les 2 équilibrées', 'Pieds', 'Pas important'], correct: 1, explication: 'Ambidextrie obligatoire.' },
            { q: 'Regard pendant dribble ?', options: ['Sur ballon', 'Sol', 'Devant, décollé', 'Coach'], correct: 2, explication: 'Regard décollé du sol.' },
            { q: 'Combien de passes Mini ?', options: ['1', '2', '4', '8'], correct: 2, explication: 'Poitrine, terre, 1 main, en course.' },
            { q: 'Regard au tir Mini ?', options: ['Ballon', 'Cible (anneau)', 'Coach', 'Bas'], correct: 1, explication: 'Regard cible.' },
            { q: 'Exercice ludique pour passe 2 mains ?', options: ['File tir', 'Cercle 5 enfants ballon qui circule', 'Course longue', 'Tirage'], correct: 1, explication: 'Cercle de passes.' },
            { q: 'Give & Go = ?', options: ['Passer et sortir', 'Passer et couper au panier', 'Doubler', '2 dribbles'], correct: 1, explication: 'Passe + coupe.' },
            { q: 'Pourquoi les jeux centraux Mini ?', options: ['Éviter enseigner', 'Faire passer fondamentaux par plaisir', 'Gagner temps', 'Pas se fatiguer'], correct: 1, explication: 'Jeu = vecteur d\'apprentissage.' },
            { q: '« Chat qui dribble » sert à ?', options: ['Éliminer', 'Dribble + perception périphérique', 'Fatigue', 'Tir'], correct: 1, explication: 'Excellent jeu WABC.' },
            { q: 'Premier arrêt à apprendre Mini ?', options: ['1 temps simultané', '2 temps alternatif', 'Freiné dribble', 'Pas important'], correct: 0, explication: 'Stop 1 temps avant 2 temps.' },
            { q: 'Pas chassé défensif ?', options: ['Courir avant', 'Sans croiser jambes, fléchies', 'Sauter sur place', 'Marcher arrière'], correct: 1, explication: 'Base déplacement défensif.' },
            { q: 'Format jeu officiel Mini FIBA ?', options: ['5v5', '4v4', '3v3', '1v1'], correct: 2, explication: '3v3 idéal Mini.' },
            { q: '1v1 Mini : objectif principal ?', options: ['Marquer max', 'Lecture défenseur et prise de décision', 'Score', 'Dribbles'], correct: 1, explication: 'Duel pédagogique.' },
            { q: 'Cycle 8 séances priorité ?', options: ['1 thème par séance', 'Même thème chaque semaine', 'Thème global évolutif', '8 thèmes différents'], correct: 2, explication: 'Cohérence + variété.' },
            { q: 'Évaluer progression enfant Mini ?', options: ['Compter paniers', 'Observation continue + comparaison avec lui-même', 'Tests', 'Compétitions'], correct: 1, explication: 'Évaluation formative bienveillante.' },
            { q: '« Jeu de la voiture » enseigne ?', options: ['Tir', 'Dribble vitesses + changements direction', 'Défense', 'Rebond'], correct: 1, explication: 'WABC : démarrez, première...' },
            { q: 'Enfants par ballon en apprentissage ?', options: ['1 pour tous', '1 pour 2', '1 par enfant', 'Aucun'], correct: 2, explication: 'Max contacts.' },
        ]
    },

    // --- Moniteur (2 quiz approfondis) ---
    'qa-moniteur-technique': {
        title: 'Quiz approfondi · Fondamentaux techniques',
        niveau: 'Moniteur',
        cat: 'approfondi',
        duree: '12 min',
        questions: [
            { q: 'Triple threat signifie ?', options: ['3 paniers', 'Tirer/dribbler/passer', '3 fautes', '3 pts'], correct: 1, explication: 'Triple menace = 3 options.' },
            { q: 'Pied de pivot ?', options: ['Premier au sol', 'Au choix', 'Opposé main dribble', 'Droit'], correct: 0, explication: 'Premier pied au sol après réception.' },
            { q: 'Pas après arrêt dribble ?', options: ['0', '2 pas (gather + 2)', '3 pas', 'Illimité'], correct: 1, explication: '2 pas FIBA.' },
            { q: 'Arrêt 1 temps ?', options: ['Un pied puis autre', '2 pieds simultanés', 'Sauter 1 pied', 'Ralentir'], correct: 1, explication: 'Simultané, choix libre pivot.' },
            { q: 'Arrêt 2 temps ?', options: ['2 dribbles', 'Un pied puis l\'autre alternativement', 'Sauter 2 fois', '2 sec'], correct: 1, explication: 'Le 1er pied posé = pivot obligatoire.' },
            { q: 'Dribble main faible : commencer ?', options: ['Vitesse max', 'Lentement marche', 'Sautant', 'Sans regarder'], correct: 1, explication: 'Lent puis vite.' },
            { q: 'Lay-up droit : genou ?', options: ['Côté dribble', 'Opposé à main qui tire (gauche)', 'Pivot', 'Défenseur'], correct: 1, explication: 'Genou opposé à la main.' },
            { q: 'BEEF du tir ?', options: ['Force', 'Balance Eyes Elbow Follow-through', 'Marque', 'Défense'], correct: 1, explication: 'Mnémotechnique tir.' },
            { q: 'Passe à terre utilisée pour ?', options: ['Couper défense', 'Éviter bras hauts (servir pivot)', 'Imprécision', 'Ligne fond'], correct: 1, explication: 'Hauteur basse.' },
            { q: 'Passe overhead utile pour ?', options: ['Longues / par-dessus défense', 'Tir', 'Dribble', 'Feinte'], correct: 0, explication: 'Passes longues, contre-attaque.' },
            { q: 'Jab step sert à ?', options: ['Équilibre', 'Faire réagir défenseur sans engager', 'Marquer', 'Faute'], correct: 1, explication: 'Feinte de pas.' },
            { q: 'Mains du receveur en mouvement ?', options: ['Le long corps', 'Hautes et écartées', 'Derrière dos', 'Hanches'], correct: 1, explication: 'Cible visible.' },
            { q: 'Enseigner tir extérieur U13 : commencer par ?', options: ['Tirer à 6,75 m', 'Form shooting à 1 m, 1 main', 'Tir en saut', '3 pts'], correct: 1, explication: 'Form shooting d\'abord.' },
            { q: 'Drop step est ?', options: ['Tir extérieur', 'Pivot effacé jeu intérieur', 'Défense', 'Passe'], correct: 1, explication: 'Pivot effacé post-up.' },
            { q: 'Stop 1 temps : changer pivot ?', options: ['Librement', '1 fois', 'Non, fixe', 'Tous 3s'], correct: 0, explication: 'Choix libre au début.' },
            { q: 'Erreur classique tir U13 ?', options: ['Pousser à 2 mains', 'Trop monter', 'Pas regarder', 'Trop sauter'], correct: 0, explication: 'Pousser au lieu de tirer avec main d\'appoint.' },
        ]
    },

    'qa-moniteur-defense': {
        title: 'Quiz approfondi · Initiation à la défense',
        niveau: 'Moniteur',
        cat: 'approfondi',
        duree: '13 min',
        questions: [
            { q: 'Défenseur regarde ?', options: ['Ballon', 'Ventre du joueur', 'Yeux', 'Panier'], correct: 1, explication: 'Centre de gravité.' },
            { q: 'Position défensive de base ?', options: ['Jambes raides', 'Fléchies, bras écartés, pieds décalés', 'Talons', 'Genoux'], correct: 1, explication: 'Position défensive standard.' },
            { q: 'Triangle ballon-joueur-panier ?', options: ['3 défenseurs', 'Voir ballon ET joueur, entre lui et panier', 'Triangle offensif', 'Zone'], correct: 1, explication: 'Vision périphérique défensive.' },
            { q: 'Pas chassés : croiser jambes ?', options: ['Oui rapide', 'Jamais', '1/2', 'En arrière'], correct: 1, explication: 'Jamais croiser.' },
            { q: 'Ligne de passe à fermer ?', options: ['Médiane', 'Trajet de la balle vers son joueur', 'Couloir', '3 pts'], correct: 1, explication: 'Fermer la passe.' },
            { q: 'Deny défensif ?', options: ['Refuser 1v1', 'Empêcher réception du joueur', 'Dribbler', 'Sortir'], correct: 1, explication: 'Empêcher la réception.' },
            { q: 'Help position quand ?', options: ['Mon joueur ballon', 'Joueur à 2 passes du ballon', 'Jamais', 'Pivot'], correct: 1, explication: 'Help line.' },
            { q: 'Closeout = ?', options: ['Fermeture match', 'Sprint puis pas chassés sur tireur', 'Faute', 'Tir'], correct: 1, explication: 'Sprint + pas chassés.' },
            { q: 'Closeout mains ?', options: ['Une haute (tir) une basse (drive)', 'Les 2 hautes', '2 basses', 'Croisés'], correct: 0, explication: 'High-low.' },
            { q: 'Sur écran, défense simple ?', options: ['Switch', 'Sortir terrain', 'Crier coach', 'Rien'], correct: 0, explication: 'Switch = échange.' },
            { q: 'Défenseurs max dans raquette pour 1 attaquant ?', options: ['Tous', '2 max (sauf 3 sec)', 'Pas important', 'Aucun'], correct: 1, explication: 'Règle 3 sec.' },
            { q: 'Box out = ?', options: ['Faute', 'Contact épaule-épaule en arc', 'Derrière', 'Sauter direct'], correct: 1, explication: 'Mise en boîte rebond.' },
            { q: 'Distance 1v1 défensif ?', options: ['Longueur de bras', 'Coller', '2 m', '5 m'], correct: 0, explication: '1 bras tendu.' },
            { q: 'Quand prendre la charge ?', options: ['Toujours', 'Pieds plantés, équilibré, position légale', 'Jamais', 'En zone'], correct: 1, explication: 'Pieds plantés AVANT contact.' },
            { q: 'No-charge semicircle rayon ?', options: ['1 m', '1,25 m', '2 m', '5 m'], correct: 1, explication: '1,25 m sous panier.' },
            { q: 'Aide défensive sur pénétration ?', options: ['Rester sur joueur', 'Couper trajectoire puis rotation X-out', 'Sortir', 'Crier'], correct: 1, explication: 'Aide + X-out.' },
        ]
    },

    // --- Niveau 1 (4 quiz approfondis) ---
    'qa-n1-regles': {
        title: 'Quiz approfondi · Règles FIBA officielles',
        niveau: 'Niveau 1',
        cat: 'approfondi',
        duree: '16 min',
        questions: [
            { q: 'Temps pour franchir médiane ?', options: ['5s', '8s', '10s', '24s'], correct: 1, explication: '8 sec FIBA.' },
            { q: 'Durée période sénior FIBA ?', options: ['8 min', '10 min', '12 min', '15 min'], correct: 1, explication: '4×10 min.' },
            { q: 'Distance 3 pts FIBA ?', options: ['6,25', '6,75', '7,24', '7,50'], correct: 1, explication: '6,75 m.' },
            { q: 'Fautes avant exclusion FIBA ?', options: ['4', '5', '6', '7'], correct: 1, explication: '5 fautes.' },
            { q: 'TM 2 dernières min 4ème QT ?', options: ['1', '2', '3', 'Illimité'], correct: 1, explication: '2 max.' },
            { q: 'Joueurs sur terrain par équipe ?', options: ['4', '5', '6', '7'], correct: 1, explication: '5.' },
            { q: '2e faute T même joueur ?', options: ['Avertissement', '2 LF', 'Disqualification', 'Aucune'], correct: 2, explication: 'Disqualification.' },
            { q: 'Règle 24 secondes ?', options: ['Attaque max', 'Pause', 'TM', 'Remplacement'], correct: 0, explication: 'Durée attaque.' },
            { q: 'Tir touche cercle aux 24s expirantes ?', options: ['0', '14 si récupère', '24', 'Faute'], correct: 1, explication: 'Chrono 14.' },
            { q: 'Joueurs MAX zone LF ?', options: ['3', '4', '5', '6'], correct: 2, explication: '5 max.' },
            { q: 'Fautes équipe avant bonus ?', options: ['3', '4', '5', '6'], correct: 1, explication: '4 fautes équipe → bonus dès la 5e.' },
            { q: 'Règle 3 sec attaquant ?', options: ['Indéfini', '3 sec raquette', '5 sec', '10 sec'], correct: 1, explication: '3 sec raquette adverse.' },
            { q: 'Règle 5 sec remise ?', options: ['Faire remise', 'Après réception', 'Médiane', 'LF'], correct: 0, explication: '5 sec pour remettre.' },
            { q: 'Coach hors zone entraîneur ?', options: ['Librement', 'Non sauf TM', 'Sur LF', 'Capitaine'], correct: 1, explication: 'Zone d\'entraîneur strict.' },
            { q: 'Faute antisportive sanction ?', options: ['Avertissement', '2 LF + balle adverse', 'Disqualification', 'Aucune'], correct: 1, explication: '2 LF + balle.' },
            { q: 'Panier après faute ?', options: ['Annulé', '+1 LF (and-one)', 'Compté seul', 'Faute off'], correct: 1, explication: 'And-one.' },
            { q: 'Chrono 24s démarre ?', options: ['Instant', 'Possession contrôlée', '3 sec', '5 sec'], correct: 1, explication: 'Dès contrôle.' },
            { q: 'Faute T banc = qui tire LF ?', options: ['Coach', 'Joueur désigné par coach adverse', 'Arbitre', 'Tireur officiel'], correct: 1, explication: 'Coach adverse désigne.' },
            { q: 'Coach challenge FIBA ?', options: ['Non', 'Oui depuis 2023', 'EuroLeague seul', 'JO seul'], correct: 1, explication: 'Depuis 2023-2024.' },
            { q: 'Prolongations FIBA ?', options: ['Mort subite', '5 min de prolongation', '10 min', 'Tirage'], correct: 1, explication: '5 min jusqu\'à départage.' },
        ]
    },

    'qa-n1-planification': {
        title: 'Quiz approfondi · Planification d\'entraînement',
        niveau: 'Niveau 1',
        cat: 'approfondi',
        duree: '13 min',
        questions: [
            { q: 'Structure séance U14 90 min ?', options: ['90\' tir', '15/25/25/20/5', '45/45', '30/60'], correct: 1, explication: 'Échauffement + tech + situation + jeu + retour.' },
            { q: 'SMART = ?', options: ['Intelligent', 'Spécifique Mesurable Atteignable Réaliste Temporel', 'Sport Match Action', 'Strict Méthodique'], correct: 1, explication: 'Objectifs SMART.' },
            { q: 'Cycle 8 séances ?', options: ['8 thèmes', '1 thème global avec progression', '8 identiques', 'Aucune cohérence'], correct: 1, explication: 'Cohérence + progression.' },
            { q: 'Minutes max par exercice ?', options: ['5', '10-15', '30', '45'], correct: 1, explication: '10-15 min max.' },
            { q: 'Pré-saison privilégie ?', options: ['Compétition', 'Conditionnement + fondamentaux', 'Tactique seule', 'Repos'], correct: 1, explication: 'Foncier + technique.' },
            { q: 'Saison régulière focus ?', options: ['Nouveaux fondamentaux', 'Tactique équipe + condition + scouting', 'Repos', 'Mémoire'], correct: 1, explication: 'Tactique + maintien.' },
            { q: 'Walk-through ?', options: ['Course longue', 'Répétition au ralenti des systèmes', 'Échauffement', 'Réunion'], correct: 1, explication: 'Marcher les systèmes.' },
            { q: 'Fiche-séance pro contient ?', options: ['Juste exercices', 'En-tête, objectifs, schémas, rotations, critères', 'Score', 'Liste'], correct: 1, explication: 'Fiche complète WABC.' },
            { q: 'RPE (Borg) sert à ?', options: ['Score', 'Intensité ressentie 1-10', 'Arbitres', 'Repas'], correct: 1, explication: 'Charge perçue.' },
            { q: 'Adapter si pluie ?', options: ['Annuler', 'Avoir plan B prêt', 'Courir', 'Discuter'], correct: 1, explication: 'Plan B essentiel.' },
            { q: 'Séance finit par ?', options: ['Match informel', 'Retour calme + débriefing 5\'', 'Sprint', 'Rien'], correct: 1, explication: 'Retour + ancrage.' },
            { q: 'Periodization = ?', options: ['Périodicité règles', 'Découpage saison en phases', 'Périodes de jeu', 'Système'], correct: 1, explication: 'Pré-saison, saison, etc.' },
            { q: 'Séances tir libre U15 / semaine ?', options: ['0', '2-3 × 15 min', '1 × 1h', '7'], correct: 1, explication: '2-3 sessions courtes.' },
            { q: 'Paramètre à suivre U15 ?', options: ['Aucun', 'Présence, progrès, attitude, charge', 'Points', 'Taille'], correct: 1, explication: 'Suivi multi-dimensionnel.' },
            { q: 'Annoncer l\'objectif de séance ?', options: ['Jamais', 'Fin', 'Début, 2-3 phrases', 'Match'], correct: 2, explication: 'Engagement, focus.' },
        ]
    },

    'qa-n1-defense': {
        title: 'Quiz approfondi · Défense individuelle U12-U15',
        niveau: 'Niveau 1',
        cat: 'approfondi',
        duree: '14 min',
        questions: [
            { q: 'Combien de principes défensifs ?', options: ['3', '5', '7', '10'], correct: 1, explication: '5 principes.' },
            { q: 'Pression sur porteur : distance ?', options: ['3 m', '1 bras tendu', 'Coller', 'Aucune'], correct: 1, explication: '1 bras.' },
            { q: '« On the ball line » signifie ?', options: ['Ligne médiane', 'Ligne balle-mon joueur', 'Zone', 'LF'], correct: 1, explication: 'Help line.' },
            { q: 'Shell drill 4v4 entraîne ?', options: ['Attaque libre', 'Principes défensifs équipe', 'Tir', 'Course'], correct: 1, explication: 'Rotations défensives.' },
            { q: '« Fight over » sur écran ?', options: ['Combattre', 'Passer au-dessus (côté ballon)', 'Switch', 'Faute'], correct: 1, explication: 'Au-dessus de l\'écran.' },
            { q: '« Under » sur écran ?', options: ['Sous l\'écran (côté panier)', 'Au-dessus', 'Switch', 'Faute'], correct: 0, explication: 'Sous pour mauvais shooteur.' },
            { q: '« Switch » sur écran ?', options: ['Quitter', 'Échanger marquages', 'Faute', 'Tirer'], correct: 1, explication: 'Échange.' },
            { q: '« Hedge » sur P&R ?', options: ['Toucher', 'Pivot sort court puis revient', 'Switcher', 'Rien'], correct: 1, explication: 'Sortie courte.' },
            { q: 'Drop coverage P&R ?', options: ['Sort tout terrain', 'Reste bas, laisse mid-range', 'Switche', 'Crie'], correct: 1, explication: 'Sécurise raquette.' },
            { q: 'Ice forcer vers ?', options: ['Panier', 'Ligne touche', 'Centre', 'Poseur'], correct: 1, explication: 'Ice = côté.' },
            { q: 'Communication défensive shell drill ?', options: ['Rien', 'Ballon/Help/Switch/Screen', 'Coach', 'Compter'], correct: 1, explication: 'Annonces essentielles.' },
            { q: 'Rotation X-out ?', options: ['Quand dribble', 'Aide prise, joueur libre → rotation', 'Zone', 'LF'], correct: 1, explication: 'X-out.' },
            { q: 'Bonne charge ?', options: ['Saut adverse', 'Pieds plantés, hors no-charge', 'Courant', 'Mains'], correct: 1, explication: 'Pieds plantés AVANT.' },
            { q: 'Rebond défensif idéal ?', options: ['1', '3', 'Les 5 box out', 'Aucun'], correct: 2, explication: 'Tout le monde box out.' },
            { q: 'Transition défensive ?', options: ['Au panier', 'Sprint reprendre joueur ou match up', 'Marcher', 'Attendre'], correct: 1, explication: 'Sprint immédiat.' },
            { q: 'Match up = ?', options: ['Contre matériel', 'Prendre attaquant le plus proche', 'Score', 'Système off'], correct: 1, explication: 'Le plus proche.' },
            { q: 'Closeout triangle ?', options: ['Bras haut', 'Haute (tir) basse (drive) centre haut', 'Croisés', 'Aucune'], correct: 1, explication: 'High-low.' },
        ]
    },

    'qa-n1-transition': {
        title: 'Quiz approfondi · Attaque rapide et transition',
        niveau: 'Niveau 1',
        cat: 'approfondi',
        duree: '13 min',
        questions: [
            { q: '3 couloirs transition ?', options: ['3 zones', 'Centre + 2 ailes', '3 stagiaires', 'Aucun'], correct: 1, explication: 'Couloirs basket.' },
            { q: 'Outlet pass ?', options: ['Faute', '1ère passe après rebond pour contre-attaque', 'Remise', 'Système'], correct: 1, explication: 'Lance la transition.' },
            { q: 'Meneur transition court où ?', options: ['Panier', 'Couloir central', 'Aile', 'Arrière'], correct: 1, explication: 'Centre avec ballon.' },
            { q: 'Trailer ?', options: ['Suiveur', '4e/5e joueur en soutien', 'Coach', 'Défenseur'], correct: 1, explication: 'Suit la transition.' },
            { q: '3 ou 4 passes max signifie ?', options: ['Conclure avant repli défense', '20 passes', 'Règles', 'Faute'], correct: 0, explication: 'Avantage numérique.' },
            { q: 'Drag screen ?', options: ['Sur place', 'Trailer pose écran pendant transition', 'Zone', 'Fin match'], correct: 1, explication: 'Écran tardif.' },
            { q: 'Secondary break ?', options: ['Rebond', 'Continuation organisée', 'Défensif', 'Pause'], correct: 1, explication: 'Après transition pure.' },
            { q: 'Run & gun ?', options: ['Courir et jouer', 'Tir rapide peu de passes', 'Très lent', 'Défensif'], correct: 1, explication: 'Style transition.' },
            { q: 'Pace = ?', options: ['Score', 'Possessions/40 min', 'Distance', 'Fautes'], correct: 1, explication: 'Possessions normalisées.' },
            { q: 'Avantage 3v2 : objectif ?', options: ['Tir 3pts', 'Lay-up facile', 'Faute', 'Reculer'], correct: 1, explication: 'Panier facile.' },
            { q: '3v2 qui s\'engage ?', options: ['Aile gauche', 'Meneur central', 'Trailer', 'Personne'], correct: 1, explication: 'Meneur attire défense.' },
            { q: 'Quand se replier en défense ?', options: ['Après panier marqué', 'Dès perte balle/tir adverse', 'Quand veut', 'Jamais'], correct: 1, explication: 'Repli immédiat.' },
            { q: 'Joueurs repliés tôt ?', options: ['0', '1-2 minimum', 'Tous', 'Pivot seul'], correct: 1, explication: '1-2 safety.' },
            { q: 'Ralentir une transition adverse ?', options: ['Faute', 'Récup au sol + sortie passe', 'Sortir', 'Tapoter'], correct: 1, explication: 'Pas de faute volontaire.' },
            { q: '« Push the ball » ?', options: ['Pousser joueur', 'Avancer vite', 'Perdre', 'Cacher'], correct: 1, explication: 'Mentalité transition.' },
            { q: 'Long ballon en cloche utile ?', options: ['Jamais', 'Ailier seul lancé', 'LF', 'Zone'], correct: 1, explication: 'Risqué mais utile.' },
            { q: 'Efficacité transition vs demi-terrain ?', options: ['Plus faible', 'Bien plus élevée', 'Identique', 'Variable'], correct: 1, explication: '1,2-1,4 vs 0,9-1,0 pts/poss.' },
            { q: 'Trailer après drag screen ?', options: ['Sort terrain', 'Pop ou roll selon défense', 'Immobile', 'Crie'], correct: 1, explication: 'Pop / roll lecture.' },
        ]
    },

    // --- Niveau 2 (3 quiz approfondis) ---
    'qa-n2-tactique': {
        title: 'Quiz approfondi · Tactique collective offensive',
        niveau: 'Niveau 2',
        cat: 'approfondi',
        duree: '14 min',
        questions: [
            { q: 'P&R porteur doit ?', options: ['Donner direct', 'Lire défense : tir/pass/kick out', 'Sortir', 'Faute'], correct: 1, explication: 'P&R = lecture.' },
            { q: '5-out joueurs au-delà 3 pts ?', options: ['3', '4', '5', 'Variable'], correct: 2, explication: '5-out total.' },
            { q: '4-out 1-in ?', options: ['4 extérieurs + 1 pivot', '4 défenseurs', '4 min', 'Aucun'], correct: 0, explication: '4 ext + 1 in.' },
            { q: 'Attaque Horns ?', options: ['Meneur + 2 grands elbows + 2 ailes corners', 'Tous panier', 'Box', 'Stack'], correct: 0, explication: 'Set Horns classique.' },
            { q: 'Spacing optimal ?', options: ['1 m', '4-5 m', '10 m', 'Indifférent'], correct: 1, explication: 'Driving lanes.' },
            { q: 'Motion offense ?', options: ['Lecture + coupes sans schéma', 'Rigide', 'Zone', 'Tir'], correct: 0, explication: 'Principes de lecture.' },
            { q: 'Give & Go consiste à ?', options: ['Passer + sortir', 'Passer + coupe', 'Doubler', '2 dribbles'], correct: 1, explication: 'Action fondamentale.' },
            { q: 'ATO = ?', options: ['Avocat', 'After Time-Out, set pour score immédiat', 'Écran', 'Joueur'], correct: 1, explication: 'Set préparé.' },
            { q: 'Read & React ?', options: ['Livre', 'Lecture défense + réaction', 'Réagir vite', 'Défensif'], correct: 1, explication: 'Système Torbett.' },
            { q: 'Quick hitter ?', options: ['Tir rapide', 'Set 6-8 sec pour score', 'Faute', 'Joueur'], correct: 1, explication: 'Action rapide.' },
            { q: 'Princeton offense ?', options: ['Attaque rapide', 'Coupes constantes, peu de dribble', 'Tirs 3 pts', 'Défense'], correct: 1, explication: 'Très technique.' },
            { q: 'Triangle offense ?', options: ['1 joueur', '3 joueurs en triangle, lectures', 'Défense', 'Rebond'], correct: 1, explication: 'Jackson, Bulls/Lakers.' },
            { q: 'Side ball screen ?', options: ['Centre', 'Sur l\'aile côté fort', 'LF', 'Tout terrain'], correct: 1, explication: 'Side P&R.' },
            { q: 'Adapter système au profil ?', options: ['Toujours pareil', 'Selon qualités joueurs', 'Imposer', 'Demander'], correct: 1, explication: 'Adaptation.' },
            { q: 'Floppy action ?', options: ['2 écrans bas, choix côté', 'Solo', 'P&R', 'Sortie dribble'], correct: 0, explication: 'Floppy classique.' },
            { q: 'Hammer action ?', options: ['Marteau', 'Drive + skip pass + écran corner faible', 'Tir', 'Défense'], correct: 1, explication: 'Spurs.' },
            { q: 'Horns flare ?', options: ['Horns + flare côté faible', 'Faute', 'Tir', 'Aucun'], correct: 0, explication: 'Shooteur arrière.' },
        ]
    },

    'qa-n2-zone-ecrans': {
        title: 'Quiz approfondi · Défense de zone et écrans',
        niveau: 'Niveau 2',
        cat: 'approfondi',
        duree: '14 min',
        questions: [
            { q: 'Zone 2-3 : 2 défenseurs en ?', options: ['Ailes', 'Haut (LF/3 pts)', 'Ligne fond', 'Centre'], correct: 1, explication: '2 haut + 3 bas.' },
            { q: 'Point faible 2-3 ?', options: ['Corners', 'High post', 'Ligne fond', 'Dribble'], correct: 1, explication: 'High post.' },
            { q: 'Zone 3-2 protège ?', options: ['Raquette', 'Périmètre 3 pts + high post', 'Corners', 'Ligne fond'], correct: 1, explication: 'Périmètre.' },
            { q: 'Zone 1-3-1 efficace ?', options: ['Bas', 'Piégeage ailes', 'Corner', 'Centre'], correct: 1, explication: 'Ailes.' },
            { q: 'Zone interdite Mini ?', options: ['Trop facile', 'Apprentissage 1v1', 'Danger', 'Aucune raison'], correct: 1, explication: 'Avant 15 ans.' },
            { q: 'Match-up zone ?', options: ['Fixe', 'Hybride zone/individuelle', 'Tout terrain', 'Simple'], correct: 1, explication: 'Adaptable.' },
            { q: 'Zone press 2-2-1 ?', options: ['2-2-1 disposition all-court', '5 sur ballon', '1-3-1', '3-2'], correct: 0, explication: 'Press classique.' },
            { q: 'Attaquer 2-3 ?', options: ['Tirer immédiat', 'High post + skip pass + corners', 'Driver force', 'Rien'], correct: 1, explication: 'Mouvement balle.' },
            { q: 'Pick & Roll classique ?', options: ['Danse', 'Écran sur porteur + roll au panier', 'Défense', 'Tir'], correct: 1, explication: 'Action #1 basket.' },
            { q: 'Pop vs Roll ?', options: ['Pop = 3 pts, Roll = panier', 'Identique', 'Pop = panier', 'Roll = sortie'], correct: 0, explication: 'Selon profil.' },
            { q: 'Slip = poseur ?', options: ['Tombe', 'Sort avant pose (anticipation switch)', 'Glisse', 'Crie'], correct: 1, explication: 'Anticipation.' },
            { q: 'Down screen ?', options: ['Shooteur qui remonte', 'Porteur', 'Pivot', 'Arbitre'], correct: 0, explication: 'Off-ball.' },
            { q: 'Flare screen ?', options: ['Sortir shooteur côté opposé', 'Porteur', '1v1', 'Aucun'], correct: 0, explication: 'Côté faible.' },
            { q: 'Cross screen ?', options: ['Horizontal entre 2 intérieurs', 'Haut', 'LF', 'Aucun'], correct: 0, explication: 'Sets intérieurs.' },
            { q: 'Hedge sur P&R ?', options: ['Pas bouger', 'Pivot sort court puis revient', 'Switch', 'Faute'], correct: 1, explication: 'Hedge stratégie.' },
            { q: 'Communication écran ?', options: ['Personne', 'Défenseur annonce « screen left/right »', 'Coach', 'Arbitre'], correct: 1, explication: 'Communication clé.' },
            { q: 'Stagger screen ?', options: ['2 écrans successifs', 'Aucun', 'Même endroit', 'Zone'], correct: 0, explication: 'Stagger = successifs.' },
        ]
    },

    'qa-n2-scouting': {
        title: 'Quiz approfondi · Scouting et game plan',
        niveau: 'Niveau 2',
        cat: 'approfondi',
        duree: '13 min',
        questions: [
            { q: 'Scouting report contient ?', options: ['Menu match', 'Tendances/sets/défenses/joueurs/ATO', 'Classement', 'Score'], correct: 1, explication: '4 sections.' },
            { q: 'Combien de matchs analyser ?', options: ['1', '3 min variés', '10', 'Aucun'], correct: 1, explication: '3 matchs min.' },
            { q: 'Outils gratuits vidéo ?', options: ['Aucun', 'Hudl basic, YouTube, FastModel free', 'Photoshop', 'Excel'], correct: 1, explication: 'Suffisants débutant.' },
            { q: 'Pattern offensif ?', options: ['Dessin', 'Action répétée par l\'adversaire', 'Tir', 'Faute'], correct: 1, explication: 'À identifier.' },
            { q: 'Profil joueur clé ?', options: ['Taille', 'Main forte, points faibles, tendances émotionnelles', 'Âge', 'Chaussures'], correct: 1, explication: 'Multi-dimensions.' },
            { q: 'eFG% ?', options: ['% normal', 'Pondère 3 pts (×1,5)', 'Score', 'Faute'], correct: 1, explication: 'Formule eFG.' },
            { q: 'True Shooting inclut ?', options: ['FG seul', 'FG + LF + 3 pts', 'Aucun', 'Rebond'], correct: 1, explication: 'Plus complet.' },
            { q: 'Pace = possessions par ?', options: ['Match', '40 min', '1 min', '10 sec'], correct: 1, explication: 'Normalise stats.' },
            { q: 'Plus/Minus mesure ?', options: ['Hauteur', 'Différentiel score quand joueur sur terrain', 'Taille', 'Poids'], correct: 1, explication: 'Impact réel.' },
            { q: 'Stats mi-temps : utiliser ?', options: ['Rien', '3 stats clés → 1 décision majeure', 'Tout discuter', 'Punir'], correct: 1, explication: 'Focus.' },
            { q: 'Game plan 1 page contient ?', options: ['Tout historique', 'Clés défense/attaque + ATO + LF target', 'Score', 'Contrats'], correct: 1, explication: '8 messages max.' },
            { q: 'Semaine type pré-match ?', options: ['Tout à fond', 'J-3 scout · J-2 walk · J-1 light · J match', 'Pause', 'Aucun'], correct: 1, explication: 'Charge décroissante.' },
            { q: 'SLOB ?', options: ['Côté', 'Sideline Out of Bounds (touche)', 'Fond', 'Centre'], correct: 1, explication: 'Set touche.' },
            { q: 'BLOB ?', options: ['Côté', 'Baseline Out of Bounds (ligne fond)', 'Centre', 'Zone'], correct: 1, explication: 'Sous panier.' },
            { q: 'Starting five ?', options: ['Toujours best-5', 'Selon adversaire et stratégie', 'Tirage', 'Aucun'], correct: 1, explication: 'Flexible.' },
            { q: 'Présentation scouting durée ?', options: ['1h', '20-30 min, 3 messages', '5 min', '2h'], correct: 1, explication: 'Focus pédagogique.' },
        ]
    },

    // --- Niveau 3 (3 quiz approfondis) ---
    'qa-n3-periodisation': {
        title: 'Quiz approfondi · Périodisation annuelle',
        niveau: 'Niveau 3',
        cat: 'approfondi',
        duree: '13 min',
        questions: [
            { q: 'Macro-cycle ?', options: ['Petit', 'Saison complète phasée (6 mois-1 an)', '1 semaine', '1 jour'], correct: 1, explication: 'Vue annuelle.' },
            { q: 'Méso-cycle dure ?', options: ['1 jour', '4-6 semaines (1 thème)', '6 mois', '1 heure'], correct: 1, explication: 'Méso = phase.' },
            { q: 'Micro-cycle ?', options: ['Saison', '1 semaine (5-7 séances + match)', '1 jour', '1 match'], correct: 1, explication: 'Cycle court.' },
            { q: 'Charge RPE ?', options: ['Effort 1-10', 'Score', 'Fatigue', 'Tir'], correct: 0, explication: 'Subjectif.' },
            { q: 'TQR ?', options: ['Récup ressentie 6-20', 'Score', 'Fatigue', 'Test'], correct: 0, explication: 'Total Quality Recovery.' },
            { q: 'Ratio aigüe/chronique ?', options: ['Score', 'Risque blessure (0.8-1.3)', 'Aucun', 'Taille'], correct: 1, explication: 'A/C ratio.' },
            { q: 'Tapering ?', options: ['Barbe', 'Affûtage avant compétition', 'Augmenter', 'Rien'], correct: 1, explication: 'Réduction volume, maintien intensité.' },
            { q: 'Pré-saison dure ?', options: ['1 jour', '4-8 semaines', '6 mois', '1 an'], correct: 1, explication: 'Préparation.' },
            { q: 'Off-season inclut ?', options: ['Match', 'Repos actif + travail individuel + mental', 'Compétition', 'Rien'], correct: 1, explication: 'Récupération multi-dim.' },
            { q: 'Séances/sem en pro ?', options: ['1', '6-8 (matchs inclus)', '20', 'Aucune'], correct: 1, explication: 'Variation calendrier.' },
            { q: 'Semaine 2-match pro ?', options: ['Tout à fond', '2 séances + récup + walk-through', '1 séance', 'Repos'], correct: 1, explication: 'Récupération clé.' },
            { q: 'Fenêtres FIBA ?', options: ['Repas', 'Périodes équipes nationales', 'Vacances', 'Rien'], correct: 1, explication: '10 jours nov/fév/juil.' },
            { q: 'Fenêtre FIBA en club ?', options: ['Ignorer', 'Libérer internationaux + adapter', 'Continuer', 'Punir'], correct: 1, explication: 'Obligation FIBA.' },
            { q: 'Linéaire vs ondulatoire ?', options: ['Identique', 'Linéaire = simple. Ondulatoire = variations semaine', 'Linéaire mieux', 'Ondulatoire pire'], correct: 1, explication: 'Ondulatoire moderne.' },
            { q: 'Séance force MAX programmée ?', options: ['Jour match', '48-72h avant', 'Juste après', 'Jamais'], correct: 1, explication: 'Récupération complète.' },
            { q: 'Jours repos/semaine en saison ?', options: ['0', '1-2 jours', '4', 'Tous'], correct: 1, explication: 'Éviter sur-entraînement.' },
        ]
    },

    'qa-n3-leadership': {
        title: 'Quiz approfondi · Leadership et management',
        niveau: 'Niveau 3',
        cat: 'approfondi',
        duree: '15 min',
        questions: [
            { q: 'Hersey-Blanchard : styles ?', options: ['2', '4 (directif/persuasif/participatif/délégatif)', '10', '1'], correct: 1, explication: '4 styles selon maturité.' },
            { q: 'Style directif pour ?', options: ['Senior', 'Débutant ou en difficulté', 'Tous', 'Personne'], correct: 1, explication: 'Contrôle élevé.' },
            { q: 'Style délégatif pour ?', options: ['Débutant', 'Joueur autonome', 'Blessé', 'Personne'], correct: 1, explication: 'Vétérans, leaders.' },
            { q: 'Tuckman étapes ?', options: ['2', '5 (forming/storming/norming/performing/adjourning)', '3', '10'], correct: 1, explication: '5 phases équipe.' },
            { q: 'Phase storming ?', options: ['Calme', 'Tensions, conflits', 'Performance max', 'Création'], correct: 1, explication: 'Phase nécessaire.' },
            { q: 'Entretiens individuels/saison ?', options: ['0', '3 min (début/mi/fin)', '12', '1'], correct: 1, explication: 'Suivi régulier.' },
            { q: 'DESC = ?', options: ['Aucun', 'Décrire/Exprimer/Spécifier/Conclure', 'Détruire', 'Crier'], correct: 1, explication: 'Feedback structuré.' },
            { q: 'Feedback sandwich ?', options: ['Manger', 'Positif/amélioration/positif', 'Critique seule', 'Rien'], correct: 1, explication: 'Bien accepté.' },
            { q: 'Leader négatif au vestiaire ?', options: ['Ignorer', 'Entretien + nouvelle responsabilité ou sanction', 'Sanction publique', 'Renvoyer'], correct: 1, explication: 'Étapes progressives.' },
            { q: 'Confiance après défaite ?', options: ['Rien dire', 'Débrief froid 24h + valoriser + plan', 'Crier', 'Punir'], correct: 1, explication: '24h, plan d\'action.' },
            { q: 'Capitaine d\'équipe critères ?', options: ['Le plus fort', 'Leadership, exemple, communication, respect', 'Le plus âgé', 'Hasard'], correct: 1, explication: 'Relais coach.' },
            { q: 'Charte d\'équipe ?', options: ['Coach seul', 'Co-construite avec joueurs', 'Président', 'Personne'], correct: 1, explication: 'Engagement collectif.' },
            { q: 'Star qui se croit au-dessus des règles ?', options: ['Autoriser', 'Mêmes règles + entretien privé', 'Sanction publique', 'Renvoi'], correct: 1, explication: 'Crédibilité coach.' },
            { q: 'Communication staff ?', options: ['Jamais', '1 réunion hebdo + canal + 1-1', '1 fois/an', 'Tous jours'], correct: 1, explication: 'Réunion hebdo essentielle.' },
            { q: 'Conflit entre 2 joueurs ?', options: ['Ignorer', 'Médiation 3 (coach + 2 joueurs)', 'Renvoyer 1', 'Crier'], correct: 1, explication: 'Médiation structurée.' },
            { q: 'Culture gagnante : élément clé ?', options: ['Talent', 'Standards quotidiens + confiance + sacrifice', 'Hasard', 'Argent'], correct: 1, explication: 'Popovich, Belichick.' },
            { q: 'Crise blessure star : plan ?', options: ['Renoncer', 'Plan B prêt + adaptation tactique', 'Crier', 'Reporter'], correct: 1, explication: 'Anticipation.' },
        ]
    },

    'qa-n3-prep-physique-mentale': {
        title: 'Quiz approfondi · Préparation physique et mentale',
        niveau: 'Niveau 3',
        cat: 'approfondi',
        duree: '15 min',
        questions: [
            { q: '3 filières énergétiques basket ?', options: ['1', 'Alactique (0-7s), lactique (7-90s), aérobie (90s+)', 'Aérobie seule', 'Anaérobie'], correct: 1, explication: 'ATP-PCr/glycolyse/aérobie.' },
            { q: 'Échauffement RAMP ?', options: ['Pente', 'Raise/Activate/Mobilize/Potentiate', 'Course', 'Rien'], correct: 1, explication: 'Méthode complète.' },
            { q: 'Pliométrie ?', options: ['Étirements', 'Sauts, bonds (explosivité)', 'Course', 'Tirs'], correct: 1, explication: 'Cycle court étir-raccourc.' },
            { q: 'Tests physiques basket ?', options: ['100m', 'Vertical + sprint 20m + T-test + YoYo IR1', 'Marathon', 'Tirs'], correct: 1, explication: '4 tests classiques.' },
            { q: 'Prévention cheville ?', options: ['Force pure', 'Proprioception + éverseurs', 'Étirements', 'Sprint'], correct: 1, explication: 'Plateau instable.' },
            { q: 'Prévention LCA ?', options: ['Sauter haut', 'Réception 2 pieds, contrôle valgus', 'Tomber', 'Rien'], correct: 1, explication: 'FIFA 11+, PEP.' },
            { q: 'Récupération active post-match ?', options: ['Sommeil', 'Vélo léger + étirements + hydrothérapie', 'Course intense', 'Rien'], correct: 1, explication: '30 min faible intensité.' },
            { q: 'IZOF (Hanin) ?', options: ['Équipe', 'Zone optimale individuelle d\'activation', 'Test', 'Tactique'], correct: 1, explication: 'Activation émotionnelle.' },
            { q: 'Visualisation pré-match ?', options: ['1h', '5-10 min scénarios concrets', '30 sec', 'Aucune'], correct: 1, explication: 'Activation cérébrale.' },
            { q: 'Self-talk négatif ?', options: ['Accepter', 'Repérer + reformuler positif', 'Ignorer', 'Crier'], correct: 1, explication: 'Outil mental clé.' },
            { q: 'Breathing 4-7-8 ?', options: ['4 in/7 ret/8 expir (sec)', 'Compter', 'Cardio', 'Rien'], correct: 0, explication: 'Cohérence cardiaque.' },
            { q: 'Burnout signaux ?', options: ['Bonne forme', 'Fatigue, démotivation, sommeil, irritabilité', 'Énergie', 'Humeur'], correct: 1, explication: 'Alerte rouge.' },
            { q: 'Hydratation match L/h ?', options: ['0,1', '0,5-2 L', '5 L', '10 L'], correct: 1, explication: 'Selon climat.' },
            { q: 'Force max reps/série ?', options: ['20+', '1-5 reps (85-95% 1RM)', '10', '100'], correct: 1, explication: 'Charge lourde.' },
            { q: 'Sommeil athlète ?', options: ['4h', '8-10h régulier', '5h', '12h'], correct: 1, explication: 'Performance + récupération.' },
            { q: 'Nutrition post-match ?', options: ['Rien', 'Glucides + protéines 30 min', 'Eau seule', 'Sucres'], correct: 1, explication: 'Fenêtre métabolique.' },
            { q: 'Mots-clés (cue-words) ?', options: ['Crier', 'Activer instantanément état mental/geste', 'Faute', 'Rien'], correct: 1, explication: 'Cues personnels.' },
        ]
    },

    // ====================================================
    // 🎯 QCM THÉMATIQUES PAR NIVEAU (15 × 12 q = 180 q)
    // ====================================================

    // --- Animateur (3 QCM × 12 q) ---
    'qcm-anim-securite': {
        title: 'QCM · Sécurité et valeurs',
        niveau: 'Animateur',
        cat: 'qcm',
        duree: '10 min',
        questions: [
            { q: 'Suspicion de commotion ?', options: ['Laisser revenir', 'Retrait immédiat et définitif', 'Médicament', 'Sprints'], correct: 1, explication: 'Protocole SCAT.' },
            { q: 'Avant séance vérifier ?', options: ['Chaussures', 'Terrain, paniers, ballons, trousse, eau', 'Présence', 'Score'], correct: 1, explication: 'Check-list complète.' },
            { q: 'Entorse cheville protocole ?', options: ['Courir', 'GREC', 'Massage', 'Anti-douleur'], correct: 1, explication: 'GREC/RICE.' },
            { q: 'Hydratation fréquence ?', options: ['Mi-temps', '15-20 min petites gorgées', 'Soif', 'Fin'], correct: 1, explication: 'Pas attendre soif.' },
            { q: 'Saignement de nez ?', options: ['Tête arrière', 'Tête avant + compression', 'Allonger', 'Eau froide'], correct: 1, explication: 'Tête en avant.' },
            { q: 'Ratio encadrant/enfants ?', options: ['1/5', '1/12 max', '1/20', '1/30'], correct: 1, explication: '12 max.' },
            { q: 'Valeur prioritaire Mini ?', options: ['Gagner', 'Plaisir/sécurité/participation', 'Tactique', 'Physique'], correct: 1, explication: 'Triptyque WABC.' },
            { q: 'Enfant pleure ?', options: ['Ignorer', 'Isoler', 'Écouter, méthode 3 portes', 'Parents'], correct: 2, explication: '3 portes.' },
            { q: 'Coup tête : alerter parents ?', options: ['Si KO seul', 'Toujours, même léger', 'Si pleurs', 'Si bleu'], correct: 1, explication: 'Commotion différée.' },
            { q: '3 valeurs FIBA WABC ?', options: ['Force/rapidité/talent', 'Fair-play/respect/plaisir', 'Compétition/victoire', 'Argent'], correct: 1, explication: 'Valeurs officielles.' },
            { q: 'Trousse secours minimale ?', options: ['Défibrillateur', 'Glace, désinfectant, pansements, bande, gants', 'Thermomètre', 'Attelle'], correct: 1, explication: 'Base indispensable.' },
            { q: 'Temp. max extérieur ?', options: ['28°C', '32°C', '35°C', 'Aucune'], correct: 1, explication: 'Hyperthermie.' },
        ]
    },

    'qcm-anim-pedagogie': {
        title: 'QCM · Pédagogie Mini-Basket',
        niveau: 'Animateur',
        cat: 'qcm',
        duree: '10 min',
        questions: [
            { q: 'Durée séance Mini ?', options: ['30', '60', '75', '90'], correct: 1, explication: '60 min max.' },
            { q: 'Ratio jeu/explication ?', options: ['50/50', '70/30', '80/20', '95/5'], correct: 2, explication: '80% en jeu.' },
            { q: 'Hauteur panier Mini ?', options: ['2,40', '2,60', '2,80', '3,05'], correct: 1, explication: '2,60 m.' },
            { q: 'Ballon U11 ?', options: ['T4', 'T5', 'T6', 'T7'], correct: 1, explication: 'T5.' },
            { q: 'Défense Mini ?', options: ['Zone', 'Individuelle uniquement', 'Box-1', 'Press'], correct: 1, explication: 'Zone interdite.' },
            { q: 'Temps minimum/enfant ?', options: ['Au choix', '1 période complète', '50%', 'Aucune'], correct: 1, explication: '1 quart min.' },
            { q: 'Structure séance Mini 60 min ?', options: ['60\' match', '5/10/35/10', '20/40', '30/30'], correct: 1, explication: 'WABC standard.' },
            { q: 'Explication max ?', options: ['10s', '30s', '2 min', '5 min'], correct: 1, explication: 'Règle 30 sec.' },
            { q: 'Zone autorisée FIBA ?', options: ['U7', 'U11', '15+', 'Jamais'], correct: 2, explication: 'Pas avant 15 ans.' },
            { q: 'Enfant moins bon : que faire ?', options: ['Banc', 'Adapter niveau, donner chances', 'Autre groupe', 'Arrêter'], correct: 1, explication: 'Inclusion.' },
            { q: 'Évaluation Mini ?', options: ['Classement', 'Observation sans juger, progrès', 'Tests', 'Notation'], correct: 1, explication: 'Formative.' },
            { q: 'À 10-12 ans, on peut ?', options: ['Tactique avancée', 'Affiner fondamentaux + retour analytique', 'Haut niveau', 'Pratique adulte'], correct: 1, explication: 'Analytique progressif.' },
        ]
    },

    'qcm-anim-fondamentaux': {
        title: 'QCM · Fondamentaux ludiques',
        niveau: 'Animateur',
        cat: 'qcm',
        duree: '10 min',
        questions: [
            { q: 'Premier fondamental Mini ?', options: ['Tir 3 pts', 'Manipulation', 'P&R', 'Zone'], correct: 1, explication: 'Manipulation = base.' },
            { q: 'Dribble Mini : mains ?', options: ['Forte', 'Les 2 équilibrées', 'Pieds', 'Pas important'], correct: 1, explication: 'Ambidextrie.' },
            { q: 'Regard pendant dribble ?', options: ['Ballon', 'Sol', 'Devant décollé', 'Coach'], correct: 2, explication: 'Décollé.' },
            { q: 'Types de passes Mini ?', options: ['1', '2', '4', '8'], correct: 2, explication: '4 passes.' },
            { q: 'Regard tir Mini ?', options: ['Ballon', 'Cible', 'Coach', 'Bas'], correct: 1, explication: 'Cible (anneau).' },
            { q: 'Give & Go = ?', options: ['Passer/sortir', 'Passer/couper panier', 'Doubler', '2 dribbles'], correct: 1, explication: 'Action fondamentale.' },
            { q: 'Premier arrêt ?', options: ['1 temps simultané', '2 temps', 'Freiné', 'Pas important'], correct: 0, explication: '1 temps d\'abord.' },
            { q: 'Pas chassé défensif ?', options: ['Courir', 'Sans croiser jambes, fléchies', 'Sauter', 'Marcher arrière'], correct: 1, explication: 'Base défense.' },
            { q: 'Format jeu Mini FIBA ?', options: ['5v5', '4v4', '3v3', '1v1'], correct: 2, explication: '3v3 idéal.' },
            { q: '1v1 Mini : objectif ?', options: ['Marquer max', 'Lecture défenseur', 'Score', 'Dribbles'], correct: 1, explication: 'Duel pédagogique.' },
            { q: 'Ballons par enfant ?', options: ['1 pour tous', '1 pour 2', '1 par enfant', 'Aucun'], correct: 2, explication: 'Max contacts.' },
            { q: 'Cycle 8 séances ?', options: ['1 thème/séance', 'Même chaque sem.', 'Thème global évolutif', '8 différents'], correct: 2, explication: 'Cohérence + progression.' },
        ]
    },

    // --- Moniteur (3 QCM × 12 q) ---
    'qcm-mon-technique': {
        title: 'QCM · Fondamentaux techniques',
        niveau: 'Moniteur',
        cat: 'qcm',
        duree: '10 min',
        questions: [
            { q: 'Triple threat = ?', options: ['3 paniers', 'Tirer/dribbler/passer instantanément', '3 fautes', '3 pts'], correct: 1, explication: 'Triple menace.' },
            { q: 'Pied de pivot ?', options: ['Premier au sol', 'Au choix', 'Opposé main', 'Droit'], correct: 0, explication: '1er au sol.' },
            { q: 'Pas après arrêt dribble ?', options: ['0', '2 pas', '3', 'Sans limite'], correct: 1, explication: 'FIBA.' },
            { q: 'Arrêt 1 temps ?', options: ['Un puis autre', '2 pieds simultanés', 'Sauter 1 pied', 'Ralentir'], correct: 1, explication: 'Simultané.' },
            { q: 'Arrêt 2 temps ?', options: ['2 dribbles', 'Un pied puis autre alternativement', 'Sauter 2 fois', '2 sec'], correct: 1, explication: 'Alternatif.' },
            { q: 'Dribble main faible ?', options: ['Vitesse max', 'Lentement marche', 'Sautant', 'Sans regarder'], correct: 1, explication: 'Lent d\'abord.' },
            { q: 'Lay-up droit genou ?', options: ['Droit', 'Gauche (opposé main tir)', 'Les 2', 'Aucun'], correct: 1, explication: 'Genou opposé.' },
            { q: 'BEEF tir ?', options: ['Force', 'Balance/Eyes/Elbow/Follow-through', 'Marque', 'Défense'], correct: 1, explication: 'Mnémo.' },
            { q: 'Passe à terre ?', options: ['Couper défense', 'Éviter bras hauts (pivot)', 'Imprécision', 'LF'], correct: 1, explication: 'Basse hauteur.' },
            { q: 'Passe overhead ?', options: ['Longues / par-dessus', 'Tir', 'Dribble', 'Feinte'], correct: 0, explication: 'Longues passes.' },
            { q: 'Mains réception en mouvement ?', options: ['Le long corps', 'Hautes et écartées', 'Derrière dos', 'Hanches'], correct: 1, explication: 'Cible.' },
            { q: 'Enseigner tir U13 commencer ?', options: ['6,75 m direct', 'Form shooting 1 m, 1 main', 'En saut', '3 pts'], correct: 1, explication: 'Form shooting.' },
        ]
    },

    'qcm-mon-defense': {
        title: 'QCM · Initiation à la défense',
        niveau: 'Moniteur',
        cat: 'qcm',
        duree: '10 min',
        questions: [
            { q: 'Défenseur regarde ?', options: ['Ballon', 'Ventre joueur', 'Yeux', 'Panier'], correct: 1, explication: 'Centre gravité.' },
            { q: 'Position défensive ?', options: ['Jambes raides', 'Fléchies, bras écartés', 'Talons', 'Genoux'], correct: 1, explication: 'Standard.' },
            { q: 'Triangle ballon-joueur-panier ?', options: ['3 défenseurs', 'Voir ballon ET joueur, entre lui et panier', 'Triangle off', 'Zone'], correct: 1, explication: 'Vision périph.' },
            { q: 'Pas chassés : croiser ?', options: ['Oui', 'Jamais', '1/2', 'Arrière'], correct: 1, explication: 'Jamais.' },
            { q: 'Deny défensif ?', options: ['Refuser 1v1', 'Empêcher réception', 'Dribbler', 'Sortir'], correct: 1, explication: 'Empêcher passe.' },
            { q: 'Help position ?', options: ['Mon joueur ballon', 'Joueur à 2 passes ballon', 'Jamais', 'Pivot'], correct: 1, explication: 'Help line.' },
            { q: 'Closeout = ?', options: ['Fermeture match', 'Sprint + pas chassés tireur', 'Faute', 'Tir'], correct: 1, explication: 'Technique closeout.' },
            { q: 'Closeout mains ?', options: ['Haute (tir) + basse (drive)', 'Hautes', '2 basses', 'Croisés'], correct: 0, explication: 'High-low.' },
            { q: 'Sur écran défense simple ?', options: ['Switch', 'Sortir', 'Crier', 'Rien'], correct: 0, explication: 'Switch.' },
            { q: 'Box out ?', options: ['Faute', 'Contact épaule-épaule, arc', 'Derrière', 'Sauter direct'], correct: 1, explication: 'Mise en boîte.' },
            { q: 'No-charge rayon ?', options: ['1 m', '1,25 m', '2 m', '5 m'], correct: 1, explication: '1,25 m sous panier.' },
            { q: 'Aide défensive sur pénétration ?', options: ['Rester', 'Couper trajectoire puis X-out', 'Sortir', 'Crier'], correct: 1, explication: 'Aide + rotation.' },
        ]
    },

    'qcm-mon-systemes': {
        title: 'QCM · Premiers systèmes offensifs et coaching',
        niveau: 'Moniteur',
        cat: 'qcm',
        duree: '10 min',
        questions: [
            { q: 'Spacing optimal ?', options: ['1 m', '4-5 m', '10 m', 'Indifférent'], correct: 1, explication: 'Driving lanes.' },
            { q: 'Give & Go ?', options: ['Passer/sortir', 'Passer/couper', 'Doubler', '2 dribbles'], correct: 1, explication: 'Action fondamentale.' },
            { q: 'P&R simple à 2 ?', options: ['Danse', 'Écran sur porteur + roll', 'Défense', 'Faute'], correct: 1, explication: 'Pick & roll.' },
            { q: 'Couloirs en contre-attaque à 3 ?', options: ['1', '3', '5', 'Aucun'], correct: 1, explication: 'Centre + 2 ailes.' },
            { q: 'Composition équipe U13 sur feuille ?', options: ['5', '10-12', '20', '30'], correct: 1, explication: '10-12 joueurs.' },
            { q: 'Minutes minimum/joueur U13 ?', options: ['Aucune', '1 période complète min', '30 sec', '5 min'], correct: 1, explication: 'Équité.' },
            { q: 'Durée TM FIBA ?', options: ['30 sec', '60 sec', '2 min', '5 min'], correct: 1, explication: '60 sec.' },
            { q: 'Messages TM ?', options: ['10', '1 seul', 'Aucun', '5'], correct: 1, explication: '1 message clair.' },
            { q: 'Échauffement standard ?', options: ['1 min', '15-20 min', '1h', 'Inutile'], correct: 1, explication: 'Mobilité + cardio + tir.' },
            { q: 'Communication parents ?', options: ['Aucune', 'Charte début saison + réunion', 'À chaud', 'Ignorer'], correct: 1, explication: 'Charte co-construite.' },
            { q: 'Débrief après défaite ?', options: ['Punir', 'Valoriser efforts, 24h après', 'Crier', 'Reporter'], correct: 1, explication: 'À froid.' },
            { q: 'Attaque rapide à 3 base ?', options: ['Tirer immédiat', 'Occuper 3 couloirs', '10 passes', 'Reculer'], correct: 1, explication: 'Spacing.' },
        ]
    },

    // --- Niveau 1 (3 QCM × 12 q) ---
    'qcm-n1-regles': {
        title: 'QCM · Règles FIBA officielles',
        niveau: 'Niveau 1',
        cat: 'qcm',
        duree: '10 min',
        questions: [
            { q: 'Temps franchir médiane ?', options: ['5', '8', '10', '24'], correct: 1, explication: '8 sec.' },
            { q: 'Durée période FIBA ?', options: ['8', '10', '12', '15'], correct: 1, explication: '10 min.' },
            { q: '3 pts FIBA distance ?', options: ['6,25', '6,75', '7,24', '7,50'], correct: 1, explication: '6,75 m.' },
            { q: 'Fautes avant exclusion ?', options: ['4', '5', '6', '7'], correct: 1, explication: '5.' },
            { q: 'TM 2 dernières min 4e QT ?', options: ['1', '2', '3', 'Illimité'], correct: 1, explication: '2 max.' },
            { q: 'Joueurs sur terrain ?', options: ['4', '5', '6', '7'], correct: 1, explication: '5.' },
            { q: '2e faute T ?', options: ['Avertissement', '2 LF', 'Disqualification', 'Rien'], correct: 2, explication: 'Disqualification.' },
            { q: 'Règle 24 sec ?', options: ['Attaque max', 'Pause', 'TM', 'Remplacement'], correct: 0, explication: 'Attaque.' },
            { q: 'Tir cercle aux 24s ?', options: ['0', '14 si récupère', '24', 'Faute'], correct: 1, explication: '14 sec.' },
            { q: 'Fautes équipe avant bonus ?', options: ['3', '4', '5', '6'], correct: 1, explication: '4 fautes.' },
            { q: 'Règle 3 sec ?', options: ['Indéfini', '3 sec raquette', '5', '10'], correct: 1, explication: 'Attaquant.' },
            { q: 'Prolongations ?', options: ['Mort subite', '5 min', '10 min', 'Tirage'], correct: 1, explication: '5 min.' },
        ]
    },

    'qcm-n1-conception': {
        title: 'QCM · Conception de séance et technique',
        niveau: 'Niveau 1',
        cat: 'qcm',
        duree: '10 min',
        questions: [
            { q: 'Séance U14 90 min ?', options: ['90\' tir', '15/25/25/20/5', '45/45', '30/60'], correct: 1, explication: 'Standard.' },
            { q: 'SMART ?', options: ['Intelligent', 'Spécifique/Mesurable/Atteignable/Réaliste/Temporel', 'SMA', 'Strict'], correct: 1, explication: 'Objectifs.' },
            { q: 'Cycle 8 séances ?', options: ['8 thèmes', 'Thème global progressif', '8 identiques', 'Sans cohérence'], correct: 1, explication: 'Cohérence.' },
            { q: 'Minutes max par exercice ?', options: ['5', '10-15', '30', '45'], correct: 1, explication: '10-15.' },
            { q: 'Pré-saison priorise ?', options: ['Compétition', 'Foncier + fondamentaux', 'Tactique', 'Repos'], correct: 1, explication: 'Foncier.' },
            { q: 'Walk-through ?', options: ['Course', 'Systèmes au ralenti', 'Échauffement', 'Réunion'], correct: 1, explication: 'Préparation match.' },
            { q: 'Fiche-séance pro ?', options: ['Exercices', 'En-tête, objectifs, schémas, rotations', 'Score', 'Liste'], correct: 1, explication: 'Complète.' },
            { q: 'Crossover ?', options: ['Par-dessus', 'Changement main rapide devant', 'Faute', 'Derrière'], correct: 1, explication: 'Dribble avancé.' },
            { q: 'Hesitation ?', options: ['Hésiter', 'Faux arrêt puis accélération', 'S\'arrêter', 'Faute'], correct: 1, explication: 'Lecture défensive.' },
            { q: 'Jab step offensif ?', options: ['Pivot', 'Feinte départ pour faire réagir', 'Passe', 'Faute'], correct: 1, explication: 'Feinte de pas.' },
            { q: 'Post-up ?', options: ['Périmètre', 'Poste bas dos panier', 'High post', 'LF'], correct: 1, explication: 'Jeu intérieur.' },
            { q: 'Drop step ?', options: ['Meneur', 'Pivot poste bas finition', 'Shooteur', 'Arbitre'], correct: 1, explication: 'Pivot effacé.' },
        ]
    },

    'qcm-n1-defense-transition': {
        title: 'QCM · Défense individuelle et transition',
        niveau: 'Niveau 1',
        cat: 'qcm',
        duree: '10 min',
        questions: [
            { q: 'Principes défensifs ?', options: ['3', '5', '7', '10'], correct: 1, explication: '5 principes.' },
            { q: 'Pression porteur distance ?', options: ['3 m', '1 bras tendu', 'Coller', 'Aucune'], correct: 1, explication: '1 bras.' },
            { q: 'On the help line ?', options: ['Médiane', 'Ligne balle-mon joueur', 'Zone', 'LF'], correct: 1, explication: 'Position aide.' },
            { q: 'Shell drill 4v4 ?', options: ['Attaque libre', 'Principes défensifs équipe', 'Tir', 'Course'], correct: 1, explication: 'Rotations.' },
            { q: 'Fight over ?', options: ['Combattre', 'Au-dessus écran', 'Switch', 'Faute'], correct: 1, explication: 'Côté ballon.' },
            { q: 'Hedge P&R ?', options: ['Toucher', 'Pivot sort court puis revient', 'Switcher', 'Rien'], correct: 1, explication: 'Sortie courte.' },
            { q: 'Outlet pass ?', options: ['Faute', '1ère passe après rebond', 'Remise', 'Système'], correct: 1, explication: 'Lance transition.' },
            { q: '3 couloirs ?', options: ['3 zones', 'Centre + 2 ailes', '3 stagiaires', 'Aucun'], correct: 1, explication: 'Standard.' },
            { q: 'Trailer ?', options: ['Suiveur', '4e/5e en soutien', 'Coach', 'Défenseur'], correct: 1, explication: 'Joueur retardé.' },
            { q: 'Drag screen ?', options: ['Sur place', 'Trailer pose écran transition', 'Zone', 'Fin'], correct: 1, explication: 'Écran tardif.' },
            { q: 'Transition défensive ?', options: ['Au panier', 'Sprint reprendre joueur/match up', 'Marcher', 'Attendre'], correct: 1, explication: 'Immédiat.' },
            { q: 'Efficacité transition ?', options: ['Faible', 'Bien plus élevée', 'Identique', 'Variable'], correct: 1, explication: '1,2-1,4 pts/poss.' },
        ]
    },

    // --- Niveau 2 (3 QCM × 12 q) ---
    'qcm-n2-tactique': {
        title: 'QCM · Tactique offensive et écrans',
        niveau: 'Niveau 2',
        cat: 'qcm',
        duree: '10 min',
        questions: [
            { q: '5-out ?', options: ['3', '4', '5 au-delà 3 pts', 'Variable'], correct: 2, explication: '5-out total.' },
            { q: '4-out 1-in ?', options: ['4 ext + 1 pivot', '4 def', '4 min', 'Aucun'], correct: 0, explication: '4 ext + 1 in.' },
            { q: 'Horns ?', options: ['Meneur + 2 grands elbows + 2 corners', 'Tous panier', 'Box', 'Stack'], correct: 0, explication: 'Set Horns.' },
            { q: 'Spacing ?', options: ['1 m', '4-5 m', '10 m', 'Aucun'], correct: 1, explication: 'Optimal.' },
            { q: 'P&R ?', options: ['Danse', 'Écran porteur + roll panier', 'Défense', 'Tir'], correct: 1, explication: 'Action #1.' },
            { q: 'Pop vs Roll ?', options: ['Identique', 'Pop = 3 pts, Roll = panier', 'Pop = panier', 'Roll = sortie'], correct: 1, explication: 'Selon profil.' },
            { q: 'Slip ?', options: ['Tombe', 'Sort avant pose (anticipe switch)', 'Glisse', 'Crie'], correct: 1, explication: 'Anticipation.' },
            { q: 'Down screen ?', options: ['Shooteur qui remonte', 'Porteur', 'Pivot', 'Arbitre'], correct: 0, explication: 'Off-ball.' },
            { q: 'Flare screen ?', options: ['Sortir shooteur côté opposé', 'Porteur', '1v1', 'Aucun'], correct: 0, explication: 'Côté faible.' },
            { q: 'Cross screen ?', options: ['Horizontal entre 2 intérieurs', 'Haut', 'LF', 'Aucun'], correct: 0, explication: 'Sets intérieurs.' },
            { q: 'ATO ?', options: ['Avocat', 'After Time-Out, score immédiat', 'Écran', 'Joueur'], correct: 1, explication: 'Set préparé.' },
            { q: 'Hammer action ?', options: ['Marteau', 'Drive baseline + skip + écran corner faible', 'Tir', 'Défense'], correct: 1, explication: 'Spurs.' },
        ]
    },

    'qcm-n2-zone': {
        title: 'QCM · Défense de zone',
        niveau: 'Niveau 2',
        cat: 'qcm',
        duree: '10 min',
        questions: [
            { q: 'Zone 2-3 défenseurs en ?', options: ['Ailes', 'Haut LF/3 pts top', 'Ligne fond', 'Centre'], correct: 1, explication: '2 haut + 3 bas.' },
            { q: 'Faiblesse 2-3 ?', options: ['Corners', 'High post', 'Ligne fond', 'Dribble'], correct: 1, explication: 'High post.' },
            { q: 'Zone 3-2 protège ?', options: ['Raquette', 'Périmètre + high post', 'Corners', 'Ligne fond'], correct: 1, explication: 'Périmètre.' },
            { q: 'Zone 1-3-1 ?', options: ['Bas', 'Piégeage ailes', 'Corner', 'Centre'], correct: 1, explication: 'Active sur ailes.' },
            { q: 'Match-up ?', options: ['Fixe', 'Hybride zone/individuelle', 'Tout terrain', 'Simple'], correct: 1, explication: 'Adaptable.' },
            { q: 'Zone press 2-2-1 ?', options: ['2-2-1 all-court', '5 sur ballon', '1-3-1', '3-2'], correct: 0, explication: 'Press classique.' },
            { q: 'Attaquer 2-3 ?', options: ['Tirer', 'High post + skip + corners', 'Force', 'Rien'], correct: 1, explication: 'Mouvement balle.' },
            { q: 'Drop coverage P&R ?', options: ['Sort', 'Reste bas, laisse mid-range', 'Switche', 'Crie'], correct: 1, explication: 'Sécurise.' },
            { q: 'Ice P&R latéral ?', options: ['Panier', 'Touche', 'Centre', 'Poseur'], correct: 1, explication: 'Forcer touche.' },
            { q: 'Communication shell drill ?', options: ['Rien', 'Ballon/Help/Switch/Screen', 'Coach', 'Compter'], correct: 1, explication: 'Annonces.' },
            { q: 'X-out rotation ?', options: ['Dribble', 'Aide prise → 3e défenseur rotation', 'Zone', 'LF'], correct: 1, explication: 'Recover.' },
            { q: 'Zone interdite avant ?', options: ['Trop facile', 'Pour 1v1 et lecture individuelle', 'Danger', 'Aucune'], correct: 1, explication: 'Avant 15 ans.' },
        ]
    },

    'qcm-n2-scouting': {
        title: 'QCM · Scouting et stats',
        niveau: 'Niveau 2',
        cat: 'qcm',
        duree: '10 min',
        questions: [
            { q: 'Scouting contient ?', options: ['Menu', 'Tendances/sets/défenses/joueurs/ATO', 'Classement', 'Score'], correct: 1, explication: '4 sections.' },
            { q: 'Combien de matchs ?', options: ['1', '3 min variés', '10', 'Aucun'], correct: 1, explication: '3 matchs.' },
            { q: 'Outils gratuits ?', options: ['Aucun', 'Hudl basic, YouTube, FastModel free', 'Photoshop', 'Excel'], correct: 1, explication: 'Suffisants.' },
            { q: 'Profil joueur ?', options: ['Taille', 'Main forte, points faibles, % tir, tendances', 'Âge', 'Chaussures'], correct: 1, explication: 'Multi-dim.' },
            { q: 'eFG% ?', options: ['% normal', 'Pondère 3 pts', 'Score', 'Faute'], correct: 1, explication: '3 pts × 1,5.' },
            { q: 'TS% inclut ?', options: ['FG seul', 'FG + LF + 3 pts', 'Aucun', 'Rebond'], correct: 1, explication: 'Complet.' },
            { q: 'Pace ?', options: ['Match', 'Possessions/40 min', '1 min', '10 sec'], correct: 1, explication: 'Normalise.' },
            { q: 'Plus/Minus ?', options: ['Taille', 'Différentiel score sur terrain', 'Poids', 'Score'], correct: 1, explication: 'Impact.' },
            { q: 'Mi-temps stats ?', options: ['Toutes', '3 clés + 1 ajustement', 'Aucune', '20'], correct: 1, explication: 'Focus.' },
            { q: 'Game plan 1 page ?', options: ['Tout', 'Clés + ATO + match-up', 'Score', 'Contrats'], correct: 1, explication: '8 messages max.' },
            { q: 'SLOB ?', options: ['Côté', 'Sideline Out of Bounds', 'Fond', 'Centre'], correct: 1, explication: 'Touche.' },
            { q: 'BLOB ?', options: ['Côté', 'Baseline Out of Bounds', 'Centre', 'Zone'], correct: 1, explication: 'Ligne fond.' },
        ]
    },

    // --- Niveau 3 (3 QCM × 12 q) ---
    'qcm-n3-periodisation': {
        title: 'QCM · Périodisation et physique',
        niveau: 'Niveau 3',
        cat: 'qcm',
        duree: '10 min',
        questions: [
            { q: 'Macro-cycle ?', options: ['Petit', 'Saison complète', '1 sem', '1 jour'], correct: 1, explication: 'Annuel.' },
            { q: 'Méso-cycle ?', options: ['1 jour', '4-6 sem', '6 mois', '1h'], correct: 1, explication: 'Phase.' },
            { q: 'Micro-cycle ?', options: ['Saison', '1 sem', '1 jour', '1 match'], correct: 1, explication: 'Court.' },
            { q: 'RPE ?', options: ['Effort 1-10', 'Score', 'Fatigue', 'Tir'], correct: 0, explication: 'Subjectif.' },
            { q: 'A/C ratio idéal ?', options: ['Score', '0.8-1.3 (blessure)', 'Aucun', 'Taille'], correct: 1, explication: 'Risque.' },
            { q: 'Tapering ?', options: ['Barbe', 'Affûtage pré-play-off', 'Augmenter', 'Rien'], correct: 1, explication: 'Pic forme.' },
            { q: '3 filières basket ?', options: ['1', 'Alactique/lactique/aérobie', 'Aérobie seule', 'Anaérobie'], correct: 1, explication: '3 énergies.' },
            { q: 'RAMP ?', options: ['Pente', 'Raise/Activate/Mobilize/Potentiate', 'Course', 'Rien'], correct: 1, explication: 'Échauffement.' },
            { q: 'Prévention LCA ?', options: ['Sauter haut', 'Contrôle valgus en réception', 'Tomber', 'Rien'], correct: 1, explication: 'FIFA 11+.' },
            { q: 'Récup active ?', options: ['Sommeil', 'Vélo léger + étirements + hydro', 'Course', 'Rien'], correct: 1, explication: 'Faible intensité.' },
            { q: 'Hydratation L/h ?', options: ['0,1', '0,5-2', '5', '10'], correct: 1, explication: 'Selon climat.' },
            { q: 'Sommeil athlète ?', options: ['4h', '8-10h régulier', '5h', '12h'], correct: 1, explication: 'Performance.' },
        ]
    },

    'qcm-n3-leadership': {
        title: 'QCM · Leadership et management',
        niveau: 'Niveau 3',
        cat: 'qcm',
        duree: '10 min',
        questions: [
            { q: 'Hersey-Blanchard styles ?', options: ['2', '4 (directif/persuasif/participatif/délégatif)', '10', '1'], correct: 1, explication: '4 styles.' },
            { q: 'Style directif ?', options: ['Senior', 'Débutant', 'Tous', 'Personne'], correct: 1, explication: 'Contrôle élevé.' },
            { q: 'Tuckman étapes ?', options: ['2', '5', '3', '10'], correct: 1, explication: '5 phases.' },
            { q: 'Storming ?', options: ['Calme', 'Tensions, conflits', 'Performance', 'Création'], correct: 1, explication: 'Nécessaire.' },
            { q: 'Entretiens/saison ?', options: ['0', '3 min', '12', '1'], correct: 1, explication: 'Suivi.' },
            { q: 'DESC ?', options: ['Aucun', 'Décrire/Exprimer/Spécifier/Conclure', 'Détruire', 'Crier'], correct: 1, explication: 'Feedback.' },
            { q: 'Sandwich ?', options: ['Manger', 'Positif/amélioration/positif', 'Critique', 'Rien'], correct: 1, explication: 'Bien accepté.' },
            { q: 'Leader négatif ?', options: ['Ignorer', 'Entretien + responsabilité ou sanction', 'Publique', 'Renvoyer'], correct: 1, explication: 'Progressif.' },
            { q: 'Communication staff ?', options: ['Jamais', 'Réunion hebdo + canal', '1 fois/an', 'Tous jours'], correct: 1, explication: 'Hebdo essentielle.' },
            { q: 'Matrice RACI ?', options: ['Score', 'Responsable/Approuve/Consulté/Informé', 'Aucun', 'Stats'], correct: 1, explication: 'Définition rôles.' },
            { q: 'Capitaine critères ?', options: ['Le plus fort', 'Leadership/exemple/communication', 'Le plus âgé', 'Hasard'], correct: 1, explication: 'Relais coach.' },
            { q: 'Culture gagnante ?', options: ['Talent', 'Standards + confiance + sacrifice', 'Hasard', 'Argent'], correct: 1, explication: 'Popovich.' },
        ]
    },

    'qcm-n3-mental': {
        title: 'QCM · Préparation mentale et coaching haut niveau',
        niveau: 'Niveau 3',
        cat: 'qcm',
        duree: '10 min',
        questions: [
            { q: 'IZOF ?', options: ['Équipe', 'Zone optimale individuelle', 'Test', 'Tactique'], correct: 1, explication: 'Activation émotionnelle.' },
            { q: 'Visualisation pré-match ?', options: ['1h', '5-10 min', '30 sec', 'Aucune'], correct: 1, explication: 'Activation cérébrale.' },
            { q: 'Self-talk négatif ?', options: ['Accepter', 'Reformuler positif', 'Ignorer', 'Crier'], correct: 1, explication: 'Outil mental.' },
            { q: 'Breathing 4-7-8 ?', options: ['4/7/8 sec', 'Compter', 'Cardio', 'Rien'], correct: 0, explication: 'Cohérence cardiaque.' },
            { q: 'Cue-words ?', options: ['Crier', 'Activer état mental/geste', 'Faute', 'Rien'], correct: 1, explication: 'Mots-clés.' },
            { q: 'Burnout signaux ?', options: ['Forme', 'Fatigue/démotivation/sommeil/irritabilité', 'Énergie', 'Humeur'], correct: 1, explication: 'Alerte.' },
            { q: 'Crise blessure star ?', options: ['Renoncer', 'Plan B + adaptation', 'Crier', 'Reporter'], correct: 1, explication: 'Anticipation.' },
            { q: 'Coaching fin match -2 pts/10 sec ?', options: ['ATO préparé', 'Improviser', 'Rien', 'Sortir'], correct: 0, explication: 'Anticipation.' },
            { q: 'Défendre +5 pts/1 min ?', options: ['Zone', 'Individuelle stricte, pas de 3 pts ouvert', 'Press', 'Aucune'], correct: 1, explication: 'Pas de faute.' },
            { q: 'Remonter -10 pts/2 min ?', options: ['Classique', 'Press + fautes intentionnelles + 3 pts', 'Rien', 'Sortir'], correct: 1, explication: 'Comeback.' },
            { q: 'Long tournoi 4 jours priorité ?', options: ['Matchs', 'Récupération (sommeil/nutrition)', 'Tactique', 'Repos'], correct: 1, explication: 'Récupération.' },
            { q: 'Formateur d\'entraîneurs ?', options: ['Aucune compétence', 'Technique + posture + ingénierie pédagogique', 'Temps', 'Argent'], correct: 1, explication: 'ADDIE + transmission.' },
        ]
    },

};


(function () {
    'use strict';

    const hub = document.querySelector('.quiz-hub');
    const player = document.querySelector('.quiz-player');
    if (!hub || !player) return;

    let currentKey = null;
    let currentQ = 0;
    let score = 0;
    let answered = false;

    // Sections par catégorie puis par niveau
    const SECTIONS = [
        { cat: 'rapide',     niveau: 'Quiz rapide', color: '#9F0D1E', label: '⚡ Quiz rapides · auto-évaluation transversale' },
        { cat: 'approfondi', niveau: 'Animateur',   color: '#007A33', label: '📚 Quiz approfondis · Animateur' },
        { cat: 'approfondi', niveau: 'Moniteur',    color: '#1B9A50', label: '📚 Quiz approfondis · Moniteur' },
        { cat: 'approfondi', niveau: 'Niveau 1',    color: '#CE1126', label: '📚 Quiz approfondis · Niveau 1' },
        { cat: 'approfondi', niveau: 'Niveau 2',    color: '#FCD116', label: '📚 Quiz approfondis · Niveau 2' },
        { cat: 'approfondi', niveau: 'Niveau 3',    color: '#E87722', label: '📚 Quiz approfondis · Niveau 3' },
        { cat: 'qcm',        niveau: 'Animateur',   color: '#007A33', label: '🎯 QCM thématiques · Animateur' },
        { cat: 'qcm',        niveau: 'Moniteur',    color: '#1B9A50', label: '🎯 QCM thématiques · Moniteur' },
        { cat: 'qcm',        niveau: 'Niveau 1',    color: '#CE1126', label: '🎯 QCM thématiques · Niveau 1' },
        { cat: 'qcm',        niveau: 'Niveau 2',    color: '#FCD116', label: '🎯 QCM thématiques · Niveau 2' },
        { cat: 'qcm',        niveau: 'Niveau 3',    color: '#E87722', label: '🎯 QCM thématiques · Niveau 3' },
    ];

    SECTIONS.forEach(section => {
        const quizzes = Object.entries(QUIZZES).filter(([k, q]) => q.cat === section.cat && q.niveau === section.niveau);
        if (quizzes.length === 0) return;

        const header = document.createElement('div');
        header.className = 'quiz-niveau-header';
        const unit = (section.cat === 'qcm') ? 'QCM' : 'quiz';
        header.innerHTML = `
            <span class="quiz-niveau-chip" style="background:${section.color}; color:${section.niveau === 'Niveau 2' ? '#0A0A0A' : '#fff'}">${section.label}</span>
            <strong class="quiz-niveau-count">${quizzes.length} ${unit} · ${quizzes.reduce((s, [, q]) => s + q.questions.length, 0)} questions</strong>
        `;
        hub.appendChild(header);

        quizzes.forEach(([key, qz]) => {
            const tile = document.createElement('button');
            tile.className = 'quiz-tile';
            tile.dataset.key = key;
            tile.innerHTML = `
                <span class="tag" style="background:${section.color}; color:${section.niveau === 'Niveau 2' ? '#0A0A0A' : '#fff'}">${qz.niveau}</span>
                <h3>${qz.title}</h3>
                <p>${qz.questions.length} questions à choix multiples. Validation à 70 %.</p>
                <div class="meta">
                    <span>📝 ${qz.questions.length} questions</span>
                    <span>⏱ ${qz.duree}</span>
                </div>
            `;
            tile.addEventListener('click', () => startQuiz(key));
            hub.appendChild(tile);
        });
    });

    function startQuiz(key) {
        if (!QUIZZES[key]) {
            console.warn('[FECABASKET quiz] Quiz introuvable :', key);
            return;
        }
        currentKey = key;
        currentQ = 0;
        score = 0;
        answered = false;
        document.querySelectorAll('.quiz-tile').forEach(t => t.classList.toggle('active', t.dataset.key === key));
        renderQuestion();
        player.classList.remove('hidden');
        // mettre à jour l'URL sans recharger (pour partage/permalien)
        try { history.replaceState(null, '', '?q=' + encodeURIComponent(key)); } catch (_) {}
        setTimeout(() => player.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    }

    // -- Auto-démarrage depuis URL : ?q=key (ex. depuis les pages cours) --
    function autoStartFromUrl() {
        const params = new URLSearchParams(location.search);
        const key = params.get('q');
        if (key && QUIZZES[key]) {
            setTimeout(() => startQuiz(key), 150);
        }
    }
    autoStartFromUrl();

    function renderQuestion() {
        const qz = QUIZZES[currentKey];
        const q = qz.questions[currentQ];
        const progress = (currentQ / qz.questions.length) * 100;
        answered = false;
        player.innerHTML = `
            <div class="quiz-header">
                <span class="quiz-title">${qz.title}</span>
                <span>Question ${currentQ + 1} / ${qz.questions.length}</span>
            </div>
            <div class="quiz-progress"><div class="quiz-progress-bar" style="width:${progress}%"></div></div>
            <div class="quiz-question">${escapeHtml(q.q)}</div>
            <div class="quiz-options">
                ${q.options.map((opt, i) => `
                    <button class="quiz-option" data-i="${i}">
                        <span class="letter">${String.fromCharCode(65 + i)}</span>
                        <span>${escapeHtml(opt)}</span>
                    </button>`).join('')}
            </div>
            <div class="quiz-feedback"></div>
            <div class="quiz-controls">
                <button class="btn btn-ghost" data-action="quit">← Quitter</button>
                <button class="btn btn-primary" data-action="next" disabled>Suivant →</button>
            </div>
        `;
        player.querySelectorAll('.quiz-option').forEach(btn => btn.addEventListener('click', () => answerQuestion(parseInt(btn.dataset.i, 10))));
        player.querySelector('[data-action="quit"]').addEventListener('click', quit);
        player.querySelector('[data-action="next"]').addEventListener('click', nextQuestion);
    }

    function answerQuestion(idx) {
        if (answered) return;
        answered = true;
        const qz = QUIZZES[currentKey];
        const q = qz.questions[currentQ];
        const opts = player.querySelectorAll('.quiz-option');
        opts.forEach((o, i) => {
            o.disabled = true;
            if (i === q.correct) o.classList.add('correct');
            else if (i === idx) o.classList.add('wrong');
        });
        const ok = idx === q.correct;
        if (ok) score++;
        const fb = player.querySelector('.quiz-feedback');
        fb.classList.add('show', ok ? 'ok' : 'ko');
        fb.innerHTML = `<strong>${ok ? '✓ Bonne réponse' : '✗ Réponse incorrecte'}</strong>${escapeHtml(q.explication)}`;
        const nextBtn = player.querySelector('[data-action="next"]');
        nextBtn.disabled = false;
        if (currentQ === qz.questions.length - 1) nextBtn.textContent = 'Voir mon résultat →';
        const bar = player.querySelector('.quiz-progress-bar');
        if (bar) bar.style.width = ((currentQ + 1) / qz.questions.length) * 100 + '%';
    }

    function nextQuestion() {
        const qz = QUIZZES[currentKey];
        if (currentQ < qz.questions.length - 1) { currentQ++; renderQuestion(); }
        else { renderResult(); }
    }

    function renderResult() {
        const qz = QUIZZES[currentKey];
        const total = qz.questions.length;
        const pct = Math.round((score / total) * 100);
        const success = pct >= 70;
        player.innerHTML = `
            <div class="quiz-result">
                <div class="quiz-header" style="justify-content:center; gap:10px;">
                    <span class="quiz-title">${qz.title} — Résultat</span>
                </div>
                <div class="score">${pct}%</div>
                <div class="badge-result ${success ? 'success' : 'fail'}">${success ? '🏀 Réussi — Niveau validé !' : '↺ À retravailler'}</div>
                <p>Vous avez obtenu <strong>${score} bonne${score > 1 ? 's' : ''} réponse${score > 1 ? 's' : ''}</strong> sur ${total}.
                ${success ? "Bravo, vous maîtrisez ce thème." : "Reprenez le contenu du manuel WABC, puis retentez. Note minimale : 70 %."}</p>
                <div class="actions">
                    <button class="btn btn-primary" data-action="retry">↻ Recommencer</button>
                    <button class="btn btn-secondary" data-action="quit">← Tous les quiz</button>
                </div>
            </div>
        `;
        player.querySelector('[data-action="retry"]').addEventListener('click', () => startQuiz(currentKey));
        player.querySelector('[data-action="quit"]').addEventListener('click', quit);
        if (success && typeof window.fecaToast === 'function') window.fecaToast('🏆 Bravo ! Score validé : ' + pct + '%');
    }

    function quit() {
        player.classList.add('hidden');
        document.querySelectorAll('.quiz-tile').forEach(t => t.classList.remove('active'));
        hub.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function escapeHtml(s) {
        return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
})();
