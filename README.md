# DocSmart — TRUE Offline Builder Package

This repository is designed to produce a **fully self-contained** GitHub Pages build.

## Why this package has a `scripts/vendor.mjs`

The current ChatGPT execution environment can search the internet but cannot transfer arbitrary third-party binary assets into the file-generation sandbox. Therefore the package contains a reproducible vendor script and a GitHub Actions build. GitHub's runner has internet access and will download the exact browser engines before deployment.

After the GitHub Action completes, the deployed site contains local copies of:
- PDF.js + PDF worker
- jsPDF
- Tesseract.js worker
- Tesseract WASM-core variants
- English OCR trained data
- Mammoth
- SheetJS
- docx
- PWA shell/assets

The resulting deployed app has **no runtime CDN dependency**.

## Deploy

1. Create a GitHub repository.
2. Upload everything in this package to the repository root.
3. Commit to the `main` branch.
4. GitHub → Settings → Pages → Source: **GitHub Actions**.
5. The included `.github/workflows/pages.yml` downloads/vendor-builds the engines and deploys the app.
6. Open the HTTPS Pages URL on Android Chrome.
7. Allow camera access.
8. Chrome menu → **Install app / Add to Home screen**.

## Important

The first GitHub Action build needs internet because it has to download the third-party engines. Once deployed, the web app itself does not need those CDNs at runtime.

The English OCR model is included in the generated deployment. Additional languages can be added by extending `scripts/vendor.mjs`.

## Features already in the app

Scanner up to 111 pages, page reorder/delete, crop, enhance, B&W, compressed PDF, image/PDF conversion, PDF rendering, OCR → DOCX, DOCX editing/import/export, PDF annotations, Excel/CSV editing and formulas, image → Excel OCR, continuous/page reader, fullscreen reading, PWA installation.
