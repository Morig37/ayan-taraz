import { Box, TextField, Button, Grid } from '@mui/material';

export const ProfileSettings = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="نام و نام خانوادگی"
            defaultValue="علی محمدی"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="شماره تماس"
            defaultValue="۰۹۱۲۳۴۵۶۷۸۹"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="ایمیل"
            defaultValue="example@mail.com"
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" fullWidth>
            ذخیره تغییرات
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
