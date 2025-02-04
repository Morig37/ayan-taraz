import { Box, Container, Grid, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              درباره ما
            </Typography>
            <Typography>
              ارائه خدمات مشاوره مالیاتی با بهترین کیفیت
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              تماس با ما
            </Typography>
            <Typography>
              تلفن: ۰۲۱-۱۲۳۴۵۶۷۸
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
