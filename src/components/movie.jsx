import React,{Component} from "react"


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
            <div>
                {this.props.data.map((movie)=>{
                    return(
                        <div key={movie.id}>
                            <h1>{movie.title}</h1>
                            <p>{movie.description}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default Movie;