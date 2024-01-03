import "../PriceRange/PriceRange.css";

const FloorRangeAccordion = () => {
  const toggleAccordion = () => {
    const accordionContent = document.querySelector(".floor-content");
    accordionContent.style.display =
      accordionContent.style.display === "block" ? "none" : "block";
  };

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-header" onClick={toggleAccordion}>
          Floor Range
        </div>
        <div className="floor-content">
          <div className="floor-input">
            <div className="field">
              <span>Min</span>
              <input type="number" className="input-min" defaultValue="5" />
            </div>
            <div className="separator">-</div>
            <div className="field">
              <span>Max</span>
              <input type="number" className="input-max" defaultValue="20" />
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
              max="50"
              defaultValue="5"
              step="1"
            />
            <input
              type="range"
              className="range-max"
              min="0"
              max="50"
              defaultValue="20"
              step="1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorRangeAccordion;
