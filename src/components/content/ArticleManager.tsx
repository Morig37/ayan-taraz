import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export const ArticleManager = () => {
  return (
    <List>
      <ListItem
        secondaryAction={
          <>
            <IconButton>
              <EditIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </>
        }
      >
        <ListItemText
          primary="راهنمای جامع مالیات"
          secondary="آخرین بروزرسانی: ۱۴۰۲/۱۲/۱۵"
        />
      </ListItem>
    </List>
  );
};
