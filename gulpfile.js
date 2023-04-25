const gulp = require('gulp');
const newer = require('gulp-newer');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('build', () => {
    return gulp.src('src/**/*.ts')
        .pipe(newer('dist'))
        .pipe(tsProject())
        .pipe(gulp.dest('dist'));
});
