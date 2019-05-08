import React from "react";
import "./app.css";
import Movie from "../../components/movie/movie";


class App extends React.Component {

    state = {
        loading: true,
        error: null,
        movieData: undefined
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async(e) => {
        try{
            fetch('https://ghibliapi.herokuapp.com/films')
                .then(response => {
                    response.json()
                    .then( movieData => {
                        this.setState({ loading: false, movieData });
                    })
                });
        }catch(error){
            this.setState({
                loading: false,
                error
            })
        }
    }

    renderMovies = () => {
        return this.state.movieData.map((movie) => <Movie movieData={movie} />);
    }

    render(){
        if (this.state.loading){
            return "Loading...";
        }else if (this.state.error){
            return `${this.state.error}`;
        }

        return(
            <div>
                <h1 className="movie-title">WebPelis</h1>
                {this.renderMovies()}
            </div>
        )
        
    }
}

export default App;
