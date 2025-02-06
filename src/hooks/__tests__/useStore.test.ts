import { renderHook, act } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { useAuth, useUI } from '../useStore';

describe('useStore hooks', () => {
  describe('useAuth', () => {
    it('should return auth state and actions', () => {
      const wrapper = ({ children }) => (
        <Provider store={store}>{children}</Provider>
      );

      const { result } = renderHook(() => useAuth(), { wrapper });

      expect(result.current).toHaveProperty('login');
      expect(result.current).toHaveProperty('logout');
      expect(result.current).toHaveProperty('isAuthenticated');
      expect(result.current).toHaveProperty('user');
      expect(result.current).toHaveProperty('token');
    });
  });

  describe('useUI', () => {
    it('should manage loading and error states', () => {
      const wrapper = ({ children }) => (
        <Provider store={store}>{children}</Provider>
      );

      const { result } = renderHook(() => useUI(), { wrapper });

      act(() => {
        result.current.setLoading('test', true);
      });

      expect(result.current.loading('test')).toBeTruthy();

      act(() => {
        result.current.setError('test', 'Test error');
      });

      expect(result.current.error('test')).toBe('Test error');

      act(() => {
        result.current.clearError('test');
      });

      expect(result.current.error('test')).toBeNull();
    });
  });
});