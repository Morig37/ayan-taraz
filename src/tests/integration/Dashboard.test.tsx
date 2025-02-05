// src/tests/integration/Dashboard.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AdminDashboard } from '../../components/dashboard/AdminDashboard';
import { DashboardService } from '../../services/DashboardService';

jest.mock('../../services/DashboardService');

describe('AdminDashboard Integration', () => {
  const mockStats = {
    totalUsers: 1000,
    activeUsers: 500,
    totalRevenue: 50000,
    newOrders: 25,
    systemHealth: {
      cpu: 45,
      memory: 60,
      disk: 30,
      uptime: 864000,
    },
    recentActivities: [],
    alerts: [],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should load and display dashboard data', async () => {
    DashboardService.getStats.mockResolvedValueOnce(mockStats);

    render(<AdminDashboard />);

    await waitFor(() => {
      expect(screen.getByText('500')).toBeInTheDocument(); // activeUsers
      expect(screen.getByText('25')).toBeInTheDocument(); // newOrders
    });
  });

  it('should handle refresh action', async () => {
    DashboardService.getStats.mockResolvedValueOnce(mockStats);

    render(<AdminDashboard />);

    const refreshButton = screen.getByRole('button', { name: /بروزرسانی/i });
    fireEvent.click(refreshButton);

    await waitFor(() => {
      expect(DashboardService.getStats).toHaveBeenCalledTimes(2);
    });
  });
});