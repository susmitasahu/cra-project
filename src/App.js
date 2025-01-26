import React, { lazy } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import { About } from "./components/About";
import Body from "./components/Body";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";
import Header from "./components/Header";
import "./index.css";
import ResturantMenu from "./components/ResturantMenu";
//import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
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
