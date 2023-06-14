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
import CreateCollection from './pages/CreateCellection/CreateCollection';
import TopUP from './pages/Top-up/Topup';
import Chats from './pages/Chats/Chat';

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
      <BaseNavbar>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contents">
              <Route path=":category" element={<Content />} />
            </Route>
            <Route path="/views">
              <Route path="novel">
                <Route path=":id" element={<></>} />
              </Route>
              <Route path="comic">
                <Route path=":id" element={<></>} />
              </Route>
              <Route path="post">
                <Route path=":id" />
              </Route>
            </Route>
            <Route path="/profile">
              <Route path=":id" element={<Profile />} />
            </Route>
            <Route path='/create-content' element={<CreateCollection />} />
            <Route path='/top-up' element={<TopUP />} />
            <Route path='/chats'>
              <Route path=':id' element={<Chats />} />
            </Route>
            <Route path="*" element={<Error />} />
        </Routes>
      </BaseNavbar>
    </div>
  );
}

export default App;
