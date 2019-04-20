let	gulp = require("gulp"),
	jsmin = require("gulp-uglify"),
	htmlmin = require("gulp-htmlmin"),
	cssmin = require("gulp-clean-css");

gulp.task("css", function(){
	gulp.src("src/css/*.css")
		.pipe(cssmin())
		.pipe(gulp.dest("dist/css"));
});

gulp.task("html", function(){
	gulp.src("src/**/*.html")
		.pipe(htmlmin({collapseWhitespace: true, minifyCSS: true, minifyJS:true}))
		.pipe(gulp.dest("dist"));
})

gulp.task("js", function(){
	gulp.src("src/js/*.js")
		.pipe(jsmin())
		.pipe(gulp.dest("dist/js"));
});

//静态资源
gulp.task("mock",function(){
	gulp.src(["src/mock/**/*.*"])
		.pipe(gulp.dest("dist/mock"));
})

gulp.task("lib",function(){
	gulp.src(["src/lib/**/*.*"])
		.pipe(gulp.dest("dist/lib"));
})
gulp.task("copy",["mock","lib"]);

// gulp.task("",function(){
	
// })

gulp.task("default",["css","html","js","copy"])