import React,{Component} from "react"
import "./styles/movies.css";


class Movies extends Component {

    render(){
        if(this.props.movies.length === 0){
            return(
                <div>
                    <h3>No Movies were found</h3>
                </div>
            )
        }

        return(
            <div className="movie-container">
                <h1 className="movie-title">WebPelis</h1>
                {this.props.movies.map((movie)=>{
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


export default Movies;