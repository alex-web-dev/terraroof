import Swiper, { Pagination, Autoplay } from 'swiper';

Swiper.use([Pagination, Autoplay]);

new Swiper('.banner__slider', {
  slidesPerView: 1,
  speed: 600,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.banner__pagination',
    clickable: true,
  },
});