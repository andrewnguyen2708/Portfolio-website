$(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
        $("header").addClass("fixed");
      } else {
        $("header").removeClass("fixed");
      }
    });
  });