import { Box } from '@mui/material';
import { ImageSlider } from './ImageSlider';
import { Navigation } from './Navigation';
import { SearchBox } from './SearchBox';

export function Header() {
  return (
    <Box component="header">
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <SearchBox />
      </Box>
      <ImageSlider />
      <Navigation />
    </Box>
  );
}