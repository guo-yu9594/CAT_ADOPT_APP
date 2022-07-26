import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles'
import { red, grey } from '@mui/material/colors';

const favoriteBtnTitle = (details) => {
  if (details.name[details.name.length - 1] === '♥')
    return 'Retirer des favoris';
  else
    return 'Mettre en favoris';
}

const getAdoptButton = (details, actions) => {
  const redTheme = createTheme({ palette: { primary: grey } })

  if (details.status !== 'Adoptable')
    return <Button theme={redTheme} size="small" onClick={() => actions.adoptCat(details)}>Indisponible</Button>
  else
    return <Button size="small" onClick={() => actions.adoptCat(details)}>Adopter</Button>
}

const MediaCard = ({ details, actions }) => {
  const redTheme = createTheme({ palette: { primary: red } })

  return (
    <Card >
      <CardMedia
        component="img"
        width="300px"
        height="400px"
        image={details.photo}
        alt="green iguana"
        display="block"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {details.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Race : {details.race} <br></br>
          Sexe : {details.gender} <br></br>
          Date de naissance : {details.birthdate} ({details.age} ans)<br></br>
          Ville : {details.city} <br></br>
          Status : {details.status} <br></br>
          Description : {details.description} <br></br>
        </Typography>
      </CardContent>
      <CardActions>
        {getAdoptButton(details, actions)}
        <Button theme={redTheme} size="small" onClick={() => actions.placeFavorites(details)}>{favoriteBtnTitle(details)}</Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard