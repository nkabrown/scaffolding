const debug = process.env.NODE_ENV='production';

module.exports = {
  context: __dirname,
  entry: './assets/js/app.js',
  output: {
    filename: 'app.bundle.js',
    path: './dist'
  },
  devtools: debug ? 'sourcemaps': null,
  module: {
    loader: [
      { test: /\.js?$/, exclude: /(node_modules|bower_components)/, loader: 'babel', query: { presets: ['es2015', 'stage-1'] } },
      { test: /\.css?$/, loader: 'style!css' }
    ]
  }
}
