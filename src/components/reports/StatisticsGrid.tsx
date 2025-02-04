import { Grid, Paper, Typography } from '@mui/material';

export const StatisticsGrid = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        <Paper sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="h4" color="primary">
            ۱۲۵
          </Typography>
          <Typography>
            مشاوره‌های این ماه
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="h4" color="success.main">
            ۹۸٪
          </Typography>
          <Typography>
            رضایت مشتریان
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
