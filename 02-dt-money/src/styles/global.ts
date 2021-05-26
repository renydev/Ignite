import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --red: #E52E4D;
    --blue: #5429CC;
    
    --blue-light: #6933FF;
    
    --text-title: #363F5F;
    --body: #969CB3;
    
    --shape: #FFFFFF;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  // font-size: 16px (Desktop)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 16x0,9375 = 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 16x0,875 = 14px
    }
  }
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  button {
    cursor: pointer;
  }

  [display] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`