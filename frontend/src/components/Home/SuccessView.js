import { useNavigate } from "react-router-dom";
import { signOut } from "supertokens-auth-react/recipe/session";
import {
  BlogsIcon,
  CelebrateIcon,
  GuideIcon,
  SeparatorLine,
  SignOutIcon,
} from "../../assets/images";
import SaveUser from "./SaveUser";

export default function SuccessView(props) {
  let userId = props.userId;

  const navigate = useNavigate();

  async function logoutClicked() {
    await signOut();
    navigate("/auth");
  }
  function feedsRedirect() {
    navigate("/feeds");
  }
  function plansRedirect() {
    navigate("/plans");
  }
  const links = [
    {
      name: "Feeds",
      onClick: feedsRedirect,
      icon: BlogsIcon,
    },
    {
      name: "Plans",
      onClick: plansRedirect,
      icon: GuideIcon,
    },
    {
      name: "Sign Out",
      onClick: logoutClicked,
      icon: SignOutIcon,
    },
  ];

  return (
    <>
      <SaveUser />
      <div className="main-container">
        <div className="top-band success-title bold-500">
          <img
            src={CelebrateIcon}
            alt="Login successful"
            className="success-icon"
          />{" "}
          Login successful
        </div>
        <div className="inner-content">
          <div>Your userID is:</div>
          <div className="truncate" id="user-id">
            {userId}
          </div>
        </div>
      </div>
      <div className="bottom-links-container">
        {links.map((link) => (
          <div className="link" key={link.name}>
            <img className="link-icon" src={link.icon} alt={link.name} />
            <div role={"button"} onClick={link.onClick}>
              {link.name}
            </div>
          </div>
        ))}
      </div>
      <img className="separator-line" src={SeparatorLine} alt="separator" />
    </>
  );
}
