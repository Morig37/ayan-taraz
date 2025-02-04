import { Box, List, ListItem, ListItemText, Switch } from '@mui/material';

export const NotificationSettings = () => {
  return (
    <List>
      <ListItem>
        <ListItemText
          primary="اعلان پیامکی"
          secondary="دریافت اطلاعیه‌های مهم از طریق پیامک"
        />
        <Switch defaultChecked />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="اعلان ایمیلی"
          secondary="دریافت خبرنامه و اطلاعیه‌ها"
        />
        <Switch />
      </ListItem>
    </List>
  );
};
