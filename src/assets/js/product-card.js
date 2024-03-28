import Swiper, { Pagination } from "swiper";

Swiper.use([Pagination]);

const $productCards = document.querySelectorAll(".product-card");
$productCards.forEach(($productCard) => {
  const $slider = $productCard.querySelector('.product-card__slider');
  const $pagination = $productCard.querySelector('.product-card__pagination');
  
  new Swiper($slider, {
    slidesPerView: 1,
    speed: 600,
    pagination: {
      el: $pagination,
      clickable: true,
    },
  });
});
