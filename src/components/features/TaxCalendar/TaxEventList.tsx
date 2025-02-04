import { 
    List,
    ListItem,
    ListItemText,
    Typography,
    Chip,
    Box
  } from '@mui/material';
  import moment from 'moment-jalaali';
  import { TaxEvent } from './types';
  
  interface TaxEventListProps {
    events: TaxEvent[];
    selectedDate: moment.Moment | null;
  }
  
  const importanceColors = {
    high: 'error',
    medium: 'warning',
    low: 'info'
  };
  
  const typeLabels = {
    deadline: 'مهلت',
    reminder: 'یادآوری',
    payment: 'پرداخت'
  };
  
  export function TaxEventList({ events, selectedDate }: TaxEventListProps) {
    if (!selectedDate) {
      return (
        <Typography variant="body1" align="center">
          لطفاً یک تاریخ را انتخاب کنید
        </Typography>
      );
    }
  
    if (events.length === 0) {
      return (
        <Typography variant="body1" align="center">
          هیچ رویدادی برای {selectedDate.format('jDD jMMMM jYYYY')} وجود ندارد
        </Typography>
      );
    }
  
    return (
      <List>
        {events.map((event) => (
          <ListItem
            key={event.id}
            sx={{
              border: 1,
              borderColor: 'divider',
              borderRadius: 1,
              mb: 1,
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
          >
            <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
              <Chip
                label={typeLabels[event.type]}
                color={importanceColors[event.importance] as any}
                size="small"
              />
            </Box>
            <ListItemText
              primary={event.title}
              secondary={event.description}
              primaryTypographyProps={{
                fontWeight: 'bold',
                gutterBottom: true
              }}
            />
          </ListItem>
        ))}
      </List>
    );
  }