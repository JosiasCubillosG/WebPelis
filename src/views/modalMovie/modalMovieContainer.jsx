import React from "react";
import {createPortal} from "react-dom";

class ModalMovieContainer extends React.Component {
    render(){
        return createPortal (
            this.props.children,
            document.getElementById("modalMovie")
        )
    }
}

export default ModalMovieContainer;