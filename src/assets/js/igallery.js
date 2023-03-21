import Swiper, { Navigation } from 'swiper';

Swiper.use(Navigation);

const $boxes = document.querySelectorAll('.igallery');
$boxes.forEach(($galleryBox, boxIndex) => {
  const duration = $galleryBox.dataset.duration ? $galleryBox.dataset.duration : 400;
  createGalleryPopup($galleryBox, boxIndex, duration);

  const $btns = $galleryBox.querySelectorAll('.igallery__btn');
  $btns.forEach(($btn, index) => {
    $btn.addEventListener('click', () => {
      openGalleryPopup(boxIndex, index);
    })
  })
});

function openGalleryPopup(boxIndex, imgIndex) {
  const $popup = document.querySelectorAll('.igallery-popup')[boxIndex];
  const $slider = $popup.querySelector('.igallery-popup__slider');

  $slider.swiper.slideTo(imgIndex, 0, false);
  $popup.classList.add('igallery-popup--hide');
  $popup.classList.add('igallery-popup--active');
  setTimeout(() => $popup.classList.remove('igallery-popup--hide'), 10);
}

function closeGalleryPopup(boxIndex) {
  const $popup = document.querySelectorAll('.igallery-popup')[boxIndex];

  $popup.classList.add('igallery-popup--hide');
  setTimeout(() => {
    $popup.classList.remove('igallery-popup--hide');
    $popup.classList.remove('igallery-popup--active');
  }, 400);
}

function createGalleryPopup($galleryBox, boxIndex, duration) {
  const $popup = document.createElement('div');
  $popup.className = 'igallery-popup';
  $popup.style.transitionDuration = `${duration}ms`;
  $popup.innerHTML = `
    <button class="igallery-popup__close"></button>
    <div class="igallery-popup__main">
      <div class="igallery-popup__slider swiper"></div>
      <div class="igallery-popup__controls">
        <button class="btn-prev btn-prev--white igallery-popup__prev"></button>
        <button class="btn-next btn-next--white igallery-popup__next"></button>
      </div>
    </div>
    <div class="igallery-popup__backdrop"></div>
  `;

  const $images = $galleryBox.querySelectorAll('.igallery__img');
  const $sliderWrapper = document.createElement('div');
  $sliderWrapper.className = 'swiper-wrapper';
  $images.forEach($img => {
    const $slide = document.createElement('div');
    $slide.className = 'swiper-slide';
    $slide.innerHTML = `<img src="${$img.getAttribute('src')}">`;
    $sliderWrapper.append($slide);
  });

  document.body.appendChild($popup);

  const $slider = $popup.querySelector('.igallery-popup__slider');
  $slider.append($sliderWrapper);

  const $prev = $popup.querySelector('.igallery-popup__prev');
  const $next = $popup.querySelector('.igallery-popup__next');
  new Swiper($slider, {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed: 600,
    navigation: {
      prevEl: $prev,
      nextEl: $next,
    },
  });

  const $close = $popup.querySelector('.igallery-popup__close');
  $close.addEventListener('click', () => closeGalleryPopup(boxIndex));

  const $backdrop = $popup.querySelector('.igallery-popup__backdrop');
  $backdrop.addEventListener('click', () => closeGalleryPopup(boxIndex));
}