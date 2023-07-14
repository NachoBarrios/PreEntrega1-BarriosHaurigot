import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import './CartWidget.css';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-widget">
      <Link to="/checkout" className="navbar-brand">
        <i className="fas fa-shopping-cart"></i>
      </Link>
      <span className="notification">{totalQuantity}</span>
    </div>
  );
};

export default CartWidget;
