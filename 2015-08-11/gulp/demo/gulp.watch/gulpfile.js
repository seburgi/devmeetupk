var gulp = require('gulp');
var del = require('del');

gulp.task('default', ['grunt-watcher']);

/**
 * look out for Grunt and attack
 * @return {Stream}
 */
gulp.task('grunt-watcher', function() {
	console.log('Look out for Grunt and attack!')

    gulp.watch('Gruntfile', function(event) {
    	if(event.type === 'deleted') return;

        console.log('Grunt detected! ' + event.path + ' was ' + event.type + ', will be deleted.')
        del(event.path);
    })
});
