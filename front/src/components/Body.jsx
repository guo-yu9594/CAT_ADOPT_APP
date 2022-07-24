import React from "react";
import CardsContainer from "./Card.container";
import MyModal from "./My.modal";
import "../App.css";

const Body = ({ cats, functions }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <CardsContainer cats={cats} handleOpen={handleOpen} handleCardClick={functions.handleCardClick}/>
      <MyModal handleClose={handleClose} open={open}/>
    </div>
  );
};

export default Body;
