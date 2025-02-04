import { createTheme } from '@mui/material';

export const theme = createTheme({
  direction: 'rtl', // برای پشتیبانی از زبان فارسی
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFD700', // طلایی براق
      light: '#FFE55C',
      dark: '#B29700',
    },
    secondary: {
      main: '#1A1A1A', // مشکی مات
      light: '#2C2C2C',
      dark: '#000000',
    },
    background: {
      default: '#1A1A1A',
      paper: '#2C2C2C',
    },
  },
  typography: {
    fontFamily: 'IRANSans, Roboto, "Helvetica Neue", Arial, sans-serif',
  },
});