// src/App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';  // Assuming you have a dashboard component

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
       
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
