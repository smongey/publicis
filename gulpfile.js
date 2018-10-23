'use strict';

var gulp = require('gulp');

// load plugins
var $ = require('gulp-load-plugins')(),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    gutil = require('gulp-util'),
    filter = require('gulp-filter'),
    plumber = require('gulp-plumber'),
    php = require('gulp-connect-php'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify-es').default,
    minify = require('gulp-minify'),
    rename = require('gulp-rename'),
    pump = require('pump');


var paths = {
  scss: 'assets/scss/*.scss',
  js: 'assets/scripts/*.js',
  // images: './source/assets/images/*',
  // fonts: './source/assets/fonts/*'
};

gulp.task('styles', function(){
    return gulp.src(paths.scss)
    
    .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            gutil.beep();
            this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe($.autoprefixer('last 1 version'))
    .pipe(filter('**/*.css'))
    // .pipe($.csso())
    .pipe(sourcemaps.write('../css'))
    .pipe(gulp.dest('./assets/css/'))
    .pipe(reload({stream:true}))
    .pipe($.size());
});

gulp.task('scripts', function(){
    return gulp.src([paths.js, '!assets/scripts/*.min.js'])
    .pipe($.jshint())
    .pipe(uglify())
    .pipe($.jshint.reporter(require('jshint-stylish')))
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('./assets/scripts'))
    .pipe(reload({stream:true, once: true}))
    .pipe($.size());
});

gulp.task('scripts-build', function(){
    return gulp.src('./assets/scripts/vendor/*.js')
    .pipe($.uglify())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./assets/scripts'))
    .pipe($.size());
});

gulp.task('images', function () {
    return gulp.src('assets/images/**/*')
        .pipe($.cache($.imagemin({
            optimizationLevel: 8,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('assets/images'))
        .pipe($.size());
});


gulp.task('fonts', function () {
    return gulp.src(mainBowerFiles())
        .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
        .pipe($.flatten())
        .pipe(gulp.dest('assets/fonts'))
        .pipe($.size());
});



gulp.task('content', ['styles', 'scripts'], function () {
    var jsFilter = $.filter('**/*.js');
    var cssFilter = $.filter('**/*.css');

    return gulp.src('app/**/*.php')
        .pipe($.useref.assets({searchPath: '{.tmp,assets}'}))
        .pipe(jsFilter)
        .pipe($.uglify())
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe(cssFilter.restore())
        .pipe($.useref.restore())
        .pipe($.useref())
        .pipe(gulp.dest('dist'))
        .pipe($.size());
});


gulp.task('build', ['styles', 'scripts', 'images', 'fonts']);

gulp.task('default',  function () {
    // gulp.start('build');
    console.log('Please choose build, watch, or serve');
});

gulp.task('php', function() {
    php.server({ 
        hostname: '127.0.0.1',
        base: '.',
        port: 8000,
        keepalive: true
    });
});

gulp.task('serve', ['php','styles', 'scripts'], function () {
    browserSync({
        proxy: '127.0.0.1:8000',
        port: 8080,
        open: true,
        notify: false
    });
});


// gulp.task('watch', ['connect', 'serve'], function () {
gulp.task('watch', ['serve'], function () {

    // watch for changes
    gulp.watch([
        '**/*.php',
        'assets/images/**/*',
        // 'app/content/**/*'
    ], reload);

    gulp.watch('assets/scss/**/*.scss', ['styles']);
    gulp.watch('assets/scripts/**/*.js', ['scripts']);
    gulp.watch('assets/images/**/*', ['images']);

});