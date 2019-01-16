/* Change navbar background color and transparency on scroll */

export const navBarBackgroundScrollEffect = (screenWidth) => {
  $(window).scroll(() => {
    if (screenWidth > 767) {
      if ($(window).scrollTop() >= 50) {
        $('.menu-header').css('background', 'rgba(250, 250, 250, 0.95)');
      } else {
        $('.menu-header').css('background', 'transparent');
      }

      if ($(window).scrollTop() >= 500) {
        $('.app-home-header').css('background', 'rgba(0, 0, 0, 0.6)');
      } else {
        $('.app-home-header').css('background', 'transparent');
      }

      if ($(window).scrollTop() >= 300) {
        $('.app-header').css('background', 'rgba(0, 0, 0, 0.6)');
      } else {
        $('.app-header').css('background', 'transparent');
      }
    }
  });
};

/* Scroll to top */

export const scrollToTop = () => {
  $('html, body').scrollTop(0);
};

/* Dismiss navbar on click */

export const autoDismissNavBar = () => {
  $('.navbar-collapse').on("click", "a:not([data-toggle])", null, () => {
    $(".navbar-collapse").collapse('hide');
  });
  // $('.navbar-collapse a').click(() => {
  //   $(".navbar-collapse").collapse('hide');
  // });
};

