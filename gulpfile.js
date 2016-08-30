var gulp = require('gulp');
var connect = require('gulp-connect-multi')();

gulp.task('connect', connect.server({
  root: ['app'],
  port: 8888,
  livereload: true,
  open: {
    browser: 'chrome'
  }
}));

gulp.task('index', function () {
  gulp.src('app/index.html')
    .pipe(connect.reload());
});

gulp.task('mainApp', function () {
  gulp.src('app/mainApp.js')
    .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('app/src/**/*.html')
    .pipe(connect.reload());
});
gulp.task('js', function () {
  gulp.src('app/src/**/*.js')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['app/src/**/*.html'], ['html']);
  gulp.watch(['app/src/**/*.js'], ['js']);
  gulp.watch(['app/index.html'], ['index']);
  gulp.watch(['app/app.js'], ['mainApp']);
});

gulp.task('default', ['connect', 'watch']);