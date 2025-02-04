import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'regulation', headerName: 'Regulation', width: 200 },
  { field: 'status', headerName: 'Status', width: 130 },
  { field: 'deadline', headerName: 'Deadline', width: 130 },
  { field: 'priority', headerName: 'Priority', width: 130 },
];

export const RegulatoryTracker = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={regulationData}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
};
