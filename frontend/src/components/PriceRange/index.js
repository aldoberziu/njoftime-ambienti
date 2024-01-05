// import { useState, useEffect } from "react";
// import Text from "../Text";
// import { UpArrow, DownArrow } from "../../icons";
// import "./PriceRange.css";

// const PriceRangeAccordion = () => {
//   const [accordion, setAccordion] = useState(false);
//   const [minValue, setMinValue] = useState(2500);
//   const [maxValue, setMaxValue] = useState(7500);
//   const toggleAccordion = () => {
//     const accordionContent = document.querySelector(".price-content");
//     setAccordion(!accordion);
//     accordionContent.style.display = accordionContent.style.display === "block" ? "none" : "block";
//   };

//   useEffect(() => {
//     const rangeInput = document.querySelectorAll(".range-input input"),
//       priceInput = document.querySelectorAll(".price-input input"),
//       range = document.querySelector(".slider .progress");
//     let priceGap = 500;

//     priceInput.forEach((input) => {
//       input.addEventListener("input", (e) => {
//         let minPrice = parseInt(priceInput[0].value),
//           maxPrice = parseInt(priceInput[1].value);
//         if (maxPrice - minPrice >= priceGap && maxValue <= rangeInput[1].max) {
//           if (e.target.className === "input-min") {
//             setMinValue(minPrice);
//             range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
//           } else {
//             setMaxValue(maxPrice);
//             range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
//           }
//         }
//       });
//     });
//     rangeInput.forEach((input) => {
//       input.addEventListener("input", (e) => {
//         let minVal = parseInt(rangeInput[0].value),
//           maxVal = parseInt(rangeInput[1].value);
//         if (maxVal - minVal < priceGap) {
//           if (e.target.className === "range-min") {
//             setMinValue(maxVal - priceGap);
//           } else {
//             setMaxValue(minVal + priceGap);
//           }
//         } else {
//           setMinValue(minVal);
//           setMaxValue(maxVal);
//           priceInput[0].value = minValue;
//           priceInput[1].value = maxValue;
//           range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
//           range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
//         }
//       });
//     });
//   }, [minValue, maxValue]);

//   return (
//     <div className="accordion">
//       <div className="accordion-item">
//         <div className="accordion-header" onClick={toggleAccordion}>
//           <Text sh3>Price Range</Text>
//           <div className="toggle-icon">
//             <img src={accordion ? UpArrow : DownArrow} />
//           </div>
//         </div>
//         <div className="price-content">
//           <div className="price-input">
//             <div className="field">
//               <input
//                 type="number"
//                 min="0"
//                 max="10000"
//                 className="input-min"
//                 defaultValue={minValue}
//               />
//             </div>
//             <div className="separator">-</div>
//             <div className="field">
//               <input
//                 type="number"
//                 min="0"
//                 max="10000"
//                 className="input-max"
//                 defaultValue={maxValue}
//               />
//             </div>
//           </div>
//           <div className="slider">
//             <div className="progress" />
//           </div>
//           <div className="range-input">
//             <input
//               type="range"
//               className="range-min"
//               min={0}
//               max={10000}
//               defaultValue={minValue}
//               step={100}
//             />
//             <input
//               type="range"
//               className="range-max"
//               min={0}
//               max={10000}
//               defaultValue={maxValue}
//               step={100}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PriceRangeAccordion;

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
    accordionContent.style.display = accordionContent.style.display === "block" ? "none" : "block";
  };

  useEffect(() => {
    const rangeValueMin = document.getElementById("price-range-value-min"),
      rangeMin = document.getElementById("rangeMin"),
      setTheMinValue = () => {
        const newValue = Number(
            ((rangeValueMin.value - rangeValueMin.min) * 100) /
              (rangeValueMin.max - rangeValueMin.min)
          ),
          newPosition = 10 - newValue * 0.2;
        rangeMin.innerHTML = `<span>${rangeValueMin.value}</span>`;
        rangeMin.style.left = `calc(${newValue}% + (${newPosition}px))`;
        setMinValue(rangeValueMin.value);
      };
    document.addEventListener("DOMContentLoaded", setTheMinValue);
    rangeValueMin.addEventListener("input", setTheMinValue);
  }, [minValue]);
  useEffect(() => {
    const rangeValueMax = document.getElementById("price-range-value-max"),
      rangeMax = document.getElementById("rangeMax"),
      setTheMaxValue = () => {
        const newValue = Number(
            ((rangeValueMax.value - rangeValueMax.min) * 100) /
              (rangeValueMax.max - rangeValueMax.min)
          ),
          newPosition = 10 - newValue * 0.2;
        rangeMax.innerHTML = `<span>${rangeValueMax.value}</span>`;
        rangeMax.style.left = `calc(${newValue}% + (${newPosition}px))`;
        setMaxValue(rangeValueMax.value);
      };
    document.addEventListener("DOMContentLoaded", setTheMaxValue);
    rangeValueMax.addEventListener("input", setTheMaxValue);
  }, [maxValue]);
  useEffect(() => {
    const rangeInput = document.querySelectorAll(".range-input input"),
      range = document.querySelector(".slider .progress");
    let priceGap = 1000;

    rangeInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        let minVal = parseInt(rangeInput[0].value),
          maxVal = parseInt(rangeInput[1].value);
        if (maxVal - minVal < priceGap) {
          if (e.target.className === "range-min") {
            rangeInput[0].value = maxVal - priceGap;
          } else {
            rangeInput[1].value = minVal + priceGap;
          }
        } else {
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
          <div className="slider">
            <div className="progress" />
          </div>
          <div className="range-input">
            <div id="range-input-container">
              <div class="range-value" id="rangeMin"></div>
              <input
                type="range"
                id="price-range-value-min"
                className="range-min"
                min={0}
                max={10000}
                defaultValue={minValue}
                step={100}
              />
            </div>
            <div id="range-input-container">
              <div class="range-value" id="rangeMax"></div>
              <input
                type="range"
                id="price-range-value-max"
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
    </div>
  );
};

export default PriceRangeAccordion;
