import React from "react";
import Movie from "../components/movie";


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

    render(){
        if (this.state.loading){
            return "Loading...";
        }else if (this.state.error){
            return `${this.state.error}`;
        }

        return(
            <Movie movieData={this.state.movieData} />
        );
    }
}

export default App;
