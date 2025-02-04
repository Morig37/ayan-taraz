import { Box, TextField, Button, Typography } from '@mui/material';

export const VerificationSystem = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        استعلام اصالت گواهی
      </Typography>
      <TextField
        fullWidth
        label="کد گواهی"
        sx={{ mb: 2 }}
      />
      <Button 
        variant="contained" 
        fullWidth
      >
        بررسی اصالت
      </Button>
    </Box>
  );
};
