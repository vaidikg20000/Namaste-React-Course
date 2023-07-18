import React from "react";
import ReactDOM from "react-dom/client";
//Defaut import
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// Named import
import {IMG_CDN_LINK} from "./constants";

/**
 * Header
 *  -Logo
 *  -Nav Items
 *  -Cart
 * Body
 *  -Search Bar
 *  -Restaurants List
 *    -Restaurant Card
 *      -Image
 *      -Ratings
 *      -Name
 *      -Cusinies
 * Footer
 * -Links
 * -Copyright
 */

//React element
const heading = <h1>namaste JS</h1>;







const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
