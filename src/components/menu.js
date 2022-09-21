import React from "react";
import '../components/css/menu.css';
import { BsPlusLg, BsFillCheckCircleFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import MenuContainer from "./menucontainer";
const Menu = props => {
    return (
        <>
            <MenuContainer>
                <div className='pill'>
                    <div className='color new'>
                    </div>
                    <div className='color done'>
                        <BsFillCheckCircleFill className='check' />
                    </div>
                    <div className='color pending'></div>
                </div>
                <div className='button'>
                    <MdDarkMode />
                </div>
                <div className='button'>
                    <BsPlusLg />
                </div>
            </MenuContainer>
        </>
    );
}

export default Menu;