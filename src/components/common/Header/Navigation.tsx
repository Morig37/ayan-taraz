import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { text: 'صفحه اصلی', path: '/' },
  { text: 'ویدئوها', path: '/videos' },
  { text: 'مقالات', path: '/articles' },
  { text: 'آموزش‌ها', path: '/tutorials' },
  { text: 'ثبت‌نام', path: '/register' },
  { text: 'نحوه همکاری', path: '/collaboration' },
  { text: 'محاسبه مالیات', path: '/tax-calculator' },
  { text: 'مینی‌بوک', path: '/mini-book' },
  { text: 'نظرسنجی', path: '/survey' },
  { text: 'درخواست مشاوره', path: '/consultation' },
];

export function Navigation() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {menuItems.map((item) => (
            <Button
              key={item.path}
              color="primary"
              onClick={() => navigate(item.path)}
            >
              {item.text}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}