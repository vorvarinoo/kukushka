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
  validateForms
} from './modules/validate.js';
import {
  initSearch
} from './modules/search.js';
import {
  initHeaderMenu
} from './modules/menu.js';

document.addEventListener( 'DOMContentLoaded', () => {
  initSiteSettings();

  window.addEventListener( 'load', () => {
    initSearch();
    initHeaderMenu();
    validateForms();
    initModals();
    initSliders();
  } );
} );