$(document).ready(function () {
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
});
