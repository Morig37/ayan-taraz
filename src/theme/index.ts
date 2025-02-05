// src/theme/index.ts
import { createTheme } from '@mui/material';

export const theme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFD700', // طلایی
      light: '#FFE55C',
      dark: '#B29700',
      contrastText: '#000',
    },
    secondary: {
      main: '#1A1A1A', // مشکی
      light: '#2C2C2C',
      dark: '#000000',
      contrastText: '#FFD700',
    },
    background: {
      default: '#1A1A1A',
      paper: '#2C2C2C',
    },
  },
  typography: {
    fontFamily: 'IRANSans, Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 24px',
          transition: 'all 0.3s ease',
        },
      },
    },
  },
});