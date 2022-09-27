import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { serverUrl } from '../../serverUrl';

function UploadVideo() {
  const [title, setTitle] = useState();
  const [file, setFile] = useState();
  const navigate=useNavigate()

  const handleSubmit = () => {
     const formData = new FormData();
    console.log(file);
    formData.append('file', file);
    formData.append('upload_preset', 'u4a0fl5p');
    axios.post(
      'https://api.cloudinary.com/v1_1/dwzlm4vnj/video/upload',
      formData
    )
    .then((res)=>{
        console.log(res.data.secure_url);
        axios.patch(`${serverUrl}/upload`,{url:res.data.secure_url,title},{withCredentials:true})
        .then((response)=>{
            navigate('/')
        })
    })
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
        }}
        noValidate
        autoComplete='off'
      >
        <h3>Upload video</h3>
        <br />
        <TextField
          required
          id='standard-basic'
          label='Title'
          variant='outlined'
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type='file' onChange={(e)=>{setFile(e.target.files[0])}}/>

        <br />
        <Button variant='contained' onClick={handleSubmit}>
          {' '}
          Upload
        </Button>
      </Box>
    </div>
  );
}

export default UploadVideo;
