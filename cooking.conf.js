var path = require('path');
var cooking = require('cooking');
var build = require('./build');

var isProd = process.env.NODE_ENV === 'production';

cooking.set({
  entry: build.entries(),
  dist: './dist',
  template: build.templates(),
  devServer: {
    port: 8081,
    publicPath: '/',
  },
  clean: true,
  hash: true,
  sourceMap: true,
  chunk: true,
  postcss: [],
  publicPath: '/dist/',
  extractCSS: isProd ? 'static/[name].[contenthash:7].css' : true,
  alias: {
    'src': path.join(__dirname, 'src')
  },
  extends: ['vue2', 'buble', 'lint', 'autoprefixer'],
  externals: build.externals()
});

isProd && cooking.add('output.filename', 'static/[name].[hash:7].js');

module.exports = cooking.resolve();
