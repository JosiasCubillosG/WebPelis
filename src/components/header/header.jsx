import React from "react";
import "./header.css";
import {Link} from "react-router-dom"

const Header = () => {
    return(
        <div className="header-container" >
            <h1>WebPelis</h1>
            <ul className="header-ul" >
                <li>
                    <Link to="/" >About</Link>
                </li>
                <li>
                    <Link to="/movies">Movies</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;