import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
  { field: 'name', headerName: 'File Name', width: 200 },
  { field: 'type', headerName: 'Type', width: 130 },
  { field: 'size', headerName: 'Size', width: 130 },
  { field: 'uploadDate', headerName: 'Upload Date', width: 180 },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 130,
    renderCell: () => (
      <>
        <IconButton><DownloadIcon /></IconButton>
        <IconButton><DeleteIcon /></IconButton>
      </>
    )
  }
];

export const DocumentList = () => {
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
