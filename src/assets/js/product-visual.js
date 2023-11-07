import Swiper, { Navigation, Thumbs, EffectFade } from "swiper";

Swiper.use([Navigation, Thumbs, EffectFade]);

const $productVisual = document.querySelector(".product-visual");
if ($productVisual) {
  const navSlider = new Swiper(".product-visual__other-img-slider", {
    direction: "vertical",
    slidesPerView: 4,
    spaceBetween: 16,
  });

  new Swiper(".product-visual__main-img-slider", {
    effect: "fade",
    slidesPerView: 1,
    spaceBetween: 20,
    thumbs: {
      swiper: navSlider.slides.length > 0 ? navSlider : null,
    },
    mousewheel: {
      sensitivity: 1.4,
    },
    navigation: {
      prevEl: ".product-visual__main-prev",
      nextEl: ".product-visual__main-next",
    },
  });
}
