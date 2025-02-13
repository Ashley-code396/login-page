// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // We'll style it separately to center the form.

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // For navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    setIsAuthenticated(true); // Set as authenticated
    navigate('/dashboard'); // Redirect to dashboard after login
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="btn">Login</button>
        </form>
        <div className="signup-link">
          <p>Don't have an account? <span onClick={() => navigate('/signup')}>Sign Up</span></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
