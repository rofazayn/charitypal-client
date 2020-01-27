import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    /* overflow-x: hidden; */
    overflow-x: hidden;
  }

  body {
    margin: 0;
    font-family: 'Open Sans', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* background-color: papayawhip; */

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
    width: 100%;
    display: flex;
    img {
      width: 100%;
      border-radius: 20px;
    }
    svg {
      width: 100%;
      height: auto;
    }
  }

  .page {
    min-height: calc(100vh - 120px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: ${({ theme }) => `${theme.spacing(25)}px`};
    padding-bottom: ${({ theme }) => `${theme.spacing(15)}px`};
    z-index: 100;
  }
`;

export default GlobalStyle;
