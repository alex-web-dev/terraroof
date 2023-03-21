import { moveElement } from './helpers';

const $product = document.querySelector('.product');
if ($product) {
  const $colorInputs = document.querySelectorAll('.js-product-color');
  $colorInputs.forEach(($input, index) => {
    $input.addEventListener('change', () => {
      const $activeImages = document.querySelector('.product__images-color--active');
      $activeImages.classList.remove('product__images-color--active');

      const $newActiveImages = document.querySelectorAll('.product__images-color')[index];
      $newActiveImages.classList.add('product__images-color--active');
    });
  });

  const $typeInputs = document.querySelectorAll('.js-product-type');
  $typeInputs.forEach($input => {
    $input.addEventListener('change', () => changePrice($product));
  });

  const $counter = $product.querySelector('.product__counter');
  const $counterMinus = $counter.querySelector('.counter__minus');
  $counterMinus.addEventListener('click', () => {
    setTimeout(() => changePrice($product));
  });
  const $counterPlus = $counter.querySelector('.counter__plus');
  $counterPlus.addEventListener('click', () => {
    setTimeout(() => changePrice($product));
  });

  moveTitle();
  window.addEventListener('resize', moveTitle);
  
  function moveTitle() {
    moveElement({
      element: '.product__title',
      from: '.product__form',
      to: '.product__main',
      width: 767,
      fromInsertType: 'prepend',
      toInsertType: 'prepend',
    });
  }
}

function changePrice($product) {
  const $productPriceOld = $product.querySelector('.product__price-old-value');
  const $productPriceNew = $product.querySelector('.product__price-new-value');
  const $counter = $product.querySelector('.product__counter');
  const $counterInput = $counter.querySelector('.counter__input');
  const $checkedTypeInput = $product.querySelector('.js-product-type:checked');
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