import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    
  }
  body {
    background-color: #696969;
    height: 100vh;
    width: 100%;
    max-height: 100%;
  }
`;

export default GlobalStyle;