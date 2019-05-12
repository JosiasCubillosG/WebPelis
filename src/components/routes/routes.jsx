import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import About from "../about/about";
import App from "../../views/app/app";
import Layout from "../layout/layout";


const Routes = () => {
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={About} /> 
                    <Route exact path="/movies/" component={App} /> 
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default Routes;