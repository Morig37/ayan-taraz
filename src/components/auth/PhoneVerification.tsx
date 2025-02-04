import { Box, TextField, Button } from '@mui/material';

export const PhoneVerification = () => {
  return (
    <Box sx={{ p: 3 }}>
      <TextField
        fullWidth
        label="شماره موبایل"
        placeholder="۰۹۱۲۳۴۵۶۷۸۹"
        sx={{ mb: 2 }}
      />
      <Button variant="contained" fullWidth>
        ارسال کد تایید
      </Button>
    </Box>
  );
};
