/// <binding BeforeBuild='_build' Clean='_clean' />
var gulp = require("gulp"),
    del = require("del"),
    exec = require('child_process').exec,
    babel = require("gulp-babel"),
    less = require("gulp-less"),
    sourcemaps = require("gulp-sourcemaps");

//#region Build Tasks
gulp.task('build:jspm', function (cb) {
    gulp.src("src/config.js")
        .pipe(gulp.dest("wwwroot/"));
    exec("jspm install", function (err, stdout, stderr) {
        console.log(stdout);
        console.error(stderr);
        cb(err);
    });
});

gulp.task('build:js', function () {
    // Copy everything but the config.js through the Babel transpiler with source modules
    return gulp.src(["src/**/*.js", "!src/config.js"])
        .pipe(sourcemaps.init())
        .pipe(babel({ modules: "system" }))
        .pipe(sourcemaps.write({ includeContent: false, sourceRoot: "/src/" }))
        .pipe(gulp.dest("wwwroot/"));
});

gulp.task('build:html', function () {
    // Copy all the HTML files plus the src/config.js file into place
    return gulp.src(["src/**/*.html"])
        .pipe(gulp.dest("wwwroot/"));
});

gulp.task('build:css', function () {
    // Pre-process the site less file through the LESS preprocessor
    return gulp.src("src/less/styles.less")
        .pipe(sourcemaps.init())
        .pipe(less({ paths: "src/less" }))
        .pipe(sourcemaps.write({ includeContent: false, sourceRoot: "/src/" }))
        .pipe(gulp.dest("wwwroot/styles"));
});

gulp.task("_build", ["build:jspm", "build:js", "build:css", "build:html"]);
//#endregion

//#region Clean-up Tasks
gulp.task("_clean", function (cb) {
    del([
        "wwwroot/**"
    ], cb);
});
//#endregion