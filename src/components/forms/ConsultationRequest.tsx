import { Box, TextField, MenuItem, Button } from '@mui/material';

export const ConsultationRequest = () => {
  return (
    <Box sx={{ p: 3 }}>
      <TextField
        select
        fullWidth
        label="نوع مشاوره"
        sx={{ mb: 2 }}
      >
        <MenuItem value="personal">مشاوره شخصی</MenuItem>
        <MenuItem value="business">مشاوره شرکتی</MenuItem>
      </TextField>
      
      <TextField
        fullWidth
        multiline
        rows={4}
        label="توضیحات"
        sx={{ mb: 2 }}
      />
      
      <Button 
        variant="contained" 
        fullWidth
      >
        ارسال درخواست
      </Button>
    </Box>
  );
};
