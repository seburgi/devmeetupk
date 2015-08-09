var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

gulp.task('default', ['js']);

/**
 * find all js files and concatenate them into one file
 * @return {Stream}
 */
gulp.task('js', function() {
    return gulp
        .src('./src/**/*.js')
        .pipe(sourcemaps.init())
	    	.pipe(concat('app.all.js'))
	    	.pipe(uglify())
    	.pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/'));
    });

gulp.task('watch', function() {
    gulp.watch('./src/**/*.js', ['js']);
});

// Static server
gulp.task('browser-sync', ['watch'], function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });

    gulp.watch("build/*.*").on('change', browserSync.reload);
});
