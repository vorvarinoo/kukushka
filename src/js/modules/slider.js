import {
  initSlider
} from './utils.js';

import {
  sliderConfig
} from './configs.js';

const initSliders = () => {
  initSlider( '.main-first', sliderConfig );
  initSlider( '#works-slider .swiper', sliderConfig.works );
  initSlider( '#product-gallery .gallery__slider', Object.assign( sliderConfig.productDetail, {
    thumbs: {
      swiper: initSlider( '#product-gallery .gallery__thumb-slider', sliderConfig.productDetailThumbs )
    }
  } ) );
};

export {
  initSliders,
};