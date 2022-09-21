import React from "react";
import '../components/css/notes.css';
import { BsTrash } from "react-icons/bs";
import {MdOutlineModeEdit } from "react-icons/md";
const Notes = props => {
    return (
        <div className='note done'>
            <div className='notetitle'>DrinKs</div>
            <div className='date'> sep 14, 2022</div>
            <div className='content'>
                In JSX, JavaScript expressions are written inside curly braces, and since
                JavaScript objects also use curly braces, the styling in the example above is written inside
                two sets of curly braces In JSX, JavaScript expressions are written inside curly braces, and since JavaScript
                objects also use curly braces, the styling in the example above is written inside two sets of curly braces
            </div>
            <div className='delup'>
                <div className='edit icons'>
                    <BsTrash />
                </div>
                <div className='delete icons'>
                    <MdOutlineModeEdit />
                </div>
            </div>
        </div>
    );
}

export default Notes;