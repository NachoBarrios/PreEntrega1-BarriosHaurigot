import React, { useContext, useState } from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';
import Description from './Description';
import AddItemButton from './AddItemButton';
import { CartContext } from './CartContext';

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...product }, quantity);
    console.log('Product added to cart:', product);
    setQuantity(1);
  };


  return (
    <div className="item-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <Description description={product.description} />
      <p>Price: {product.price}</p>
      <p>Rating: {product.rating}☆</p>
      <p>Reviews: {product.reviews}</p>
      <ItemQuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <AddItemButton label="Add to Cart" onClick={handleAddToCart} />
    </div>
  );
};

export default ItemDetail;
