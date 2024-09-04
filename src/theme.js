import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    background: {
      default: '##33e9ff', // Change this to your preferred background color
    },
    text: {
      primary: '##33e9ff', // Change this to your preferred text color
    },
  },
  typography: {
    fontSize: 16, // Increase the default font size
    fontWeightBold: 700, // Make text bold
  },
});

export default theme;
