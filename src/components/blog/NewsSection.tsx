import { List, ListItem, ListItemText, Typography, Divider } from '@mui/material';

export const NewsSection = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        آخرین اخبار مالیاتی
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="اطلاعیه جدید سازمان امور مالیاتی"
            secondary="۱۵ اسفند ۱۴۰۲"
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary="تمدید مهلت ارسال اظهارنامه مالیاتی"
            secondary="۱۰ اسفند ۱۴۰۲"
          />
        </ListItem>
      </List>
    </>
  );
};
