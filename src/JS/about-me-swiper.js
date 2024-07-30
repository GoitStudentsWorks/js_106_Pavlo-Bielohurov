import Swiper from 'swiper';
import { Keyboard, Navigation } from 'swiper/modules';

const swiper = new Swiper('.about-me-swiper', {
  modules: [Navigation, Keyboard],
  navigation: {
    nextEl: '.swiper-button-wrap .aboutme-swiper-btn',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
  centeredSlidesBounds: true,
  speed: 400,
});

const nextButton = document.querySelector(
  '.swiper-button-wrap .aboutme-swiper-btn'
);
nextButton.addEventListener('click', () => {
  if (window.innerWidth >= 1440) {
    swiper.slides[swiper.activeIndex].parentNode.appendChild(
      swiper.slides[swiper.activeIndex]
    );
    swiper.update();
  }
});
