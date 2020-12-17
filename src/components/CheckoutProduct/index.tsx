import React from 'react';

import { IProduct, useCart } from '../../hooks/Cart';

import { Container, ProductInfo, CheckoutPrice } from './styles';

interface IProductProps extends IProduct {
  product_index: number;
}

const CheckoutProduct: React.FC<IProductProps> = ({
  image,
  title,
  price,
  rating,
  product_index,
}) => {
  const { removeProduct } = useCart();
  return (
    <Container>
      <img src={image} alt={title} />

      <ProductInfo>
        <p>{title}</p>
        <CheckoutPrice>
          <small>$</small>
          <strong>{price}</strong>
        </CheckoutPrice>
        <div>
          {Array.from(Array(rating)).map((_, index) => (
            <p key={index}>⭐</p>
          ))}
        </div>
        <button type="button" onClick={() => removeProduct(product_index)}>
          Remove from basket
        </button>
      </ProductInfo>
    </Container>
  );
};

export default CheckoutProduct;
