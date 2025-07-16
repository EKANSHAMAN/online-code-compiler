import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Container, Box } from '@mui/material';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post('https://online-code-compiler-cr6y.onrender.com/auth/register', {
        username,
        email,
        password,
      });
      alert('✅ Registration successful!');
      navigate('/login');
    } catch {
      alert('❌ Email or username already exists.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <TextField
          margin="normal"
          fullWidth
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          fullWidth
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3 }}
          onClick={handleRegister}
        >
          Register
        </Button>
      </Box>
    </Container>
  );
}

export default Register;
