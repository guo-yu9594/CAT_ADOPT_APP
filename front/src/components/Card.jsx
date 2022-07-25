import React from "react";
import "../App.css";

const Card = ({ details, handleCardClick }) => {
  const elements = details.map(function (card) {
    return (
      <div className="Card-scope">
        <div className="card" onClick={() => { handleCardClick(card) }}>
          <img src={card.photo} alt="Logo" />
        </div>
        <center className="Card-name">{card.name}</center>
      </div>
    );
  });
  return <div className="cards">{elements}</div>;
};

export default Card;
