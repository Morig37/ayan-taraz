import { Box, TextField, Button, Typography } from '@mui/material';

export const TwoFactorAuth = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        تایید دو مرحله‌ای
      </Typography>
      <Typography sx={{ mb: 2 }}>
        کد ارسال شده به شماره ۰۹۱۲***۶۷۸۹ را وارد کنید
      </Typography>
      <TextField
        fullWidth
        label="کد تایید"
        sx={{ mb: 2 }}
      />
      <Button variant="contained" fullWidth>
        تایید کد
      </Button>
    </Box>
  );
};
