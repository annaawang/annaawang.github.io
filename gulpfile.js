var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-ruby-sass'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');

gulp.task('scripts', function() {
    return gulp.src('process/js/*.js')
      .pipe(concat('main.js'))
      .pipe(gulp.dest('builds/js'));
});

gulp.task('scripts', function() {
    return gulp.src('process/js/*.js')
      .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('builds/js'));
});


gulp.task('sass', function() {
    return sass('process/sass/styles.scss', {style: 'compressed'})
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('builds/css'));
});


gulp.task('images', function() {
  return gulp.src('process/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('builds/img'));
});

gulp.task('watch', function() {
   // Watch .js files
  gulp.watch('src/js/*.js', ['scripts']);
   // Watch .scss files
  gulp.watch('src/scss/*.scss', ['sass']);
   // Watch image files
  gulp.watch('src/images/**/*', ['images']);
 });

gulp.task('default', ['scripts', 'sass', 'images', 'watch']);