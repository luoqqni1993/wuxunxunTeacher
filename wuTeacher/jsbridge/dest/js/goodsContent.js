function pageInit(){bannerBox=$(".goods-content-banner").find(".swiper-wrapper"),bannerSlide=bannerBox.find(".swiper-slide").clone(!1),imgBox=$(".img-box"),contentBox=$(".goods-content-text"),getContentData(3)}function getContentData(n){$.ajax({url:"http://datainfo.duapp.com/shopdata/getGoods.php",type:"post",data:"goodsID="+n,dataType:"JSONP",success:function(n){console.log(n),loadPageData(n)}})}function loadPageData(n){n=n[0];var e=JSON.parse(n.imgsUrl),t=(JSON.parse(n.goodsBenUrl),n.goodsName),o=n.price,a=n.discount,i=o,r=n.buynumber,p=n.detail.split("。");0!=a&&(a=1*a,i=1*o/(a/10)),bannerBox.empty(),imgBox.empty(),contentBox.empty();for(var d in e){var s=bannerSlide.clone(!1);s.find("img").attr("src",e[d]),bannerBox.append(s)}for(var c in e){var g=$("<img />");g.attr("src",e[c]),imgBox.append(g)}$(".goods-name").text(t),$(".price").find("span").text("¥"+o),$(".price").find("del").text(i),$(".shop-number").find("span").text(r);new Swiper(".swiper-container",{autoplay:3e3,loop:!0});for(var d in p){var x=$("<li></li>");x.text(p[d]),contentBox.append(x)}}var bannerBox,bannerSlide,imgBox,contentBox;pageInit();