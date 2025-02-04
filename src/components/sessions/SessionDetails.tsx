import { Box, Typography, Button, Grid } from '@mui/material';

export const SessionDetails = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6">
            جزئیات جلسه مشاوره
          </Typography>
          <Typography>
            مشاور: دکتر احمدی
          </Typography>
          <Typography>
            موضوع: مشاوره مالیاتی شرکت‌ها
          </Typography>
          <Button 
            variant="contained" 
            sx={{ mt: 2 }}
          >
            ورود به جلسه
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
