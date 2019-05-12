import React from "react";
import "./movies.css";

const Movie = ({movieData}) => {
    return(
        <div className="movie-container">
            <div className="movie" >
                <h3>{movieData.title}</h3>
                <p>Director: {movieData.director}</p>
                <p>Age: {movieData.release_date}</p>
                <p>Score: {movieData.rt_score}</p>
            </div>
        </div>
    );
}


export default Movie;