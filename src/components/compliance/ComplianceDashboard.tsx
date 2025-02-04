import { Grid, Card, Typography, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const ComplianceDashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card sx={{ p: 3 }}>
          <Box display="flex" alignItems="center">
            <CheckCircleIcon color="success" sx={{ mr: 2 }} />
            <Typography variant="h6">
              Compliance Status: Fully Compliant
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};
