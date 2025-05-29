import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
      background: #0f172a;
       /* background: rgba(15, 23, 42, 0.9); */
         /* border-bottom: 1px solid rgba(51, 65, 85, 0.3); */
         /* btns :color: #3b82f6; */
        /* trusted by industry leaders     background: rgba(51, 65, 85, 0.5);
    border: 1px solid rgba(51, 65, 85, 0.8); */
     /* .highlight {
      background: linear-gradient(135deg, #3b82f6, #06b6d4); */
      /* nav  color: #94a3b8; */
      //badge  background: rgba(51, 65, 85, 0.5);
  }
`;

export default GlobalStyle;
