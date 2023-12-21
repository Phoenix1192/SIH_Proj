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
          <p className='aleft homep'>Unsure if computer science or creative writing is your calling? Don't worry, you're not alone! Career counseling helps uncover your unique strengths and skills, opening doors to diverse possibilities and equipping you for a confident future. </p>
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
