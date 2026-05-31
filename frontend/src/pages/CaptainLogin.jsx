import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const CaptainLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({});

  const submitHandler = async(e) => {
       e.preventDefault();
        const captainData = { email: email, password: password};
       
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData)

    if (response.status === 200) {
      const data = response.data

      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')

    }

    setEmail('')
    setPassword('')

  }

  return (
    <div >
        <form onSubmit={(e) => {
          submitHandler(e);
        }}>
          <text>write email</text>
          <input type="email" placeholder="email" required value = {email} onChange={(event) => {setEmail(event.target.value)}}/>

          <text>write password</text>
          <input type="password" placeholder="password" required value = {password} onChange = {(event) => {setPassword(event.target.value)}} />

          <button type="submit">Login</button>
        </form>
        <p>dont have account ?<Link to = '/captain/signup'>Sign up</Link></p>
        <Link to = '/user/login'>Login as user </Link>
    </div>
  );
};

export default CaptainLogin;