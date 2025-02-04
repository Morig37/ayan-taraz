import { List, ListItem, ListItemText, ListItemIcon, IconButton } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import NotificationsIcon from '@mui/icons-material/Notifications';

export const AlertSystem = () => {
  return (
    <List>
      {alerts.map((alert, index) => (
        <ListItem
          key={index}
          secondaryAction={
            <IconButton edge="end">
              <NotificationsIcon />
            </IconButton>
          }
        >
          <ListItemIcon>
            <WarningIcon color={alert.severity} />
          </ListItemIcon>
          <ListItemText
            primary={alert.title}
            secondary={alert.description}
          />
        </ListItem>
      ))}
    </List>
  );
};
