import React from "react";
import "../App.css";

const Card = ({ details }) => {
  const elements = details.map(function (card) {
    return (
      <div className="card">
        <img src={card.photo} alt="Logo" />
      </div>
    );
  });
  return <div className="cards">{elements}</div>;
};

export default Card;
