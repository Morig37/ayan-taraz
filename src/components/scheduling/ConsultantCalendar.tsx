import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Box, Paper } from '@mui/material';

const localizer = momentLocalizer(moment);

export const ConsultantCalendar = () => {
  return (
    <Paper sx={{ p: 2 }}>
      <Box sx={{ height: 600 }}>
        <Calendar
          localizer={localizer}
          events={[]}
          startAccessor="start"
          endAccessor="end"
          views={['month', 'week', 'day']}
          step={60}
          defaultView="week"
        />
      </Box>
    </Paper>
  );
};
