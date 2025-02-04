import { Box, Paper } from '@mui/material';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

export const AppointmentCalendar = () => {
  return (
    <Paper sx={{ p: 2, height: 600 }}>
      <Calendar
        localizer={localizer}
        events={[]}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
      />
    </Paper>
  );
};
