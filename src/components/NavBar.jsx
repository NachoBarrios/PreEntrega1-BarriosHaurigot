import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">UrbanBoutique</a>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/">Men's Fashion</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Women's Fashion</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Shoes & Accessories</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
