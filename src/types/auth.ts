// src/types/auth.ts
export interface User {
    id: string;
    username: string;
    email: string;
    firstName?: string;
    lastName?: string;
    avatar?: string;
    role: 'admin' | 'user';
    permissions: string[];
    lastLogin?: Date;
    createdAt: Date;
  }
  
  export interface LoginCredentials {
    username: string;
    password: string;
    rememberMe?: boolean;
  }
  
  export interface AuthResponse {
    user: User;
    token: string;
    refreshToken: string;
  }
  
  export interface TokenPayload {
    sub: string;
    username: string;
    role: string;
    permissions: string[];
    exp: number;
  }