var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var del = require("del");
var usemin = require("gulp-usemin");
var cssmin = require("gulp-cssmin");
var rev = require("gulp-rev");
var uglify = require("gulp-uglify");

gulp.task("deleteDistFolder", function(){
    var pathsToDelete = [
    "./js",
    "./index.html",
    "./assets",
    "./templates",
    "./articles"
  ]
  
  return del(pathsToDelete);
});

gulp.task("copyGeneralFiles", ["deleteDistFolder"], function(){
  var pathsToCopy = [
    "./app/**/*",
    "!./app/index.html",
    "!./app/assets/images/**",
    "!./app/assets/styles/**",
    "!./app/assets/scripts/**",
    "!./app/temp",
    "!./app/temp/**"
  ]

  return gulp.src(pathsToCopy)
  .pipe(gulp.dest("./"));
});

gulp.task("optimizeImages", ["deleteDistFolder"], function() {
  return gulp.src(["./app/assets/images/**/*"])
  .pipe(imagemin({
    progressive: true,
    interlaced: true,
    multipass: true
  }))
  .pipe(gulp.dest("./assets/images"));
});

gulp.task("useminTrigger", ["deleteDistFolder"], function() {
  gulp.start("usemin");
});

gulp.task("usemin", ["styles"], function(){
  return gulp.src("./app/index.html")
  .pipe(usemin({
    css: [function() {return rev()}, function() {return cssmin()}],
    js: [function() {return rev()}, function() {return uglify()}]
  }))
  .pipe(gulp.dest("./"));
});

gulp.task("build", ["deleteDistFolder","copyGeneralFiles", "optimizeImages", "useminTrigger"]);
