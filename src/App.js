// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import UserAccess from './Components/UserAccess';
import HomePage from './Pages/HomePage'; // This is your new homepage component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserAccess />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
