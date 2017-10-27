$(function() {

    //rem 方法
    function rem(size) {
        return size / 750 * 10;
    }
    
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
        
                var myScroll;
        
            
                /**
                 * iScroll 实例
                 * @returns 
                 */
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
                
        
                
                    myScroll = new IScroll('#wrapper', {
                        click: true,
                        scrollY: true,
                        bounce: false,
                        scrollbars: true,
                        // tap: true,
                    });
                    myScroll = new IScroll('#wrapper');
                    myScroll.on('scrollEnd', function() {
                        // console.log(-rem(this.y))
                        var that= rem(this.y)


                        if (rem(1180)<=-that&&-that<=rem(2560) ) {

                            $(".hotel-singledog").animate({opacity: 1}, 1000);
                        
                
                        } else{
                            $(".hotel-singledog").animate({opacity: 0});
                      
                
                        }
                        if (rem(2870)<=-that&&-that<=rem(4772) ) {
                            $(".movie-singledog").animate({opacity: 1}, 1000);
                
                        }
                        if (-that >= rem(4773)) {
                            console.log(234234234)
                            $(".movie-singledog").animate({opacity: 0});
                
                        }
                        if (rem(4800)<=-that&&-that<=rem(6500) ) {
                            $(".ktv-singledog").animate({opacity: 1}, 1000);
                
                        }
                        if (-that >= rem(6500)) {
                            $(".ktv-singledog").animate({opacity: 0});
                
                        }
                        if (rem(6500)<=-that&&-that<=rem(7000) ) {
                            $(".doubleroom-singledog").animate({opacity: 1}, 1000);
                
                        }
                        if (-that >= rem(7000)) {
                            $(".doubleroom-singledog").animate({opacity: 0});
                
                        }
                      
                        if (rem(7200)<=-that&&-that<=rem(9500) ) {
                            
                            $(".wheel-singledog").animate({opacity: 1}, 1000);
                
                        }
                        if (-that >= rem(9500)) {
                            $(".wheel-singledog").animate({opacity: 0});
                
                        }

                        if (rem(9500)<=-that&&-that<=rem(10200) ) {
                            $(".bank-singledog").animate({opacity: 1}, 1000);
                
                        }
                        if (-that >= rem(10200) ) {
                            // 
                            // console.log(-this.y,12345767)
                            $(".bank-singledog").animate({opacity: 0});
                
                        }
                  
                  
                       
                  
                      
                    //    if (-this.y >= 4465) {
                
                    //         $(".bank-singledog").css({ opacity: (-this.y - 4465) / 200 });
                    //     }
                    //     if (-this.y >= 4700) {
                
                    //         $(".bank-singledog").css({ opacity: 1 - [(-this.y - 4700) / 200] });
                    //     }
                    });
                
                    
                
                document.addEventListener('touchmove', function(e) { e.preventDefault(); }, isPassive() ? {
                    capture: false,
                    passive: false
                } : false);
        
            },200)
   
})