import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { useAuth, useUI } from './hooks/useStore';
import authReducer from './store/slices/authSlice';
import uiReducer from './store/slices/uiSlice';

const TestWrapper = ({ children }: PropsWithChildren) => {
  const store = configureStore({
    reducer: {
      auth: authReducer,
      ui: uiReducer,
    },
  });

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default TestWrapper;