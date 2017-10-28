window.onload = function () {
  var loader = new ResLoader({
    resources: [
      '../img/architecture.jpg',
      '../img/architecture2.jpg',
      '../img/bank.jpg',
      '../img/bankpopover.gif',
      '../img/boon.jpg',
      '../img/doubleroom.gif',
      '../img/doubleroompopover.gif',
      '../img/down.png',
      '../img/header-singledog-word1.png',
      '../img/header-singledog-word2.png',
      '../img/header-singledog-word3.png',
      '../img/header-singledog-word4.png',
      '../img/header.png',
      '../img/hotel.gif',
      '../img/hotelpopover.gif',
      '../img/ktvdown.gif',
      '../img/ktvdown.jpg',
      '../img/ktvpopover.gif',
      '../img/ktvtop.gif',
      '../img/loding.gif',
      '../img/movie.jpg',
      '../img/moviepopover.gif',
      '../img/peepbuttonleft.png',
      '../img/peepbuttonright.png',
      '../img/peerhotelclick.png',
      '../img/run.png',
      '../img/run2.png',
      '../img/shareshade.png',
      '../img/shareshade2.png',
      '../img/singledogboon.jpg',
      '../img/sshareshade.png',
      '../img/tree.gif',
      '../img/wheel.gif',
      '../img/wheelpopover.gif'
    ],
    onStart: function (total) {
      // console.log('start:' + total)
      $('.loading-in').html('20%')
    },
    onProgress: function (current, total) {
      var percent = current / total * 100 * 0.8 + 20
      $('.loading-in').html(Math.round(percent) + '%')
    },
    onComplete: function (total) {
      $('.loading-in').html('100%')
      setTimeout(loaded, 2000)
    }
  })
  loader.start()
}

function loaded () {
  $('.loading').hide()

  $('#template_container').html($('#template').html())

  AOS.init({
    easing: 'ease-out-back',
    duration: 1000
  })

  // 播放音乐
  var music = $('#music')[0]
  music.src = '../img/music.mp3'
  music.play()

  //头部动画

  $('.header-singledog').delay(500).animate({
    opacity: 1
  }, 500)
  $('.header-singledog-word1').delay(1000).animate({
    opacity: 1
  }, 500)
  $('.header-singledog-word2').delay(1500).animate({
    opacity: 1
  }, 500)
  $('.header-singledog-word3').delay(2000).animate({
    opacity: 1
  }, 500)
  $('.header-singledog-word4').delay(2500).animate({
    opacity: 1
  }, 500)

  //偷窥旅店
  $('#peer_hotel').click(function (e) {
    e.stopPropagation()
    $('#hotel_box').addClass('show')
  })

  $('#hotelgo_on').click(function (e) {
    e.stopPropagation()
    $('#hotel_box').removeClass('show')
  })
  $('#hotelwill_share').click(function (e) {
    e.stopPropagation()
    $('.share').addClass('show')
  })

  //偷窥电影院
  $('#peer_movie').click(function (e) {
    e.stopPropagation()
    $('#movie_box').addClass('show')
  })
  $('#moviego_on').click(function (e) {
    e.stopPropagation()
    $('#movie_box').removeClass('show')
  })
  $('#moviewill_share').click(function (e) {
    e.stopPropagation()
    $('.share').addClass('show')
  })

  //偷窥KTV
  $('#peer_ktv').click(function (e) {
    e.stopPropagation()
    $('#ktv_box').addClass('show')
  })
  $('#ktvgo_on').click(function (e) {
    e.stopPropagation()
    $('#ktv_box').removeClass('show')
  })
  $('#ktvwill_share').click(function (e) {
    e.stopPropagation()
    $('.share').addClass('show')
  })

  //偷窥papapa
  $('#peer_doubleroom').click(function (e) {
    e.stopPropagation()
    $('#doubleroom_box').addClass('show')
  })
  $('#doubleroomgo_on').click(function (e) {
    e.stopPropagation()
    $('#doubleroom_box').removeClass('show')
  })
  $('#doubleroomwill_share').click(function (e) {
    e.stopPropagation()
    $('.share').addClass('show')
  })

  //偷窥摩天轮
  $('#peer_wheel').click(function (e) {
    e.stopPropagation()
    $('#wheel_box').addClass('show')
  })
  $('#wheelgo_on').click(function (e) {
    e.stopPropagation()
    $('#wheel_box').removeClass('show')
  })
  $('#wheelwill_share').click(function (e) {
    e.stopPropagation()
    $('.share').addClass('show')
  })

  //偷窥银行
  $('#peer_bank').click(function (e) {
    e.stopPropagation()
    $('#bank_box').addClass('show')
  })
  $('#bankgo_on').click(function (e) {
    e.stopPropagation()
    $('#bank_box').removeClass('show')
  })
  $('#bankwill_share').click(function (e) {
    e.stopPropagation()
    $('.share').addClass('show')
  })
  $('.share').click(function (e) {
    e.stopPropagation()
    $('.share').removeClass('show')
  })

  //领取分享福利
  $('#singledog_boon').click(function (e) {
    e.stopPropagation()
    $('#boon_box').addClass('show')
  })

  $('#share_dear').click(function (e) {
    e.stopPropagation()
    $('#share_dear_shadow').addClass('show')
  })
  $('#share_dear_shadow').click(function (e) {
    e.stopPropagation()
    $('#share_dear_shadow').removeClass('show')
  })

}