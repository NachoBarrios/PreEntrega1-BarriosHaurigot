
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import productsData from '../data/productsData';
import './ItemListContainer.css'; 

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = categoryId
      ? productsData.filter((product) => product.category === categoryId)
      : productsData;

    setProducts(filteredProducts);
  }, [categoryId]);

  return (
    <div className="item-list-container">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/item/${product.id}`}>
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">Precio: {product.price}</p>
            </Link>
          </div>
        ))
      ) : (
        <p>No products found for the selected category.</p>
      )}
    </div>
  );
};

export default ItemListContainer;
