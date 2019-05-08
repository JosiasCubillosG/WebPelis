import React from "react"
import "./styles/movies.css";


class Movie extends React.Component {

    render(){
        if(this.props.movieData.length === 0){
            return(
                <div>
                    <h3>No Movies were found</h3>
                </div>
            )
        }

        return(
            <div className="movie-container">
                <h1 className="movie-title">WebPelis</h1>
                {this.props.movieData.map((movie)=>{
                    return(
                        <div className="movie"  key={movie.id}>
                            <h3>{movie.title}</h3>
                            <p>Director: {movie.director}</p>
                            <p>Age: {movie.release_date}</p>
                            <p>Score: {movie.rt_score}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default Movie;