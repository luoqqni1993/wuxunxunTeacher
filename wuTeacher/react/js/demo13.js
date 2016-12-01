var data=["1","2","3"];
var Com=React.createClass({
	render:function(){
		var arr=[];
		var len=data.length;
		for(var i=0;i<len;i++){
			arr.push(<p key={i}>我是第{i+1}个</p>)
		}
		return (
			<div>
				<p>我是父组件</p>
				{arr}
			</div>
		)
	}
});
ReactDOM.render(<div className="myCss"><Com></Com></div>,document.getElementById("app"));
