import React from 'react';
// import logo from './logo.svg';
import './Header.css';

function Header() {
  return (
    <header>
        <a href="/" className="logo">LOGO</a>
        <nav>
            <a href="/">Link 1</a>
            <a href="/">Link 2</a>
            <a href="/">Link 3</a>
        </nav>
    </header>
  );
}

export default Header;
