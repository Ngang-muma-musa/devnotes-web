import React from "react";
import '../components/css/menupillcontainer.css';
const MenuPillContainer = props =>{
    return(
        <div className="pill">
            {props.children}
        </div>
    );
}

export default MenuPillContainer;