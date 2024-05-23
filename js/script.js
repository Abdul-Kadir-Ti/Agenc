$('.banner_part').slick({
    arrows: false,
    dots: true,
});

$('.review_slider').slick({
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: `<i class="fa-solid fa-angle-left left"></i>`,
    nextArrow: `<i class="fa-solid fa-angle-right right"></i>`,
    responsive: [
      {
        breakpoint: 768.99,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
        {
          breakpoint: 575.99,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  });
