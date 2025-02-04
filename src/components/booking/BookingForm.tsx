import { useState } from 'react';
import { Box, TextField, Button, MenuItem, Grid } from '@mui/material';

export const BookingForm = () => {
  const [service, setService] = useState('');

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            select
            fullWidth
            label="نوع مشاوره"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <MenuItem value="personal">مشاوره مالیاتی شخصی</MenuItem>
            <MenuItem value="business">مشاوره مالیاتی شرکتی</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" fullWidth>
            انتخاب زمان مشاوره
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
