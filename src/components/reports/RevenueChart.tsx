import { Box } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export const RevenueChart = () => {
  const data = [
    { month: 'فروردین', amount: 1200000 },
    { month: 'اردیبهشت', amount: 1800000 },
    { month: 'خرداد', amount: 2200000 },
  ];

  return (
    <Box sx={{ width: '100%', height: 400 }}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
      </LineChart>
    </Box>
  );
};
