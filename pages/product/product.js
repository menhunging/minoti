$(document).ready(function () {
  if ($(".product-section").length > 0) {
    const swiperProductSmall = new Swiper(".product-small-slider", {
      slidesPerView: 5,
      spaceBetween: 20,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        0: {
          slidesPerView: 3,
          spaceBetween: 6,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 7,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 6,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1600: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      },
    });

    const swiperProductBig = new Swiper(".product-big-slider", {
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      thumbs: {
        swiper: swiperProductSmall,
      },
    });
  }
});
