var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

var paths = {
    styles: ['styles/**/*.scss'],
    scripts: ['scripts/*.js']
};


/**
 * Admin styles and scripts 
 */

gulp.task('styles', function() {
    return gulp.src('styles/styles.scss')
        .pipe(sass({
            outputStyle: 'compressed',
            sourceComments: 'map'
        }))
        .pipe(gulp.dest('assets'));
});
gulp.task('scripts', function() {
    return gulp.src(['scripts/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('assets/scripts'));
});

/**
 * Watch tasks
 */
gulp.task('watch', function() {
    gulp.watch(paths.styles, ['styles']);
    gulp.watch(paths.scripts, ['scripts']);
});


gulp.task('default', ['watch', 'styles', 'scripts']);
