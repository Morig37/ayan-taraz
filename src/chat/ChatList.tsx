import { List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material';

export const ChatList = () => {
  return (
    <List>
      <ListItem button>
        <ListItemAvatar>
          <Avatar>JD</Avatar>
        </ListItemAvatar>
        <ListItemText 
          primary="John Doe"
          secondary="Tax Consultant"
        />
      </ListItem>
    </List>
  );
};
