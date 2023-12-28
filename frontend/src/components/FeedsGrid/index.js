import axios from "axios";
import { Link } from "react-router-dom";
import { getApiDomain } from "../../config";
import { useEffect, useState } from "react";
import "./FeedsGrid.css";
import Text from "../Text";
import Slider from "../Slider";
import FavoriteButton from "../Favorite";
import { useSelector } from "react-redux";
import Loader from "../Loader";

const FeedsGrid = () => {
  const searchValue = useSelector((state) => state.searchValue);

  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (searchValue === "" || searchValue === undefined) {
      axios
        .get(getApiDomain() + "/feeds")
        .then((response) => setFeeds(response.data.data));
    } else {
      try {
        axios
          .get(getApiDomain() + `/feeds/search-test/${searchValue}`)
          .then((response) => setFeeds(response?.data?.data));
      } catch (err) {
        console.log(err);
      }
    }
    setLoading(false);
  }, [searchValue]);

  // const addToFavorites = () => {
  //   console.log("add to fav");
  // };

  if (feeds) {
    return (
      <div>
        <div className="display-block-2x">
          {feeds.map((feed) => (
            <div className="single-container" key={feed._id}>
              <div className="image-container">
                <Slider className="slider" />
              </div>
              <Link to={`/feeds/${feed._id}`}>
                <div className="specifics-container">
                  <Text ui1 className={"title"}>
                    {feed.location?.zone ? `${feed.location.zone}, ` : ""}
                    {feed.location.city}{" "}
                  </Text>
                  <Text ui3>
                    Ambienti: {feed.structure} / {feed.furnishing}
                  </Text>
                  <Text ui3>Sipërfaqja: {feed.area} m2</Text>
                  <Text ui3>
                    Kati: {feed.floor}, Ashensor: {feed.elevator ? "Po" : "Jo"}
                  </Text>
                  <div className="bottom-container">
                    <Text ui1>
                      <strong>${feed.price}</strong>/muaj
                    </Text>
                    <FavoriteButton feedId={feed._id} />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>No feeds found!</h1>
    </div>
  );
};

export default FeedsGrid;
