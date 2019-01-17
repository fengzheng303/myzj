var gulp = require("gulp");
var sass = require("gulp-sass");

var sourcemaps = require("gulp-sourcemaps");
var connect = require("gulp-connect");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var babel = require("gulp-babel");

//创建一个任务
gulp.task("hello",function(){
	console.log("hello world");
});
gulp.task("copyHtml",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
});
gulp.task("copy-img",function(){
	gulp.src("img/**")
	.pipe(gulp.dest("dist/img"));
});
gulp.task("copyJs",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("dist/js"))
});
gulp.task("watch",function(){
	gulp.watch(["*.html","img/**","sass/*.scss"],["copyHtml","copy-img","sass"]);
})
gulp.task("sass",function(){
	gulp.src("sass/*.scss")
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("dist/css"));
});
gulp.task("server",function(){
	connect.server({
		"root":"dist",
		"livereload":true
	})
});
gulp.task("babel",function(){
	gulp.src("js/es6.js")
	.pipe(babel({"presets":["es2015"]}))
	.pipe(rename("es5.js"))
	.pipe(gulp.dest("dist/js"));
})

//gulp.task("build",["hello","copyHtml","copy-imgs","data"]);
gulp.task("default",["server","watch","copyHtml","copy-img","sass","babel","copyJs"]);


