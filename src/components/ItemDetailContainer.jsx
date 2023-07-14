import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../data/productsData';
import ItemDetail from './ItemDetail.jsx';
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
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
