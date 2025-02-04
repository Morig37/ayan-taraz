import React, { useState } from 'react';
import { Box, Paper, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export const ChatWindow = () => {
  const [message, setMessage] = useState('');

  return (
    <Paper sx={{ height: '500px', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flexGrow: 1, overflow: 'auto', p: 2 }}>
        {/* Messages will appear here */}
      </Box>
      <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
        <TextField
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <IconButton>
                <SendIcon />
              </IconButton>
            ),
          }}
        />
      </Box>
    </Paper>
  );
};
