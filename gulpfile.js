var gulp = require('gulp'),
	// sass = require('gulp-sass'),
	browserSync = require('browser-sync');



gulp.task('serve', function(){
	browserSync({
		server: {
			baseDir: ''
		}
	});
});

gulp.task('watch',['serve', 'sass'], function(){
	// gulp.watch('app/sass/*.sass', ['sass']);
	gulp.watch('*.html', browserSync.reload);
	gulp.watch('js/*.js', browserSync.reload);
});