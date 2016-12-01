var gulp=require("gulp");//引入gulp模块，赋给变量gulp
var less=require("gulp-less");
var cssClean=require("gulp-clean-css");
var htmlmin=require("gulp-htmlmin");
var connect=require("gulp-connect");
gulp.task("css",function(){
	gulp.src("src/public/less/abc.less").pipe(less()).pipe(cssClean()).pipe(gulp.dest("dest/public/css"));
});
gulp.task("watch",function(){
	gulp.watch("src/public/less/*.less",["css","cssload","htmlload"]);
	gulp.watch("src/*.html",["html","htmlload"]);
	
});
gulp.task("server",function(){
	connect.server({
		root:"dest",
		port:"8003",
		livereload:true
	});
});
gulp.task("htmlload",function(){
	gulp.src("dest/*.html").pipe(connect.reload());
});
gulp.task("cssload",function(){
	gulp.src("dest/public/css/*.css").pipe(connect.reload());
});
gulp.task("init",["css","html"]);
gulp.task("default",["server","watch"]);
gulp.task("html",function(){
	var obj={
		removeComments:true,
		collapseWhitespace:true,
		removeEmptyAttributes:true,
		removeScriptTypeAttributes:true,
		minifyJS:true,
		miniCss:true
	};
	gulp.src("src/*.html").pipe(htmlmin(obj)).pipe(gulp.dest("dest/"));
})