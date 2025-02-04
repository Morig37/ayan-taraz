import { Grid, Card, CardContent, Typography } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export const AdvisorDashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5">
          Smart Investment Recommendations
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography color="primary" variant="h6">
              <TrendingUpIcon /> Top Opportunities
            </Typography>
            {/* Recommendations list */}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
