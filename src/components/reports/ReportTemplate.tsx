import { Paper, Typography, Grid } from '@mui/material';
import { DataVisualizer } from './DataVisualizer';

export const ReportTemplate = () => {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Monthly Financial Report
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <DataVisualizer />
        </Grid>
        
        <Grid item xs={12} md={6}>
          {/* Additional report sections */}
        </Grid>
      </Grid>
    </Paper>
  );
};
