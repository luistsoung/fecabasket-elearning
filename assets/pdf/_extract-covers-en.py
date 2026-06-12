import fitz
import urllib.request
import os
import tempfile

COVER_DIR = r"C:\Users\pc\Desktop\e learning fecabasket 2027\fecabasket-elearning\site\assets\img\manuels\covers"
os.makedirs(COVER_DIR, exist_ok=True)

manuals_en = [
    ("mini-basketball-en",   "https://assets.fiba.basketball/image/upload/documents-corporate-wabc-coaching-manual-mini-basketball-eng.pdf"),
    ("coaches-manual-en",    "https://assets.fiba.basketball/image/upload/documents-corporate-wabc-coaches-manual-eng.pdf"),
    ("level-1-en",           "https://assets.fiba.basketball/image/upload/documents-corporate-wabc-coaching-level-manuals-level-1-eng.pdf"),
    ("level-2-en",           "https://assets.fiba.basketball/image/upload/documents-corporate-wabc-coaching-manual-level-2-eng.pdf"),
    ("level-3-en",           "https://assets.fiba.basketball/image/upload/documents-corporate-wabc-coaching-manual-level-3-eng.pdf"),
    ("start-coaching-workbook-en", "https://assets.fiba.basketball/image/upload/documents-corporate-wabc-start-coaching-eng-coach-workbook.pdf"),
    ("start-coaching-practice-plans-en", "https://assets.fiba.basketball/image/upload/documents-corporate-wabc-start-coaching-eng-practice-plans.pdf"),
]

opener = urllib.request.build_opener()
opener.addheaders = [('User-Agent', 'Mozilla/5.0')]
urllib.request.install_opener(opener)

for slug, url in manuals_en:
    cover_path = os.path.join(COVER_DIR, f"{slug}.jpg")
    print(f"Fetching {slug}...")

    try:
        with tempfile.NamedTemporaryFile(suffix=".pdf", delete=False) as tf:
            tmp_path = tf.name
        urllib.request.urlretrieve(url, tmp_path)
        size_mb = os.path.getsize(tmp_path) / 1024 / 1024
        print(f"  Downloaded {size_mb:.1f} MB")

        doc = fitz.open(tmp_path)
        page = doc[0]
        mat = fitz.Matrix(1.8, 1.8)
        pix = page.get_pixmap(matrix=mat)
        pix.save(cover_path, jpg_quality=85)
        doc.close()
        os.unlink(tmp_path)

        kb = os.path.getsize(cover_path) // 1024
        print(f"  COVER saved: {slug}.jpg ({kb} KB)")
    except Exception as e:
        print(f"  ERROR for {slug}: {e}")

print("DONE")
