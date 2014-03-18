var gulp = require('gulp');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var debug = require('gulp-debug');
var rename = require('gulp-rename');
var mocha = require('gulp-mocha');
var g_browserify = require('gulp-browserify');
var browserify = require('browserify');
var source = require('vinyl-source-stream')
var streamify = require('gulp-streamify');
var buffer = require('gulp-buffer');
var hbsfy = require('hbsfy').configure({
  extensions: ['html']
});

var paths = {
  src: './src/main/js/',
  resources: './src/main/resources/',
  target: './target'
};

gulp.task('default', function () {
  console.log('hello');
});

gulp.task('clean', function () {
  return gulp.src(paths.target, {read: false})
    .pipe(debug())
    .pipe(clean());
});

gulp.task('lint', function () {
  return gulp.src(paths.src.concat('**/*.js'))
    // .pipe(debug())
    .pipe(jshint()) // .pipe(jshint('.jshintrc'));
    .pipe(jshint.reporter('jshint-stylish')); // .pipe(jshint.reporter('default'));
    // .pipe(jshint.reporter('fail')); // to fail the build when there's a problem
});

gulp.task('test-single', function () {
  gulp.src('./**/*.js', { cwd: './src/test/js' })
    .pipe(debug())
    .pipe(mocha({reporter: 'spec'}))
    .on('error', function (err) {
      // handle the mocha errors so that they don't cloud the test results,
      // or end the watch
      console.log(err.toString());
      this.emit('end');
    });
});

gulp.task('test', function () {
  gulp.src('./src/test/js/**/*.js')
    .pipe(debug())
    .pipe(mocha({reporter: 'spec'}))
    // .pipe(mocha({reporter: 'landing'}))
    // .pipe(mocha({reporter: 'dot'}))
    // .pipe(mocha({reporter: 'nyan'}))
    // .pipe(mocha({reporter: 'html'}))
    // .pipe(mocha({reporter: 'html'}))
    // .pipe(mocha({reporter: 'markdown'}))
    .on('error', function (err) {
      // handle the mocha errors so that they don't cloud the test results,
      // or end the watch
      console.log(err.toString());
      this.emit('end');
    });
});

gulp.task('test-compile', function () {
  // var b = browserify(['./src/test/js/**/*.js']);
  var b = browserify(['./src/test/js/client.js']);
  b.transform(hbsfy)
    // .bundle({ debug: true })
    .external('../../../src/main/js/models/client')
    .external('backbone')
    // .external('backbone')
    .bundle()
    .pipe(source('test_bundle.js'))
    // .pipe(streamify(debug()))
    // .pipe(streamify(uglify()))
    // .pipe(debug())
    .pipe(gulp.dest('./bundle'))
});

gulp.task('browserify', function() {
  var b = browserify(paths.src.concat('app.js'));
  b.transform(hbsfy)
    .require('./src/main/js/models/client', { expose: 'bogus'})
    // b.bundle({ debug: true })
    .bundle()
    .pipe(source('app.js'))
    // .pipe(streamify(debug()))
    // .pipe(streamify(uglify()))
    // .pipe(debug())
    .pipe(gulp.dest('./bundle'))
});

gulp.task('browserify-test', function() {
  var b = browserify(['./src/test/js/client.js']);
  b.transform(hbsfy)
    .external('./src/main/js/models/client.js')
    .external('backbone')
    // b.bundle({ debug: true })
    .bundle()
    .pipe(source('test.js'))
    .pipe(gulp.dest('./bundle'))
});


gulp.task('test-main', function () {
  gulp.src('./src/main/js/app.js', { read: false })
    .pipe(
      g_browserify({
        transform: [hbsfy]
      })
      .on('prebundle', function (bundler) {
        console.log('> prebundle: dir [' + __dirname 
          + "], file [" + __filename + "]");
        // bundler.require(__dirname + '../../../src/main/js/models/client', { expose: 'bogus' })
        // bundler.require('./src/main/js/**/*.js', { expose: 'bogus' })
      })
    )
    // .pipe(uglify({ outSourceMap: true }))
    .pipe(gulp.dest('./test-build'));
});

gulp.task('test-build', function () {
  gulp.src('./src/test/js/**/*.js', { read: false })
    // .pipe(debug())
    .pipe(
      g_browserify({
        transform: [hbsfy],
        // exclude: 'backbone'
        external: ['./src/main/js/models/client.js']
      })
      // .on('prebundle', function (bundler) {
      //   console.log('prebundle: ' + __dirname + " : " + bundler);
      //   // bundler.require(__dirname + '../../../src/main/js/models/client', { expose: 'bogus' })
      //   bundler.require('../../../src/main/js/models/client', { expose: 'bogus' })
      // })
    )
    // .pipe(uglify({ outSourceMap: true }))
    .pipe(gulp.dest('./test-build'));
});


gulp.task('build', ['lint'], function () {
  gulp.src(paths.src.concat('app.js'), { read: false })
    // .pipe(debug())
    .pipe(browserify({
      transform: [hbsfy],
      // insertGlobals: true,
      // debug: ! gulp.env.production
      debug: true
    }))
    // .pipe(uglify({ outSourceMap: true }))
    .pipe(gulp.dest(paths.target));
});

gulp.task('copy', function () {
  gulp.src(paths.resources.concat('**/*.*'))
    .pipe(debug())
    .pipe(gulp.dest(paths.target));
});
