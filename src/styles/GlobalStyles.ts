import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
}
body {
  background-color:rgb(234, 237, 237);
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font-size: 16px;
  font-family: --apple-system, BlinkMacSystemFont,"Suegoe UI",'Roboto', arial;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight:500;
}
button{
  cursor: pointer;
}
`;
