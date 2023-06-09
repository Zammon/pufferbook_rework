import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ForgetPassword from './pages/ForgetPassword/ForgotPassword';
import Error from './pages/Errors/error';

function App() {
  return (
    <div className='w-auto min-w-full h-auto min-h-scree bg-gray-50 flex'>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
