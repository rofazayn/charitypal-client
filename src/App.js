import React from 'react';
import Home from './views/Home';
import GlobalStyle from './styles/globalStyles';
import { ThemeProvider } from '@material-ui/core';
import { theme as muiTheme } from './styles/muiTheme';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <GlobalStyle />
        <div className='App'>
          <Navbar />
          <Home />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
