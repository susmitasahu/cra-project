import React from "react";

import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
//import { UserContext } from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("Header render");
  const onlineStatus = useOnlineStatus();

  // const loggedinUser = useContext(UserContext);

  useEffect(
    () => {
      console.log("useEffect render");
    },
    [btnNameReact]
  );

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
