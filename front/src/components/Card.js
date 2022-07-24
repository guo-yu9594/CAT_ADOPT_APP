import React from "react";
import "../App.css";

const Card = ({ details }) => (
  <div className="card">
    <img src={details} alt="Logo" />
  </div>
);

export default Card;
