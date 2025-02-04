import { Box, Paper, Typography } from '@mui/material';
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

export const MarketInsights = () => {
  const marketData = [
    { date: '2024-01', value: 1000 },
    { date: '2024-02', value: 1200 },
    { date: '2024-03', value: 1100 },
  ];

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Market Trends Analysis
      </Typography>
      <Box sx={{ height: 300 }}>
        <AreaChart data={marketData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </Box>
    </Paper>
  );
};
