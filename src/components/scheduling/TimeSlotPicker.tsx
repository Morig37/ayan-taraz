import { Grid, Button, Typography } from '@mui/material';

export const TimeSlotPicker = () => {
  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00',
    '14:00', '15:00', '16:00', '17:00'
  ];

  return (
    <Grid container spacing={2}>
      {timeSlots.map((time) => (
        <Grid item xs={3} key={time}>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              '&.available': {
                borderColor: 'primary.main',
                color: 'primary.main'
              }
            }}
          >
            {time}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};
