import { List, ListItem, ListItemText, Chip } from '@mui/material';

export const SessionList = () => {
  return (
    <List>
      <ListItem>
        <ListItemText
          primary="مشاوره مالیاتی شرکت‌ها"
          secondary="یکشنبه ۱۵ اسفند - ساعت ۱۰:۰۰"
        />
        <Chip label="تایید شده" color="success" />
      </ListItem>
    </List>
  );
};
