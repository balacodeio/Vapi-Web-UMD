const path = require('path');
const fs = require('fs');
const TerserPlugin = require('terser-webpack-plugin');

// Path to the @vapi-ai/web package.json
const vapiPackagePath = path.resolve(__dirname, 'node_modules/@vapi-ai/web/package.json');
const vapiPackage = JSON.parse(fs.readFileSync(vapiPackagePath, 'utf8'));

const commonConfig = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};

const nonMinifiedConfig = {
  ...commonConfig,
  mode: 'development',
  output: {
    filename: `vapi-web-bundle-${vapiPackage.version}.js`,
    path: path.resolve(__dirname, `dist/${vapiPackage.version}`),
    library: 'Vapi',
    libraryTarget: 'umd',
    globalObject: 'this',
    libraryExport: 'default',
  },
};

const minifiedConfig = {
  ...commonConfig,
  mode: 'production',
  output: {
    filename: `vapi-web-bundle-${vapiPackage.version}.min.js`,
    path: path.resolve(__dirname, `dist/${vapiPackage.version}`),
    library: 'Vapi',
    libraryTarget: 'umd',
    globalObject: 'this',
    libraryExport: 'default',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};

module.exports = [nonMinifiedConfig, minifiedConfig];
