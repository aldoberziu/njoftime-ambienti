import axios from "axios";
import { Link } from "react-router-dom";
import { getApiDomain } from "../../config";
import { useEffect, useState } from "react";
import "./FeedsSlider.css";
import Text from "../Text";
import { EmptyHeart } from "../../icons";
import Slider from "../Slider";
import { useSelector } from "react-redux";
import Loader from "../Loader";
import FavoriteButton from "../Favorite";

const FeedsSlider = () => {
  const sCategory = useSelector((state) => state.category);

  const [feeds, setFeeds] = useState([]);
  const [filter, setFilter] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sCategory === "") {
      axios
        .get(getApiDomain() + "/feeds")
        .then((response) => setFeeds(response.data.data));
      setTimeout(() => {
        setLoading(false);
      }, 0);
      setFilter(false);
    }
  }, [sCategory]);

  const filterFeeds = async () => {
    if (sCategory !== "") {
      setLoading(true);
      await axios
        .get(getApiDomain() + `/feeds?category=${sCategory}`)
        .then((response) => setFeeds(response?.data?.data));
      setFilter(true)
    }
  };

  useEffect(() => {
    filterFeeds().then(() =>
      setTimeout(() => {
        setLoading(false);
      }, 0)
    );
  }, [sCategory]);

  // useEffect(() => {
  //   if (sCategory === "") {
  //     axios
  //       .get(getApiDomain() + "/feeds")
  //       .then((response) => setFeeds(response.data.data));
  //   } else {
  //     axios
  //       .get(getApiDomain() + `/feeds?category=${sCategory}`)
  //       .then((response) => setFeeds(response?.data?.data));
  //   }
  // }, [sCategory]);

  if (loading) {
    return <Loader />;
  } else if (feeds.length === 0 && loading === false) {
    //skam dizajn per ket
    return (
      <div className="center-el">
        <Text sh2>Nuk u gjet asnjë rezultat.</Text>
      </div>
    );
  }

  if (feeds) {
    return (
      <div>
        {filter && loading === false && (
          <div className="center-el">
            <Text sh2>
              U gjet{feeds.length === 1 ? "" : "ën"} {feeds.length} rezultat
              {feeds.length === 1 ? "" : "e"}.
            </Text>
          </div>
        )}
        <div className="display-flex">
          {feeds.map((feed) => (
            <div className="portrait-single-container" key={feed._id}>
              <div className="portrait-image-container">
                <Slider className="slider" />
              </div>
              <Link to={`/feeds/${feed._id}`}>
                <div className="portrait-specifics-container">
                  <Text ui1 className={"title"}>
                    {feed.city}, Albania
                  </Text>
                  <Text ui3>
                    Ambienti: {feed.rooms} + {feed.toilet}{" "}
                    {feed.garage ? "+ Garazh" : ""} / {feed.furnishing}
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

export default FeedsSlider;
