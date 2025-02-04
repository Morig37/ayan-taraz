import { Box, Card, CardContent, Typography, Grid } from '@mui/material';

export const GuideSection = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              راهنمای رزرو مشاوره
            </Typography>
            <Typography>
              ۱. نوع مشاوره را انتخاب کنید
              ۲. زمان مناسب را انتخاب کنید
              ۳. فرم را تکمیل و پرداخت کنید
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
