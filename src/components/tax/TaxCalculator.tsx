import { Box, TextField, Button, Typography } from '@mui/material';

export const TaxCalculator = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        محاسبه مالیات
      </Typography>
      <TextField
        fullWidth
        label="درآمد سالیانه"
        type="number"
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="هزینه‌های قابل کسر"
        type="number"
        sx={{ mb: 2 }}
      />
      <Button 
        variant="contained" 
        fullWidth
      >
        محاسبه
      </Button>
    </Box>
  );
};
