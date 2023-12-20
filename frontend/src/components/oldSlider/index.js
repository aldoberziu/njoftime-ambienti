import HeroSlider, { Slide } from "hero-slider";
import {
  PortraitCardImg,
  PortraitCardImg2,
  PortraitCardImg3,
  PortraitCardImg4,
} from "../../icons";
import "./Slider.css";
import { useEffect, useState } from "react";

const Slider = () => {
  const images = [
    PortraitCardImg,
    PortraitCardImg2,
    PortraitCardImg3,
    PortraitCardImg4,
  ];
  // const indexes = images.map((el, index) => index);
  const [sliderIndex, setSliderIndex] = useState(0);
  return (
    <div className="slider-container">
      <HeroSlider
        sliderAnimation="fade"
        orientation="horizontal"
        initialSlide={1}
        onBeforeChange={(previousSlide, nextSlide) =>
          console.log("onBeforeChange", previousSlide, nextSlide)
        }
        onChange={(nextSlide) => console.log("onChange", nextSlide)}
        onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
        style={{
          maxHeight: "135px",
        }}
        settings={{
          slidingDuration: 250,
          slidingDelay: 100,
          shouldAutoplay: true,
          shouldDisplayButtons: false,
          autoplayDuration: 5000,
        }}
      >
        {images.map((image, index) => (
          <Slide
            background={{
              backgroundImageSrc: image,
              backgroundAttachment: "fixed",
            }}
          >
            <p value={index}></p>
          </Slide>
        ))}
      </HeroSlider>
      <div className="slider-bullets">
        <ul className="slider-bullets-list" style={{ listStyleType: "disc" }}>
          {images.map((image, index) => (
            <li>{sliderIndex === index ? 'Match' : 'no match'}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slider;
