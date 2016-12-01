getPageInit();
var navBox,navList,goodsBox,goodsList,goodsDataBuff,onGoodsObj={classID:0,pageCode:0};
function getPageInit(){
	navBox={
		l:$(".goods-class.landscape").find("ul"),
		p:$(".goods-class.portrait").find("ul")
	}
	navList={
		l:navBox.l.find("li").clone(false),
		p:navBox.p.find("li").clone(false)
	}
	goodsBox=$(".goods-list");
	goodsList=goodsBox.find("li").clone(false);

	goodsDataBuff=[];
	loadClassNav();
	loadGoodsList();

	$(".page-btn").click(function(){
		var btnType=$(this).attr("data-type");
		switch(btnType){
			case "back":
			if(onGoodsObj.pageCode !=0){
				onGoodsObj.pageCode--;
				loadGoodsList(onGoodsObj);
			}
			break;
			case "next":
			onGoodsObj.pageCode++;
			loadGoodsList(onGoodsObj);
			break;
		}
	});

}
function loadClassNav(){
	$.get("http://datainfo.duapp.com/shopdata/getclass.php",function(data){

		data=JSON.parse(data);
		console.log(data);
		navBox.l.empty();
		navBox.p.empty();

		for(var i in data){
			var dom={
				l:navList.l.clone(false),
				p:navList.p.clone(false)
			}
			dom.l.find(".iconfont").html(data[i].icon);
			dom.l.find(".class-name").text(data[i].className);
			dom.l.attr("data-classID",data[i].classID);

			dom.p.find(".iconfont").html(data[i].icon);
			dom.p.attr("data-classID",data[i].classID);

			navBox.l.append(dom.l);
			navBox.p.append(dom.p);
		}
		$(".goods-class").find("li").click(function(){
			var classID=$(this).attr("data-classID");
			loadGoodsList({classID:classID,pageCode:0});

			$(".goods-class").find(".active").removeClass("active");
			$(".goods-class").find("li[data-classID='"+classID+"']").addClass("active");
		});
		var num=data.length;
		navBox.p.width(num*0.57+"rem");
	});
}
function loadGoodsList(obj){
	var ajaxData="";
	if(obj){
		if(obj.classID){
			ajaxData="classID="+obj.classID+"&";
		}else{
			obj.classID=0;
		}
		if(obj.pageCode!=0&&!!obj.pageCode){
			ajaxData="pageCode="+obj.pageCode+"&";
		}else{
				ajaxData="pageCode=0&";
				obj.pageCode=0;
		}
	}else{
		var obj={
			classID:0,
			pageCode:0
		}
	}
	for(var i in goodsDataBuff){
		if(goodsDataBuff[i].classID==obj.classID){
			var bData=null;

			for(var j in goodsDataBuff[i].goodsList){
				if(goodsDataBuff[i].goodsList[j].pageCode==obj.pageCode){
					bData=goodsDataBuff[i].goodsList[j].dataList;
				}
			}
			if(!bData){
				addBuff(obj,function(){
					loadGoodsList(obj);
				});
				return;
			}
			addGoodsData(bData);
			onGoodsObj=obj;
			return;
		}
	}
	addBuff(obj,function(){
		loadGoodsList(obj);
	});
}
function addGoodsData(data){
	goodsBox.empty();

	for(var i in data){
		var dom=goodsList.clone(false);

		var imgSrc=data[i].goodsListImg;
		var goodsName=data[i].goodsName;
		var price=data[i].price*1;
		var discount=data[i].discount/10;
		var oldPrice=price;
		if(discount!=0){
			oldPrice=price/(data[i].discount/10);
		}
		oldPrice=oldPrice.toFixed(2);

		dom.find("img").attr("src",imgSrc);
		dom.find(".goods-name").text(goodsName);
		dom.find(".text").find("span").text("¥ "+price);
		dom.find(".text").find("del").text("¥ "+oldPrice);

		goodsBox.append(dom);
	}
}
function addBuff(obj,callBack){
	var ajaxData="";
	if(obj){
		if(obj.classID){
			ajaxData="classID="+obj.classID+"&";
		}else{
			obj.classID=0;
		}

		if(obj.pageCode!=0){
			ajaxData=ajaxData+"pageCode="+obj.pageCode+"&";
		}else{
			ajaxData=ajaxData+"pageCode=0&";
			obj.pageCode=0;
		}
	}else{
		var obj={
			classID:0,
			pageCode:0
		}
	}
	$.ajax({
		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
		type:"post",
		data:ajaxData,
		dataType:"JSONP",
		success:function(data){
			if(data!=0){
				for(var i in goodsDataBuff){
					if(goodsDataBuff[i].classID==obj.classID){
						var listObj={
							pageCode:obj.pageCode,
							dataList:data
						}
						goodsDataBuff[i].goodsList.push(listObj);

						if(callBack)callBack();
						return;
					}
				}
				var buffObj={
					classID :obj.classID,
					goodsList:[{
						pageCode:obj.pageCode,
						dataList:data
					}]
				}
				goodsDataBuff.push(buffObj);

				if(callBack)callBack();
			}else{
				onGoodsObj.pageCode--;
			}
		}
	});
}