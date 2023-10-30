let observer = () => {};

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

  if ($(".slider-other__slider").length > 0) {
    const sliders = document.querySelectorAll(".slider-other__slider");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        if (!slider.swiper) {
          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 6,
            slidesPerGroup: 6,
            spaceBetween: 20,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            on: {
              init: function (swiper) {},
              slideChange: function (swiper) {},
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              480: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 16,
              },
              1280: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 16,
              },
              1400: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 16,
              },
              1600: {
                slidesPerView: 5,
                slidesPerGroup: 5,
              },
              1921: {
                slidesPerView: 6,
                slidesPerGroup: 6,
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

  if ($(".slider-other__designer").length > 0) {
    const sliders = document.querySelectorAll(".slider-other__designer");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        if (!slider.swiper) {
          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              480: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 16,
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

  if ($(".slider-pictures__slider").length > 0) {
    const sliders = document.querySelectorAll(".slider-pictures__slider");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        if (!slider.swiper) {
          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            on: {
              init: function (swiper) {},
              slideChange: function (swiper) {},
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              480: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 16,
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
        $("body").removeClass("modal-open");
      },
    });

    $("[data-modal]").map(function () {
      $(this).click((e) => e.preventDefault());
    });
  }

  if ($(".js-select").length > 0) {
    $(".js-select").on("click", function () {
      let than = $(this);
      let block = than.find(".js-select-show");

      if (than.hasClass("opened")) {
        close();
      } else {
        than.addClass("opened");
        block.stop().slideDown();
      }

      block.find("a").on("click", function (event) {
        event.preventDefault();
        than.find(".js-select-text").text($(this).text());
        close();
      });

      $(document).mouseup(function (e) {
        if (
          !block.is(e.target) &&
          block.has(e.target).length === 0 &&
          !than.is(e.target)
        ) {
          close();
        }
      });

      function close() {
        than.removeClass("opened");
        block.stop().slideUp();
      }
    });
  }

  if ($(".header-search").length > 0) {
    let search = $(".search-invis");
    let btnSearch = $(".header-search");
    let overlay = $(".search-overlay");
    let btnClose = $(".btn-close-search");

    btnSearch.on("click", function () {
      search.addClass("opened");
      overlay.addClass("search-overlay--opened");
    });

    overlay.on("click", function () {
      close();
    });

    btnClose.on("click", function () {
      close();
    });

    function close() {
      search.removeClass("opened");
      overlay.removeClass("search-overlay--opened");
    }
  }

  if ($(".text-simple").length > 0) {
    $(".text-simple").map(function () {
      if ($(this).find("picture").length > 0) {
        $(this).addClass("text-simple-picture");
      }
    });
  }

  if ($(".grid-picture__slider").length > 0) {
    if ($(window).width() < 768) {
      initMobileSliderPicture();
    }
  }

  if ($(".count-block").length > 0) {
    $(".count-block").map(function () {
      let plus = $(this).find(".count-plus");
      let minus = $(this).find(".count-minus");
      let input = $(this).find(".input-count");
      let count = $(this).find(".input-count").val();

      plus.on("click", function (e) {
        e.preventDefault();
        count++;
        input.val(count);
      });

      minus.on("click", function (e) {
        e.preventDefault();
        count--;

        if (count < 0) {
          count = 0;
        }

        input.val(count);
      });
    });
  }

  if ($(".filter-block").length > 0) {
    let filter = $(".filter-block");
    let filterHead = $(".filter-block__head");
    let btn = $(".btn-filter");
    let overlay = $(".filter-overlay");
    let btnClose = $(".filter-close");

    filterHead.on("click", function () {
      $(".filter-block__head").removeClass("opened");
      $(".filter-block__body").stop().slideUp();

      $(this).addClass("opened").next(".filter-block__body").stop().slideDown();
    });

    btn.on("click", function () {
      if (filter.hasClass("show")) {
        close();
      } else {
        filter.addClass("show");
        overlay.addClass("filter-overlay--opened");
      }
    });

    overlay.on("click", function () {
      close();
    });

    btnClose.on("click", function () {
      close();
    });

    function close() {
      filter.removeClass("show");
      overlay.removeClass("filter-overlay--opened");
    }
  }

  if ($(".word-section").length > 0) {
    let parents = $(".word-section");
    let circle = $(".design-invis__item .circle");
    let itemClose = $(".designer-info__close");

    circle.on("click", function () {
      if ($(this).hasClass("active")) {
        close();
      } else {
        close();
        parents.addClass("opened");
        $(this).addClass("active");
        $(this)
          .parents(".design-invis__item")
          .find(".designer-info")
          .stop()
          .addClass("opened");
      }
    });

    itemClose.on("click", function () {
      close();
    });

    function close() {
      parents.stop().removeClass("opened");
      $(".design-invis__item .circle").stop().removeClass("active");
      // $(".design-invis__item").stop().removeClass("active");
      $(".designer-info").stop().removeClass("opened");
    }
  }

  if ($(".custom-size").length > 0) {
    $(".custom-size").on("click", function () {
      let bl = $(this);
      let inputs = bl.parents(".filter-block__body").find("input[type=text]");

      if (!bl.hasClass("checked")) {
        inputs.attr("disabled", "disabled");
      } else {
        inputs.removeAttr("disabled");
      }

      bl.toggleClass("checked");
    });
  }
});

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

$(window).resize(function () {
  if ($(".grid-picture__slider").length > 0) {
    if ($(window).width() < 768) {
      initMobileSliderPicture();
    } else {
      observer();
    }
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
  $("body").removeClass("modal-open");
}

function initMobileSliderPicture() {
  if ($(".grid-picture__slider").hasClass("init-mobile-slider")) return false;

  $(".grid-picture__slider").addClass("init-mobile-slider");

  $(".grid-picture__slider .swiper-slide").unwrap(".grid-list");

  $(".grid-picture__slider .swiper-slide").wrapAll(
    "<div class='swiper-wrapper'></div>"
  );

  const swiper = new Swiper(".grid-picture__slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoHeight: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let destroy = () => {
    if ($(".grid-picture__slider").hasClass("init-mobile-slider")) {
      $(".grid-picture__slider").removeClass("init-mobile-slider");
      $(".grid-picture__slider .swiper-slide").unwrap(".swiper-wrapper");

      const divs = $(".grid-picture__slider .swiper-slide");
      for (let i = 0; i < divs.length; i += 2) {
        if (i < 2) {
          divs
            .slice(i, i + 2)
            .wrapAll("<div class='grid-list grid-list--2'></div>");
        } else {
          divs.slice(i, i + 2).wrapAll("<div class='grid-list'></div>");
        }
      }

      swiper.destroy(true, true);
    }
  };

  observer = destroy;
}
