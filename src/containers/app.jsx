import React,{Component} from "react";
import Movies from "../components/movies";


class App extends Component {

    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async(e) => {
        this.setState({
            loading:true,
            error: null
        })
        try{
            const response = await fetch("https://ghibliapi.herokuapp.com/films");
            const data = await response.json();
            this.setState({
                loading: false,
                data
            })
        }catch(error){
            this.setState({
                loading: false,
                error
            })
        }
    }

    render(){
        if(this.state.loading){
            return "Loading...";
        }

        if(this.state.error){
            return `${this.state.error}`
        }
        return(
            <div>
                <Movies movies={this.state.data} />
            </div>
        )
    }
}

export default App;
