// menu

let overlay = document.getElementById('overlay');
let openMenu = document.getElementById('openMenu');
let mobileMenu = document.querySelector('.mobileMenu');

openMenu.addEventListener('click', function () {
  overlay.classList.add('active');
  mobileMenu.classList.add('active');
})
overlay.addEventListener('click', function () {
  overlay.classList.remove('active');
  mobileMenu.classList.remove('active');
})
// acordion

let acordionBtn = Array.from(document.getElementsByClassName('acordionBtn'));

acordionBtn.forEach((item) => {
  item.addEventListener('click', function () {
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
})
// swiper

var casino = new Swiper(".casino", {
  slidesPerView: 1,
  spaceBetween: 21,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  },
  autoplay: {
    delay: 2000,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var testimonials = new Swiper(".testimonials", {
  slidesPerView: 1,
  spaceBetween: 21,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  },
  autoplay: {
    delay: 2000,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next', // دکمه بعدی
    prevEl: '.swiper-button-prev', // دکمه قبلی
  },
});