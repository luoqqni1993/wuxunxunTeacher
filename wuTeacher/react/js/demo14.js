var data=["1","2","3"];
var Com=React.createClass({
	render:function(){
		var arr=[];
		var len=data.length;
		for(var i=0;i<len;i++){
			arr.push(<div className="swiper-slide" key={i}>我是第{i+1}个</div>)
		}
		return(
			<div className="swiper-container">
				<div className="swiper-wrapper">
					{arr}
				</div>
				<div className="swiper-pagination"></div>
			</div>
		)
	},
	componentDidMount:function(){
		var swiper=new Swiper(".swiper-container",{
			pagination:".swiper-pagination",
		})
	}
});
ReactDOM.render(<div className="myCss"><Com></Com></div>,document.getElementById("app"));
