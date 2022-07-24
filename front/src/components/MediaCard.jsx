import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card >
      <CardMedia
        component="img"
        width="fit-content"
        image="https://cdn.futura-sciences.com/buildsv6/images/wide1920/a/0/f/a0fc73919d_50166390_chaton.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Adopter</Button>
        <Button size="small">Mettre en Favoris</Button>
      </CardActions>
    </Card>
  );
}
