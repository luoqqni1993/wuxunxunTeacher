var Parent=React.createClass({
	getInitialState:function(){
		return{
			property:""
		}
	},
	changeHandle:function(event){
		console.log(event);
		console.log(event.target);
		console.log(event.target.value);
		this.setState({
			property:event.target.value;
		})
	},
	render:function(){
		return (
			<div>
				<p>我是父亲,我想给孩子一点家产</p>
				家产:<input type="number" onChange={this.changeHandle} min="0" max="10"/>
				<Child num={this.state.property}/>
			</div>
		)
	}
});
var Child=React.createClass({
	render:function(){
		return(
			<div>
				<p>我是孩子</p>
				我得到了{this.props.num}的家产
			</div>
		)
	}
});
ReactDOM.render(<Parent></Parent>,document.getElementById("app"));
