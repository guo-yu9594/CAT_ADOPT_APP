import React from "react";
import "../App.css";
import Card from "./Card";

const nbCols = 5;

const getCatsCol = (cats) => {
  var i = 0;
  var arr = [[], [], [], [], []];

  for (var j = 0; j < cats.length; ++j, ++i) {
    if (i === nbCols) i = 0;
    arr[i].push(cats[j]);
  }
  return arr;
};

const CardsContainer = ({ cats, handleOpen }) => {
  if (cats.length <= 0) return <div></div>;

  const catArray2d = getCatsCol(cats);
  const cardCols = catArray2d.map(function (col) {
    return <Card details={col} />;
  });

  return <div className="Cards-container" onClick={handleOpen}>{cardCols}</div>;
};

export default CardsContainer;
