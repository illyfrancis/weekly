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
  main: {
    app: './src/main/js/app.js',
    js: './src/main/js/**/*.js',
    resources: './src/main/resources/**/*.*'
  },
  test: {
    js: './src/test/js/**/*.js',
    resources: './src/test/resources/**/*.*'
  },
  target: './target',
};

gulp.task('lint', function () {
  return gulp.src(['gulpfile.js', paths.main.js, paths.test.js])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('test', function () {
  gulp.src(paths.test.js)
    .pipe(mocha({reporter: 'spec'})) // nyan, markdown
    .on('error', function (err) {
      console.log(err.toString());
      this.emit('end');
    });
});

gulp.task('bundle', function () {
  var b = browserify();
  b.add(paths.main.app)
    .transform(hbsfy)
    // .bundle()
    .bundle({debug: ! gulp.env.production})
    .pipe(source('app.js'))
    // .pipe(streamify(uglify()))
    .pipe(gulp.dest(paths.target));
});

gulp.task('bundle-test', function () {
  var b = browserify();
  glob.sync(paths.main.js).forEach(function (file) {
    b.external(file);
  });
  glob.sync(paths.test.js).forEach(function (file) {
    b.add(file);
  });
  b.bundle()
    .pipe(source('tests.js'))
    .pipe(gulp.dest(paths.target));
});

gulp.task('bundle-core', function () {
  var b = browserify();
  glob.sync(paths.main.js).forEach(function (file) {
    b.add(file);
    b.require(file, {expose: '.'});
  });
  b.transform(hbsfy)
    .bundle()
    .pipe(source('core.js'))
    .pipe(gulp.dest(paths.target));
});

gulp.task('copy-resources', function () {
  return gulp.src([paths.main.resources, paths.test.resources])
    .pipe(gulp.dest(paths.target));
});

gulp.task('clean', function () {
  return gulp.src(paths.target, {read: false})
    .pipe(clean());
});

gulp.task('test-build', ['bundle-core', 'bundle-test']);

gulp.task('default', ['test', 'bundle-test', 'bundle-core', 'bundle'], function () {
  console.log('default task');
});

