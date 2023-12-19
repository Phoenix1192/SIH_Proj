import React from 'react';
import './careerpath.css';
import ProMod from './ProMod';

const CareerPathBlock = ({ imagePath, title, description }) => {
  return (
    <div className="career-path-block">
      <img src={imagePath} alt={`${title} Profile`} className="profile-image" />
      <h2>{title}</h2>
      <p>{description}</p>
      <ProMod desc={description} />
    </div>
  );
};

const CareerPaths = () => {
  const careerPaths = [
    {
      title: 'Software Developer',
      imagePath: 'https://static.vecteezy.com/system/resources/previews/016/746/979/original/freelancer-software-developer-programmer-coder-illustrator-vector.jpg',
      description: 'Create innovative software solutions and shape the digital future.',
    },
    {
      title: 'Graphic Designer',
      imagePath: 'https://static.vecteezy.com/system/resources/previews/006/181/414/original/design-studio-designing-graphic-design-drawing-art-creative-ideas-education-flat-illustration-online-courses-and-tutorials-concept-for-mobile-and-web-graphics-vector.jpg',
      description: 'Transform ideas into visually stunning designs and illustrations.',
    },
    {
      title: 'Marketing Specialist',
      imagePath: 'https://img.freepik.com/free-vector/female-multitasking-work_23-2148390868.jpg',
      description: 'Craft compelling campaigns and strategies to elevate brands in the market.',
    },
    {
      title: 'Data Scientist',
      imagePath: 'https://img.freepik.com/free-vector/binary-code-concept-illustration_114360-6898.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1698969600&semt=ais',
      description: 'Extract valuable insights from data to drive informed decision-making.',
    },
    {
      title: 'UX/UI Designer',
      imagePath: 'https://as1.ftcdn.net/v2/jpg/02/26/34/92/1000_F_226349207_hLuzIZG8Wj62285OpdJ9UTnarourLTZt.jpg',
      description: 'Enhance user experiences by designing intuitive and visually appealing interfaces.',
    },
    {
      title: 'Environmental Scientist',
      imagePath: 'https://media.istockphoto.com/id/1165379982/vector/environment-ecology-nature-protection-concept-people-take-care-of-earth-planet-vector-flat.jpg?s=612x612&w=0&k=20&c=A65i82Mtyf1-b0D7KJUOFVsXbRWD1qlegZdeMwwQSRY=',
      description: 'Contribute to a sustainable future by studying and preserving the environment.',
    },
    {
      title: 'Product Analyst',
      imagePath: 'https://cdni.iconscout.com/illustration/premium/thumb/e-commerce-delivery-management-5691596-4772698.png',
      description: 'Analyze market trends, customer needs, and product performance to provide insights that drive product development and strategy.',
    },
    {
      title: 'Consultant',
      imagePath: 'https://img.freepik.com/free-vector/strategic-consulting-concept-illustration_114360-8994.jpg',
      description: 'Offer expert advice to businesses in areas such as management, strategy, and operations, helping them improve efficiency and achieve their goals.',
    },
    {
      title: 'DevOps Engineer',
      imagePath: 'https://img.freepik.com/premium-vector/devops-engineer-flat-illustration_203633-2089.jpg',
      description: 'Bridge the gap between development and operations by automating processes, managing infrastructure, and ensuring seamless software delivery.',
    },
  ];

  return (
    <div className="career-paths-container">
      {careerPaths.map((path, index) => (
        <CareerPathBlock
          key={index}
          title={path.title}
          imagePath={path.imagePath}
          description={path.description}
        />
      ))}
    </div>
  );
};

export default CareerPaths;
