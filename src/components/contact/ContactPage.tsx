import { Container, Grid, Typography, Box } from '@mui/material';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { ContactMap } from './ContactMap';

export const ContactPage = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <ContactForm />
        </Grid>
        <Grid item xs={12} md={6}>
          <ContactInfo />
          <Box sx={{ mt: 4 }}>
            <ContactMap />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
