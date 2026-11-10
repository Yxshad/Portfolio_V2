#!/usr/bin/env python3
"""Generate the downloadable cover-letter PDFs from src/data/targetSchools.json.

Usage (from the project root):  python3 scripts/build_cover_letters.py
Requires LibreOffice (`libreoffice` or `soffice`) on the PATH.
Outputs to public/cover-letters/.
"""
import html
import json
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "src" / "data" / "targetSchools.json"
OUT = ROOT / "public" / "cover-letters"
# Kept inside the project because snap-packaged LibreOffice cannot read the host /tmp.
TMP = ROOT / ".cover-letters-build"

SENDER = ["Elsa Lavergne", "Engineering student – ENSEEIHT, Toulouse INP", "e.lavergne@outlook.com"]
DATE = "Toulouse, November 2026"

TEMPLATE = """<!doctype html><html><head><meta charset="utf-8">
<style>
  @page {{ size: A4; margin: 2.2cm 2.4cm; }}
  body {{ font-family: 'Liberation Sans', Arial, sans-serif; font-size: 10pt; line-height: 1.35; color: #1f1a24; }}
  .sender {{ color: #4c1d71; text-align: left; }}
  .sender b {{ font-size: 13pt; }}
  .recipient {{ margin-top: 10pt; text-align: right; }}
  .date {{ margin-top: 6pt; text-align: right; }}
  .subject {{ margin-top: 10pt; font-weight: bold; }}
  p {{ margin: 0 0 7pt 0; text-align: justify; }}
  .sig {{ margin-top: 12pt; font-weight: bold; color: #4c1d71; }}
</style></head><body>
<p class="sender"><b>{sender_name}</b><br>{sender_rest}</p>
<p class="recipient">{recipient}</p>
<p class="date">{date}</p>
<p class="subject">Subject: {subject}</p>
<p>{salutation}</p>
{paragraphs}
<p>{closing}</p>
<p class="sig">Elsa Lavergne</p>
</body></html>"""


def main() -> int:
    office = shutil.which("libreoffice") or shutil.which("soffice")
    if not office:
        print("LibreOffice not found on PATH", file=sys.stderr)
        return 1
    schools = json.loads(DATA.read_text(encoding="utf-8"))
    OUT.mkdir(parents=True, exist_ok=True)
    TMP.mkdir(exist_ok=True)
    try:
        for s in schools:
            l = s["letter"]
            esc = html.escape
            page = TEMPLATE.format(
                sender_name=esc(SENDER[0]),
                sender_rest="<br>".join(esc(x) for x in SENDER[1:]),
                recipient="<br>".join(esc(x) for x in l["recipient"].split("\n")),
                date=esc(DATE),
                subject=esc(l["subject"]),
                salutation=esc(l["salutation"]),
                paragraphs="\n".join(f"<p>{esc(p)}</p>" for p in l["paragraphs"]),
                closing=esc(l["closing"]),
            )
            name = Path(s["pdf"]).stem
            src = TMP / f"{name}.html"
            src.write_text(page, encoding="utf-8")
            subprocess.run(
                [office, "--headless", "--convert-to", "pdf:writer_web_pdf_Export", "--outdir", str(OUT), str(src)],
                check=True, capture_output=True,
            )
            print("wrote", OUT / f"{name}.pdf")
    finally:
        shutil.rmtree(TMP, ignore_errors=True)
    return 0


if __name__ == "__main__":
    sys.exit(main())
