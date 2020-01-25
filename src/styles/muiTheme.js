import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  // Theme properties here
});

// Make fonts responsive
theme = responsiveFontSizes(theme);

export { theme };
