var bannerBox,bannerSlide,imgBox,contentBox;
pageInit();
function pageInit(){
	bannerBox=$(".goods-content-banner").find(".swiper-wrapper");
	bannerSlide=bannerBox.find(".swiper-slide").clone(false);
	imgBox=$(".img-box");
	contentBox=$(".goods-content-text");
	getContentData(3);
}
function getContentData(goodsID){
	$.ajax({
		url:"http://datainfo.duapp.com/shopdata/getGoods.php",
		type:"post",
		data:"goodsID="+goodsID,
		dataType:"JSONP",
		success:function(data){
			console.log(data);
			loadPageData(data);
		}
	});
}
function loadPageData(data){
	data=data[0];

	var imgList=JSON.parse(data.imgsUrl);
	var bannerList=JSON.parse(data.goodsBenUrl);
	var goodsName=data.goodsName;
	var price=data.price;
	var discount=data.discount;
	var oldPrice=price;
	var number=data.buynumber;
	var contentList=data.detail.split("。");
	if(discount!=0){
		discount=discount*1;
		oldPrice=price*1/(discount/10);
	}
	bannerBox.empty();
	imgBox.empty();
	contentBox.empty();

	for(var i in imgList){
		var bannerDom=bannerSlide.clone(false);
		bannerDom.find("img").attr("src",imgList[i]);
		bannerBox.append(bannerDom);
	}
	for(var ii in imgList){
		var imgDom = $("<img />");
		imgDom.attr("src",imgList[ii]);

		imgBox.append(imgDom);
	}
	$(".goods-name").text(goodsName);
	$(".price").find("span").text("¥"+price);
	$(".price").find("del").text(oldPrice);
	$(".shop-number").find("span").text(number);

	
	var mySwiper=new Swiper(".swiper-container",{
		autoplay:3000,
		loop:true
	});
	for(var i in contentList){
		var conDom=$("<li></li>");
		conDom.text(contentList[i]);
		contentBox.append(conDom);
	}

}