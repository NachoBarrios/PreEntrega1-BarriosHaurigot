import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <a className="navbar-brand" href="/">
        <i className="fas fa-shopping-cart"></i>
      </a>
      <span className="notification">5</span>
    </div>
  );
};

export default CartWidget;
