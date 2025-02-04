import { Grid } from '@mui/material';
import { ServiceCard } from './ServiceCard';

const services = [
  {
    id: 1,
    title: 'Tax Consultation',
    description: 'Professional tax planning and consultation services',
    price: 199,
    image: '/assets/images/tax-consultation.jpg'
  },
  // Add more services
];

export const ServicesList = () => {
  return (
    <Grid container spacing={4} sx={{ p: 4 }}>
      {services.map((service) => (
        <Grid item xs={12} sm={6} md={4} key={service.id}>
          <ServiceCard {...service} />
        </Grid>
      ))}
    </Grid>
  );
};
