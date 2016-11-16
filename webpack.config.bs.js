var webpack = require('webpack');
var path = require('path');
var webpackConfig = require('./webpack.config');

webpackConfig.entry.app.splice(0, 0/* 1 //Enable with polyfill */, 'webpack/hot/dev-server', 'webpack-hot-middleware/client');

webpackConfig.plugins.splice(2, 2, new webpack.HotModuleReplacementPlugin());

webpackConfig.module.loaders[0].loaders.splice(0, 0, 'react-hot');
webpackConfig.module.loaders[0].loaders.push('webpack-module-hot-accept');

module.exports = webpackConfig;
