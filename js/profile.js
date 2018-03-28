$(document).ready(function() {
    $(".icon-info").click(function() {
      $(".icon-infobox").fadeIn(300);
      $(".black-overlay").fadeIn(300);
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
});
