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
    return <ItemSelect category={category} />
  }));
}

const resetFilterTarget = (filter, applyFilter) => {
  for (var i = 0; i < filter.length; ++i) {
    filter[i].target = "";
  }
  applyFilter();
}

const FilterBoard = ({ filter, applyFilter }) => {
  return (
    <div className="Filter-board">
      <center className="Filter-board-title">Tableau des filtres</center>
      <div>
        <center>
          {createSelects(filter)}
          <Button theme={theme} sx={{ m: 2.5, 'margin-left': 50, }} variant="contained" onClick={applyFilter}>Actualiser</Button>
          <Button theme={theme} sx={{ m: 2.5, 'margin-left': 10, }} variant="outlined" onClick={() => resetFilterTarget(filter, applyFilter)}>Réinitialiser</Button>
        </center>
      </div>
    </div>
  );
};

export default FilterBoard;
