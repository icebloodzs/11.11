webpackJsonp([2,5],[function(e,o,a){$(function(){function e(e){return e/750*10}function o(){var e=!1;try{addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){e=!0}}))}catch(o){}return e}document.addEventListener("touchmove",function(e){e.preventDefault()},o()?{capture:!1,passive:!1}:!1);var a=$.animateNumber.numberStepFactories.append(" %");$(".loading-in").animateNumber({number:100,easing:"easeInQuad",numberStep:a},1e3),setTimeout(function(){$(".loading").addClass("hide"),$(".container").addClass("show")},1200),$(".header-singledog").delay(1e3).animate({opacity:1},1e3),$(".header-singledog-word1").delay(2e3).animate({opacity:1},500),$(".header-singledog-word2").delay(2500).animate({opacity:1},500),$(".header-singledog-word3").delay(3e3).animate({opacity:1},500),$(".header-singledog-word4").delay(3500).animate({opacity:1},500),$("#peer_hotel").click(function(e){e.stopPropagation(),$("#hotel_box").addClass("show")}),$("#hotelgo_on").click(function(e){e.stopPropagation(),$("#hotel_box").removeClass("show")}),$("#hotelwill_share").click(function(e){e.stopPropagation(),$(".share").addClass("show")}),$(".share").click(function(e){e.stopPropagation(),$(".share").removeClass("show")}),$("#peer_movie").click(function(e){e.stopPropagation(),$("#movie_box").addClass("show")}),$("#moviego_on").click(function(e){e.stopPropagation(),$("#movie_box").removeClass("show")}),$("#moviewill_share").click(function(e){e.stopPropagation(),$(".share").addClass("show")}),$(".share").click(function(e){e.stopPropagation(),$(".share").removeClass("show")}),$("#peer_ktv").click(function(e){e.stopPropagation(),$("#ktv_box").addClass("show")}),$("#ktvgo_on").click(function(e){e.stopPropagation(),$("#ktv_box").removeClass("show")}),$("#ktvwill_share").click(function(e){e.stopPropagation(),$(".share").addClass("show")}),$(".share").click(function(e){e.stopPropagation(),$(".share").removeClass("show")}),$("#peer_doubleroom").click(function(e){e.stopPropagation(),$("#doubleroom_box").addClass("show")}),$("#doubleroomgo_on").click(function(e){e.stopPropagation(),$("#doubleroom_box").removeClass("show")}),$("#doubleroomwill_share").click(function(e){e.stopPropagation(),$(".share").addClass("show")}),$(".share").click(function(e){e.stopPropagation(),$(".share").removeClass("show")}),$("#peer_wheel").click(function(e){e.stopPropagation(),$("#wheel_box").addClass("show")}),$("#wheelgo_on").click(function(e){e.stopPropagation(),$("#wheel_box").removeClass("show")}),$("#wheelwill_share").click(function(e){e.stopPropagation(),$(".share").addClass("show")}),$(".share").click(function(e){e.stopPropagation(),$(".share").removeClass("show")}),$("#peer_bank").click(function(e){e.stopPropagation(),$("#bank_box").addClass("show")}),$("#bankgo_on").click(function(e){e.stopPropagation(),$("#bank_box").removeClass("show")}),$("#bankwill_share").click(function(e){e.stopPropagation(),$(".share").addClass("show")}),$(".share").click(function(e){e.stopPropagation(),$(".share").removeClass("show")}),$("#singledog_boon").click(function(e){e.stopPropagation(),$("#boon_box").addClass("show")}),$("#share_dear").click(function(e){e.stopPropagation(),$("#share_dear_shadow").addClass("show")}),$("#share_dear_shadow").click(function(e){e.stopPropagation(),$("#share_dear_shadow").removeClass("show")}),setTimeout(function(){$(".hotel-singledog").css({opacity:0}),$(".movie-singledog").css({opacity:0}),$(".ktv-singledog").css({opacity:0}),$(".doubleroom-singledog").css({opacity:0}),$(".wheel-singledog").css({opacity:0}),$(".bank-singledog").css({opacity:0});var o=new IScroll("#wrapper",{click:!0,scrollY:!0,bounce:!1,scrollbars:!0,probeType:2,speedRatioY:2});o.on("scrollEnd",function(){console.log(this.y);e(-1700)>=e(this.y)&&$(".hotel-singledog").addClass("animated fadeInLeft"),e(-4600)>=e(this.y)&&$(".movie-singledog").addClass("animated fadeInLeft"),e(-7700)>=e(this.y)&&$(".ktv-singledog").addClass("animated fadeInLeft"),e(-11200)>=e(this.y)&&$(".doubleroom-singledog").addClass("animated fadeInLeft"),e(-12e3)>=e(this.y)&&$(".wheel-singledog").addClass("animated fadeInLeft"),e(-15600)>=e(this.y)&&$(".bank-singledog").addClass("animated fadeInLeft")})},200)})}]);
//# sourceMappingURL=index.js.map