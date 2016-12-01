var SecondCom=React.createClass({
	render:function(){
		return(
			<p>我是子组件</p>
		)
	}
})
var Com=React.createClass({
	render:function(){
		return(
			<div>
				<p>我是父组件</p>
				<SecondCom/>
			</div>
		)
	}
});
ReactDOM.render(<div className="myCss"><Com></Com></div>,document.getElementById("app"));
