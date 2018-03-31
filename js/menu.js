$(document).ready(function()
{

    $("#settings").click(function() {
      $(".nav-settings-dropdown").fadeToggle(200);
      $(".nav-subbox").fadeOut(200);
      $(".nav-profile-dropdown").fadeOut(100);
    });

    $("#profile").click(function() {
      $(".nav-profile-dropdown").fadeToggle(200);
      $(".nav-subbox").fadeOut(200);
      $(".nav-settings-dropdown").fadeOut(100);
    });

    $("#clear").click(function() {
      $(".submission").fadeOut();
      $(".notes").fadeOut();
      $(".journals").fadeOut();
      $("h6").fadeOut();
      $(".bywho").fadeOut();
      $(".nothingnew").delay(300).fadeIn();
    });

    $("#seeall").click(function() {
      $(".nothingnew").delay(300).fadeOut();
      $(".submission").delay(300).fadeIn();
      $(".notes").delay(300).fadeIn();
      $(".journals").delay(300).fadeIn();
      $("h6").delay(300).fadeIn();
      $(".bywho").delay(300).fadeIn();
    });

    var notes = $('.notes');
    var journals = $('.journals');
    var images = $('.submission img');
    var overlays = $('.sub-overlay');

    $("a#subbox").html(notes.length+"N "+journals.length+"J "+images.length+"S")

    $("#subbox").click(function() {
      $(".nav-profile-dropdown").fadeOut(200);
      $(".nav-subbox").fadeToggle(200);
      $("div.nav-subbox").animate({
        scrollTop: "0px"
      }, 200);
      $(".nav-settings-dropdown").slideUp(100);

      console.log(images.length);


      for(var i = 0; i < images.length; i++)
      {

        var widthImg = $(images[i]).width();
        var widthImgNat = $(images[i]).get(0).naturalWidth;
        var widthSub = $("div.nav-subbox").width();
        var initialHeight = $(images[i]).height();

        console.log("img width: " + widthImg);
        console.log("natural img width: " + widthImgNat);
        console.log("box width: " + widthSub);
        console.log("initial height: " + initialHeight);

        if((widthImg * 1.5) <= (initialHeight+100))
        {
          $(images[i]).css({
            'width':'auto',
            'height': '200px'
          });
        }
        else
        {
          if(widthImgNat > widthSub)
          {
            $(images[i]).css({
              'width':'calc(100% - 50px)',
              'height': 'auto'
            });
          }
          else
          {
            $(images[i]).css({
              'width':'auto',
              'height': '200px'
            });
          }
        }

        var heightImg = $(images[i]).height();

        console.log("new height: " + heightImg);
        console.log("--------------");

        if(widthImg > 250)
        {
          var newMargin = (widthSub - (220)) / 2;

          $(overlays[i]).css({
            'width': 'calc(100% - 50px)',
            'height': heightImg,
            'line-height': heightImg+'px',
            'margin-left': newMargin+'px',
            'margin-top': '10px'
          });
        }
        else
        {
          var newMargin = (widthSub - widthImg) / 2;

          $(overlays[i]).css({
            'width': widthImg,
            'height': heightImg,
            'line-height': heightImg+'px',
            'margin-left': newMargin+'px',
            'margin-top': '10px'
          });
        }
      }
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

    $("span.burger-box").click(function() {
      $("div.mobile-menu").fadeIn(300);
    });

    $("div.mobile-menu .close-icon-info").click(function() {
      $("div.mobile-menu").fadeOut(300);
    });

    $(window).scroll(function() {
      if($(window).scrollTop() > 290)
      {
          /* */
      }
      else
      {
        /* */
      }
    });

});
