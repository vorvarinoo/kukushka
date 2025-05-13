const initVideo = () => {
  const videoBlocks = document.querySelectorAll( '.site-video' );
  if ( videoBlocks.length < 1 ) return;

  for ( let i = 0; i < videoBlocks.length; i++ ) {
    setupVideo( videoBlocks[ i ] );
  }
};

const onBtnPlayClick = ( evt ) => {
  evt.preventDefault();
  const block = evt.currentTarget.closest( '.site-video' );
  const btn = evt.currentTarget;
  const video = btn.nextElementSibling;

  if ( video.paused ) {
    video.play();
    block.classList.remove( 'site-video--paused' );
    block.classList.add( 'site-video--playing' );
  } else {
    video.pause();
    block.classList.add( 'site-video--paused' );
    block.classList.remove( 'site-video--playing' );
  }
};

const onVideoClick = ( evt ) => {
  evt.preventDefault();
  const video = evt.currentTarget;
  const block = video.closest( '.site-video' );

  if ( video.paused ) {
    video.play();
    block.classList.remove( 'site-video--paused' );
    block.classList.add( 'site-video--playing' );
  } else {
    video.pause();
    block.classList.add( 'site-video--paused' );
    block.classList.remove( 'site-video--playing' );
  }
};

const stopVideo = ( evt ) => {
  const block = evt.currentTarget.closest( '.site-video' );
  block.classList.add( 'site-video--paused' );
  block.classList.remove( 'site-video--playing' );
};

const setupVideo = ( video ) => {
  const controlBtnEl = video.querySelector( '.site-video__btn' );
  const videoEl = video.querySelector( '.site-video__content' );
  if ( !controlBtnEl ) return;

  controlBtnEl.addEventListener( 'click', onBtnPlayClick, false );
  videoEl.addEventListener( 'click', onVideoClick, false );
  videoEl.addEventListener( 'ended', stopVideo, false );
};


export {
  initVideo
};
