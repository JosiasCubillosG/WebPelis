import React from "react";
import Movie from "../../components/movie/movie";
import ModalMovieContainer from "../modalMovie/modalMovieContainer";
import ModalMovie from "../../components/modalMovie/modalMovie";
import "./movies.css";


class App extends React.Component {

    state = {
        loading: true,
        error: null,
        movieData: undefined,
        modalMovie: false,
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
        return this.state.movieData.map((movie) => <Movie handleClick={this.openModalMovie} key={movie.id} movieData={movie} />);
    }

    openModalMovie = () => {
        this.setState({
            modalMovie: true,
        })
    }

    closeModal = () => {
        this.setState({
            modalMovie: false,
        })
    }

    render(){
        if (this.state.loading){
            return "Loading...";
        }else if (this.state.error){
            return `${this.state.error}`;
        }

        return(
            <div className="movie-container" >
                <h3 className="movie-title">Movies</h3>
                {
                    this.renderMovies()
                }
                {
                    this.state.modalMovie &&
                    <ModalMovieContainer>
                        <ModalMovie handleClick={this.closeModal} /> 
                    </ModalMovieContainer>
                }
            </div>
        )
        
    }
}

export default App;
