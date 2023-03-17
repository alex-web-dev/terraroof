import { moveElement } from "./helpers";

moveCopyrightText();
window.addEventListener('resize', moveCopyrightText);

function moveCopyrightText() {
  moveElement({
    element: '.footer__copyright-text',
    from: '.footer__copyright',
    to: '.footer__bottom',
    width: 767,
  });
}