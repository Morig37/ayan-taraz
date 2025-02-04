import { Grid, Card, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export const AnalyticsDashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Card sx={{ p: 3 }}>
          <Typography variant="h6">Performance Metrics</Typography>
          <BarChart width={600} height={300} data={performanceData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="actual" fill="#8884d8" />
            <Bar dataKey="target" fill="#82ca9d" />
          </BarChart>
        </Card>
      </Grid>
    </Grid>
  );
};
import { Grid, Card, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export const AnalyticsDashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Card sx={{ p: 3 }}>
          <Typography variant="h6">Performance Metrics</Typography>
          <BarChart width={600} height={300} data={performanceData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="actual" fill="#8884d8" />
            <Bar dataKey="target" fill="#82ca9d" />
          </BarChart>
        </Card>
      </Grid>
    </Grid>
  );
};
