import React from 'react';
import './homepage4.css';
import think from '../img/think.png';

const HomePage4 = () => {

  return (
    <div>
      <div className="home-container">
        <div className="image-container">
          <img
            src={think} // Replace with your image URL
            alt="Website Image"
            className="website-image"
          />
        </div>
        <div className="description aright lower">
          <h4>Making a career choice</h4>
          <h5>between what you love and what pays the bills is messy and often without a signpost. </h5>
          <p className='aright'>It takes several painful years before figuring out what’s not working. You read articles, watch videos on youtube, follow influencers and get overwhelmed with ideas about what you should and shouldn’t be doing in your career. </p>
        </div>
      </div>
      <div className="home-container">
        <div className="description aleft">
          <p className='aleft'>And then there is the ‘small’ matter of actually showing up at work or worse looking for one without a clue!  </p>
          <h5>So you accept the default and do nothing. </h5>
        </div>
        <div className="description aleft">
            <button className='Getco'>Re-evaluate your path</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage4;
