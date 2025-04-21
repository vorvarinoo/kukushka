import {
  isEscKey,

} from './utils.js';


export const initHeaderMenu = () => {

  const headerTopNode = document.querySelector( '.site__header' );
  const modalNode = headerTopNode.querySelector( '#mobile-menu' );
  const modalTriggerNode = headerTopNode.querySelector( '[data-header-modal="mobile-menu"]' );
  // const linksNode = modalNode.querySelectorAll( '.header-menu__link a' );

  if ( !modalNode || !modalTriggerNode ) return;

  const onEscKeydown = ( evt ) => {
    if ( isEscKey( evt ) && modalNode.getAttribute( 'aria-hidden' ) === 'false' ) {
      closeModal();
      return;
    }
  };

  function openModal() {
    document.documentElement.classList.add( 'is-lock-scroll' );
    modalNode.setAttribute( 'aria-hidden', 'false' );
    modalTriggerNode.classList.add( 'burger--to-cross' );
    document.addEventListener( 'keydown', onEscKeydown );
  }

  function closeModal() {
    document.documentElement.classList.remove( 'is-lock-scroll' );
    modalNode.setAttribute( 'aria-hidden', 'true' );
    modalTriggerNode.classList.remove( 'burger--to-cross' );
    document.addEventListener( 'keydown', onEscKeydown );
  }

  // breakpointChecker( () => {
  //   closeModal();
  //   resetOffsetTop( headerTopNode );
  // }, () => {
  //   resetOffsetTop( headerTopNode );
  // } );

  // linksNode.forEach( link => {
  //   link.addEventListener( 'click', () => {
  //     closeModal();
  //   } );
  // } );


  modalTriggerNode.addEventListener( 'click', ( evt ) => {
    evt.preventDefault();
    modalNode.getAttribute( 'aria-hidden' ) === 'true' ? openModal() : closeModal();
  } );
};