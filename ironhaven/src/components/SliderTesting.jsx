import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";


export default function Testing() {

  const sliderRef = useRef(null)

  const nextSlide = ()=>{
    sliderRef.current.slickNext();
  }
  const prevSlide = ()=>{
    sliderRef.current.slickPrev();
  }



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider ref={sliderRef} {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      <button onClick={nextSlide}>Previous</button>
      <button onClick={prevSlide}>Next</button>
    </div>
    
  );
}

