import FilterEl from "../FilterEl";
import { categories } from "../../Constants";
import "./FilterContainer.css";
import Button from "../Button";
import { useDispatch } from "react-redux";

const FilterContainer = () => {
  const dispatch = useDispatch();

  const resetCategory = () => {
    dispatch({ type: "changeCategory", category: "" });
  };
  return (
    <div className="filter-container">
      <div className="reset-filter" onClick={resetCategory}>
        <Button>Reset Filter</Button>
      </div>
      <div className="filter-categories-container">
        <div className="filter-categories">
          {categories.map((el) => (
            <FilterEl category={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterContainer;
