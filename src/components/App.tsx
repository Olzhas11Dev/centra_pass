import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import TestList from './TestList';

function App() {
  return (
    <div className="App">
      <h1> React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <TestList />
    </div>
  );
}

export default App;
