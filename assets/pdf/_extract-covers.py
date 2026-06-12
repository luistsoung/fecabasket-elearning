import fitz
import shutil
import os

SRC_DIR = r"C:\Users\pc\Desktop\e learning fecabasket 2027\manuels fiba"
PDF_DIR = r"C:\Users\pc\Desktop\e learning fecabasket 2027\fecabasket-elearning\site\assets\pdf"
COVER_DIR = r"C:\Users\pc\Desktop\e learning fecabasket 2027\fecabasket-elearning\site\assets\img\manuels\covers"

manuels = [
    ("FIBA WABC MANUEL MINI BASKET.pdf",          "mini-basket.pdf",     "mini-basket"),
    ("FIBA WABC MANUEL EDUCATEUR FECABASKET.pdf", "animateur.pdf",       "animateur"),
    ("FIBA WABC MANUEL DE L'ENTRAINEUR.pdf",      "moniteur.pdf",        "moniteur"),
    ("FIBA WABC MANUEL LEVEL1.pdf",               "niveau1.pdf",         "niveau1"),
    ("FIBA WABC MANUEL LEVEL 2.pdf",              "niveau2.pdf",         "niveau2"),
    ("FIBA WABC MANUEL LEVEL 3.pdf",              "niveau3.pdf",         "niveau3"),
    ("documents-corporate-wabc-start-coaching-fr-coach-workbook.pdf", "start-coaching-workbook.pdf", "start-coaching"),
]

for src_name, dst_pdf, cover_slug in manuels:
    src = os.path.join(SRC_DIR, src_name)
    dst = os.path.join(PDF_DIR, dst_pdf)
    cover = os.path.join(COVER_DIR, f"{cover_slug}.jpg")

    if not os.path.exists(src):
        print(f"MISSING: {src}")
        continue

    shutil.copy2(src, dst)
    print(f"COPIED: {dst_pdf} ({os.path.getsize(dst)//1024} KB)")

    doc = fitz.open(src)
    page = doc[0]
    mat = fitz.Matrix(1.8, 1.8)
    pix = page.get_pixmap(matrix=mat)
    pix.save(cover, jpg_quality=85)
    doc.close()
    print(f"  COVER: {cover_slug}.jpg ({os.path.getsize(cover)//1024} KB)")

print("DONE")
