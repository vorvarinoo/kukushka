const sliderConfig = {
  default: {
    slidesPerView: 1,
    spaceBetween: 30,
    watchSlidesProgress: true,
  },
  works: {
    slidesPerView: 1.4,
    spaceBetween: 20,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      prevEl: '#works-slider [data-to-slide="prev"]',
      nextEl: '#works-slider [data-to-slide="next"]',
    },
    breakpoints: {
      768: {
        slidesPerView: 2.2,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  },
  detail: {
    slidesPerView: 1,
    watchSlidesProgress: true,
    navigation: {
      prevEl: '#detail-gallery [data-to-slide="prev"]',
      nextEl: '#detail-gallery [data-to-slide="next"]',
    },
  },
  detailThumbs: {
    slidesPerView: 5,
    spaceBetween: 8,
    watchSlidesProgress: true,
    freeMode: true,

    breakpoints: {
      992: {
        slidesPerView: 3.5
      },
      1600: {
        slidesPerView: 4.5
      },
    },
  },
  about: {
    slidesPerView: 1,
    watchSlidesProgress: true,
    navigation: {
      prevEl: '#about [data-to-slide="prev"]',
      nextEl: '#about [data-to-slide="next"]',
    },
  },
};

const smoothScrollConfig = {
  speed: 900,
  speedAsDuration: true,
  updateURL: false,
};

const modalConfig = {
  linkAttributeName: false,
  catchFocus: true,
  closeOnEsc: true,
  backscroll: true,
};

const validateConfig = {
  justValidate: {
    errorFieldCssClass: 'is-invalid',
    errorLabelStyle: {
      color: 'var(--error-color)',
      fontSize: '12px',
      textAlign: 'right',
    },
    errorFormClass: 'shaked',
    errorTimeout: 1500,
  },
  errorTimeout: 1500,
  mask: {
    bodyMask: ' (___) ___ __ __',
  }
};

const observerConfig = {
  scrollTop: {
    rootMargin: '600px',
    threshold: 1,
  },
};

const requestsConfig = {
  handlerURL: 'https://jsonplaceholder.typicode.com/posts',
};

export {
  sliderConfig,
  smoothScrollConfig,
  modalConfig,
  validateConfig,
  observerConfig,
  requestsConfig,
};