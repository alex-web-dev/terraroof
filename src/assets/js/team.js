import Swiper, { Pagination, Autoplay  } from "swiper";

Swiper.use(Pagination, Autoplay);

const $teamSections = document.querySelectorAll('.team');
$teamSections.forEach($team => {
  const $slider = $team.querySelector('.team__slider');
  new Swiper($slider, {
    speed: 600,
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    watchOverflow: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".team__pagination",
      clickable: true,
    },
    breakpoints: {
      840: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      }
    },
  });
});