$(function () {

  $('.comforts__inner-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev arrow__prev"><img src="images/svg/slide-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next arrow__next"><img src="images/svg/slide-next.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        }
      },
    ]
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
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
          centerPadding: '200px',
        }
      },
      {
        breakpoint: 1560,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
          centerPadding: '100px',
        }
      },
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
          centerMode: false,
        }
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
          centerMode: false,
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          centerMode: false,
        }
      },
    ]
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
    asNavFor: '.testimonials__slider-bottom',
    responsive: [
      {
        breakpoint: 560,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 450,
        settings: {
          arrows: false,
          centerPadding: '0px',
        }
      },
    ]
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
    format: 'd-m-Y',
    lang: 'ru',
    // roundtrip: true,
    // modal: true,
    largeOnly: true
  });

  $('#date-input2').dateDropper({
    format: 'd-m-Y',
    lang: 'ru',
    largeOnly: true
  });

  $('.ham').on('click', function(){
    $('.header-menu').slideToggle();
  });
 

});