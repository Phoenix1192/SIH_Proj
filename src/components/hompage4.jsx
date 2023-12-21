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
          <h4>Re-evaluating your Choice</h4>
          <h5>between what you do and what you want the confusion is real  </h5>
          <p className='aright'>Feeling like your future roadmap might have a few too many detours? Maybe your dream job from middle school seems less shiny now, or the career landscape has shifted under your feet. </p>
        </div>
      </div>
      <div className="home-container">
        <div className="description aleft">
          <p className='aleft'>Buckle up, let our AI model co-pilot, and prepare to rediscover a future that truly ignites your passion </p>
          <h5>SSo you accept the default and do nothing. </h5>
        </div>
        <div className="description aleft">
            <button className='Getco'>Re-evaluate your path</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage4;
