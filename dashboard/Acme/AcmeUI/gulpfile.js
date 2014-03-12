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

gulp.task('test', function () {
  gulp.src('./src/test/js/**.js')
    // .pipe(mocha({reporter: 'landing'}));
    // .pipe(mocha({reporter: 'spec'}));
    // .pipe(mocha({reporter: 'dot'}));
    // .pipe(mocha({reporter: 'nyan'}));
    // .pipe(mocha({reporter: 'html'}));
    // .pipe(mocha({reporter: 'html'}));
    .pipe(mocha({reporter: 'markdown'}))
    .pipe(gulp.dest('out.md'));
});

gulp.task('build', ['lint'], function () {
  gulp.src(paths.src.concat('app.js'), { read: false })
    // .pipe(debug())
    .pipe(browserify({
      transform: [hbsfy],
      // ,
      // insertGlobals: true,
      // debug: ! gulp.env.production
      debug: true
    }))
    .pipe(uglify({ outSourceMap: true }))
    .pipe(gulp.dest(paths.target));
});

gulp.task('copy', function () {
  gulp.src(paths.resources.concat('**/*.*'))
    .pipe(debug())
    .pipe(gulp.dest(paths.target));
});
