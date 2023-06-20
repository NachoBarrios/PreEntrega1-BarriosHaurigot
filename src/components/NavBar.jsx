import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">UrbanBoutique</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/category/Men">Men's Fashion</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/Women">Women's Fashion</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/Accessories">Shoes & Accessories</Link>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
