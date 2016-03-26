var gulp = require('gulp')
var clean = require('gulp-clean')
var rename = require('gulp-rename')

gulp.task('clean', function() {
	gulp.src('./dest', {read:false})
		.pipe(clean())
})

gulp.task('copySource', function() {
	gulp.src('./src/**/*.js')
		.pipe(gulp.dest('./dest'))
})

gulp.task('copyConfig', function() {
	gulp.src('./userProps/' + process.env.USER + '.json')
		.pipe(rename('config/config.json'))
		.pipe(gulp.dest('./dest'))
})

gulp.task('default', ['copySource', 'copyConfig'], function() {
})
