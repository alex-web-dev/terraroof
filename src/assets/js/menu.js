const $menu = document.querySelector('.menu');
if ($menu) {
  const $menuToggle = $menu.querySelector('.menu__toggle');
  $menuToggle.addEventListener('click', () => {
    $menu.classList.toggle('menu--active');
    document.body.classList.toggle('body--lock');
  });

  $menu.addEventListener('click', (e) => {
    if ($menu === e.target && $menu.classList.contains('menu--active')) {
      $menu.classList.remove('menu--active');
      document.body.classList.remove('body--lock');
    }
  });

  const $submenus = $menu.querySelectorAll('.menu__submenu');
  $submenus.forEach($submenu => {
    $item = $submenu.closest('.menu__item');
    $btn = $item.querySelector('.menu__link');
    $btn.addEventListener('click', () => $item.classList.toggle('menu__item--active'));
  });

  window.addEventListener('click', (e) => {
    const $activeItem = document.querySelector('.menu__item--active');
    const isInner = e.target.closest('.menu__item') && !e.target.classList.contains('menu__item');
    if (!$activeItem || isInner) {
      return;
    }
  
    $activeItem.classList.remove('menu__item--active');
  });
}
