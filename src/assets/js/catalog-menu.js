import { lockBody, unlockBody } from './body';

const DESKTOP_MIN_WIDTH = 767;

const $catalogMenu = document.querySelector('.catalog-menu');
if ($catalogMenu) {
  $catalogMenu.addEventListener('click', (e) => {
    if (window.innerWidth > DESKTOP_MIN_WIDTH && e.target === $catalogMenu) {
      closeMenu($catalogMenu);
    }
  });

  const $closeBtn = $catalogMenu.querySelector('.catalog-menu__close');
  $closeBtn.addEventListener('click', () => closeMenu($catalogMenu));
}

const $openBtns = document.querySelectorAll('.open-catalog-menu');
$openBtns.forEach($btn => {
  $btn.addEventListener('click', () => openMenu($catalogMenu));
});

function closeMenu($menu) {
  $menu.classList.remove('catalog-menu--show');
  unlockBody();

  const $openBtns = document.querySelectorAll('.open-catalog-menu');
  $openBtns.forEach($btn => $btn.classList.remove('open-catalog-menu--active'));
}

function openMenu($menu) {
  $menu.classList.toggle('catalog-menu--show');
  lockBody();

  const $openBtns = document.querySelectorAll('.open-catalog-menu');
  $openBtns.forEach($btn => $btn.classList.toggle('open-catalog-menu--active'));
}