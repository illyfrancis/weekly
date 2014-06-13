var args = require('yargs').argv;
var browserify = require('browserify');
var clean = require('gulp-clean');
var glob = require('glob');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var hbsfy = require('hbsfy').configure({extensions: ['html']});
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');

var paths = {
  main: {
    app: './src/main/js/app.js',
    js: './src/main/js/**/*.js',
    templates: './src/main/js/**/*.html',
    resources: './src/main/resources/**/*.*'
  },
  test: {
    js: './src/test/js/**/*.js',
    jsnode: './src/test/jsnode/**/*.js',
    resources: './src/test/resources/**/*.*'
  },
  target: './target'
};

// gulp {task} --env production
var isProduction = args.env === 'production';

// gulp {task} --exitOnError
var errorHandler = function (err) {
  gutil.log('An error occured: ' + err);
  if (args.exitOnError) {
    process.exit(1);
  } else {
    this.emit('end');
  }
};

gulp.task('lint', function () {
  return gulp.src(['gulpfile.js', paths.main.js, paths.test.js, paths.test.jsnode])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('test', function () {
  return gulp.src(paths.test.jsnode, {read: false})
    .pipe(mocha({
      reporter: 'tap'
    }))
    .on('error', errorHandler);
});

gulp.task('build', function () {
  var b = browserify();
  b.add(paths.main.app)
    .transform(hbsfy)
    .bundle({debug: ! isProduction})
    .pipe(source('app.js'))
    .pipe(streamify(gulpif(isProduction, uglify())))
    .pipe(gulp.dest(paths.target))
    .on('error', errorHandler);	
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

gulp.task('resources', function () {
  return gulp.src([paths.main.resources, paths.test.resources])
    .pipe(gulp.dest(paths.target));
});

gulp.task('clean', function () {
  return gulp.src(paths.target, {read: false})
    .pipe(clean());
});

gulp.task('test-build', ['bundle-core', 'bundle-test']);

gulp.task('watch-build', function () {
  gulp.watch(
    ['.jshintrc', 'gulpfile.js', paths.main.js, paths.main.templates, paths.test.js, './src/main/resources/**/*.css'],
    ['lint', 'test', 'test-build', 'build', 'resources']);
});

gulp.task('ci-default', ['resources', 'lint', 'test', 'build']);

gulp.task('default', ['resources', 'lint', 'test', 'test-build', 'build']);
