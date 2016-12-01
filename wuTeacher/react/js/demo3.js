var Com=React.createClass({
	render:function(){
		return(
			<div>
				<p>我是React,欢迎来学习,记得把引入文件的type改为text/babel</p>
				{this.props.name}
				{this.props.test}
			</div>
		)
	}
});
ReactDOM.render(<Com name="1628最棒,我就一个属性而已" test="你感觉怎么样"></Com>,document.getElementById("app"));
