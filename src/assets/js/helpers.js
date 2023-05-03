export function createElem(type, className, options) {
  const $elem = document.createElement(type);
  $elem.className = className;
  for (let key in options) {
    $elem[key] = options[key];
  }

  return $elem;
}

export function moveElement(options) {
  const {
    element,
    from,
    to,
    width,
    fromInsertType = 'append',
    toInsertType = 'append',
  } = options;

  const $elem = document.querySelector(element);
  const $from = document.querySelector(from);
  const $to = document.querySelector(to);

  if (!$elem || !$from || !$to) {
    return;
  }

  setTimeout(() => {
    if (window.innerWidth <= width && $elem.parentNode === $from) {
      $to[toInsertType]($elem);
    } else if (window.innerWidth >= width && $elem.parentNode !== $from) {
      $from[fromInsertType]($elem);
    }
  });
}

export function getScrollbarWidth() {
  const div = document.createElement('div');
  div.style.overflowY = 'scroll';
  div.style.position = 'absolute';
  div.style.zIndex = '-10';
  div.style.top = '-20px';
  div.style.width = '20px';
  div.style.height = '20px';

  document.body.append(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;

  div.remove();

  return scrollWidth;
}

export default {
  createElem,
  moveElement,
  getScrollbarWidth
};
