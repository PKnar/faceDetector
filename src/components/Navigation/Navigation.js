import React from "react";
import "./Navigation.css";
const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav>
        <p id="signout" onClick={() => onRouteChange("signout")}>
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav>
        <p id="signout" onClick={() => onRouteChange("signin")}>
          Sign In
        </p>
        <p id="signout" onClick={() => onRouteChange("register")}>
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
