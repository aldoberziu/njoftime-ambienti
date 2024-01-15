import Button from "../Button";
import Text from "../Text";
import { SearchIcon } from "../../icons";
import "./SearchBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { DownArrowTriangle } from "../../icons";
import MoreOptions from "../MoreOptions";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (searchValue) => {
    dispatch({ type: "searchValue", searchValue: searchValue });
  };

  window.onload = SubmitOnEnter;

  function SubmitOnEnter() {
    var input = document.getElementById("search-input-field");
    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("search-button").click();
      }
    });
  }
  const getModalState = (data) => {
    setModal(data);
  };
  const showModal = () => {
    setModal(true);
  };

  return (
    <>
      <div className="search-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Kërko më shumë..."
            className="search-input"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            id="search-input-field"
          />
          <Button onClick={() => handleSubmit(searchValue)} id="search-button">
            <Text sh2>
              Search <img src={SearchIcon} />
            </Text>
          </Button>
        </div>
        <div className="more-options">
          <Button onClick={showModal}>
            <Text sh2>
              Me shume opsione <img src={DownArrowTriangle} />
            </Text>
          </Button>
        </div>
      </div>
        {modal && <MoreOptions onToggle={getModalState} />}
    </>
  );
};

export default Search;
