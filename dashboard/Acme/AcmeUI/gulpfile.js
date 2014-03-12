var gulp = require('gulp');
var debug = require('gulp-debug');
var clean = require('gulp-clean');
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
  gulp.src(paths.target, {read: false})
    .pipe(debug())
    .pipe(clean());
});

gulp.task('build', function () {
  gulp.src(paths.src.concat('app.js'))
    .pipe(debug())
    .pipe(browserify({
      transform: [hbsfy]
      // ,
      // insertGlobals: true,
      // debug: ! gulp.env.production
    }))
    .pipe(gulp.dest(paths.target));
});

gulp.task('copy', function () {
  gulp.src(paths.resources.concat('**/*.*'))
    .pipe(debug())
    .pipe(gulp.dest(paths.target));
});
