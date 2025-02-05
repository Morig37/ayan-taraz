import { CacheProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { theme } from './theme';
import { cacheRtl } from './utils/rtl';
import Routes from './routes';
import { ChatBox } from './components/chat/ChatBox';
import { ThemeProvider } from './contexts/ThemeContext';

const queryClient = new QueryClient();

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <MuiThemeProvider theme={theme}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Routes />
              <ThemeProvider>
                <ChatBox />
                <ToastContainer position="bottom-left" rtl />
              </ThemeProvider>
            </BrowserRouter>
          </QueryClientProvider>
        </HelmetProvider>
      </MuiThemeProvider>
    </CacheProvider>
  );
}

export default App;