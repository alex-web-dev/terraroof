const $colorInputs = document.querySelectorAll('.js-product-card-color');
$colorInputs.forEach($input => {
  const $productCard = $input.closest('.product-card');
  const $productPriceOld = $productCard.querySelector('.product-card__price-old-value');
  const $productPriceNew = $productCard.querySelector('.product-card__price-new-value');

  $input.addEventListener('change', () => {
    const priceOld = +$input.dataset.priceOld;
    if (priceOld) {
      $productPriceOld.innerText = priceOld.toLocaleString();
    }

    const priceNew = +$input.dataset.price;
    if (priceNew) {
      $productPriceNew.innerText = priceNew.toLocaleString();
    }
  });
});