import { Grid, Button, Typography } from '@mui/material';

export const TimeSlotPicker = () => {
  const timeSlots = [
    '09:00', '10:00', '11:00',
    '12:00', '14:00', '15:00'
  ];

  return (
    <Grid container spacing={1}>
      {timeSlots.map((time) => (
        <Grid item xs={4} key={time}>
          <Button 
            variant="outlined" 
            fullWidth
          >
            {time}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};
