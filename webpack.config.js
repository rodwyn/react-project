'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function makeWebpackConfig () {
  let config = {};

	config.cache = true;

	config.devtool = 'eval';

	config.entry = { bundle: './app/scripts/entry.jsx' };

	config.output = {
		filename: 'js/[name].js',
		path: __dirname + '/dist',
		publicPath: '/'
	};

	config.resolve = { extensions: ['.jsx', '.js'] };

	config.module = {
    loaders: [{
      test: /\.jsx$/,
      use: [{
        loader: 'babel-loader'
      }]
    }]
  };

  config.devServer = {
    contentBase: __dirname + '/app',
    stats: {
	    hash: false,
	    version: false,
	    timings: true,
	    assets: false,
	    chunks: false,
	    modules: false,
	    reasons: true,
	    children: false,
	    source: false,
	    errors: true,
	    errorDetails: false,
	    warnings: true,
	    publicPath: false
		},
		host: '0.0.0.0',
		inline: true,
		port: 3000,
    open: true,
    openPage: '',
		disableHostCheck: true
  };

  return config;
}();
