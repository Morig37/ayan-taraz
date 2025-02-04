import { List, ListItem, ListItemText, Switch } from '@mui/material';

export const NotificationSettings = () => {
  return (
    <List>
      <ListItem>
        <ListItemText 
          primary="اعلان پیامکی"
          secondary="دریافت اعلان‌های مهم از طریق پیامک"
        />
        <Switch defaultChecked />
      </ListItem>
      <ListItem>
        <ListItemText 
          primary="اعلان ایمیلی"
          secondary="دریافت گزارش‌های هفتگی از طریق ایمیل"
        />
        <Switch />
      </ListItem>
    </List>
  );
};
