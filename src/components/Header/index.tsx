import { ShoppingBasket } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  HeaderSearch,
  HeaderNav,
  HeaderOption,
  SearchIcon,
  HeaderOptionsBasket,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon-logo"
        />
      </Link>

      <HeaderSearch>
        <input type="text" />
        <SearchIcon />
      </HeaderSearch>

      <HeaderNav>
        <HeaderOption>
          <span>Hello Guest</span>
          <strong>Sign In</strong>
        </HeaderOption>
        <HeaderOption>
          <span>Returns</span>
          <strong>& Orders</strong>
        </HeaderOption>
        <HeaderOption>
          <span>Your</span>
          <strong>Prime</strong>
        </HeaderOption>

        <Link to="/checkout">
          <HeaderOptionsBasket>
            <ShoppingBasket />
            <span>0</span>
          </HeaderOptionsBasket>
        </Link>
      </HeaderNav>
    </Container>
  );
};

export default Header;
