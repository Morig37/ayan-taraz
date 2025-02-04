import { Grid, Card, CardContent, Typography, IconButton } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FolderIcon from '@mui/icons-material/Folder';

export const DocumentCenter = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">
              Required Documents
              <IconButton color="primary">
                <FileUploadIcon />
              </IconButton>
            </Typography>
            {/* Document list */}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
