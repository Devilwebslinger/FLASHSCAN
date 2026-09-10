# FlashScan — GitHub Pages package

Upload this folder to a GitHub repository and enable **Settings → Pages → Source: GitHub Actions**.

The included workflow downloads and vendors the required browser libraries into `lib/` during the GitHub build, then deploys FlashScan to GitHub Pages.

## Features in this build
- Center floating Scanner button on mobile
- Scanner opens the camera directly
- Multi-page scanning up to 111 pages
- Crop, enhance, black & white, compress and save
- User-named local PDF saving
- PDFs opened are stored in local browser storage and shown in Recent Documents / My Files
- PDF reader with local PDF.js engine after build
- PDF/JPG/PNG conversion
- OCR, Word and Excel tools
- PWA/service worker setup

## Deploy
1. Create a GitHub repository.
2. Upload all files from this package to the repository root.
3. Push to the `main` branch.
4. Open **Settings → Pages** and select **GitHub Actions** if needed.
5. Wait for the `Deploy FlashScan` workflow to finish.
6. Open the GitHub Pages URL on your phone.

Camera access requires HTTPS; GitHub Pages provides HTTPS.

> The ZIP is a build package. The GitHub Action vendors the large PDF/OCR/browser-engine files during deployment so they are not runtime CDN dependencies.


## Seamless build improvements
This build includes:
- Center Scanner action opens the camera immediately.
- Scanner camera starts automatically when entering the scanner.
- Better camera permission/error messaging.
- Scanned PDFs are stored as actual PDF blobs in local IndexedDB, so Recent Documents can reopen them.
- Converted PDFs are stored locally too.
- PDF.js loading waits briefly for the module before falling back to the browser PDF viewer.
- Image-to-PDF conversion waits for image decoding before writing pages.
- Camera tracks stop when the page is hidden.
