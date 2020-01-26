import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    overflow-x: hidden;
  }

  body {
    margin: 0;
    font-family: 'Open Sans', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: papayawhip;

  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .App {
    height: 100vh;
    
  }

  .highlight {
    position: relative;
    display: inline-block;
    /* color: red; */
    &::before {
      content: '';
      position: absolute;
      bottom: -7px;
      left: 0;
      background: ${({ theme }) => theme.palette.primary.main};
      width: 100%;
      height: 13px;
      z-index: -1;
    }
  }

  .custom-image {
    border-radius: 20px;
  }
`;

export default GlobalStyle;
