const path = require('path');
const fs = require('fs');

// Get the version from the @vapi-ai/web package.json
const vapiPackagePath = path.resolve(__dirname, 'node_modules/@vapi-ai/web/package.json');
const vapiPackage = JSON.parse(fs.readFileSync(vapiPackagePath, 'utf8'));

const version = vapiPackage.version;
const latestDir = path.resolve(__dirname, 'dist/latest');

if (!fs.existsSync(latestDir)) {
  fs.mkdirSync(latestDir, { recursive: true });
}

const filesToCopy = [
  { from: `dist/${version}/vapi-web-bundle-${version}.js`, to: 'dist/latest/vapi-web-bundle.js' },
  { from: `dist/${version}/vapi-web-bundle-${version}.min.js`, to: 'dist/latest/vapi-web-bundle.min.js' },
];

filesToCopy.forEach(file => {
  fs.copyFileSync(path.resolve(__dirname, file.from), path.resolve(__dirname, file.to));
});

console.log('Files copied to latest directory successfully.');
