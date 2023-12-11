import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "./CarouselComponent.css"
const CarouselComponent = (props) => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="boxu" style={{ height: 'auto', width: '80vw', margin: 'auto' }}>
          <h3 style={{textAlign:"left" , marginLeft:"2%"}}>Heading1</h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt quibusdam atque quas illo incidunt sapiente harum, eos expedita ab perferendis cum odit modi deleniti, fuga error exercitationem inventore ipsa. Animi sapiente ullam incidunt quo deserunt accusamus quam totam, maxime, sit placeat ipsa maiores. Reiciendis repellat ad numquam quia. Maiores, dolorum!
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div  className= "boxu" style={{ height: 'auto', width: '80vw', margin: 'auto' }}>
        <h3 style={{textAlign:"left" , marginLeft:"2%"}}>Heading2</h3>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas officiis voluptatum cum hic dignissimos quisquam eos, reiciendis neque assumenda deleniti obcaecati! Accusamus sit sunt libero veniam. Provident beatae natus, fugit autem ut temporibus totam modi consectetur harum non architecto aspernatur dolorum dolore, dignissimos voluptas expedita vero impedit maiores. Temporibus, assumenda.
          
        </div>
      </Carousel.Item>

      {/* Add more Carousel.Item components for additional slides */}
    </Carousel>
  );
};

export default CarouselComponent;
