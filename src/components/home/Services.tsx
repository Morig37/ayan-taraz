import { Grid, Card, CardContent, Typography, Box } from '@mui/material';

export const Services = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                مشاوره مالیاتی شخصی
              </Typography>
              <Typography>
                مشاوره تخصصی برای مالیات اشخاص حقیقی
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                مشاوره مالیاتی شرکت‌ها
              </Typography>
              <Typography>
                راهکارهای تخصصی برای مالیات شرکت‌ها
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
