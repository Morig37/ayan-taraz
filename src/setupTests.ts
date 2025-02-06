import { renderHook } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { useAuth, useUI } from '../useStore';
import authReducer from '../../store/slices/authSlice';
import uiReducer from '../../store/slices/uiSlice';
import React, { PropsWithChildren } from 'react';

const createTestStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
      ui: uiReducer
    }
  });

const TestWrapper: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const store = createTestStore();
  return <Provider store={store}>{children}</Provider>;
};

describe('Store Hooks', () => {
  describe('useAuth', () => {
    it('should return auth state and actions', () => {
      const { result } = renderHook(() => useAuth(), {
        wrapper: TestWrapper
      });

      expect(result.current).toHaveProperty('login');
      expect(result.current).toHaveProperty('logout');
      expect(result.current).toHaveProperty('isAuthenticated');
    });
  });

  describe('useUI', () => {
    it('should manage loading and error states', () => {
      const { result } = renderHook(() => useUI(), {
        wrapper: TestWrapper
      });

      expect(result.current.loading('test')).toBeFalsy();
      expect(result.current.error('test')).toBeUndefined();
    });
  });
});