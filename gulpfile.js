var gulp = require('gulp'),
    sass = require('gulp-sass');


gulp.task('sass', function() {
  gulp.src('process/sass/styles.scss')
  .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'));
});

gulp.task('watch', function() {
   // Watch .scss files
  gulp.watch('process/sass/modules/*.scss', ['sass']);
 });

gulp.task('default', ['sass','watch']);