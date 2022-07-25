import React from "react";
import ItemSelect from "./ItemSelect"
import { grey } from '@mui/material/colors'
import Button from '@mui/material/Button';
import "../App.css";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: grey[50],
    },
  },
});

const FilterBoard = () => {
  return (
    <div className="Filter-board">
      <center className="Filter-board-title">Tableau de filtre</center>
      <div>
        <center>
          <ItemSelect title={"bruf"} item={[10, 20, 30, 40, 50]} />
          <ItemSelect title={"bruf"} item={[10, 20, 30, 40, 50]} />
          <ItemSelect title={"bruf"} item={[10, 20, 30, 40, 50]} />
          <ItemSelect title={"bruf"} item={[10, 20, 30, 40, 50]} />
          <ItemSelect title={"bruf"} item={[10, 20, 30, 40, 50]} />
          <Button theme={theme} sx={{ m: 2.5, 'margin-left': 50, }} variant="contained">Actualiser</Button>
          <Button theme={theme} sx={{ m: 2.5, 'margin-left': 10, }} variant="outlined">Remettre par défaut</Button>
        </center>
      </div>
    </div>
  );
};

export default FilterBoard;
