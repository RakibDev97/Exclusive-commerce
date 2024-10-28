import "swiper/css";
import Swiper from "swiper";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.css";

//swiper

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 1,
  freeMode: true,
  watchSlidesProgress: true,
});

// swiper 2

var swiper = new Swiper(".flashSales", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // When the screen width is >= 768px (md)
    768: {
      slidesPerView: 2,
    },
    // When the screen width is >= 1024px
    1024: {
      slidesPerView: 4,
    },
    // For smaller screens (e.g., mobile devices)
    0: {
      slidesPerView: 1,
    },
  },
});
