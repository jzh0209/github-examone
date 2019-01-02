var gulp = require('gulp');

var server = require('gulp-webserver');

var sass = require('gulp-sass');

var uglify = require('gulp-uglify');

var clean = require('gulp-clean-css');

var concat = require('gulp-concat');

//编译scss
gulp.task('sass', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
})

//起服务
gulp.task('server', function() {
    return gulp.src('src')
        .pipe(server({
            port: 8686,
            livereload: true //自动刷新
        }))
})

//监听
gulp.task('watch', function() {
    return gulp.src('./src/scss/*.scss', gulp.series('sass'))
})

//开发环境
gulp.task('default', gulp.series('sass', 'server', 'watch'))

//压缩js
gulp.task('bJs', function() {
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
})

//压缩css
gulp.task('bCss', function() {
    return gulp.src('./src/css/*.css')
        .pipe(clean())
        .pipe(gulp.dest('./dist/css'))
})

//线上环境
gulp.task('build', gulp.series('bJs', 'bCss'))