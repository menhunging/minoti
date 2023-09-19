$(document).ready(function () {
  if ($(".burger").length > 0) {
    let menu = $(".menu");
    let burger = $(".burger");
    let buttonClose = $(".menu-close");
    let overlay = $(".menu-overlay");

    burger.on("click", function () {
      burger.addClass("burger--opened");
      overlay.addClass("menu-overlay--opened");
      menu.stop().slideDown();
    });

    overlay.on("click", function () {
      closeMenu();
    });

    buttonClose.on("click", function () {
      closeMenu();
    });

    $(".header-phone").clone(true, true).appendTo(".menu-mobile-info");
    $(".header-adress").clone(true, true).appendTo(".menu-mobile-info");

    function closeMenu() {
      menu.stop().slideUp();
      burger.removeClass("burger--opened");
      overlay.removeClass("menu-overlay--opened");
      $(document).off("mouseup");
    }
  }

  if ($(".thisYear").length > 0) {
    let date = new Date();
    $(".thisYear").text(date.getFullYear());
  }

  if ($(".grettings-slider").length > 0) {
    const grettingsSlider = new Swiper(".grettings-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 500,
      loop: true,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ["-20%", 0, -1],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }

  if ($("select").length > 0) {
    $("select").map(function () {
      $(this).selectric({
        onOpen: function (element) {},
        onChange: function (element) {},
        onClose: function (element) {},
      });
    });
  }

  if ($(".video-block").length > 0) {
    $(".video-block video").trigger("pause");
    setVideoMain();
  }

  if ($(".btn-play").length > 0) {
    $(".btn-play").on("click", function () {
      let btn = $(this);

      btn
        .addClass("active")
        .closest(".video")
        .find("video")
        .attr("controls", "true")
        .trigger("play");

      // чтобы постер не прыгал после клика на play
      setTimeout(function () {
        btn.closest(".video").addClass("video--play");
      }, 100);
    });
  }

  if ($(".slider-simple").length > 0) {
    const sliders = document.querySelectorAll(".slider-simple");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        if (!slider.swiper) {
          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 5,
            spaceBetween: 40,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
            },
            on: {
              init: function (swiper) {},
              slideChange: function (swiper) {},
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1600: {
                slidesPerView: 4,
              },
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".phone-input").length > 0) {
    $(".phone-input").map(function () {
      $(this).inputmask({
        mask: "+7(999) 999-99-99",
        placeholder: "*",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }

  if ($("[data-fancybox]").length > 0) {
    Fancybox.bind("[data-fancybox]", {
      speedIn: 600,
      speedOut: 600,
    });
  }

  if ($(".tabs").length > 0) {
    $(".tabs").tabslet({
      mouseevent: "click",
      attribute: "href",
      animation: true,
    });
  }

  if ($(".modal").length > 0) {
    MicroModal.init({
      openTrigger: "data-modal",
      disableScroll: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,

      onShow: () => {
        $("body").addClass("modal-open");
      },

      onClose: () => {
        setTimeout(() => {
          $("body").removeClass("modal-open");
        }, 300);
      },
    });

    $("[data-modal]").map(function () {
      $(this).click((e) => e.preventDefault());
    });
  }
});

// $(window).on("resize", function () {});

$(window).on("load", function () {
  if ($(".map").length > 0) {
    setTimeout(() => ymapsLoad(), 500);
    setTimeout(() => ymaps.ready(init), 1000);
  }

  function ymapsLoad() {
    var script = document.createElement("script");
    script.src =
      "https://api-maps.yandex.ru/2.1/?apikey=0cec76e1-1847-46ed-a96a-c84c0917f2ad&lang=ru_RU";
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.75249, 37.623205],
      zoom: 10,
      controls: false,
    });

    myMap.controls.remove("searchControl");

    var myPlacemark = new ymaps.Placemark(
      [55.886521, 37.4368],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../../img/svg/location.svg",
        iconImageSize: [80, 80],
        iconImageOffset: [-40, -40],
      }
    );

    myMap.geoObjects.add(myPlacemark);
  }
});

function setVideoMain() {
  if ($(window).width() < 768) {
    $(".video-block video").map(function () {
      setVideo($(this), "mobile");
    });
  } else {
    $(".video-block video").map(function () {
      setVideo($(this), "desktop");
    });
  }
}

function setVideo(video, device) {
  video.trigger("pause");
  video.find("source");
  video.attr("src", video.attr(`data-${device}`));
  video.trigger("load");
}

function openModal(modal) {
  MicroModal.show(modal);
  $(".modal__close").on("click", function () {
    closeModal(modal);
  });
  $("body").addClass("modal-open");
}

function closeModal(modal) {
  MicroModal.close(modal);
  setTimeout(() => {
    $("body").removeClass("modal-open");
  }, 300);
}
