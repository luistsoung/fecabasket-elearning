# -*- coding: utf-8 -*-
"""Génère les 44 images d'entrée pour la section Ressources."""
from PIL import Image, ImageDraw, ImageFont
import os, math

def hx(h):
    h = h.lstrip('#')
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

def font(size, bold=False):
    for f in [
        'C:/Windows/Fonts/segoeuib.ttf' if bold else 'C:/Windows/Fonts/segoeui.ttf',
        'C:/Windows/Fonts/arialbd.ttf' if bold else 'C:/Windows/Fonts/arial.ttf',
    ]:
        if os.path.exists(f):
            return ImageFont.truetype(f, size)
    return ImageFont.load_default()

def grad(w, h, c1, c2, angle=135):
    img = Image.new('RGB', (w, h), c1)
    px = img.load()
    rad = math.radians(angle)
    dx, dy = math.cos(rad), math.sin(rad)
    pmin = min(0, dx*w + dy*h); pmax = max(0, dx*w + dy*h)
    for y in range(h):
        for x in range(w):
            t = max(0, min(1, ((dx*x + dy*y) - pmin) / (pmax - pmin)))
            px[x, y] = tuple(int(c1[i]*(1-t) + c2[i]*t) for i in range(3))
    return img

def fit_text(draw, text, max_w, base_size, bold=True, max_iter=6):
    size = base_size
    f = font(size, bold)
    while size > 12 and draw.textlength(text, font=f) > max_w:
        size -= 2
        f = font(size, bold)
    return f

W, H = 480, 270

# ===== 1) PLATEFORMES FIBA (4) =====
PLATFORMS = [
    {'slug': 'wabc-platform',     'name': 'FIBA WABC',        'tag': 'OFFICIEL FIBA',   'c1': '#007A33', 'c2': '#004D1F'},
    {'slug': 'wabc-source',       'name': 'Source WABC',      'tag': 'TELECHARGEMENTS', 'c1': '#CE1126', 'c2': '#7a0a1c'},
    {'slug': 'fiba-africa',       'name': 'FIBA Africa',      'tag': 'CONTINENT',       'c1': '#FCD116', 'c2': '#c9a514', 'fg': '#000000'},
    {'slug': 'fiba-coaching-app', 'name': 'FIBA Coaching',    'tag': 'APPLICATION',     'c1': '#1565c0', 'c2': '#0d47a1'},
]
for p in PLATFORMS:
    img = grad(W, H, hx(p['c1']), hx(p['c2']))
    d = ImageDraw.Draw(img, 'RGBA')
    fg = hx(p.get('fg', '#FCD116'))
    d.rectangle([24, 24, 96, 36], fill=fg)
    d.text((104, 30), p['tag'], font=font(13, True), fill=fg, anchor='lm')
    cx, cy = W//2, H//2 - 20
    d.ellipse([cx-60, cy-60, cx+60, cy+60], outline=fg + (180,), width=4)
    d.line([(cx-60, cy), (cx+60, cy)], fill=fg + (180,), width=2)
    d.line([(cx, cy-60), (cx, cy+60)], fill=fg + (180,), width=2)
    d.arc([cx-70, cy-45, cx+70, cy+45], 0, 360, fill=fg + (100,), width=1)
    f = fit_text(d, p['name'], W-60, 28)
    d.text((W//2, H-30), p['name'], font=f, fill=(255, 255, 255), anchor='mm')
    img.save(f"platform-{p['slug']}.png", 'PNG', optimize=True)

# ===== 2) SITES COACHS (10) =====
SITES = [
    {'slug': 'breakthrough',   'name1': 'BREAKTHROUGH',   'name2': 'BASKETBALL',    'tag': 'Drills & plays  |  EN',      'c1': '#1e88e5', 'c2': '#0d47a1', 'rank': '01'},
    {'slug': 'hoopsgeek',      'name1': 'THE HOOPS',      'name2': 'GEEK',          'tag': '121+ plays animes  |  EN',    'c1': '#e53935', 'c2': '#b71c1c', 'rank': '02'},
    {'slug': 'fastmodel',      'name1': 'FASTMODEL',      'name2': 'SPORTS',        'tag': 'Standard NBA/NCAA  |  EN',    'c1': '#1565c0', 'c2': '#0d47a1', 'rank': '03'},
    {'slug': 'basketball-ref', 'name1': 'BASKETBALL',     'name2': 'REFERENCE',     'tag': 'Statistiques  |  EN',          'c1': '#0d47a1', 'c2': '#082c69', 'rank': '04'},
    {'slug': 'usab',           'name1': 'USA',            'name2': 'BASKETBALL',    'tag': 'Coaching officiel  |  EN',     'c1': '#c62828', 'c2': '#8b1a1a', 'rank': '05'},
    {'slug': 'clipboard',      'name1': 'COACH\'S',       'name2': 'CLIPBOARD',     'tag': 'Playbook gratuit  |  EN',      'c1': '#2e7d32', 'c2': '#1b5e20', 'rank': '06'},
    {'slug': 'fecabasket',     'name1': 'FECA',           'name2': 'BASKET',        'tag': 'Federation Camerounaise  |  FR', 'c1': '#007A33', 'c2': '#004D1F', 'rank': '07'},
    {'slug': 'basketsession',  'name1': 'BASKET',         'name2': 'SESSION',       'tag': 'N1 francophone  |  FR',         'c1': '#f57c00', 'c2': '#bf5f00', 'rank': '08'},
    {'slug': 'hoopcoach',      'name1': 'HOOP',           'name2': 'COACH',         'tag': 'Plays partages  |  EN',         'c1': '#6a1b9a', 'c2': '#4a148c', 'rank': '09'},
    {'slug': 'manitoba',       'name1': 'BASKETBALL',     'name2': 'MANITOBA',      'tag': 'Coach Stace  |  CA',            'c1': '#d32f2f', 'c2': '#9c1818', 'rank': '10'},
]
for s in SITES:
    img = grad(W, H, hx(s['c1']), hx(s['c2']))
    d = ImageDraw.Draw(img, 'RGBA')
    cx, cy = W//2, H//2 - 10
    r = 110
    pts = [(cx + r*math.cos(math.radians(60*i + 30)), cy + r*math.sin(math.radians(60*i + 30))) for i in range(6)]
    d.polygon(pts, outline=(255, 255, 255, 60), width=3)
    d.rectangle([0, 0, 80, 80], fill=(252, 209, 22))
    d.text((40, 40), s['rank'], font=font(36, True), fill=(0, 0, 0), anchor='mm')
    f1 = fit_text(d, s['name1'], W-60, 22)
    f2 = fit_text(d, s['name2'], W-60, 22)
    d.text((W//2, cy-15), s['name1'], font=f1, fill=(255, 255, 255), anchor='mm')
    d.text((W//2, cy+15), s['name2'], font=f2, fill=(252, 209, 22), anchor='mm')
    d.text((W//2, H-26), s['tag'], font=font(13), fill=(255, 255, 255, 220), anchor='mm')
    img.save(f"site-{s['slug']}.png", 'PNG', optimize=True)

# ===== 3) YOUTUBE (10) =====
YOUTUBES = [
    {'slug': 'fiba',          'name': 'FIBA',                'sub': 'Chaine officielle',     'c1': '#ff7e00', 'c2': '#c62828', 'rank': '01'},
    {'slug': 'nba',           'name': 'NBA',                 'sub': '21M abonnes',           'c1': '#1d428a', 'c2': '#c8102e', 'rank': '02'},
    {'slug': 'breakthroughyt','name': 'BREAKTHROUGH',        'sub': 'Pedagogie',             'c1': '#1e88e5', 'c2': '#1565c0', 'rank': '03'},
    {'slug': 'hoopsking',     'name': 'HOOPSKING',           'sub': 'Drills techniques',     'c1': '#d32f2f', 'c2': '#6a1b9a', 'rank': '04'},
    {'slug': 'ganonbaker',    'name': 'GANON BAKER',         'sub': 'Player development',    'c1': '#2e7d32', 'c2': '#1b5e20', 'rank': '05'},
    {'slug': 'puresweat',     'name': 'PURE SWEAT',          'sub': 'Drew Hanlen',           'c1': '#ef6c00', 'c2': '#e65100', 'rank': '06'},
    {'slug': 'bballbreakdown','name': 'BBALL BREAKDOWN',     'sub': 'Coach Nick',            'c1': '#424242', 'c2': '#212121', 'rank': '07'},
    {'slug': 'ffbb',          'name': 'FFBB',                'sub': 'Federation France',     'c1': '#1976d2', 'c2': '#0d47a1', 'rank': '08'},
    {'slug': 'nba-france',    'name': 'NBA FRANCE',          'sub': 'Commentaires FR',       'c1': '#1d428a', 'c2': '#c8102e', 'rank': '09'},
    {'slug': 'coachdaniel',   'name': 'COACH DANIEL',        'sub': 'Youth & drills',        'c1': '#f57c00', 'c2': '#ef6c00', 'rank': '10'},
]
for y in YOUTUBES:
    img = grad(W, H, hx(y['c1']), hx(y['c2']))
    d = ImageDraw.Draw(img, 'RGBA')
    for i in range(-H, W+H, 36):
        d.line([(i, 0), (i+H, H)], fill=(255, 255, 255, 12), width=18)
    cx, cy = W//2, H//2 - 20
    d.ellipse([cx-50, cy-50, cx+50, cy+50], fill=(255, 0, 0, 240))
    d.polygon([(cx-12, cy-22), (cx-12, cy+22), (cx+24, cy)], fill=(255, 255, 255))
    d.rectangle([W-80, 0, W, 50], fill=(0, 0, 0, 200))
    d.text((W-40, 25), y['rank'], font=font(20, True), fill=(252, 209, 22), anchor='mm')
    f = fit_text(d, y['name'], W-60, 28)
    d.text((W//2, H-46), y['name'], font=f, fill=(255, 255, 255), anchor='mm')
    d.text((W//2, H-22), y['sub'], font=font(12), fill=(255, 255, 255, 220), anchor='mm')
    img.save(f"youtube-{y['slug']}.png", 'PNG', optimize=True)

# ===== 4) PODCASTS (10) =====
PODCASTS = [
    {'slug': 'basketball-podcast', 'name': 'BASKETBALL PODCAST',   'host': 'Chris Oliver',       'c1': '#f57c00', 'c2': '#c8102e', 'rank': '01'},
    {'slug': 'slappinglass',       'name': 'SLAPPIN GLASS',         'host': 'Carney & Krikorian', 'c1': '#1565c0', 'c2': '#0d47a1', 'rank': '02'},
    {'slug': 'basket-formation',   'name': 'BASKET FORMATION',      'host': 'Adrien Hardy - FR',  'c1': '#1976d2', 'c2': '#c8102e', 'rank': '03'},
    {'slug': 'hardwood-hustle',    'name': 'HARDWOOD HUSTLE',       'host': 'TJ Rosene - PGC',    'c1': '#2e7d32', 'c2': '#1b5e20', 'rank': '04'},
    {'slug': 'hoop-heads',         'name': 'HOOP HEADS',            'host': '1000+ episodes',     'c1': '#6a1b9a', 'c2': '#4a148c', 'rank': '05'},
    {'slug': 'dunkhebdo',          'name': 'DUNKHEBDO NBA',         'host': 'Hebdo francais',     'c1': '#d32f2f', 'c2': '#b71c1c', 'rank': '06'},
    {'slug': 'coach-unplugged',    'name': 'COACH UNPLUGGED',       'host': 'Steve Collins',      'c1': '#424242', 'c2': '#212121', 'rank': '07'},
    {'slug': 'basket-time',        'name': 'BASKET TIME',           'host': 'RMC - Dorian, Weis', 'c1': '#f57c00', 'c2': '#e65100', 'rank': '08'},
    {'slug': 'mind-the-game',      'name': 'MIND THE GAME',         'host': 'LeBron & Nash',      'c1': '#1d428a', 'c2': '#c8102e', 'rank': '09'},
    {'slug': 'ballers-talk',       'name': 'BALLERS TALK',          'host': 'Frederic Yang',      'c1': '#1976d2', 'c2': '#1565c0', 'rank': '10'},
]
for p in PODCASTS:
    img = grad(W, H, hx(p['c1']), hx(p['c2']))
    d = ImageDraw.Draw(img, 'RGBA')
    cx, cy = W//2, H//2
    for rr in range(40, 200, 22):
        d.arc([cx-rr, cy-rr, cx+rr, cy+rr], 200, 340, fill=(255, 255, 255, 70), width=2)
    mw, mh = 50, 80
    mx, my = cx, cy - 20
    d.rounded_rectangle([mx-mw//2, my-mh//2, mx+mw//2, my+mh//2], radius=24, fill=(252, 209, 22))
    d.line([(mx, my+mh//2), (mx, my+mh//2+20)], fill=(252, 209, 22), width=4)
    d.line([(mx-20, my+mh//2+20), (mx+20, my+mh//2+20)], fill=(252, 209, 22), width=4)
    d.rectangle([0, 0, 70, 50], fill=(0, 0, 0, 200))
    d.text((35, 25), p['rank'], font=font(20, True), fill=(252, 209, 22), anchor='mm')
    f = fit_text(d, p['name'], W-60, 17)
    d.text((W//2, H-46), p['name'], font=f, fill=(255, 255, 255), anchor='mm')
    d.text((W//2, H-24), p['host'], font=font(12), fill=(255, 255, 255, 220), anchor='mm')
    img.save(f"podcast-{p['slug']}.png", 'PNG', optimize=True)

# ===== 5) COACHS RÉSEAUX SOCIAUX (10) =====
# Drapeau : 'CMR' (vert/rouge/jaune), 'USA' (rouge/blanc/bleu), 'CAN' (rouge/blanc/rouge), 'INT' (vert dégradé)
COACHS = [
    {'slug': 'seidou-njoya',   'name': 'SEIDOU NJOYA',     'initials': 'SN', 'flag': 'CMR', 'c1': '#007A33', 'c2': '#FCD116', 'rank': '01'},
    {'slug': 'tim-martin',     'name': 'TIM MARTIN',       'initials': 'TM', 'flag': 'USA', 'c1': '#000000', 'c2': '#c4ced4', 'rank': '02'},
    {'slug': 'dawn-staley',    'name': 'DAWN STALEY',      'initials': 'DS', 'flag': 'USA', 'c1': '#73000a', 'c2': '#f1c40f', 'rank': '03'},
    {'slug': 'jj-redick',      'name': 'JJ REDICK',        'initials': 'JJ', 'flag': 'USA', 'c1': '#552583', 'c2': '#FDB927', 'rank': '04'},
    {'slug': 'drew-hanlen',    'name': 'DREW HANLEN',      'initials': 'DH', 'flag': 'USA', 'c1': '#ef6c00', 'c2': '#e65100', 'rank': '05'},
    {'slug': 'becky-hammon',   'name': 'BECKY HAMMON',     'initials': 'BH', 'flag': 'USA', 'c1': '#000000', 'c2': '#BAC3C9', 'rank': '06'},
    {'slug': 'dan-hurley',     'name': 'DAN HURLEY',       'initials': 'DH', 'flag': 'USA', 'c1': '#0c2340', 'c2': '#e4002b', 'rank': '07'},
    {'slug': 'ganon-baker',    'name': 'GANON BAKER',      'initials': 'GB', 'flag': 'INT', 'c1': '#2e7d32', 'c2': '#1b5e20', 'rank': '08'},
    {'slug': 'john-calipari',  'name': 'JOHN CALIPARI',    'initials': 'JC', 'flag': 'USA', 'c1': '#9d2235', 'c2': '#ffffff', 'rank': '09'},
    {'slug': 'steve-nash',     'name': 'STEVE NASH',       'initials': 'SN', 'flag': 'CAN', 'c1': '#1976d2', 'c2': '#0d47a1', 'rank': '10'},
]
def draw_flag(d, kind, x, y, w, h):
    if kind == 'CMR':
        d.rectangle([x, y, x+w//3, y+h], fill=(0, 122, 51))
        d.rectangle([x+w//3, y, x+2*w//3, y+h], fill=(206, 17, 38))
        d.rectangle([x+2*w//3, y, x+w, y+h], fill=(252, 209, 22))
        sx, sy = x + w//2, y + h//2
        pts = []
        for i in range(10):
            a = math.radians(-90 + i * 36)
            rr = 11 if i % 2 == 0 else 5
            pts.append((sx + rr*math.cos(a), sy + rr*math.sin(a)))
        d.polygon(pts, fill=(252, 209, 22))
    elif kind == 'USA':
        # 13 bandes
        sh = h / 13
        for i in range(13):
            d.rectangle([x, y+i*sh, x+w, y+(i+1)*sh], fill=(178, 34, 52) if i % 2 == 0 else (255, 255, 255))
        d.rectangle([x, y, x+w*0.4, y+h*0.54], fill=(60, 59, 110))
    elif kind == 'CAN':
        d.rectangle([x, y, x+w//4, y+h], fill=(255, 0, 0))
        d.rectangle([x+w//4, y, x+3*w//4, y+h], fill=(255, 255, 255))
        d.rectangle([x+3*w//4, y, x+w, y+h], fill=(255, 0, 0))
        # Feuille d'érable simplifiée (juste un losange rouge)
        cx2, cy2 = x + w//2, y + h//2
        d.polygon([(cx2, cy2-12), (cx2+10, cy2), (cx2, cy2+12), (cx2-10, cy2)], fill=(255, 0, 0))
    elif kind == 'INT':
        # Gradient continent (vert)
        for i in range(h):
            t = i / h
            r = int(46*(1-t) + 27*t)
            g = int(125*(1-t) + 94*t)
            b = int(50*(1-t) + 32*t)
            d.line([(x, y+i), (x+w, y+i)], fill=(r, g, b))
        # Globe
        cx2, cy2 = x + w//2, y + h//2
        d.ellipse([cx2-14, cy2-14, cx2+14, cy2+14], outline=(252, 209, 22), width=2)

for c in COACHS:
    img = grad(W, H, hx(c['c1']), hx(c['c2']))
    d = ImageDraw.Draw(img, 'RGBA')
    mx, my = W//2, H//2 - 10
    d.ellipse([mx-65, my-65, mx+65, my+65], fill=(255, 255, 255, 240), outline=(206, 17, 38), width=5)
    d.text((mx, my), c['initials'], font=font(48, True), fill=hx(c['c1']), anchor='mm')
    draw_flag(d, c['flag'], 0, H-60, W, 60)
    d.rectangle([0, 0, 70, 50], fill=(0, 0, 0, 200))
    d.text((35, 25), c['rank'], font=font(20, True), fill=(252, 209, 22), anchor='mm')
    f = fit_text(d, c['name'], W-30, 18)
    d.text((W//2, 36), c['name'], font=f, fill=(255, 255, 255), anchor='mm')
    img.save(f"coach-{c['slug']}.png", 'PNG', optimize=True)

# Compter
files = [f for f in os.listdir('.') if f.endswith('.png') and not f.startswith('proto-')]
total_size = sum(os.path.getsize(f) for f in files)
print(f"{len(files)} images generees - total {total_size//1024} Ko")
