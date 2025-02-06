import { Box, Container } from '@mui/material';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <Box>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
}