import { Box, Typography, Chip, Grid } from '@mui/material';

export const ExpertProfile = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            تخصص‌ها
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Chip label="مالیات شرکت‌ها" />
            <Chip label="مشاوره مالی" />
            <Chip label="حسابداری" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
