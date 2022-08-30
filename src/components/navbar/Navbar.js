import React from 'react';
import reactLogo from '../../img/reactjs-icon.png';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='NavbarContainer'>
      <div className='leftSide'>
        <img src={reactLogo} alt='reactLogo' />
        <h2>ReactFacts</h2>
      </div>
      <div className='rightSide'>
        <h3>React Course - Project 1</h3>
      </div>
    </div>
  );
}
