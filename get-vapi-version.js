// get-vapi-version.js
const fs = require('fs');
const path = require('path');

// Path to the @vapi-ai/web package.json
const vapiPackagePath = path.resolve(__dirname, 'node_modules/@vapi-ai/web/package.json');
const vapiPackage = JSON.parse(fs.readFileSync(vapiPackagePath, 'utf8'));

console.log(vapiPackage.version);
