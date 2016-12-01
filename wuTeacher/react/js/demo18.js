var Parent=React.createClass({
	getInitialState:function(){
		return{
			property:""
		}
	},
	render:function(){
		var that=this;
		return (
			<div>
				<p>我是父亲,我孩子孝敬我的零花钱property</p>
				金额:{this.state.property}
				<Child num={
					function(property){
						console.log("property",property);
						that.setState({
							property:property
						})
					}
				}/>
			</div>
		)
	}
});
var Child=React.createClass({
	getInitialState:function(){
		console.log("state",this.props.num);
		return{
			property:this.props.num
		}
	},
	changeHandle:function(event){
		console.log(this.props.num);
		var _v=event.target.value;
		this.setState({
			property:_v
		})
		this.props.num(_v);
	},
	render:function(){
		return(
			<div>
				<input onChange={this.changeHandle}/>
				<p>我是孩子,我给了父亲{this.state.property}</p>
			</div>
		)
	}
})
ReactDOM.render(<Parent></Parent>,document.getElementById("app"));
