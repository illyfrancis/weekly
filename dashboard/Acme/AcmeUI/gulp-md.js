var gulp = require('gulp');
var markdown = require('gulp-markdown');

gulp.task('default', function () {
  gulp.src('readme.md')
    .pipe(markdown({
      gfm: true,
      highlight: function (code) {
        return require('highlight.js').highlightAuto(code).value;
      }
    }))
    .pipe(gulp.dest('target'));
});
