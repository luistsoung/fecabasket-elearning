"""
Amélioration IA de la photo AfroCan 2023 Équipe Cameroun A'
- Super-résolution x3 (EDSR ou bicubic LANCZOS fallback)
- Sharpening (filtre de netteté adaptatif)
- Color enhancement (saturation, contraste, luminosité)
- Denoising (filtre bilatéral)
"""
import cv2
import numpy as np
import os
import sys
import urllib.request

SRC = r"C:\Users\pc\Desktop\equipe afrocan 2023 camroun a'.jpg"
DEST_DIR = r"C:\Users\pc\Desktop\e learning fecabasket 2027\fecabasket-elearning\site\assets\img"
DEST = os.path.join(DEST_DIR, "equipe-a-prime-afrocan-angola.jpeg")
MODELS_DIR = os.path.join(DEST_DIR, "_sr_models")
os.makedirs(MODELS_DIR, exist_ok=True)

# Modele EDSR x3 (meilleur compromis qualite/vitesse)
EDSR_URL = "https://github.com/Saafke/EDSR_Tensorflow/raw/master/models/EDSR_x3.pb"
EDSR_PATH = os.path.join(MODELS_DIR, "EDSR_x3.pb")

print(f"Lecture photo source : {SRC}")
img = cv2.imread(SRC)
if img is None:
    print("ERREUR : impossible de lire l'image")
    sys.exit(1)
print(f"  Dimensions source : {img.shape[1]}x{img.shape[0]}")

# ---- ETAPE 1 : SUPER-RESOLUTION ----
print("\n[1/4] Super-resolution x3 ...")
sr_done = False
try:
    if not os.path.exists(EDSR_PATH):
        print(f"  Telechargement du modele EDSR_x3 ...")
        urllib.request.urlretrieve(EDSR_URL, EDSR_PATH)
        print(f"  Modele telecharge ({os.path.getsize(EDSR_PATH)//1024} KB)")

    sr = cv2.dnn_superres.DnnSuperResImpl_create()
    sr.readModel(EDSR_PATH)
    sr.setModel("edsr", 3)
    upscaled = sr.upsample(img)
    sr_done = True
    print(f"  EDSR x3 reussi : {upscaled.shape[1]}x{upscaled.shape[0]}")
except Exception as e:
    print(f"  EDSR echec : {e}")
    print("  Fallback : LANCZOS x3")
    h, w = img.shape[:2]
    upscaled = cv2.resize(img, (w*3, h*3), interpolation=cv2.INTER_LANCZOS4)
    print(f"  LANCZOS x3 reussi : {upscaled.shape[1]}x{upscaled.shape[0]}")

# ---- ETAPE 2 : DENOISING (debruitage) ----
print("\n[2/4] Debruitage (Non-Local Means) ...")
denoised = cv2.fastNlMeansDenoisingColored(upscaled, None, h=5, hColor=5, templateWindowSize=7, searchWindowSize=21)

# ---- ETAPE 3 : SHARPENING (netteté) ----
print("\n[3/4] Renforcement de la nettete ...")
# Unsharp mask : original + alpha*(original - blurred)
blurred = cv2.GaussianBlur(denoised, (0, 0), sigmaX=2.5)
sharpened = cv2.addWeighted(denoised, 1.6, blurred, -0.6, 0)

# ---- ETAPE 4 : COLOR ENHANCEMENT ----
print("\n[4/4] Amelioration des couleurs (saturation, contraste) ...")
# Conversion LAB pour CLAHE sur L (luminance)
lab = cv2.cvtColor(sharpened, cv2.COLOR_BGR2LAB)
l, a, b = cv2.split(lab)
clahe = cv2.createCLAHE(clipLimit=1.5, tileGridSize=(8, 8))
l_enhanced = clahe.apply(l)
lab_enhanced = cv2.merge([l_enhanced, a, b])
enhanced = cv2.cvtColor(lab_enhanced, cv2.COLOR_LAB2BGR)

# Boost saturation legere via HSV
hsv = cv2.cvtColor(enhanced, cv2.COLOR_BGR2HSV).astype(np.float32)
hsv[:, :, 1] = np.clip(hsv[:, :, 1] * 1.12, 0, 255)
final = cv2.cvtColor(hsv.astype(np.uint8), cv2.COLOR_HSV2BGR)

# ---- SAUVEGARDE ----
print(f"\n  Sauvegarde : {DEST}")
cv2.imwrite(DEST, final, [cv2.IMWRITE_JPEG_QUALITY, 92])
size_kb = os.path.getsize(DEST) // 1024
print(f"  Fichier final : {final.shape[1]}x{final.shape[0]} ({size_kb} KB)")
print(f"\nOK Amelioration IA terminee")
print(f"  Source : {img.shape[1]}x{img.shape[0]}")
print(f"  Final  : {final.shape[1]}x{final.shape[0]} (x{final.shape[1]//img.shape[1]})")
print(f"  Methode : {'EDSR DL super-resolution' if sr_done else 'LANCZOS upscaling'} + debruitage + nettete + CLAHE + saturation")
