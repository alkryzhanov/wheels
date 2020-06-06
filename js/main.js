jQuery(document).ready(function ($) {
  $('.header-list__btn').on('click', function () {
    $('.header-list').toggleClass('header-list--closed');
    if ($(this)) {
      $('.header-list').addClass('header-list--opened');
    } else {
      $('.header-list').remmoveClass('header-list--closed');
    }
    $(this).toggleClass('header-list__btn--closed header-list__btn--opened');
  });
  $('#about-us').click(function () {
    $('html, body').animate({
      scrollTop: ($('.about-us').first().offset().top)
    }, 1000);
  });
});