import React from 'react'
import { useState } from 'react';
import './chatbot.css'

function Chatbot(props) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      // Perform the action you want when Enter is pressed
      setInputValue('');
      alert('here is your solution');
    }
  };

    return (
        <div className={`chatbot ${clicked ? 'clicked' : ''}`} onClick={handleClick}>
          <input className={`chatboti ${clicked ? 'clickedi' : ''}`} 
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleEnterPress}/>
        </div>
      );
}

export default Chatbot