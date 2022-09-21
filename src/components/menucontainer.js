import React from "react";
import '../components/css/menucontainer.css';
const MenuContainer = props => {
    return (
        <>
            <div className='cut'></div>
            <div className='menu'>
               {props.children}
            </div>
        </>
    );
}

export default MenuContainer;