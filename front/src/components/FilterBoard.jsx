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

const createSelects = (filter) => {
  return (filter.map(function (category) {
    return <ItemSelect title={category.title} item={category.items} />
  }));
}

const FilterBoard = ({ filter }) => {
  return (
    <div className="Filter-board">
      <center className="Filter-board-title">Tableau des filtres</center>
      <div>
        <center>
          {createSelects(filter)}
          <Button theme={theme} sx={{ m: 2.5, 'margin-left': 50, }} variant="contained">Actualiser</Button>
          <Button theme={theme} sx={{ m: 2.5, 'margin-left': 10, }} variant="outlined">Remettre par défaut</Button>
        </center>
      </div>
    </div>
  );
};

export default FilterBoard;
