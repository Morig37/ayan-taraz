import { useEffect } from 'react';
import { Snackbar, Alert } from '@mui/material';

export const PushNotification = () => {
  useEffect(() => {
    if ('Notification' in window) {
      Notification.requestPermission();
    }
  }, []);

  return (
    <Snackbar
      open={false}
      autoHideDuration={6000}
    >
      <Alert severity="info" sx={{ width: '100%' }}>
        New notification received!
      </Alert>
    </Snackbar>
  );
};
