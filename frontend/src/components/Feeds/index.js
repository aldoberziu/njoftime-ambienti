import { useState } from "react";
import FeedsGrid from "../FeedsGrid/index";
import FeedsSlider from "../FeedsSlider/index";
import FilterContainer from "../FilterContainer";
import Banner from "../HomeBanner";

const Feeds = () => {
  return (
    <>
      <Banner />
      <div style={{ padding: "40px" }}>
        <FilterContainer />
        <FeedsSlider />
        <FeedsGrid />
      </div>
    </>
  );
};

export default Feeds;
