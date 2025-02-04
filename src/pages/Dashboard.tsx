import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { AdminStats } from './AdminStats';
import { RecentAppointments } from './RecentAppointments';

export const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4">Admin Dashboard</Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2 }}>
          <AdminStats />
        </Paper>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper sx={{ p: 2 }}>
          <RecentAppointments />
        </Paper>
      </Grid>
    </Grid>
  );
};
