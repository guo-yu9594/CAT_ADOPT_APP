import React from "react";
import CardsContainer from "./Card.container";
import MyModal from "./MyModal";
import "../App.css";

const Body = ({ state, functions }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <CardsContainer cats={state.cats} handleOpen={handleOpen} handleCardClick={functions.handleCardClick} />
      <MyModal handleClose={handleClose} open={open} state={state} actions={{
        adoptCat: functions.adoptCat,
        placeFavorites: functions.placeFavorites
      }} /> 
    </div>
  );
};

export default Body;
