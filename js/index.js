$(document).ready(function() {
  var open = true;

  $('#upload').click(function() {
      $("div.quick-upload").animate({
          left:'0px'
      }, 300);
      $("div.black-overlay").fadeIn();
  });

  $("div.quick-upload .close-icon-info").click(function() {
    $("div.quick-upload").animate({
      left:'-400px'
    }, 300);
    $("div.black-overlay").fadeOut();
  });
});
