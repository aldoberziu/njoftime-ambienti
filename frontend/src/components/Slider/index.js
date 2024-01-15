import {
  PortraitCardImg,
  PortraitCardImg2,
  PortraitCardImg3,
  PortraitCardImg4,
} from "../../icons";
import "./Slider.css";
import { useState } from "react";
const Slider = () => {
  const images = [
    PortraitCardImg,
    PortraitCardImg2,
    PortraitCardImg3,
    PortraitCardImg4,
  ];
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === images.length - 1 ? 0 : slide + 1);
  }
  const previousSlide = () => {
    setSlide(slide === 0 ? images.length - 1 : slide - 1);
  }
  return (
    <div className="slider">
      <span className="arrow arrow-left" onClick={previousSlide}>←</span>
      {images.map((image, index) => {
        return <img src={image} key={index} className={slide === index ? "slide" : "slide slide-hidden"}></img>;
      })}
      <span className="arrow arrow-right" onClick={nextSlide}>→</span>
      <span className="indicators">
        {images.map((_, index) => {
          return (
            <span key={index} onMouseEnter={() => setSlide(index)} className={slide === index ? "indicator indicator-active" : "indicator indicator-inactive"}></span>
          );
        })}
      </span>
    </div>
  );
};

export default Slider;
