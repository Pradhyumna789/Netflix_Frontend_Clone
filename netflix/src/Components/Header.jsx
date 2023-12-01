import React from 'react';
import "./Header.scss";
import logo from "./Logonetflix.png";

const Header = () => {
  return (
    <nav className="Header">
        <img src={logo} alt='netflix'/>
    </nav>
  )
}

export default Header
