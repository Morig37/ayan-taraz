import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const columns = [
  { field: 'date', headerName: 'Date', width: 130 },
  { field: 'service', headerName: 'Service', width: 200 },
  { field: 'amount', headerName: 'Amount', width: 130 },
  { field: 'status', headerName: 'Status', width: 130 },
  {
    field: 'invoice',
    headerName: 'Invoice',
    width: 130,
    renderCell: () => (
      <Button size="small" variant="outlined">
        Download
      </Button>
    ),
  },
];

export const PaymentHistory = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={[]}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};
