import React from "react";
import '../components/css/notes.css';
import { BsTrash } from "react-icons/bs";
import {MdOutlineModeEdit } from "react-icons/md";
const Notes = props => {
    return (
        <div className={props.status === "done" ?'note done active':props.status==="new"?'note new active':'note pending active' }>
            <div className='notetitle'>{props.title}</div>
            <div className='date'>{props.date}</div>
            <div className='content'>
               {props.note}
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