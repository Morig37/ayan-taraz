import { useState } from 'react';
import { 
  Paper, 
  Typography, 
  Grid,
  Box,
  Divider 
} from '@mui/material';
import { AdapterMomentJalaali } from '@mui/x-date-pickers/AdapterMomentJalaali';
import { LocalizationProvider, DateCalendar } from '@mui/x-date-pickers';
import moment from 'moment-jalaali';
import { TaxEvent } from './types';
import { TaxEventList } from './TaxEventList';
import { taxEvents } from './taxEventsData';

export function TaxCalendar() {
  const [selectedDate, setSelectedDate] = useState<moment.Moment | null>(moment());
  const [events, setEvents] = useState<TaxEvent[]>(taxEvents);

  const getEventsForDate = (date: moment.Moment | null) => {
    if (!date) return [];
    return events.filter(event => 
      moment(event.date).format('YYYY-MM-DD') === date.format('YYYY-MM-DD')
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMomentJalaali}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom align="center" color="primary">
          تقویم مالیاتی
        </Typography>
        <Divider sx={{ mb: 3 }} />
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: 400, mx: 'auto' }}>
              <DateCalendar 
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                views={['day']}
              />
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <TaxEventList 
              events={getEventsForDate(selectedDate)}
              selectedDate={selectedDate}
            />
          </Grid>
        </Grid>
      </Paper>
    </LocalizationProvider>
  );
}