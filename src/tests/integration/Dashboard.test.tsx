import { render, screen, waitFor } from '@testing-library/react';
import { AdminDashboard } from '../../components/admin/Dashboard';
import { DashboardService } from '../../services/DashboardService';

jest.mock('../../services/DashboardService');

describe('AdminDashboard Integration', () => {
  const mockStats = {
    totalUsers: 1000,
    activeUsers: 500,
    newOrders: 25,
    stats: {
      lastWeek: [],
      lastMonth: [],
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should load and display dashboard data', async () => {
    const mockOnRefresh = jest.fn();

    (DashboardService.getStats as jest.Mock).mockResolvedValueOnce(mockStats);

    render(<AdminDashboard stats={mockStats} onRefresh={mockOnRefresh} />);

    await waitFor(() => {
      expect(screen.getByText('500')).toBeInTheDocument();
      expect(screen.getByText('25')).toBeInTheDocument();
    });
  });
});
