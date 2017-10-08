const gulp = require("gulp");
const babel = require("gulp-babel");
const plumber = require("gulp-plumber");

const src = ["./src/**/*.js", "!./src/**/__tests__/**"];

const buildEs = () =>
  gulp
    .src(src)
    .pipe(gulp.dest("./es"));

const buildLib = () =>
  gulp
    .src(src)
    .pipe(plumber())
    .pipe(
      babel({
        presets: ["es2015"],
        babelrc: false,
      }),
    )
    .pipe(gulp.dest("./lib"));

const flowEs = () => gulp.src("./src/**/*.js.flow").pipe(gulp.dest("./es"));

const flowLib = () => gulp.src("./src/**/*.js.flow").pipe(gulp.dest("./lib"));

const build = gulp.series(gulp.parallel(buildEs, buildLib), gulp.parallel(flowEs, flowLib));

module.exports = {
  build,
};
