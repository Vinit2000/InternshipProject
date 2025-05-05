import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CementPlant from "../assets/CementPlant.jpg";
import Industries from "../assets/Industries.jpg";
//  import Construction from "../assets/Construction.jpg";
import Institution from "../assets/Institution.jpg";
function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={CementPlant} alt="First slide" style={{ height: "500px", objectFit: "cover"}}/>
        <Carousel.Caption>
          <h3>Cement Plant</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Industries} alt="First slide" style={{ height: "500px", objectFit: "cover"}}/>
        <Carousel.Caption>
          <h3>Industries</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Institution} alt="First slide" style={{ height: "500px", objectFit: "cover"}}/>
        <Carousel.Caption>
          <h3>Institution</h3>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img className="d-block w-100" src={Construction} alt="Third slide" style={{ height: "600px", objectFit: "cover" }}/>
        <Carousel.Caption >
          <h3>Construction</h3>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}
export default Slider;

