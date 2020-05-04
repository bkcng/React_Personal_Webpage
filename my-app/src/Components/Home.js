import React from 'react';
import torontoDesktop from '../Assets/toronto-picture-desktop.jpg';
import torontoMobile from '../Assets/toronto-picture-mobile.jpg';
import '../Styling/home.css';

const imageUrl = window.innerWidth >= 650 ? torontoDesktop : torontoMobile;
export const Home = () => (
  <div className="background" style={{ backgroundImage: `url(${imageUrl})` }}>
    <div className="header">
      <h4>Hi, I'm Bryant!</h4>
      <h4>Welcome to my webpage built using ReactJS!</h4>
    </div>
  </div>
);
