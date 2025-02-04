import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

export const VideoLibrary = () => {
  return (
    <List>
      <ListItem button>
        <ListItemIcon>
          <PlayCircleIcon color="primary" />
        </ListItemIcon>
        <ListItemText 
          primary="آموزش محاسبه مالیات شرکت‌ها"
          secondary="مدت زمان: ۱۵ دقیقه"
        />
      </ListItem>
    </List>
  );
};
