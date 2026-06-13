"""
Ajoute un lien externe mis en evidence (nav-cta rouge) vers www.fecabasket.com
dans le menu de navigation de toutes les pages (FR + EN).

V2 : approche robuste qui parse la balise <ul class="nav-links"> et insere
le lien avant </ul>, peu importe le format du dernier <li>.
"""
import re
from pathlib import Path

SITE = Path(".")

# Bloc <li> à inserer
LI_FR = '            <li><a href="https://www.fecabasket.com" target="_blank" rel="noopener" class="nav-cta" title="Site officiel FECABASKET">🦁 fecabasket.com</a></li>\n        '
LI_EN = '            <li><a href="https://www.fecabasket.com" target="_blank" rel="noopener" class="nav-cta" title="Official FECABASKET website">🦁 fecabasket.com</a></li>\n        '

# Pattern : capture le contenu complet de <ul class="nav-links">...</ul>
PATTERN_NAV = re.compile(
    r'(<ul class="nav-links">)(.*?)(</ul>)',
    re.DOTALL | re.IGNORECASE
)

count_updated = 0
count_skipped = 0
count_failed = 0

for path in list(SITE.glob('*.html')) + list((SITE / 'en').glob('*.html')):
    txt = path.read_text(encoding='utf-8')
    is_en = path.parent.name == 'en'

    # Trouve le menu nav-links
    m = PATTERN_NAV.search(txt)
    if not m:
        print(f"  ! {path.relative_to(SITE)} : nav-links non trouve")
        count_failed += 1
        continue

    open_tag, content, close_tag = m.group(1), m.group(2), m.group(3)

    # Verifie si le lien externe est deja PRESENT DANS LE MENU (pas ailleurs)
    if 'fecabasket.com" target="_blank"' in content and 'class="nav-cta"' in content:
        print(f"  - {path.relative_to(SITE)} : deja present dans menu")
        count_skipped += 1
        continue

    # Insertion avant </ul>
    li_to_insert = LI_EN if is_en else LI_FR
    new_content = content.rstrip() + '\n' + li_to_insert
    new_block = open_tag + new_content + close_tag
    new_txt = txt.replace(m.group(0), new_block, 1)

    if new_txt != txt:
        path.write_text(new_txt, encoding='utf-8')
        count_updated += 1
        print(f"  ✓ {path.relative_to(SITE)}")
    else:
        count_failed += 1

print(f"\n=== {count_updated} pages mises a jour · {count_skipped} deja OK · {count_failed} echecs ===")
