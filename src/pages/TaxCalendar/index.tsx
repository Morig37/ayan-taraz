import { Container, Paper, Typography } from '@mui/material';
import { TaxCalendar } from '../../components/features/TaxCalendar';

export function TaxCalendarPage() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" gutterBottom align="center" color="primary">
        تقویم مالیاتی ۱۴۰۴
      </Typography>
      <Typography variant="subtitle1" gutterBottom align="center" color="text.secondary" sx={{ mb: 4 }}>
        مهلت‌های قانونی و یادآوری‌های مهم مالیاتی
      </Typography>
      
      <TaxCalendar />
    </Container>
  );
}