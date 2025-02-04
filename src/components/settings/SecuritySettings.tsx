import { Box, TextField, Button } from '@mui/material';

export const SecuritySettings = () => {
  return (
    <Box sx={{ p: 3 }}>
      <TextField
        fullWidth
        type="password"
        label="رمز عبور فعلی"
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        type="password"
        label="رمز عبور جدید"
        sx={{ mb: 2 }}
      />
      <Button variant="contained" fullWidth>
        تغییر رمز عبور
      </Button>
    </Box>
  );
};
