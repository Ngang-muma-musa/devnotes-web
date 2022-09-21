import React from "react";
import '../components/css/notesholder.css';
const NotesHolder = props =>{
    return(
        <div className="notesholder">
            {props.children}
        </div>
    );
}

export default NotesHolder;