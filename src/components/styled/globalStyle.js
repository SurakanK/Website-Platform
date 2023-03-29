// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: white;

    h1 {
      font-size: 55px;
      font-family: Poppins;
      font-weight: 700;
    }

    h2 {
      font-size: 48px;
      font-family: Poppins;
      font-weight: 600;
    }

    h3 {
      font-size: 18px;
      font-family: Poppins;
      font-weight: 500;
    }
  }
`;

export default GlobalStyle;
