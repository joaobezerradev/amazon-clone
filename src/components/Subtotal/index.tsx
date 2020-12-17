import React from 'react';
import { useCart } from '../../hooks/Cart';
import { valueTotal } from '../../utils';
import { Container, CurrencyFormat } from './styles';

const Subtotal: React.FC = () => {
  const { products } = useCart();
  const subtotal = products.reduce(valueTotal, 0);

  return (
    <Container>
      <CurrencyFormat>
        <p>
          Subtotal ({products.length || 0} items):
          <strong>{subtotal}</strong>
        </p>
        <small>
          <input type="checkbox" />
          This order contains a gift
        </small>

        <button type="button">Proceed to Checkout</button>
      </CurrencyFormat>
    </Container>
  );
};

export default Subtotal;
