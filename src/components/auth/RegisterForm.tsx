import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Registration logic will be implemented here
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Register
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Full Name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
      />
      {/* Add other fields similarly */}
    </Box>
  );
};
