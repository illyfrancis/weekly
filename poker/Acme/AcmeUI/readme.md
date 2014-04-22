## Set up

### Mocha

```
npm install -g mocha
```

### Mocha phantomjs

```
npm install -g mocha-phantomjs
```

Has dependency on Phantomjs. On Windows install by downloading directly, on others use `npm install -g phantomjs`.

Also need to update the default spec runner with:

```
  <script>
    if (window.mochaPhantomJS) { mochaPhantomJS.run(); }
    else { mocha.run(); }
  </script>
```

Then run it by

```
$ mocha-phantomjs -R spec -p {path.to.phantomjs.exe} mocha.html
```

E.g. `$ mocha-phantomjs -p d:\apps\phantomjs-1.9.7-windows\phantomjs.exe -R spec target/mocha.html`

### Dev dependency

```
npm init

npm install gulp --save-dev
npm install gulp-clean --save-dev
npm install hbsfy --save-dev
...
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