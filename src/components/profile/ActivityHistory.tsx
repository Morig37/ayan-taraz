import { List, ListItem, ListItemText, Divider } from '@mui/material';

export const ActivityHistory = () => {
  return (
    <List>
      <ListItem>
        <ListItemText
          primary="رزرو مشاوره"
          secondary="۱۵ اسفند ۱۴۰۲ - ساعت ۱۰:۰۰"
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText
          primary="ویرایش پروفایل"
          secondary="۱۴ اسفند ۱۴۰۲ - ساعت ۱۵:۳۰"
        />
      </ListItem>
    </List>
  );
};
