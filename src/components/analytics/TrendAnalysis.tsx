import { Box } from '@mui/material';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export const TrendAnalysis = () => {
  const trendData = [
    { month: 'Jan', value: 400 },
    { month: 'Feb', value: 300 },
    { month: 'Mar', value: 600 },
  ];

  return (
    <Box sx={{ height: 400 }}>
      <LineChart data={trendData} width={800} height={400}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </Box>
  );
};
