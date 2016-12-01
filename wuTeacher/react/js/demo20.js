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
		return(
			<div>
				<input onChange={this.changeHandle}/>
				状态:{this.state.property}
				<Child num={this.state.property}/>
			</div>
		)
	},
	componentWillUnmount:function(){
		console.log("gameoverparent")
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
		if(this.state.num=="1000"){
			ReactDOM.unmountComponentAtNode(document.getElementById("app"));
			return;
		}
		return (
			<div>
				<p>如果我的父亲给了1000块,我就不干啦</p>
				给了:{this.state.num}
			</div>
		)
	},
	componentDidUpdate:function(){
		console.log("did")
	},
	componentWillUnmount:function(){
		console.log("gameoverchild")
	}
})
ReactDOM.render(<Parent></Parent>,document.getElementById("app"));
