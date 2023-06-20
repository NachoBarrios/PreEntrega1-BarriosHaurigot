
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../data/productsData';
import './ItemDetailContainer.css'; 

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
      
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const selectedProduct = productsData.find((item) => item.id === Number(itemId));

        setProduct(selectedProduct);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    getProduct();
  }, [itemId]);

  if (!product) {
    return <p>Loading product...</p>;
  }

  return (
    <div className="item-detail-container">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">Precio: {product.price}</p>
      <p className="product-rating">Rating: {product.rating}☆</p>
      <p className="product-reviews">Comprados: {product.reviews}</p>
    </div>
  );
};

export default ItemDetailContainer;
