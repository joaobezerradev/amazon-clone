import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  background-color: #fff;
  height: max-content;
`;

export const CheckoutLeft = styled.div`
  > img {
    width: 100%;
    margin-bottom: 10px;
  }
  > div {
    > h2 {
      margin-right: 10px;
      padding: 10px;
      border-bottom: 1px solid lightgray;
    }
  }
`;

export const CheckoutRight = styled.div``;
