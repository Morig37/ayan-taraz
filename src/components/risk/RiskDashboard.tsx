import { Grid, Card, Typography, LinearProgress } from '@mui/material';

export const RiskDashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Card sx={{ p: 2 }}>
          <Typography variant="h6">Market Risk</Typography>
          <LinearProgress 
            variant="determinate" 
            value={65} 
            color="warning"
            sx={{ height: 10, borderRadius: 5 }}
          />
        </Card>
      </Grid>
    </Grid>
  );
};
