import React from 'react';
import './homepage.css';
import mainImg from '../img/mimg.png';
import BG from '../img/Background.svg';

const HomePage = () => {

  return (
    <div>
      <div className="home-container">
        <div className="description aleft">
          <h1 className='increase'>Being stuck in a career sucks!</h1>
          <h4>We get it</h4>
          <p className='aleft homep'>If you are in an okey-job struggling to fit into a crowd, you know what we mean. If you are a recent graduate the struggle is even bigger for you. </p>
          <button className='TakeTest'><a href="#lastbut">Take Test</a></button>
        </div>
        <div className="image-container">
          <img
            src={mainImg} // Replace with your image URL
            alt="Website Image"
            className="website-image"
          />
        </div>
      </div>
      <img
      src={BG} // Replace with your image URL
      alt="fbg"
      className="fbg-image"
    />
    </div>
  );
};

export default HomePage;
