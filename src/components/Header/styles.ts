import styled from 'styled-components';

import { Search } from '@material-ui/icons';

export const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;

  img {
    width: 100px;
    object-fit: contain;
    margin: 18px 20px 0 20px;
  }
`;
export const HeaderSearch = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;

  > input {
    height: 14px;
    padding: 10px;
    border: none;
    width: 100%;
  }
`;

export const HeaderNav = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const HeaderOption = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  color: #ffffff;

  > span {
    font-size: 10px;
  }

  > strong {
    font-size: 13px;
    font-weight: 800;
  }
`;

export const SearchIcon = styled(Search)`
  height: 22px;
  padding: 5px;
  background-color: #cd9042;
`;

export const HeaderOptionsBasket = styled.div`
  display: flex;
  align-items: center;

  color: #ffffff;

  > span {
    margin: 0 10px;
  }
`;
