import React from 'react';
import CarouselComponent from '../components/Carouselcomponent';
function Page1(props) {
    return (
        <div className="one-page-container" id='CareerPage'>
          <h1>{props.mess}</h1>
          <CarouselComponent></CarouselComponent>
        </div>
      );
}

export default Page1