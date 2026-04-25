const fs = require('node:fs');
const path = require('node:path');

const files = [
  'index.html',
  'assets/css/base.css',
  'assets/js/main.js'
];

const out = {
  generatedAt: new Date().toISOString(),
  files
};

fs.writeFileSync(path.join(process.cwd(), 'public', 'asset-manifest.json'), JSON.stringify(out, null, 2));
console.log('Manifest generated.');
