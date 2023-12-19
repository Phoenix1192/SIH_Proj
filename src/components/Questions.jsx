import React from "react";
import './Questions.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import acadimg from '../img/acaimg.png';
import aptimg from '../img/aptimg.png';
import goimg from '../img/goimg.png';
import perimg from '../img/perimg.png';
import balimg from '../img/balimg.png';

const Qtypes = ({ results, score }) => {
  //const navigate = useNavigate();
  const HandleClick = (title) => {
    //navigate("/question/" + title);
  };
  const CareerPathBlock = ({ imagePath, title, description }) => {
    return (
      <div onClick={() => HandleClick(title)} className="q-type-block">
        <img
          src={imagePath}
          alt={`${title} Profile`}
          className="q-image"
        />
        <h2 className="aleft">{title}</h2>
        <p className="aleft">{description}</p>
      </div>
    );
  };
  const handleEval = async () => {
    if (results.every((value) => value !== -1)) {
      try {
        const response = await axios.post('http://localhost:5000/api/re', {
          score,
          results,
        });
    
        console.log('Server response:', response.data);
      } catch (error) {
        console.error('Error:', error.message);
      }
    } else {
      alert("Complete the test");
    }
  };
  const careerPaths = [
    {
      title: "Academic Background",
      imagePath:
      acadimg,
      description:
        "Uncover your scholastic journey and discover how it shapes your career path in life.",
    },
    {
      title: "Aptitudes & Skills",
      imagePath:
      aptimg,
      description:
        "Explore the unique talents and proficiencies that set you apart in the professional landscape.",
    },
    {
      title: "Personality Traits",
      imagePath:
        "https://img.freepik.com/free-vector/flat-people-asking-questions-illustration_23-2148901520.jpg",
      description:
        " Decode the essence of who you are, understanding how your personality aligns with various career possibilities.",
    },
    {
      title: "Interests & Values",
      imagePath:
      balimg,
      description:
        "Delve into your passions and principles, guiding you towards a fulfilling and meaningful career.",
    },
    {
      title: "Psychometric Tests",
      imagePath:
      perimg,
      description:
        "Unlock self-awareness with psychometric tests, revealing the hidden facets of your personality and potentia.",
    },
  ];

  return (
    <div className="cover_box">
      <div className="q-type-container">
        {careerPaths.map((path, index) => (
          <CareerPathBlock
            key={index}
            title={path.title}
            imagePath={path.imagePath}
            description={path.description}
          />
        ))}
      </div>
      <div className="q-type-container">
        <button onClick={handleEval} className="eval TakeTest">
          Evaluate
        </button>
      </div>
    </div>
  );
};

export default Qtypes;