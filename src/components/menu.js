import React from "react";
import '../components/css/menu.css';
import { BsPlusLg } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import MenuContainer from "./menucontainer";
import MenuPillContainer from "./menupillcontainer";
const Menu = props => {
    return (
        <>
            <MenuContainer>
                <MenuPillContainer>
                    <div className="arrow" onClick={props.prev}>
                        <BiChevronLeftCircle />
                    </div>
                    <div className="arrow" onClick={props.next}>
                        <BiChevronRightCircle />
                    </div>
                </MenuPillContainer>
                <div className='button'>
                    <MdDarkMode />
                </div>
                <a href={`/addnote`}>
                    <div className='button'>
                        <BsPlusLg />
                    </div>
                </a>
            </MenuContainer>
        </>
    );
}

export default Menu;