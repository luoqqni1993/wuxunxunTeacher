var Parent=React.createClass({
	getInitialState:function(){
		return {
			property:""
		}
	},
	changeHandle:function(event){
		var _v=event.target.value;
		this.setState({
			property:_v
		});
	},
	render:function(){
		var that=this;
		return (
			<div>
				<input onChange={this.changeHandle}/>
				状态:{this.state.property}
				<Child num={this.state.property}/>
			</div>
		)
	}
});
var Child=React.createClass({
	componentWillReceiveProps:function(a,b){
		console.log("我被修改了")
		console.log("a:",a)
		this.setState({
			num:a.num
		})
		console.log("b:",b)
	},
	getInitialState:function(){
		console.log("state",this.props.num)
		return {
			num:""
		};
	},
	shouleComponentUpdate:function(){
		return true;
	},
	componentWillUpdate:function(){
		console.log("will")
	},
	render:function(){
		console.log("diong")
		return (
			<div>
				<p>我是孩子,我给了父亲{this.props.num}</p>
				{this.state.num}
				<p id="msg"></p>
			</div>
		)
	},
	componentDidUpdate:function(){
		console.log("did");
		$("#msg").append("<h1>我完成啦</h1>")
	}
})
ReactDOM.render(<Parent></Parent>,document.getElementById("app"));
