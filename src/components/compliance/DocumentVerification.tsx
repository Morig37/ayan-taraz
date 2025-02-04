import { List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

export const DocumentVerification = () => {
  return (
    <List>
      {documents.map((doc, index) => (
        <ListItem
          key={index}
          secondaryAction={
            <IconButton edge="end">
              <CloudDownloadIcon />
            </IconButton>
          }
        >
          <ListItemIcon>
            <VerifiedIcon color={doc.verified ? 'success' : 'error'} />
          </ListItemIcon>
          <ListItemText
            primary={doc.name}
            secondary={`Last verified: ${doc.verificationDate}`}
          />
        </ListItem>
      ))}
    </List>
  );
};
