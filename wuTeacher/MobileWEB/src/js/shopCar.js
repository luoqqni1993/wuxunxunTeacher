var carBox,carList,loginName=null;
var userAction;
pageInit();
function pageInit(){
	sessionStorage.setItem("loginData","zhuabc");
	carBox=$(".car-box");
	carList=carBox.find("li").clone(false);
	loginName=sessionStorage.getItem("loginData");
	if(!loginName){
		show("您尚未登入,请登入后再试!");
	}else{
		getCarGoods(loginName)
	}
	$(".car-box").on("click",".number-btn",function(){
		var eType=$(this).attr("data-type");
		var number=$(this).closest("li").find("input").val()*1;
		switch(eType){
			case "add" :
			number++;
			break;

			case "minus" :
			number--;
			break;
		}
		$(this).closest("li").find("input").val(number);
		clearTimeout(userAction);
		updateCountInfo();
		userAction=setTimeout(function(){
			updatePage();
		},1000);
	});
}
function updatePage(){
	var list=carBox.find("li");
	list.each(function(){
		var goodsID=$(this).attr("data-goodsID");
		var number=$(this).find("input").val()*1;
		var newObj={
			userID:loginName,
			goodsID:goodsID,
			number:number
		}
		addShopCar(newObj);
	});
}
function getCarGoods(userName){
	$.ajax({
		url:"http://datainfo.duapp.com/shopdata/getCar.php",
		type:"post",
		data:"userID="+userName,
		dataType:"JSONP",
		success:function(data){
			if(data==0){

			}else{
				addPageData(data);
			}
		}
	});
}
function addPageData(data){
	carBox.empty();
	for(var i in data){
		var dom=carList.clone(false);
		var imgSrc=data[i].goodsListImg;
		var goodsName=data[i].goodsName;
		var price=data[i].price*1;
		var number=data[i].number*1;

		dom.find("img").attr("src",imgSrc);
		dom.find(".goods-name").text(goodsName);
		dom.find(".price").find("i").text(price);
		dom.find("input").val(number);
		dom.attr("data-goodsID",data[i].goodsID);
		carBox.append(dom);
	}
	updateCountInfo();
}
function updateCountInfo(){
	var list=carBox.find("li");
	var goodsCount=0;
	var goodsPriceCount=0;
	list.each(function(){
		var number=$(this).find("input").val()*1;
		var price=$(this).find(".price").find("i").text()*1;
		goodsCount+=number;
		goodsPriceCount+=number*price;
	});
	goodsPriceCount=goodsPriceCount.toFixed(2);
	$(".car-data-box").find(".number").text(goodsCount);
	$(".car-data-box").find(".count").text("¥"+goodsPriceCount);
}