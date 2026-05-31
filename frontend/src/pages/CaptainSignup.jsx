import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CaptainSignup = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async(e) => {
        e.preventDefault();
        const captainData = { firstName: firstName, lastName: lastName, email: email, password: password};
        // send captainData to backend
    };

  return (
    <div>
    <form onSubmit = {submitHandler} >
      <div>
        <text>what is your first name?</text>
        <input type="text" placeholder="first name" required value = {firstName} onChange={(e) => setFirstName(e.target.value)} />

        <text>what is your last name?</text>
        <input type="text" placeholder="last name" required value = {lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>

      <text>what is your email?</text>
      <input type="email" placeholder="email" required value = {email} onChange={(e) => setEmail(e.target.value)} />

      <text>what is your password?</text>
      <input type="password" placeholder="password" required value = {password} onChange={(e) => setPassword(e.target.value)} />

      <button type="submit">Sign up as Captain</button>
    </form>
    <p>Already have an account? <Link to="/captain/login">Login</Link></p>

    <Link to="/user/signup">Sign up as User</Link>
    </div>
  );
};

export default CaptainSignup;
    