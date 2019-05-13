import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import About from "../about/about";
import Movies from "../../views/movies/movies";
import Layout from "../layout/layout";
import NotFound from "../notFound/notFound";


function Routes(){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={About} /> 
                    <Route exact path="/movies/" component={Movies} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default Routes;