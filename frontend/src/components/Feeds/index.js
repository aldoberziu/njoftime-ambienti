import { useState } from "react";
import FeedsGrid from "../FeedsGrid/index";
import FeedsSlider from "../FeedsSlider/index";
import FilterContainer from "../FilterContainer";

const Feeds = () => {
    return ( 
        <div style={{padding: '40px'}}>
            <FilterContainer/>
            <FeedsSlider/>
            <FeedsGrid />
        </div>
     );
}
 
export default Feeds;