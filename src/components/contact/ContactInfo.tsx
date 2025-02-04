import { Box, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export const ContactInfo = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        اطلاعات تماس
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <LocationOnIcon sx={{ mr: 2 }} />
        <Typography>
          تهران، خیابان ولیعصر، پلاک ۱۲۳
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <PhoneIcon sx={{ mr: 2 }} />
        <Typography>
          ۰۲۱-۱۲۳۴۵۶۷۸
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <EmailIcon sx={{ mr: 2 }} />
        <Typography>
          info@example.com
        </Typography>
      </Box>
    </Box>
  );
};
