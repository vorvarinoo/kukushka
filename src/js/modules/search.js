import {
  isEscKey
} from './utils.js';

export const initSearch = () => {
  const btnSearchNode = document.querySelector( '[data-action="open-search"]' );

  if ( !btnSearchNode ) return;

  const searchNode = document.querySelector( '[data-role="search"]' );

  const onEscKeydown = ( evt ) => {
    if ( isEscKey( evt ) && searchNode.getAttribute( 'aria-hidden' ) === 'false' ) {
      closeModal();
      return;
    }
  };

  function openModal() {
    document.documentElement.classList.add( 'is-lock-scroll' );
    searchNode.setAttribute( 'aria-hidden', 'false' );
    document.addEventListener( 'keydown', onEscKeydown );
  }

  function closeModal() {
    document.documentElement.classList.remove( 'is-lock-scroll' );
    searchNode.setAttribute( 'aria-hidden', 'true' );
    document.addEventListener( 'keydown', onEscKeydown );
  }


  btnSearchNode.addEventListener( 'click', ( evt ) => {
    evt.preventDefault;

    searchNode.getAttribute( 'aria-hidden' ) === 'true' ? openModal() : closeModal();
  } );

};