import { useAppSelector, useAppDispatch } from '../store';
import { setLoading, setError, clearError } from '../store/slices/uiSlice';
import { login, logout } from '../store/slices/authSlice';
import { LoginCredentials } from '../types/auth';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  return {
    ...auth,
    login: (credentials: LoginCredentials) => dispatch(login(credentials)),
    logout: () => dispatch(logout())
  };
};

export const useUI = () => {
  const dispatch = useAppDispatch();
  return {
    loading: (key: string) => useAppSelector((state) => state.ui.loading[key] || false),
    error: (key: string) => useAppSelector((state) => state.ui.errors[key]),
    setLoading: (key: string, isLoading: boolean) =>
      dispatch(setLoading({ key, isLoading })),
    setError: (key: string, error: string | null) =>
      dispatch(setError({ key, error })),
    clearError: (key: string) => dispatch(clearError(key))
  };
};