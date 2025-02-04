import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

export const CertificateDisplay = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardMedia
            component="img"
            height="300"
            image="/images/certificate.jpg"
            alt="گواهی مشاوره مالیاتی"
          />
          <CardContent>
            <Typography variant="h6">
              گواهی مشاوره مالیاتی
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 2 }}>
              تاریخ صدور: ۱۴۰۲/۱۲/۱۵
            </Typography>
            <Button 
              variant="contained" 
              startIcon={<DownloadIcon />}
            >
              دانلود گواهی
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
