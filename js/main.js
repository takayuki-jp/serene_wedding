document.addEventListener("DOMContentLoaded", function() {
  //splide
  new Splide(".splide", {
    autoplay: false,
    interval: 3000,
    speed: 400,
    rewind: true,
    perPage: 3,
    clones: 3,
    gap: 40,
    padding: 35,
    focus: "center",
    arrows: false,
    // pagination: false,
    // trimSpace: false,
    classes: {
      pagination: "splide__pagination pickup__splidePagination",
      page: "splide__pagination__page pickup__splidePage",
    },
    breakpoints: {
      800: {
        perPage: 2,
      },
      600: {
        perPage: 1,
      }
    },
  }).mount();



});