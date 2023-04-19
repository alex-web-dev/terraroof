import Swiper, { Pagination } from 'swiper';

Swiper.use(Pagination);

new Swiper('.banner__slider', {
  slidesPerView: 1,
  speed: 600,
  pagination: {
    el: '.banner__pagination',
    clickable: true,
  },
});