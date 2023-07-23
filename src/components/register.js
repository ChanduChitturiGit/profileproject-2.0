import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { base_url } from '../util/appConstants';
// import { setToken } from '../jwtHelper'; // Import the setToken function

const RegisterPage = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [mobile, setMobile] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
  const history =useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post(base_url+'/register', {
        username,
        firstname,
        password,
        email,
        mobile,
        lastname,
      });
      // Assume the API returns a JWT token upon successful registration
    //   setToken(response.data.token); // Store the JWT token in local storage using setToken
    //   history.push('/login'); // Redirect to the login page after successful registration
    } catch (error) {
        alert("Registration faile")
      console.error('Registration failed:', error.message);
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Mobile</label>
          <input
            type="text"
            className="form-control"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <Link to="/">
        <button type="button" className="btn btn-primary" onClick={handleRegister}>
          Register Now
        </button>
        </Link>
        <Link to="/" className="btn btn-secondary ml-2">
          Back to Login
        </Link>
      </form>
    </div>
  );
};

export default RegisterPage;
