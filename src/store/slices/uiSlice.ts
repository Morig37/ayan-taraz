import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { setLoading, setError } = uiSlice.actions;
export default uiSlice.reducer;