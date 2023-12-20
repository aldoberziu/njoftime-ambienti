// import FilterEl from "../FilterEl";
// import { categories } from "../../Constants";
// import "./FilterContainer.css";
// import { getApiDomain } from "../../config";
// import axios from "axios";
// import { useState } from "react";

// const FilterContainer = () => {
//   const [filteredFeeds, setFilteredFeeds] = useState([])
//   const getCategory = async (category) => {
//     axios.get(
//       getApiDomain() + `/feeds/filter-test?category=${category}`
//     ).then((response) => setFilteredFeeds(response));
//     console.log('filteredFeeds',filteredFeeds)
//     //kte sdo e lesh ktu por do e cosh most likely te Feeds pastaj
//     //kaloje nga Feeds te FeedsSlider dmth nga parent to child me propsa puq
//   };
//   return (
//     <div className="filter-container">
//       <div className="filter-categories">
//         {categories.map((el) => (
//           <FilterEl category={el} getCategory={getCategory} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FilterContainer;

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
