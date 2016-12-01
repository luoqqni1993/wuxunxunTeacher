var Com=React.createClass({
	render:function(){
		var name=this.getProps("name");
		var test=this.getProps("test");
		return (
			<div>
				<p>大哥来了,还不上烟?</p>
				{test}
				{name}
			</div>
		)
	},
	getProps:function(type){
		if(this.props[type]){
			return this.props[type];
		}else{
			return type+"去哪了?";
		}
	}
});
ReactDOM.render(<Com name="1628最棒，我就是一个属性而已"></Com>,document.getElementById("app"));
