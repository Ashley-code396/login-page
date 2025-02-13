// src/components/Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // We'll style it similarly

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Sign Up', { username, email, password });
    navigate('/login'); // Redirect to login after sign-up
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">Sign Up</button>
        </form>
        <div className="login-link">
          <p>Already have an account? <span onClick={() => navigate('/login')}>Login</span></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
