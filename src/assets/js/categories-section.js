const $categoriesSections = document.querySelectorAll('.categories-section');
$categoriesSections.forEach($section => {
  const $items = $section.querySelectorAll('.categories-section__item:not(.categories-section__item--img)');
  $items.forEach($item => {
    $item.addEventListener('mouseover', () => {
      const $activeItem = $section.querySelector('.categories-section__item--active');
      if ($activeItem === $item || window.innerWidth < 768) {
        return;
      }

      $activeItem.classList.remove('categories-section__item--active');
      $item.classList.add('categories-section__item--active');
    });
  });
});