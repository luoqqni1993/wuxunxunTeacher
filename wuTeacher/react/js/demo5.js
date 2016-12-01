var Com=React.createClass({
	render:function(){
		return (
			<div>
				<p>大哥来了,还不上烟?</p>
				{this.props.name ? this.props.name : "你可以死了"}
				{this.props.test || "跑哪去了?"}
			</div>
		)
	}
});
ReactDOM.render(<Com name="大哥" test="&nbsp;&nbsp;还不上火"></Com>,document.getElementById("app"));
