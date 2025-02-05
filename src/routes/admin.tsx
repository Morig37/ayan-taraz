// src/routes/admin.tsx
import { Navigate, RouteObject } from 'react-router-dom';
import { AdminLayout } from '../components/admin/AdminLayout';
import Dashboard from '../pages/admin/Dashboard';
// سایر import ها

export const adminRoutes: RouteObject[] = [
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { path: '', element: <Dashboard /> },
      { path: 'articles', element: <ArticlesList /> },
      { path: 'articles/new', element: <ArticleForm /> },
      { path: 'articles/:id/edit', element: <ArticleForm /> },
      { path: 'tutorials', element: <TutorialsList /> },
      { path: 'users', element: <UsersList /> },
      { path: 'transactions', element: <TransactionsList /> },
      { path: 'comments', element: <CommentsList /> },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <Navigate to="/admin" replace /> },
    ],
  },
];