var gulp = require('gulp')
var rename = require('gulp-rename')
var del = require('del')
var fs = require('fs')

gulp.task('clean', function() {
	del('./dest')
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

gulp.task('init', function() {
	var devConfigFileName = process.env.USER + '.json'
	if (!fs.existsSync('./userProps/' + devConfigFileName)) {
		gulp.src('./userProps/template.json')
			.pipe(rename(devConfigFileName))
			.pipe(gulp.dest('./userProps'))
	}
})

gulp.task('default', ['clean', 'copySource', 'copyConfig'], function() {
})
