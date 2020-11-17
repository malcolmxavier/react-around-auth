import React from 'react';
import { Link } from 'react-router-dom';

function Login(props) {
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
        props.handleLogin(email, password);
    }

    return (
        <main className='content'>
            <h2 className='form__name'>Log in</h2>
            <form className='form' onSubmit={handleSubmit}>
                <input className='form__input' type='email' placeholder='Email' required onChange={handleEmailChange} />
                <span className='form__error'></span>
                <input className='form__input' type='text' placeholder='Password' required onChange={handlePasswordChange} />
                <span className='form__error'></span>
                <button className='form__button' type='submit' aria-label='Log In' onClick={handleSubmit}>Log in</button>
            </form>
            <Link to='/signup' className='form__link'>Not a member yet? Sign up here!</Link>
        </main>
    );
}

export default Login;
