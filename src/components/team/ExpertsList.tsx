import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

export const ExpertsList = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardMedia
            component="img"
            height="300"
            image="/images/expert1.jpg"
            alt="مشاور مالیاتی"
          />
          <CardContent>
            <Typography variant="h6">
              دکتر حسین کریمی
            </Typography>
            <Typography color="text.secondary">
              متخصص مالیات شرکت‌ها
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
