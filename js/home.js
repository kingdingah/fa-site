$(document).ready(function()
{
  $("div.home-banner, div.banner-overlay").css({
    'height':$(window).height()
  });

  $("div.main-menu").css({
    'background-color':'rgba(0,0,0,0)'
  });

  $("span.move-down").click(function(){
    $("html, body").animate({
      scrollTop: $(window).height() - 50
    }, 750);
  });

  $("div.main-menu").hover(function()
  {
    $("div.menu-bg").fadeIn(100);
  },
  function()
  {
    $("div.menu-bg").fadeOut(100);
    $("div.nav-profile-dropdown").fadeOut(100);
    $("div.nav-settings-dropdown").fadeOut(100);
    $("div.nav-subbox").fadeOut(100);
  });

  $(window).scroll(function()
  {

    if($(window).scrollTop() >= ($(window).height() - 100))
    {
      $("div.menu-bg").fadeIn(200);
    }
    else
    {
      $("div.menu-bg").fadeOut(200);
    }

  });

  $(window).resize(function()
  {
    if($(window).width() > 1366)
    {
      $("div.news-item-container").css({
        'width':($(window).width()/4)
      })

      $("#next").click(function() {
        $("div.home-news .news-container").animate({
          scrollRight : '+=500'
        }, 400);
      });
    }
    else if($(window).width() <= 1366 && $(window).width() > 990)
    {
      $("div.news-item-container").css({
        'width':($(window).width()/3)
      })
    }
    else if($(window).width() <= 990 && $(window).width() > 768)
    {
      $("div.news-item-container").css({
        'width':($(window).width()/2)
      })
    }
    else
    {
      $("div.news-item-container").css({
        'width':($(window).width())
      })
    }
  });

    if($(window).width() > 1366)
    {
      $("div.news-item-container").css({
        'width':'calc(25%)'
      })

      $("span.news-next").click(function() {
        $("div.news-container").animate({
          scrollLeft : '+='+($("div.news-item-container").width() + 5)
        }, 400);
      });
      $("span.news-previous").click(function() {
        $("div.news-container").animate({
          scrollLeft : '-='+($("div.news-item-container").width() + 5)
        }, 400);
      });
    }
    if($(window).width() <= 1366 && $(window).width() > 990)
    {
      $("div.news-item-container").css({
        'width':'calc(33.333333%)'
      })

      $("span.news-next").click(function() {
        $("div.news-container").animate({
          scrollLeft : '+='+($("div.news-item-container").width() + 5)
        }, 400);
      });
      $("span.news-previous").click(function() {
        $("div.news-container").animate({
          scrollLeft : '-='+($("div.news-item-container").width() + 5)
        }, 400);
      });
    }
    if($(window).width() <= 990 && $(window).width() > 768)
    {
      $("div.news-item-container").css({
        'width':'calc(50%)'
      })

      $("span.news-next").click(function() {
        $("div.news-container").animate({
          scrollLeft : '+='+($("div.news-item-container").width() + 5)
        }, 400);
      });
      $("span.news-previous").click(function() {
        $("div.news-container").animate({
          scrollLeft : '-='+($("div.news-item-container").width() + 5)
        }, 400);
      });
    }
    if($(window).width() <= 768)
    {
      $("div.news-item-container").css({
        'width':'calc(100%)'
      })

      $("span.news-next").click(function() {
        $("div.news-container").animate({
          scrollLeft : '+='+($("div.news-item-container").width() + 5)
        }, 400);
      });
      $("span.news-previous").click(function() {
        $("div.news-container").animate({
          scrollLeft : '-='+($("div.news-item-container").width() + 5)
        }, 400);
      });
    }

  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

    $('div.banner-overlay').css({
      opacity: function() {
        var elementHeight = $(this).height(),
            opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 0.8) + 0.3;

        return opacity;
      }
    });
  });
});
