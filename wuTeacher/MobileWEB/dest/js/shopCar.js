function pageInit(){sessionStorage.setItem("loginData","zhuabc"),carBox=$(".car-box"),carList=carBox.find("li").clone(!1),loginName=sessionStorage.getItem("loginData"),loginName?getCarGoods(loginName):show("您尚未登入,请登入后再试!"),$(".car-box").on("click",".number-btn",function(){var a=$(this).attr("data-type"),t=1*$(this).closest("li").find("input").val();switch(a){case"add":t++;break;case"minus":t--}$(this).closest("li").find("input").val(t),clearTimeout(userAction),updateCountInfo(),userAction=setTimeout(function(){updatePage()},1e3)})}function updatePage(){var a=carBox.find("li");a.each(function(){var a=$(this).attr("data-goodsID"),t=1*$(this).find("input").val(),n={userID:loginName,goodsID:a,number:t};addShopCar(n)})}function getCarGoods(a){$.ajax({url:"http://datainfo.duapp.com/shopdata/getCar.php",type:"post",data:"userID="+a,dataType:"JSONP",success:function(a){0==a||addPageData(a)}})}function addPageData(a){carBox.empty();for(var t in a){var n=carList.clone(!1),i=a[t].goodsListImg,o=a[t].goodsName,e=1*a[t].price,d=1*a[t].number;n.find("img").attr("src",i),n.find(".goods-name").text(o),n.find(".price").find("i").text(e),n.find("input").val(d),n.attr("data-goodsID",a[t].goodsID),carBox.append(n)}updateCountInfo()}function updateCountInfo(){var a=carBox.find("li"),t=0,n=0;a.each(function(){var a=1*$(this).find("input").val(),i=1*$(this).find(".price").find("i").text();t+=a,n+=a*i}),n=n.toFixed(2),$(".car-data-box").find(".number").text(t),$(".car-data-box").find(".count").text("¥"+n)}var carBox,carList,loginName=null,userAction;pageInit();