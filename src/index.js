import React from "react"
import ReactDOM from "react-dom"
import "babel-polyfill"
import Routes from "./components/routes/routes";

const app = document.getElementById("app")
ReactDOM.render(<Routes/>,app)
