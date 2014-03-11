var gulp = require('gulp');
var clean = require('gulp-clean');
var browserify = require('gulp-browserify');
var hbsfy = require('hbsfy').configure({
  extensions: ['html']
});

var paths = {
  scripts: ['./src/main/js/'],
  resources: './src/main/resoruces/',
  output: './target'
};

gulp.task('default', function () {
  console.log('hello');
});

gulp.task('clean', function () {
  gulp.src(paths.output, {read: false})
    .pipe(clean());
});

gulp.task('build', function () {
  gulp.src('./src/main/js/app.js')
    .pipe(browserify({
      transform: [hbsfy],
      insertGlobals: true,
      debug: ! gulp.env.production
    }))
    .pipe(gulp.dest('./target'));
});

// gulp.task('copy', function () {
//   gulp.src('src/main/resources/**/*.*')
//     .pipe(gulp.dest('./target'));
// });

gulp.task('copy', function () {
  gulp.src('**/*.*', {base: paths.resources})
    .pipe(gulp.dest(paths.output));
});