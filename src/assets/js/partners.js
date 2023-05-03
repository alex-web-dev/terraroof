import Swiper, { Pagination, Autoplay  } from "swiper";

Swiper.use(Pagination, Autoplay);

const $partnersSections = document.querySelectorAll('.partners');
$partnersSections.forEach($partners => {
  const $slider = $partners.querySelector('.partners__slider');
  const autoplayDelay = $slider.dataset.autoplayDelay ?? 3000;

  new Swiper($slider, {
    speed: 600,
    slidesPerView: 1,
    spaceBetween: 21,
    loop: true,
    autoplay: {
      delay: autoplayDelay,
      disableOnInteraction: false
    },
    pagination: {
      el: ".partners__pagination",
      clickable: true,
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      }
    },
  });
});