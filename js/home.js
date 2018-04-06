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
    }, 600);
  });

  $("div.main-menu").hover(function() {
    $("div.menu-bg").fadeIn(200);
  }, function() {
    $("div.menu-bg").fadeOut(100);
    $("div.nav-profile-dropdown").fadeOut(100);
    $("div.nav-settings-dropdown").fadeOut(100);
    $("div.nav-subbox").fadeOut(100);
  });

  $(window).scroll(function()
  {

    if($(window).scrollTop() >= ($(window).height() - 50))
    {
      $("div.menu-bg").fadeIn(200);
    }
    else
    {
      $("div.menu-bg").fadeOut(200);
    }

  });

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
