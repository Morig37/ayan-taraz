import { Box, Grid, Typography, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const ServiceFeatures = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <CheckCircleIcon color="primary" sx={{ mr: 1 }} />
            <Typography variant="h6">
              مشاوره تخصصی
            </Typography>
          </Box>
          <Typography>
            ارائه راهکارهای تخصصی توسط بهترین مشاوران
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
