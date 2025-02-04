import { Box, TextField, Button, Grid } from '@mui/material';

export const ContactForm = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="موضوع"
            placeholder="موضوع پیام خود را وارد کنید"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="متن پیام"
            placeholder="پیام خود را بنویسید"
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" fullWidth>
            ارسال پیام
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
