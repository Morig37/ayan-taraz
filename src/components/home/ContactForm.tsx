import { Box, TextField, Button, Grid } from '@mui/material';

export const ContactForm = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="نام و نام خانوادگی"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="شماره تماس"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" fullWidth>
            درخواست مشاوره
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
