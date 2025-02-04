import { Button, FormControl, InputLabel, MenuItem, Select, Box } from '@mui/material';

export const ReportGenerator = () => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Report Type</InputLabel>
        <Select
          value=""
          label="Report Type"
        >
          <MenuItem value="financial">Financial Report</MenuItem>
          <MenuItem value="user">User Activity Report</MenuItem>
          <MenuItem value="appointments">Appointments Report</MenuItem>
        </Select>
      </FormControl>
      <Button 
        variant="contained" 
        sx={{ mt: 2 }}
      >
        Generate Report
      </Button>
    </Box>
  );
};
