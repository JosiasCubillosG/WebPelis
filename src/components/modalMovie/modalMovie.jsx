import React from "react";
import "./modalMovie.css";

const ModalMovie = (props) => {
    return(
        <div className="modal">
            <h1>Name of the movie</h1>
            <p>Description of the movie</p>
            <button onClick={props.handleClick} className="modal-close" />
        </div>
    )
}

export default ModalMovie;