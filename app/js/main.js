$(function () {

  $('.comforts__inner-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev arrow__prev"><img src="images/svg/slide-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next arrow__next"><img src="images/svg/slide-next.svg" alt=""></button>',
  });

  $('.tour-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev arrow__prev"><img src="images/svg/slide-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next arrow__next"><img src="images/svg/slide-next.svg" alt=""></button>',
    centerMode: true,
    centerPadding: '360px',
    // focusOnSelect: true,
    // variableWidth: true,
  });

  $('.testimonials__slider-top').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev arrow__prev icon-arrow-left"></button>',
    nextArrow: '<button type="button" class="slick-next arrow__next icon-arrow-right"></button>',
    arrows: true,
    centerMode: true,
    centerPadding: '1px',
    focusOnSelect: true,
    asNavFor: '.testimonials__slider-bottom'
  });

  $('.testimonials__slider-bottom').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    centerMode: true,
    asNavFor: '.testimonials__slider-top',
  });
  
  // $('#date-input').dateDropper();
  $('#date-input').dateDropper({
    // theme: 'vanilla',
    format: 'd-m-Y',
    lang: 'ru',
    // roundtrip: true,
    // modal: true,
    large: true
  });

  $('#date-input2').dateDropper({
    // theme: 'vanilla',
    format: 'd-m-Y',
    lang: 'ru',
    large: true
  });
 

});