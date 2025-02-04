import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

export const ArticleGrid = () => {
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
            <Typography variant="h6">
              راهنمای جامع مالیات بر ارزش افزوده
            </Typography>
            <Typography color="text.secondary">
              نویسنده: دکتر احمدی
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
