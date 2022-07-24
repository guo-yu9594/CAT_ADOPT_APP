import React from "react";
import "../App.css";
import Card from "./Card";

const nbCols = 5;

const getCatsCol = (cats) => {
  var i = 0;
  var arr = [[], [], [], [], []];

  for (var j = 0; j < cats.length; ++j, ++i) {
    if (i === nbCols)
      i = 0;
    arr[i].push(cats[j]);
  }
  return arr;
};

const CardsContainer = ({ cats }) => {
  if (cats.length <= 0) return <div></div>;
  console.log("gegege");

  const catArray2d = getCatsCol(cats);
  const cardCols = catArray2d.map(function (col) {
    return <Card details={col} />;
  });

  return (
    <div className="Cards-container">
      {cardCols}
      {/* <Card details={arr1} />
      <Card details={arr2} />
      <Card details={arr3} />
      <Card details={arr4} />
      <Card details={arr5} /> */}
    </div>
  );
};

export default CardsContainer;
