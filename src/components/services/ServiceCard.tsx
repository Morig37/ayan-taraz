import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

interface ServiceProps {
  title: string;
  description: string;
  price: number;
  image: string;
}

export const ServiceCard = ({ title, description, price, image }: ServiceProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Card sx={{ maxWidth: 345, bgcolor: 'primary.main', color: 'white' }}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            {description}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" color="accent.main">
              ${price}
            </Typography>
            <Button variant="contained" color="secondary">
              Book Now
            </Button>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};
