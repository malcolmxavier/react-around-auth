import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function InfoTooltip(props) {

    return(
        <PopupWithForm name='login' action={`Login ${props.valid ? 'Success' : 'Failure'}`} onClose={props.closeAllPopups} isOpen={props.isOpen}>
          <img className='popup__icon' src={props.valid ? '../images/success-icon.png' : '../images/failure-icon.png'} alt={props.valid ? 'Black check in a black circle' : 'Red X in a red circle'} />
          <p className='popup__text'>{props.valid ? 'Success! You have now been registered' : 'Oops, something went wrong! Please try again.'}</p>
        </PopupWithForm>
    );
}

export default InfoTooltip;