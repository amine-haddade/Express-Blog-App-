import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './slices/blogSlice';
import uiReducer from './slices/uiSlice';

/**
 * Configuration du store Redux principal
 * Combine tous les reducers de l'application
 */
export const store = configureStore({
  reducer: {
    blog: blogReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;