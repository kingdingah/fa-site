$(document).ready(function()
{
    $("div.theme-blue a").click(function(event)
    {
      //Hover - BG colour
      $("#upload,"
      +"div.nav-upload a").hover(function()
      {
        $(this).css({'background-color': '#3f87fc'});
      }, function()
      {
        $(this).css({'background-color': '#111'});
      });

      //Border Bottom colour
      $("div.nav-settings-dropdown h4,"
      +"div.nav-profile-dropdown h4,"
      +"div.nav-subbox h4,"
      +"div.profile-hotbar a,"
      +"div.notifications-mobile").css({
        'border-bottom-color': '#3f87fc'
      });

      //Border Top colour
      $("#logout").css({
        'border-top-color': '#3f87fc'
      });

      //Hover - Text colour
      $("div.nav-settings-dropdown a,"
      +"div.nav-profile-dropdown a,"
      +"div.nav-subbox a").hover(function()
      {
          $("div.nav-settings-dropdown a,"
          +"div.nav-profile-dropdown a,"
          +"div.nav-subbox a").css({'color':'#3f87fc'});
      }, function()
      {
          $("div.nav-settings-dropdown a,"
          +"div.nav-profile-dropdown a,"
          +"div.nav-subbox a").css({'color':'white'});
      });

      //Text colour
      $("span.submission .sub-overlay,"
      +"div#mobile-username").css({
        'color': '#3f87fc'
      });
    });
});
