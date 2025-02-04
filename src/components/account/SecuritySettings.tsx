import { Box, Switch, FormControlLabel, Typography, Divider } from '@mui/material';

export const SecuritySettings = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        تنظیمات امنیتی
      </Typography>
      <FormControlLabel
        control={<Switch defaultChecked />}
        label="ورود دو مرحله‌ای"
      />
      <Divider sx={{ my: 2 }} />
      <FormControlLabel
        control={<Switch />}
        label="تایید ورود از دستگاه‌های جدید"
      />
    </Box>
  );
};
