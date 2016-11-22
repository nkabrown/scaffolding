const path = require('path');
const debug = process.env.NODE_ENV != 'production';

module.exports = {
  context: __dirname + '/src',
  entry: './js/app.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtools: debug ? 'sourcemaps' : null,
  eslint: {
    configFile: '.eslintrc'
  },
  module: {
    preLoaders: [
      { test: /\.js?$/, exclude: /(node_modules|bower_components)/, loader: 'eslint' }
    ],
    loader: [
      { test: /\.js?$/, exclude: /(node_modules|bower_components)/, loader: 'babel', query: { presets: ['es2015', 'stage-1'] } },
      { test: /\.css?$/, loader: 'style!css' }
    ]
  }
}
