import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Rating } from '@mui/material';

export const ReviewList = () => {
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar src="/images/client2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={
            <>
              <Rating value={5} readOnly />
              مشاوره عالی
            </>
          }
          secondary="خیلی از راهنمایی‌های مشاور استفاده کردم"
        />
      </ListItem>
    </List>
  );
};
