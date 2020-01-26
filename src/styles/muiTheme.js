import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00ce4b'
    }
  },
  typography: {
    fontSize: 16,
    fontFamily: [
      '"Open Sans"',
      '"Montserrat"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    // Variants
    h1: {
      fontWeight: 900,
      fontFamily: 'Montserrat'
    },
    h2: {
      fontWeight: 900,
      fontFamily: 'Montserrat'
    },
    h3: {
      fontWeight: 900,
      fontFamily: 'Montserrat'
    },
    h4: {
      fontWeight: 900,
      fontFamily: 'Montserrat'
    },
    h5: {
      fontWeight: 900,
      fontFamily: 'Montserrat'
    },
    h6: {
      fontWeight: 900,
      fontFamily: 'Montserrat'
    },
    body1: {
      lineHeight: 1.9
    },
    body2: {
      lineHeight: 1.9
    }
  }
});

// Make fonts responsive
theme = responsiveFontSizes(theme);

export { theme };
