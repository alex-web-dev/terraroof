import { moveElement } from "./helpers";

moveBottomMenu();
window.addEventListener('resize', moveBottomMenu);

function moveBottomMenu() {
  moveElement({
    element: '.header__bottom-menu',
    from: '.header__bottom',
    to: '.menu__content',
    width: 991,
  });
}