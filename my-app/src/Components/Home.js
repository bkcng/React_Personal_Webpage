import React from 'react';
import Avatar from 'react-avatar';
import torontoDesktop from '../Assets/toronto-picture-desktop.jpg';
import torontoMobile from '../Assets/toronto-picture-mobile.png';
import headShot from '../Assets/headshot.jpg';
import '../Styling/home.css';

const imageUrl = window.innerWidth >= 650 ? torontoDesktop : torontoMobile;
var large = 150;
var small = 75;
var headSize = window.innerWidth >= 650 ? large : small;

export const Home = () => (
  <div className="background" style={{ backgroundImage: `url(${imageUrl})` }}>
    <div className="header">
      <Avatar src={headShot} size={headSize} round={true} />
      <div className="intro">
        <h4>Hi, I'm Bryant!</h4>
        <h4>Welcome to my webpage built using ReactJS!</h4>
      </div>
    </div>
  </div>
);
