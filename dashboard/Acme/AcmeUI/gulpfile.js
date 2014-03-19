var gulp = require('gulp');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var debug = require('gulp-debug');
var rename = require('gulp-rename');
var mocha = require('gulp-mocha');
var browserify = require('browserify');
var source = require('vinyl-source-stream')
var streamify = require('gulp-streamify');
var buffer = require('gulp-buffer');
var glob = require('glob');
var hbsfy = require('hbsfy').configure({
  extensions: ['html']
});

var paths = {
  src: './src/main/js/',
  resources: './src/main/resources/',
  target: './target'
};

gulp.task('default', ['test', 'bundle-test', 'bundle-core', 'build'], function () {
  console.log('default task');
});

gulp.task('clean', function () {
  return gulp.src(paths.target, {read: false})
    .pipe(debug())
    .pipe(clean());
});

gulp.task('lint', function () {
  return gulp.src(['./src/main/js/**/*.js', 'gulpfile.js', './src/test/js/**/*.js'])
    // .pipe(debug())
    .pipe(jshint()) // .pipe(jshint('.jshintrc'));
    .pipe(jshint.reporter('jshint-stylish')); // .pipe(jshint.reporter('default'));
    // .pipe(jshint.reporter('fail')); // to fail the build when there's a problem
});

gulp.task('test', function () {
  gulp.src('./src/test/js/**/*.js')
    .pipe(mocha({ reporter: 'spec' }))
    // .pipe(mocha({reporter: 'nyan'}))
    // .pipe(mocha({reporter: 'markdown'}))
    .on('error', function (err) {
      console.log(err.toString());
      this.emit('end');
    });
});

gulp.task('build', function () {
  var b = browserify();
  b.add('./src/main/js/app.js')
    .transform(hbsfy)
    .bundle() // .bundle({ debug: ! gulp.env.production })
    .pipe(source('app.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('./target'));
});

gulp.task('bundle-test', function () {
  var b = browserify();
  // externalize core
  glob.sync('./src/main/js/**/*.js').forEach(function (file) {
    b.external(file);
  });
  // add all tests
  glob.sync('./src/test/js/**/*.js').forEach(function (file) {
    b.add(file);
  });

  b.bundle()
    .pipe(source('bundle_test.js'))
    .pipe(gulp.dest('./target'));
});

gulp.task('bundle-core', function () {
  var b = browserify();
  // export core modules
  glob.sync('./src/main/js/**/*.js').forEach(function (file) {
    b.require(file, { expose: '.' });
  });
  // add individual modules instead of single main
  glob.sync('./src/main/js/**/*.js').forEach(function (file) {
    b.add(file);
  });
  // b.add('./src/main/js/app.js')
  b.transform(hbsfy)
    .bundle()
    .pipe(source('bundle_core.js'))
    .pipe(gulp.dest('./target'));
});

gulp.task('copy', function () {
  gulp.src(paths.resources.concat('**/*.*'))
    .pipe(debug())
    .pipe(gulp.dest(paths.target));
});
