import React from 'react';
import './homepage3.css';
import man from '../img/man.png';
import BG from '../img/Background.svg'

const HomePage3 = () => {

  return (
    <div>
      <div className="home-container">
        <div className="image-container">
          <img
            src={man} // Replace with your image URL
            alt="Website Image"
            className="man"
          />
        </div>
        <div className="description aleft">
          <p className='aleft homepp'>Navigating the world of careers can feel overwhelming, especially for young minds. Career counseling provides the tools and guidance to explore your interests, discover hidden talents, and match them with fulfilling career paths. </p>
        </div>
      </div>
      <img
        src={BG} // Replace with your image URL
        alt="fbg"
        className="sbg"
        />
    </div>
  );
};

export default HomePage3;
