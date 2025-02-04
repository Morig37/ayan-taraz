import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'timestamp', headerName: 'Time', width: 180 },
  { field: 'user', headerName: 'User', width: 130 },
  { field: 'action', headerName: 'Action', width: 200 },
  { field: 'details', headerName: 'Details', width: 300 },
];

export const ActivityLog = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={activityData}
        columns={columns}
        pageSize={10}
        sortModel={[{ field: 'timestamp', sort: 'desc' }]}
      />
    </div>
  );
};
