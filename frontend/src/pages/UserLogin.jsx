import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const UserLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = async(e) => {
       e.preventDefault();
        const userData = { email: email, password: password};
       
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    if (response.status === 200) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
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
        <p>dont have account ?<Link to = '/user/signup'>Sign up</Link></p>
        <Link to = '/captain/login'>Login as captain</Link>
    </div>
  );
};

export default UserLogin;