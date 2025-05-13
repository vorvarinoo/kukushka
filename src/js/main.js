import {
  initSiteSettings
} from './modules/settings.js';
import {
  initModals
} from './modules/modal.js';
import {
  initSliders
} from './modules/slider.js';
import {
  initGalleries,
} from './modules/galleries.js';
import {
  validateForms
} from './modules/validate.js';
import {
  initHeaderMenu
} from './modules/menu.js';
import {
  initRangeSteppers
} from './modules/stepper.js';
import {
  initVideo
} from './modules/video.js';

document.addEventListener( 'DOMContentLoaded', () => {
  initSiteSettings();
  initVideo();

  window.addEventListener( 'load', () => {
    initHeaderMenu();
    validateForms();
    initModals();
    initSliders();
    initGalleries();
    initRangeSteppers();
  } );
} );
