import { Grid, Card, CardContent, Typography } from '@mui/material';

export const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">
              مشاوره‌های امروز
            </Typography>
            <Typography variant="h3" color="primary">
              12
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">
              درآمد این ماه
            </Typography>
            <Typography variant="h3" color="success.main">
              ۲,۵۰۰,۰۰۰
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
