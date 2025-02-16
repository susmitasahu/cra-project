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
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


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
   <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
         <div className="app">
        <Header />
        <Outlet />
        </div>
      </UserContext.Provider>
      </Provider>
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
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
    errorElement: <Error />
  }
]);

const AppWithRouter = () => <RouterProvider router={appRouter} />;

export default AppWithRouter;
