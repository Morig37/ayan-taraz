import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import { apiMiddleware } from './middleware/api';
import { rtkQueryErrorLogger } from './middleware/errorLogger';
import { analyticsMiddleware } from './middleware/analytics';

// تنظیمات Redux Persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'settings'] // فقط این reducerها در localStorage ذخیره می‌شوند
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// پیکربندی Store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST']
      }
    }).concat(apiMiddleware, rtkQueryErrorLogger, analyticsMiddleware, logger),
  devTools: process.env.NODE_ENV !== 'production'
});

// ایجاد Persistor
export const persistor = persistStore(store);

// تایپ‌های کمکی
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// هوک‌های تایپ شده
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;