import { Box } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export const InvestmentTracker = () => {
  const investmentData = [
    { month: 'Jan', stocks: 4000, bonds: 2400, cash: 2400 },
    { month: 'Feb', stocks: 3000, bonds: 1398, cash: 2210 },
    { month: 'Mar', stocks: 2000, bonds: 9800, cash: 2290 },
  ];

  return (
    <Box sx={{ width: '100%', height: 400 }}>
      <LineChart data={investmentData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="stocks" stroke="#8884d8" />
        <Line type="monotone" dataKey="bonds" stroke="#82ca9d" />
        <Line type="monotone" dataKey="cash" stroke="#ffc658" />
      </LineChart>
    </Box>
  );
};
