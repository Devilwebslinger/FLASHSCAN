import {mkdir, writeFile, readFile, rm} from 'node:fs/promises';
import {dirname} from 'node:path';

const files = {
  'lib/jspdf.umd.min.js':
    'https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js',
  'lib/tesseract.min.js':
    'https://cdn.jsdelivr.net/npm/tesseract.js@5.0.0/dist/tesseract.min.js',
  'lib/tesseract/worker.min.js':
    'https://cdn.jsdelivr.net/npm/tesseract.js@5.0.0/dist/worker.min.js',
  'lib/tesseract-core/tesseract-core.wasm.js':
    'https://cdn.jsdelivr.net/npm/tesseract.js-core@5.0.0/tesseract-core.wasm.js',
  'lib/tesseract-core/tesseract-core-simd.wasm.js':
    'https://cdn.jsdelivr.net/npm/tesseract.js-core@5.0.0/tesseract-core-simd.wasm.js',
  'lib/tesseract-core/tesseract-core-lstm.wasm.js':
    'https://cdn.jsdelivr.net/npm/tesseract.js-core@5.0.0/tesseract-core-lstm.wasm.js',
  'lib/tesseract-core/tesseract-core-simd-lstm.wasm.js':
    'https://cdn.jsdelivr.net/npm/tesseract.js-core@5.0.0/tesseract-core-simd-lstm.wasm.js',
  'lib/tessdata/eng.traineddata.gz':
    'https://cdn.jsdelivr.net/npm/@tesseract.js-data/eng@1.0.0/4.0.0_best_int/eng.traineddata.gz',
  'lib/mammoth.browser.min.js':
    'https://cdn.jsdelivr.net/npm/mammoth@1.8.0/mammoth.browser.min.js',
  'lib/xlsx.full.min.js':
    'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js',
  'lib/docx.umd.js':
    'https://cdn.jsdelivr.net/npm/docx@9.5.1/build/index.umd.js',
  'lib/pdfjs/pdf.min.mjs':
    'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.5.136/build/pdf.min.mjs',
  'lib/pdfjs/pdf.worker.min.mjs':
    'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.5.136/build/pdf.worker.min.mjs'
};

for (const [file,url] of Object.entries(files)) {
  const res=await fetch(url);
  if(!res.ok) throw new Error(`${res.status} ${res.statusText}: ${url}`);
  const buf=Buffer.from(await res.arrayBuffer());
  await mkdir(dirname(file),{recursive:true});
  await writeFile(file,buf);
  console.log(`${file} ${buf.length} bytes`);
}
console.log('Vendor download complete. The app is now self-contained.');
