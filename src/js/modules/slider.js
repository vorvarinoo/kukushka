import {
  initSlider
} from './utils.js';

import {
  sliderConfig
} from './configs.js';

const initSliders = () => {
  initSlider( '.main-first', sliderConfig );
  initSlider( '#works-slider .swiper', sliderConfig.works );
  initSlider( '#detail-gallery .gallery__slider', Object.assign( sliderConfig.detail, {
    thumbs: {
      swiper: initSlider( '#detail-gallery .gallery__thumb-slider', sliderConfig.detailThumbs )
    }
  } ) );
  initSlider( '#artist-gallery .gallery__slider', Object.assign( sliderConfig.detailArtist, {
    thumbs: {
      swiper: initSlider( '#artist-gallery .gallery__thumb-slider', sliderConfig.detailThumbs )
    }
  } ) );
  initSlider( '#about .swiper', sliderConfig.about );
};

export {
  initSliders,
};