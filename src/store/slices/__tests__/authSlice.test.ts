import authReducer, {
    setCredentials,
    clearCredentials,
    login
  } from '../authSlice';
  import { store } from '../../index';
  
  describe('authSlice', () => {
    const initialState = {
      user: null,
      token: null,
      isAuthenticated: false,
      loading: false,
      error: null
    };
  
    it('should handle initial state', () => {
      expect(authReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });
  
    it('should handle setCredentials', () => {
      const user = {
        id: '1',
        username: 'test',
        firstName: 'Test',
        lastName: 'User',
        email: 'test@example.com',
        role: 'user'
      };
  
      const actual = authReducer(
        initialState,
        setCredentials({
          user,
          token: 'test-token',
          refreshToken: 'refresh-token'
        })
      );
  
      expect(actual.user).toEqual(user);
      expect(actual.token).toEqual('test-token');
      expect(actual.isAuthenticated).toBeTruthy();
    });
  
    it('should handle clearCredentials', () => {
      const filledState = {
        user: { id: '1', username: 'test' },
        token: 'test-token',
        isAuthenticated: true,
        loading: false,
        error: null
      };
  
      const actual = authReducer(filledState, clearCredentials());
  
      expect(actual).toEqual(initialState);
    });
  
    it('should handle async login action', async () => {
      const mockCredentials = {
        username: 'testuser',
        password: 'password123'
      };
  
      // Test pending state
      let state = store.getState().auth;
      expect(state.loading).toBeFalsy();
  
      const action = login(mockCredentials);
      
      // Mock API call result
      const mockResult = {
        user: {
          id: '1',
          username: 'testuser',
          firstName: 'Test',
          lastName: 'User',
          email: 'test@example.com',
          role: 'user'
        },
        token: 'test-token',
        refreshToken: 'refresh-token'
      };
  
      // Test fulfilled state
      state = authReducer(state, {
        type: login.fulfilled.type,
        payload: mockResult
      });
  
      expect(state.user).toEqual(mockResult.user);
      expect(state.token).toEqual(mockResult.token);
      expect(state.isAuthenticated).toBeTruthy();
      expect(state.loading).toBeFalsy();
      expect(state.error).toBeNull();
    });
  });