import { lockBody, unlockBody } from './body';

const $menu = document.querySelector('.menu');
if ($menu) {
  $menu.classList.add('menu--show');
  
  const $menuToggle = $menu.querySelector('.menu__toggle');
  $menuToggle.addEventListener('click', () => {
    if ($menu.classList.contains('menu--active')) {
      $menu.classList.remove('menu--active');
      unlockBody();
    } else {
      $menu.classList.add('menu--active');
      lockBody();
    }
  });

  $menu.addEventListener('click', (e) => {
    if ($menu === e.target && $menu.classList.contains('menu--active')) {
      $menu.classList.remove('menu--active');
      unlockBody();
    }
  });

  const $submenus = $menu.querySelectorAll('.menu__submenu');
  $submenus.forEach($submenu => {
    const $item = $submenu.closest('.menu__item');
    const $btn = $item.querySelector('.menu__link');
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
