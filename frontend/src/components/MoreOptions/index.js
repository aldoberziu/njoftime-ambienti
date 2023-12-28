import { useState } from "react";
import "./MoreOptions.css";

const MoreOptions = ({onToggle}) => {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    onToggle(modal);
  }

  return (
    <div className="modal">
      <div /*onClick={toggleModal}*/ className="overlay"></div>
      <div className="modal-content">
        <select size="3">
            <option value="tirana">tirana</option>
            <option value="durres">durres</option>
            <option value="shkodra">shkodra</option>
            <option value="berati">berati</option>
        </select>
        <button className="close-modal" onClick={toggleModal}>CLOSE</button>
      </div>
    </div>
  );
};

export default MoreOptions;
