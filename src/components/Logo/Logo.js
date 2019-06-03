import React from "react";
import "./Logo.css";
import Tilt from "react-tilt";
import brain from "../../brain.png";

const Logo = () => {
  return (
    <div>
      <Tilt
        className="Tilt"
        options={{ max: 55 }}
        style={{ height: 100, width: 100 }}
      >
        <div className="Tilt-inner">
          <img className="logo" alt="logo" src={brain} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
