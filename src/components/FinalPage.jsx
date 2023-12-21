import React from 'react'
import "./FinalPage.css"
import axios from 'axios'
import { useState } from 'react';

function FinalPage({status,inp,setInp}) {
  const [userInput, setUserInput] = useState('');
  const [qhistory,setQhistory]= useState([]);
  const [ahistory,setAhistory]= useState([]);

  // Function to handle input change
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleInputSubmit = () => {
    // Do something with the input (for example, log it to the console)
    setUserInput("");
    setQhistory([...qhistory,userInput]);
    setAhistory([...ahistory,'Answer']);
  };

  const Chat=qhistory.map((item, index) => {
    return <div className='history'>
    <p className='chat'><b className='person'>Me: </b>{item}</p>
    <p className='chat'><b className='person'>Bot: </b>{ahistory[index]}</p>
    </div>
  });

   status="Hey Junta! I am Arabinda, an Alumnus of the GnG Department of IIT Kharagpur. On an exhilarating DAY 1 of the placement drive, I have been selected as a Graduate Engineer Trainee (Geophysics) at Cairn Oil and Gas, Vedanta Limited. As a geophysicist, my primary focus is utilizing cutting-edge technology and scientific methods to uncover valuable hydrocarbon resources. Through meticulous collection and analysis of geophysical data, I will collaborate closely with geologists, reservoir engineers, and drilling engineers to develop precise and reliable geological models. This collaborative effort will empower us to make informed decisions, which will greatly enhance our chances of success in oil and gas exploration and production to make India “Energy Atmanirbhar”.";
   const points=status.split('. ');
   const dpoints=<div>
    <h4 style={{color:'white'}}>Your Career Path:</h4>
    <ul>
   {points.map((point, index) => (
     <li style={{color:'white',textAlign:"left",padding:"5px"}} key={index}>{point}</li>
   ))}
 </ul>
   </div>
  return (
    <div className="one-page-container">
        <div className="top first">
            {dpoints}
        </div>
        <div className="top">
            <div className='history'>
              {Chat}
            </div>
            <div className='second'>
              <input className='bottext' name="" id="" cols="30" rows="10" value={userInput} 
              onChange={handleInputChange}
              placeholder='Lets talk'/>
              <button className='botbtn' onClick={handleInputSubmit}>
                Discuss
              </button>
            </div>
        </div>
    </div>
  )
}

export default FinalPage