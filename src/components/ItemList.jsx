import React from 'react';

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map((product) => (
        <div key={product.id} className="item">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
