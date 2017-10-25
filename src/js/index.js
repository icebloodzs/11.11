$(function(){
    var percent_number_step = $.animateNumber.numberStepFactories.append(' %')
    $('.loading-in').animateNumber(
      {
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

    //偷窥旅店
    $("#peer_hotel").click(function(e){
        e.stopPropagation();
       $("#hotel_box").addClass("show")
    })
   
        
    $("#hotelgo_on").click(function(e){
        e.stopPropagation();
       $("#hotel_box").removeClass("show");
    })
    $("#hotelwill_share").click(function(e){
        e.stopPropagation();
       $(".share").addClass("show");
    })
    $(".share").click(function(e){
        e.stopPropagation();
       $(".share").removeClass("show");
    })

     //偷窥电影院
     $("#peer_movie").click(function(e){
        e.stopPropagation();
       $("#movie_box").addClass("show")
    })
    $("#moviego_on").click(function(e){
        e.stopPropagation();
       $("#movie_box").removeClass("show");
    })
    $("#moviewill_share").click(function(e){
        e.stopPropagation();
       $(".share").addClass("show");
    })
    $(".share").click(function(e){
        e.stopPropagation();
       $(".share").removeClass("show");
    })

     //偷窥KTV
     $("#peer_ktv").click(function(e){
        e.stopPropagation();
       $("#ktv_box").addClass("show")
    })
    $("#ktvgo_on").click(function(e){
        e.stopPropagation();
       $("#ktv_box").removeClass("show");
    })
    $("#ktvwill_share").click(function(e){
        e.stopPropagation();
       $(".share").addClass("show");
    })
    $(".share").click(function(e){
        e.stopPropagation();
       $(".share").removeClass("show");
    })

     //偷窥papapa
     $("#peer_doubleroom").click(function(e){
        e.stopPropagation();
       $("#doubleroom_box").addClass("show")
    })
    $("#doubleroomgo_on").click(function(e){
        e.stopPropagation();
       $("#doubleroom_box").removeClass("show");
    })
    $("#doubleroomwill_share").click(function(e){
        e.stopPropagation();
       $(".share").addClass("show");
    })
    $(".share").click(function(e){
        e.stopPropagation();
       $(".share").removeClass("show");
    })

     //偷窥摩天轮
     $("#peer_wheel").click(function(e){
        e.stopPropagation();
       $("#wheel_box").addClass("show")
    })
    $("#wheelgo_on").click(function(e){
        e.stopPropagation();
       $("#wheel_box").removeClass("show");
    })
    $("#wheelwill_share").click(function(e){
        e.stopPropagation();
       $(".share").addClass("show");
    })
    $(".share").click(function(e){
        e.stopPropagation();
       $(".share").removeClass("show");
    })

     //偷窥银行
     $("#peer_bank").click(function(e){
        e.stopPropagation();
       $("#bank_box").addClass("show")
    })
    $("#bankgo_on").click(function(e){
        e.stopPropagation();
       $("#bank_box").removeClass("show");
    })
    $("#bankwill_share").click(function(e){
        e.stopPropagation();
       $(".share").addClass("show");
    })
    $(".share").click(function(e){
        e.stopPropagation();
       $(".share").removeClass("show");
    })

    //领取分享福利
    $("#singledog_boon").click(function(e){
        e.stopPropagation();
       $("#boon_box").addClass("show")
    })
    $("#get_welfare").click(function(e){
        e.stopPropagation();
       $("#boon_box").removeClass("show");
    })
    $("#share_dear").click(function(e){
        e.stopPropagation();
       $("#share_dear_shadow").addClass("show");
    })
    $("#share_dear_shadow").click(function(e){
        e.stopPropagation();
       $("#share_dear_shadow").removeClass("show");
    })

    myScroll = new IScroll('#wrapper');
    myScroll.on('scrollStart', function () {
        if(-this.y>=372){
        $(".hotel-singledog").css({opacity:(-this.y-372)/300});
        
        }
         if(-this.y>=750){
           
            $(".hotel-singledog").css({opacity: 1-[(-this.y-750)/400]});
        }

        if(-this.y>=1450){
           
            $(".movie-singledog").css({opacity:(-this.y-1450)/300});
        }
        if(-this.y>=2100){
            
             $(".movie-singledog").css({opacity: 1-[(-this.y-2100)/300]});
         }

         if(-this.y>=2500){
            
             $(".ktv-singledog").css({opacity:(-this.y-2500)/300});
         }

         if(-this.y>=3000){
            
             $(".ktv-singledog").css({opacity: 1-[(-this.y-3000)/300]});
         }
         if(-this.y>=3500){
            
             $(".doubleroom-singledog").css({opacity:(-this.y-3500)/300});
         }
         if(-this.y>=4000){
            
             $(".doubleroom-singledog").css({opacity: 1-[(-this.y-4000)/300]});
         }
         if(-this.y>=4200){
            
             $(".wheel-singledog").css({opacity:(-this.y-4200)/300});
         }
         if(-this.y>=4700){
            
             $(".wheel-singledog").css({opacity: 1-[(-this.y-4700)/300]});
         }
         if(-this.y>=5000){
            
             $(".bank-singledog").css({opacity:(-this.y-5000)/300});
         }
         if(-this.y>=5400){
            
             $(".bank-singledog").css({opacity: 1-[(-this.y-5400)/200]});
         }
    });
        
}) 


