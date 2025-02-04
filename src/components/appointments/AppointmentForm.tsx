import { useState } from 'react';
import { TextField, Button, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';

export const AppointmentForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [service, setService] = useState('');

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', p: 3 }}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Service Type</InputLabel>
        <Select
          value={service}
          label="Service Type"
          onChange={(e) => setService(e.target.value)}
        >
          <MenuItem value="tax">Tax Consultation</MenuItem>
          <MenuItem value="accounting">Accounting Services</MenuItem>
          <MenuItem value="planning">Financial Planning</MenuItem>
        </Select>
      </FormControl>
      
      <DateTimePicker
        label="Appointment Date & Time"
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
      />
      
      <Button 
        fullWidth 
        variant="contained" 
        sx={{ mt: 2 }}
      >
        Schedule Appointment
      </Button>
    </Box>
  );
};
