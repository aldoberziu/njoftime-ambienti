import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getApiDomain } from "./config";
import { useEffect, useState } from "react";
import Button from "./components/Button";

const DetailedFeed = () => {
  const [feed, setFeed] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(getApiDomain() + `/feeds/${id}`)
      .then((response) => setFeed(response.data.data));
  }, []);

  if (feed) {
    return (
      <div>
        <div>
          <h1>ID: {feed._id}</h1>
          <h1>Category: {feed.category}</h1>
          <h1>Toilets: {feed.toilet}</h1>
          <h1>Capacity: {feed.capacity} people</h1>
          <h1>City: {feed.city}</h1>
          <h1>Area: {feed.area} m2</h1>
          <h1>Floor: {feed.floor}th</h1>
          <h1>Elevator: {feed.elevator ? "Yes" : "No"}</h1>
          <h1>Structure: {feed.structure}</h1>
          <h1>Price: {feed.price}L</h1>
          <h1>CreatedAt: {(new Date(feed.createdAt)).toString()}</h1>
          <h1>ModifiedAt: {(new Date(feed.modifiedAt)).toString()}</h1>
          <h1>ExpiresAt: {(new Date(feed.expiresAt)).toString()}</h1>
          <h1>Plan: {feed.activePlan}</h1>
          <Button feedId={feed._id}><Link to={`/feeds/${feed._id}/plans`}>Update Plan</Link></Button>
        </div>
        <Link to={"/feeds"}>Go Back</Link>
      </div>
    );
  }
  return (
    <div>
      <h1>Error!</h1>
    </div>
  );
};

export default DetailedFeed;
