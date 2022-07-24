import React from "react";
import "../App.css";

const Card = ({ details, onOpen }) => {
  const elements = details.map(function (card) {
    return (
      <div className="card" onClick={onOpen}>
        <img src={card.photo} alt="Logo" />
        {/* <div className="Card-gradient"></div> */}
        <div>{card.name}</div>
      </div>
    );
  });
  return <div className="cards">{elements}</div>;
};

export default Card;
