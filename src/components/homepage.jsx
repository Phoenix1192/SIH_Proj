import React from 'react';
import './homepage.css';
import ProMod from './ProMod';

const HomePage = () => {
  const handleClick=()=>{

  }

  return (
    <div className="home-container">
      <div className="description">
        <h1>Chart Your Course, Ignite Your Career!</h1>
        <p>At pathfinder, we offer expert career counseling services powered by innovative chatbot technology. Explore tailored guidance, discover exciting career paths, and navigate your professional journey with confidence. Our platform is designed to provide you with the insights and support you need to make informed career decisions. Empower your future with pathfinder – where your aspirations meet guidance.</p>
        <button className='TakeTest'><a href="#EvaluationPage">Take Test</a></button>
      </div>
      <div className="image-container">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/job-interview-4462381-3702651.png" // Replace with your image URL
          alt="Website Image"
          className="website-image"
        />
      </div>
    </div>
  );
};

export default HomePage;
