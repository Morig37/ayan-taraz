import { Box, TextField, Button, Grid } from '@mui/material';

export const RegistrationForm = () => {
  return (
    <Box component="form" sx={{ p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="نام و نام خانوادگی"
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="کد ملی"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="ایمیل"
            type="email"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button 
            variant="contained" 
            fullWidth 
            size="large"
          >
            ثبت‌نام
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
