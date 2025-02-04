import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { theme } from './theme';
import { cacheRtl } from './utils/rtl';
import Routes from './routes';

const queryClient = new QueryClient();

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Routes />
              <ToastContainer position="bottom-left" rtl />
            </BrowserRouter>
          </QueryClientProvider>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;