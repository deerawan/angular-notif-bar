'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var uglify = require('gulp-uglify');

gulp.task('less', function() {
  return gulp.src('./src/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./dist'));
});

gulp.task('uglify', function() {
  return gulp.src('src/*.js')
    .pipe(uglify({
      outSourceMap: true
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['less', 'uglify']);
