import { useState } from "react";

export const Title = () => (
    <a href="/">
      <img
        className="logo"
        src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
        alt="logo"
      />
    </a>
  );
//Functional Component
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
      <div className="header">
        {/* {Title()} */}
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
          </ul>
        </div>
        {isLoggedIn ? (<button onClick={() => setIsLoggedIn(false)}>Login</button>) : (<button onClick={() => setIsLoggedIn(true)}>Logout</button>)}
      </div>
    );
  };
  export default Header;