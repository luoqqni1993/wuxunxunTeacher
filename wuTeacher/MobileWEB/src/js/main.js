var goodsBox=$(".goods-list");
var goodsLiDom=goodsBox.find("li").clone(false);
var classBox=$(".goods-class.portrait").find("ul");
var classLiDom=classBox.find("li").clone(false);
var lClassBox=$(".goods-class.landscape").find("ul");
var lClassLiDom=lClassBox.find("li").clone(false);
var goodsPageData=[];
$.get("http://datainfo.duapp.com/shopdata/getclass.php",function(data){
	console.log(data);
	data=JSON.parse(data);
	classBox.empty();
	lClassBox.empty();

	for(var i in data){
		var lLi=lClassLiDom.clone(false);
		if(i==0){
			lLi.addClass("active");
		}
		lLi.find(".iconfont").html(data[i].icon);
		lLi.find(".class-name").text(data[i].className);
		lLi.attr("data-classID",data[i].classID);
		lClassBox.append(lLi);
		var li=classLiDom.clone(false);
		li.attr("data-classID",data[i].classID);
		li.find("a").html(data[i].icon);
		console.log(data[i].icon);
		classBox.append(li);
	}
	$(".goods-class").find("li").click(function(){
		var classID=$(this).attr("data-classID");
		getGoodsList(classID);
		$(".goods-class").find(".active").removeClass("active");
		$(this).addClass("active");
	});
	var num=data.length;
	classBox.width(num*0.57+"rem");
});
getGoodsList();
function getGoodsList(){
	var goodsData="";
	var gi=0;
	if(!!arguments[0]){
		goodsData="classID="+arguments[0];
		gi=arguments[0];
	}
	if(goodsPageData.length==0){
		$.ajax({
			url:"http://datainfo.duapp.com/shopdata/getGoods.php",
			type:"post",
			dataType:"JSONP",
			data:goodsData,
			success:function(data){
				var abc={
					classID:gi,
					dataList:data
				};
				goodsPageData.push(abc);
				domUpdate(data);
			}
		});
	}else{
		for(var i in goodsPageData){
			if(goodsPageData[i].calssID==arguments[0]){
				var data=goodsPageData[i].dataList;
				domUpdate(data);
				return;
			}
		}
		$.ajax({
			url:"http://datainfo.duapp.com/shopdata/getGoods.php",
			type:"post",
			dataType:"JSONP",
			data:goodsData,
			success:function(data){
				var abc={
					classID:gi,
					dataList:data
				};
				goodsPageData.push(abc);
				domUpdate(data);
			}
		});
	}
	function domUpdate(data){
		goodsBox.empty();

		for(var i in data){
			var imgSrc=data[i].goodsListImg;
			var goodsName=data[i].goodsName;
			var price=data[i].price*1;
			var discount=data[i].discount/10;
			var oldPrice=price;
			if(discount!=0){
				oldPrice=price/(data[i].discount/10);
			}
			oldPrice=oldPrice.toFixed(2);
			var li=goodsLiDom.clone(false);
			li.find("img").attr("src",imgSrc);
			li.find(".good-name").text(goodsName);
			li.find(".text").find("span").text("¥"+price);
			li.find(".text").find("del").text("¥"+oldPrice);
			goodsBox.append(li);
		}
	}
}
/*$.ajax({
	url:"http://datainfo.duapp.com/shopdata/getGoods.php",
	type:"post",
	dataType : "JSONP",
	success :function(data){

		var goodsBox = $(".goods-list");
		var liDom = goodsBox.find("li").clone(false);
		goodsBox.empty();

		for(var i in data){
			var imgSrc = data[i].goodsListImg;
			var goodsName = data[i].goodsName;
			var price = data[i].price*1;
			var discount = data[i].discount/10;
			var oldPrice = price;
			if(discount != 0){
				oldPrice = price/(data[i].discount/10);
			}

			oldPrice = oldPrice.toFixed(2);

			var li = liDom.clone(false);

			li.find("img").attr("src",imgSrc);
			li.find(".goods-name").text(goodsName);
			li.find(".text").find("span").text("¥ "+price);
			li.find(".text").find("del").text("¥ "+oldPrice);

			goodsBox.append(li);
			
		}

	}
});*/