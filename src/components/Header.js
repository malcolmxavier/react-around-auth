import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

function Header(props) {
  return (
    <div className="Header">
        <header className='header'>
          <img src={logo} alt='Around The U.S. text logo' className='logo' />
          <Link to={props.link} className='header__link' onClick={props.onClick}>{props.linkText}</Link>
        </header>
    </div>
    );
}

export default Header;