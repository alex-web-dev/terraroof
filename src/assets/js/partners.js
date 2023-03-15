import Swiper, { Pagination } from "swiper";

Swiper.use(Pagination);

const $partnersSections = document.querySelectorAll('.partners');
$partnersSections.forEach($partners => {
  const $slider = $partners.querySelector('.partners__slider');
  new Swiper($slider, {
    speed: 600,
    slidesPerView: 1,
    spaceBetween: 21,
    slideVisibleClass: 'test',
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