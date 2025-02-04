import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'شماره', width: 90 },
  { field: 'clientName', headerName: 'نام مشتری', width: 130 },
  { field: 'service', headerName: 'نوع خدمت', width: 130 },
  { field: 'date', headerName: 'تاریخ', width: 130 },
  { field: 'status', headerName: 'وضعیت', width: 130 },
];

export const AppointmentManager = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={[]}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};
