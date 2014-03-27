## Set up

### Dev dependency

```
npm init

npm install gulp --save-dev
npm install gulp-clean --save-dev
npm install gulp-browserify --save-dev
npm install hbsfy --save-dev
```

### Dependency

```
npm install --save backbone jquery underscore
```

## Build with Browserify

### Browserify

```
$ browserify -t hbsfy src\app.js -o dist\bundle.js
```

### Dummy server

```
npm install connect --save-dev
```

#### server.js

Configure connect to serve static content from `dist` on port `9091`.

```
var connect = require('connect');

connect.createServer(
  connect.static('dist')
).listen(9091);
```

### index.html

So the `bundle.js` is in `/dist` directory from browserify.
Add index.html in dist that uses bundle.js.

```
<!DOCTYPE html>
<html>
<head>
  <title>Backbone App</title>
</head>
<body>
  <script src="/bundle.js"></script>
</body>
</html>
```

Then point the browser to `localhost:9091` and should see rendered page.

## Gulp

... to do ...

work out how to use gulp + browserify + hbsfy

- https://www.npmjs.org/browse/keyword/browserify
- https://www.npmjs.org/package/hbsfy

### Install gulp

1. Install globally

```
npm install gulp -g
```

2. Intall gulp in project devDependencies

```
npm install gulp --save-dev
```

3. Create a `gulpfile.js` at the project root

```
var gulp = require('gulp');

gulp.task('default', function () {
	
});
```

4. Run gulp

`$ gulp`

## Testing

Four modes:

1. mocha via npm test
2. gulp test
3. mocha-phantomjs (with phantomjs installed)
4. gulp test-build then load mocha.html in the browser

Both 1 and 2 have limitation on what it can run i.e. only able to execute non-browser (i.e. node) test. For example, testing a model that fetches the data via XMLHttpRequrest doesn't work for these.

### mocha via npm test

In `pacakge.json` the script section is defined as:

```
  "scripts": {
    "test": "mocha -R nyan --recursive src/test"
  }
```

Hence running `$ npm test` is equivalent to `$ mocha -R nyan --recursive src/test`.

### gulp test

The `gulpfile.js` has a task `test` defined as:

```
gulp.task('test', function () {
  gulp.src(paths.test.js, {read: false})
    .pipe(mocha({
      reporter: 'spec',
      // globals: {
      //   should: require('should')
      // }
    })) // nyan, markdown
    .on('error', function (err) {
      gutil.log(err.toString());
      this.emit('end');
    });
});
```

Essentially it delegates to gulp-mocha plugin which delegates to mocha to run the tests.

### mocha-phantomjs

Assuming mocha-phantomjs is installed via npm and in Windows phantomjs is installed separately and the path to phantomjs.exe is setup, the test can be executed like this:

```
$ mocha-phantomjs -R spec ./target/mocha.html
```

### In browser

Simply load the `mocha.html` in the browser.
