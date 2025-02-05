// src/components/layout/Header.tsx
import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { SearchBox } from '../common/SearchBox';
import { Link } from 'react-router-dom';

const pages = [
  { title: 'مقالات', path: '/articles' },
  { title: 'آموزش‌ها', path: '/tutorials' },
  { title: 'ثبت‌نام', path: '/register' },
  { title: 'نحوه همکاری', path: '/cooperation' },
  { title: 'محاسبه مالیات', path: '/tax-calculator' },
  { title: 'مشاوره', path: '/consultation' },
  { title: 'نظرات', path: '/feedback' },
  { title: 'مینی بوک', path: '/mini-book' },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'secondary.main' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
            }}
          >
            آیان تراز
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={(e) => setAnchorElNav(e.currentTarget)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page.path}
                  component={Link}
                  to={page.path}
                  onClick={() => setAnchorElNav(null)}
                >
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {pages.map((page) => (
              <Button
                key={page.path}
                component={Link}
                to={page.path}
                sx={{
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'secondary.main',
                  }
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <SearchBox />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;