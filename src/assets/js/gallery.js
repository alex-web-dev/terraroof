import Swiper, { Pagination } from "swiper";

Swiper.use(Pagination);

const $galleries = document.querySelectorAll('.gallery');
$galleries.forEach($gallery => {
  const $slider = $gallery.querySelector('.gallery__slider');
  new Swiper($slider, {
    speed: 600,
    enabled: true,
    slidesPerView: 1,
    pagination: {
      el: ".gallery__pagination",
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