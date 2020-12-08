import React from 'react';

import { Container, ProductInfo } from './styles';

interface ProductProps {
  title: string;
  image: string;
  price: number;
  rating: number;
}

const Product: React.FC<ProductProps> = ({ image, price, rating, title }) => {
  return (
    <Container>
      <ProductInfo>
        <span>{title}</span>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div>
          {Array.from(Array(rating)).map(() => (
            <p>⭐</p>
          ))}
        </div>
      </ProductInfo>

      <img src={image} alt={title} />

      <button type="button">Add to basket</button>
    </Container>
  );
};

export default Product;
