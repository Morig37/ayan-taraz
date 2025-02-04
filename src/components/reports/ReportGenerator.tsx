import { useState } from 'react';
import { Box, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import TableChartIcon from '@mui/icons-material/TableChart';

export const ReportGenerator = () => {
  const [reportType, setReportType] = useState('financial');

  return (
    <Box sx={{ p: 3 }}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Report Type</InputLabel>
        <Select
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
        >
          <MenuItem value="financial">Financial Report</MenuItem>
          <MenuItem value="client">Client Analysis</MenuItem>
          <MenuItem value="tax">Tax Summary</MenuItem>
        </Select>
      </FormControl>
      
      <Button 
        variant="contained" 
        startIcon={<PictureAsPdfIcon />}
        sx={{ mr: 2 }}
      >
        Export PDF
      </Button>
      
      <Button 
        variant="contained"
        startIcon={<TableChartIcon />}
      >
        Export Excel
      </Button>
    </Box>
  );
};
