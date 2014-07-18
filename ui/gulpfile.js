var args = require('yargs').argv;
var browserify = require('browserify');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var glob = require('glob');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var hbsfy = require('hbsfy').configure({extensions: ['html']});
var jshint = require('gulp-jshint');
var minifycss = require('gulp-minify-css');
var mocha = require('gulp-mocha');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');

var appjs = 'app.js';
var paths = {
  main: {
    app: './src/main/js/' + appjs,
    js: './src/main/js/**/*.js',
    templates: './src/main/js/**/*.html',
    resources: './src/main/resources/**/*.*'
  },
  test: {
    js: './src/test/js/**/*.js',
    jsnode: './src/test/jsnode/**/*.js',
    resources: './src/test/resources/**/*.*'
  },
  target: {
    base: './target',
    app: './target/' + appjs
  }
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
  var stream = gulp.src(['gulpfile.js', paths.main.js, paths.test.js, paths.test.jsnode])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));

  return stream;
});

gulp.task('test', function () {
  var stream = gulp.src(paths.test.jsnode, {read: false})
    .pipe(mocha({
      reporter: 'tap'
    }))
    .on('error', errorHandler);

  return stream;
});

gulp.task('bundle', function () {
  var b = browserify();
  var stream = b.add(paths.main.app)
    .transform(hbsfy)
    .bundle({debug: ! isProduction})
    .on('error', errorHandler)
    .pipe(source(appjs))
    .pipe(gulp.dest(paths.target.base));

  return stream;
});

gulp.task('concat', ['bundle'], function () {
  // concat external libs
  var stream = gulp.src([paths.target.app,
      './lib/bootstrap-select/1.5.2/js/bootstrap-select.js',
      './lib/typeahead.js/0.10.2/dist/typeahead.bundle.js'
    ])
    .pipe(concat(appjs))
    .pipe(gulp.dest(paths.target.base));

  return stream;
});

gulp.task('minify', ['concat'], function () {
  var stream = gulp.src(paths.target.app)
    .pipe(gulpif(isProduction, uglify()))
    .pipe(gulp.dest(paths.target.base));

  return stream;
});

gulp.task('build', ['minify']);

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
    .pipe(gulp.dest(paths.target.base));
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
    .pipe(gulp.dest(paths.target.base));
});

gulp.task('css', function () {
  var stream = gulp.src([
      './lib/bootstrap-select/1.5.2/css/bootstrap-select.min.css',
      './lib/bootstrap-3.1.1/css/bootstrap.min.css',
      './src/main/resources/css/dashboard.css'
    ])
    .pipe(concat('dashboard.css'))
    .pipe(gulpif(isProduction, minifycss({keepSpecialComments: 0})))
    .pipe(gulp.dest('./target/css'));

  return stream;
});

gulp.task('resources', ['css'], function () {
  return gulp.src([
      '!./src/main/resources/css/*.css',
      paths.main.resources,
      paths.test.resources
    ])
    .pipe(gulp.dest(paths.target.base));
});

gulp.task('clean', function () {
  return gulp.src(paths.target.base, {read: false})
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