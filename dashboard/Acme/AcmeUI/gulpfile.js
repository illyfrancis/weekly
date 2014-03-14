var gulp = require('gulp');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var debug = require('gulp-debug');
var mocha = require('gulp-mocha');
var browserify = require('gulp-browserify');
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
  gulp.src('./src/test/js/**/*.js', { read: false })
    // .pipe(debug())
    .pipe(browserify({
      ignore: ['backbone'],
      // external: './src/main/js/**/*'
      external: '../../../src/main/js/models/client'
      // external: 'backbone'
      // external: ['backbone', '../../../main/js/models/client']
    }))
    .pipe(gulp.dest(paths.target));
});

gulp.task('test-build', function () {
  gulp.src(paths.src.concat('app.js'), { read: false })
    // .pipe(debug())
    .pipe(browserify({
      transform: [hbsfy],
      // exclude: 'backbone'
      external: 'backbone'
    }))
    // .pipe(uglify({ outSourceMap: true }))
    .pipe(gulp.dest(paths.target));
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
