import { Box, Typography, Button, Container } from '@mui/material';

export const Hero = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
      <Container>
        <Typography variant="h2" gutterBottom>
          مشاوره تخصصی مالیاتی
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }}>
          با بهترین مشاوران مالیاتی کشور
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          رزرو مشاوره
        </Button>
      </Container>
    </Box>
  );
};
