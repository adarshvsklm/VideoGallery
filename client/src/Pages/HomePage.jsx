import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Navbar from '../Components/Navbar/Navbar';
import { serverUrl } from '../serverUrl';

function HomePage() {
  const navigate = useNavigate();
  axios
    .get(`${serverUrl}/login/check`, { withCredentials: true })
    .catch((err) => {
        console.log(err);
      navigate('/login');
    });
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default HomePage;
