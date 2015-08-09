var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', ['js']);

/**
 * find all js files and concatenate them into one file
 * @return {Stream}
 */
gulp.task('js', function() {
    return gulp
        .src('./src/**/*.js')
    	.pipe(concat('app.all.js'))
        .pipe(gulp.dest('./build/'));
    });
