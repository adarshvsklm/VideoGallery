import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import UploadVideo from '../Components/UploadVideo/UploadVideo';
import { serverUrl } from '../serverUrl';

function VideoUploadPage() {
    const navigate=useNavigate()
    axios
    .get(`${serverUrl}/login/check`, { withCredentials: true })
    .catch((err) => {
        console.log(err);
      navigate('/login');
    });
  return (
    <div>
      <Navbar />
      <UploadVideo />
    </div>
  );
}

export default VideoUploadPage;
