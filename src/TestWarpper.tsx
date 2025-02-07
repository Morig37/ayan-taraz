import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';

interface TestWrapperProps {
  children: React.ReactNode;
}

const TestWrapper: React.FC<TestWrapperProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </Provider>
  );
};

export default TestWrapper;