import React from "react";
import '../components/css/background.css';
const Background = props =>{
    return(
        <div className="bacKground">
            {props.children}
        </div>
    );
}

export default Background;