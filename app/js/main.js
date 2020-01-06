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
          fade: true,
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

  $('.ham').on('click', function () {
    $('.header-menu').toggleClass("active");
  });

  wow = new WOW(
    {
      mobile: false,       // default
    }
  )
  wow.init();

  // Анимация чисел
  var a = 0;
  $(window).scroll(function () {

    var oTop = $('.quantity__inner').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.number').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        },

          {

            duration: 2000,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            }

          });
      });
      a = 1;
    }

  });


  // Fixed menu
  let header = $("#header");
  let headerH = header.innerHeight();
  let scrollPos = $(window).scrollTop();
  checkScroll(scrollPos, headerH);

  $(window).on("scroll resize", function (){
    headerH = header.innerHeight();
    scrollPos = $(this).scrollTop();
    checkScroll(scrollPos, headerH);
  });

  function checkScroll(scrollPos, headerH) {
    if (scrollPos > headerH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  // Scroll menu nav
  $("[data-scroll]").on("click", function(event){
    event.preventDefault();
    let elementID = $(this).data("scroll");
    let elementOffset = $(elementID).offset().top;

    $('.header-menu').removeClass("active");
    $('.ham').removeClass("active");


    $("html, body").animate({
      scrollTop: elementOffset - 100
    }, 700);
  });



});

