import React from 'react';
import { Link } from 'react-router-dom';

function Register(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }
    
    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.handleSignup(email, password);
    }

    return (
        <main className='content'>
            <h2 className='form__name'>Sign up</h2>
            <form className='form' onSubmit={handleSubmit}>
                <input className='form__input' type='email' placeholder='Email' required onChange={handleEmailChange} />
                <span className='form__error'></span>
                <input className='form__input' type='text' placeholder='Password' required minlength='8' onChange={handlePasswordChange} />
                <span className='form__error'></span>
                <button className='form__button' type='submit' aria-label='Sign Up' onClick={handleSubmit}>Sign up</button>
            </form>
            <Link to='/signin' className='form__link'>Already a member? Log in here!</Link>
        </main>
    );
}

export default Register;
