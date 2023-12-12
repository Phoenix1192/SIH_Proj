import React from 'react';
import CarouselComponent from '../components/Carouselcomponent';
import CareerPaths from '../components/careerpath';

function Page2(props) {
    return (
        <div className="one-page-container" id='CareerPage' >
          <div style={{padding:"100px 0px"}}>
            <h1>{props.mess}</h1>
            <CarouselComponent></CarouselComponent>
          </div>
          <CareerPaths/>
        </div>
      );
}

export default Page2