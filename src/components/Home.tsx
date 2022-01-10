import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>It is Home Component</h1>
      <Link to="about">About</Link>
    </div>
  );
};

export default Home;
