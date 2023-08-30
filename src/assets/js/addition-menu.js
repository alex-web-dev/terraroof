// import { lockBody, unlockBody } from './body';

const $menu = document.querySelector('.addition-menu');
if ($menu) {
  const $submenus = $menu.querySelectorAll('.addition-menu__submenu');
  $submenus.forEach($submenu => {
    const $item = $submenu.closest('.addition-menu__item');
    const $btn = $item.querySelector('.addition-menu__link');
    $btn.addEventListener('click', () => $item.classList.toggle('addition-menu__item--active'));
  });

  window.addEventListener('click', (e) => {
    const $activeItem = document.querySelector('.addition-menu__item--active');
    const isInner = e.target.closest('.addition-menu__item') && !e.target.classList.contains('menu__item');
    if (!$activeItem || isInner) {
      return;
    }
  
    $activeItem.classList.remove('addition-menu__item--active');
  });
}
