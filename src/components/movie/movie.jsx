import React from "react";
import "./movie.css";

const Movie = (props) => {
    return(
        <div onClick={props.handleClick} className="movie" >
            <h3>{props.movieData.title}</h3>
            <p>Director: {props.movieData.director}</p>
            <p>Age: {props.movieData.release_date}</p>
            <p>Score: {props.movieData.rt_score}</p>
        </div>
    );
}


export default Movie;