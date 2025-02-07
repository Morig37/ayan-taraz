import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { useAuth, useUI } from './hooks/useStore';
import TestWrapper from './TestWrapper';

// Create a reusable test component
export const TestComponent = () => {
  const auth = useAuth();
  const ui = useUI();
  
  return (
    <div>
      <div>Auth: {JSON.stringify(auth)}</div>
      <div>UI: {JSON.stringify(ui)}</div>
    </div>
  );
};

// Custom render method
export const renderWithProviders = (
  ui: React.ReactElement,
  { initialState = {} } = {}
) => {
  return render(
    <TestWrapper>
      {ui}
    </TestWrapper>
  );
};