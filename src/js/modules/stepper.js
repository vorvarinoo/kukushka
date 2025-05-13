export const initRangeSteppers = () => {
  const rangeContainers = document.querySelectorAll( '[data-stepper-range]' );

  if ( rangeContainers.length === 0 ) return;

  rangeContainers.forEach( ( rangeContainer ) => {
    const stepperMin = rangeContainer.querySelector( '.stepper--min .stepper__input' );
    const stepperMax = rangeContainer.querySelector( '.stepper--max .stepper__input' );

    const stepperMinUp = rangeContainer.querySelector( '.stepper--min .stepper__btn--up' );
    const stepperMinDown = rangeContainer.querySelector( '.stepper--min .stepper__btn--down' );

    const stepperMaxUp = rangeContainer.querySelector( '.stepper--max .stepper__btn--up' );
    const stepperMaxDown = rangeContainer.querySelector( '.stepper--max .stepper__btn--down' );

    const minGap = 10;

    const validateRange = () => {
      let minValue = parseInt( stepperMin.value, 10 ) || 0;
      let maxValue = parseInt( stepperMax.value, 10 ) || 0;

      if ( maxValue - minValue < minGap ) {
        stepperMax.value = minValue + minGap;
        maxValue = parseInt( stepperMax.value, 10 );
      }

    };

    const addStepperListeners = ( stepperInput, stepperUp, stepperDown, isMin ) => {
      let count = parseInt( stepperInput.value, 10 ) || 0;

      const updateDownButtonState = () => {
        if ( count === 0 ) {
          stepperDown.classList.add( 'stepper__btn--disabled' );
        } else {
          stepperDown.classList.remove( 'stepper__btn--disabled' );
        }
      };

      stepperInput.addEventListener( 'input', () => {
        count = parseInt( stepperInput.value, 10 ) || 0;
        validateRange();
        updateDownButtonState();
      } );

      stepperInput.addEventListener( 'change', () => {
        count = parseInt( stepperInput.value, 10 ) || 0;
        validateRange();
        updateDownButtonState();
      } );

      stepperUp.addEventListener( 'click', ( e ) => {
        e.preventDefault();
        count = parseInt( stepperInput.value, 10 ) || 0;
        stepperInput.value = count + 1;
        validateRange();
        updateDownButtonState();

        if ( isMin ) {
          const maxValue = parseInt( stepperMax.value, 10 ) || 0;
          if ( parseInt( stepperInput.value, 10 ) + minGap > maxValue ) {
            stepperMax.value = parseInt( stepperInput.value, 10 ) + minGap;
          }
        }
      } );

      stepperDown.addEventListener( 'click', ( e ) => {
        e.preventDefault();
        count = Math.max( ( parseInt( stepperInput.value, 10 ) || 0 ) - 1, 0 );
        stepperInput.value = count;
        validateRange();
        updateDownButtonState();
      } );

      stepperInput.addEventListener( 'keydown', ( e ) => {
        if ( e.key === 'ArrowUp' ) {
          e.preventDefault();
          count = parseInt( stepperInput.value, 10 ) || 0;
          stepperInput.value = count + 1;
          validateRange();
          updateDownButtonState();

          if ( isMin ) {
            const maxValue = parseInt( stepperMax.value, 10 ) || 0;
            if ( parseInt( stepperInput.value, 10 ) + minGap > maxValue ) {
              stepperMax.value = parseInt( stepperInput.value, 10 ) + minGap;
            }
          }
        }

        if ( e.key === 'ArrowDown' ) {
          e.preventDefault();
          count = Math.max( ( parseInt( stepperInput.value, 10 ) || 0 ) - 1, 0 );
          stepperInput.value = count;
          validateRange();
          updateDownButtonState();
        }
      } );

      updateDownButtonState();
    };

    addStepperListeners( stepperMin, stepperMinUp, stepperMinDown, true );
    addStepperListeners( stepperMax, stepperMaxUp, stepperMaxDown, false );

  } );
};
