import { DataGrid } from '@mui/x-data-grid';
import { Button, Chip } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'client', headerName: 'Client', width: 130 },
  { field: 'service', headerName: 'Service', width: 130 },
  { field: 'date', headerName: 'Date', width: 180 },
  {
    field: 'status',
    headerName: 'Status',
    width: 130,
    renderCell: (params) => (
      <Chip
        label={params.value}
        color={params.value === 'confirmed' ? 'success' : 'warning'}
      />
    ),
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 180,
    renderCell: () => (
      <Button variant="outlined" size="small">
        Manage
      </Button>
    ),
  },
];

export const AppointmentList = () => {
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
