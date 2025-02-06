import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // اطمینان از وارد کردن jest-dom
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import { useAuth, useUI } from '../../hooks/useStore';

// ایجاد یک کامپوننت آزمایشی برای استفاده از هوک‌ها
const TestComponent = () => {
  const auth = useAuth();
  const ui = useUI();
  return (
    <div>
      Auth: {JSON.stringify(auth)}
      UI: {JSON.stringify(ui)}
    </div>
  );
};

// تعریف TestWrapper برای قرار دادن Provider و store
const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

describe('useStore hooks', () => {
  it('should provide store context', () => {
    const { getByText } = render(
      <TestWrapper>
        <TestComponent />
      </TestWrapper>
    );
    // اطمینان از اینکه کامپوننت با موفقیت رندر شده است
    expect(getByText(/Auth:/)).toBeInTheDocument();
    expect(getByText(/UI:/)).toBeInTheDocument();
  });
});
