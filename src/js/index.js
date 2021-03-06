gulp.task('watch', function() {
    return gulp.src('./src/scss/*.scss', gulp.series('sass'))
})
gulp.task('default', gulp.series('sass', 'server', 'watch'))

gulp.task('bJs', function() {
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
})