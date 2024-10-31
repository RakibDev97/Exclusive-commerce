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

// countdown

function startCountdown(targetDate) {
  const countdownElement = document.getElementById("countdown");
  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysElement.textContent = days.toString().padStart(2, "0");
    hoursElement.textContent = hours.toString().padStart(2, "0");
    minutesElement.textContent = minutes.toString().padStart(2, "0");
    secondsElement.textContent = seconds.toString().padStart(2, "0");

    if (distance < 0) {
      clearInterval(interval);
      countdownElement.textContent = "Time's up!";
    }
  }

  const interval = setInterval(updateCountdown, 1000);
}

// Set the target date for the countdown
const targetDate = new Date("2024-12-31T23:59:59").getTime();
startCountdown(targetDate);

// swiper gallery

var swiper = new Swiper(".gallerySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".gallerySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
