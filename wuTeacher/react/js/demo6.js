var Com=React.createClass({
	render:function(){
		return (
			<div>
				<p>大哥来了,还不上烟?</p>
				{this.getProps("name")}
				{this.getProps("test")}
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
