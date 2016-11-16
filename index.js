  var browserSync = require('browser-sync');
  var webpack = require('webpack');
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.bs');
  var bundler = webpack(webpackConfig);
  var less = require('less');
  var fs = require('fs');
  var bs = browserSync.create();

  bs.init({
    server: {
      baseDir: ['dist', 'sample'],
      middleware: [
        {
          route: '/css/ui.css',
          handle: function (req, res, next) {
            fs.readFile('less/ui.less', {
              encoding: 'utf8'
            }, function (err, data) {

              if(err) {
                console.error(err);
                next();
              }

              less.render(data, {
                filename: 'less/ui.less'
              }).then(function (output) {
                res.end(output.css, 'utf8', function () {
                  console.log('Response sent')
                });
              }, function (err) {
                console.error(err);
                next();
              });
            });
          }
        },
        webpackDevMiddleware(bundler, {
          publicPath: webpackConfig.output.publicPath,
          stats: {
            colors: true
          }
        }),
        webpackHotMiddleware(bundler)
      ]
    },
    files: ['dist/**/*.js', 'dist/**/*.css', 'sample/**/*.html']
  });

  bs.watch('less/ui.less', function (evt, filename) {
    bs.reload('css/ui.css');
  });
