import { Box, Card, Typography, Avatar } from '@mui/material';

export const TestimonialSlider = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Card sx={{ p: 3, textAlign: 'center' }}>
        <Avatar 
          sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
          src="/images/client1.jpg"
        />
        <Typography variant="body1" sx={{ mb: 2 }}>
          "مشاوره بسیار عالی و حرفه‌ای. از همکاری با این مجموعه کاملا راضی هستم."
        </Typography>
        <Typography variant="subtitle1" color="primary">
          علی محمدی
        </Typography>
        <Typography variant="body2" color="text.secondary">
          مدیرعامل شرکت آلفا
        </Typography>
      </Card>
    </Box>
  );
};
