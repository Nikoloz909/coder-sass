'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
// const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest('styles'));
});
 
gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', gulp.parallel ('sass'));
});