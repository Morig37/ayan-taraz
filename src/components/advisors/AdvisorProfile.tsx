import { Box, Avatar, Typography, Grid, Chip } from '@mui/material';

export const AdvisorProfile = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
          <Avatar
            sx={{ width: 200, height: 200, mx: 'auto', mb: 2 }}
            src="/images/advisor.jpg"
          />
          <Typography variant="h5">
            دکتر محمد احمدی
          </Typography>
          <Typography color="text.secondary">
            متخصص مالیات شرکت‌ها
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              تخصص‌ها
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Chip label="مالیات شرکت‌ها" />
              <Chip label="حسابداری مالی" />
              <Chip label="مشاوره مالیاتی" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
