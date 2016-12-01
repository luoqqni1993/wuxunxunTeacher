var Com=React.createClass({
	render:function(){
		return(
			<div>
				<p>我是瓜哥,来学习react</p>
				{this.props.name ? this.props.name : "去你妹!!!!!!"}
				{this.props.test}
			</div>
		)
	}
});
ReactDOM.render(<Com name="你大哥"  test="&nbsp;&nbsp;真简单,这还用学?"></Com>,document.getElementById("app"));
