var gulp = require('gulp');

gulp.task('bs', function () {

  var browserSync = require('browser-sync');
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

});

gulp.task('docs:js', function (done) {
  var path = require('path');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config');
  var argv = require('yargs').argv;
  webpackConfig.output.path = path.join(__dirname, 'docs/js');
  if(argv.compress === false) {
    webpackConfig.plugins.pop();
  }
  webpack(webpackConfig, function (err, stats) {
    if(err) throw err;
    done();
  });
});

gulp.task('docs:css', function () {
  var less = require('gulp-less');
  var LessPluginCleanCss = require('less-plugin-clean-css');
  var LessPluginAutoprefix = require('less-plugin-autoprefix');
  return gulp.src('less/ui.less')
    .pipe(less({
      plugins: [
        new LessPluginCleanCss({
          advanced: true,
          keepSpecialComments: 1
        }),
        new LessPluginAutoprefix({
          browsers: ['last 2 versions']
        })
      ]
    }))
    .pipe(gulp.dest('docs/css'))
});

gulp.task('docs:html', ['transpile'], function () {
  var App = require('./dist/Enigma');
  var BackendRenderingEngine = require('./dist/RenderingEngine/Backend');
  var hogan = require('gulp-hogan');
  var rename = require('gulp-rename');

  var renderingEngine = new BackendRenderingEngine();

  renderingEngine.on('render', function (markup) {
    gulp.src('./sample/template.html')
      .pipe(hogan({
        application: markup
      }))
      .pipe(rename('index.html'))
      .pipe(gulp.dest('docs'));
  });

  new App(renderingEngine);

});

gulp.task('docs', ['docs:html', 'docs:js', 'docs:css']);

gulp.task('webpack', function (done) {
  var path = require('path');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config');
  webpack(webpackConfig, function (err, stats) {
    if(err) throw err;
    done();
  });
});

gulp.task('transpile', function () {
  var path = require('path');
  var babel = require('gulp-babel');
  var uglify = require('gulp-uglify');
  var babelSettings = {
    "presets": [
      "es2015",
      "react"
    ],
    "plugins": [
      "add-module-exports"
    ]
  };

  return gulp.src('src/Enigma/**/*.js')
    .pipe(babel(babelSettings))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))

});

gulp.task('default', ['bs']);
