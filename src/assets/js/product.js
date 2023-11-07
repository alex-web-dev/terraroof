import { moveElement } from "./helpers";
import Swiper, { Navigation, Autoplay, Thumbs, EffectFade } from "swiper";

Swiper.use([Navigation, Autoplay, Thumbs, EffectFade]);

const $product = document.querySelector(".product");
if ($product) {
  const navSlider = new Swiper(".product__other-slider", {
    slidesPerView: 3,
    spaceBetween: 9,
    allowTouchMove: true,
    breakpoints: {
      767.01: {
        spaceBetween: 0,
        slidesPerView: "auto",
        allowTouchMove: false,
      },
    },
    navigation: {
      prevEl: ".product__other-prev",
      nextEl: ".product__other-next",
    },
  });

  new Swiper(".product__main-img-slider", {
    effect: "fade",
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    allowTouchMove: false,
    thumbs: {
      swiper: navSlider,
    },
    mousewheel: {
      sensitivity: 1.4,
    },
  });

  const $typeInputs = document.querySelectorAll(".js-product-type");
  $typeInputs.forEach(($input) => {
    $input.addEventListener("change", () => changePrice($product));
  });

  const $counter = $product.querySelector(".product__counter");
  const $counterMinus = $counter.querySelector(".counter__minus");
  $counterMinus.addEventListener("click", () => {
    setTimeout(() => changePrice($product));
  });
  const $counterPlus = $counter.querySelector(".counter__plus");
  $counterPlus.addEventListener("click", () => {
    setTimeout(() => changePrice($product));
  });

  moveMeta();
  window.addEventListener("resize", moveMeta);

  moveTitle();
  window.addEventListener("resize", moveTitle);
}

function changePrice($product) {
  const $productPriceOld = $product.querySelector(".product__price-old-value");
  const $productPriceNew = $product.querySelector(".product__price-new-value");
  const $counter = $product.querySelector(".product__counter");
  const $counterInput = $counter.querySelector(".counter__input");
  const $checkedTypeInput = $product.querySelector(".js-product-type:checked");
  const count = +$counterInput.value;

  const priceOld = +$checkedTypeInput.dataset.priceOld;
  if (priceOld) {
    $productPriceOld.innerText = (count * priceOld).toLocaleString();
  }

  const priceNew = +$checkedTypeInput.dataset.price;
  if (priceNew) {
    $productPriceNew.innerText = (count * priceNew).toLocaleString();
  }
}

function moveTitle() {
  moveElement({
    element: ".product__title",
    from: ".product__form",
    to: ".product__main",
    width: 767,
    fromInsertType: "prepend",
    toInsertType: "prepend",
  });
}

function moveMeta() {
  moveElement({
    element: ".product__meta",
    from: ".product__form",
    to: ".product__images-meta",
    width: 767,
    fromInsertType: "prepend",
    toInsertType: "prepend",
  });
}
