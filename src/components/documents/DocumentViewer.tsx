import { useState } from 'react';
import { Paper, Tabs, Tab, Box } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ImageIcon from '@mui/icons-material/Image';
import DescriptionIcon from '@mui/icons-material/Description';

export const DocumentViewer = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Paper sx={{ width: '100%', height: '600px' }}>
      <Tabs value={selectedTab} onChange={(_, newValue) => setSelectedTab(newValue)}>
        <Tab icon={<PictureAsPdfIcon />} label="PDF" />
        <Tab icon={<ImageIcon />} label="Images" />
        <Tab icon={<DescriptionIcon />} label="Documents" />
      </Tabs>
      <Box sx={{ p: 3, height: 'calc(100% - 48px)', overflow: 'auto' }}>
        {/* Document content will be rendered here */}
      </Box>
    </Paper>
  );
};
