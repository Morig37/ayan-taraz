// src/store/index.ts
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import rootReducer from './rootReducer';
import { rtkQueryErrorLogger } from './middleware/errorLogger';
import { analyticsMiddleware } from './middleware/analytics';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'ui'], // فقط این reducer ها در localStorage ذخیره می‌شوند
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat(logger, rtkQueryErrorLogger, analyticsMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;