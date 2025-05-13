import AcceptCookiePopup from 'accept-cookie-popup';

import {
  smoothScrollConfig,
  cookieConfig
} from './configs.js';

import {
  iosVhFix
} from './utils.js';

import {
  initScrollObserver,
} from './scroll-observer.js';

const initSiteSettings = () => {
  iosVhFix();
  initScrollObserver();
  new SmoothScroll( 'a[href*="#"]', smoothScrollConfig );
  [ '[data-gallery]' ].map( ( item ) => baguetteBox.run( item ) );
  new AcceptCookiePopup( cookieConfig );
};

export {
  initSiteSettings,
};