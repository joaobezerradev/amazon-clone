import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 300px;
  height: 100px;
  padding: 20px;
  background-color: #f3f3f3;
  border: 1px solid #dddddd;
  border-radius: 3px;
`;
export const CurrencyFormat = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > p {
    strong {
      margin-left: 5px;
    }
  }

  > small {
    display: flex;
    align-items: center;

    input {
      margin-right: 5px;
    }
  }

  > button {
    background-color: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
  }
`;
