import { useEffect, useState } from "react";
import PriceRange from "../PriceRange";
import FloorRange from "../FloorRange";
import "./MoreOptions.css";
import { cities, zones } from "../../Constants";

const MoreOptions = ({ onToggle }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    onToggle(modal);
  };
  const [selectedCity, setSelectedCity] = useState("DEFAULT");

  const handleOptionChange = (e) => {
    const selectedElement = e.target.value;
    setSelectedCity(selectedElement);
  };

  return (
    <div className="modal">
      <div /*onClick={toggleModal}*/ className="overlay"></div>
      <div className="modal-content">
        <div className="dropdown-selectors">
          <select defaultValue={selectedCity} className="sh2" onChange={handleOptionChange}>
            <option disabled value="DEFAULT">
              Zgjidh qytetin
            </option>
            {cities.map((el) => (
              <option value={el._id}>{el.city}</option>
            ))}
          </select>
          <select defaultValue={"DEFAULT"} className="sh2">
            <option disabled value="DEFAULT">
              Zgjidh zonen
            </option>
            {zones.map((el) => {
              if (el.cityId === selectedCity) {
                return <option value={el._id}>{el.zone}</option>;
              }
            })}
          </select>
        </div>
        <div className="range-sliders">
          <PriceRange />
          <FloorRange />
        </div>
        <div className="elevator">
          <label htmlFor="elevator">Ashensor: </label>
          <input type="checkbox" id="elevator" name="elevator" value={true} />
        </div>
        <div className="dropdown-selectors">
          <select defaultValue={"DEFAULT"} className="sh2">
            <option disabled value="DEFAULT">
              Struktura
            </option>
            <option value="durres">durres</option>
            <option value="shkodra">shkodra</option>
            <option value="berati">berati</option>
          </select>
        </div>
        <button className="close-modal" onClick={toggleModal}>
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default MoreOptions;
