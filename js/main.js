jQuery(document).ready(function ($) {
  'use strict';

  function backToTop() {
    var button = $('.arrow-up__btn');
    $(window).on('scroll', function () {
      if ($(this).scrollTop() >= 50) {
        button.fadeIn();
      } else {
        button.fadeOut();
      }
    });

    button.on('click', function (evt) {
      evt.preventDefault();
      $('html, body').animate({
        scrollTop: 0,
      }, 1500);
    });
  }
  backToTop();

  $('.header-list__btn').on('click', function () {
    $(this).toggleClass('header-list__btn--closed header-list__btn--opened');
    $('.header-list').toggleClass('header-list--opened');
  });


  $('.header-list-link__about-us').click(function () {
    $('html, body').animate({
      scrollTop: ($('.about-us').offset().top)
    }, 1500);
  });

  $('.header-list-link__products').click(function () {
    $('html, body').animate({
      scrollTop: ($('.products').offset().top)
    }, 1500);
  });

  $('.header-list-link__services').click(function () {
    $('html, body').animate({
      scrollTop: ($('.statistics').offset().top)
    }, 1500);
  });

  $('.header-list-link__our-team').click(function () {
    $('html, body').animate({
      scrollTop: ($('.team').offset().top)
    }, 1500);
  });

  $('.header-list-link__blog').click(function () {
    $('html, body').animate({
      scrollTop: ($('.social-showcase').offset().top)
    }, 1500);
  });
  $('.header-list-link__contact').click(function () {
    $('html, body').animate({
      scrollTop: ($('.footer').offset().top)
    }, 1500);
  });

});