import React from 'react';
import '../Styling/base.css';
import '../Styling/about.css';
import genericBackground from '../Assets/background.png';

export const About = () => (
  <div className="base" style={{ backgroundImage: `url(${genericBackground})` }}>
    <div className="about-content">
      <h6>A little information about me!</h6>
    </div>
    <div className="about-content">
      <h6>Program of Study:</h6>
      <p>3rd year Electrical Engineering at the University of Waterloo</p>
    </div>
    <div className="about-content">
      <h6>Currently:</h6>
      <li>Electrical Design Intern at Zeton Inc</li>
      <li>Seeking an internship position from Jan-Apr 2021</li>
      <li>Learning & absorbing knowledge in Schematic Electrical Design, Power Systems and Telecommunications</li>
      <li>Upgrading skills in Software Development with Web and Embedded Systems</li>
    </div>
    <div className="about-content">
      <h6>Recent Experiences:</h6>
      <li>
        <a href="/experience">Software Developer at Virtek Vision International ULC</a>
      </li>
      <li>
        <a href="/experience">Software Developer Assistant at Iris Power LP</a>
      </li>
      <li>
        <a href="/experience">Incident Management Co-op at Canadian Imperial Bank of Commerce</a>
      </li>
    </div>
  </div>
);
