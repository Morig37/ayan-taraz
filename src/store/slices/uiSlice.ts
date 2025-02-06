import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  loading: { [key: string]: boolean };
  errors: { [key: string]: string | null };
}

const initialState: UIState = {
  loading: {},
  errors: {}
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (
      state,
      action: PayloadAction<{ key: string; isLoading: boolean }>
    ) => {
      state.loading[action.payload.key] = action.payload.isLoading;
    },
    setError: (
      state,
      action: PayloadAction<{ key: string; error: string | null }>
    ) => {
      state.errors[action.payload.key] = action.payload.error;
    },
    clearError: (state, action: PayloadAction<string>) => {
      state.errors[action.payload] = null;
    },
    clearAllErrors: (state) => {
      state.errors = {};
    }
  }
});

export const { setLoading, setError, clearError, clearAllErrors } = uiSlice.actions;
export default uiSlice.reducer;