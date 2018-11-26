var gulp = require('gulp'), // Main Gulp module
    open = require('gulp-open'), // Gulp browser opening plugin
    connect = require('gulp-connect'); // Gulp Web server runner plugin
gulp.task('connect', function () {
    connect.server({
        root: './',
        port: 8001,
        livereload: true
    });
});
gulp.task('open', function(){
    gulp.src('/index.html')
        .pipe(open({uri: 'http://localhost:8001/'}));
});
gulp.task('watch', function () {
    gulp.watch('./*.html', ['html']);
    gulp.watch('./**/*.css', ['css']);
});
gulp.task('html', function() {
    gulp.src('./*.html')
        .pipe(connect.reload());
});
gulp.task('css', function() {
    gulp.src('./*.html')
        .pipe(connect.reload());
});
gulp.task('default', ['html', 'css', 'connect', 'open', 'watch']);
