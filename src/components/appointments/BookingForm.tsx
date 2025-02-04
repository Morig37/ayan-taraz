import React, { useState } from 'react';
import { TextField, Button, Box, Typography, MenuItem } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';

export const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [consultant, setConsultant] = useState('');

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Book an Appointment
      </Typography>
      <DateTimePicker
        label="Select Date and Time"
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
      />
      <TextField
        select
        fullWidth
        label="Select Consultant"
        value={consultant}
        onChange={(e) => setConsultant(e.target.value)}
        sx={{ mt: 2 }}
      >
        {/* Add consultant options here */}
      </TextField>
      <Button variant="contained" sx={{ mt: 2 }}>
        Book Appointment
      </Button>
    </Box>
  );
};
