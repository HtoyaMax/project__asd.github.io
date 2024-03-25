// SWIPER
const swiper = new Swiper(".portfolio__slider", {
  // Optional parameters
  // direction: "vertical",

  slidesPerView: 3,
  observer: true,
  observerParens: true,
  // autoHeight: true,
  spaceBetween: 65,
  speed: 800,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 400px
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 600px
    600: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 900px
    900: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },

  // If we need pagination
  // pagination: {
  //   el: ".reviews__bullets",
  //   clickable: true,
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".portfolio__arrow--right",
    prevEl: ".portfolio__arrow--left",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
