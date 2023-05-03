const $loadedImages = document.querySelectorAll('.load-img');
$loadedImages.forEach($img => {
  $img.addEventListener('load', () => $img.classList.add('load-img--loaded'));
});
