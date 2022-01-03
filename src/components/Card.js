import React from "react";

const Card = ({ img, header, text }) => {
  return (
    <div className="card">
      <img src={img} className="card-image" alt="no image" />
      <div className="text">
        <h2 >{header}</h2>
        <h4 className="">{text}</h4>
      </div>
    </div>
  );
};

export default Card;
