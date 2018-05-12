$(document).ready(function() {
    $('.container-one .owl-carousel').owlCarousel({
      autoplay:true,
      loop: true,
      margin: 0,
      dots: false,
      navigation: false,
      autoplaySpeed: 1000,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive:{
          0:{
              items:1
          },
          650:{
              items:2
          },
          1000:{
              items:3
          },
          1300:{
              items:4
          },
          1600:{
              items:5
          },
          1700:{
              items:6
          }
      }
  });

  $('#abt').click(function(){$("html, body").animate({scrollTop:$(".container-two").height()}, 600);});
  $('#dsgn').click(function(){$("html, body").animate({scrollTop:$(".container-two").height()*2}, 800);});
  $('#wb').click(function(){$("html, body").animate({scrollTop:$(".container-two").height()*3}, 1000);});
  $('#cntct').click(function(){$("html, body").animate({scrollTop:$(".container-two").height()*4}, 1200);});
  $('.container-two .back-up').click(function(){$("html, body").animate({scrollTop:0}, 600);});
  $('.container-three .back-up').click(function(){$("html, body").animate({scrollTop:0}, 800);});
  $('.container-four .back-up').click(function(){$("html, body").animate({scrollTop:0}, 1000);});
  $('.container-five .back-up').click(function(){$("html, body").animate({scrollTop:0}, 1200);});

  $('#lg').click(function() {
    $('.area-logo').css({'display':'block'});
    $('.area-album').css({'display':'none'});
    $('.area-display').css({'display':'none'});
  });

  $('#lbm').click(function() {
    $('.area-logo').css({'display':'none'});
    $('.area-album').css({'display':'block'});
    $('.area-display').css({'display':'none'});
  });

  $('#dsply').click(function() {
    $('.area-logo').css({'display':'none'})
    $('.area-album').css({'display':'none'})
    $('.area-display').css({'display':'block'})
  });

  $('#prjcts').click(function() {
    $('.area-projects').css({'display':'block'});
    $('.area-work').css({'display':'none'});
    $('.area-skills').css({'display':'none'});
  });

  $('#wrk').click(function() {
    $('.area-projects').css({'display':'none'});
    $('.area-work').css({'display':'block'});
    $('.area-skills').css({'display':'none'});
  });

  $('#sklls').click(function() {
    $('.area-projects').css({'display':'none'})
    $('.area-work').css({'display':'none'})
    $('.area-skills').css({'display':'block'})
  });

});
