import { DataGrid } from '@mui/x-data-grid';
import { Avatar, Box, Chip } from '@mui/material';

const columns = [
  {
    field: 'consultant',
    headerName: 'Consultant',
    width: 200,
    renderCell: (params) => (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Avatar src={params.row.avatar} />
        {params.row.name}
      </Box>
    ),
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 130,
    renderCell: (params) => (
      <Chip
        label={params.value}
        color={params.value === 'Available' ? 'success' : 'error'}
      />
    ),
  },
  { field: 'nextAvailable', headerName: 'Next Available', width: 180 },
];

export const ConsultantAvailability = () => {
  return (
    <DataGrid
      rows={[]}
      columns={columns}
      pageSize={5}
      autoHeight
      disableSelectionOnClick
    />
  );
};
