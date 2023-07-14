import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import './checkout.css';

const Checkout = () => {
  const { cart, removeFromCart, clearCart, setCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const handleCheckout = () => {
    setLoading(true);

    setTimeout(() => {
      console.log('Checkout initiated:', cart);
      setLoading(false);
      clearCart();
      setCheckoutComplete(true);
    }, 2000);
  };

  const handleRemoveUnit = (event, productId) => {
    event.stopPropagation();

    const existingItem = cart.find((item) => item.id === productId);

    if (existingItem.quantity === 1) {
      removeFromCart(productId);
    } else {
      const updatedCart = cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCart(updatedCart);
    }
  };

  const renderCartItem = (item) => {
    const { addToCart, removeFromCart } = useContext(CartContext);

    const handleIncrement = () => {
      addToCart(item, 1);
    };

    const handleDecrement = (productId) => {
      const existingItem = cart.find((item) => item.id === productId);

      if (existingItem.quantity === 1) {
        removeFromCart(productId);
      } else {
        const updatedCart = cart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCart(updatedCart);
      }
    };

    return (
      <div key={item.id} className="cart-item">
        <div className="item-details">
          <h3>{item.name}</h3>
          <div className="quantity-selector">
            <button className="quantity-button" onClick={() => handleDecrement(item.id)}>
              -
            </button>
            <span className="quantity">{item.quantity}</span>
            <button className="quantity-button" onClick={handleIncrement}>
              +
            </button>
          </div>
        </div>
        <p>Price: ${item.price.toFixed(2) * item.quantity}</p>
      </div>
    );
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cart.length > 0 ? (
        <>
          {cart.map(renderCartItem)}
          <p>Total Items: {cart.reduce((total, item) => total + item.quantity, 0)}</p>
          <p>Total Price: ${totalPrice}</p>
          <button onClick={handleCheckout} disabled={loading || checkoutComplete}>
            {loading ? 'Processing...' : 'Proceed to Checkout'}
          </button>
        </>
      ) : (
        <p>Thanks for buying</p>
      )}
    </div>
  );
};

export default Checkout;
