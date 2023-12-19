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
          <p className='aleft homepp'>K2N is led by the wisdom of senior practising faculties,
            And run by an enthusiast team of informed career counsellors 
            Committed to GET YOU UNSTUCK in your career. </p>
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
