import React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Add toast styles

import { theme } from './theme';
import { cacheRtl } from './utils/rtl';
import Routes from './routes';
import { ChatBox } from './components/chat/ChatBox';
import { ThemeProvider } from './contexts/ThemeContext';

// Configure QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <CacheProvider value={cacheRtl}>
          <MuiThemeProvider theme={theme}>
            <ThemeProvider>
              <BrowserRouter>
                <div className="app-container">
                  <Routes />
                  <ChatBox />
                  <ToastContainer
                    position="bottom-left"
                    rtl
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
                </div>
              </BrowserRouter>
            </ThemeProvider>
          </MuiThemeProvider>
        </CacheProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
