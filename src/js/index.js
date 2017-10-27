$(function() {

    function rem(size) {
        return size/750*10;
    }

    function isPassive() {
        var supportsPassiveOption = false;
        try {
            addEventListener("test", null, Object.defineProperty({}, 'passive', {
                get: function() {
                    supportsPassiveOption = true;
                }
            }));
        } catch (e) {}
        return supportsPassiveOption;
    }

    document.addEventListener('touchmove', function(e) { e.preventDefault(); }, isPassive() ? {
        capture: false,
        passive: false
    } : false);



    
    var percent_number_step = $.animateNumber.numberStepFactories.append(' %')
    $('.loading-in').animateNumber({
            number: 100,
            easing: 'easeInQuad',
            numberStep: percent_number_step
        },
        1000
    );
    setTimeout(function() {
        $('.loading').addClass("hide");
        $('.container').addClass("show");
    }, 1200);
    //头部动画

    $(".header-singledog").delay(1000).animate({
        opacity: 1
    }, 1000);
    $(".header-singledog-word1").delay(2000).animate({
        opacity: 1
    }, 500);
    $(".header-singledog-word2").delay(2500).animate({
        opacity: 1
    }, 500);
    $(".header-singledog-word3").delay(3000).animate({
        opacity: 1
    }, 500);
    $(".header-singledog-word4").delay(3500).animate({
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





    //iScroll 代码
    setTimeout(function(){
        $(".hotel-singledog").css({ opacity: 0 })
        $(".movie-singledog").css({ opacity: 0 })
        $(".ktv-singledog").css({ opacity: 0 })
        $(".doubleroom-singledog").css({ opacity: 0 })
        $(".wheel-singledog").css({ opacity: 0 })
        $(".bank-singledog").css({ opacity: 0 })
        
                        /**
                 * iScroll 实例
                 * @returns 
                 */
                var myScroll = new IScroll('#wrapper', {
                        click: true,
                        scrollY: true,
                        bounce: false,
                        scrollbars: true,
                        probeType:2,
                        speedRatioY: 2,
                        // tap: true,
                        // onScrollMove: function(e){
                        //     console.log(e);
                        // },
                        // scrollEnd: function(e){
                        //     console.log(e);
                        // },
                    });

                    myScroll.on('scrollEnd', function(){
                        
                        console.log(this.y);

                        var len= 2000
                        //像下滚
                        // if(!this.directionY){
                            if( rem(-1700) >= rem(this.y) ){

                                $(".hotel-singledog").addClass("animated fadeInLeft")
                            }
                            if( rem(-4600) >= rem(this.y) ){
                                $(".movie-singledog").addClass("animated fadeInLeft")
                            }
                            if( rem(-7700) >= rem(this.y) ){
                                $(".ktv-singledog").addClass("animated fadeInLeft")
                            }
                            if( rem(-11200) >= rem(this.y) ){
                                $(".doubleroom-singledog").addClass("animated fadeInLeft")
                            }
                            if( rem(-12000) >= rem(this.y) ){
                                $(".wheel-singledog").addClass("animated fadeInLeft")
                            }
                            if( rem(-15600) >= rem(this.y) ){
                                $(".bank-singledog").addClass("animated fadeInLeft")
                            }
                        // }
                    });
                    
                    
                    // myScroll = new IScroll('#wrapper');
                    // myScroll.on('scrollEnd', function() {
                        
                    //     if (2000<=-this.y&&-this.y<=4000 ) {
                    //         $(".hotel-singledog").animate({opacity: 1}, 1000);
                
                    //     }
                    //     if (-this.y >= 4100) {
                    //         $(".hotel-singledog").animate({opacity: 0});
                
                    //     }
                    //     if (5000<=-this.y&&-this.y<=7000 ) {
                    //         $(".movie-singledog").animate({opacity: 1}, 1000);
                
                    //     }
                    //     if (-this.y >= 7100) {
                    //         $(".movie-singledog").animate({opacity: 0});
                
                    //     }
                    //     if (8000<=-this.y&&-this.y<=10300 ) {
                    //         $(".ktv-singledog").animate({opacity: 1}, 1000);
                
                    //     }
                    //     if (-this.y >= 10400) {
                    //         $(".ktv-singledog").animate({opacity: 0});
                
                    //     }
                    //     if (11200<=-this.y&&-this.y<=11624 ) {
                    //         $(".doubleroom-singledog").animate({opacity: 1}, 1000);
                
                    //     }
                    //     if (-this.y >= 12800) {
                    //         $(".doubleroom-singledog").animate({opacity: 0});
                
                    //     }
                      
                    //     if (13200<=-this.y&&-this.y<=15570 ) {
                    //         $(".wheel-singledog").animate({opacity: 1}, 1000);
                
                    //     }
                    //     if (-this.y >= 15670) {
                    //         $(".wheel-singledog").animate({opacity: 0});
                
                    //     }

                    //     if (16000<=-this.y&&-this.y<=18100 ) {
                    //         $(".bank-singledog").animate({opacity: 1}, 1000);
                
                    //     }
                    //     if (-this.y >= 18200) {
                    //         $(".bank-singledog").animate({opacity: 0});
                
                    //     }
                  
                  
                       
                  
                      
                    // //    if (-this.y >= 4465) {
                
                    // //         $(".bank-singledog").css({ opacity: (-this.y - 4465) / 200 });
                    // //     }
                    // //     if (-this.y >= 4700) {
                
                    // //         $(".bank-singledog").css({ opacity: 1 - [(-this.y - 4700) / 200] });
                    // //     }
                    // });
                
                    
                
                
        
            },200)
   
})