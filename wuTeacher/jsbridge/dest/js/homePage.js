function pageInit(){bannerBox=$(".index-banner").find(".swiper-wrapper"),bannerSlide=bannerBox.find(".swiper-slide").clone(!1),indexGoodsBox=$(".index-goods-list"),indexGoodsLi=indexGoodsBox.find("li").clone(!1),searchGoodsBox=$(".search-list"),searchGoodsLi=searchGoodsBox.find("li").clone(!1),getIndex(),$(".search-bar").find("input").change(function(){var o=$(this).val();o||$(".index-search").removeClass("show")}),$(".search-btn").click(function(){var o=waiting("正在搜索"),n=$(".search-bar").find("input").val();$.ajax({url:"http://datainfo.duapp.com/shopdata/selectGoodes.php",type:"post",dataType:"JSONP",data:"selectText="+n,success:function(n){if(o(),console.log(n),0==n){var e=$("<p>没有找到相关商品</p>");$(".index-search").append(e)}else loadSearchList(n);$(".index-search").addClass("show")}})})}function getIndex(){var o=waiting("正在加载"),n=!1,e=!1;$.ajax({url:"http://datainfo.duapp.com/shopdata/getGoods.php",type:"post",dataType:"JSONP",success:function(a){loadIndexList(a),e=!0,n&&o()}}),$.ajax({url:"http://datainfo.duapp.com/shopdata/getBanner.php",type:"post",dataType:"JSONP",success:function(a){loadBanner(a),n=!0,e&&o()}})}function loadBanner(o){bannerBox.empty();for(var n in o){var e=bannerSlide.clone(!1),a=o[n].goodsID,d=JSON.parse(o[n].goodsBenUrl)[0];e.find("a").attr("data-goodsID",a),e.find("img").attr("src",d),bannerBox.append(e)}new Swiper(".swiper-container",{autoplay:3e3,loop:!0});console.log(o)}function loadIndexList(o){indexGoodsBox.empty();for(var n in o){var e=indexGoodsLi.clone(!1),a=o[n].goodsListImg,d=o[n].goodsName,i=1*o[n].price,s=1*o[n].discount,t=i;0!=s&&(s/=10,t=i/s),t=t.toFixed(2),e.find("img").attr("src",a),e.find(".goods-name").text(d),e.find(".price-box").find("span").text("¥"+i),e.find(".price-box").find("del").text("¥"+t),e.find(".discount").find("span").text(s),indexGoodsBox.append(e)}}function loadSearchList(o){searchGoodsBox.empty();for(var n in o){var e=searchGoodsLi.clone(!1),a=o[n].goodsListImg,d=o[n].goodsName,i=1*o[n].price,s=1*o[n].discount,t=i;0!=s&&(s/=10,t=i/s),t=t.toFixed(2),e.find("img").attr("src",a),e.find(".goods-name").text(d),e.find(".price-box").find("span").text("¥"+i),e.find(".price-box").find("del").text("¥"+t),e.find(".discount").find("span").text(s),searchGoodsBox.append(e)}}var bannerBox,bannerSlide,indexGoodsBox,indexGoodsLi,searchGoodsBox,searchGoodsLi;pageInit();