import Swiper, { Pagination } from 'swiper';

Swiper.use(Pagination);

new Swiper('.banner__slider', {
  slidesPerView: 1,
  spaceBetween: 15,
  speed: 600,
  pagination: {
    el: '.banner__pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      spaceBetween: 30,
    }
  }
});
