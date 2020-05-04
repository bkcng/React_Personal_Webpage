import React from 'react';
import genericBackground from '../Assets/background.png';
import '../Styling/base.css';

export const Contact = () => (
  <div className="base" style={{ backgroundImage: `url(${genericBackground})` }}>
    <h1>Contact Page</h1>
    <h2>add emial, linkedin, github</h2>
    <h3>Summary of info</h3>
  </div>
);
