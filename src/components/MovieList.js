import React  from 'react';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatingComponent from 'react-star-rating-component';
 


 const MovieList = (props) =>{
 
     return(
         <div className="movie-card">
          
          { props.movies.map((movie,index) =><Card style={{ width: '15rem',height:425}} key={index}>
           <Card.Img  src={movie.posteUrl}  style={{height:'17rem'}}/>
           <Card.Body>
            <Card.Text >{movie.title}</Card.Text>
            <Card.Text>{movie.description}</Card.Text>
            <StarRatingComponent value={movie.rate}  name="rate" />
          </Card.Body> 
          </Card>
          )}
          </div>

     )
 }
 export default MovieList;