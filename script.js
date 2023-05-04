$('.responsive').slick({
  dots: false,
  rows: 2,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 2,
  arrows: false,
  //   fade: true,
  autoplay: true,
  autoplaySpeed: 1000,
  //   centerMode:true,
  //   centerPadding:50px,
  easing: 'swing',
  cssEase: 'ease',
  responsive: [
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
});

$('.responsive-2').slick({
  dots: true,
  dotsClass: 'slick-dots',
  rows: 1,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  //   fade: true,
  autoplay: false,
  autoplaySpeed: 1000,
  //   centerMode:true,
  //   centerPadding:50px,
  easing: 'swing',
  cssEase: 'ease',
  responsive: [
    // {
    //   breakpoint: 1024,
    //   settings: {
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     infinite: true,
    //     dots: true,
    //   },
    // },
    // {
    //   breakpoint: 600,
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 2,
    //   },
    // },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$('.responsive-3,.responsive-4').slick({
  dots: false,
  // dotsClass: 'slick-dots',
  rows: 1,
  infinite: true,
  speed: 600,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  //   fade: true,
  autoplay: false,
  // autoplaySpeed: 1000,
  //   centerMode:true,
  //   centerPadding:50px,
  easing: 'swing',
  cssEase: 'ease',
  responsive: [
    // {
    //   breakpoint: 1024,
    //   settings: {
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     infinite: true,
    //     dots: true,
    //   },
    // },
    // {
    //   breakpoint: 600,
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 2,
    //   },
    // },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
});
