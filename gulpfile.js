'use strict';
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const notify = require("gulp-notify");

gulp.task('scripts', function(){
  gulp.src('js/*.js')
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('all.js'))
  .pipe(uglify())
  .pipe(gulp.dest('js/dist'))
});

gulp.task('sass', function () {
  return gulp.src('css/style.scss')
    .pipe(sass({}).on('error', function(err) {
          return notify().write(err);
    }))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('css/dist'));
});

gulp.task('sass:watch', function () {
  gulp.watch('css/**/*.scss', ['sass']);
});

gulp.task('js:watch', function () {
  gulp.watch('js/*.js', ['scripts']);
});

gulp.task('default', ['scripts', 'sass:watch', 'js:watch']);
