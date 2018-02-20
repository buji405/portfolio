import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div>
      <header>
      <img className="logo" src="./jigsaw.png"/>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a>Portfolio</a></li>
          <li><a href="#contact" >Contact</a></li>
        </ul>
      </header>
    </div>
  )
}

export default Header;
