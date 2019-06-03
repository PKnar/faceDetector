import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="form">
      <p>
        {`This magic brain will detect faces, and your pictures.Give it a try!`}
      </p>
      <div className="input-div">
        <input type="text" onChange={onInputChange} />
        <button onClick={onButtonSubmit}>Detect </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
