$(document).ready(function()
{
    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();

      $('div.banner-overlay').css({
        opacity: function() {
          var elementHeight = $(this).height(),
              opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 0.8) + 0.1;

          return opacity;
        }
      });
    });

    $(window).scroll(function()
    {

      if($(window).width() > 1366)
      {
        if($(window).scrollTop() >= 500)
        {
          $("div.profile-nav").css({
            'position':'fixed',
            'top': '50px'
          });

          $("#mobile-border").css({
            'display':'block'
          });

          $("div.profile-icon").css({
            'margin-top': '-250px'
          });

          $('div.profile-desc').css({
            'margin-top':'50px'
          });

          $("div.profile-name-small").fadeIn(200);
        }
        else
        {
          $("div.profile-nav").css({
            'position':'relative',
            'top':'auto'
          });

          $("#mobile-border").css({
            'display':'none'
          });

          $("div.profile-icon").css({
            'margin-top': '-100px'
          });

          $('div.profile-desc').css({
            'margin-top':'0px'
          });

          $("div.profile-name-small").fadeOut(200);
        }
      }
      else if($(window).width() > 990 && $(window).width() <= 1366)
      {
        if($(window).scrollTop() >= 290)
        {
          $("div.profile-nav").css({
            'position':'fixed',
            'top': '50px'
          });

          $("#mobile-border").css({
            'display':'block'
          });

          $("div.profile-icon").css({
            'margin-top': '-250px'
          });

          $('div.profile-desc').css({
            'margin-top':'50px'
          });

          $("div.profile-name-small").fadeIn(200);
        }
        else
        {
          $("div.profile-nav").css({
            'position':'relative',
            'top':'auto'
          });

          $("#mobile-border").css({
            'display':'none'
          });

          $('div.profile-desc').css({
            'margin-top':'0px'
          });

          $("div.profile-icon").css({
            'margin-top': '-75px'
          });

          $("div.profile-name-small").fadeOut(200);
        }
      }
      else if($(window).width() <= 990)
      {
        if($(window).scrollTop() >= 300)
        {
          $("div.profile-nav").css({
            'position':'fixed',
            'top':'50px',
          });

          $("#mobile-border").css({
            'display':'none'
          });

          $("div.profile-name").css({
            'margin-top':'-250px'
          });

          $("div.desc-info").css({
            'margin-top':'115px'
          });

          $("div.profile-items").fadeIn(200);

          $("div.profile-icon").css({
            'margin-top': '-300px'
          });

          $('div.profile-desc').css({
            'margin-top':'-45px'
          });

          $("div.profile-name-small").fadeIn(200);
        }
        else
        {
          $("div.profile-nav").css({
            'position':'relative',
            'top':'auto'
          });

          $("#mobile-border").css({
            'display':'none'
          });

          $("div.profile-items").fadeOut(200);

          $("div.profile-name").css({
            'margin-top':'75px'
          });

          $("div.desc-info").css({
            'margin-top':'25px'
          });

          $("div.profile-icon").css({
            'margin-top': '-75px'
          });

          $('div.profile-desc').css({
            'margin-top':'0px'
          });

          $("div.profile-name-small").fadeOut(200);
        }
      }
      else if($(window).width() <= 768)
      {
        if($(window).scrollTop() >= 130)
        {
          $("div.profile-nav").css({
            'position':'fixed',
            'top':'50px',
          });

          $("#mobile-border").css({
            'display':'none'
          });

          $("div.profile-name").css({
            'margin-top':'-250px'
          });

          $("div.profile-icon").css({
            'margin-top': '-300px'
          });

          $("div.profile-name-small").css({
            'margin-left':($(window).width() - 200)/2+"px"
          });

          $('div.profile-desc').css({
            'margin-top':'-45px'
          });

          $("div.profile-name-small").fadeIn(200);
        }
        else
        {
          $("div.profile-nav").css({
            'position':'relative',
            'top':'auto'
          });

          $("#mobile-border").css({
            'display':'none'
          });

          $("div.profile-name-small").css({
            'margin-left':"50px"
          });

          $("div.profile-icon").css({
            'margin-top': '-75px'
          });

          $('div.profile-desc').css({
            'margin-top':'0px'
          });

          $("div.profile-name-small").fadeOut(200);
        }
      }
    });

    $(".close-icon-info").click(function() {
      $(".icon-infobox").fadeOut(300);
      $(".black-overlay").fadeOut(300);
    });

    $(".profile-icon").hover(function() {
      $(".icon-edit").fadeIn(100);
      $(".icon-info").fadeIn(100);
    }, function() {
      $(".icon-edit").fadeOut(100);
      $(".icon-info").fadeOut(100);
    });

    var param = true;

    $(".search-icon").click(function() {
      if(param)
      {
        $(".nav-search input").animate({
          'width':'300px'
        }, 300)

        param = false;
      }
      else
      {
        $(".nav-search input").animate({
          'width':'0px'
        }, 300)

        param = true;
      }
    });

    $('span.fa-name-small').click(function()
    {
      $("html, body").animate({
        scrollTop:0
      }, 500);
    });

    $(".icon-info").click(function() {
      $(".icon-infobox").fadeIn(300);
      $(".black-overlay").fadeIn(300);
    });
});
