import { ShoppingBasket } from '@material-ui/icons';
import React from 'react';

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
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon-logo"
      />

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

        <HeaderOptionsBasket>
          <ShoppingBasket />
          <span>0</span>
        </HeaderOptionsBasket>
      </HeaderNav>
    </Container>
  );
};

export default Header;
