/* Change navbar background color and transparency on scroll */

function navBarBackgroundScrollEffect () {
  
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 600) {
      $('.navigator-1234').css('background-color', 'rgba(30, 30, 30, 0.7)');
    } else {
      $('.navigator-1234').css('background-color', 'transparent');
    }
  });
};

/* Scroll to top */

function scrollToTop () {
  $('html, body').scrollTop(0);
};

/* Scroll to top visibility */

function floatingButtonVisibility() {
  $(window).scroll(function () {
    if ($(window).scrollTop() <= 900) {
      $('.floating-button').fadeOut();
    } else {
      $('.floating-button').fadeIn();
    }
  });
};

(function ($) {
  $(function () {
    $(window).scroll(function () {
      clearTimeout($.data(this, "scrollCheck"));
      $.data(this, "scrollCheck", setTimeout(function () {
        $('.floating-button').fadeOut();
      }, 1000));
    });
  });
}) (jQuery);

/* Dismiss navbar on click */

function autoDismissNavBar () {
  $(document).click(function (e) {
    if (!$(e.target).is('#navbarNav')) {
      $('.collapse').collapse('hide');
    }
  });
  $('.navbar-collapse .navbar-nav .nav-item a').click( function () {
    $(".navbar-collapse").collapse('hide');
  });
};

navBarBackgroundScrollEffect();
floatingButtonVisibility();
autoDismissNavBar();