const $players = document.querySelectorAll('.video-player');
$players.forEach($player => {
  const $playBtn = $player.querySelector('.video-player__play');
  $playBtn.addEventListener('click', () => {
    if ($player.classList.contains('video-player--active')) {
      return;
    }

    const videoUrl = $player.dataset.src;
    const $video = document.createElement('video');
    $video.classList.add('video-player__video');
    $video.setAttribute('src', videoUrl);
    $video.setAttribute('controls', '');

    $player.prepend($video);
    $player.classList.add('video-player--active');
    $video.play();
  });
});