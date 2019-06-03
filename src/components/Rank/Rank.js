import React from "react";
import "./Rank.css";

const Rank = props => {
  const { name, entries } = props.userInfo;

  return (
    <div className="rank">
      <div>{`${name.charAt(0).toUpperCase() +
        name.slice(1)} you detected ${entries} images`}</div>
    </div>
  );
};

export default Rank;
