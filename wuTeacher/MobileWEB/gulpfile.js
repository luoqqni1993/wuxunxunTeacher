var gulp=require("gulp");
var less=require("gulp-less");
var htmlmin=require("gulp-htmlmin");
var connect=require("gulp-connect");
var cssClean=require("gulp-clean-css");
var jsmin=require("gulp-uglify");
gulp.task("css",function(){
	gulp.src("src/less/*.less").pipe(less()).pipe(gulp.dest("dest/css"));
	gulp.src("src/css/*.css").pipe(cssClean()).pipe(gulp.dest("dest/css"));
});
gulp.task("js",function(){
	var jsData={
		mangle:{except:['require','exports','module','$']}
	};
	gulp.src(["src/js/*.js","!src/js/jquer*.js"]).pipe(jsmin(jsData)).pipe(gulp.dest("dest/js"));
});
gulp.task("html",function(){
	var options={
		removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS

	}
	gulp.src("src/*.html").pipe(htmlmin(options)).pipe(gulp.dest("dest"));
});
gulp.task("init",["html","css","js"]);
gulp.task("htmlload",function(){
	gulp.src("dest/*.html").pipe(connect.reload());
});
gulp.task("cssload",function(){
	gulp.src("dest/css/*.css").pipe(connect.reload());
});
gulp.task("jsload",function(){
	gulp.src("dest/js/.*js").pipe(connect.reload());
})
gulp.task("watch",function(){
	gulp.watch("src/*.html",["html","htmlload"]);
	gulp.watch("src/less/*.less",["css","cssload","htmlload"]);
	gulp.watch("src/js/*.js",["js","jsload","htmlload"]);

});
gulp.task("server",function(){
	connect.server({
		root:"dest",
		port:"8001",
		livereload:true
	})
});
gulp.task("default",["server","watch"]);