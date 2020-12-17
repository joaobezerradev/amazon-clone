import React from 'react';
import CheckoutProduct from '../../components/CheckoutProduct';

import Header from '../../components/Header';
import Subtotal from '../../components/Subtotal';
import { useCart } from '../../hooks/Cart';

import { Container, CheckoutLeft, CheckoutRight } from './styles';

const Checkout: React.FC = () => {
  const { products } = useCart();
  return (
    <>
      <Header />
      <Container>
        <CheckoutLeft>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt="amazon"
          />

          <div>
            <h2>Your shopping basket</h2>
            {products.map((product, index) => (
              <CheckoutProduct
                id={product.id}
                key={index}
                product_index={index}
                title={product.title}
                price={product.price}
                image={product.image}
                rating={product.rating}
              />
            ))}
          </div>
        </CheckoutLeft>
        <CheckoutRight>
          <Subtotal />
        </CheckoutRight>
      </Container>
    </>
  );
};

export default Checkout;
