import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Error from "./components/Error";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/ProfileClass";
import New from "./components/New";
import Shimmer from "./components/Shimmer";
import UserContext from "../utils/userContext";
// import Instamart from "./components/Instamart";

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "vaidik",
    email: "v@gmail.com",
  });

  return (
    <>
      <UserContext.Provider value={{ user: user, setUser:setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </>
  );
};

const InstaMart = lazy(() => import("./components/Mart"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body user={{ name: "Namaste" }} />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
        children: [
          {
            path: "new",
            element: <New />,
          },
        ],
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
