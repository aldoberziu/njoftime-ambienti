import { useState } from "react";
import PriceRange from "../PriceRange";
import FloorRange from "../FloorRange";
import "./MoreOptions.css";

const MoreOptions = ({ onToggle }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    onToggle(modal);
  };

  return (
    <div className="modal">
      <div /*onClick={toggleModal}*/ className="overlay"></div>
      <div className="modal-content">
        <div className="dropdown-selectors">
          <select defaultValue={"DEFAULT"} className="sh2">
            <option disabled value="DEFAULT">
              Zgjidh qytetin
            </option>
            <option value="durres">durres</option>
            <option value="shkodra">shkodra</option>
            <option value="berati">berati</option>
            <option value="berati">berati</option>
            <option value="berati">berati</option>
            <option value="berati">berati</option>
          </select>
          <select defaultValue={"DEFAULT"} className="sh2">
            <option disabled value="DEFAULT">
              Zgjidh zonen
            </option>
            <option value="durres">Rruga e Kavajes</option>
            <option value="shkodra">Currila</option>
            <option value="berati">Borsh</option>
          </select>
        </div>
        <div className="range-sliders">
          <PriceRange />
          <FloorRange />
        </div>
        <div className="elevator">
          <label for="elevator">Ashensor: </label>
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
