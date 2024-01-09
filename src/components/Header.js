import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../utils/userContext";

export const Title = () => (
  <a href="/">
    <img
      className="h-28"
      src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
      alt="logo"
    />
  </a>
);
//Functional Component
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const {user} = useContext(UserContext);
  return (
    <div className="flex justify-between">
      {/* {Title()} */}
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>

          <li className="px-2">
            <Link to="/about">About</Link>
          </li>

          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      <h1 className="p-10 font-bold text-red-900">{user.name}</h1>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Login</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Logout</button>
      )}
    </div>
  );
};
export default Header;
