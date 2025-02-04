import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';

const locales = {
  'en-US': require('date-fns/locale/en-US')
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export const Calendar = () => {
  return (
    <div style={{ height: '500px' }}>
      <BigCalendar
        localizer={localizer}
        events={[]}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};
