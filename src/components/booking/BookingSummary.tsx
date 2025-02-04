import { Card, CardContent, Typography, Button } from '@mui/material';

export const BookingSummary = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          خلاصه رزرو
        </Typography>
        <Typography>نوع مشاوره: مالیاتی شخصی</Typography>
        <Typography>تاریخ: 1402/12/15</Typography>
        <Typography>ساعت: 10:00</Typography>
        <Button 
          variant="contained" 
          fullWidth 
          sx={{ mt: 2 }}
        >
          تایید و پرداخت
        </Button>
      </CardContent>
    </Card>
  );
};
