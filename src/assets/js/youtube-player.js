const $players = document.querySelectorAll('.youtube-player');
$players.forEach($player => {
  const $playBtn = $player.querySelector('.youtube-player__play');
  $playBtn.addEventListener('click', () => {
    if ($player.classList.contains('youtube-player--active')) {
      return;
    }

    const videoUrl = $player.dataset.src;
    const $iframe = createYTFrame(videoUrl);
    $iframe.classList.add('youtube-player__iframe');
    $player.prepend($iframe);
    $player.classList.add('youtube-player--active');
  });
});

function createYTFrame(url) {
  const $iframe = document.createElement('iframe');
  $iframe.setAttribute('src', `${url}?autoplay=1`);
  $iframe.setAttribute('autoplay', '');
  $iframe.setAttribute('frameborder', '0');
  $iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
  $iframe.setAttribute('allowfullscreen', '');

  return $iframe;
}