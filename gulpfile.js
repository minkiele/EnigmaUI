var gulp = require('gulp');
var browserSync = require('browser-sync');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

var bundler = webpack(webpackConfig);

gulp.task('serve', function (callback) {
  browserSync({
    server: {
      baseDir: ['dist', 'sample'],
      middleware: [
        webpackDevMiddleware(bundler, {
          publicPath: webpackConfig.output.publicPath,
          stats: {
            colors: true
          }
        }),
        webpackHotMiddleware(bundler)
      ]
    },
    files: ['dist/**/*.js', 'sample/**/*.html']
  });
});
