const fs = require('node:fs');

const html = fs.readFileSync('index.html', 'utf8');
const hasAbout = html.includes('pages/tentang.html');
const hasArchive = html.includes('pages/arsip.html');

if (!hasAbout || !hasArchive) {
  console.error('Missing key navigation links.');
  process.exit(1);
}

console.log('Basic link lint passed.');
