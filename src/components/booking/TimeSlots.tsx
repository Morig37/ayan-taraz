import { Grid, Button, Typography } from '@mui/material';

export const TimeSlots = () => {
  const slots = [
    '9:00', '10:00', '11:00', '12:00',
    '14:00', '15:00', '16:00', '17:00'
  ];

  return (
    <Grid container spacing={2}>
      {slots.map((time) => (
        <Grid item xs={3} key={time}>
          <Button variant="outlined" fullWidth>
            {time}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};
