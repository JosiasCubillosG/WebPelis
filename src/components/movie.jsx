import React from "react";
import "./styles/movies.css";

const Movie = (props) => {
    return(
        <div className="movie-container">
            <div className="movie"  key={props.movieData.id}>
                {console.log(props)}
                <h3>{props.movieData.title}</h3>
                <p>Director: {props.movieData.director}</p>
                <p>Age: {props.movieData.release_date}</p>
                <p>Score: {props.movieData.rt_score}</p>
            </div>
        </div>
    );
}


export default Movie;