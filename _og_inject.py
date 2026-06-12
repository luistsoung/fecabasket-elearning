"""
Injecte les balises Open Graph + Twitter Cards dans toutes les pages HTML
pour que le partage WhatsApp/Facebook/X/LinkedIn affiche une carte preview.

URL absolue Netlify utilisée. À adapter si le site bascule sur elearning.fecabasket.com.
"""
import re
import os
from pathlib import Path

BASE_URL = "https://unique-hummingbird-8257b6.netlify.app"
SITE = Path(".")

# Métadonnées par page (clé = nom de fichier, sans .html)
META = {
    # FR
    "index": {
        "title": "FECABASKET E-Learning — Formation des entraîneurs camerounais",
        "desc": "Plateforme officielle de formation en ligne des entraîneurs camerounais de basketball. 5 niveaux alignés FIBA WABC : Animateur, Moniteur, Niveau 1, 2, 3.",
        "lang": "fr",
    },
    "tous-nos-lions": {
        "title": "Tous nos Lions Indomptables · FECABASKET",
        "desc": "Les 9 équipes nationales camerounaises de basketball : A Messieurs, A Dames, A' Messieurs, U19, U18, U17, U16 (Garçons et Filles). Photos officielles + bilans complets.",
        "lang": "fr",
    },
    "vae": {
        "title": "VAE — Validation des Acquis · FECABASKET",
        "desc": "Faites reconnaître vos années d'expérience comme entraîneur de basket. VAE FECABASKET : diplôme officiel WABC sans repasser toute la formation.",
        "lang": "fr",
    },
    "ressources": {
        "title": "Ressources WABC · FECABASKET E-Learning",
        "desc": "Manuels FIBA WABC officiels (5 niveaux), vidéos First Team, banque de ressources pour les entraîneurs camerounais.",
        "lang": "fr",
    },
    "tactique": {
        "title": "Drills & systèmes tactiques · FECABASKET",
        "desc": "69 drills et plays animés classés par niveau (Mini-Basket → Niveau 3). Référence FIBA WABC. Schémas interactifs NBA/NCAA.",
        "lang": "fr",
    },
    "niveaux": {
        "title": "Les 5 niveaux de certification · FECABASKET",
        "desc": "Animateur (Mini-Basket) · Moniteur · Niveau 1 · Niveau 2 · Niveau 3. Cursus complet aligné FIBA WABC pour entraîneurs camerounais.",
        "lang": "fr",
    },
    "quiz": {
        "title": "Quiz et QCM · FECABASKET E-Learning",
        "desc": "Testez vos connaissances en basket-ball. Quiz alignés FIBA WABC par niveau, avec explications pédagogiques.",
        "lang": "fr",
    },
    "process-corporation": {
        "title": "Process Corporation · FECABASKET",
        "desc": "Formation continue Process Corporation pour les entraîneurs camerounais. Vidéos pédagogiques basket-loisir.",
        "lang": "fr",
    },
    "cours-animateur": {
        "title": "Cours Animateur (Mini-Basket) · FECABASKET",
        "desc": "Programme Animateur Mini-Basket FIBA WABC : 6 modules, 30 heures, pour entraîneurs U5-U10.",
        "lang": "fr",
    },
    "cours-moniteur": {
        "title": "Cours Moniteur (U12-U16) · FECABASKET",
        "desc": "Programme Moniteur FIBA WABC : 6 modules, 45 heures, pour entraîneurs des catégories U12 à U16.",
        "lang": "fr",
    },
    "cours-niveau1": {
        "title": "Cours Niveau 1 WABC L1 · FECABASKET",
        "desc": "Programme Niveau 1 (WABC L1) : 6 modules, 60 heures, formation entraîneurs U12-U15.",
        "lang": "fr",
    },
    "cours-niveau2": {
        "title": "Cours Niveau 2 WABC L2 · FECABASKET",
        "desc": "Programme Niveau 2 (WABC L2) : 7 modules, 100 heures, formation entraîneurs nationaux.",
        "lang": "fr",
    },
    "cours-niveau3": {
        "title": "Cours Niveau 3 WABC L3 · FECABASKET",
        "desc": "Programme Niveau 3 (WABC L3) : 12 modules, 150 heures, formation entraîneurs haut niveau.",
        "lang": "fr",
    },
    "youzou-elite-one-dames": {
        "title": "Youzou Élite One Dames 2026 · Bilan · FECABASKET",
        "desc": "Bilan complet saison 2026 Élite One Dames : FAP championne 12-0, MVP Emedie, 7 équipes, 14 journées de stats.",
        "lang": "fr",
    },
    "youzou-elite-one-messieurs": {
        "title": "Youzou Élite One Messieurs 2026 · Bilan · FECABASKET",
        "desc": "Bilan complet saison 2026 Élite One Messieurs : BEAC champion 11-3, MVP Melingui Essa, DPOY Mpoudi Eyambe.",
        "lang": "fr",
    },
}

META_EN = {
    "index": {
        "title": "FECABASKET E-Learning — Cameroonian Coaches Platform",
        "desc": "Official online training platform for Cameroonian basketball coaches. 5 levels aligned with FIBA WABC.",
        "lang": "en",
    },
    "tous-nos-lions": {
        "title": "All our Indomitable Lions · FECABASKET",
        "desc": "The 9 Cameroonian national basketball teams: men, women, U19, U18, U17, U16. Official photos + season reports.",
        "lang": "en",
    },
    "vae": {
        "title": "RPL — Recognition of Prior Learning · FECABASKET",
        "desc": "Get your years of experience as a basketball coach officially recognized. FECABASKET RPL: WABC-aligned diploma without retaking the full training.",
        "lang": "en",
    },
    "ressources": {
        "title": "WABC Resources · FECABASKET E-Learning",
        "desc": "Official FIBA WABC manuals (5 levels), First Team videos, resource library for Cameroonian coaches.",
        "lang": "en",
    },
    "tactique": {
        "title": "Drills & tactical plays · FECABASKET",
        "desc": "69 animated drills and plays sorted by level (Mini-Basket → Level 3). FIBA WABC reference. NBA/NCAA interactive diagrams.",
        "lang": "en",
    },
    "niveaux": {
        "title": "The 5 certification levels · FECABASKET",
        "desc": "Animator (Mini-Basket) · Monitor · Level 1 · Level 2 · Level 3. Complete curriculum aligned with FIBA WABC.",
        "lang": "en",
    },
    "quiz": {
        "title": "Quizzes & MCQs · FECABASKET E-Learning",
        "desc": "Test your basketball knowledge. Quizzes aligned with FIBA WABC by level, with pedagogical explanations.",
        "lang": "en",
    },
    "process-corporation": {
        "title": "Process Corporation · FECABASKET",
        "desc": "Process Corporation continuing education for Cameroonian coaches. Recreational basketball educational videos.",
        "lang": "en",
    },
    "cours-animateur": {
        "title": "Animator Course (Mini-Basket) · FECABASKET",
        "desc": "FIBA WABC Animator Mini-Basket program: 6 modules, 30 hours, for U5-U10 coaches.",
        "lang": "en",
    },
    "cours-moniteur": {
        "title": "Monitor Course (U12-U16) · FECABASKET",
        "desc": "FIBA WABC Monitor program: 6 modules, 45 hours, for U12-U16 coaches.",
        "lang": "en",
    },
    "cours-niveau1": {
        "title": "Level 1 Course WABC L1 · FECABASKET",
        "desc": "Level 1 (WABC L1) program: 6 modules, 60 hours, for U12-U15 coaches training.",
        "lang": "en",
    },
    "cours-niveau2": {
        "title": "Level 2 Course WABC L2 · FECABASKET",
        "desc": "Level 2 (WABC L2) program: 7 modules, 100 hours, national coaches training.",
        "lang": "en",
    },
    "cours-niveau3": {
        "title": "Level 3 Course WABC L3 · FECABASKET",
        "desc": "Level 3 (WABC L3) program: 12 modules, 150 hours, elite-level coaches training.",
        "lang": "en",
    },
    "youzou-elite-one-dames": {
        "title": "Youzou Elite One Women 2026 · Report · FECABASKET",
        "desc": "Complete 2026 Elite One Women season report: FAP champions 12-0, MVP Emedie, 7 teams, 14 weeks of stats.",
        "lang": "en",
    },
    "youzou-elite-one-messieurs": {
        "title": "Youzou Elite One Men 2026 · Report · FECABASKET",
        "desc": "Complete 2026 Elite One Men season report: BEAC champions 11-3, MVP Melingui Essa, DPOY Mpoudi Eyambe.",
        "lang": "en",
    },
}


def og_block(page_url, og_image_url, og_image_square_url, title, desc, lang, locale):
    return f"""    <!-- Open Graph / WhatsApp / Facebook / LinkedIn -->
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="FECABASKET E-Learning">
    <meta property="og:locale" content="{locale}">
    <meta property="og:url" content="{page_url}">
    <meta property="og:title" content="{title}">
    <meta property="og:description" content="{desc}">
    <!-- Image principale : carrée 1200x1200 (grande preview WhatsApp/mobile) -->
    <meta property="og:image" content="{og_image_square_url}">
    <meta property="og:image:secure_url" content="{og_image_square_url}">
    <meta property="og:image:type" content="image/jpeg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="1200">
    <meta property="og:image:alt" content="Jeremiah Hill · Capitaine Lions Indomptables · FECABASKET E-Learning">
    <!-- Image alternative : 16:9 1200x630 (Facebook/Twitter cards) -->
    <meta property="og:image" content="{og_image_url}">
    <meta property="og:image:secure_url" content="{og_image_url}">
    <meta property="og:image:type" content="image/jpeg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <!-- Twitter Cards / X -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@FECABASKET">
    <meta name="twitter:creator" content="@FECABASKET">
    <meta name="twitter:url" content="{page_url}">
    <meta name="twitter:title" content="{title}">
    <meta name="twitter:description" content="{desc}">
    <meta name="twitter:image" content="{og_image_url}">"""


def inject(html_path: Path, meta: dict):
    """Injecte les meta OG dans le <head>, juste avant </head>."""
    txt = html_path.read_text(encoding='utf-8')

    # Determine URL et lang
    rel = html_path.relative_to(SITE).as_posix()
    page_url = f"{BASE_URL}/{rel}"
    is_en = rel.startswith('en/') or '/en/' in rel
    og_img_filename = "og-default-en.jpg" if is_en else "og-default.jpg"
    og_image_url = f"{BASE_URL}/assets/img/og/{og_img_filename}"
    og_square_filename = "og-square-en.jpg" if is_en else "og-square.jpg"
    og_image_square_url = f"{BASE_URL}/assets/img/og/{og_square_filename}"
    locale = "en_US" if is_en else "fr_FR"

    block = og_block(page_url, og_image_url, og_image_square_url, meta['title'], meta['desc'], meta['lang'], locale)

    # Supprime tout bloc OG / Twitter existant
    txt = re.sub(r'\s*<!-- Open Graph.*?</head>', '\n</head>', txt, flags=re.DOTALL)
    # Au cas où, supprimer les meta og: et twitter: orphelins
    txt = re.sub(r'\s*<meta property="og:[^"]*"[^>]*>', '', txt)
    txt = re.sub(r'\s*<meta name="twitter:[^"]*"[^>]*>', '', txt)

    # Injecte juste avant </head>
    if '</head>' not in txt:
        print(f"  ! {rel} : pas de </head>, ignore")
        return False
    txt = txt.replace('</head>', '\n' + block + '\n</head>', 1)
    html_path.write_text(txt, encoding='utf-8')
    return True


# Traite toutes les pages
count = 0
for name, meta in META.items():
    path = SITE / f"{name}.html"
    if path.exists():
        if inject(path, meta):
            count += 1
            print(f"  ✓ {path.name}")

for name, meta in META_EN.items():
    path = SITE / "en" / f"{name}.html"
    if path.exists():
        if inject(path, meta):
            count += 1
            print(f"  ✓ en/{path.name}")

print(f"\n=== {count} pages mises a jour avec Open Graph + Twitter Cards ===")
