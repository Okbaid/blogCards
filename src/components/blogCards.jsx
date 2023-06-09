import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function BlogCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={props.blog.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.blog.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className='click-text'>
          {props.blog.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="blog">
          <Button size="small">Learn More</Button>
        </Link>
        
      </CardActions>
    </Card>
  );
}