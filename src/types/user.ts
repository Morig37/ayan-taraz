// src/types/user.ts
export type UserRole = 'admin' | 'manager' | 'editor' | 'user';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  mobile: string;
  role: UserRole;
  avatar?: string;
  status: 'active' | 'inactive' | 'blocked';
  createdAt: Date;
  lastLogin?: Date;
}

export interface UserPermission {
  id: string;
  name: string;
  description: string;
  module: 'content' | 'users' | 'transactions' | 'settings';
}

export interface RolePermissions {
  role: UserRole;
  permissions: string[]; // آرایه‌ای از ID های دسترسی‌ها
}