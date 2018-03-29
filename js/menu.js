$(document).ready(function()
{
    $("#settings").click(function() {
      $(".nav-settings-dropdown").slideToggle(200);
      $(".nav-profile-dropdown").slideUp(100);
    });

    $("#profile").click(function() {
      $(".nav-profile-dropdown").slideToggle(200);
      $(".nav-settings-dropdown").slideUp(100);
    });

    var sfwtoggle = true;

    $("#sfw-toggle").click(function() {
      if(sfwtoggle)
      {
        $(this).css({
          'backgroundColor':'#e03a3a'
        });
        sfwtoggle = false;
      }
      else
      {
        $(this).css({
          'backgroundColor':'#23a02f'
        });
        sfwtoggle = true;
      }
    });

    $(window).scroll(function() {
      if($(window).scrollTop() > 290)
      {
        $(".profile-nav").animate({
          position:'fixed',
          top:'50px',
        }, 300);

        $(".profile-nav").css({
          'z-index': '900'
        });
      }
      else
      {
        $(".profile-nav").animate({
          position:'relative',
          top:'0',
        }, 300);

        $(".profile-nav").css({
          'z-index': '0'
        });
      }
    });

});
