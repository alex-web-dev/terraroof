window.addEventListener('load', () => {
  const WOW = require('wowjs');
  const offset = window.innerWidth < 768 ? 290 : 300;

  window.wow = new WOW.WOW({
    animateClass: 'animate__animated',
    offset
  });

  window.wow.init();
});