 import { BrowserRouter , Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import VideoUploadPage from './Pages/VideoUploadPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/video/upload' element={<VideoUploadPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
