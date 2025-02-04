import { List, ListItem, ListItemText, Chip } from '@mui/material';

export const TicketSystem = () => {
  return (
    <List>
      <ListItem>
        <ListItemText
          primary="مشکل در پرداخت"
          secondary="۲ ساعت پیش"
        />
        <Chip label="در حال بررسی" color="warning" />
      </ListItem>
    </List>
  );
};
