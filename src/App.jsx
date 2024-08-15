import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Card from './components/Card'; 
import './App.css';
import Jokes from './components/Jokes';
import Cats from './components/Cats';

const App = () => {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/random-user" />} />
            <Route path="/random-user" element={<Card />} />
            <Route path="/random-jokes" element={<Jokes />} />
            <Route path="/cats-listing" element={<Cats />} />
          </Routes>
    </Router>
  );
};

export default App;
