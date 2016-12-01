var count=0;
var Com=React.createClass({
	getDefaultProps:function(){
		return {
			count:count
		}
	},
	getInitialState:function(){
		return{
			dataArr:""
		};
	},
	componentWillMount:function(){
		var that=this;
		$.ajax({
			type:"get",
			url:"http://datainfo.duapp.com/shopdata/getBanner.php?callback=",
			dataType:"JSONP",
			success:function(data){
				var len=data.length;
				var dataArr=[];
				for(var i=0;i<len;i++){
					dataArr.push(JSON.parse(data[i].goodsBenUrl)[0])
				}
				that.setState({
					dataArr:dataArr
				})
			}
		});
	},
	render:function(){
		var arr=this.state.dataArr;
		var dataArr=[];
		var len=arr.length;
		for(var i=0;i<len;i++){
			dataArr.push(<div className="swiper-slide" key={i}><img src={arr[i]}/></div>)
		}
		console.log(dataArr);
		return(
			<div className="swiper-container">
				<div className="swiper-wrapper">
					{dataArr}
				</div>
				<div className="swiper-pagination"></div>
			</div>
		)
	},
	componentDidUpdate:function(){
		var swiper=new Swiper(".swiper-container",{
			pagination:".swiper-pagination",
			autoplay:1000,
		})
	}
});
ReactDOM.render(<div className="myCss"><Com></Com></div>,document.getElementById("app"));
