import axios from "axios";
import { getApiDomain } from "../../config";
import { useEffect } from "react";
import { useSessionContext } from "supertokens-auth-react/recipe/session";

const SaveUser = () => {
  const sessionContext = useSessionContext();
  useEffect(() => {
    async function getUserInSession() {
      let userInSession = await axios.get(
        getApiDomain() + `/users/${sessionContext.userId}`
      );
      if (userInSession.data.user === null) {
        await axios.post(getApiDomain() + "/users");
      } else {
        return null
      }
    }
    getUserInSession();
  }, []);
};

export default SaveUser;
