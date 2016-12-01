var Com=React.createClass({
	render:function(){
		return (
			<div>
				<p>大哥来学习react啦</p>
				{function(obj){
					if(obj.props.name){
						return obj.props.name;
					}
					else{
						return "藏着捏着";
					}
				}(this)}
			</div>
		)
	}
});
ReactDOM.render(<Com></Com>,document.getElementById("app"));
