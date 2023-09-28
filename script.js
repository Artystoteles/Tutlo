const menu = document.querySelector(".navbar__menu");
const stripe = document.querySelector(".navbar__stripe");
const popup = document.querySelector(".hero__menu");
const closeButton = document.querySelector(".hero__closeButton");

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
  popup.classList.toggle("hero__menu--active");
});
closeButton.addEventListener("click", function () {
  popup.classList.remove("hero__menu--active");
});
