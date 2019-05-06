import React,{Component} from "react"
import "./styles/movie.css";


class Movie extends Component {

    render(){
        if(this.props.data.length === 0){
            return(
                <div>
                    <h3>No Movies were found</h3>
                </div>
            )
        }

        return(
            <div className="Movie_container">
                <h1 className="Movie_title">WebPelis</h1>
                {this.props.data.map((movie)=>{
                    return(
                        <div className="Movie"  key={movie.id}>
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