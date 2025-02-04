import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            صفحه اصلی
          </Button>
          <Button color="inherit" component={Link} to="/booking">
            رزرو مشاوره
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            تماس با ما
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
