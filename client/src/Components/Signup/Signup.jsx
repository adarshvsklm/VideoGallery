import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { validation } from './validation';
import axios from 'axios';
import { serverUrl } from '../../serverUrl';

function Signup() {
  const [form, setForm] = useState({});
  const [error, setError] = useState('');

  const navigate = useNavigate();
  let valid = validation(form);
  const handleSubmit = () => {
    axios
      .post(`${serverUrl}/signup`, form, { withCredentials: true })
      .then((res) => {
        navigate('/login');
      })
      .catch((err) => {
        console.log(err);
        if (err.status == 409) {
          setError('User already exists ');
        } else {
          setError('Something went wrong Please try again');
        }
      });
  };

  return (
    <div>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
        noValidate
        autoComplete='off'
      >
        <h3>SIGN UP</h3>
        {error && <small style={{ color: 'red' }}>{error}</small>}
        <TextField
          id='outlined-basic'
          label='Name'
          variant='outlined'
          onChange={(e) => {
            setForm({ ...form, name: e.target.value });
          }}
        />
        <TextField
          id='outlined-basic'
          label='Email'
          variant='outlined'
          onChange={(e) => {
            setForm({ ...form, email: e.target.value });
          }}
        />
        {!valid.hasEmail && form.email ? (
          <small style={{ color: 'red' }}>Enter Correct Email</small>
        ) : (
          ''
        )}
        <TextField
          id='outlined-basic'
          label='Password'
          variant='outlined'
          onChange={(e) => {
            setForm({ ...form, password: e.target.value });
          }}
        />
        {form.password && (
          <div className='ml-1' style={{ columns: '2' }}>
            <div>
              <small
                style={valid.hasSixChar ? { color: 'green' } : { color: 'red' }}
              >
                Atleast six characters
              </small>
            </div>

            <div>
              <small
                style={
                  valid.hasLowerChar ? { color: 'green' } : { color: 'red' }
                }
              >
                One lowercase letter
              </small>
            </div>

            <div>
              <small
                style={
                  valid.hasUpperChar ? { color: 'green' } : { color: 'red' }
                }
              >
                One uppercase letter
              </small>
            </div>

            <div>
              <small
                style={
                  valid.hasSpecialChar ? { color: 'green' } : { color: 'red' }
                }
              >
                One special character
              </small>
            </div>

            <div>
              <small
                style={valid.hasNumber ? { color: 'green' } : { color: 'red' }}
              >
                One number
              </small>
            </div>
          </div>
        )}
        <TextField
          id='outlined-basic'
          label='Confirm Password'
          variant='outlined'
          onChange={(e) => {
            setForm({ ...form, cPassword: e.target.value });
          }}
        />
        {form.password &&
          form.cPassword &&
          (form.cPassword != form.password ? (
            <small style={{ color: 'red' }}>Password does not match</small>
          ) : (
            ''
          ))}
        <Button
          disabled={
            !form.name ||
            !valid.hasSixChar ||
            !valid.hasLowerChar ||
            !valid.hasUpperChar ||
            !valid.hasSpecialChar ||
            !(form.cPassword === form.password) ||
            !valid.hasNumber ||
            !valid.hasEmail
          }
          variant='contained'
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
}

export default Signup;
