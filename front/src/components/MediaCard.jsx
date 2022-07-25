import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MediaCard = ({ details }) => {
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
          {details.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Adopter</Button>
        <Button size="small">Mettre en Favoris</Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard