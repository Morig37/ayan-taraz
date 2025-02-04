import { Card, CardContent, Typography, Box, LinearProgress } from '@mui/material';

export const SecurityMonitor = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Security Status
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" color="textSecondary">
            System Integrity
          </Typography>
          <LinearProgress 
            variant="determinate" 
            value={98} 
            color="success"
            sx={{ height: 8, borderRadius: 5 }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};
