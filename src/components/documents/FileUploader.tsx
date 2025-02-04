import { useState } from 'react';
import { Button, LinearProgress, Box, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export const FileUploader = () => {
  const [progress, setProgress] = useState(0);

  return (
    <Box sx={{ p: 3 }}>
      <Button
        variant="contained"
        component="label"
        startIcon={<CloudUploadIcon />}
      >
        Upload Document
        <input type="file" hidden multiple />
      </Button>
      <LinearProgress 
        variant="determinate" 
        value={progress} 
        sx={{ mt: 2 }}
      />
    </Box>
  );
};
