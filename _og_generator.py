"""
Génère l'image Open Graph (1200x630) pour partage WhatsApp/Facebook/X/LinkedIn.
Composition :
- Fond degrade vert FECABASKET
- Photo Jeremiah Hill (transparent PNG) à droite
- Logo FECABASKET en haut a gauche
- Titre + sous-titre
- Bande tricolore Cameroun en bas
"""
from PIL import Image, ImageDraw, ImageFont
import os

W, H = 1200, 630
OUT_FR = "assets/img/og/og-default.jpg"
OUT_EN = "assets/img/og/og-default-en.jpg"

# Versions carrées 1200x1200 — meilleur affichage WhatsApp/Instagram (grande preview verticale)
W_SQ, H_SQ = 1200, 1200
OUT_FR_SQ = "assets/img/og/og-square.jpg"
OUT_EN_SQ = "assets/img/og/og-square-en.jpg"


def gradient_bg(w, h):
    """Fond degrade vert FECABASKET (vert-fonce -> vert -> vert-clair en diagonale)."""
    img = Image.new('RGB', (w, h))
    for y in range(h):
        # Degrade vertical : vert tres fonce en haut → vert lumineux en bas
        ratio = y / h
        r = int(0   + (27 - 0)   * ratio)
        g = int(60  + (154 - 60) * ratio)
        b = int(25  + (80 - 25)  * ratio)
        for x in range(w):
            img.putpixel((x, y), (r, g, b))
    return img


def gradient_bg_fast(w, h, color1, color2):
    """Version optimisee : degrade vertical via numpy."""
    import numpy as np
    arr = np.zeros((h, w, 3), dtype=np.uint8)
    for y in range(h):
        t = y / h
        r = int(color1[0] + (color2[0] - color1[0]) * t)
        g = int(color1[1] + (color2[1] - color1[1]) * t)
        b = int(color1[2] + (color2[2] - color1[2]) * t)
        arr[y, :, :] = [r, g, b]
    return Image.fromarray(arr)


def make_og(out_path, title, subtitle, badge):
    # 1. Fond dégradé vert FECABASKET
    bg = gradient_bg_fast(W, H, (0, 60, 25), (15, 110, 50))

    # 2. Overlay decoratif : halo jaune en haut-droite
    overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    # Cercle radial jaune transparent
    draw.ellipse([W - 500, -200, W + 200, 400], fill=(252, 209, 22, 50))
    # Cercle radial rouge en bas-gauche
    draw.ellipse([-200, H - 350, 450, H + 150], fill=(206, 17, 38, 45))
    bg.paste(overlay, (0, 0), overlay)

    # 3. Photo Jeremiah Hill (PNG transparent) a droite
    jeremiah = Image.open("assets/img/jeremiah-hill.png").convert('RGBA')
    # Resize : hauteur cible 540px (laisser marge)
    target_h = 540
    ratio = target_h / jeremiah.height
    new_w = int(jeremiah.width * ratio)
    jeremiah = jeremiah.resize((new_w, target_h), Image.LANCZOS)
    # Position : aligné droite, bas
    jx = W - new_w - 40
    jy = H - target_h - 30
    bg.paste(jeremiah, (jx, jy), jeremiah)

    # 4. Logo FECABASKET en haut a gauche (cercle blanc autour)
    logo = Image.open("assets/img/logo-fecabasket.png").convert('RGBA')
    logo = logo.resize((90, 90), Image.LANCZOS)
    # Cercle blanc fond
    overlay2 = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    draw2 = ImageDraw.Draw(overlay2)
    draw2.ellipse([55, 55, 165, 165], fill=(255, 255, 255, 245))
    bg.paste(overlay2, (0, 0), overlay2)
    bg.paste(logo, (65, 65), logo)

    # 5. Textes
    draw = ImageDraw.Draw(bg)
    # Try multiple fonts (Windows fonts)
    fonts_to_try = [
        "C:/Windows/Fonts/segoeuib.ttf",  # Segoe UI Bold
        "C:/Windows/Fonts/arialbd.ttf",   # Arial Bold
        "C:/Windows/Fonts/calibrib.ttf",  # Calibri Bold
    ]
    fonts_regular = [
        "C:/Windows/Fonts/segoeui.ttf",
        "C:/Windows/Fonts/arial.ttf",
        "C:/Windows/Fonts/calibri.ttf",
    ]

    def load_font(paths, size):
        for p in paths:
            if os.path.exists(p):
                return ImageFont.truetype(p, size)
        return ImageFont.load_default()

    font_brand = load_font(fonts_to_try, 28)
    font_title = load_font(fonts_to_try, 64)
    font_sub = load_font(fonts_regular, 32)
    font_badge = load_font(fonts_to_try, 22)

    # Brand "FECABASKET" a cote du logo
    draw.text((180, 75), "FECABASKET", fill=(255, 255, 255), font=font_brand)
    draw.text((180, 110), "E-Learning DTN", fill=(252, 209, 22), font=font_brand)

    # Titre principal (avec retour à la ligne automatique)
    draw.text((65, 220), title, fill=(255, 255, 255), font=font_title)

    # Sous-titre
    draw.text((65, 310), subtitle, fill=(252, 209, 22), font=font_sub)

    # Badge
    badge_y = 380
    # Boite badge
    draw.rectangle([65, badge_y, 65 + 320, badge_y + 38], fill=(206, 17, 38, 255))
    draw.text((80, badge_y + 6), badge, fill=(255, 255, 255), font=font_badge)

    # 6. Bande tricolore Cameroun en bas
    band_h = 22
    draw.rectangle([0, H - band_h, W // 3, H], fill=(0, 122, 51))         # Vert
    draw.rectangle([W // 3, H - band_h, 2 * W // 3, H], fill=(206, 17, 38))  # Rouge
    draw.rectangle([2 * W // 3, H - band_h, W, H], fill=(252, 209, 22))     # Jaune

    # 7. Save
    bg.save(out_path, 'JPEG', quality=92, optimize=True)
    size = os.path.getsize(out_path) / 1024
    print(f"  Cree : {out_path} ({size:.0f} Ko · {W}x{H})")


make_og(OUT_FR,
        title="Formez-vous au Basket",
        subtitle="Plateforme officielle des entraineurs camerounais",
        badge="5 NIVEAUX FIBA WABC  ·  100% GRATUIT")

make_og(OUT_EN,
        title="Cameroonian Basketball",
        subtitle="Official platform for Cameroonian coaches",
        badge="5 FIBA WABC LEVELS  ·  100% FREE")


# =====================================================================
# Version CARRÉE 1200x1200 — preview WhatsApp/Instagram en grand format
# =====================================================================
def make_og_square(out_path, title, subtitle, badge):
    """Version carrée 1200x1200, optimale pour WhatsApp grande preview verticale."""
    bg = gradient_bg_fast(W_SQ, H_SQ, (0, 60, 25), (15, 110, 50))

    # Halos décoratifs
    overlay = Image.new('RGBA', (W_SQ, H_SQ), (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    d.ellipse([W_SQ - 600, -300, W_SQ + 300, 500], fill=(252, 209, 22, 50))
    d.ellipse([-300, H_SQ - 500, 600, H_SQ + 200], fill=(206, 17, 38, 45))
    bg.paste(overlay, (0, 0), overlay)

    # Photo Jeremiah Hill centrée et grande (hauteur 750)
    jeremiah = Image.open("assets/img/jeremiah-hill.png").convert('RGBA')
    target_h = 750
    ratio = target_h / jeremiah.height
    new_w = int(jeremiah.width * ratio)
    jeremiah = jeremiah.resize((new_w, target_h), Image.LANCZOS)
    jx = (W_SQ - new_w) // 2
    jy = 360  # Sous le bloc texte
    bg.paste(jeremiah, (jx, jy), jeremiah)

    # Logo + brand en haut (centré)
    logo = Image.open("assets/img/logo-fecabasket.png").convert('RGBA')
    logo = logo.resize((110, 110), Image.LANCZOS)
    overlay2 = Image.new('RGBA', (W_SQ, H_SQ), (0, 0, 0, 0))
    d2 = ImageDraw.Draw(overlay2)
    # Cercle blanc fond pour logo
    d2.ellipse([60, 60, 200, 200], fill=(255, 255, 255, 245))
    bg.paste(overlay2, (0, 0), overlay2)
    bg.paste(logo, (75, 75), logo)

    # Polices
    fonts_to_try = [
        "C:/Windows/Fonts/segoeuib.ttf",
        "C:/Windows/Fonts/arialbd.ttf",
        "C:/Windows/Fonts/calibrib.ttf",
    ]
    fonts_regular = [
        "C:/Windows/Fonts/segoeui.ttf",
        "C:/Windows/Fonts/arial.ttf",
        "C:/Windows/Fonts/calibri.ttf",
    ]

    def load_font(paths, size):
        for p in paths:
            if os.path.exists(p):
                return ImageFont.truetype(p, size)
        return ImageFont.load_default()

    font_brand = load_font(fonts_to_try, 34)
    font_title = load_font(fonts_to_try, 88)
    font_sub = load_font(fonts_regular, 40)
    font_badge = load_font(fonts_to_try, 28)

    draw = ImageDraw.Draw(bg)

    # Brand FECABASKET à côté du logo
    draw.text((220, 80), "FECABASKET", fill=(255, 255, 255), font=font_brand)
    draw.text((220, 130), "E-Learning DTN", fill=(252, 209, 22), font=font_brand)

    # Titre (centré largement)
    draw.text((60, 230), title, fill=(255, 255, 255), font=font_title)

    # Sous-titre
    draw.text((60, 330), subtitle, fill=(252, 209, 22), font=font_sub)

    # Badge en bas (au-dessus du drapeau)
    badge_y = H_SQ - 110
    draw.rectangle([60, badge_y, 60 + 540, badge_y + 50], fill=(206, 17, 38, 255))
    draw.text((78, badge_y + 8), badge, fill=(255, 255, 255), font=font_badge)

    # Bande tricolore en bas
    band_h = 32
    draw.rectangle([0, H_SQ - band_h, W_SQ // 3, H_SQ], fill=(0, 122, 51))
    draw.rectangle([W_SQ // 3, H_SQ - band_h, 2 * W_SQ // 3, H_SQ], fill=(206, 17, 38))
    draw.rectangle([2 * W_SQ // 3, H_SQ - band_h, W_SQ, H_SQ], fill=(252, 209, 22))

    bg.save(out_path, 'JPEG', quality=92, optimize=True)
    size = os.path.getsize(out_path) / 1024
    print(f"  Cree : {out_path} ({size:.0f} Ko · {W_SQ}x{H_SQ})")


make_og_square(OUT_FR_SQ,
               title="Formez-vous",
               subtitle="au Basket made in Cameroon",
               badge="5 NIVEAUX FIBA WABC  ·  100% GRATUIT")

make_og_square(OUT_EN_SQ,
               title="Cameroonian",
               subtitle="Basketball Coaching Platform",
               badge="5 FIBA WABC LEVELS  ·  100% FREE")

print("OG images generees avec succes.")
