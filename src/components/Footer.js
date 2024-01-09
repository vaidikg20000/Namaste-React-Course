import { useContext } from "react";
import UserContext from "../../utils/userContext";

const Footer = () => {
  const {user} = useContext(UserContext);
  return (
    <div>
      <h1>This site is developed by {user.name}</h1>

    </div>
  );
};

export default Footer;
