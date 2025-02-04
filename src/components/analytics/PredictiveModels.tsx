import { Card, CardContent, Typography, Grid } from '@mui/material';

export const PredictiveModels = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Revenue Forecast</Typography>
            <Typography variant="h4" color="primary">
              $1.2M
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Projected Q2 2024
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
