
window.onload=function() {
    var percent_number_step = $.animateNumber.numberStepFactories.append(' %')
    $('.loading-in').animateNumber({
            number: 100,
            easing: 'easeInQuad',
            numberStep: percent_number_step
        },
        3000
    );
    setTimeout(function() {
        $('.loading').addClass("hide");
        $('.container').addClass("show");
       
        AOS.init({
            easing: 'ease-out-back',
            duration: 1000,
        });
        $("#music").attr("src","../img/music.mp3");
        var player =$("#music")[0];
        player.play();
    }, 3200);

    //头部动画

    $(".header-singledog").delay(3500).animate({
        opacity: 1
    }, 500);
    $(".header-singledog-word1").delay(4000).animate({
        opacity: 1
    }, 500);
    $(".header-singledog-word2").delay(4500).animate({
        opacity: 1
    }, 500);
    $(".header-singledog-word3").delay(5000).animate({
        opacity: 1
    }, 500);
    $(".header-singledog-word4").delay(5500).animate({
        opacity: 1
    }, 500);



    //偷窥旅店
    $("#peer_hotel").click(function(e) {
        e.stopPropagation();
        $("#hotel_box").addClass("show")
    })


    $("#hotelgo_on").click(function(e) {
        e.stopPropagation();
        $("#hotel_box").removeClass("show");
    })
    $("#hotelwill_share").click(function(e) {
        e.stopPropagation();
        $(".share").addClass("show");
    })
    $(".share").click(function(e) {
        e.stopPropagation();
        $(".share").removeClass("show");
    })

    //偷窥电影院
    $("#peer_movie").click(function(e) {
        e.stopPropagation();
        $("#movie_box").addClass("show")
    })
    $("#moviego_on").click(function(e) {
        e.stopPropagation();
        $("#movie_box").removeClass("show");
    })
    $("#moviewill_share").click(function(e) {
        e.stopPropagation();
        $(".share").addClass("show");
    })
    $(".share").click(function(e) {
        e.stopPropagation();
        $(".share").removeClass("show");
    })

    //偷窥KTV
    $("#peer_ktv").click(function(e) {
        e.stopPropagation();
        $("#ktv_box").addClass("show")
    })
    $("#ktvgo_on").click(function(e) {
        e.stopPropagation();
        $("#ktv_box").removeClass("show");
    })
    $("#ktvwill_share").click(function(e) {
        e.stopPropagation();
        $(".share").addClass("show");
    })
    $(".share").click(function(e) {
        e.stopPropagation();
        $(".share").removeClass("show");
    })

    //偷窥papapa
    $("#peer_doubleroom").click(function(e) {
        e.stopPropagation();
        $("#doubleroom_box").addClass("show")
    })
    $("#doubleroomgo_on").click(function(e) {
        e.stopPropagation();
        $("#doubleroom_box").removeClass("show");
    })
    $("#doubleroomwill_share").click(function(e) {
        e.stopPropagation();
        $(".share").addClass("show");
    })
    $(".share").click(function(e) {
        e.stopPropagation();
        $(".share").removeClass("show");
    })

    //偷窥摩天轮
    $("#peer_wheel").click(function(e) {
        e.stopPropagation();
        $("#wheel_box").addClass("show")
    })
    $("#wheelgo_on").click(function(e) {
        e.stopPropagation();
        $("#wheel_box").removeClass("show");
    })
    $("#wheelwill_share").click(function(e) {
        e.stopPropagation();
        $(".share").addClass("show");
    })
    $(".share").click(function(e) {
        e.stopPropagation();
        $(".share").removeClass("show");
    })

    //偷窥银行
    $("#peer_bank").click(function(e) {
        e.stopPropagation();
        $("#bank_box").addClass("show")
    })
    $("#bankgo_on").click(function(e) {
        e.stopPropagation();
        $("#bank_box").removeClass("show");
    })
    $("#bankwill_share").click(function(e) {
        e.stopPropagation();
        $(".share").addClass("show");
    })
    $(".share").click(function(e) {
        e.stopPropagation();
        $(".share").removeClass("show");
    })

    //领取分享福利
    $("#singledog_boon").click(function(e) {
        e.stopPropagation();
        $("#boon_box").addClass("show")
    })
   
    $("#share_dear").click(function(e) {
        e.stopPropagation();
        $("#share_dear_shadow").addClass("show");
    })
    $("#share_dear_shadow").click(function(e) {
        e.stopPropagation();
        $("#share_dear_shadow").removeClass("show");
    })


 
   
})