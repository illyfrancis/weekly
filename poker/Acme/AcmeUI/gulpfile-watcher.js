var watching = false;

function onError(err) {
  console.log(err.toString());
  if (watching) {
    this.emit('end');
  } else {
    // if you want to be really specific
    process.exit(1);
  }
}

gulp.task("test", function() {
  return gulp.src(paths.tests)
    .pipe(mocha({ reporter: "spec" }).on("error", onError));
});

gulp.task("watch", ["build"], function () {
  watching = true;
  gulp.watch([paths.tests], ["test"]);
});