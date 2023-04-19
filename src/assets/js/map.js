const $map = document.querySelector('.map');
if ($map) {
  $map.classList.add('map--active');

  const $marks = $map.querySelectorAll('.map__mark:not(.map__mark--active)');
  let iterator = 0;

  setTimeout(() => {
    $marks[iterator].classList.add('map__mark--show');
    iterator++;
  });

  setInterval(() => {
    const $oldShowMark = $map.querySelector('.map__mark--show');
    $oldShowMark?.classList.remove('map__mark--show');

    $marks[iterator].classList.add('map__mark--show');

    if (iterator < $marks.length - 1) {
      iterator++;
    } else {
      iterator = 0;
    }
  }, 1200);
}