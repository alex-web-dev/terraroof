const $counters = document.querySelectorAll('.counter');
$counters.forEach($counter => {
  const $plus = $counter.querySelector('.counter__plus');
  const $minus = $counter.querySelector('.counter__minus');
  const $input = $counter.querySelector('.counter__input');

  $plus.addEventListener('click', () => $input.value = +$input.value + 1);
  $minus.addEventListener('click', () => {
    if ($input.value > 1) {
      $input.value = +$input.value - 1;
    }
  });
});