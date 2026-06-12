# -*- coding: utf-8 -*-
"""Génère 5 prototypes d'images d'aperçu pour la section Ressources."""
from PIL import Image, ImageDraw, ImageFont
import os, math

def hex_to_rgb(h):
    h = h.lstrip('#')
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

def load_font(size, bold=False):
    candidates = [
        'C:/Windows/Fonts/segoeuib.ttf' if bold else 'C:/Windows/Fonts/segoeui.ttf',
        'C:/Windows/Fonts/arialbd.ttf' if bold else 'C:/Windows/Fonts/arial.ttf',
    ]
    for f in candidates:
        if os.path.exists(f):
            return ImageFont.truetype(f, size)
    return ImageFont.load_default()

def make_linear_gradient(w, h, color1, color2, angle=135):
    img = Image.new('RGB', (w, h), color1)
    pixels = img.load()
    rad = math.radians(angle)
    dx, dy = math.cos(rad), math.sin(rad)
    proj_min = min(0, dx * w + dy * h)
    proj_max = max(0, dx * w + dy * h)
    for y in range(h):
        for x in range(w):
            t = ((dx * x + dy * y) - proj_min) / (proj_max - proj_min)
            t = max(0, min(1, t))
            pixels[x, y] = tuple(int(color1[i] * (1 - t) + color2[i] * t) for i in range(3))
    return img

W, H = 480, 270

# === PROTO 1 : Plateforme FIBA ===
img = make_linear_gradient(W, H, hex_to_rgb('#007A33'), hex_to_rgb('#004D1F'), 135)
draw = ImageDraw.Draw(img, 'RGBA')
draw.rectangle([24, 24, 96, 36], fill=(252, 209, 22))
draw.text((104, 30), 'OFFICIEL FIBA', font=load_font(13, True), fill=(252, 209, 22), anchor='lm')
# Globe stylisé
cx, cy = W//2, H//2 - 20
draw.ellipse([cx-60, cy-60, cx+60, cy+60], outline=(252, 209, 22, 180), width=4)
draw.line([(cx-60, cy), (cx+60, cy)], fill=(252, 209, 22, 180), width=2)
draw.line([(cx, cy-60), (cx, cy+60)], fill=(252, 209, 22, 180), width=2)
draw.arc([cx-70, cy-45, cx+70, cy+45], 0, 360, fill=(252, 209, 22, 100), width=1)
draw.text((W//2, H-30), 'FIBA WABC', font=load_font(28, True), fill=(255, 255, 255), anchor='mm')
img.save('proto-platform-fiba.png', 'PNG', optimize=True)

# === PROTO 2 : Site coach ===
img = make_linear_gradient(W, H, hex_to_rgb('#1e88e5'), hex_to_rgb('#0d47a1'), 135)
draw = ImageDraw.Draw(img, 'RGBA')
# Hexagone
cx, cy = W//2, H//2 - 10
r = 110
pts = [(cx + r*math.cos(math.radians(60*i + 30)), cy + r*math.sin(math.radians(60*i + 30))) for i in range(6)]
draw.polygon(pts, outline=(255, 255, 255, 60), width=3)
# Rang
draw.rectangle([0, 0, 80, 80], fill=(252, 209, 22))
draw.text((40, 40), '01', font=load_font(36, True), fill=(0, 0, 0), anchor='mm')
draw.text((W//2, cy-15), 'BREAKTHROUGH', font=load_font(22, True), fill=(255, 255, 255), anchor='mm')
draw.text((W//2, cy+15), 'BASKETBALL', font=load_font(22, True), fill=(252, 209, 22), anchor='mm')
draw.text((W//2, H-26), 'Drills & plays  |  EN', font=load_font(13), fill=(255, 255, 255, 220), anchor='mm')
img.save('proto-site-coach.png', 'PNG', optimize=True)

# === PROTO 3 : YouTube ===
img = make_linear_gradient(W, H, hex_to_rgb('#ff7e00'), hex_to_rgb('#c62828'), 135)
draw = ImageDraw.Draw(img, 'RGBA')
for i in range(-H, W+H, 36):
    draw.line([(i, 0), (i+H, H)], fill=(255, 255, 255, 12), width=18)
cx, cy = W//2, H//2 - 20
draw.ellipse([cx-50, cy-50, cx+50, cy+50], fill=(255, 0, 0, 240))
tri = [(cx-12, cy-22), (cx-12, cy+22), (cx+24, cy)]
draw.polygon(tri, fill=(255, 255, 255))
draw.rectangle([W-80, 0, W, 50], fill=(0, 0, 0, 200))
draw.text((W-40, 25), '01', font=load_font(20, True), fill=(252, 209, 22), anchor='mm')
draw.text((W//2, H-46), 'FIBA', font=load_font(28, True), fill=(255, 255, 255), anchor='mm')
draw.text((W//2, H-22), 'Chaine officielle', font=load_font(12), fill=(255, 255, 255, 220), anchor='mm')
img.save('proto-youtube.png', 'PNG', optimize=True)

# === PROTO 4 : Podcast ===
img = make_linear_gradient(W, H, hex_to_rgb('#f57c00'), hex_to_rgb('#c8102e'), 135)
draw = ImageDraw.Draw(img, 'RGBA')
cx, cy = W//2, H//2
for rr in range(40, 200, 22):
    draw.arc([cx-rr, cy-rr, cx+rr, cy+rr], 200, 340, fill=(255, 255, 255, 70), width=2)
# Micro
mw, mh = 50, 80
mx, my = cx, cy - 20
draw.rounded_rectangle([mx-mw//2, my-mh//2, mx+mw//2, my+mh//2], radius=24, fill=(252, 209, 22))
draw.line([(mx, my+mh//2), (mx, my+mh//2+20)], fill=(252, 209, 22), width=4)
draw.line([(mx-20, my+mh//2+20), (mx+20, my+mh//2+20)], fill=(252, 209, 22), width=4)
draw.rectangle([0, 0, 70, 50], fill=(0, 0, 0, 200))
draw.text((35, 25), '01', font=load_font(20, True), fill=(252, 209, 22), anchor='mm')
draw.text((W//2, H-46), 'BASKETBALL PODCAST', font=load_font(17, True), fill=(255, 255, 255), anchor='mm')
draw.text((W//2, H-24), 'Chris Oliver - Coaching', font=load_font(12), fill=(255, 255, 255, 220), anchor='mm')
img.save('proto-podcast.png', 'PNG', optimize=True)

# === PROTO 5 : Coach social ===
img = make_linear_gradient(W, H, hex_to_rgb('#007A33'), hex_to_rgb('#FCD116'), 135)
draw = ImageDraw.Draw(img, 'RGBA')
mx, my = W//2, H//2 - 10
draw.ellipse([mx-65, my-65, mx+65, my+65], fill=(255, 255, 255, 240), outline=(206, 17, 38), width=5)
draw.text((mx, my), 'SN', font=load_font(48, True), fill=(0, 77, 31), anchor='mm')
# Drapeau Cameroun en bas
fy = H - 60
draw.rectangle([0, fy, W//3, H], fill=(0, 122, 51))
draw.rectangle([W//3, fy, 2*W//3, H], fill=(206, 17, 38))
draw.rectangle([2*W//3, fy, W, H], fill=(252, 209, 22))
# Étoile
sx, sy = W//2, fy + 30
star_pts = []
for i in range(10):
    angle = math.radians(-90 + i * 36)
    rr = 11 if i % 2 == 0 else 5
    star_pts.append((sx + rr*math.cos(angle), sy + rr*math.sin(angle)))
draw.polygon(star_pts, fill=(252, 209, 22))
draw.rectangle([0, 0, 70, 50], fill=(0, 0, 0, 200))
draw.text((35, 25), '01', font=load_font(20, True), fill=(252, 209, 22), anchor='mm')
draw.text((W//2, 36), 'SEIDOU NJOYA', font=load_font(18, True), fill=(255, 255, 255), anchor='mm')
img.save('proto-coach-social.png', 'PNG', optimize=True)

print('5 prototypes generes')
for f in ['proto-platform-fiba.png', 'proto-site-coach.png', 'proto-youtube.png', 'proto-podcast.png', 'proto-coach-social.png']:
    print(f, os.path.getsize(f) // 1024, 'Ko')
