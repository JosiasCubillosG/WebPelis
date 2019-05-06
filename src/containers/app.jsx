import React,{Component} from "react";
import Movie from "../components/movie";


class App extends Component {

    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount(){
        console.log("componendidmount")
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
        {console.log("Render")}
        if(this.state.loading){
            return "Loading...";
        }

        if(this.state.error){
            return `${this.state.error}`
        }
        return(
            <div>
                <Movie data={this.state.data} />
            </div>
        )
    }
}

export default App;
