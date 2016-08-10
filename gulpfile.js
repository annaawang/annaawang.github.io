var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-ruby-sass');

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

gulp.task('default', ['scripts']);


gulp.task('sass', function() {
    return sass('process/sass/styles.scss', {style: 'compressed'})
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/css'));
});

gulp.task('default', ['scripts', 'sass']);