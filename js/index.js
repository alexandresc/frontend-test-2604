$(document).ready(function(){
  $('.slick-carousel').slick({
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick"
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
          dots: true,
          infinite: true,
          fade: true,
          cssEase: 'linear',
          arrows: false,
          adaptiveHeight: true,
        }
      }
    ]
  });
});