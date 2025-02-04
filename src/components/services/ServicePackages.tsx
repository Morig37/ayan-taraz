import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

export const ServicePackages = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              پکیج پایه
            </Typography>
            <Typography variant="h4" color="primary" gutterBottom>
              ۲۰۰,۰۰۰ تومان
            </Typography>
            <Typography sx={{ mb: 2 }}>
              • یک جلسه مشاوره
              • گزارش کتبی
              • پشتیبانی ۷ روزه
            </Typography>
            <Button variant="contained" fullWidth>
              انتخاب پکیج
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
