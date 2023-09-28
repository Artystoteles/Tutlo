const menu = document.querySelector(".navbar_menu");
const stripe = document.querySelector(".navbar_stripe");
const popup = document.querySelector(".hero_menu");
const closeButton = document.querySelector(".hero_closeButton");

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

menu.addEventListener("click", function () {
  popup.classList.toggle("hero_menu--active");
});
closeButton.addEventListener("click", function () {
  popup.classList.remove("hero_menu--active");
});
