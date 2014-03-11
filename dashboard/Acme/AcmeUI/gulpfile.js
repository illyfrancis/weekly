var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('default', function () {
  console.log('hello');
});

gulp.task('clean', function () {
  gulp.src('target', {read: false})
    .pipe(clean());
});
