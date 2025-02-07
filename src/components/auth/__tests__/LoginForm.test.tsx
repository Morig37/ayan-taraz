import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import { LoginForm } from '../LoginForm';

describe('LoginForm', () => {
  const renderLoginForm = () => {
    return render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  };

  it('renders username and password fields', () => {
    renderLoginForm();
    expect(screen.getByLabelText(/نام کاربری/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/رمز عبور/i)).toBeInTheDocument();
  });

  it('shows validation errors for empty fields', async () => {
    renderLoginForm();
    const submitButton = screen.getByRole('button', { name: /ورود/i });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/نام کاربری الزامی است/i)).toBeInTheDocument();
      expect(screen.getByText(/رمز عبور الزامی است/i)).toBeInTheDocument();
    });
  });

  it('submits form with valid data', async () => {
    renderLoginForm();

    fireEvent.change(screen.getByLabelText(/نام کاربری/i), {
      target: { value: 'testuser' },
    });

    fireEvent.change(screen.getByLabelText(/رمز عبور/i), {
      target: { value: 'password123' },
    });

    const submitButton = screen.getByRole('button', { name: /ورود/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.queryByText(/نام کاربری الزامی است/i)
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(/رمز عبور الزامی است/i)
      ).not.toBeInTheDocument();
    });
  });
});
