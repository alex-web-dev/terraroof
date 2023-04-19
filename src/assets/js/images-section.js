import Swiper, { Pagination, EffectFade, Autoplay } from "swiper";

Swiper.use([Pagination, EffectFade, Autoplay]);

const $sections = document.querySelectorAll('.images-section');
$sections.forEach($section => {
  const $slider = $section.querySelector('.images-section__slider');
  new Swiper($slider, {
    speed: 600,
    enabled: true,
    slidesPerView: 1,
    pagination: {
      el: ".images-section__pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        enabled: false,
        slidesPerView: 'auto',
      }
    },
  });

  const $innerSliders = $section.querySelectorAll('.images-section__inner-slider');
  const innerSlidesLength = $innerSliders[0].querySelectorAll('.swiper-slide').length;
  const innerSwipers = [];

  let randomArray = shuffleArray(getNumbersArray(0, innerSlidesLength - 1));
  let isHover = false;

  $innerSliders.forEach(($innerSlider, index) => {
    $innerSlider.addEventListener('mouseenter', () => isHover = true);
    $innerSlider.addEventListener('mouseleave', () => isHover = false);

    const swiper = new Swiper($innerSlider, {
      effect: 'fade',
      initialSlide: randomArray[index],
      allowTouchMove: false,
      speed: 600,
      fadeEffect: {
        crossFade: true
      },
    });

    innerSwipers.push(swiper);
  });


  setInterval(() => {
    if (isHover && window.innerWidth > 767) {
      return;
    }

    randomArray = shuffleArray(randomArray);

    innerSwipers.forEach((swiper, index) => {
      swiper.slideTo(randomArray[index]);
    });
  }, 5000);
});

function getNumbersArray(from, to) {
  let result = [];

  for (let i = from; i <= to; i++) {
    result.push(i);
  }

  return result;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];

    array[i] = array[j];
    array[j] = temp;
  }
  
  return array;
}