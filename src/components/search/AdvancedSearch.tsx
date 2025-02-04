import { Box, TextField, Button, Grid, Autocomplete } from '@mui/material';

export const AdvancedSearch = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="جستجو"
            placeholder="عبارت مورد نظر را وارد کنید..."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            options={['مشاوره مالیاتی', 'حسابداری', 'مالیات شرکت‌ها']}
            renderInput={(params) => (
              <TextField {...params} label="دسته‌بندی" />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" fullWidth>
            جستجو
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
