import { Card, CardContent, Typography, CircularProgress } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const PaymentStatus = () => {
  return (
    <Card>
      <CardContent sx={{ textAlign: 'center', py: 4 }}>
        <CheckCircleIcon color="success" sx={{ fontSize: 60, mb: 2 }} />
        <Typography variant="h5" gutterBottom>
          پرداخت با موفقیت انجام شد
        </Typography>
        <Typography color="textSecondary">
          کد پیگیری: ۱۲۳۴۵۶
        </Typography>
      </CardContent>
    </Card>
  );
};
