import React from 'react';

import { IProduct, useCart } from '../../hooks/Cart';

import { Container, ProductInfo } from './styles';

const Product: React.FC<IProduct> = ({ id, image, price, rating, title }) => {
  const { addProduct } = useCart();

  return (
    <Container>
      <ProductInfo>
        <span>{title}</span>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div>
          {Array.from(Array(rating)).map((_, index) => (
            <p key={index}>⭐</p>
          ))}
        </div>
      </ProductInfo>

      <img src={image} alt={title} />

      <button
        onClick={() =>
          addProduct({
            id,
            image,
            price,
            rating,
            title,
          })
        }
        type="button"
      >
        Add to basket
      </button>
    </Container>
  );
};

export default Product;
