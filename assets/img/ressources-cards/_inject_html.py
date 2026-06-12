# -*- coding: utf-8 -*-
"""Injecte les 44 images d'aperçu dans ressources.html."""
import re, os

HTML_PATH = r"C:/Users/pc/Desktop/e learning fecabasket 2027/fecabasket-elearning/site/ressources.html"
with open(HTML_PATH, 'r', encoding='utf-8') as f:
    html = f.read()

original = html

# ===== 1) PLATEFORMES FIBA (4) — ajout <img> dans .quiz-tile =====
# Chaque quiz-tile contient un <h3> avec le nom. On insère l'img juste après le tag d'ouverture du quiz-tile.
PLATFORMS = [
    ('FIBA WABC Platform',       'platform-wabc-platform.png'),
    ('Source WABC officielle',   'platform-wabc-source.png'),
    ('FIBA Africa',              'platform-fiba-africa.png'),
    ('FIBA Coaching App',        'platform-fiba-coaching-app.png'),
]
for h3_text, img_name in PLATFORMS:
    # Pattern : <a ... class="quiz-tile">...<h3>NAME</h3>
    pattern = r'(<a [^>]*class="quiz-tile"[^>]*>)(\s*<span class="tag")'
    # Cherche l'occurrence dont le h3 contient h3_text
    # Plus simple : on cherche par h3
    h3_idx = html.find(f'<h3>{h3_text}</h3>')
    if h3_idx == -1:
        print(f'WARN: not found h3 "{h3_text}"')
        continue
    # Remonter pour trouver le <a class="quiz-tile">
    a_idx = html.rfind('<a ', 0, h3_idx)
    # Trouver le > de fermeture du <a>
    a_close = html.find('>', a_idx)
    # Vérifier qu'il n'y a pas déjà une img
    after_a = html[a_close+1:a_close+200]
    if '<img' in after_a[:80] and 'ressources-cards' in after_a[:200]:
        print(f'  - skip {img_name} (already injected)')
        continue
    # Injecter l'img juste après <a ...>
    img_tag = f'\n                    <img src="assets/img/ressources-cards/{img_name}" alt="" loading="lazy" style="width:100%; height:auto; border-radius:8px; margin-bottom:14px; display:block">'
    html = html[:a_close+1] + img_tag + html[a_close+1:]
    print(f'  + platform: {img_name}')

# ===== 2) SITES COACHS (10) — ajout <img> en haut du .site-card =====
SITES = [
    ('Breakthrough Basketball',      'site-breakthrough.png'),
    ('The Hoops Geek',               'site-hoopsgeek.png'),
    ('FastModel Sports',             'site-fastmodel.png'),
    ('Basketball-Reference',         'site-basketball-ref.png'),
    ('USA Basketball — Coaches',     'site-usab.png'),
    ('Coach\'s Clipboard',           'site-clipboard.png'),
    ('FECABASKET — Site officiel',   'site-fecabasket.png'),
    ('BasketSession',                'site-basketsession.png'),
    ('Hoop Coach',                   'site-hoopcoach.png'),
    ('Basketball Manitoba — Coaches','site-manitoba.png'),
]
for label, img_name in SITES:
    # Trouver le <strong>LABEL</strong> dans le site-card
    strong_idx = html.find(f'<strong>{label}</strong>')
    if strong_idx == -1:
        print(f'WARN: site not found "{label}"')
        continue
    # Remonter pour le <a class="site-card">
    a_idx = html.rfind('<a ', 0, strong_idx)
    if 'class="site-card"' not in html[a_idx:a_idx+200]:
        print(f'WARN: site-card not found for "{label}"')
        continue
    a_close = html.find('>', a_idx)
    after_a = html[a_close+1:a_close+200]
    if 'ressources-cards' in after_a[:200]:
        print(f'  - skip site {img_name} (already injected)')
        continue
    # Ajouter <img> juste après <a ...>
    img_tag = f'\n                <img src="assets/img/ressources-cards/{img_name}" alt="" loading="lazy" class="site-thumb" style="width:100%; height:auto; display:block; flex-shrink:0">'
    html = html[:a_close+1] + img_tag + html[a_close+1:]
    print(f'  + site: {img_name}')

# ===== 3) YOUTUBE (10) — remplacer background du .yt-thumb par image =====
YT_REPLACEMENTS = [
    ('@FIBA',                          'youtube-fiba.png'),
    ('@NBA"',                          'youtube-nba.png'),  # quote pour distinguer de @NBA_France
    ('user/BreakthroughBBall',         'youtube-breakthroughyt.png'),
    ('@HoopsKing',                     'youtube-hoopsking.png'),
    ('@ganonbakerbasketball',          'youtube-ganonbaker.png'),
    ('@PureSweatBasketball',           'youtube-puresweat.png'),
    ('@bballbreakdown',                'youtube-bballbreakdown.png'),
    ('c/FFBB_officiel',                'youtube-ffbb.png'),
    ('@NBA_France',                    'youtube-nba-france.png'),
    ('@coachdaniel',                   'youtube-coachdaniel.png'),
]
for handle, img_name in YT_REPLACEMENTS:
    # Trouver le href contenant le handle
    href_idx = html.find(handle)
    if href_idx == -1:
        print(f'WARN: yt not found "{handle}"')
        continue
    # Trouver le <div class="yt-thumb" qui suit
    yt_thumb_idx = html.find('<div class="yt-thumb"', href_idx)
    if yt_thumb_idx == -1 or yt_thumb_idx > href_idx + 600:
        print(f'WARN: yt-thumb not found near "{handle}"')
        continue
    # Trouver le > de fermeture du div
    div_close = html.find('>', yt_thumb_idx)
    # Capturer l'attribut style actuel
    div_open = html[yt_thumb_idx:div_close+1]
    # Remplacer l'attribut style
    new_style = f'style="background-image:url(\'assets/img/ressources-cards/{img_name}\'); background-size:cover; background-position:center"'
    new_div = re.sub(r'style="[^"]*"', new_style, div_open)
    html = html[:yt_thumb_idx] + new_div + html[div_close+1:]
    print(f'  + youtube: {img_name}')

# ===== 4) PODCASTS (10) — remplacer background du .pod-cover =====
POD_REPLACEMENTS = [
    ('id1398261897',                                  'podcast-basketball-podcast.png'),
    ('slappinglass.com',                              'podcast-slappinglass.png'),
    ('basketformationpodcast',                        'podcast-basket-formation.png'),
    ('hardwoodhustle.com',                            'podcast-hardwood-hustle.png'),
    ('hoopheadspod.com',                              'podcast-hoop-heads.png'),
    ('dunkhebdo.fr',                                  'podcast-dunkhebdo.png'),
    ('basketball-coach-unplugged',                    'podcast-coach-unplugged.png'),
    ('basket-time/id1479013706',                      'podcast-basket-time.png'),
    ('@MindtheGame',                                  'podcast-mind-the-game.png'),
    ('soundcloud.com/ballerstalk',                    'podcast-ballers-talk.png'),
]
for needle, img_name in POD_REPLACEMENTS:
    href_idx = html.find(needle)
    if href_idx == -1:
        print(f'WARN: pod not found "{needle}"')
        continue
    pod_cover_idx = html.find('<div class="pod-cover"', href_idx)
    if pod_cover_idx == -1 or pod_cover_idx > href_idx + 600:
        print(f'WARN: pod-cover not found near "{needle}"')
        continue
    div_close = html.find('>', pod_cover_idx)
    div_open = html[pod_cover_idx:div_close+1]
    new_style = f'style="background-image:url(\'assets/img/ressources-cards/{img_name}\'); background-size:cover; background-position:center"'
    new_div = re.sub(r'style="[^"]*"', new_style, div_open)
    html = html[:pod_cover_idx] + new_div + html[div_close+1:]
    print(f'  + podcast: {img_name}')

# ===== 5) COACHS RÉSEAUX SOCIAUX (10) — remplacer background du .coach-cover =====
COACH_REPLACEMENTS = [
    ('dr__grind',              'coach-seidou-njoya.png'),
    ('timmartinbball',         'coach-tim-martin.png'),
    ('staley05',               'coach-dawn-staley.png'),
    ('jjredick',               'coach-jj-redick.png'),
    ('drewhanlen',             'coach-drew-hanlen.png'),
    ('officialbeckyhammon',    'coach-becky-hammon.png'),
    ('coachdanhurley',         'coach-dan-hurley.png'),
    ('ganonbaker/',            'coach-ganon-baker.png'),
    ('ucoachcal',              'coach-john-calipari.png'),
    ('SeidouMbomboofficiel',   'coach-steve-nash.png'),
]
for needle, img_name in COACH_REPLACEMENTS:
    href_idx = html.find(needle)
    if href_idx == -1:
        print(f'WARN: coach not found "{needle}"')
        continue
    coach_cover_idx = html.find('<div class="coach-cover"', href_idx)
    if coach_cover_idx == -1 or coach_cover_idx > href_idx + 800:
        print(f'WARN: coach-cover not found near "{needle}"')
        continue
    # Trouver la fin du div coach-cover (avec ses enfants) pour le remplacer en entier
    # Plus simple : remplacer juste le style/contenu du .coach-cover par un background-image
    # Trouver le </div> de fermeture du coach-cover en comptant les divs imbriqués
    pos = coach_cover_idx
    depth = 0
    end_pos = -1
    while pos < len(html):
        next_open = html.find('<div', pos)
        next_close = html.find('</div>', pos)
        if next_close == -1:
            break
        if next_open != -1 and next_open < next_close:
            depth += 1
            pos = next_open + 4
        else:
            depth -= 1
            if depth == 0:
                end_pos = next_close + 6
                break
            pos = next_close + 6
    if end_pos == -1:
        print(f'WARN: end of coach-cover not found for "{needle}"')
        continue
    # Remplacer le bloc complet par un seul div avec background-image
    new_block = f'<div class="coach-cover" style="background-image:url(\'assets/img/ressources-cards/{img_name}\'); background-size:cover; background-position:center; aspect-ratio:16/9"></div>'
    html = html[:coach_cover_idx] + new_block + html[end_pos:]
    print(f'  + coach: {img_name}')

# Sauvegarder
if html != original:
    with open(HTML_PATH, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"\nOK fichier mis a jour : {HTML_PATH}")
    print(f"   Difference : {len(html) - len(original)} caracteres ajoutes")
else:
    print("\nAucune modification appliquee.")
