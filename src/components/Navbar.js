import React from 'react';
import UVSButton from './widgets/UVSButton';
import cart from '../images/cart.svg';
import logo from '../images/logo.svg';

const Navbar = () => (
  <nav className="Navbar">
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>

    <div>
      <ul className="links">
        <li className="active">Home</li>
        <li>About us</li>
        <li>Newsroom</li>
        <li>Mental health</li>
        <li>Get involved</li>
        <li>Contact</li>
      </ul>

      <div className="buttons">
        <UVSButton outline icon={cart}>Farm market place</UVSButton>
        <UVSButton>Donate now</UVSButton>
      </div>
    </div>
  </nav>
);

export default Navbar;
