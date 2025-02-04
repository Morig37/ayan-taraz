import { Grid, Paper, Typography } from '@mui/material';
import { PieChart, Pie, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

export const FinancialDashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6">Revenue Overview</Typography>
          <LineChart width={500} height={300} data={revenueData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="amount" stroke="#FFD700" />
          </LineChart>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6">Expense Categories</Typography>
          <PieChart width={400} height={300}>
            <Pie data={expenseData} dataKey="value" nameKey="name" />
            <Tooltip />
          </PieChart>
        </Paper>
      </Grid>
    </Grid>
  );
};
