import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup(props) {
    const avatarRef = React.useRef('')

    function handleSubmit(e){
        e.preventDefault()
        props.onUpdateAvatar({avatar: avatarRef.current.value})
    }

    return (
        <PopupWithForm name='edit-avatar' action='Edit Avatar' title='Change profile picture' button='save' onClose={props.closeAllPopups} isOpen={props.isOpen} onSubmit={handleSubmit}>
          <input name='avatar' id='avatar-url' className='popup__input popup__input_type_url' type='url' placeholder='Image URL' required ref={avatarRef} />
          <span id='avatar-url-error' className='popup__error'></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;