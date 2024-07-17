# Vapi Web UMD

UMD bundle for Vapi AI Web module.

## Description

This project provides a UMD (Universal Module Definition) bundle for the Vapi AI Web module, allowing it to be easily included in both browser environments and other module systems.

## Installation

Install the package using npm:

```bash
npm install vapi-web-umd
```

# Usage

Including the Bundle in HTML

You can include the bundle in your HTML file to use the Vapi class directly.

## Non-Minified Bundle

For development purposes, use the non-minified bundle:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Vapi Module</title>
</head>
<body>
    <h1>Check Console for Vapi Output</h1>
    <script src="https://cdn.jsdelivr.net/gh/balacodeio/Vapi-Web-UMD@2.1.0/dist/2.1.0/vapi-web-bundle-2.1.0.js"></script> <!-- Non-minified bundle -->
    <script>
        console.log(Vapi); // Now Vapi should be the Vapi class directly
        const vapi = new Vapi("your-api-key");
        console.log(vapi);
    </script>
</body>
</html>
```

## Minified Bundle

For production purposes, use the minified bundle:

```HTML
<script src="https://cdn.jsdelivr.net/gh/balacodeio/Vapi-Web-UMD@2.1.0/dist/2.1.0/vapi-web-bundle-2.1.0.min.js"></script> <!-- Minified bundle -->
```

You can also use the latest version available on jsDelivr:

```HTML
<script src="https://cdn.jsdelivr.net/gh/balacodeio/Vapi-Web-UMD@latest/dist/latest/vapi-web-bundle.min.js"></script> <!-- Latest minified bundle -->

```


## Development

To build the project, run:

```bash
npm run build
```

To watch for changes and rebuild automatically, run:

```bash
npm run build:watch
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with any changes.

## License

```Text
MIT License

Copyright (c) 2023 Vapi Labs Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
