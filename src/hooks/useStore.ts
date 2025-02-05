// src/hooks/useStore.ts
import {
    TypedUseSelectorHook,
    useDispatch as useReduxDispatch,
    useSelector as useReduxSelector,
  } from 'react-redux';
  import type { RootState, AppDispatch } from '../store';
  
  export const useDispatch = () => useReduxDispatch<AppDispatch>();
  export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
  
  export const useAuth = () => {
    return useSelector((state) => state.auth);
  };
  
  export const useUI = () => {
    return useSelector((state) => state.ui);
  };
  
  export const useLoading = (key: string) => {
    return useSelector((state) => state.ui.loading[key] || false);
  };
  
  export const useError = (key: string) => {
    return useSelector((state) => state.ui.errors[key]);
  };
  
  export const useCache = (key: string) => {
    const cache = useSelector((state) => state.cache[key]);
    if (!cache || Date.now() > cache.expiresAt) {
      return null;
    }
    return cache.data;
  };