import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "../App.css";


const ItemSelect = ({ title, item }) => {
  const [age, setAge] = React.useState('');

  const convertItem = (items) => {
    const elements = items.map(function (item) {
      return (
        <MenuItem value={item}>{item}</MenuItem>
      );
    });
    return elements;
  }

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl variant="standard" sx={{ m: 1.5, minWidth: 150, 'margin-left': 40, 'margin-right': 40 }}>
      <InputLabel id="demo-simple-select-standard-label">{title}</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={age}
        onChange={handleChange}
        label={title}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {convertItem(item)}
      </Select>
    </FormControl>
  );
};

export default ItemSelect;
