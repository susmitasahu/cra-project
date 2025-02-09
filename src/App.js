import React, { lazy, useEffect, useState} from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import { About } from "./components/About";
import Body from "./components/Body";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";
import Header from "./components/Header";
import "./index.css";
import ResturantMenu from "./components/ResturantMenu";
import UserContext from "./utils/UserContext";
//import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  //authentication
  const[userName,setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Susmita",
    }
    setUserName(data.name);
  },[])

  return (
    <div className="app">
      <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:resId",
        element: <ResturantMenu />
      },
      {
        path: "/grocery",
        element: <Grocery />
      }
    ],
    errorElement: <Error />
  }
]);

const AppWithRouter = () => <RouterProvider router={appRouter} />;

export default AppWithRouter;
