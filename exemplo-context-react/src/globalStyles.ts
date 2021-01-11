import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        background-color: #f1f1f1;
        box-sizing: border-box;
        text-decoration: none;
        text-rendering: optimizeLegibility;
    }
    body { 
        width: 100vw;
    }
`;