import { Grid, Paper, Typography, Box } from '@mui/material';
import { ProgressCircle } from './ProgressCircle';

export const ClientDashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 3, textAlign: 'center' }}>
          <Typography variant="h6">Tax Status</Typography>
          <ProgressCircle value={75} />
          <Typography>75% Complete</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6">Upcoming Deadlines</Typography>
          {/* Deadlines list */}
        </Paper>
      </Grid>
    </Grid>
  );
};
