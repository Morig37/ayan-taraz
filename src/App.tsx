import React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { theme } from './theme';
import { cacheRtl } from './utils/rtl';
import Routes from './routes';
import { store } from './store';
import { ErrorService } from './services/ErrorService';

// Initialize error handling
ErrorService.handleGlobalErrors();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <CacheProvider value={cacheRtl}>
        <MuiThemeProvider theme={theme}>
          <HelmetProvider>
            <QueryClientProvider client={queryClient}>
              <BrowserRouter>
                <Routes />
                <ToastContainer
                  position="bottom-left"
                  rtl
                  autoClose={3000}
                  hideProgressBar={false}
                  closeOnClick
                  pauseOnHover
                />
              </BrowserRouter>
            </QueryClientProvider>
          </HelmetProvider>
        </MuiThemeProvider>
      </CacheProvider>
    </Provider>
  );
}

export default App;