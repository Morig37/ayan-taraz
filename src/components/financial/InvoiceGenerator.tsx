import { Button, TextField, Grid, Paper } from '@mui/material';
import { PDFDownloadLink } from '@react-pdf/renderer';

export const InvoiceGenerator = () => {
  return (
    <Paper sx={{ p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Client Name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Service Description"
            multiline
            rows={4}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Amount"
            type="number"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Generate Invoice
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
