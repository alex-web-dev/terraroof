import { getScrollbarWidth } from "./helpers";

const ABSOLUTE_ELEMS = '.header, .callback-box';

export function lockBody() {
  const scrollbarWidthPX = `${getScrollbarWidth()}px`;

  document.body.classList.add('body--lock');
  document.body.style.paddingRight = scrollbarWidthPX;

  const $absoluteElems = document.querySelectorAll(ABSOLUTE_ELEMS);
  $absoluteElems.forEach($elem => $elem.style.paddingRight = scrollbarWidthPX);
}

export function unlockBody() {
  document.body.classList.remove('body--lock');
  document.body.style.paddingRight = '';

  const $absoluteElems = document.querySelectorAll(ABSOLUTE_ELEMS);
  $absoluteElems.forEach($elem => $elem.style.paddingRight = '');
}