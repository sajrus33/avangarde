const gulp = require("gulp");
const concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");
const watch = require("gulp-watch");



gulp.task("watch", function () {
    watch(["./src/css/*.css"], () => {
        return gulp.src(['./src/css/variables.css', './src/css/form.css', './src/css/typeForm.css', './src/css/specialistForm.css', './src/css/dateForm.css', './src/css/summaryForm.css', './src/css/detailForm.css', './src/css/media.css'])
            .pipe(concat("index.css"))
            .pipe(cleanCSS())
            .pipe(gulp.dest("./public/css/"));
    });
});

