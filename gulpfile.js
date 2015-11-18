'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var Server = require('karma').Server;

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

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('default', ['less', 'uglify', 'test']);
