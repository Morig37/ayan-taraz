import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'asset', headerName: 'Asset', width: 130 },
  { field: 'value', headerName: 'Current Value', width: 130 },
  { field: 'return', headerName: 'Return', width: 130 },
  { field: 'allocation', headerName: 'Allocation %', width: 130 },
];

export const PerformanceMetrics = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={[]}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};
