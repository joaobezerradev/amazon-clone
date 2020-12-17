import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 20px 0;

  > img {
    object-fit: contain;
    width: 180px;
    height: 180px;
  }
`;

export const ProductInfo = styled.div`
  padding-left: 20px;
  > p {
    font-size: 17px;
    font-weight: 800;
  }
  > div {
    display: flex;
  }

  > button {
    margin-top: 10px;
    background-color: #f0c14b;
    border: 1px solid;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    padding: 4px 10px;
  }
`;

export const CheckoutPrice = styled.div``;
export const ProductAmount = styled.div``;
