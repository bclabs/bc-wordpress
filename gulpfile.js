var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

var paths = {
    styles: ['www/styles/**/*.scss'],
    scripts: ['www/scripts/*.js']
};


/**
 * Admin styles and scripts 
 */

gulp.task('styles', function() {
    return gulp.src('www/styles/styles.scss')
        .pipe(sass({
            outputStyle: 'compressed',
            sourceComments: 'map'
        }))
        .pipe(gulp.dest('www/assets'));
});
gulp.task('scripts', function() {
    return gulp.src(['www/scripts/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('www/assets/scripts'));
});

/**
 * Watch tasks
 */
gulp.task('watch', function() {
    gulp.watch(paths.styles, ['styles']);
    gulp.watch(paths.scripts, ['scripts']);
});


gulp.task('default', ['watch', 'styles', 'scripts']);
