import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { serverUrl } from '../../serverUrl';

function Login() {
  const [form, setForm] = useState();
  const [error, setError] = useState();

  const navigate = useNavigate();

  const handleLogin = () => {
    axios
      .post(
        `${serverUrl}/login`,
        { ...form },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
        if (err.status === 401) {
          setError('Username or Password is Invalid');
        } else {
          setError('Something went wrong please try again');
        }
      });
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          textAlign: 'center',
        }}
        noValidate
        autoComplete='off'
      >
        <Typography component='h1' variant='h5'>
          Login
        </Typography>
        {error && <small style={{ color: 'red' }}>{error}</small>}
        <br />
        <TextField
          required
          id='standard-basic'
          label='Email'
          variant='outlined'
          onChange={(e) => {
            setForm({ ...form, email: e.target.value });
          }}
        />
        <br />
        <TextField
          type='password'
          required
          id='standard-basic'
          label='Password'
          variant='outlined'
          onChange={(e) => {
            setForm({ ...form, password: e.target.value });
          }}
        />
        <br />
        <Button variant='contained' onClick={handleLogin}>
          {' '}
          Login
        </Button>
      </Box>
    </div>
  );
}

export default Login;
