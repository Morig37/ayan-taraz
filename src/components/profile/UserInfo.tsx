import { Box, TextField, Button, Grid, Avatar } from '@mui/material';

export const UserInfo = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Avatar
            sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
            src="/images/profile.jpg"
          />
          <Button variant="outlined">
            تغییر تصویر
          </Button>
        </Grid>
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
            label="کد ملی"
            defaultValue="۰۰۱۲۳۴۵۶۷۸"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
