import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ForgetPassword from './pages/ForgetPassword/ForgotPassword';
import Error from './pages/Errors/error';
import Content from './pages/Contents/Content';
import BaseNavbar from './components/Navbars/baseNavbar';
import Profile from './pages/Profiles/Profile';

function App() {
  // return(
  //   <div className='flex flex-col w-full h-auto bg-gray-50 '>
  //     <Routes>
  //           <Route path="/" element={<Home/>} />
  //           <Route path="/home" element={<Home />} />
  //           <Route path="/content">
  //             <Route path=":category" element={<Content />} />
  //           </Route>
  //           <Route path='*' element={<Error />} />
  //       </Routes>
  //   </div>
  // )

  return (
    <div className='flex flex-col w-full h-auto bg-gray-50 '>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contents">
            <Route path=":category" element={<Content />} />
          </Route>
          <Route path="/profile">
            <Route path=":profileID" element={<Profile />} />
          </Route>
          <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
