import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

export const ArticleList = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardMedia
            component="img"
            height="200"
            image="/images/tax-article.jpg"
            alt="مقاله مالیاتی"
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              تغییرات جدید قوانین مالیاتی
            </Typography>
            <Typography color="text.secondary">
              آخرین تغییرات قوانین مالیاتی و تاثیر آن بر کسب و کارها
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
