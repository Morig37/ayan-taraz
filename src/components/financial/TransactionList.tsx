import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'date', headerName: 'Date', width: 130 },
  { field: 'description', headerName: 'Description', width: 200 },
  { field: 'category', headerName: 'Category', width: 130 },
  { field: 'amount', headerName: 'Amount', width: 130,
    renderCell: (params) => (
      <span style={{ color: params.value >= 0 ? 'green' : 'red' }}>
        ${Math.abs(params.value).toFixed(2)}
      </span>
    )
  }
];

export const TransactionList = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={transactions}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};
