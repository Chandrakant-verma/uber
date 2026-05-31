import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import UserLogin from './pages/userLogin';
import UserSignup from './pages/userSignup';
import CaptainLogin from './pages/captainLogin';
import CaptainSignup from './pages/captainSignup';

const App = () => {
	return (
		<div>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/user/login' element = {<UserLogin/>} />
        <Route path='/user/signup' element = {<UserSignup/>} />
        <Route path='/captain/login' element = {<CaptainLogin/>} />
        <Route path='/captain/signup' element = {<CaptainSignup/>} />
      </Routes>
      
    </div>
	);
}

export default App;
