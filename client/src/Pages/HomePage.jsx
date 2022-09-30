import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Navbar from '../Components/Navbar/Navbar';
import { serverUrl } from '../serverUrl';

function HomePage() {
 
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default HomePage;
