import React from "react";
import '../components/css/topbar.css';
import {BsSearch} from "react-icons/bs";
const TopBar = props => {
    return (
        <div className='topbar'>
            <div className='left'>
                <div className='apptitle'>Notes</div>
                <div className='total'>12</div>
            </div>
            <div className='right'>
                <input className='input' />
                <div className='search'>
                    <BsSearch />
                </div>
            </div>
        </div>
    );
}

export default TopBar;