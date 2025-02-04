import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Authentication logic will be implemented here
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        fullWidth
        type="submit"
        variant="contained"
        sx={{ mt: 3 }}
      >
        Sign In
      </Button>
    </Box>
  );
};
