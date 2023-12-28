import "./PriceRange.css";

const PriceRangeAccordion = () => {
  const toggleAccordion = () => {
    const accordionContent = document.querySelector(".price-content");
    accordionContent.style.display =
      accordionContent.style.display === "block" ? "none" : "block";
  };
  
  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-header" onClick={toggleAccordion}>
          Price Range
        </div>
        <div className="price-content">
          <div className="price-input">
            <div className="field">
              <span>Min</span>
              <input type="number" className="input-min" value="2500" />
            </div>
            <div className="separator">-</div>
            <div className="field">
              <span>Max</span>
              <input type="number" className="input-max" value="7500" />
            </div>
          </div>
          <div className="slider">
            <div className="progress"></div>
          </div>
          <div className="range-input">
            <input
              type="range"
              className="range-min"
              min="0"
              max="10000"
              value="2500"
              step="100"
            />
            <input
              type="range"
              className="range-max"
              min="0"
              max="10000"
              value="7500"
              step="100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeAccordion;
