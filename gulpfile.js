const gulp = require('gulp')
const ts = require('gulp-typescript')
var tsProject = ts.createProject('tsconfig.json')

gulp.task('default', function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist'))
})