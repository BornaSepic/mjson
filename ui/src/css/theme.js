import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        light: '#DACC3E',
        main: '#BC2C1A',
        dark: '#7D1538',
        contrastText: '#333',
      },
      secondary: {
        type: 'dark',
        light: '#BC2C1A',
        main: '#7D1538',
        dark: '#2E282A',
        contrastText: 'hsl(0, 0%, 100%)',
      },
    },
    typography: {
      fontFamily: ['proxima-nova', 'Helvetica', 'Arial'],
      h1: {
        fontFamily: 'cardea, serif',
        fontSize: '3.25rem',
        fontWeight: 700,
      },
      h2: {
        fontFamily: 'cardea, serif',
        fontSize: '3rem',
        fontWeight: 700,
      },
      h3: {
        fontFamily: 'cardea, serif',
        fontSize: '2.75rem',
        fontWeight: 700,
      },
      h4: {
        fontFamily: 'cardea, serif',
        fontSize: '1.75rem',
        fontWeight: 700,
      },
    },
  }),
);

export default theme;