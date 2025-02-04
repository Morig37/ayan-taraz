import { List, ListItem, ListItemText, ListItemIcon, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CloseIcon from '@mui/icons-material/Close';

export const NotificationList = () => {
  return (
    <List>
      <ListItem
        secondaryAction={
          <IconButton edge="end">
            <CloseIcon />
          </IconButton>
        }
      >
        <ListItemIcon>
          <NotificationsIcon color="primary" />
        </ListItemIcon>
        <ListItemText
          primary="جلسه مشاوره جدید"
          secondary="جلسه مشاوره شما برای فردا ساعت ۱۰ تایید شد"
        />
      </ListItem>
    </List>
  );
};
