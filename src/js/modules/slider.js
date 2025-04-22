import {
  initSlider
} from './utils.js';

import {
  sliderConfig
} from './configs.js';

const initSliders = () => {
  initSlider( '.main-first', sliderConfig );
  initSlider( '#works-slider .swiper', sliderConfig.works );
};

export {
  initSliders,
};