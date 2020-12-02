import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function InfoTooltip(props) {

    return(
        <PopupWithForm name='login' action={`Login ${props.valid ? 'Success' : 'Failure'}`} button='info-tooltip' onClose={props.onClose} isOpen={props.isOpen}>
          <div className={`popup__icon ${props.valid ? 'success-icon' : 'failure-icon'}`} ></div>
          <p className='popup__text'>{props.valid ? 'Success! You have now been registered' : 'Oops, something went wrong! Please try again.'}</p>
        </PopupWithForm>
    );
}

export default InfoTooltip;