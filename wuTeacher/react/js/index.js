var Com=React.createClass({
	render:function(){
		return(
			<div>
				<p>我是React,欢迎来学习,记得把引入文件的type改为text/bable</p>
			</div>
		)
	}
});
ReactDOM.render(<Com></Com>,document.getElementById("app"));
