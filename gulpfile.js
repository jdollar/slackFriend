var gulp = require('gulp')
var mocha = require('gulp-mocha')
var rename = require('gulp-rename')
var jshint = require('gulp-jshint')
var del = require('del')
var fs = require('fs')

gulp.task('clean', function() {
  del('./dest')
})

gulp.task('test', function() {
  return gulp.src('test/*.js')
            .pipe(mocha({reporter: "nyan"}))
})

gulp.task('lint', function() {
  return gulp.src('./lib/**/*.js')
            .pipe(jshint({asi: true, esversion: 6}))
            .pipe(jshint.reporter('default'))
})

gulp.task('copySource', function() {
  gulp.src('./lib/**/*.js')
    .pipe(gulp.dest('./dest'))
})

gulp.task('copyConfig', function() {
  gulp.src('./userProps/' + process.env.USER + '.json')
    .pipe(rename('config/config.json'))
    .pipe(gulp.dest('./dest'))
})

gulp.task('init', function() {
  var devConfigFileName = process.env.USER + '.json'
  if (!fs.existsSync('./userProps/' + devConfigFileName)) {
    gulp.src('./userProps/template.json')
      .pipe(rename(devConfigFileName))
      .pipe(gulp.dest('./userProps'))
  }
})

gulp.task('default', ['lint', 'clean', 'copySource', 'copyConfig', 'test'], function() {
})
