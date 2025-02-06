import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../../types/user';
import { LoginCredentials, LoginResponse, AuthError } from '../../types/auth';
import { AuthService } from '../../services/AuthService';

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null
};

export const login = createAsyncThunk<
  LoginResponse,
  LoginCredentials,
  { rejectValue: AuthError }
>('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await AuthService.login(credentials);
    return response;
  } catch (error: any) {
    return rejectWithValue({
      message: error.message || 'خطا در ورود به سیستم',
      code: error.code || 'AUTH_ERROR'
    });
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout();
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<LoginResponse>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    clearCredentials: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'خطای ناشناخته';
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
      });
  }
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;