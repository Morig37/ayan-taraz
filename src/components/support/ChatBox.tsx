import { Box, TextField, IconButton, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export const ChatBox = () => {
  return (
    <Paper sx={{ p: 2 }}>
      <Box sx={{ height: 400, overflow: 'auto', mb: 2 }}>
        {/* پیام‌ها */}
      </Box>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          placeholder="پیام خود را بنویسید..."
          variant="outlined"
        />
        <IconButton color="primary">
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};
