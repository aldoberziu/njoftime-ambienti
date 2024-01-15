"use client";
import "./PlansContainer.css";
import Button from "../Button/index";
import Text from "../Text";
import { Checked } from "../../icons";
import { useParams } from "react-router-dom";
import { getApiDomain } from "../../config";
import axios from "axios";
import { useState, useEffect } from "react";

const PlansContainer = (props) => {
  let plans = props.plans;
  const [feedPlan, setFeedPlan] = useState([]);
  const params = useParams();
  const updatePlan = async (id) => {
    await axios.patch(getApiDomain() + `/feeds/${params.id}/plans`, {
      activePlan: id,
    });
  };
  useEffect(() => {
    axios
      .get(getApiDomain() + `/feeds/${params.id}`)
      .then((response) => setFeedPlan(response.data.data.activePlan));
    console.log('useeffect ran!');
  });
  return (
    <div className="plans-container">
      {plans.map((plan, index) => (
        <div className="plan-card-container" index={index + 1} key={index}>
          <Text h2 className={"title"}>
            {plan.title}
          </Text>
          <Text sh1 className={"price"}>
            {plan.price}
          </Text>
          {index + 1 === parseInt(feedPlan)
          ? <Button disabled className="posto-njoftimin">Plani Aktual</Button>
          : <Button className="posto-njoftimin" onClick={() => updatePlan(plan._id)}>Posto Njoftimin</Button>
          }
          {plan.items.map((el) => (
            <div className="items">
              <img src={Checked} />
              <Text ui2>{el}</Text>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PlansContainer;
