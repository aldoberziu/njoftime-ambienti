import { useEffect, useState } from "react";
import PlansContainer from "../PlansContainer/index";
import axios from "axios";
import { getApiDomain } from "../../config";
import { useParams } from "react-router-dom";

const Plans = () => {
  const [plans, setPlans] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(getApiDomain() + `/feeds/${params.id}/plans`)
      .then((response) => setPlans(response.data.data));
  }, []);
  return (
    <div>
      <PlansContainer plans={plans}/>
    </div>
  );
};

export default Plans;
