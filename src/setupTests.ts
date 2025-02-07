import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import TestWrapper from './TestWrapper';

export const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <TestWrapper>
      {ui}
    </TestWrapper>
  );
};