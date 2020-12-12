import React from 'react';
import Header from '../../components/Header';

import { Container, CheckoutLeft, CheckoutRight } from './styles';

const Checkout: React.FC = () => {
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
          </div>
        </CheckoutLeft>
        <CheckoutRight>
          <h2>The subtotal will go here</h2>
        </CheckoutRight>
      </Container>
    </>
  );
};

export default Checkout;
