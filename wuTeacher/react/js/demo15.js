var count=0;
var Com=React.createClass({
	getDefaultProps:function(){
		return{
			count:count
		}
	},
	getInitialState:function(){
		return{
			count:count++,
			flag:"ok"
		};
	},
	componentWillMount:function(){
		this.setState({
			flag:"error"
		})
	},
	render:function(){
		return(
			<div>
				<p>真有意思</p>
				<p>计数器props:{this.props.count}</p>
				<p>计数器state:{this.state.count}</p>
				<p>标识:{this.state.flag}</p>
			</div>
		)
	},
	componentDidMount:function(){
		
	}
});
ReactDOM.render(<div className="myCss"><Com></Com><Com></Com><Com></Com><Com></Com><Com></Com></div>,document.getElementById("app"));
