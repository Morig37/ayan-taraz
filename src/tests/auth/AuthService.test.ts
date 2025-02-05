// src/tests/unit/auth/AuthService.test.ts
import { AuthService } from '../../../services/AuthService';
import { LoginCredentials } from '../../../types/auth';

describe('AuthService', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
    fetch.resetMocks();
  });

  it('should login successfully', async () => {
    const mockResponse = {
      token: 'test-token',
      refreshToken: 'test-refresh-token',
      user: {
        id: '1',
        username: 'Mojim37',
      },
    };

    fetch.mockResponseOnce(JSON.stringify(mockResponse));

    const credentials: LoginCredentials = {
      username: 'Mojim37',
      password: 'password123',
      rememberMe: true,
    };

    const response = await AuthService.login(credentials);

    expect(response).toEqual(mockResponse);
    expect(localStorage.getItem('token')).toBe('test-token');
    expect(localStorage.getItem('refreshToken')).toBe('test-refresh-token');
  });

  it('should handle login failure', async () => {
    fetch.mockRejectOnce(new Error('Invalid credentials'));

    const credentials: LoginCredentials = {
      username: 'Mojim37',
      password: 'wrong-password',
    };

    await expect(AuthService.login(credentials)).rejects.toThrow();
  });
});