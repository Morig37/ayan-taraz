import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

export const NewsManager = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6">
              تغییرات جدید قوانین مالیاتی
            </Typography>
            <Typography color="text.secondary">
              تاریخ انتشار: ۱۴۰۲/۱۲/۱۵
            </Typography>
            <Button sx={{ mt: 2 }}>
              ویرایش خبر
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
