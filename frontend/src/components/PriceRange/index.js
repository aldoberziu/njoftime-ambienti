import { useState, useEffect } from "react";
import Text from "../Text";
import { UpArrow, DownArrow } from "../../icons";
import "./PriceRange.css";

const PriceRangeAccordion = () => {
  const [accordion, setAccordion] = useState(false);
  const [minValue, setMinValue] = useState(2500);
  const [maxValue, setMaxValue] = useState(7500);
  const toggleAccordion = () => {
    const accordionContent = document.querySelector(".price-content");
    setAccordion(!accordion);
    accordionContent.style.display =
      accordionContent.style.display === "block" ? "none" : "block";
  };

  useEffect(() => {
    const rangeInput = document.querySelectorAll(".range-input input"),
      priceInput = document.querySelectorAll(".price-input input"),
      range = document.querySelector(".slider .progress");
    let priceGap = 1000;

    priceInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        let minPrice = parseInt(priceInput[0].value),
          maxPrice = parseInt(priceInput[1].value);
        if (maxPrice - minPrice >= priceGap && maxValue <= rangeInput[1].max) {
          if (e.target.className === "input-min") {
            setMinValue(minPrice);
            range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
          } else {
            setMaxValue(maxPrice);
            range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
          }
        }
      });
    });
    rangeInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        let minVal = parseInt(rangeInput[0].value),
          maxVal = parseInt(rangeInput[1].value);
        if (maxVal - minVal < priceGap) {
          if (e.target.className === "range-min") {
            setMinValue(maxVal - priceGap);
          } else {
            setMaxValue(minVal + priceGap);
          }
        } else {
          setMinValue(minVal);
          setMaxValue(maxVal);
          priceInput[0].value = minValue;
          priceInput[1].value = maxValue;
          range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
          range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
      });
    });
  }, [minValue, maxValue]);

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-header" onClick={toggleAccordion}>
          <Text sh3>Price Range</Text>
          <div className="toggle-icon">
            <img src={accordion ? UpArrow : DownArrow} />
          </div>
        </div>
        <div className="price-content">
          <div className="price-input">
            <div className="field">
              <span>Min</span>
              <input
                type="number"
                className="input-min"
                defaultValue={minValue}
              />
            </div>
            <div className="separator">-</div>
            <div className="field">
              <span>Max</span>
              <input
                type="number"
                className="input-max"
                defaultValue={maxValue}
              />
            </div>
          </div>
          <div className="slider">
            <div className="progress" />
          </div>
          <div className="range-input">
            <input
              type="range"
              className="range-min"
              min={0}
              max={10000}
              defaultValue={minValue}
              step={100}
            />
            <input
              type="range"
              className="range-max"
              min={0}
              max={10000}
              defaultValue={maxValue}
              step={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeAccordion;

// import { useEffect, useState } from "react";
// import './Rating.css';

// function Rating() {
//   // 😔🙂😆🤣😉😊😇🥰😋🤑
//   const [data, setData] = useState(0);
//   const [emoji, setEmoji] = useState("");
//   useEffect(() => {
//     if (data == 0) {
//       setEmoji("😔");
//     } else if (data == 10) {
//       setEmoji("🙂");
//     } else if (data == 20) {
//       setEmoji("😆");
//     } else if (data == 30) {
//       setEmoji("🤣");
//     } else if (data == 40) {
//       setEmoji("😉");
//     } else if (data == 50) {
//       setEmoji("😊");
//     } else if (data == 60) {
//       setEmoji("😇");
//     } else if (data == 70) {
//       setEmoji("🥰");
//     } else if (data == 80) {
//       setEmoji("🤩");
//     } else if (data == 90) {
//       setEmoji("😋");
//     } else if (data == 100) {
//       setEmoji("🤑");
//     }
//   }, [data]);
//   return (
//     <div>
//       <h1>{emoji}</h1>
//       <input
//         className={data > 50 ? "heigh" : "less"}
//         type="range"
//         min="0"
//         max="100"
//         step="1"
//         value={data}
//         onChange={(e) => setData(e.target.value)}
//       />
//       <h1>{data}</h1>
//     </div>
//   );
// }
// export default Rating;
