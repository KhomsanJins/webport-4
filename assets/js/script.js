$(document).ready(function () {
  $(".SliderBanner").lightSlider({
    item: 1,
    loop: true,
    // mode: 'fade',
    // loop: false,
    slideMove: 1,
    easing: "cubic-bezier(0.25, 0, 0.25, 1)",
    speed: 2000,
    pause: 4000,
    controls: true,
    pager: false,
    slideMargin: 0,
    auto: true,
    prevHtml: '<i class="fa-solid fa-arrow-left-long"></i>',
    nextHtml: '<i class="fa-solid fa-arrow-right-long"></i>',
  });

  // $(".SliderProduct").lightSlider({
  //   item: 2,
  //   loop: true,
  //   slideMove: 1,
  //   easing: "cubic-bezier(0.25, 0, 0.25, 1)",
  //   speed: 1300,
  //   pause: 3000,
  //   pager: false,
  //   pauseOnHover: true,
  //   slideMargin: 24,
  //   auto: true,
  //   enableTouch: true,
  //   prevHtml: '<i class="fa-solid fa-chevron-left"></i>',
  //   nextHtml: '<i class="fa-solid fa-chevron-right"></i>',
  //   responsive: [
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         item: 1,
  //         slideMove: 1,
  //         slideMargin: 0,
  //       },
  //     },
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         item: 1,
  //         slideMove: 1,
  //         slideMargin: 0,
  //       },
  //     },
  //   ],
  // });

  $(".SliderCollection").lightSlider({
    item: 1,
    loop: true,
    slideMove: 1,
    easing: "cubic-bezier(0.25, 0, 0.25, 1)",
    speed: 4000,
    pause: 4000,
    pager: false,
    slideMargin: 0,
    auto: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          item: 1,
          slideMove: 1,
          slideMargin: 0,
        },
      },
      {
        breakpoint: 767,
        settings: {
          item: 1,
          slideMove: 1,
        },
      },
    ],
  });

  $(".SliderArticle").lightSlider({
    item: 1,
    loop: true,
    // mode: 'fade',
    slideMove: 1,
    easing: "cubic-bezier(0.25, 0, 0.25, 1)",
    speed: 1300,
    pause: 3000,
    controls: true,
    pager: false,
    slideMargin: 0,
    auto: true,
    prevHtml: '<i class="fa-solid fa-arrow-left-long"></i>',
    nextHtml: '<i class="fa-solid fa-arrow-right-long"></i>',
  });

  $(".SliderProduct").owlCarousel({
    // center: true,
    loop: false,
    items: 1,
    nav: true,
    dots: false,
    margin: 0,
    // loop: true,
    autoplay: true,
    rewindNav: false,
    rewind: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    // navText: ["", ""],
    responsive: {
      992: {
        items: 2,
        margin: 24,
      },
    },
  });
});

$(document).ready(function () {
  $(".product-carousel").owlCarousel({
    margin: 35,
    loop: false,
    autoWidth: true,
    dots: false,
    nav: true,
    // pullDrag: false,
    // pullDrag: true,
    // touchDrag: true,
    // mouseDrag: true,

    // responsive: {
    //   // breakpoint from 768 up
    //   991: {
    //     pullDrag: false,
    //     touchDrag: false,
    //     mouseDrag: false,
    //   },
    // },
  });

  $(".article-carousel").owlCarousel({
    margin: 35,
    loop: false,
    // center: true,
    autoWidth: true,
    dots: false,
    nav: true,
    pullDrag: true,
    touchDrag: true,
    mouseDrag: true,

    responsive: {
      // breakpoint from 768 up
      991: {
        pullDrag: false,
        touchDrag: false,
        mouseDrag: false,
      },
    },
  });
});

$(function () {
  $("#search").click(function () {
    $(".search-box").addClass("hide");
  });

  $("#close").click(function () {
    $(".search-box").removeClass("hide");
  });
});

$(document).ready(function () {
  $("#SortBy").click(function () {
    $(".sortby-list").toggleClass("hide");
  });

  $("#Filters").click(function () {
    $(".filters-box").addClass("hide");
    $(".overlay").addClass("d-block");
  });

  $(".overlay").click(function () {
    $(".filters-box").removeClass("hide");
    $(".overlay").removeClass("d-block");
  });

  $("#closeFilters").click(function () {
    $(".filters-box").removeClass("hide");
    $(".overlay").removeClass("d-block");
  });

  $("#Cart").click(function () {
    $(".chk-out-box").toggleClass("hide");
  });

  $("#Member").click(function () {
    $(".menu-member").toggleClass("hide");
  });
});

function scrollWaypointInit(items, trigger) {
  items.each(function () {
    var element = $(this),
      osAnimationClass = element.data("animation"),
      osAnimationDelay = element.attr("data-animation-delay");

    element.css({
      "-webkit-animation-delay": osAnimationDelay,
      "-moz-animation-delay": osAnimationDelay,
      "animation-delay": osAnimationDelay,
    });

    var trigger = trigger ? trigger : element;

    trigger.waypoint(
      function () {
        element.addClass("animated").addClass(osAnimationClass);
      },
      {
        // triggerOnce: true,
        offset: "100%",
      }
    );
  });
}

$(document).ready(function () {
  scrollWaypointInit($(".animateMe"));
});

$(document).ready(function () {
  $("#imageGallery").lightSlider({
    gallery: true,
    item: 1,
    loop: true,
    thumbItem: 6,
    slideMargin: 0,
    enableDrag: true,
    currentPagerPosition: "left",

    onSliderLoad: function (el) {
      el.lightGallery({
        selector: "#imageGallery .lslide",
      });
    },
  });
});
