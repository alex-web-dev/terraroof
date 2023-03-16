import Swiper, { Pagination } from "swiper";

Swiper.use(Pagination);

const $sections = document.querySelectorAll('.images-section');
$sections.forEach($section => {
  const $slider = $section.querySelector('.images-section__slider');
  new Swiper($slider, {
    speed: 600,
    enabled: true,
    slidesPerView: 1,
    pagination: {
      el: ".images-section__pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        enabled: false,
        slidesPerView: 'auto',
      }
    },
  });
});